import  {bookList} from '../books/books2.js';
// import { BooksText } from './BooksText';

const itemsPerPage = 15;
const pageCount = Math.ceil(bookList.length / itemsPerPage);
let initialPageNum = 1; // 0..max

function calcLastItemIndex(pageNum) {
    let lastPossibleItem = pageNum * itemsPerPage;
    //console.log(pageNum, 'pageNum ');
    //console.log(lastPossibleItem, 'calcLastItemIndex ');
    return lastPossibleItem < bookList.length ? lastPossibleItem : bookList.length;
}


export const BooksAuthorsList = {
    data: function() {
        return {
            bookList: bookList,
            pageCount: pageCount,
            currentPageNumber: initialPageNum,
            //visibleList:visibleList
        }
    },
    props: [
        'someObjectToPass'
    ],
    computed: {
        visibleList: function() {
            let startVisibleList = (this.currentPageNumber - 1) * itemsPerPage;
            let endVisibleList = calcLastItemIndex(this.currentPageNumber);

            return this.someObjectToPass.bookList.slice(startVisibleList, endVisibleList);

        },
    },
    methods: {
      clickCallback: function(newPageNum) {
        this.currentPageNumber = newPageNum;
      },
      onPageNumChanged: function (newPageNum) {
        this.currentPageNumber = newPageNum;
      }
    },
    template: `
<div>
  <ul>
    <li v-for="todo in visibleList" class="">

      <router-link :to="/authors/ + todo.author" >
        {{todo.author}}
      </router-link>

      <router-link :to="/authors/ + todo.author + /books/ + todo.title + /id/ + todo.id">
        {{todo.title}}
      </router-link>

    </li>
  </ul>
  <router-view></router-view>
  
  <books-paginate
    :page-count="pageCount"
    :page-num="currentPageNumber"
    v-on:page-num-changed="onPageNumChanged"
  ></books-paginate>
</div>`,

};

export default {BooksAuthorsList};