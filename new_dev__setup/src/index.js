console.log('Привет');

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
var Paginate = require('vuejs-paginate')
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
  props:['text', 'id'],
  template: '<div><h2>Название книги</h2>{{text}}<div>Описание</div><div>' +
  '{{description}}' +
  '</div></div>',


}

const Authors = {
  computed: {
    shortList: function () {
      let shortList = findBooksByAuthor(this.author);
      return shortList;

    }
  },
  props:['author'],
  // booksOfAuthor
  template: '<div><h2>Автор книги</h2> {{author}}' +
  '<ol >' +
  '<li v-for="list in shortList">{{list.booksName}}</li></ol></div>'
}

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

const app = new Vue({
  el:'#app',
  data:{
    bookList:bookList
  },
  computed:{
    visibleList: function(){
      let startVisiblList = '0';
        let endVisiblList = '15';
       return this.bookList.slice(startVisiblList,endVisiblList);
}
  },
  methods: {
    clickCallback: function(pageNum) {
      //console.log(bookList, 'clickCallback');
      let endList = pageNum * '15';
      let startList = endList - '15';
      //console.log(bookList, 'clickCallback',endList,startList);
      let newArrayBooks = this.bookList.slice(startList, endList);
    },

  },
  router
}).$mount('#app')




