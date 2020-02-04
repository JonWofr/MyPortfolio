import React from 'react';
import PropTypes from 'prop-types';

// Styling
import styles from './Paragraph.module.scss';

// Components
import Heading from '../Heading';

const Paragraph = ({ description, heading, image }) => (
    <div className={styles.paragraph}>
        {heading &&
            <Heading type="quatenary">
                {heading}
            </Heading>
        }
        <div className={styles.content}>
            {image &&
                <img
                    className={styles[image.position]}
                    src={image.url}
                    alt=""
                />
            }
            <p>
                {description}
            </p>
        </div>
    </div>
)

Paragraph.propTypes = {
    text: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.exact({
        position: PropTypes.string,
        url: PropTypes.string,
        dataUrl: PropTypes.any
    })
}

export default Paragraph;