import React, { Component, Fragment } from 'react';

// Components
import CustomHeader from '../../components/CustomHeader';
import LoginWindow from '../../components/LoginWindow';

// Styles
import styles from './SignUp.module.scss';

// Utils
import * as http from '../../utils/http';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",

            hasSuccessfullySignedUp: false
        }
    }


    render() {
        const { username, password, hasSuccessfullySignedUp } = this.state;
        const { location } = this.props;

        return (
            <Fragment>
                {hasSuccessfullySignedUp &&
                    <Redirect to={{
                        pathname: "/login",
                        state: { from: location.state.from }
                    }} />
                }
                <CustomHeader />
                <main>
                    <div className={styles.loginWindowContainer}>
                        <LoginWindow
                            mode="signUp"
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
        http.post(`${process.env.REACT_APP_BACKEND_URL}/users`, body)
            .then(() => this.setState({
                hasSuccessfullySignedUp: true
            }))
            .catch(err => window.alert(err))
    }
}

export default SignUp;