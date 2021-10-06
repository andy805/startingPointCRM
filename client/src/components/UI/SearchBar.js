import React from "react";
import {useState} from "react"
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPray, faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ width, find }) => {
    const [search, setSearch] = useState("")

    const handleChange = (e) =>{
        setSearch(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('search submit hit', search)
        find(search)
    }

    return (
        <div className={styles.searchBar} style={{ width: `${width}` }}>
            
            <FontAwesomeIcon
                className={styles.searchBar__searchIcon}
                icon={faSearch}
            />
            <form onSubmit={handleSubmit}>
            <input
                name={"search"}
                className={styles.searchBar__input}
                placeholder="Search..."
                value={search}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            </form>
            <FontAwesomeIcon
                className={styles.searchBar__clearButton}
                icon={faTimesCircle}
            />
        </div>
    );
};

export default SearchBar;
