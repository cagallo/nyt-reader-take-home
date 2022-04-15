import './App.css';
import { Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import ArticlePage from './components/ArticlePage'
import Header from './components/Header'
import NotFound from './components/NotFound';

const App = () => {
  return (
    <section className='App'>
      <Header />
      <Routes>
          <Route path = '/' element={<MainPage />} />
          <Route path = '/article/:articleName' element={<ArticlePage />} />
          <Route path='*' element={<NotFound />}/>
      </Routes>
    </section>
  )
}

export default App;
