
import Transformer from "common/transformer";
import moment from 'moment';

export default class ErrorTransformer extends Transformer {

    static get (data) {
        let err = {};
        err.bag = data.bag;
        err.display = data.display;
        err.field = data.field;
        err.title = data.title;
        err.message = data.message;
        err.code = data.code;
        err.transformedAt = moment().format('X')
        return err;
    }

    static send (article) {
        return {

        };
    }
}
