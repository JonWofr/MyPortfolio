import React from 'react';
import { Link } from 'react-router-dom';

//Styling
import styles from './Header.module.scss';

const Header = () => (
        <header>
            <i className="material-icons">menu</i>
            <div id={styles.navContainer}>
                <nav>
                    <ul>
                        <div id={styles.leftSideContainer}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </div>
                        <div id={styles.rightSideContainer}>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/about">About me</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    )

export default Header;