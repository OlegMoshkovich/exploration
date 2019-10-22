import React, { useEffect, useState } from 'react';

export const Articles = () => {
    const key = 'mnnfCWd6y4tQ4IipGbUkIZXICpFqbHH1'
    const [state, setState] = useState(('hello'))
    const [response, setResponse] = useState('')
    useEffect(() => {
        function fetchArticles() {
            fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump&api-key=${key}`)
                .then(resp => resp.json())
                .then((data) => console.log('data from the chain', data))
        }
        fetchArticles()
    }, [])

    return (
        <div>
            {state}
        </div>

    )
}