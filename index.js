
console.log('Привет');
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const BooksText = {
  template: '<div> jjjj</div>'
}
const Authors = {
  template: '<div>dddddddd</div>'
}


//const routes = [
//  { path: '/text', component: BooksText },
//  { path: '/author', component: Authors }
//]


const router = new VueRouter({

  routes: [
    { path: './text', component: BooksText },
    { path: './author', component: Authors }
  ]
})

const app = new Vue({
  el:'#app',
 data: {
    todos:[
      {id:'1',booksName:'Война и мир', author:'Лев Толстой'},
      {id:'2',booksName:'«Автостопом по галактике» ', author:'Дуглас Адамс'},
      {id:'3',booksName:'«Алиса в Стране чудес»', author:'Льюис Кэрролл'},
      {id:'4',booksName:'«Алхимик» ', author:'Пауло Коэльо'},
      {id:'5',booksName:'«Белый пик»', author:'Энтони Хоровитц'},
      {id:'6',booksName:'«Большие надежды»', author:'Чарльз Диккенс'},
      {id:'7',booksName:'«Винни-Пух и все-все-все»', author:'Алан Милн'},
      {id:'8',booksName:'«Властелин колец»', author:'Джон Р. Р. Толкин'},
      {id:'9',booksName:'«Грозовой перевал»', author:'Эмили Бронте'},
      {id:'10',booksName:'«Дети полуночи» ', author:'Салман Рушди'},
      {id:'11',booksName:'«Дневник Бриджит Джонс»', author:'Хелен Филдинг'},
      {id:'12',booksName:'«Женщина в белом»', author:' Уильям Уилки Коллинз'}

    ]
 },
  router
}).$mount('#app')




