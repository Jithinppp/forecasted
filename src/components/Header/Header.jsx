// packages
import { useContext, useEffect } from "react";
import { ForecastContext } from "../../context/ForecastContext";
import { debounce } from "lodash";

// styles
import styles from "./Header.module.css";
import { FiSearch } from "react-icons/fi";
import { FaCloudRain } from "react-icons/fa";
import Loader from "../Loader/Loader";
import Clock from "../Clock/Clock";

function Header() {
  // ctx
  const {
    loading,
    searchInput,
    setSearchInput,
    suggestionData,
    setSuggestionData,
    setSearch,
    setErrorText,
    errorText,
    setWeatherData,
    setSuggestionLoading,
  } = useContext(ForecastContext);

  const fetchInputLocation = async (query) => {
    setErrorText(false);
    setSearch(true);
    setSuggestionLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_URI}?q=${query}`, {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_XRapidApiKey,
          "X-RapidAPI-Host": import.meta.env.VITE_XRapidApiHost,
        },
      });
      if (!res.ok) {
        throw new Error("bad request");
      }
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
      setSuggestionLoading(false);
      setSuggestionData(d);
    } catch (error) {
      console.log("something went wrong", error);
      setErrorText(true);
      setSuggestionLoading(false);
    }
  };

  const handleText = debounce((text) => {
    setSearchInput(text);
  }, 1000);

  useEffect(() => {
    if (searchInput.length >= 3) {
      fetchInputLocation(searchInput);
    }
  }, [searchInput]);

  const formSubmit = (e) => {
    e.preventDefault();
    setSearch(false);
    if (!errorText) {
      setWeatherData(suggestionData);
    }
  };

  return (
    <header>
      <nav className={styles.navigation}>
        {/* app name or logo */}
        <h2 className={styles.logo}>
          forecasted
          <FaCloudRain style={{ marginLeft: "10px" }} />
        </h2>
        {/* location search form */}
        <form className={styles.searchBar} onSubmit={formSubmit}>
          <FiSearch height={20} width={20} />
          <input
            type="text"
            placeholder="Search Location"
            required
            minLength={2}
            className={styles.locationSearchInput}
            onChange={(e) => handleText(e.target.value)}
          />
          <button type="submit" hidden>
            submit
          </button>
        </form>
        {/* time */}
        {loading ? (
          <Loader />
        ) : (
          <span className={styles.dayTime}>
            <Clock />
          </span>
        )}
      </nav>
    </header>
  );
}
export default Header;
