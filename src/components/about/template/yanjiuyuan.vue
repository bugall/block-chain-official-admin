<template>
<ul class="f-l listab-11"><!-- Research Institute -->
   <div class="ql-container"> 
                		    <div class="ql-editor" v-html="article.content">
                            </div>	
                        </div>
</ul>  
</template>

<script>
    import { getArticleList } from '@/services/CommonService';
    export default {
        data () {
            return {
                category: ['about', 'jieshao'],
                loading: true,
                article: {}
            };
        },
        mounted () {
            this._getArticleList();
        },

        watch: { },
        methods: {
            _getArticleList () {
                getArticleList({
                    status: 1,
                    category: this.category.join(',')
                }).then(res => {
                    this.article = res.body.data.list[0];
                });
            },
            handleSizeChange (val) {
                this.perPage = val;
            },
            handleCurrentChange (val) {
                this.page = val;
                this._getArticleList();
            }
        },
        components: { }
    };
</script>

<style scoped>