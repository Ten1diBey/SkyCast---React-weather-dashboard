# Фінальний проєкт: Weather Dashboard (SkyCast)

## 📝 Опис завдання
Цей односторінковий застосунок (SPA) дозволяє користувачам переглядати погоду в будь-якому місті світу, отримувати прогноз на 5 днів та зберігати улюблені міста. Проєкт демонструє роботу із зовнішнім API, глобальним станом та маршрутизацією.

**Тема:** Weather Dashboard.

## ⚙️ Технології
* **React** (Vite)
* **React Router** (навігація між сторінками)
* **Context API** (глобальний стан для обраного та історії)
* **OpenWeatherMap API** (дані про погоду)
* **LocalStorage** (збереження даних після перезавантаження)
* **CSS Modules / Standard CSS** (стилізація)

## 📂 Структура проєкту
* **`pages/Dashboard.jsx`**: Головна сторінка з пошуком і віджетами погоди.
* **`pages/Favorites.jsx`**: Сторінка зі списком збережених міст.
* **`components/`**: Компоненти інтерфейсу (Navbar, SearchBar, CurrentWeather, Forecast).
* **`context/WeatherContext.jsx`**: Логіка керування станом (додавання/видалення з обраного).
* **`services/weatherApi.js`**: Функції для запитів до API.

## 🚀 Інструкція із запуску

1.  **Клонуйте репозиторій:**
    ```bash
    git clone [https://github.com/Ten1diBey/SkyCast---React-weather-dashboard.git](https://github.com/Ten1diBey/SkyCast---React-weather-dashboard.git)
    ```

2.  **Встановіть залежності:**
    ```bash
    npm install
    ```

3.  **Налаштуйте API ключ:**
    * Відкрийте файл `src/services/weatherApi.js`.
    * Вставте свій ключ OpenWeatherMap у змінну `API_KEY`.

4.  **Запустіть сервер розробки:**
    ```bash
    npm run dev
    ```

---
*Роботу виконав студент групи [ІПЗ-24-2] [Бархатов-М.О.]*