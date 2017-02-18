
import Transformer from "common/transformer";
import moment from 'moment';

export default class ArticleTransformer extends Transformer {

    static get (article) {
        return {
            id: article.id,
            title: article.title,
            subTitle: article.subTitle,
            sections: article.sections,
            tags: article.tags,
            slug: article.slug,
            author: article.author,
            createdAt: article.createdAt,
            updatedAt: article.updatedAt,
            queriedAt: article.queriedAt,
            publishedAt: article.publishedAt,
            statuses: article.statuses,
            views: article.views,
            transformedAt: moment().format('X')
        };
    }

    static send (article) {
        return {
            id: article.id,
            title: article.title,
            subTitle: article.subTitle,
            sections: article.sections,
            statuses: article.statuses,
            tags: article.tags,
            author: article.author,
            publishedAt: article.publishedAt
        };
    }
}
