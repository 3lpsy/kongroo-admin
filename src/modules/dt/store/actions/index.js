const types = {
    fetchArticles: 'dt/actions/article/fetchArticles',
}

export {types};

import api from 'api';
import articleTransformer from "dt/transformer/article";
import {types as mutations} from "dt/store/mutations";
import paginationTransformer from "dt/transformer/pagination"

export default  {
    [types.fetchArticles]: (context, payload ) => {

        let query = payload.query || {};

        console.log('doing it');

        return new Promise((resolve, reject) => {
            // console.log(api.service('dt.article').axios);
            api.service('dt.article').index({query}).then((response) => {
                if (response && response.status === 200 && response.data) {
                    let articles = response.data.articles;

                    if (articles) {
                        articles = articleTransformer.getCollection(response.data.articles);
                        context.commit(mutations.SET_ARTICLES, {articles});
                    }

                    if (response.data.meta) {
                        let pagination = response.data.meta.pagination;
                        if (pagination) {
                            pagination = paginationTransformer.get(response.data.meta.pagination);
                            context.commit(mutations.APPEND_PAGINATION, {pagination})
                        }
                    }
                    resolve(response);
                }
                reject(new Error("NO RESPONSE"));
            }).catch((error) => {
                reject(error);
            })
        });
    },
}
