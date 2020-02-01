import React from 'react';
import PropTypes from 'prop-types';

//Styling
import styles from './Paragraph.module.scss';

const Paragraph = ({ children, image }) => {
    if (image) {
        return (
            <div className={styles.paragraph}>
                <img
                    className={styles[image.position]}
                    src={image.url}
                    alt=""
                />
                <p>
                    {children}
                </p>
            </div>
        )
    }
    else {
        return (
            <div className={styles.paragraph}>
                <p>
                    {children}
                </p>
            </div>
        )
    }
}

Paragraph.propTypes = {
    children: PropTypes.node.isRequired,
    
    image: PropTypes.exact({
        position: PropTypes.string,
        url: PropTypes.string,
        dataUrl: PropTypes.any
    })
}

export default Paragraph;