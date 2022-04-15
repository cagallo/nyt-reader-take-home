export const handleResponse = (response) => {
	if (response.ok) {
    return response.json()
	} else {
  throw new Error(`${response.status} ${response.statusText}: Unable to load content.`)
  }
}

export const categories = ['Arts', 'Automobiles', 'Books', 'Business', 'Fashion', 'Food', 'Health', 'Home', 'Insider', 'Magazine', 'Movies', 'Ny Region', 'Obituaries', 'Opinion', 'Politics', 'Real Estate', 'Science', 'Sports', 'Sunday Review', 'Technology', 'Theater', 'T-magazine', 'Travel', 'Upshot', 'Us', 'World']