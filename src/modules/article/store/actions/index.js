const types = {
    fetchArticles: 'article/actions/fetchArticles',
}

export {types};

import api from 'api';
import transformer from "article/transformer"
import {types as mutations} from "article/store/mutations";
import paginationTransformer from "common/transformer/pagination"

export default  {
    [types.fetchArticles]: (context, payload ) => {

        let query = payload.query || {};

        return new Promise((resolve, reject) => {
            api.service('article').index({query}).then((response) => {
                if (response.status === 200 && response.data) {
                    let articles = response.data.articles;

                    if (articles) {
                        articles = transformer.getCollection(response.data.articles);
                        context.commit(mutations.INSERT_ARTICLES, {articles});
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
            }).catch((error) => {
                reject(error);
            })
        });
    },
}
