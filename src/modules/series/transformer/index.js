
import Transformer from "common/transformer";
import moment from 'moment';

export default class SeriesTransformer extends Transformer {

    static get (series) {
        return {
            id: series.id,
            title: series.title,
            transformedAt: moment().format('X')

        };
    }

    static send (series) {
        return {
            id: series.id,
            title: series.title
        };
    }
}
