import  {findBooksByAuthor} from '../books/books2.js';

export const Authors = {
    computed: {
        shortList: function() {
            let shortList = findBooksByAuthor(this.author);
            return shortList;
        }
    },
    props: ['author'],
    // booksOfAuthor
    template: `
<div class="container">
  <h2>Автор книги</h2>
  {{author}}
  <ul>
    <li v-for="list in shortList">
    
          <router-link :to="/authors/ + list.author + /books/ + list.title + /id/ + list.id">
            {{list.title}}
          </router-link>
</li>
  </ul>
</div>`,
};

export default {Authors};