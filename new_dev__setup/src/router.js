

  console.log('router')
const BooksText = { template: '<div>foo</div>' }

const router = new VueRouter({
  routes: [
    {path: '/books/:id', component: BooksText}
  ]
})
const app = new Vue({ router }).$mount('#app')