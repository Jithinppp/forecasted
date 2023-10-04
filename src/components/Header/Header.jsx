// packages
import { useContext } from "react";
import { ForecastContext } from "../../context/ForecastContext";

// styles
import styles from "./Header.module.css";
import { FiSearch } from "react-icons/fi";
import { FaCloudRain } from "react-icons/fa";
import Loader from "../Loader/Loader";
import Clock from "../Clock/Clock";

function Header() {
  // ctx
  const { loading } = useContext(ForecastContext);

  // const fetchInputLocation = async (i) => {
  //   // setLoading(true);
  //   const res = await fetch(
  //     `https://weatherapi-com.p.rapidapi.com/current.json?q=${i}`,
  //     {
  //       method: "GET",
  //       headers: {},
  //     }
  //   );
  //   const data = await res.json();
  // };

  // handle location search function
  const searchLocationHandler = (e) => {
    e.preventDefault();
    const inputLocation = e.target[0].value;
    if (inputLocation.length > 2) {
      // fetchInputLocation(inputLocation);
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
        <form onSubmit={searchLocationHandler} className={styles.searchBar}>
          <FiSearch height={20} width={20} />
          <input
            type="text"
            placeholder="Search Location"
            required
            minLength={2}
            className={styles.locationSearchInput}
          />
          <button type="submit" hidden></button>
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
