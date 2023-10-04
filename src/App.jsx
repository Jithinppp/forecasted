import { useContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainTemperature from "./components/MainTemperature/MainTemperature";
import SearchSuggestion from "./components/SearchSuggestion/SearchSuggestion";
import { ForecastContext } from "./context/ForecastContext";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";

function App() {
  // ctx values
  const { searchFlag, darkMode } = useContext(ForecastContext);

  return (
    <div className={`bg App ${darkMode ? "darkMode" : ""}`}>
      {/* Navigation */}
      <Header />
      {/* fetching loader suggestion */}

      {searchFlag && <SearchSuggestion />}
      {/* temperature with background change */}
      <MainTemperature />
      {/* weather details */}
      <WeatherDetails />
    </div>
  );
}
export default App;

// features
// 1.to see current user location weather
// 2.type lat and lng and find weather (openweathermap)
// 3.type places and find weather with dynamic typing fetch (weatherApi)

// 1.https://api.openweathermap.org/data/2.5/weather?lat=10.9166586&lon=75.9245118&appid=7cd7eee8e976007749d8cdda2077604f&units=metric
// 2.https://weatherapi-com.p.rapidapi.com/current.json?q=melmuri
