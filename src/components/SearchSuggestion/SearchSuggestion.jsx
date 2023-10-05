import { useContext } from "react";
import { ForecastContext } from "../../context/ForecastContext";

import { MdKeyboardReturn } from "react-icons/md";
import styles from "./SearchSuggestion.module.css";

function SearchSuggestion() {
  const { setSearch, suggestionData, errorText, suggestionLoading } =
    useContext(ForecastContext);
  console.log(suggestionData);
  return (
    <div className={styles.searchSuggestionContainer}>
      <span>
        {errorText ? (
          <p>No location found!</p>
        ) : (
          <p>
            {suggestionLoading ? (
              "Loading..."
            ) : (
              <>
                {suggestionData.locationName} - {suggestionData.temp}
              </>
            )}
          </p>
        )}
      </span>
      <button
        onClick={() => {
          setSearch(false);
        }}
        className={styles.suggestionDataButton}
      >
        enter <MdKeyboardReturn />
      </button>
    </div>
  );
}
export default SearchSuggestion;
