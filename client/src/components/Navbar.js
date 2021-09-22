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

        {/* <Link className={styles["navbar-item"]}to={'/Accounts'}> {'Accounts'} </Link>
        <Link className={styles["navbar-item"]}to={'/Contacts'}> {'Contacts'} </Link>
        <Link className={styles["navbar-item"]}to={'/Invoices'}> {'Invoices'} </Link> */}

       </div>
   )
}

export default Navbar