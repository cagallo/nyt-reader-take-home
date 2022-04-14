import ArticlesContainer from "./ArticlesContainer";
import { useState, useEffect } from 'react';
import { getArticlesByCategory } from "../apiCalls";
import { categories } from '../utils'
import '../styles/MainPage.css'

const MainPage = () => {

  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState('home')

  const possibleCategories = categories.map((category, i) => {
    return (
      <option key={i} value={category}>{category}</option>
    )
  })  

  const selectCategory = (event) => {
  console.log(event.target.value)
  setCategory(event.target.value)
  }

  const fetchArticles = async(category) => {
    setArticles(await getArticlesByCategory(category))
  }

  useEffect(() => {
    fetchArticles(category)
  }, [category])

  return (
    <div className='main-page'>
      <label className='dropdown-label'>Please Choose a Category:
        <select className='dropdown-options' value={category} onChange={selectCategory}>
          {possibleCategories}
        </select>
      </label>
      <ArticlesContainer articles={articles} />
    </div>
  )

}

export default MainPage;