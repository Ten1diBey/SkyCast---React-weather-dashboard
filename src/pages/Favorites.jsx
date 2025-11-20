import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { FaTrash, FaMapMarkerAlt } from 'react-icons/fa';

function Favorites() {
  const { favorites, removeFromFavorites } = useContext(WeatherContext);

  return (
    <div className="favorites-page">
      <h1>Ваші збережені міста ❤️</h1>
      
      {favorites.length === 0 ? (
        <div className="empty-state">
          <p>Список порожній. Знайдіть місто на Головній та натисніть ❤️</p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((city) => (
            <div key={city.name} className="fav-card">
              <div className="fav-header">
                <h3><FaMapMarkerAlt /> {city.name}</h3>
                <button onClick={() => removeFromFavorites(city.name)} className="remove-btn">
                  <FaTrash />
                </button>
              </div>
              <div className="fav-body">
                <img 
                  src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} 
                  alt="icon" 
                />
                <span className="fav-temp">{Math.round(city.main.temp)}°</span>
              </div>
              <p className="fav-desc">{city.weather[0].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;