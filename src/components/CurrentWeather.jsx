function CurrentWeather({ data }) {
  const { name, main, weather, wind, sys } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  return (
    <div className="weather-card current-weather">
      <div className="weather-header">
        <div>
          <h2>{name}, {sys.country}</h2>
          <p className="date">{new Date().toLocaleDateString('uk-UA')}</p>
        </div>
        <img src={iconUrl} alt={weather[0].description} />
      </div>
      
      <div className="weather-body">
        <p className="temp">{Math.round(main.temp)}°C</p>
        <p className="desc">{weather[0].description}</p>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span>Відчувається як</span>
          <strong>{Math.round(main.feels_like)}°C</strong>
        </div>
        <div className="detail-item">
          <span>Вологість</span>
          <strong>{main.humidity}%</strong>
        </div>
        <div className="detail-item">
          <span>Вітер</span>
          <strong>{Math.round(wind.speed)} м/с</strong>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;