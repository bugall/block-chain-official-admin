<template>
    <div>
        <div class="pageBox">
            <span class="btn_page page_pre" @click="prePage"></span>
            <slot :pageList="pageList" :prePage="prePage" :nextPage="nextPage" :goto="goto">
                <ul class="page_list" v-for="item in pageList" :key="item.no">
                    <li :class="{'page_lsit_active' : item.curr }" @click="goto(item.no)">{{item.no}}</li>
                </ul>
            </slot>
            <span class="btn_page page_next" @click="nextPage"></span>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'page-nation',
        props: {
            totalItems: {
                type: Number,
                required: true,
                default: 1
            },
            defaultCurrPage: {
                type: Number,
                default: 1
            },
            perPage: {
                type: Number,
                required: true,
                default: 1
            },
            totalPages: {
                type: Number,
                default: 5
            }
        },
        created () { },
        data () {
            return {
                maxPage: 1,
                currpage: this.defaultCurrPage
            };
        },
        watch: {
            defaultCurrPage: function () {
                this.currpage = this.defaultCurrPage;
            }
        },
        methods: {
            nextPage () {
                if (this.maxPage === this.currpage) {
                    return false;
                }
                this.currpage = this.currpage + 1;
                this.$emit('changeEvent', this.currpage);
            },
            prePage () {
                if (this.currpage <= 1) {
                    return false;
                }
                this.currpage = this.currpage - 1;
                this.$emit('changeEvent', this.currpage);
            },
            goto (pageNum) {
                this.currpage = pageNum;
                this.$emit('changeEvent', this.currpage);
            }
        },
        computed: {
            pageList: function () {
                if (this.currpage / this.offset) {
                    this.maxPage = Math.ceil(this.totalItems / this.perPage);
                }
                if (this.currpage > this.maxPage && this.maxPage) {
                    // 当前页大于最大页，默认置为最大页
                    this.currpage = this.maxPage;
                }
                if (this.currpage < 1) {
                    this.currpage = 1;
                }
                let i = 1;
                let pages = [];
                for (; i <= this.maxPage; i++) {
                    pages.push({
                        no: i,
                        curr: (i === this.currpage)
                    });
                }
                let showPages = this.totalPages - 2;
                let halfShowPages = Math.ceil(showPages / 2); // 两边各取一半
                let startPage = 0;
                let endPage = this.maxPage + 1;
                if (this.maxPage > this.totalPages) {
                    if (this.currpage === 1) {
                        startPage = 2;
                        endPage = startPage + showPages - 1;
                    } else if (this.currpage === this.maxPage) {
                        endPage = this.maxPage - 1;
                        startPage = this.maxPage - 1 - showPages + 1;
                    } else if (this.currpage <= (this.maxPage / 2)) {
                        // 前一半页码
                        let prevHave = this.currpage - 2;
                        if (prevHave > halfShowPages) {
                            prevHave = halfShowPages;
                        }
                        startPage = this.currpage - prevHave;
                        endPage = this.currpage + showPages - prevHave - 1;
                    } else {
                        // 后一半页码
                        let nextHave = this.maxPage - 1 - this.currpage; // 4
                        if (nextHave > halfShowPages) {
                            nextHave = halfShowPages;
                        }
                        startPage = this.currpage - showPages + nextHave + 1;
                        endPage = this.currpage + nextHave;
                    }
                }
                // 过滤需要显示的页码
                let pageArr = pages.filter(res => {
                    if (res.no === 1 || res.no === this.maxPage || (startPage <= res.no && res.no <= endPage)) {
                        return true;
                    } else {
                        return false;
                    }
                });
                return pageArr;
            }
        }
    };
</script>
<style scoped>
</style>