import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ForecastContext = createContext({});

export const ForecastContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [suggestionData, setSuggestionData] = useState({});
  const [errorText, setErrorText] = useState(false);
  const [suggestionLoading, setSuggestionLoading] = useState(false);

  const getCurrentLocationWeather = async (geolocation) => {
    setLoading(true);
    const lat = geolocation.coords.latitude;
    const lon = geolocation.coords.longitude;

    const res = await fetch(`${import.meta.env.VITE_URI}?q=${lat},${lon}`, {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_XRapidApiKey,
        "X-RapidAPI-Host": import.meta.env.VITE_XRapidApiHost,
      },
    });

    const data = await res.json();
    const d = {
      locationName: data.location.name,
      country: data.location.country,
      cords: { lat: data.location.lat, lon: data.location.lon },
      localTime: data.location.localtime,
      localTimeEpoch: data.location.localtime_epoch,
      temp: data.current.temp_c,
      tempFeelsLike: data.current.feelslike_c,
      pressure: data.current.pressure_in,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph,
      desc: data.current.condition.text,
    };
    setWeatherData(d);
    setLoading(false);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getCurrentLocationWeather);
  }, []);

  const values = {
    weatherData,
    setWeatherData,
    suggestionLoading,
    setSuggestionLoading,
    loading,
    setLoading,
    search,
    setSearch,
    searchInput,
    setSearchInput,
    suggestionData,
    setSuggestionData,
    errorText,
    setErrorText,
  };

  return (
    <ForecastContext.Provider value={values}>
      {children}
    </ForecastContext.Provider>
  );
};

ForecastContextProvider.propTypes = {
  children: PropTypes.element,
};

// loading animation must have before fetching
// find default location and set all the details to state async()
// if user searches a place fetch them and if exist then set the details state changes
