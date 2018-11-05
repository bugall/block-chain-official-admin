<template>
<main><!--main Start --> 
			<section class="section-group lis-10 areas-ad">
				<div class="container">
          <h2 class="f-l c-white" data-aos="zoom-in" data-aos-delay="200"> 研究领域 </h2>
          <h3 class="f-l c-white" data-aos="zoom-in" data-aos-delay="300"> 把握行业发展脉搏，深耕场景链接未来  </h3>
				</div>
			</section>
			
			<section class="section-group listab-box">
				<div class="container">
          <div class="f-l c-box tab-box">
          	<div class="f-l hd bgc-white zh-tabhd-7">
          		<ul class="f-l">
          			<li class="f-l c-gray3 on"> 研究领域   <em class="f-l em tran-sition transform-scale"></em></li>
          		</ul>
          	</div>
				    <div class="c-box lis-11">
	            <div class="c-box slide-menu">
		            <h2 class="f-l c-navy"> 区块链应用场景研究 </h2>
		          	<h3 class="f-l c-gray" data-type="jinrong" @click="navTabClick" :class="currentTab === 'jinrong' ? 'on' : ''">
                          <i data-type="jinrong" class="f-l iconfont i-l"> &#xe89d; </i>
                          <span data-type="jinrong"  class="f-l"> 街区链与金融  </span>
                          <i data-type="jinrong"  class="iconfont f-r i-r tran-sition"> &#xe629; </i>
                    </h3>
		          	<ul class="f-l" v-if="currentTab === 'jinrong'">
		          		<li class="f-l bgc-gray2">
		          		  <div class="c-box">
			          		  <p class="f-l p-text c-gray3">
                                    <div class="ql-container"> 
                		                <div class="ql-editor" v-html="this.article.content">
                                        </div>	
                                    </div>
			          		  </p>
		          		  </div>
		          		</li>
		          	</ul>
		          	<h3 class="f-l c-gray" data-type="puhuijinrong" @click="navTabClick"  :class="currentTab === 'puhuijinrong' ? 'on' : ''">
                          <i data-type="puhuijinrong" class="f-l iconfont i-l"> &#xe636; </i>
                          <span data-type="puhuijinrong" class="f-l"> 区块链与普惠金融  </span>
                          <i data-type="puhuijinrong" class="iconfont f-r i-r tran-sition"> &#xe629; </i>
                    </h3>
		          	<ul class="f-l" v-if="currentTab === 'puhuijinrong'">
		          		<li class="f-l bgc-gray2">
		          		  <div class="c-box">
			          		  <p class="f-l p-text c-gray3">
								<div class="ql-container"> 
                		                <div class="ql-editor" v-html="this.article.content">
                                        </div>	
                                    </div>
			          		  </p>
		          		  </div>
		          		</li>
		          	</ul>       
		          	<h3 class="f-l c-gray" data-type="nongye" @click="navTabClick($event)" :class="currentTab === 'nongye' ? 'on' : ''">
                          <i data-type="nongye" class="f-l iconfont i-l"> &#xe61b; </i>
                          <span data-type="nongye" class="f-l"> 街区链与农业资源数字化  </span>
                          <i data-type="nongye" class="iconfont f-r i-r tran-sition"> &#xe629; </i>
                    </h3>
		          	<ul class="f-l"  v-if="currentTab === 'nongye'">
		          		<li class="f-l bgc-gray2">
		          		  <div class="c-box">
			          		  <p class="f-l p-text c-gray3">
											<div class="ql-container"> 
                		                <div class="ql-editor" v-html="this.article.content">
                                        </div>	
                                    </div>
			          		  </p>
		          		  </div>
		          		</li>
		          	</ul>     
		          	<h3 class="f-l c-gray" data-type="jiaoyu" @click="navTabClick" :class="currentTab === 'jiaoyu' ? 'on' : ''" >
                          <i data-type="jiaoyu" class="f-l iconfont i-l"> &#xe615; </i>
                          <span data-type="jiaoyu" class="f-l"> 街区链与教育  </span>
                          <i data-type="jiaoyu" class="iconfont f-r i-r tran-sition"> &#xe629; </i>
                    </h3>
		          	<ul class="f-l" v-if="currentTab === 'jiaoyu'">
		          		<li class="f-l bgc-gray2">
		          		  <div class="c-box">
			          		  <p class="f-l p-text c-gray3">
												<div class="ql-container"> 
                		                <div class="ql-editor" v-html="this.article.content">
                                        </div>	
                                    </div> 
			          		  </p>
		          		  </div>
		          		</li>
		          	</ul>  
		          	<h3 class="f-l c-gray" data-type="jiankang" @click="navTabClick($event)"  :class="currentTab === 'jiankang' ? 'on' : ''">
                          <i data-type="jiankang" class="f-l iconfont i-l"> &#xe67e; </i>
                          <span data-type="jiankang" class="f-l"> 区块链与健康  </span>
                          <i data-type="jiankang" class="iconfont f-r i-r tran-sition"> &#xe629; </i>
                    </h3>
		          	<ul class="f-l"  v-if="currentTab === 'jiankang'">
		          		<li class="f-l bgc-gray2">
		          		  <div class="c-box">
			          		  <p class="f-l p-text c-gray3">
										<div class="ql-container"> 
                		                <div class="ql-editor" v-html="this.article.content">
                                        </div>	
                                    </div> 
			          		  </p>
		          		  </div>
		          		</li>
		          	</ul>  
		          	<h3 class="f-l c-gray" data-type="chanquan" @click="navTabClick($event)" :class="currentTab === 'chanquan' ? 'on' : ''">
                          <i data-type="chanquan" class="f-l iconfont i-l"> &#xe60b; </i>
                          <span data-type="chanquan" class="f-l"> 街区链与知识产权保护  </span>
                          <i data-type="chanquan" class="iconfont f-r i-r tran-sition"> &#xe629; </i>
                    </h3>
		          	<ul class="f-l"  v-if="currentTab === 'chanquan'">
		          		<li class="f-l bgc-gray2">
		          		  <div class="c-box">
			          		  <p class="f-l p-text c-gray3">
											<div class="ql-container"> 
                		                <div class="ql-editor" v-html="this.article.content">
                                        </div>	
                                    </div> 
			          		  </p>
		          		  </div>
		          		</li>
		          	</ul>  
		          	<h3 class="f-l c-gray" data-type="zhengfu" @click="navTabClick($event)"  :class="currentTab === 'zhengfu' ? 'on' : ''">
                          <i data-type="zhengfu" class="f-l iconfont i-l"> &#xe61a; </i>
                          <span data-type="zhengfu" class="f-l"> 街区链与政府 </span>
                          <i data-type="zhengfu" class="iconfont f-r i-r tran-sition"> &#xe629; </i>
                    </h3>
		          	<ul class="f-l"  v-if="currentTab === 'zhengfu'">
		          		<li class="f-l bgc-gray2">
		          		  <div class="c-box">
			          		  <p class="f-l p-text c-gray3">
													<div class="ql-container"> 
                		                <div class="ql-editor" v-html="this.article.content">
                                        </div>	
                                    </div> 
			          		  </p>
		          		  </div>
		          		</li>
		          	</ul>    
		          	<h2 class="f-l c-navy"> 区块链与新一代信息技术结合方式研究 </h2>      	
		          	<h3 class="f-l c-gray" data-type="wulianwang" @click="navTabClick($event)" :class="currentTab === 'wulianwang' ? 'on' : ''">
                          <i data-type="wulianwang" class="f-l iconfont i-l"> &#xe670; </i>
                          <span data-type="wulianwang" class="f-l"> 区块链与物联网 </span>
                          <i data-type="wulianwang" class="iconfont f-r i-r tran-sition"> &#xe629; </i>
                    </h3>
		          	<ul class="f-l"  v-if="currentTab === 'wulianwang'">
		          		<li class="f-l bgc-gray2">
		          		  <div class="c-box">
			          		  <p class="f-l p-text c-gray3">
									<div class="ql-container"> 
                		                <div class="ql-editor" v-html="this.article.content">
                                        </div>	
                                    </div> 
			          		  </p>
		          		  </div>
		          		</li>
		          	</ul>
		          	<h3 class="f-l c-gray" data-type="yunjisuan" @click="navTabClick($event)" :class="currentTab === 'yunjisuan' ? 'on' : ''">
                          <i data-type="yunjisuan" class="f-l iconfont i-l"> &#xee21; </i>
                          <span data-type="yunjisuan" class="f-l"> 区块链与云计算 </span>
                          <i data-type="yunjisuan" class="iconfont f-r i-r tran-sition"> &#xe629; </i>
                    </h3>
		          	<ul class="f-l"  v-if="currentTab === 'yunjisuan'">
		          		<li class="f-l bgc-gray2">
		          		  <div class="c-box">
			          		  <p class="f-l p-text c-gray3">
											<div class="ql-container"> 
                		                <div class="ql-editor" v-html="this.article.content">
                                        </div>	
                                    </div> 
			          		  </p>
		          		  </div>
		          		</li>
		          	</ul>       
		          	<h3 class="f-l c-gray" data-type="dashuju" @click="navTabClick($event)" :class="currentTab === 'dashuju' ? 'on' : ''">
                          <i data-type="dashuju" class="f-l iconfont i-l"> &#xe74e; </i>
                          <span data-type="dashuju" class="f-l"> 区块链接与大数据 </span>
                          <i data-type="dashuju" class="iconfont f-r i-r tran-sition"> &#xe629; </i>
                    </h3>
		          	<ul class="f-l"  v-if="currentTab === 'dashuju'">
		          		<li class="f-l bgc-gray2">
		          		  <div class="c-box">
			          		  <p class="f-l p-text c-gray3">
                                	<div class="ql-container"> 
                		                <div class="ql-editor" v-html="this.article.content">
                                        </div>	
                                    </div> 
			          		  </p>
		          		  </div>
		          		</li>
		          	</ul>                
	            </div>
          	</div>
          </div>
				</div>
			</section>		
    </main><!--main End -->
