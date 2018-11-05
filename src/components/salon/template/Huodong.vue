	
<template>
    <div>
    <ul class="f-l listab-1"><!-- Salon activity  -->
        <div class="f-l div-c showMoreNChildren">
          <li class="f-l" v-for='article in articleList' :key="article.id">
          	<div class="l-box">
          		<a :href="`/#/salon/detail/${article.id}?type=salon,huodong`" class="f-l pic"><em class="f-l em bgc-gray2"></em><img :src="article.banner" class="f-r" /></a>
          		<h4 class="f-l c-gray"> {{ article.title }} </h4>
          	</div>
            
          	<div class="r-box">
          		<h2 class="f-l c-navy"> {{ article.title }} </h2>
          		<p class="f-l p-text c-gray">
                    {{ article.description }}
          		</p>
          		<time class="f-l c-navy"><span class="f-l c-gray"> {{ $t("common.time") }}: </span>  {{ article.btime }} ~ {{ article.etime }}  </time>
          		<address class="f-l c-navy">
          		  <span class="f-l c-gray"> {{ $t("common.address") }}: </span> {{ article.address }}
          		</address>
          		<a :href="`/#/salon/detail/${article.id}?type=salon,huodong`" class="f-l tran-sition btn-activitystart">{{ $t("common.detail") }} </a>
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
                category: ['salon', 'huodong'],
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