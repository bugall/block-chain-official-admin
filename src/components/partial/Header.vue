<template>
    <header class="" data-aos="slide-down" data-aos-delay="300">
	  	<div class="header-right-nav"><i class="f-l iconfont nav-boxopen c-white c-white-h"> &#xe667; </i><i class="f-l iconfont nav-boxclose c-white c-white-h"> &#xe667; </i></div>
		  <div class="top-header tran-sition">
	      <div class="f-l header-c">
		      <div class="l-box"><a href="#" class="f-l t-logo"><img src="static/images/t-logo.png" class="f-l" /></a></div>
		       <div class="r-box">                
				 	<nav class="f-l">
              <a  @click="navTabClick" data-type="index"  class="f-l c-white" :class="{current: currentTab=='index'}">  {{ $t("header.index") }} <em class="em tran-sition transform-scale"></em></a> 
              <a  @click="navTabClick" data-type="salon" class="f-l c-white" :class="{current: currentTab=='salon'}"> {{ $t("header.salon") }} <em class="em tran-sition transform-scale"></em></a> 
              <a  @click="navTabClick" data-type="talent" class="f-l c-white" :class="{current: currentTab=='talent'}" > {{ $t("header.talent") }} <em class="em tran-sition transform-scale"></em></a> 
              <a  @click="navTabClick" data-type="areas" class="f-l c-white" :class="{current: currentTab=='areas'}"> {{ $t("header.yanjiu") }} <em class="em tran-sition transform-scale"></em></a>
              <a  @click="navTabClick" data-type="technological" class="f-l c-white" :class="{current: currentTab=='technological'}"> {{ $t("header.qianyan") }} <em class="em tran-sition transform-scale"></em></a>
              <a  @click="navTabClick" data-type="news" class="f-l c-white" :class="{current: currentTab=='news'}"> {{ $t("header.news") }} <em class="em tran-sition transform-scale"></em></a>
              <a  @click="navTabClick" data-type="about" class="f-l c-white" :class="{current: currentTab=='about'}"> {{ $t("header.about") }} <em class="em tran-sition transform-scale"></em></a>
            </nav>
				    <div class="f-l lang-box"> 	 
				    <a @click="switchLanguage" class="f-l c-white c-green-h"><img :src="`static/images/pic/${this.language === 'zh' ? 'English' : 'China'}-pic.jpg`" class="f-l pic" /> {{ this.language === 'zh' ? 'English' : '中文'}} </a> 
			    </div>
		      </div>
	      </div> 
      </div>  
	</header>	
    
</template>

<script>
    import { mapGetters } from 'vuex';
    import { get_item, set_item } from '@/services/CommonService';

    const routerMapping = {
        '0': '/',
        '4': '/aboutus',
        '5': '/login',
        '6': '/login',
        '2-2': '/manage'
    };
    export default {
        data () {
            return {
                search: '',
                currentTab: 'index',
                language: 'zh'
            };
        },
        mounted () {
            const tmp = get_item('language');
            this.language = tmp || this.language;
            this._i18n.locale = this.language;
        },
        created () {
        },
        computed: {
            ...mapGetters({
                userInfo: 'userInfo'
            })
        },
        watch: {
            'keywords' () {
                if (this.keywords !== this.search) {
                    this.search = this.keywords;
                }
            }
        },
        methods: {
            navTabClick (element) {
                const router = this.$router;
                this.currentTab = element.target.getAttribute('data-type');
                router.push({path: `/${this.currentTab}`});
            },
            handleSelect (index) {
                const router = this.$router;
                router.push({path: routerMapping[index]});
                this.activeIndex = index;
            },
            eventChanged () {
                this.search = this.search.replace(/(^\s*)|(\s*$)/g, '');
                this.setKeywords({keywords: this.search});
            },
            switchLanguage (locale) {
                this.language = this.language === 'zh' ? 'en' : 'zh';
                set_item('language', this.language);
                this._i18n.locale = this.language;
            },
            clearInput () {
                this.setKeywords({keywords: ''});
            }
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
