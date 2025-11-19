import { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  // Завантажуємо обране з LocalStorage при старті
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('weather_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchHistory, setSearchHistory] = useState([]);

  // Зберігаємо в LocalStorage при кожній зміні favorites
  useEffect(() => {
    localStorage.setItem('weather_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Додати в обране
  const addToFavorites = (city) => {
    // Перевіряємо, чи місто вже є в списку, щоб не дублювати
    if (!favorites.some((fav) => fav.name === city.name)) {
      setFavorites((prev) => [...prev, city]);
    }
  };

  // Видалити з обраного
  const removeFromFavorites = (cityName) => {
    setFavorites((prev) => prev.filter((city) => city.name !== cityName));
  };

  // Додати в історію (зберігаємо останні 5 запитів)
  const addToHistory = (cityName) => {
    setSearchHistory((prev) => {
      // Фільтруємо, щоб не було дублікатів підряд, і додаємо нове на початок
      const newHistory = [cityName, ...prev.filter((c) => c !== cityName)];
      return newHistory.slice(0, 5);
    });
  };

  // ОСЬ ЦІЄЇ ЧАСТИНИ У ВАС НЕ ВИСТАЧАЛО 👇
  return (
    <WeatherContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        searchHistory,
        addToHistory,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};