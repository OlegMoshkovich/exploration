import React, { useEffect, useState } from 'react';

export const Articles = () => {
    const key = 'mnnfCWd6y4tQ4IipGbUkIZXICpFqbHH1'
    const [state, setState] = useState(('hello'))
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump&api-key=${key}`);
            const articles = await response.json()
            console.log('articles', articles)
        }
        fetchData()
    }, [])
    return (
        <div>
            {state}
        </div>

    )
}