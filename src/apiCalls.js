import { handleResponse } from './utils'

export const getArticlesByCategory = async(name) => {
  console.log(process.env.REACT_APP_NYT_KEY)
  try {
  let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
  let data = await handleResponse(response)
  return data.results
  }
  catch(error) {  
    throw error
  }
}

