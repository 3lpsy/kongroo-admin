import Vue from 'vue'
import Vuex from "vuex";
import common from "common/store";
import message from "message/store";
import error from "error/store";
import article from "article/store";
import series from "series/store";

import tag from "tag/store";
import category from "category/store";
import dt from "dt/store";

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const debug = true;

export default new Vuex.Store({

    modules: {
        message,
        error,
        common,
        article,
        series,
        tag,
        category,
        dt
    },

    /**
     * If strict mode should be used
     */
    strict: debug,

    /**
     * Plugins for Vuex
     */
    plugins: [createLogger()]
});
