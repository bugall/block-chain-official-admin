<template>
    <div>
    <ul class="f-l listab-3"><!-- Salon data  -->
        <div class="f-l div-c showMoreNChildren">
            <li class="f-l" v-for="article in articleList" :key="article.id">
            	<img src="static/images/pic/t4-1.png" class="" />
            	<h2 class="f-l c-navy"> {{ article.title }} </h2>
            	<a :href="article.resource_url" target="_blank" :download="article.resource_url" class="f-l c-gray2 c-green-h"> 资料下载   </a>
              <time class="f-l c-gray"> 上传时间： {{ article.btime }} </time>
            </li>
        </div>
        
    </ul>
    <div class="page-box">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="page"
                :page-size="perPage"
                layout="prev, pager, next, jumper"
                :total="totalItems">
            </el-pagination>
        </div> 
    </div>
</template>

<script>
    import { getArticleList } from '@/services/CommonService';
    export default {
        data () {
            return {
                category: ['salon', 'ziliao'],
                loading: true,
                articleList: [],
                totalItems: 20,
                page: 1,
                perPage: 10
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
                    category: this.category.join(','),
                    page_size: this.perPage,
                    page: this.page
                }).then(res => {
                    this.articleList = res.body.data.list;
                    this.totalItems = res.body.data.total;
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