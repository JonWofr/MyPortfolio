import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

// Components
import CustomHeader from '../../components/CustomHeader';
import LoginWindow from '../../components/LoginWindow';

// Styles
import styles from './Login.module.scss';

// Utils
import * as http from '../../utils/http';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",

            hasSuccessfullyLoggedIn: false
        }
    }


    render() {
        const { username, password, hasSuccessfullyLoggedIn } = this.state;
        const { location } = this.props;

        return (
            <Fragment>
                {hasSuccessfullyLoggedIn &&
                    <Redirect to={location.state ? location.state.from.pathname : "/"} />
                }
                <CustomHeader />
                <main>
                    <div className={styles.loginWindowContainer}>
                        <LoginWindow
                            mode="login"
                            username={username}
                            password={password}
                            onChangeCustomInputValue={this.onChangeLoginWindowCustomInputValue}
                            onSubmit={this.onSubmitLoginWindow}
                            colorMode="dark"
                        />
                    </div>
                </main>
            </Fragment>
        );
    }

    onChangeLoginWindowCustomInputValue = (name, value) => this.setState({ [name]: value })

    onSubmitLoginWindow = () => {
        const { username, password } = this.state;

        const body = {
            data: {
                username,
                password
            }
        }
        http.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, body)
            .then(target => {
                localStorage.setItem("jwt", target.response.data.jwt);
                this.setState({
                    hasSuccessfullyLoggedIn: true
                })
            })
            .catch(err => window.alert(err))
    }
}

export default Login;