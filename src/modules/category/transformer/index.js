
import Transformer from "common/transformer";
import moment from 'moment';

export default class CategoryTransformer extends Transformer {

    static get (category) {
        return {
            id: category.id,
            name: category.name,
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
