function Forecast({ data }) {
  const dailyForecast = data.list.filter((reading, index) => index % 8 === 0);

  return (
    <div className="forecast-container">
      <h3>Прогноз на 5 днів</h3>
      <div className="forecast-row">
        {dailyForecast.map((day) => (
          <div key={day.dt} className="forecast-item">
            <p className="day-name">
              {new Date(day.dt * 1000).toLocaleDateString('uk-UA', { weekday: 'short' })}
            </p>
            <img 
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
              alt="icon" 
            />
            <p className="forecast-temp">{Math.round(day.main.temp)}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;