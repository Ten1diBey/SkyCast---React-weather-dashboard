import { FaMapMarkerAlt, FaTint, FaWind, FaThermometerHalf } from 'react-icons/fa';

function CurrentWeather({ data }) {
  const { name, main, weather, wind, sys } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  return (
    <div className="weather-card current-weather">
      <div className="card-top">
        <div className="location-box">
          <h2><FaMapMarkerAlt /> {name}, {sys.country}</h2>
          <p className="date">{new Date().toLocaleDateString('uk-UA', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
        </div>
        <div className="icon-box">
          <img src={iconUrl} alt={weather[0].description} />
          <p className="weather-desc">{weather[0].description}</p>
        </div>
      </div>
      
      <div className="card-middle">
        <h1 className="temp-big">{Math.round(main.temp)}°</h1>
      </div>

      <div className="card-bottom">
        <div className="detail">
          <FaThermometerHalf />
          <span>Відчувається</span>
          <strong>{Math.round(main.feels_like)}°</strong>
        </div>
        <div className="detail">
          <FaTint />
          <span>Вологість</span>
          <strong>{main.humidity}%</strong>
        </div>
        <div className="detail">
          <FaWind />
          <span>Вітер</span>
          <strong>{Math.round(wind.speed)} м/с</strong>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;