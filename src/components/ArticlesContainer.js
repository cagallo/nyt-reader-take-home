import { Link } from 'react-router-dom';
import { titleCase } from 'title-case';
import '../styles/ArticlesContainer.css'


const ArticlesContainer = ({ articles }) => {
  let displayedArticles
  if (articles) {
    displayedArticles = articles.map((article, i) => {
      let id;
      if (!article.short_url.length) {
        const url = article.url.split('/')
        id = url[url.length - 1].split('.')[0]
      } else {
        const shortURL = article.short_url.split('/')
        id = shortURL[shortURL.length - 1]
      }
      console.log(article.multimedia)
      
      if(!article.multimedia) {
        return <Link 
        key={i}
        className="article-name" 
        to={`/article/${id}`}>
        <h2>{titleCase(article.title)}</h2>
        </Link>
      } else {
        return <Link 
        key={i}
        className="article-details" 
        state={article}
        to={`/article/${id}`}>
        <div className='headline-text'>
          <h2>{titleCase(article.title)}</h2>
        </div>
        <img className='article-image' src={article.multimedia[1].url && article.multimedia[1].url} alt={article.multimedia[1] && article.multimedia[1].caption} />
        </Link>
      }
    })
  }

  return (
    <section className='article-container'>
      {displayedArticles}
    </section>
  )
}



export default ArticlesContainer;