import  {findBookById} from '../books/books2.js';


export const BooksText = {
    props: ['text', 'id', 'description'],
    computed: {
        description: function() {
            let book = findBookById(this.id);
            console.log("let book = findBookById(this.id); book  === ", book);
            if (book) {
                return book.description;
            } else {
                return '';
            }
        }
    },

    template: `
<div class="container">
  <h2>Название книги</h2>
  {{text}}
  <div>Описание</div>
  
  <div>
    {{description}}
  </div>
</div>`,
};

export default {BooksText};