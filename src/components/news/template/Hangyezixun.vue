<template>
    <div>
    <ul class="f-l listab-9"><!-- Industry Information  -->
        <div class="f-l div-c showMoreNChildren">
    		<li class="f-l bgcgray1-h" v-for="article in articleList" :key="article.id">
    			<div class="f-l div-c">
    				<a :href="`/#/news/detail/${article.id}?type=xinwenzhongxin,hangye`" class="f-l ">
    					<em class="f-l em-t bgc-green tran-sition"></em>
    					<h2 class="f-l c-navy"> {{ article.title }} </h2>
    					<p class="f-l p-text c-gray">
                            {{ article.description }}
    					</p>
    					<time class="f-l c-gray3"> {{ new Date(article.btime).format('yyyy-MM-dd') }}  </time>
    					<em class="f-l em-b bgc-green tran-sition"></em>
    				</a>
    			</div>
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
                category: ['xinwenzhongxin', 'hangye'],
                loading: true,
                articleList: [],
                totalItems: 0,
                page: 1,
                perPage: 15
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