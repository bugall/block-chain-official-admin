<template>
    <div>
    <ul class="f-l listab-7"><!-- Technology First  -->
		<div class="f-l div-c showMoreNChildren">
		    <li class="f-l" v-for="article in articleList" :key="article.id">
		    	<div class="l-box">
		    	  <a :href="`/#/technological/detail/${article.id}?type=kejiqianyan,xianfeng`" class="f-l pic">
		    		  <img :src="article.banner" class="f-l img tran-sition" />
		    	  </a>
		    	</div>
		    	<div class="r-box">
		    	  <h2 class="f-l c-navy">  {{ article.title }} </h2>
		    	  <time class="f-l c-gray"> {{ article.btime }} </time>
		    	</div>
		    	<div class="c-box">
		    	  <em class="f-l em tran-sition"></em>
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
                category: ['kejiqianyan', 'xianfeng'],
                loading: true,
                articleList: [],
                totalItems: 0,
                page: 1,
                perPage: 16
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