<template>
    <main><!--main Start --> 
	    <section class="section-group lis-10 talent-ad">
		    <div class="container">
                <h2 class="f-l c-white" data-aos="zoom-in" data-aos-delay="200"> 区块链人才库  </h2>
                <h3 class="f-l c-white" data-aos="zoom-in" data-aos-delay="300"> 推动世界链，融合精英智慧  </h3>
		    </div>
			</section>
			<section class="section-group listab-box">
			    <div class="container">
                    <div class="c-box tab-box slide-tab">
      	                <div class="f-l hd bgc-white zh-tabhd-2">
                            <ul class="f-l">
          			            <li @click="navTabClick" :class="{on: this.currentTab === 'jishuchuangxin'}" data-type="jishuchuangxin" class="f-l c-gray3"> 技术创新中心 <em class="f-l em tran-sition transform-scale"></em></li>
          			            <li @click="navTabClick" :class="{on: this.currentTab === 'zhuanjiaweiyuan'}" data-type="zhuanjiaweiyuan" class="f-l c-gray3"> 专家委员会 <em class="f-l em tran-sition transform-scale"></em></li>
          			            <li @click="navTabClick" :class="{on: this.currentTab === 'xueshuweiyuan'}" data-type="xueshuweiyuan" class="f-l c-gray3"> 学术委员会 <em class="f-l em tran-sition transform-scale"></em></li>
          			            <li @click="navTabClick" :class="{on: this.currentTab === 'qukuairencai'}" data-type="qukuairencai" class="f-l c-gray3"> 区块链人才库 <em class="f-l em tran-sition transform-scale"></em></li>
          		            </ul>
      	                </div>
      	            </div>

          	        <div class="f-l bd">
                        <v-jishuchuangxin v-if="this.currentTab === 'jishuchuangxin'"></v-jishuchuangxin>
                        <v-qukuairencai v-else-if="this.currentTab === 'qukuairencai'"></v-qukuairencai>
                        <v-xueshuweiyuan v-else-if="this.currentTab === 'xueshuweiyuan'"></v-xueshuweiyuan>
                        <v-zhuanjiaweiyuan v-else-if="this.currentTab === 'zhuanjiaweiyuan'"></v-zhuanjiaweiyuan>
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

    export default {
        data () {
            return {
                search: '',
                currentTab: 'jishuchuangxin'
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
            vJishuchuangxin: jishuchuangxin,
            vQukuairencai: qukuairencai,
            VXueshuweiyuan: xueshuweiyuan,
            VZhuanjiaweiyuan: zhuanjiaweiyuan
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
