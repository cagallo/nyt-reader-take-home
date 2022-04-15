import '../styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
  <header className='header-details'>
    <Link to='/' className='nav-link'><h1> 🌎  Breaking News with Chezzy  📰 </h1></Link>
  </header>
)
}

export default Header;