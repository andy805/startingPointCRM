import React from "react";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <FontAwesomeIcon
                className={styles.searchBar__searchIcon}
                icon={faSearch}
            />
            <input
                className={styles.searchBar__input}
                placeholder="Search..."
            />
            <FontAwesomeIcon
                className={styles.searchBar__clearButton}
                icon={faTimesCircle}
            />
        </div>
    );
};

export default SearchBar;
