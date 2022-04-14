import { handleResponse } from './utils'

export const getArticlesByCategory = (name) => {
  console.log(process.env.REACT_APP_NYT_KEY)
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
    .then(response => handleResponse(response))
    .then(data => data.results)
    .catch(error => console.log(error))
}

