<template>
    <main><!--main Start --> 
			<section class="section-group lis-10 salon-ad">
				<div class="container">
                    <h2 class="f-l c-white" data-aos="zoom-in" data-aos-delay="200"> {{ $t("news.banner.first") }} </h2>
                    <h3 class="f-l c-white" data-aos="zoom-in" data-aos-delay="300">  {{ $t("news.banner.second") }} </h3>
				</div>
			</section>
			
			<section class="section-group listab-box">
				<div class="container">
          <div class="c-box tab-box slide-tab">
          	<div class="f-l hd bgc-white" :class="this._i18n.locale === 'en' ? 'en-tabhd-3' : 'zh-tabhd-3'">
          		<ul class="f-l">
          			<li @click="navTabClick" :class="{on: this.currentTab === 'hangyezixun'}" data-type="hangyezixun" class="f-l c-gray3"> {{ $t("news.hangye") }} <em class="f-l em tran-sition transform-scale"></em></li>
          			<li @click="navTabClick" :class="{on: this.currentTab === 'qukuailianzixun'}" data-type="qukuailianzixun" class="f-l c-gray3"> {{ $t("news.qukuailian") }} <em class="f-l em tran-sition transform-scale"></em></li>
          		</ul>
          	</div>
          	<div class="f-l bd"  style="min-height: 1000px">
                  <transition name="fade" mode="out-in">
                  <v-qukuailianzixun v-if="this.currentTab === 'qukuailianzixun' && !this.showDetail"></v-qukuailianzixun>
                  <v-hangyezixun v-else-if="this.currentTab === 'hangyezixun' && !this.showDetail"></v-hangyezixun>
                  <v-detail v-else-if="this.showDetail"></v-detail>
                  </transition>
          	</div>
          </div>
				</div>
			</section>		
    </main>
</template>

<script>
    import qukuailianzixun from './template/Qukuailianzixun.vue';
    import hangyezixun from './template/Hangyezixun.vue';
    import detail from '../ArticleDetail.vue';

    export default {
        data () {
            return {
                search: '',
                currentTab: 'hangyezixun',
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
                this.$router.push({path: '/news'});
                this.currentTab = element.target.getAttribute('data-type');
            },
            routeReset () {
                console.log(12313123, this.$route.params.id);
                if (this.$route.params.id) {
                    this.showDetail = true;
                }
            }
        },
        components: {
            vQukuailianzixun: qukuailianzixun,
            VHangyezixun: hangyezixun,
            vDetail: detail
        },
        watch: {
            '$route': 'routeReset'
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
