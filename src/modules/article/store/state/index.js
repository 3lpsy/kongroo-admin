const stub = () => {
    return {
        title: '',
        subTitle: '',
        slug: '',
        tags: [],
        categories: [],
        series: []
    }
}

export default {
    create: {
        article: stub()
    },
    repo: {
        articles: [],
        meta: {
            paginations: []
        }
    }
}
