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
    <div
      className={styles.mainTemperatureContainer}
      style={{
        backgroundImage: `linear-gradient(to right,rgb(246, 243, 239, 1),rgba(255, 255, 255, 0.2)),url("/src/assets/mist.jpg")`,
      }}
    >
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
