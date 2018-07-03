//console.log('Привет');
// require('popper');

// require('jquery');
//
// require('bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
var Paginate = require('vuejs-paginate');
Vue.component('paginate', Paginate);

import  * as booksDatabase from './books/books2.js';
import styles from './css/styles.scss';

import {BooksAuthorsList} from './components/BooksAuthorsList';
import {BooksText} from './components/BooksText';
import {BooksPaginate} from './components/BooksPaginate';
import {Authors} from './components/Authors';

let {bookList, findBookById, findBooksByAuthor, creadNewArrayList, greadstartBooksList}  = booksDatabase.default;


Vue.component('books-paginate', BooksPaginate);
Vue.component('books-text', BooksText);
Vue.component('authors', Authors);
Vue.component('books-authors-list',BooksAuthorsList);


const router = new VueRouter({

  routes: [
    {
      path: '/list/',
      component: BooksAuthorsList,
      props: {someObjectToPass: {bookList: bookList}},

/*      children: [
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
      ]*/
    },
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
});

router.replace('/list');
const app = new Vue({
  el: '#app',

  router
}).$mount('#app');



