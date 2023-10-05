import { useContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainTemperature from "./components/MainTemperature/MainTemperature";
import SearchSuggestion from "./components/SearchSuggestion/SearchSuggestion";
import { ForecastContext } from "./context/ForecastContext";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";

function App() {
  // ctx values
  const { search, darkMode } = useContext(ForecastContext);

  return (
    <div className={`bg App ${darkMode ? "darkMode" : ""}`}>
      {/* Navigation */}
      <Header />
      {/* fetching loader suggestion */}
      {search && <SearchSuggestion />}
      {/* temperature with background change */}
      <MainTemperature />
      {/* weather details */}
      <WeatherDetails />
    </div>
  );
}
export default App;
