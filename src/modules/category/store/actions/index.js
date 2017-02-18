const types = {
    fetchCategories: 'category/actions/fetchCategories',
}

export {types};

import api from 'api';
import transformer from "category/transformer"
import {types as mutations} from "category/store/mutations";

export default  {
    [types.fetchCategories]: (context, payload = {} ) => {

        let query = payload.query || {};

        return new Promise((resolve, reject) => {
            api.service('category').index({query}).then((response) => {
                if (response.status === 200 && response.data) {
                    let categories = transformer.getCollection(response.data.categories);
                    context.commit(mutations.INSERT_CATEGORIES, {categories});
                    resolve(response);
                }
            }).catch((error) => {
                reject(error);
            })
        });

    }
}
