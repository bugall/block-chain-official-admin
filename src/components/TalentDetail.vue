<template>
<div style="width: 100%">
    <div class="f-l bd" style="width: 100%">
    	<ul class="f-l lis-listab-d1"> 
	       <div class="l-box">
           <div class="c-box">
             <div class="f-l div-tc">
               <em class="f-l em-t"></em><strong class="f-l c-navy"> Personal &nbsp;&nbsp; introduction  </strong>
             </div>
           </div>
           <div class="c-box">
             <div class="f-l div-tcb">
             	<img :src="talent.avatar" class=" pic" />
             </div>
           </div>
	       </div>
	       <div class="r-box">
	         <div class="f-l sub-title">
	           <h2 class="f-l c-navy"> {{ talent.name }} </h2>
	           <span class="f-l c-gray"> {{ talent.title }}  </span>
	         </div>       	
	          <div class="c-box">
                <div class="ql-container"> 
                    <div class="ql-editor" v-html="talent.content">
                    </div>	
                </div>	
	          </div>       	
	       </div>       
    	</ul>
    </div>
</div>
</template>

<script>
    import { getTalentList } from '@/services/CommonService';
    export default {
        name: 'detail',
        data () {
            return {
                category: '',
                loading: true,
                talent: {},
                id: 0
            };
        },
        mounted () {
            this.category = this.$route.query.type;
            this.id = this.$route.params.id;
            this._getTalentList();
        },
        watch: { },
        methods: {
            _getTalentList () {
                getTalentList({
                    id: this.id,
                    category: this.category
                }).then(res => {
                    console.log(res);
                    this.talent = res.body.data.list[0];
                });
            }
        },
        components: { }
    };
</script>

<style scoped>
    @media screen and (max-width: 720px){
        .ql-container img {
            width: 100% !important;
        }
    }
</style>