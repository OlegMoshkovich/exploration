import React, { useEffect, useState } from 'react';
import { TypeWriter } from './typeWriter'
import { Nav } from '../components/NavMenu'

const Empty = () => {
    return (
        <div>
            <TypeWriter messages={['If you are seeing this message the articles from NYT have not been loaded yet', 'Please reload the page to get a dose of negativity from news about US president']} />
        </div>
    )
}
// const Fetched = () => {
//     return (
//         <div>
//             fetched
//         </div>
//     )
// }

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


    if (articles.length !== 0) {
        const msgs = articles.map(article => article.abstract)
        return (
            <div>
                <Nav />
                <TypeWriter messages={msgs} />
            </div>
        )

    }
    return < Empty />;

}