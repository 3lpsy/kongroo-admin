const types = {
    setErrors: 'error/actions/setErrors',
    removeErrors: 'error/actions/removeErrors',

}
export {types};

import transformer from "error/transformer";

import {types as mutations} from "error/store/mutations";

export default  {
    [types.setErrors]: (context, payload ) => {
        return new Promise((resolve, reject) => {
            let errors = transformer.getCollection(payload.errors);
            context.commit(mutations.SET_ERRORS, {errors});
            resolve();
        });
    },
    [types.removeErrors]: (context, payload ) => {
        return new Promise((resolve, reject) => {
            let errors = payload.errors;
            if (errors) {
                context.commit(mutations.REMOVE_ERRORS, {errors});
            }
            resolve();
        });
    }
}
