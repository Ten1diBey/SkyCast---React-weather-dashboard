import { useState, useContext } from 'react';
import { fetchWeather, fetchForecast } from '../services/weatherApi';
import { WeatherContext } from '../context/WeatherContext';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather'; 
import Forecast from '../components/Forecast';             
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null); // Стан для прогнозу
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { addToHistory, addToFavorites, favorites, removeFromFavorites } = useContext(WeatherContext);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const weatherData = await fetchWeather(city);
      const forecastData = await fetchForecast(city); // Отримуємо дані
      
      setWeather(weatherData);
      setForecast(forecastData); // Зберігаємо в стан
      addToHistory(weatherData.name);
      
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  // Перевірка, чи місто в обраному
  const isFavorite = weather && favorites.some(fav => fav.name === weather.name);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(weather.name);
    } else {
      addToFavorites(weather);
    }
  };

  return (
    <div className="dashboard">
      <div className="search-section">
        <h1>Прогноз погоди 🌤️</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      {loading && <div className="loading-spinner">Завантаження...</div>}
      {error && <div className="error-message">⚠️ {error}</div>}

      {weather && (
        <div className="weather-content">
          <div className="actions">
            <button onClick={toggleFavorite} className="fav-btn">
              {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />} 
              {isFavorite ? ' В обраному' : ' Додати в обране'}
            </button>
          </div>
          
          <CurrentWeather data={weather} />

          {forecast && <Forecast data={forecast} />}
        </div>
      )}
    </div>
  );
}

export default Dashboard;