console.log('Привет');

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import  * as booksDatabase from './BooksDatabase.js';
let bookList = booksDatabase.default.bookList;
console.log({bookList},{booksDatabase})

//import BooksText from './views/BooksText.vue';
//import Authors from './views/Authors.vue';


const BooksText = {
  //methods: {
  //  idBook: function() {
  //    idB
  //    //this.message = 'обновлено'
  //    console.log(this.$el.id) // => 'не обновлено'
  //    //this.$nextTick(function() {
  //    //  console.log(this.$el.textContent) // => 'обновлено'
  //    //})
  //  },
  //},
  methods: {
    idBookFind: function() {
      console.log('idBook')
      var idBook = this.$el.id;
      //console.log(id);
      console.log(idBook, 'idBook')
    },
  },
  props:['text'],
  template: '<div><h2>Название книги</h2>{{text}}<div>Описание</div></div>',


}

const Authors = {
  props:['authors'],
  template: '<div><h2>Автор книги</h2> {{authors}}</div>'
}



const router = new VueRouter({

  routes: [

    {
      path: '/authors/:authors',
      component: Authors,
      props: true
    },
        {
          path: '/authors/:authors/books/:text/id/:id',
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
  router
}).$mount('#app')




