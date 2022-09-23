import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import styles from "./Header.module.css";

import { AuthContext } from '../../context/AurhContext';

const activeLinksStyles = {
    "box-shadow": "5px 2px 9px -3px #00d9ff",
};

const guest =
    <>
        <li className={`${styles["header-menu"]} ${styles['home']}`}>
            <NavLink
                className={styles["header-links"]}
                to="/login">
                login
            </NavLink>
        </li>
        <li className={`${styles["header-menu"]} ${styles['register']}`} >
            <NavLink
                className={styles["header-links"]}
                to="/register">
                register
            </NavLink>
        </li>
    </>;
const loggedUser =
    <>
        <li className={`${styles["header-menu"]} ${styles['posts']}`}>
            <NavLink
                className={styles["header-links"]}
                to="/my-posts">
                my posts
            </NavLink>
        </li>
        <li className={`${styles["header-menu"]} ${styles['home']}`}>
            <NavLink
                className={styles["header-links"]}
                to="/create-trip">
                create
            </NavLink>
        </li>
        <li className={`${styles["header-menu"]} ${styles['logout']}`} >
            <NavLink
                className={styles["header-links"]}
                to="/logout" >
                logout
            </NavLink>
        </li >
    </>;

const loggedUserEmail =
    <>

    </>;

function Header() {
    const { user } = useContext(AuthContext);

    return (
        <header className={styles['main-header-box']}>
            <nav className={styles["main-header-navigation"]}>
                <ul className={styles["main-header-menu"]}>
                    <li className={`${styles["header-menu"]} ${styles['home-page-link']}`}>
                        <NavLink
                            className={styles["header-links"]}
                            to="/">
                            Fishing Adventures
                        </NavLink>
                    </li>
                    <li className={`${styles["header-menu"]} ${styles['home-page-link']}`}>
                        <NavLink
                            className={styles["header-links"]}
                            to="/about-us">
                            About Us
                        </NavLink>
                    </li>
                </ul>
                <ul className={styles["main-header-menu"]}>
                    <li className={`${styles["header-menu"]} ${styles['posts']}`}>
                        <NavLink
                            className={styles["header-links"]}
                            to="/all-posts">
                            All posts
                        </NavLink>
                    </li>
                    {!user.accessToken ? guest : loggedUser}
                    {!user.accessToken
                        ? ""
                        : <li className={`${styles["header-menu-user-email"]}`}>
                            <i className="fa-solid fa-user" style={{ fontSize: '0.8em' }}>  :</i>
                            <span className={styles['header-email']}>{user.fullName}</span>
                        </li>
                    }

                </ul >
            </nav >
        </header >
    )
}

export default Header;