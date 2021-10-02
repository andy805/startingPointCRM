import React from "react";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ width }) => {
    return (
        <div className={styles.searchBar} style={{ width: `${width}` }}>
            <FontAwesomeIcon
                className={styles.searchBar__searchIcon}
                icon={faSearch}
            />
            <input className={styles.searchBar__input} />
            <FontAwesomeIcon
                className={styles.searchBar__clearButton}
                icon={faTimesCircle}
            />
        </div>
    );
};

export default SearchBar;
