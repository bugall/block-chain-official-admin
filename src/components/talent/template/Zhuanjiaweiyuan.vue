<template>
        <div> 
    <ul class="f-l listab-4"><!-- Committee of experts  -->
	      				<div class="f-l div-c showMoreNChildren">
							    <li class="f-l" v-for="talent in talentList" :key="talent.id">
								    <div class="f-l div-t">
								      <h3 class="f-l c-navy"> {{ talent.title }} </h3>
								      <p class="f-l c-gray p-text"> 
                                          {{ talent.description }}
								      </p>
								      <a href="#" class="f-l c-green r-more1"> Read More </a>
								      <div class="f-l em-box">
								        <em class="f-l em-tl bgc-green tran-sition"></em>
								        <em class="f-l em-br bgc-green tran-sition"></em>
								      </div>
							      </div>
								    <div class="f-l div-b bgc-white">
							        <a href="#" class="f-l pic bgc-gray3"><img :src="talent.avatar" class="f-l"/></a>
								      <div class="l-box">
								        <h2 class="f-l c-navy"> {{ talent.name }}</h2>
								        <span class="f-l c-gray"> {{ talent.job }}</span>
							            </div>
								    </div>
							    </li>
	      				</div>
          		</ul>
                  <div class="page-box">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="page"
                :page-size="perPage"
                layout="prev, pager, next, jumper"
                :total="totalItems">
            </el-pagination>
        </div> 
        </div>
</template>

<script>
    import { getTalentList } from '@/services/CommonService';
    export default {
        data () {
            return {
                loading: true,
                talentList: [],
                totalItems: 0,
                page: 1,
                perPage: 15
            };
        },
        mounted () {
            this._getTalentList();
        },

        watch: { },
        methods: {
            _getTalentList () {
                getTalentList({
                    status: 1,
                    category: '1',
                    page_size: this.perPage,
                    page: this.page
                }).then(res => {
                    this.talentList = res.body.data.list;
                    this.totalItems = res.body.data.total;
                });
            },
            handleSizeChange (val) {
                this.perPage = val;
            },
            handleCurrentChange (val) {
                this.page = val;
                this._getTalentList();
            }
        },
        components: { }
    };
</script>

<style scoped>
 