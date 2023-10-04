// styles
import { useContext } from "react";
import WeatherDescItem from "../WeatherDescItem/WeatherDescItem";
import styles from "./WeatherDetails.module.css";
import { ForecastContext } from "../../context/ForecastContext";
import Loader from "../Loader/Loader";
// import { FaCloud, FaWind, FaWater } from "react-icons/fa";

function WeatherDetails() {
  // ctxs
  const {
    weatherData: { tempFeelsLike, windSpeed, pressure, humidity },
    loading,
  } = useContext(ForecastContext);

  let items;
  if (!loading) {
    items = [
      {
        id: 1,
        title: "Current Temperature",
        value: tempFeelsLike,
        unit: "°C",
      },
      { id: 2, title: "Wind Speed", value: windSpeed, unit: "Kph" },
      { id: 3, title: "Humidity", value: humidity, unit: "%" },
      { id: 4, title: "Pressure", value: pressure, unit: "in" },
    ];
  }

  return (
    <div className={styles.weatherDetailsContainer}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {items.map((item) => (
            <WeatherDescItem
              key={item.id}
              title={item.title}
              value={item.value}
              unit={item.unit}
            />
          ))}
        </>
      )}
    </div>
  );
}
export default WeatherDetails;
