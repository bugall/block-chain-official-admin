<template>
    <main><!--main Start --> 
			<section class="section-group lis-10 salon-ad">
				<div class="container">
                    <h2 class="f-l c-white" data-aos="zoom-in" data-aos-delay="200"> 新闻咨询 </h2>
                    <h3 class="f-l c-white" data-aos="zoom-in" data-aos-delay="300">  掌握世界街区的信息链，把握信息的脉搏 </h3>
				</div>
			</section>
			
			<section class="section-group listab-box">
				<div class="container">
          <div class="c-box tab-box slide-tab">
          	<div class="f-l hd bgc-white zh-tabhd-3">
          		<ul class="f-l">
          			<li @click="navTabClick" :class="{on: this.currentTab === 'hangyezixun'}" data-type="hangyezixun" class="f-l c-gray3"> 行业资讯 <em class="f-l em tran-sition transform-scale"></em></li>
          			<li @click="navTabClick" :class="{on: this.currentTab === 'qukuailianzixun'}" data-type="qukuailianzixun" class="f-l c-gray3"> 区块链资讯 <em class="f-l em tran-sition transform-scale"></em></li>
          		</ul>
          	</div>
          	<div class="f-l bd">
                  <v-qukuailianzixun v-if="this.currentTab === 'qukuailianzixun'"></v-qukuailianzixun>
                  <v-hangyezixun v-else-if="this.currentTab === 'hangyezixun'"></v-hangyezixun>
          	</div>
          </div>
				</div>
			</section>		
    </main>
</template>

<script>
    import qukuailianzixun from './template/Qukuailianzixun.vue';
    import hangyezixun from './template/Hangyezixun.vue';

    export default {
        data () {
            return {
                search: '',
                currentTab: 'hangyezixun'
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
            vQukuailianzixun: qukuailianzixun,
            VHangyezixun: hangyezixun
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
