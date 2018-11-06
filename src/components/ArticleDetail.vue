<template>
<div style="width: 100%">
    <div class="f-c div-item selected listab-2c" style="width: 100%">
    	<ul class="f-l lis-listab-d1" style="width: 100%"> 
            <div class="f-l sub-title bdr-b" style="width: 100%">
                <h2 class="f-l c-navy"><em class="em-1"></em> {{ article.title }} </h2>
                <span class="f-l c-gray"> Release time：{{ article.created_at}}  </span>
            </div>              

    	</ul>
    </div>

        <div class="c-box">
                <div class="ql-container"> 
                    <div class="ql-editor" v-html="article.content">
                    </div>	
                </div>	
        </div>
</div>
</template>

<script>
    import { getArticleList } from '@/services/CommonService';
    export default {
        name: 'detail',
        data () {
            return {
                category: '',
                loading: true,
                article: {},
                id: 0
            };
        },
        mounted () {
            this.category = this.$route.query.type;
            this.id = this.$route.params.id;
            this._getArticleList();
        },
        watch: { },
        methods: {
            _getArticleList () {
                getArticleList({
                    id: this.id,
                    category: this.category
                }).then(res => {
                    console.log(res);
                    this.article = res.body.data.list[0];
                });
            }
        },
        components: { }
    };
</script>

<style scoped>
    @media screen and (max-width: 720px){
        .ql-container img {
            width: 100% !important;
        }
    }
</style>