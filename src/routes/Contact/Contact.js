import React, { Fragment } from 'react';

// Components
import CustomHeader from '../../components/CustomHeader';
import Heading from '../../components/Heading';

// Styles
import styles from './Contact.module.scss';

const Contact = () => (
    <Fragment>
        <CustomHeader />
        <main>
            <div className={styles.headingContainer}>
                <Heading type="primary" colorMode="dark">
                    So kannst du mich erreichen
                </Heading>
            </div>
            <div className={styles.content}>
                <ul>
                    <li>
                        Email:
                        <br />
                        <a href="mailto:jonas-wolfram@web.de">
                            jonas-wolfram@web.de
                        </a>
                    </li>
                    <li>
                        github:
                        <br />
                        <a href="https://github.com/JonWofr">
                            https://github.com/JonWofr
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    </Fragment>
)

export default Contact;