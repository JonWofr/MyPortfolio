import React, { Component, Fragment } from 'react';

// Utils
import * as http from '../../utils/http';

// Components
import Header from '../../components/Header';

// Styles
import styles from './Home.module.scss';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slides: []
        }
    }
    
    componentDidMount() {
        http.get(`${process.env.REACT_APP_BACKEND_URL}/slides`)
            .then(({ response: { data } }) => {
                this.setState({
                    slides: data
                })
            })
    }

    render() {
        return (
            <Fragment>
                <Header />
                <main className={styles.customSize}>
                    <div className={styles.slideshowWindow}>
                        <div >

                        </div>
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default Home;