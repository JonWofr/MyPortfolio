import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import CustomInput from '../../components/CustomInput';
import Heading from '../../components/Heading';
import CustomButton from '../../components/CustomButton';

// Styles
import styles from './LoginWindow.module.scss';

const LoginWindow = ({ mode, username, password, onChangeCustomInputValue, onSubmit, colorMode }) => (
    <div className={`${styles.loginWindow} ${styles[colorMode]}`}>
        <form id="login-window" onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
        }}>
            <div className={styles.headingContainer}>
                <Heading type="primary" colorMode={colorMode}>
                    Jetzt {mode === "signUp" ? "registrieren" : "anmelden"}
                </Heading>
            </div>
            <div className={styles.customInputsContainer}>
                <div className={styles.customInputContainer}>
                    <CustomInput
                        form="login-window"
                        type="text"
                        size="fluid"
                        value={username}
                        onChange={e => onChangeCustomInputValue("username", e.target.value)}
                        placeholder="Benutzername"
                        required
                        colorMode={colorMode}
                    />
                </div>
                <div className={styles.customInputContainer}>
                    <CustomInput
                        form="login-window"
                        type="password"
                        size="fluid"
                        value={password}
                        onChange={e => onChangeCustomInputValue("password", e.target.value)}
                        placeholder="Passwort"
                        required
                        colorMode={colorMode}
                    />
                </div>
            </div>
            <div className={styles.linkContainer}>
                <Link to={mode === "signUp" ? "/login" : "/sign-up"}>
                    {mode === "signUp" ? "Bereits registriert?" : "Noch nicht registriert?"}
                </Link>
            </div>
            <div className={styles.customButtonContainer}>
                <CustomButton form="login-window" type="submit" size="fluid" colorScheme="primaryAccent">
                    {mode === "signUp" ? "Registrieren" : "Anmelden"}
                </CustomButton>
            </div>
        </form>
    </div>
);

LoginWindow.propTypes = {
    mode: PropTypes.oneOf(["signUp", "login"]).isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onChangeCustomInputValue: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    colorMode: PropTypes.oneOf(["light", "dark"])
};

LoginWindow.defaultProps = {
    colorMode: "light"
}

export default LoginWindow;