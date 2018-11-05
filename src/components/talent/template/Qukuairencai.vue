<template>
<div>
  <ul class="f-l listab-5"><!-- Block chain talent pool  -->
                <div class="c-box div-t">
                  <div class="c-box">
                	  <input type="search" placeholder="姓名" class="f-l info-search c-gray" v-model="searchText"/>
                	  <a class="f-l bnt-search bgc-green c-white bgc-blue1-h" @click="search"><i class="iconfont"> &#xe653; </i></a>
                  </div>
                  <div class="c-box">
	                  <div class="l-box lis-select">
						    <div class="f-l select-box sub-select bgc-white"> 
						        <span class="f-l select-txt c-gray" @mouseover="gradeShow = true"  @mouseout="gradeShow = false"> {{ gradeText }}  </span><i class="f-r c-gray iconfont tran-sition"> &#xe629; </i>
						        <div class="f-l option" :class ="this.gradeShow ? 'show' : 'hidden'">
						            <ul class="f-l stat-op bg-white" @mouseover="gradeShow = true" @mouseout="gradeShow = false">
						    	        <li class="f-l c-gray" @click="gradeText = '院士'; grade = '0'; gradeShow = false"> 院士  </li>
						    	        <li class="f-l c-gray" @click="gradeText = '博士'; grade = '1'; gradeShow = false"> 博士  </li>
						    	        <li class="f-l c-gray" @click="gradeText = '硕士'; grade = '2'; gradeShow = false"> 硕士  </li>										
						    	        <li class="f-l c-gray" @click="gradeText = '本科'; grade = '3'; gradeShow = false"> 本科  </li>
						    	        <li class="f-l c-gray" @click="gradeText = '专科'; grade = '4'; gradeShow = false"> 专科 </li>
						            </ul>								
						        </div>
						    </div>
					    </div>	        
                  </div>
                </div>
                <div class="f-l div-c showMoreNChildren">
                	<li class="f-l" v-for="talent in talentList" :key="talent.id">
                		<div class="c-box div">
                		  <div class="c-box">
                		    <a :href="`/#/talent/detail/${talent.id}?type=3`" class="pic bgc-gray3"><img :src="talent.avatar" class="f-l" /></a>
                		    <h2 class="f-l c-navy"> {{ talent.name }}</h2>
                		  </div>
                		  <h3 class="f-l c-navy"><i class="f-l iconfont c-gray"> &#xe614; </i> {{ talent.title }} </h3>
                		  <h3 class="f-l c-navy"><i class="f-l iconfont c-gray"> &#xe622; </i> {{ talent.workyears }}年 </h3>
                		  <h3 class="f-l c-navy"><i class="f-l iconfont c-gray"> &#xe63c; </i> {{ switchGradeText(talent.grade) }} </h3> 
                		</div>
                		<p class="f-l c-gray p-text">
                            {{ talent.description }}
                		</p>
                	</li>
                </div>
               
          		</ul> 
                <ul style="margin-top: 50px">
                     <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="page"
                :page-size="perPage"
                layout="prev, pager, next, jumper"
                :total="totalItems">
            </el-pagination>
                </ul>
                </div>
</template>

<script>
    import { getTalentList } from '@/services/CommonService';
    export default {
        data () {
            return {
                loading: true,
                gradeText: '学历',
                grade: '',
                gradeShow: false,
                searchText: '',
                totalItems: 0,
                page: 1,
                perPage: 15,
                talentList: []
            };
        },
        mounted () {
        },
        watch: { },
        methods: {
            search () {
                getTalentList({
                    status: 1,
                    category: '3',
                    page_size: this.perPage,
                    page: this.page,
                    searchText: this.searchText,
                    grade: this.grade
                }).then(res => {
                    this.talentList = res.body.data.list;
                    this.totalItems = res.body.data.total;
                });
            },
            switchGradeText (text) {
                let answer = null;
                console.log(text);
                switch (JSON.stringify(text)) {
                    case '0':
                        answer = '院士';
                        break;
                    case '1':
                        answer = '博士';
                        break;
                    case '2':
                        answer = '硕士';
                        break;
                    case '3':
                        answer = '本科';
                        break;
                    case '4':
                        answer = '专科';
                        break;
                    default:
                        break;
                }
                console.log(answer);
                return answer;
            },
            handleSizeChange (val) {
                this.perPage = val;
            },
            handleCurrentChange (val) {
                this.page = val;
                this.search();
            }
        },
        components: { }
    };
</script>

<style scoped>
    .show {
        display: block;
    }
    .hidden {
        display: none;
    }
</style>