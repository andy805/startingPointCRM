import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = (props) => {

    

   return (
       <div className={styles.navbar}>
           {props.navItems.map((item, index) => {
               return (
                   <Link className={!item.active ? styles["navbar-item"] : styles.active } to={item.path} key={index}>{item.label}</Link>
               )
           })}
       </div>
   )
}

export default Navbar