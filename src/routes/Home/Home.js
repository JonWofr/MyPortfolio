import React, { Component, Fragment } from 'react';

// Utils
import * as http from '../../utils/http';

// Components
import CustomHeader from '../../components/CustomHeader';
import Slideshow from '../../components/Slideshow';

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
        const { slides } = this.state;
        return (
            <Fragment>
                <CustomHeader colorMode="transparent" />
                <main className={styles.customSize}>
                    <div className={styles.slideshowContainer}>
                        <Slideshow slides={slides} />
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default Home;