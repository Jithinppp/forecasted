import { useContext } from "react";
import { ForecastContext } from "../../context/ForecastContext";

import styles from "./MainTemperature.module.css";
import Loader from "../Loader/Loader";

function MainTemperature() {
  // ctxs
  const {
    weatherData: { country, temp, locationName, desc },
    loading,
  } = useContext(ForecastContext);

  return (
    <div className={styles.mainTemperatureContainer}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h3 className={styles.place}>
            {locationName}, {country}
          </h3>
          <h2 className={styles.temp}>{temp}°C</h2>
          <p className={styles.description}>{desc}</p>
        </>
      )}
    </div>
  );
}
export default MainTemperature;
