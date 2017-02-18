<template>
    <page-container>
        <div slot="page-nav" class="tabs is-fullwidth">
              <ul>
                <li class="is-active">
                    <a>
                        Dashboard
                    </a>
                </li>
                <li>
                    <router-link :to="{name: 'studio.index'}">
                        Studio
                    </router-link>
                </li>
                <li>
                    <a>Analytics</a>
                </li>
              </ul>
        </div>
        <div class="page-content">
            <vb-container>
                <vb-content class="is-overflow-visible">
                    <vb-columns>
                        <vb-column class="is-6">
                            <vb-section>
                                <p>At a Glance</p>
                            </vb-section>
                        </vb-column>
                        <vb-column class="is-6">
                            <vb-section>
                                <p>Recent Activity</p>
                            </vb-section>
                        </vb-column>
                    </vb-columns>

                </vb-content>
            </vb-container>
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
