const NewsSource = {
    apiCall(params){
        function handleHTTPError(response){
            if(response === 200)
                return response;
            throw Error(response.statusText)
        }
    return fetch(NEWS_BASE_URL+params, {
        "method": "GET",
        "headers": {
            'X-Mashape-Key': NEWS_API_KEY
        }
    })
        .then(handleHTTPError).then(response => response.json())
    },
    searchNews(searchParams){
        const params = searchParams.join("OR")
        return this.apiCall("q=" + params);
    }
}