console.log('Привет');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
var Paginate = require('vuejs-paginate');
Vue.component('paginate', Paginate);

import  * as booksDatabase from './BooksDatabase.js';
import styles from './css/styles.scss';

let {bookList, findBookById, findBooksByAuthor, creadNewArrayList, greadstartBooksList}  = booksDatabase.default;
//console.log({bookList},{booksDatabase});

//import BooksText from './views/BooksText.vue';
//import Authors from './views/Authors.vue';
//let newArrayBooks = newArrayBooks;

const BooksText = {
  computed: {
    description: function () {
      let book = findBookById(this.id);
      if (book) {
        return book.description;
      } else {
        return '';
      }
    }
  },
  props: ['text', 'id'],
  template: '' +
    '<div>' +
      '<h2>Название книги</h2>{{text}}' +
      '<div>Описание</div>' +
    '<div>' +
      '{{description}}' +
    '</div></div>',
};

const Authors = {
  computed: {
    shortList: function () {
      let shortList = findBooksByAuthor(this.author);
      return shortList;
    }
  },
  props:['author'],
  // booksOfAuthor
  template: '<div>' +
    '<h2>Автор книги</h2>' +
      '{{author}}' +
    '<ol >' +
      '<li v-for="list in shortList">{{list.booksName}}</li>' +
    '</ol>' +
  '</div>',
};

const router = new VueRouter({

  routes: [

    {
      path: '/authors/:author',
      component: Authors,
      props: true
    },
    {
      path: '/authors/:author/books/:text/id/:id',
      component: BooksText,
      props: true,
    }

  ]
});

const itemsPerPage = 5;
const pageCount = Math.ceil(bookList.length / itemsPerPage);
let pageNum = 1; // 0..max

function calcLastItemIndex (pageNum) {
  let lastPossibleItem = pageNum * itemsPerPage;
  console.log(pageNum , 'pageNum ');
  console.log(lastPossibleItem , 'calcLastItemIndex ');
  return lastPossibleItem < bookList.length ? lastPossibleItem : bookList.length;
}

const app = new Vue({
  el:'#app',
  data: {
    bookList: bookList,
    pageCount: pageCount,
    currentPageNumber: pageNum,

  },
  computed: {
    visibleList: function() {
      let startVisibleList = (this.currentPageNumber - 1) * itemsPerPage;
      let endVisibleList = calcLastItemIndex(this.currentPageNumber);

      return this.bookList.slice(startVisibleList, endVisibleList);
    },
  },
  methods: {
    clickCallback: function(newPageNum) {
      this.currentPageNumber = newPageNum;
    },

  },
  router
}).$mount('#app');




