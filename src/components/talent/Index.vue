<template>
    <main><!--main Start --> 
	    <section class="section-group lis-10 talent-ad">
		    <div class="container">
                <h2 class="f-l c-white" data-aos="zoom-in" data-aos-delay="200">  {{ $t("talent.banner.first") }}  </h2>
                <h3 class="f-l c-white" data-aos="zoom-in" data-aos-delay="300">  {{ $t("talent.banner.second") }} </h3>
		    </div>
			</section>
			<section class="section-group listab-box">
			    <div class="container">
                    <div class="c-box tab-box slide-tab">
      	                <div class="f-l hd bgc-white" :class="this._i18n.locale === 'en' ? 'en-tabhd-2' : 'zh-tabhd-2'">
                            <ul class="f-l">
          			            <li @click="navTabClick" :class="{on: this.currentTab === 'jishuchuangxin'}" data-type="jishuchuangxin" class="f-l c-gray3">  {{ $t("talent.chuangxin") }} <em class="f-l em tran-sition transform-scale"></em></li>
          			            <li @click="navTabClick" :class="{on: this.currentTab === 'zhuanjiaweiyuan'}" data-type="zhuanjiaweiyuan" class="f-l c-gray3">  {{ $t("talent.zhuanjia") }} <em class="f-l em tran-sition transform-scale"></em></li>
          			            <li @click="navTabClick" :class="{on: this.currentTab === 'xueshuweiyuan'}" data-type="xueshuweiyuan" class="f-l c-gray3">  {{ $t("talent.xueshu") }} <em class="f-l em tran-sition transform-scale"></em></li>
          			            <li @click="navTabClick" :class="{on: this.currentTab === 'qukuairencai'}" data-type="qukuairencai" class="f-l c-gray3">  {{ $t("talent.rencai") }} <em class="f-l em tran-sition transform-scale"></em></li>
          		            </ul>
      	                </div>
      	            </div>

          	        <div class="f-l bd" style="min-height: 1000px; width: 100%">
                          <transition name="fade" mode="out-in">
                        <v-jishuchuangxin v-if="this.currentTab === 'jishuchuangxin' && !this.showDetail"></v-jishuchuangxin>
                        <v-qukuairencai v-else-if="this.currentTab === 'qukuairencai' && !this.showDetail"></v-qukuairencai>
                        <v-xueshuweiyuan v-else-if="this.currentTab === 'xueshuweiyuan' && !this.showDetail"></v-xueshuweiyuan>
                        <v-zhuanjiaweiyuan v-else-if="this.currentTab === 'zhuanjiaweiyuan' && !this.showDetail"></v-zhuanjiaweiyuan>
                        <v-detail v-else-if="this.showDetail"></v-detail>
                        </transition>
          	        </div>
      	        </div>
			</section>		
    </main><!--main End --> 
</template>
          		

<script>
    import jishuchuangxin from './template/Jishuchuangxin.vue';
    import qukuairencai from './template/Qukuairencai.vue';
    import xueshuweiyuan from './template/Xueshuweiyuan.vue';
    import zhuanjiaweiyuan from './template/Zhuanjiaweiyuan.vue';
    import detail from '../TalentDetail.vue';

    export default {
        data () {
            return {
                search: '',
                currentTab: 'jishuchuangxin',
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
                this.$router.push({path: '/talent'});
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
            vJishuchuangxin: jishuchuangxin,
            vQukuairencai: qukuairencai,
            VXueshuweiyuan: xueshuweiyuan,
            VZhuanjiaweiyuan: zhuanjiaweiyuan,
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
