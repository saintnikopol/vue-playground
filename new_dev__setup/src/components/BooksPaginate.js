
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
       :container-class="'btn-group'"
       :page-class="'btn btn-secondary'"
       :prev-class="'btn btn-secondary'"
       :next-class="'btn btn-secondary'">
   </paginate>
</div>`,
};

export default {BooksPaginate}