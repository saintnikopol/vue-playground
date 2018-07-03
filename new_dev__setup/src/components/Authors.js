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
<div>
  <h2>Автор книги</h2>
  {{author}}
  <ul>
    <li v-for="list in shortList">{{list.title}}</li>
  </ul>
</div>`,
};

export default {Authors};