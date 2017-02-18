<template>
    <page-container>
        <div slot="page-nav" class="tabs is-fullwidth">
              <ul>
                <li>
                    <router-link :to="{name: 'dashboard.index'}">
                        Dashboard
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'studio.index'}">
                        Studio
                    </router-link>
                </li>
                <li class="is-active">
                    <router-link :to="{name: 'analytics.index'}">
                        Analytics
                    </router-link>
                </li>
              </ul>
        </div>
        <div class="page-content">
            <vb-container>
                <vb-section>
                    <vb-columns>
                        <vb-column class="is-12">
                        </vb-column>
                    </vb-columns>
                </vb-section>
            </vb-container>
        </div>

    </page-container>
</template>

<script>
import PageContainer from 'pages/analytics/container/Container.vue';

export default {
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
