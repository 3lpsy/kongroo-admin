const types = {
    fetchSeries: 'series/actions/fetchSeries',
}

export {types};

import api from 'api';
import transformer from "series/transformer"
import {types as mutations} from "series/store/mutations";

export default  {
    [types.fetchSeries]: (context, payload = {} ) => {

        let query = payload.query || {};

        return new Promise((resolve, reject) => {
            api.service('series').index({query}).then((response) => {
                if (response.status === 200 && response.data) {
                    let series = transformer.getCollection(response.data.series);
                    context.commit(mutations.INSERT_SERIES, {series});
                    resolve(response);
                }
            }).catch((error) => {
                reject(error);
            })
        });

    }
}
