import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Utils
import * as http from '../../utils/http';

// Components
import Spinner from '../Spinner';

// Styles
import styles from './ProtectedRoute.module.scss';

class ProtectedRoute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetchingData: true,
            isAuthenticated: false
        }
    }

    componentDidMount() {
        const jwt = localStorage.getItem("jwt");

        if (jwt !== null) {
            http.get(`${process.env.REACT_APP_BACKEND_URL}/users/auth`, { Authorization: `Bearer ${jwt}` })
                .then(() => this.setState({ isAuthenticated: true }))
                .catch(err => console.warn(err))
                .finally(() => this.setState({ isFetchingData: false }))
        }
        else {
            this.setState({
                isFetchingData: false
            })
        }
    }



    render() {
        const { path, exact, component: Component, location } = this.props;
        const { isFetchingData, isAuthenticated } = this.state;

        return (
            <Route
                path={path}
                exact={exact}
                render={() => {
                    if (isFetchingData) return (
                        <main>
                            <div className={styles.spinnerContainer}>
                                <Spinner colorMode="dark" />
                            </div>
                        </main>
                    );
                    if (!isAuthenticated) return (
                        <Redirect to={{
                            pathname: "/login",
                            state: { from: location }
                        }} />);
                    else return <Component />;
                }}
            />
        )
    }
}

ProtectedRoute.propTypes = {
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired,
    component: PropTypes.any.isRequired
};

export default withRouter(ProtectedRoute);