import style from './Footer.module.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AurhContext';

function Footer() {

    const { user } = useContext(AuthContext);

    return (
        <footer className={style["footer-box"]} >
            <section className={style["footer-navigation"]}>
                <summary className={style["footer-info-box"]}>
                    <h4 className={style["footer-info-title"]}>About Us</h4>
                    <p className={style["about-description"]}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius magni
                        fugiat impedit dolores doloribus saepe deleniti quos consectetur
                        minus. Delectus commodi qui consequuntur eligendi quae velit
                        blanditiis, hic dicta ducimus, rerum illo doloribus distinctio alias
                        laboriosam exercitationem?
                    </p>
                    <Link to="/about-us" className={style["about-link"]}>Read more...</Link>
                </summary>
                <aside className={style["footer-contact-box"]}>
                    <h4 className={style["footer-contact-title"]}>Contact Us</h4>
                    <ul className={style["footer-contact-navigation"]}>
                        <li className={style["footer-contact-menu"]}>
                            <span className={style["contact"]}>
                                <i className="fa-solid fa-phone" /> :
                            </span>
                            +359 878 23 86 71
                        </li>
                        <li className={style["footer-contact-menu"]}>
                            <span className={style["contact"]}>
                                <i className="fa-solid fa-envelope" /> :
                            </span>
                            info@gmail.com
                        </li>
                        <li className={style["footer-contact-menu"]}>
                            <span className={style["contact"]}>
                                <i className="fa-solid fa-address-book" /> :
                            </span>
                            256 bul. Bulgaria
                        </li>
                        <li className={style["footer-contact-menu"]}>
                            <span className={style["contact"]}>
                                <i className="fa-solid fa-calendar-days" /> :
                            </span>
                            Mon-Fri 9-18 Sun: Close
                        </li>
                    </ul>
                </aside>
                <aside className={style["footer-fast-links-box"]}>
                    <h4 className={style["footer-links-title"]}>Go to</h4>
                    <ul className={style["footer-links-navigation"]}>
                        <li className={`${style["footer-quick-links"]}, ${style["destination"]}`}>
                            <Link to="/all-posts">All Destinations</Link>
                        </li>
                        {
                            Object.values(user).length > 0
                                ? <>
                                    <li className={`${style["footer-quick-links"]}, ${style["destination"]}`}>
                                        <Link to="/my-posts">My Destinations</Link>
                                    </li>
                                    <li className={`${style["footer-quick-links"]}, ${style["destination"]}`}>
                                        <Link to="/create-trip">Create Destination</Link>
                                    </li>
                                </>
                                : ""
                        }
                    </ul>
                    <ul className={style["footer-social-media-navigation"]}>
                        <li className={style["footer-quick-links"]}>
                            <a className={style["facebook"]} href="https://www.facebook.com/">
                                <i className="fa-brands fa-facebook" />
                            </a>
                        </li>
                        <li className={style["footer-quick-links"]}>
                            <a className={style["instagram"]} href="https://www.instagram.com/">
                                <i className="fa-brands fa-square-instagram" />
                            </a>
                        </li>
                    </ul>
                </aside>
            </section>
        </footer>
    )
}

export default Footer;