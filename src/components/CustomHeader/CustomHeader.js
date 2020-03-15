import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

//Styling
import styles from './CustomHeader.module.scss';

//Logo
import logo from '../../assets/logos/logo_64x64.png'

const CustomHeader = ({ colorMode }) => (
    <div className={`${styles.customHeader} ${styles[colorMode]}`}>
        <header>
            <input id={styles.menuToggle} type="checkbox" />
            <label id={styles.mobileBurgerButton} htmlFor={styles.menuToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
                </svg>
            </label>
            <nav>
                <div className={styles.homeLinkContainer}>
                    <NavLink exact to="/" activeClassName={styles.selected}>
                        <img src={logo} alt="" />
                        <div>
                            Startseite
                        </div>
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink exact to="/projects" activeClassName={styles.selected}>
                            Projekte
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about" activeClassName={styles.selected}>
                            Über mich
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName={styles.selected}>
                            Kontakte
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
)

CustomHeader.propTypes = {
    colorMode: PropTypes.oneOf(["solid", "transparent"])
}

CustomHeader.defaultProps = {
    colorMode: "solid"
}

export default CustomHeader;