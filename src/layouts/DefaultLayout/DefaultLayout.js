import React, { Fragment } from 'react';

// Components
import Header from '../../components/Header';

// Styles
import './DefaultLayout.module.scss';

const DefaultLayout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main>
                {children}
            </main>
        </Fragment>
    )
}

export default DefaultLayout;