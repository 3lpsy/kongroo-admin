<template>
    <page-container>
        <div class="row">
            <div class="col-sm-6 col-lg-3">
                <div class="card">
                    <div class="card-block p-1 clearfix">
                        <i class="fa fa-cogs bg-primary p-1 font-2xl mr-1 float-left"></i>
                        <div class="h5 text-primary mt-h mb-0">2</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs">Views</div>
                    </div>
                    <div class="card-footer px-1 py-h">
                        <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="card">
                    <div class="card-block p-1 clearfix">
                        <i class="fa fa-cogs bg-info p-1 font-2xl mr-1 float-left"></i>
                        <div class="h5 text-primary mt-h mb-0">10</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs">Articles</div>
                    </div>
                    <div class="card-footer px-1 py-h">
                        <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="card">
                    <div class="card-block p-1 clearfix">
                        <i class="fa fa-cogs bg-warning p-1 font-2xl mr-1 float-left"></i>
                        <div class="h5 text-primary mt-h mb-0">2</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs">Series</div>
                    </div>
                    <div class="card-footer px-1 py-h">
                        <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="card">
                    <div class="card-block p-1 clearfix">
                        <i class="fa fa-cogs bg-danger p-1 font-2xl mr-1 float-left"></i>
                        <div class="h5 text-primary mt-h mb-0">2</div>
                        <div class="text-muted text-uppercase font-weight-bold font-xs">Comments</div>
                    </div>
                    <div class="card-footer px-1 py-h">
                        <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        At A Glance
                    </div>
                    <div class="card-block">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5">
                <div class="card-group mb-1">
                    <div class="card card-inverse card-primary" style="width:40%">
                        <div class="card-header font-weight-bold">Pageviews</div>
                        <div class="card-block py-1 pb-0">
                            <ul class="list-unstyled mb-0">
                                <li class="py-h">Overall
                                    <span class="font-weight-bold float-right">987.123</span>
                                </li>
                                <li class="py-h">This week
                                    <span class="font-weight-bold float-right">9.873</span>
                                </li>
                                <li class="py-h">Yestarday
                                    <span class="font-weight-bold float-right">851</span>
                                </li>
                                <li class="py-h">Today
                                    <span class="font-weight-bold float-right">184</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card pb-0">
                        <div class="card-header">May 15 - May 22</div>
                        <div class="card-block py-h">
                            <div class="chart-wrapper"><iframe class="chartjs-hidden-iframe" tabindex="-1" style="display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;"></iframe>
                                <canvas id="chart-10" class="chart chart-line" height="300" width="300" style="display: block; height: 150px; width: 150px;"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="card">

                    <div class="card-header">
                        <i class="icon-compass icon-bg"></i>Traffic

                        <div class="card-actions">
                            <a href="#" class="btn-setting"><i class="icon-settings"></i></a>
                            <a href="#" class="btn-minimize"><i class="icon-arrow-up"></i></a>
                            <a href="#" class="btn-close"><i class="icon-close"></i></a>
                        </div>
                    </div>

                    <div class="card-block">

                        <div>Visits
                            <span class="font-weight-bold float-right">(40% - 29.703 Users)</span>
                        </div>
                        <div class="progress progress-sm mt-h mb-1">
                            <div class="progress-bar bg-success" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <div>Unique
                            <span class="font-weight-bold float-right">(20% - 24.093 Unique Users)</span>
                        </div>
                        <div class="progress progress-sm mt-h mb-1">
                            <div class="progress-bar bg-info" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <div>Pageviews
                            <span class="font-weight-bold float-right">(60% - 78.706 Views)</span>
                        </div>
                        <div class="progress progress-sm mt-h mb-1">
                            <div class="progress-bar bg-warning" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <div>New Users
                            <span class="font-weight-bold float-right">(80% - 22.123 Users)</span>
                        </div>
                        <div class="progress progress-sm mt-h mb-1">
                            <div class="progress-bar bg-danger" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <div>Bounce Rate
                            <span class="font-weight-bold float-right">(40.15%)</span>
                        </div>
                        <div class="progress progress-sm mt-h mb-1">
                            <div class="progress-bar bg-success" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <div>Visits
                            <span class="font-weight-bold float-right">(40% - 29.703 Users)</span>
                        </div>
                        <div class="progress progress-sm mt-h mb-1">
                            <div class="progress-bar bg-success" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <div>Unique
                            <span class="font-weight-bold float-right">(20% - 24.093 Unique Users)</span>
                        </div>
                        <div class="progress progress-sm mt-h mb-1">
                            <div class="progress-bar bg-info" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </page-container>
</template>

<script>
import PageContainer from 'pages/dashboard/container/Container.vue';
import paginate from "common/mixins/paginate";

export default {
    mixins: [paginate],
    data() {
        return {
            booted: false
        };
    },

    computed: {
    },
    components: {
        PageContainer
    }
};
</script>

<style type="text/css">

</style>
