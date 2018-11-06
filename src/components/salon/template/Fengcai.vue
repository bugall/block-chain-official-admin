<template>
    <ul class="f-l listab-2"><!-- Salon style  -->
        <div class="f-l lis-subteb">
            <ul class="c-box">
          	    <li @click="tabClick" data-type="wenzhang" class="f-l tab-item c-gray3" :class="tab === 'wenzhang' ? 'active' : ''">{{ $t("salon.wenzhang") }} </li>
          	    <li @click="tabClick" data-type="tupian" class="f-l tab-item c-gray3" :class="tab === 'tupian' ? 'active' : ''"> {{ $t("salon.tupian") }} </li>
            </ul>
            <div class="f-l products"><!-- Salon article  -->
                <div class="f-l div-item selected listab-2c" v-if="this.tab === 'wenzhang'">
                    <ul class="f-l showMoreNChildren" >
					    <li class="f-l" v-for="article in articleList" :key="article.id">
						    <a :href="`/#/salon/detail/${article.id}?type=salon,fengcai,wenzhang`" class="f-l pic">
							    <img :src="article.banner" class="f-l tran-sition" />
						    </a>
							<div class="f-l div-c"> 
							    <h2 class="f-l c-navy"> {{ article.title }} </h2>
							    <em class="f-l em tran-sition"></em>
							    <time class="f-l c-gray"> {{ article.btime }} ~ {{ article.etime }}  </time>
							</div>
						</li>										
                  	</ul>
                </div>
                <div class="f-l  div-item selected listab-2d" v-else-if="this.tab === 'tupian'"><!-- Salon pictures  -->
                    <ul class="f-l showMoreNChildren">
					    <li class="f-l" v-for="article in articleList" :key="article.id"> 
					      <div class="f-l pic">
					      	<img :src="article.banner" class="f-l" />
					    	  <div class="f-l div-c tran-sition transform-scale">
					    		  <h2 class="f-l c-white"> {{ article.title }} </h2>
					    	  </div>
					      </div>
					    </li>  
                  	</ul>
                </div>     	
            </div>           
        </div>
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
    </ul>
</template>

<script>
    import { getArticleList } from '@/services/CommonService';
    export default {
        data () {
            return {
                loading: true,
                tab: 'wenzhang',
                category: ['salon', 'fengcai'],
                articleList: [],
                totalItems: 0,
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
                    category: this.category.join(',') + `,${this.tab}`,
                    articleList: [],
                    page_size: this.perPage,
                    page: this.page
                }).then(res => {
                    this.articleList = res.body.data.list;
                    this.totalItems = res.body.data.total;
                });
            },
            tabClick (event) {
                this.tab = event.target.getAttribute('data-type');
                this._getArticleList();
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