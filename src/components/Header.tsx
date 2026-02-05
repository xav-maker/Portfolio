import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Portfolio
        </Link>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Accueil
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Projets
          </Link>
          <Link
            to="/cv"
            className={`nav-link ${isActive('/cv') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            CV
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
