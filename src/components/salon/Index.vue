<template>
    <main><!--main Start --> 
			<section class="section-group lis-10 salon-ad">
				<div class="container">
                    <h2 class="f-l c-white" data-aos="zoom-in" data-aos-delay="200"> 链英沙龙 </h2>
                    <h3 class="f-l c-white" data-aos="zoom-in" data-aos-delay="300"> 精英交互的块链交互平台 </h3>
				</div>
			</section>
			
			<section class="section-group listab-box">
				<div class="container">
          <div class="c-box tab-box slide-tab">
          	<div class="f-l hd bgc-white zh-tabhd-1">
          		<ul class="f-l">
          			<li @click="navTabClick" :class="{on: this.currentTab === 'huodong'}" data-type="huodong" class="f-l c-gray3"> 沙龙活动 <em class="f-l em tran-sition transform-scale"></em></li>
          			<li @click="navTabClick" :class="{on: this.currentTab === 'jieshao'}" data-type="jieshao" class="f-l c-gray3"> 沙龙介绍 <em class="f-l em tran-sition transform-scale"></em></li>
          			<li @click="navTabClick" :class="{on: this.currentTab === 'fengcai'}" data-type="fengcai" class="f-l c-gray3"> 沙龙风采 <em class="f-l em tran-sition transform-scale"></em></li>
          			<li @click="navTabClick" :class="{on: this.currentTab === 'ziliao'}" data-type="ziliao" class="f-l c-gray3"> 沙龙资料 <em class="f-l em tran-sition transform-scale"></em></li>
          		</ul>
          	</div>
          	<div class="f-l bd">
                  <v-fengcai v-if="this.currentTab === 'fengcai'"></v-fengcai>
                  <v-huodong v-else-if="this.currentTab === 'huodong'"></v-huodong>
                  <v-jieshao v-else-if="this.currentTab === 'jieshao'"></v-jieshao>
                  <v-ziliao v-else-if="this.currentTab === 'ziliao'"></v-ziliao>
          	</div>
          </div>
				</div>
			</section>		
    </main>
</template>

<script>
    import fengcai from './template/Fengcai.vue';
    import huodong from './template/Huodong.vue';
    import jieshao from './template/Jieshao.vue';
    import ziliao from './template/Ziliao.vue';

    export default {
        data () {
            return {
                search: '',
                currentTab: 'huodong'
            };
        },
        created () {
        },
        mounted () {
            window.AOS.init();
        },
        methods: {
            clearInput () {
                this.setKeywords({keywords: ''});
            },
            navTabClick (element) {
                this.currentTab = element.target.getAttribute('data-type');
            }
        },
        components: {
            vFengcai: fengcai,
            vHuodong: huodong,
            VJieshao: jieshao,
            VZiliao: ziliao
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
