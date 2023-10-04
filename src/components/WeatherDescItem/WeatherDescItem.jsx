// packages
import PropTypes from "prop-types";
// styles
import styles from "./WeatherDescItem.module.css";

function WeatherDescItem({ title, value, unit }) {
  return (
    <div className={styles.weatherDetails}>
      <h4 className={styles.WeatherDetailsTitle}>{title}</h4>
      <p className={styles.weatherDetailsValue}>
        {value}
        {unit}
      </p>
    </div>
  );
}
export default WeatherDescItem;

WeatherDescItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any,
  desc: PropTypes.string,
  unit: PropTypes.string,
};
