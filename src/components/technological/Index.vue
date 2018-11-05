<template>
    <main><!--main Start --> 
	    <section class="section-group lis-10 technological-ad">
		    <div class="container">
                <h2 class="f-l c-white" data-aos="zoom-in" data-aos-delay="200"> {{ $t("technological.banner.first") }} </h2>
                <h3 class="f-l c-white" data-aos="zoom-in" data-aos-delay="300"> {{ $t("technological.banner.second") }}  </h3>
		    </div>
			</section>
			<section class="section-group listab-box">
			    <div class="container">
                    <div class="c-box tab-box slide-tab">
      	                <div class="f-l hd bgc-white" :class="this._i18n.locale === 'en' ? 'en-tabhd-3' : 'zh-tabhd-3'">
                            <ul class="f-l">
          			            <li @click="navTabClick" :class="{on: this.currentTab === 'jinghua'}" data-type="jinghua" class="f-l c-gray3"> {{ $t("technological.jinghua") }} <em class="f-l em tran-sition transform-scale"></em></li>
          			            <li @click="navTabClick" :class="{on: this.currentTab === 'xianfeng'}" data-type="xianfeng" class="f-l c-gray3"> {{ $t("technological.xianfeng") }} <em class="f-l em tran-sition transform-scale"></em></li>
          		            </ul>
      	                </div>
      	            </div>

          	        <div class="f-l bd" style="min-height: 1000px; width: 100%">
                        <v-jishujinghua v-if="this.currentTab === 'jinghua' && !this.showDetail"></v-jishujinghua>
                        <v-kejixianfeng v-else-if="this.currentTab === 'xianfeng' && !this.showDetail"></v-kejixianfeng>
                        <v-detail v-else-if="this.showDetail"></v-detail>
          	        </div>
      	        </div>
			</section>		
    </main><!--main End --> 
</template>
          		

<script>
    import jishujinghua from './template/Jishujinghua.vue';
    import kejixianfeng from './template/Kejixianfeng.vue';
    import detail from '../ArticleDetail.vue';

    export default {
        data () {
            return {
                search: '',
                currentTab: 'jinghua',
                showDetail: false
            };
        },
        created () {
        },
        mounted () {
            if (this.$route.params.id) {
                this.showDetail = true;
            }
            window.AOS.init();
        },
        methods: {
            clearInput () {
                this.setKeywords({keywords: ''});
            },
            navTabClick (element) {
                this.showDetail = false;
                this.$router.push({path: '/technological'});
                this.currentTab = element.target.getAttribute('data-type');
            },
            routeReset () {
                if (this.$route.params.id) {
                    this.showDetail = true;
                }
            }
        },
        watch: {
            '$route': 'routeReset'
        },
        components: {
            vJishujinghua: jishujinghua,
            vKejixianfeng: kejixianfeng,
            vDetail: detail
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
    

</style>
<style>
    .popuper {
        margin-left: -20px;
    }
    .popuper .el-menu--popup {
        min-width: 140px !important;
    }
</style>
