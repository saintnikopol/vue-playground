import  {findBookById} from '../books/books2.js';


export const BooksText = {
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

export default {BooksText};