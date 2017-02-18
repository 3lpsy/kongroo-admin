
import Transformer from "common/transformer";
import moment from 'moment';

export default class MessageTransformer extends Transformer {

    static get (data) {
        let message = {};
        message.bag = data.bag;
        message.display = data.display;
        message.field = data.field;
        message.title = data.title;
        message.message = data.message;
        message.code = data.code;
        message.transformedAt = moment().format('X')
        return message;
    }

    static send (article) {
        return {

        };
    }
}
