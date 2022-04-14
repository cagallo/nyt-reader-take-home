import { useLocation} from 'react-router-dom'


const ArticlePage = () => {
  const location = useLocation()
  const article  = location.state

  return ( 
      <div className="single-article-container">
        <h2>{article.title}</h2>
        <p className="byline">{article.byline}</p>
        <img className="hero-image" src={article.multimedia[0].url} alt={article.multimedia[0].caption} />
        <caption>{article.multimedia[0].caption}</caption>
        <p className="article-text">{article.abstract} ...</p>
        <a  href={article.url} target="_blank" rel="noreferrer"><button className="read-more-button">Read more</button></a>
      </div>
  )
}


export default ArticlePage;