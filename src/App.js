import './App.css';
import { Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import ArticlePage from './components/ArticlePage'
import Header from './components/Header'

const App = () => {
  return (
    <section className='App'>
      <Header />
      <Routes>
          <Route path = '/' element={<MainPage />} />
          <Route path = '/article/:articleName' element={<ArticlePage />} />
      </Routes>
    </section>
  )
}

export default App;
