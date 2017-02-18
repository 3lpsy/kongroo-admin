import Transformer from "common/transformer";
import moment from 'moment';

export default class PaginationTransformer extends Transformer {

    static get (pagination) {
        return {
            count: pagination.count,
            total: pagination.total,
            totalPages: pagination.totalPages,
            page: pagination.currentPage,
            limit: pagination.limit,
            hasMore: pagination.hasMore,
            links: pagination.links,

            transformedAt: moment().format('X')
        };
    }

    static send (pagination) {
        return {
            count: pagination.totalCount,
            totalPages: pagination.totalPages,
            currentPage: pagination.currentPage,
            limit: pagination.limit,
            hasMore: pagination.hasMore
        };
    }
}
