<template>
    <div class="container">
        <Loading v-show="loading"></Loading>
        <div class="row" v-if="asset&&asset.id" v-show="!loading">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        {{asset.symbol}}-{{asset.id}}
                    </div>
                    <div class="panel-body">
                        <p>{{asset.options.description&&JSON.parse(asset.options.description).main}}</p>
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered no-margin">
                                <tbody>
                                <tr>
                                    <th>
                                        {{$t('asset.issuer')}}
                                    </th>
                                    <td>
                                        <router-link :to="{path:'/account/'+asset.issuer.name}">
                                            {{asset.issuer.name}}
                                        </router-link>
                                    </td>
                                    <th>{{$t('asset.precision')}}</th>
                                    <td>{{asset.precision}}</td>
                                </tr>
                                <tr>
                                    <th>{{$t('asset.max_supply')}}</th>
                                    <td>
                                        {{asset.options.max_supply/Math.pow(10,asset.precision)|number(2)}}
                                    </td>
                                    <th>{{$t('asset.current_supply')}}</th>
                                    <td>{{asset.detail.current_supply/Math.pow(10,asset.precision)|number(2)}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default panel-ranking" v-if="rankings&&rankings.length>0">
                    <div class="panel-heading">
                        <span class="fa fa-fw idacicon iadcicon-rank"></span>&nbsp;{{$t('index.ranking.title')}}
                    </div>
                    <div class="pabel-body table-responsive no-padding">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th width="100">{{$t('index.ranking.number')}}</th>
                                <th>{{$t('index.ranking.account')}}</th>
                                <th class="text-right">{{$t('index.ranking.locked_balance')}}</th>
                                <th class="text-right">{{$t('index.ranking.balance')}}</th>
                                <th class="text-right">{{$t('index.ranking.total_balance')}}</th>
                                <th class="text-right">{{$t('index.ranking.percent')}}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item,i) in rankings">
                                <td>{{i+1}}</td>
                                <td align="right">
                                    {{item.freezeAmount}}
                                </td>
                                <td align="right">
                                    {{item.amount}}
                                </td>
                                <td align="right">
                                    {{item.totalAmount}}
                                </td>
                                <td align="right">{{(item.percent*100).toFixed(2)}}%</td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="footer" v-if="hasMore">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import filters from '../filters';

    export default {
        filters,
        components: {
        },
        data () {
            return {
                loading: true,
                asset: null,
                page: 1,
                hasMore: true,
                rankings: []
            };
        },
        methods: {
            ...mapActions({
                setKeywords: 'setKeywords'
            }),
            loadData () {
                this.$http.get(`/api/asset/${this.keywords.toUpperCase()}`).then(resp => {
                    let asset = resp.body;
                    this.asset = asset;
                    this.loading = false;
                });
            }
        },
        mounted () {
            if (this.$route.params.asset_name !== this.keywords) {
                this.setKeywords({keywords: this.$route.params.asset_name});
            }
            this.loadData();
        },
        watch: {
            keywords () {
                this.loading = true;
                this.asset = null;
                this.loadData();
            },
            '$route' () {
                if (this.$route.params.asset_name !== this.keywords) {
                    this.loading = true;
                    this.asset = null;
                    this.setKeywords({keywords: this.$route.params.asset_name});
                }
            }
        },
        computed: {

            ...mapGetters({
                keywords: 'keywords'
            })
        }
    };
</script>
<style scoped>
    .panel-ranking .footer {
        text-align: center;
        padding: 10px 0;
        border-top: 1px solid #eee;
        font-size: 20px;
    }

    .panel-ranking .footer a {
        color: #999;
    }
</style>
