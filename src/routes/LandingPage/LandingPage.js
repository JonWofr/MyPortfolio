import React, { Component } from 'react';

//Styling
import styles from './LandingPage.module.scss'

// Components
import Slideshow from '../../components/Slideshow';

// Mocking data
import { mockingData } from '../../components/Slide/Slide.stories'

class LandingPage extends Component {

    render = () => (
        <div id={styles.landingPage}>
            <section id={styles.slideshowContainer} className={styles.scrollSnapItem}>
                <Slideshow slides={mockingData} />
            </section>
            <section className={styles.scrollSnapItem}>
                <h1>
                    finally
                    </h1>
            </section>
            <section className={styles.scrollSnapItem}>
                <h1>
                    finally
                    </h1>
            </section>
        </div>
    )
}

export default LandingPage;