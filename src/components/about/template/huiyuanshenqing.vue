<template>
<ul class="f-l listab-13"><!-- Membership Application -->
                <div class="c-box">
                	<div class="r-box animat-l">
                		<div class="animation-box">
                			<img src="static/images/animation3-1.png"  class="f-l     animation1-img" />
                			<img src="static/images/animation3-2.png"  class="f-l img animation2-img" />
                			<img src="static/images/animation3-3.png"  class="f-l img animation3-img" />
                			<img src="static/images/animation3-4.png"  class="f-l img animation4-img" />
                			<img src="static/images/animation3-5.png"  class="f-l img animation5-img" />
                			<img src="static/images/animation3-6.png"  class="f-l img animation6-img" />
                			<img src="static/images/animation3-7.png"  class="f-l img animation7-img" />
                			<img src="static/images/animation3-8.png"  class="f-l img animation8-img" />
                			<img src="static/images/animation3-9.png"  class="f-l img animation9-img" />
                		</div>
                	</div>  	
                	<div class="l-box">
                		<h2 class="f-l c-navy"> {{ $t("about.qunchengyuan") }}   </h2>
                		<h3 class="f-l c-navy"> {{ $t("about.qunquanli") }}  </h3>
                        
                        <div class="ql-container"> 
                		    <div class="ql-editor" v-html="group.content">
                            </div>	
                        </div>
                		<a :href="group.resource_url" target="_blank" :download="group.resource_url" class="btn-2 bgc-green c-white bgc-blue1-h btn-download"> {{ $t("about.shenqingxiazai") }} </a>
                	</div>
                	<div class="r-box animat-r">
                		<div class="animation-box">
                			<img src="static/images/animation3-1.png"  class="f-l     animation1-img" />
                			<img src="static/images/animation3-2.png"  class="f-l img animation2-img" />
                			<img src="static/images/animation3-3.png"  class="f-l img animation3-img" />
                			<img src="static/images/animation3-4.png"  class="f-l img animation4-img" />
                			<img src="static/images/animation3-5.png"  class="f-l img animation5-img" />
                			<img src="static/images/animation3-6.png"  class="f-l img animation6-img" />
                			<img src="static/images/animation3-7.png"  class="f-l img animation7-img" />
                			<img src="static/images/animation3-8.png"  class="f-l img animation8-img" />
                			<img src="static/images/animation3-9.png"  class="f-l img animation9-img" />
                		</div>
                	</div>     	
                </div>	
                <div class="c-box listab-13b">
                	<div class="l-box">
                		<div class="animation-box">
                			<img src="static/images/animation4-1.png"  class="f-l     animation1-img" />
                			<img src="static/images/animation4-2.png"  class="f-l img animation2-img" />
                			<img src="static/images/animation4-3.png"  class="f-l img animation3-img" />
                			<img src="static/images/animation4-4.png"  class="f-l img animation4-img" />
                			<img src="static/images/animation4-5.png"  class="f-l img animation5-img" />
                			<img src="static/images/animation4-6.png"  class="f-l img animation6-img" />
                			<img src="static/images/animation4-7.png"  class="f-l img animation7-img" />
                			<img src="static/images/animation4-8.png"  class="f-l img animation8-img" />
                			<img src="static/images/animation4-9.png"  class="f-l img animation9-img" />
                		</div>
                	</div>                	
                	<div class="r-box">
                		<h2 class="f-l c-navy"> {{ $t("about.gerenshenqing") }}   </h2>
                		<h3 class="f-l c-navy"> {{ $t("about.gerenquanli") }}   </h3>
                		<div class="ql-container"> 
                		    <div class="ql-editor" v-html="person.content">
                            </div>	
                        </div>
                		<a :href="person.resource_url"  target="_blank" :download="person.resource_url" class="btn-2 bgc-green c-white bgc-blue1-h btn-download"> {{ $t("about.shenqingxiazai") }}  </a>
                	</div>    	
                </div>	         
          		</ul>          		
</template>

<script>
    import { getArticleList } from '@/services/CommonService';
    export default {
        data () {
            return {
                loading: true,
                group: {},
                person: {}
            };
        },
        watch: { },
        methods: {
            _getArticleList () {
                getArticleList({
                    status: 1,
                    category: ['about', 'shenqing', 'qunchengyuan'].join(','),
                    page_size: 1,
                    page: 1
                }).then(res => {
                    this.group = res.body.data.list[0] || {};
                });
                getArticleList({
                    status: 1,
                    category: ['about', 'shenqing', 'gerenhuiyuan'].join(','),
                    page_size: 1,
                    page: 1
                }).then(res => {
                    this.person = res.body.data.list[0] || {};
                });
            }
        },
        mounted () {
            this._getArticleList();
        },
        components: { }
    };
</script>

<style scoped>