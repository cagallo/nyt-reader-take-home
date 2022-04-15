import { Link } from 'react-router-dom';
import { titleCase } from 'title-case';
import '../styles/ArticlesContainer.css'

const ArticlesContainer = ({ articles }) => {

  if (!articles) {
    return
  }
  let displayedArticles;
  displayedArticles = articles.map((article, i) => {
    let id;
    if (!article.short_url.length) {
      const url = article.url.split('/')
      id = url[url.length - 1].split('.')[0]
    } else {
      const shortURL = article.short_url.split('/')
      id = shortURL[shortURL.length - 1]
    }
    
    if (!article.multimedia) {
      return <Link 
      key={i}
      className="article-details" 
      to={`/article/${id}`}>
      <h2 className='article-title-main'>{titleCase(article.title)}</h2>
      </Link>
    }

    return <Link 
      key={i}
      className="article-details" 
      state={article}
      to={`/article/${id}`}>
      <div className='headline-text'>
        <h2 className='article-title-main'>{titleCase(article.title)}</h2>
      </div>
      <img className='article-image' src={article.multimedia[1].url && article.multimedia[1].url} alt={article.multimedia[1] && article.multimedia[1].caption} />
      </Link>
  })

  return (
    <section className='article-container'>
      {displayedArticles}
    </section>
  )
}



export default ArticlesContainer;