</template>
          		

<script>
    import { getArticleList } from '@/services/CommonService';
    export default {
        data () {
            return {
                search: '',
                currentTab: 'jinrong',
                article: {}
            };
        },
        created () {
        },
        mounted () {
            window.AOS.init();
        },
        methods: {
            _getArticleList () {
                getArticleList({
                    status: 1,
                    category: `quyuyanjiu,${this.currentTab}`
                }).then(res => {
                    this.article = res.body.data.list[0] || {};
                });
            },
            clearInput () {
                this.setKeywords({keywords: ''});
            },
            navTabClick (element) {
                if (element.target.getAttribute('data-type') === this.currentTab) {
                    return;
                }
                this.article = {};
                this.currentTab = element.target.getAttribute('data-type');
                this._getArticleList();
            }
        },
        components: {
        }
    };
</script>

<style scoped>
    .header-wrap {
        width: 100%;
        height: 60px;
        background: rgb(84, 92, 100);
        margin: auto;
        position: fixed;
        z-index: 100;
        top: 0px;
    }
    .header-wrap .el-col {
        height: 100%;
    }
    .header-wrap .brand img {
        width: 70px;
        margin-top: 10px;
    }

    .nav-menu-item-right {
        float: right !important;
    }
    .el-menu-item {
        text-align: center;
    }
    .slide-menu h3 {
        cursor: pointer;
    }
    

</style>
<style>
    .popuper {
        margin-left: -20px;
    }
    .popuper .el-menu--popup {
        min-width: 140px !important;
    }
</style>
