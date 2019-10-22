import React, { useEffect, useState } from 'react';
import { TypeWriter } from './typeWriter'

const Empty = () => {
    return (
        <div>
            loading
        </div>
    )
}
const Fetched = () => {
    return (
        <div>
            fetched
        </div>
    )
}


export const Articles = () => {
    const key = 'mnnfCWd6y4tQ4IipGbUkIZXICpFqbHH1'
    const [state, setState] = useState(('hello'))
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump&api-key=${key}`)
            .then(resp => resp.json())
            .then(data => data.response)
            .then(data => data.docs)
            .then(docs => setArticles(docs))
    }, [])
    console.log(articles)


    if (articles.length !== 0) {
        const msgs = articles.map(article => article.abstract)
        return <TypeWriter messages={msgs} />;
    }
    return < Empty />;

}