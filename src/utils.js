export const handleResponse = (response) => {
	if (response.ok) {
    return response.json()
	} else {
  throw new Error(`${response.status} ${response.statusText}: Unable to load content.`)
  }
}

export const categories = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']