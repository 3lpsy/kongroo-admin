
import Transformer from "common/transformer";
import moment from 'moment';

export default class TagTransformer extends Transformer {

    static get (tag) {
        return {
            id: tag.id,
            name: tag.name,
            transformedAt: moment().format('X')

        };
    }

    static send (tag) {
        return {
            id: tag.id,
            name: tag.name
        };
    }
}
