
export const BooksPaginate = {
    props: {
        'pageNum': Number,
        'pageCount': Number,
    },
    data: function() {
        return {
            currentPageNumber: this.pageNum,
        }
    },
    methods: {
        clickCallback: function(newPageNum) {
            this.currentPageNumber = newPageNum;
            this.$emit('page-num-changed', newPageNum);
        },
    },
    template: `
<div>
   <paginate
       :page-count="pageCount"
       :page-range="10"
       :margin-pages="1"
       :click-handler="clickCallback"
       :prev-text="'Prev'"
       :next-text="'Next'"
       :container-class="'pagination'"
       :page-class="'page-item'"
       :prev-class="'previous'"
       :next-class="'nexts'">
   </paginate>
</div>`,
};

export default {BooksPaginate}