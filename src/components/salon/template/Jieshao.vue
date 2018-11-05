
<template>
    <ul class="f-l listab-2"><!-- Salon content  -->
        <div class="f-l lis-subteb">
          <ul class="c-box">
          	<li @click="tabClick" data-type="jieshao" class="f-l tab-item c-gray3" :class="tab === 'jieshao' ? 'active' : ''"> {{ $t("salon.shaolongjieshao") }}  </li>
          	<li @click="tabClick" data-type="zhangcheng" class="f-l tab-item c-gray3" :class="tab === 'zhangcheng' ? 'active' : ''" > {{ $t("salon.zhangcheng") }} </li>
          </ul>
          <div class="f-l products">
          	<div v-if="this.tab==='jieshao'" class="f-l div-item selected listab-2a"><!-- Introduction of salon  -->
          		<div class="l-box"  v-for="article in this.articleList" :key="article.id">
          		  <p class="f-l p-text c-gray" v-html="article.content">
          		  </p>
          		</div>
          	</div>
          	<div v-else-if="this.tab==='zhangcheng'" class="f-l div-item selected listab-2b"><!-- Statute of salon  -->
          		<div class="c-box" v-for="article in this.articleList" :key="article.id">
          			<p class="f-l p-text c-gray" v-html="article.content"> </p>
          		</div>
          	</div>     	
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
                tab: 'jieshao',
                category: ['salon', 'jieshao'],
                articleList: []
            };
        },
        mounted () {
            this._getArticleList();
        },
        watch: { },
        methods: {
            _getArticleList () {
                getArticleList({
                    status: 1,
                    category: this.category.join(',') + `,${this.tab}`,
                    articleList: []
                }).then(res => {
                    this.articleList = res.body.data.list;
                });
            },
            tabClick (event) {
                this.tab = event.target.getAttribute('data-type');
                this._getArticleList();
            }
        },
        components: { }
    };
</script>

<style scoped>