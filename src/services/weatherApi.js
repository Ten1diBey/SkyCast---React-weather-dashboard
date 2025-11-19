const API_KEY = '75df3f58e41d7285b4393c5a643c7061'; // Вставте сюди ваш ключ з OpenWeatherMap
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Отримання поточної погоди за назвою міста
export const fetchWeather = async (city) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&lang=ua&appid=${API_KEY}`
  );
  if (!response.ok) throw new Error('Місто не знайдено');
  return response.json();
};

// Отримання прогнозу на 5 днів
export const fetchForecast = async (city) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&lang=ua&appid=${API_KEY}`
  );
  if (!response.ok) throw new Error('Прогноз недоступний');
  return response.json();
};