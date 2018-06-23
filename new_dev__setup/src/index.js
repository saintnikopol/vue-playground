//console.log('Привет');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
var Paginate = require('vuejs-paginate');
Vue.component('paginate', Paginate);

import  * as booksDatabase from './BooksDatabase.js';
import styles from './css/styles.scss';

let {bookList, findBookById, findBooksByAuthor, creadNewArrayList, greadstartBooksList}  = booksDatabase.default;


//import BooksText from './views/BooksText.vue';
//import Authors from './views/Authors.vue';
//let newArrayBooks = newArrayBooks;
const itemsPerPage = 5;
const pageCount = Math.ceil(bookList.length / itemsPerPage);
let pageNum = 1; // 0..max

function calcLastItemIndex(pageNum) {
  let lastPossibleItem = pageNum * itemsPerPage;
  //console.log(pageNum, 'pageNum ');
  //console.log(lastPossibleItem, 'calcLastItemIndex ');
  return lastPossibleItem < bookList.length ? lastPossibleItem : bookList.length;
}


const BooksAuthorsList = {
  data: function(){
    return {
      bookList: bookList,
      pageCount: pageCount,
      currentPageNumber: pageNum,
      //visibleList:visibleList
    }
  },
  props: [
    'someObjectToPass'
  ],
  computed: {
    visibleList: function() {
      let startVisibleList = (this.currentPageNumber - 1) * itemsPerPage;
      let endVisibleList = calcLastItemIndex(this.currentPageNumber);

      return this.someObjectToPass.bookList.slice(startVisibleList, endVisibleList);
      console.log(visibleList, 'visibleList');
    },
  },
  methods: {
    clickCallback: function(newPageNum) {
      this.currentPageNumber = newPageNum;
    },

  },
  template: `<div>
  <ol>
    <li v-for="todo in visibleList" class="">


      <router-link :to="'/authors/' + todo.author" >
        {{todo.author}}
        </router-link>


      <router-link :to="'/authors/' + todo.author + '/books/' + todo.booksName + '/id/' + todo.id">
        {{todo.booksName}}
      </router-link>

    </li >
  </ol>
  <router-view></router-view>

</div>`,

};

//const Paginate = {
//  template: '<div>'+
//    '<paginate' +
//  ':page-count="pageCount"' +
//  ':page-range="3"' +
//  ':margin-pages="1"' +
//  ':click-handler="clickCallback"' +
//  ':prev-text="Prev"' +
//  ':next-text="Next"' +
//  ':container-class="pagination"' +
//  ':page-class="page-item"' +
//  ':prev-class="previous"' +
//  ':next-class="nexts">' +
//  '</paginate>' +
//    '</div>'
//};

Vue.component('paginate',Paginate);

const BooksText = {
  props: ['text', 'id'],
  computed: {
    description: function() {
      let book = findBookById(this.id);
      if (book) {
        return book.description;
      } else {
        return '';
      }
    }
  },

  template: `
<div>
  <h2>Название книги</h2>
  {{text}}
  <div>Описание</div>
  <div>
    {{description}}
  </div>
</div>`,
};

//Vue.component('books-text', BooksText);
//Vue.component('authors', Authors);

const Authors = {
  computed: {
    shortList: function() {
      let shortList = findBooksByAuthor(this.author);
      return shortList;
    }
  },
  props: ['author'],
  // booksOfAuthor
  template: "<div>\
  <h2>Автор книги</h2>\
  {{author}}\
  <ol >\
    <li v-for=\"list in shortList\">{{list.booksName}}</li>\
  </ol>\
</div>",
};

const router = new VueRouter({


  routes: [
    {
      path: '/list/',
      component: BooksAuthorsList,
      props: {someObjectToPass: {bookList: bookList}},

      children: [
        {
          path: '/authors/:author',
          component: Authors,
          props: true,
        },
        {
          path: '/authors/:author/books/:text/id/:id',
          component: BooksText,
          props: true,
        }
      ]
    },
]
});


const app = new Vue({
  el: '#app',
  router
}).$mount('#app');



