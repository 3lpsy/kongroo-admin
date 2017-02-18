const types = {
    fetchTags: 'tag/actions/fetchTags',
}

export {types};

import api from 'api';
import transformer from "tag/transformer"
import {types as mutations} from "tag/store/mutations";

export default  {
    [types.fetchTags]: (context, payload = {}) => {

        let query = payload.query || {};

        return new Promise((resolve, reject) => {
            api.service('tag').index({query}).then((response) => {
                if (response.status === 200 && response.data) {
                    let tags = transformer.getCollection(response.data.tags);
                    context.commit(mutations.INSERT_TAGS, {tags});
                    resolve(response);
                }
            }).catch((error) => {
                reject(error);
            })
        });

    }
}
