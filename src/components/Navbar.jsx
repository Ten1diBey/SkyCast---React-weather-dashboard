import { Link } from 'react-router-dom';
import { FaCloudSun, FaHeart } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <FaCloudSun className="logo-icon" />
          SkyCast
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Головна</Link>
          <Link to="/favorites" className="nav-link">
            <FaHeart className="heart-icon" /> Обране
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;