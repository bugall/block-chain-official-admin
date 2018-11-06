<template>
    <div>
        <Loading v-show="loading"></Loading>
           	<main><!--main Start --> 
			<section class="section-group lis-1">
				<div class="container">
          <h2 class="f-l c-white" data-aos="zoom-in" data-aos-delay="200"> {{ $t("index.banner.first") }} </h2>
          <h3 class="f-l c-green"  data-aos="zoom-in" data-aos-delay="300"> Open research, chaining block chain worldentrance, Hui Hui is the world's leading industry leader. </h3>
				  <div class="animation-box" data-aos="zoom-in" data-aos-delay="400">
				    <img src="static/images/animation1-1.png"  class="f-l animation1-img" />
				    <img src="static/images/animation1-2.png"  class="f-l animation2-img" />
				    <img src="static/images/animation1-3.png"  class="f-l animation3-img" />
				    <img src="static/images/animation1-4.png"  class="f-l animation4-img" />
				    <img src="static/images/animation1-5.png"  class="f-l animation5-img" />
				    <img src="static/images/animation1-6.png"  class="f-l animation6-img" />
				    <img src="static/images/animation1-7.png"  class="f-l animation7-img" />
				    <img src="static/images/animation1-8.png"  class="f-l animation8-img" />
				  	<img src="static/images/animation1-9.png"  class="f-l animation9-img" />
				  	<img src="static/images/animation1-10.png" class="f-l animation10-img" />
				  	<img src="static/images/animation1-11.png" class="f-l animation11-img" />
				  </div>
				</div>
			</section>
			
			<section class="section-group lis-2">
				<div class="container">
          <h1 class="f-l c-navy"><i class="iconfont c-blue1 lis-icon"> &#xe9f8; </i> {{ $t("header.salon") }} </h1>
					<div class="c-box">
						<a href="/#/salon" class="r-more c-white tran-sition"> {{ $t("common.backWatch") }} </a>
					</div>        
          <h3 class="f-l c-gray">
          	{{ $t("index.salonDetail") }}
          </h3>
          <div class="c-box">
          	<div class="l-box lis-2l" data-aos="zoom-in" data-aos-delay="200">
          		<h2 class="f-l c-navy"> 
          			{{ $t("index.joinDetail") }}
              </h2>
              <a href="#" class="btn-1 bgc-blue1 bgc-green1-h c-white tran-sition"> {{ $t("index.joinApply") }} </a>
              <time class="f-l c-gray"> 2017-08-20 14:00 ~ 2017-08-20 18:00  </time>
          	</div>
          	<div class="r-box" data-aos="zoom-in" data-aos-delay="300">
          		<div class="animation-box">
          			<img src="static/images/animation2-1.png"  class="f-l     animation1-img" />
          			<img src="static/images/animation2-2.png"  class="f-l img animation2-img" />
          			<img src="static/images/animation2-3.png"  class="f-l img animation3-img" />
          			<img src="static/images/animation2-4.png"  class="f-l img animation4-img" />
          			<img src="static/images/animation2-5.png"  class="f-l img animation5-img" />
          		</div>
          	</div>   	
          </div>
				</div>
			</section>
			
 			<section class="section-group lis-3">
				<div class="container">
          <h1 class="f-l c-navy"><i class="iconfont c-blue1 lis-icon"> &#xe6bc; </i> {{ $t("index.fengcai") }} </h1>
					<div class="c-box">
						<a href="/#/salon" class="r-more c-white tran-sition"> {{ $t("common.more") }}  <i class="iconfont"> &#xe606; </i></a>
					</div> 
					<div class="c-box">
						<ul class="f-l">
							<li class="f-l" data-aos="zoom-in" data-aos-delay="200" v-for="article in salonFengcai" :key="article.key">
								<a :href="`/#/salon/detail/${article.id}?type=salon,fengcai,wenzhang`" class="f-l pic">
									<img :src="article.banner" class="f-l tran-sition" />
								</a>
								<div class="f-l lis-3c"> 
								  <h2 class="f-l c-navy"> {{ article.title }} </h2>
								  <em class="f-l em tran-sition"></em>
								  <time class="f-l c-gray bgc-blue4"> {{ article.btime }} ~ {{ article.etime }}  </time>
								</div>
							</li>
						</ul>
					</div> 
				</div>
			</section>
			
 			<section class="section-group lis-4">
				<div class="container">
          <h1 class="f-l c-navy"><i class="iconfont c-blue1 lis-icon"> &#xe643; </i> {{ $t("index.zixun") }} </h1>
					<div class="c-box">
						<a href="/#/news" class="r-more c-white tran-sition"> {{ $t("common.more") }}  <i class="iconfont"> &#xe606; </i></a>
					</div> 
					<div class="c-box" data-aos="fade-right" data-aos-delay="200">
						<ul class="f-l">							
							<li class="f-l" v-for="article in newsZixun" :key="article.id">
								<div class="l-box">
								  <a :href="`/#/news/detail/${article.id}?type=xinwenzhongxin,qukuailian`" class="f-l pic">
									  <img :src="article.banner" class="f-l img tran-sition" />
								  </a>
								  <time class="f-l c-gray"> {{ article.btime }}  </time>
								</div>
								<div class="r-box">
								  <h2 class="f-l c-navy"> {{ article.title }} </h2>
								  <p class="f-l c-gray p-text">
                                    {{ article.description }}
								  </p>
								  <a :href="`/#/news/detail/${article.id}?type=xinwenzhongxin,hangye`" class="f-r c-green r-more1"> Read More </a>
								</div>
								<div class="c-box"><em class="f-l em tran-sition"></em></div>
							</li>
						</ul>
					</div> 
				</div>
			</section>
			
 			<section class="section-group lis-5">
				<div class="container">
          <h1 class="f-l c-white"><i class="iconfont lis-icon"> &#xe89d; </i> {{ $t("index.hangyezixun") }} </h1>
					<div class="c-box">
						<a href="/#/news" class="r-more c-white tran-sition"> {{ $t("common.more") }}  <i class="iconfont"> &#xe606; </i></a>
					</div> 
					<div class="c-box" data-aos="fade-left" data-aos-delay="200">
						<div class="l-box">
							<ul class="f-l">
								<li class="f-l" v-for="article in newsHangye" :key="article.id">
									<a :href="`/#/news/detail/${article.id}?type=xinwenzhongxin,hangye`" class="f-l">
										<em class="f-l em-t bgc-cyan tran-sition"></em>
										<h2 class="f-l c-white"> {{ article.title }} </h2>
										<p class="f-l p-text c-gray1">
                                            {{ article.description }}
										</p>
										<time class="f-l c-gray1"> {{ article.btime }}  </time>
										<em class="f-l em-b bgc-cyan tran-sition"></em>
									</a>
								</li>
							</ul>
						</div>
						<div class="r-box">
						  <img src="static/images/pic/a5-1.png" class="f-l img" />
						</div>		
					</div>
				</div>
			</section>
			
 			<section class="section-group lis-6">
				<div class="container">
          <h1 class="f-l c-navy"><i class="iconfont lis-icon"> &#xe607; </i> {{ $t("index.zhuanjia") }} </h1>
					<div class="c-box">
						<a href="/#/talent" class="r-more c-white tran-sition"> {{ $t("common.more") }} <i class="iconfont"> &#xe606; </i></a>
					</div> 
					<div class="c-box">
					  <ul class="f-l">
					    <li class="f-l" data-aos="zoom-in" data-aos-delay="400" v-for="talent in zhuanjia" :key="talent.id">
						    <div class="f-l lis-6t">
						      <h3 class="f-l c-navy"> {{ talent.title }} </h3>
						      <p class="f-l c-gray p-text"> 
                                  {{ talent.description }}
						      </p>
						      <a :href="`/#/talent/detail/${talent.id}?type=0`" class="f-l c-green r-more1"> Read More </a>
						      <div class="f-l em-box">
						        <em class="f-l em-tl bgc-green tran-sition"></em>
						        <em class="f-l em-br bgc-green tran-sition"></em>
						      </div>
					      </div>
						    <div class="f-l lis-6b bgc-white">
					        <a :href="`/#/talent/detail/${talent.id}?type=0`" class="f-l pic"><img :src="talent.avatar" class="f-l"/></a>
						      <div class="r-box">
						        <h2 class="f-l c-navy"> {{ talent.name }} </h2>
						        <span class="f-l c-gray"> {{ talent.job }} </span>
					        </div>
						    </div>
					    </li>
					  </ul>		
					</div> 
				</div>
			</section>
			
 			<section class="section-group lis-7">
				<div class="container">
          <h1 class="f-l c-navy"><i class="iconfont c-blue1 lis-icon"> &#xe9b4; </i> {{ $t("index.jinghua") }} </h1>
					<div class="c-box">
						<a href="/#/technological" class="r-more c-white tran-sition"> {{ $t("common.more") }}  <i class="iconfont"> &#xe606; </i></a>
					</div> 
					<div class="c-box">
						<ul class="f-l">
							<li class="f-l" data-aos="zoom-in" data-aos-delay="200" v-for="article in jinghua" :key="article.id">
								<a :href="`/#/technological/detail/${article.id}?type=kejiqianyan,jinghua`" class="f-l pic">
									<img :src="article.banner" class="f-l tran-sition" />
								</a>
								<div class="f-l lis-3c"> 
								  <h2 class="f-l c-navy"> {{ article.title }} </h2>
								  <em class="f-l em tran-sition"></em>
								</div>
							</li>
						</ul>
					</div> 
				</div>
			</section>
			
 			<section class="section-group lis-8">
				<div class="container">
				  <h1 class="f-l c-navy"><i class="iconfont c-blue1 lis-icon"> &#xe67f; </i> {{ $t("index.join") }}</h1>
					<div class="c-box" data-aos="zoom-in" data-aos-delay="200">
          	<div class="l-box lis-8l">
          		<h2 class="f-l c-navy"> {{ $t("index.huiju") }} </h2>
          		<h3 class="f-l c-gray"> {{ $t("index.huijudetail") }} </h3>
              <a href="/#/about" class="btn-1 bgc-blue1 bgc-green1-h c-white tran-sition"> {{ $t("index.go") }} </a>
          	</div>
						<div class="r-box">
							<div class="animation-box">
							  <img src="static/images/animation8-1.png" class="f-l     animation1-img" />
							  <img src="static/images/animation8-2.png" class="f-l img animation2-img" />
							  <img src="static/images/animation8-3.png" class="f-l img animation3-img" />
							  <img src="static/images/animation8-4.png" class="f-l img animation4-img" />
							  <img src="static/images/animation8-5.png" class="f-l img animation5-img" />
							  <img src="static/images/animation8-6.png" class="f-l img animation6-img" />
								<img src="static/images/animation8-7.png" class="f-l img animation7-img" />
								<img src="static/images/animation8-8.png" class="f-l img animation8-img" />
							  <img src="static/images/animation8-9.png" class="f-l img animation9-img " /> 
							</div>
						</div>
					</div> 
				</div>
			</section>
			
 			<section class="section-group lis-9">
				<div class="container">
          <h1 class="f-l c-white"><i class="iconfont lis-icon"> &#xe697; </i> {{ $t("index.youqing") }} </h1>
					<div class="c-box">
					  <ul class="f-l">
					  	<li class="f-l" data-aos="zoom-in" data-aos-delay="200"><a href="#" class="f-l pic-img"><img src="static/images/pic/a9-1.png"  class="f-l tran-sition" /></a></li>
					  	<li class="f-l" data-aos="zoom-in" data-aos-delay="400"><a href="#" class="f-l pic-img"><img src="static/images/pic/a9-2.png"  class="f-l tran-sition" /></a></li>
					  	<li class="f-l" data-aos="zoom-in" data-aos-delay="600"><a href="#" class="f-l pic-img"><img src="static/images/pic/a9-3.png"  class="f-l tran-sition" /></a></li>
					  	<li class="f-l" data-aos="zoom-in" data-aos-delay="800"><a href="#" class="f-l pic-img"><img src="static/images/pic/a9-4.png"  class="f-l tran-sition" /></a></li>
					  </ul>
					</div> 
				</div>
			</section>
    </main>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import { getArticleList, getTalentList } from '@/services/CommonService';
    export default {
        data () {
            return {
                loading: true,
                salonFengcai: [],
                newsZixun: [],
                newsHangye: [],
                zhuanjia: [],
                jinghua: []
            };
        },
        computed: { },

        mounted () {
            window.AOS.init();
            this._getSalonArticle();
            this._getZixunArticle();
            this._getHangyeArticle();
            this._getZhuanjiaArticle();
            this._getJinghuaArticle();
        },

        destroyed () {
        },
        watch: { },
        methods: {
            ...mapActions({
                setKeywords: 'setKeywords'
            }),
            _getSalonArticle () {
                getArticleList({
                    status: 1,
                    category: ['salon', 'fengcai', 'wenzhang'],
                    page: 1,
                    page_size: 3
                }).then(res => {
                    this.salonFengcai = res.body.data.list;
                });
            },
            _getZixunArticle () {
                getArticleList({
                    status: 1,
                    category: ['xinwenzhongxin', 'qukuailian'],
                    page: 1,
                    page_size: 4
                }).then(res => {
                    this.newsZixun = res.body.data.list;
                });
            },
            _getHangyeArticle () {
                getArticleList({
                    status: 1,
                    category: ['xinwenzhongxin', 'hangye'],
                    page: 1,
                    page_size: 3
                }).then(res => {
                    this.newsHangye = res.body.data.list;
                });
            },
            _getZhuanjiaArticle () {
                getTalentList({
                    status: 1,
                    category: '0',
                    page: 1,
                    page_size: 3
                }).then(res => {
                    this.zhuanjia = res.body.data.list;
                });
            },
            _getJinghuaArticle () {
                getArticleList({
                    status: 1,
                    category: ['kejiqianyan', 'jinghua'],
                    page: 1,
                    page_size: 3
                }).then(res => {
                    this.jinghua = res.body.data.list;
                });
            }
        },
        components: { }
    };
</script>

<style scoped>
   
</style>