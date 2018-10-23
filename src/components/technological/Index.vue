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
      	                <div class="f-l hd bgc-white zh-tabhd-3">
                            <ul class="f-l">
          			            <li @click="navTabClick" :class="{on: this.currentTab === 'jishujinghua'}" data-type="jishujinghua" class="f-l c-gray3"> 技术精华 <em class="f-l em tran-sition transform-scale"></em></li>
          			            <li @click="navTabClick" :class="{on: this.currentTab === 'kejixianfeng'}" data-type="kejixianfeng" class="f-l c-gray3"> 科技先锋 <em class="f-l em tran-sition transform-scale"></em></li>
          		            </ul>
      	                </div>
      	            </div>

          	        <div class="f-l bd">
                        <v-jishujinghua v-if="this.currentTab === 'jishujinghua'"></v-jishujinghua>
                        <v-kejixianfeng v-else-if="this.currentTab === 'kejixianfeng'"></v-kejixianfeng>
          	        </div>
      	        </div>
			</section>		
    </main><!--main End --> 
</template>
          		

<script>
    import jishujinghua from './template/Jishujinghua.vue';
    import kejixianfeng from './template/Kejixianfeng.vue';

    export default {
        data () {
            return {
                search: '',
                currentTab: 'jishujinghua'
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
            vJishujinghua: jishujinghua,
            vKejixianfeng: kejixianfeng
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
