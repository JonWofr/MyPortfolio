import React, { Fragment } from 'react';

// Components
import CustomHeader from '../../components/CustomHeader';
import Heading from '../../components/Heading';

// Styles
import styles from './About.module.scss';

// Images
import selfPortrait from '../../assets/images/selfPortrait.png';

const About = () => (
    <Fragment>
        <CustomHeader />
        <main>
            <div className={styles.headingContainer}>
                <Heading type="primary" colorMode="dark">
                    Das bin Ich
                </Heading>
            </div>
            <div className={styles.content}>
                <img src={selfPortrait} alt="" />
                <p>
                    Ich bin Jonas, 21 Jahre alt und Student im sechsten Semester des Studiengangs "Mobile Medien" an der "Hochschule der Medien" in Stuttgart.
                    Der Studiengang behandelt alle Phasen des Entwicklungsprozesses einer mobilen Applikation, von dem Erstellen eines Konzepts, über die Entwicklung von low- bis high-fidelity Prototypen, bis hin zum Coden und der finalen Veröffentlichung und Vermarktung einer App.
                    Dabei spezialisiere ich mich auf die Umsetzung von Prototypen und Design-Vorlagen in Form von Code.
                    Um nicht den Überblick über alle Projekte zu verlieren, an denen ich mitgewirkt habe, habe ich diese Portfolio zusammengestellt.
                </p>
            </div>
        </main>
    </Fragment>
);

export default About;