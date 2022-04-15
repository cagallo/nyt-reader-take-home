import ArticlesContainer from "./ArticlesContainer";
import { useState, useEffect } from 'react';
import { getArticlesByCategory } from "../apiCalls";
import { categories } from '../utils'
import { titleCase } from "title-case";
import '../styles/MainPage.css'

const MainPage = () => {

  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState('Home')

  const possibleCategories = categories.map((category, i) => {
    category = titleCase(category)
    return (
      <option key={i} value={category}>{category}</option>
    )
  })  

  const selectCategory = (event) => {
  console.log(event.target.value)
  setCategory(event.target.value)
  }

  const fetchArticles = async(category) => {
    category = category.toLowerCase().replace(' ', '')
    try {
      let articles = await getArticlesByCategory(category)
      articles = articles.reduce((acc, article) => {
        if (article.title) {
          acc.push(article)
        } 
        return acc; 
      }, [])
      setArticles(articles)
    } 
    catch(error) {
      return `${error.status}: Something went wrong, please try again later`;
    }
  }

  useEffect(() => {
    fetchArticles(category)
  }, [category])

  return (
    <div className='main-page'>
      <label className='dropdown-label'>Please Choose a Category:
        <select className='dropdown-options' tabIndex='0' value={category} onChange={selectCategory}>
          {possibleCategories}
        </select>
      </label>
      <ArticlesContainer articles={articles} />
    </div>
  )

}

export default MainPage;