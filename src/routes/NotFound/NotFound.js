import React, { Fragment } from 'react';

// Components
import CustomHeader from '../../components/CustomHeader';
import Heading from '../../components/Heading';
import CustomLink from '../../components/CustomLink';

// Styles
import styles from './NotFound.module.scss';

const NotFound = props => {
    return (
        <Fragment>
            <CustomHeader />
            <main>
                <div className={styles.content}>
                    <div className={styles.headingsContainer}>
                        <div>
                            <Heading type="primary">
                                404 - Not Found
                            </Heading>
                        </div>
                        <div>
                            <Heading type="secondary">
                                Wir konnten die aufgerufene Seite leider nicht finden!
                            </Heading>
                        </div>
                    </div>
                    <div className={styles.customLinkContainer}>
                        <CustomLink size="large" colorScheme="invertedPrimaryAccent" to="/">
                            Zurück zur Startseite
                        </CustomLink>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default NotFound;