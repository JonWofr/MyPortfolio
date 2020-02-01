import React from 'react';
import PropTypes from 'prop-types';

// Components
import CustomLink from '../CustomLink';

// Styles
import styles from './Slide.module.scss';

const Slide = ({ title, subtitle, projectName, image }) => (
    <div className={styles.slide}>
        <img src={image.url} alt="" />
        {
            //if a title exists a subtitle must exist aswell
        }
        <div className={styles.content}>
            <h2>
                {title}
            </h2>
            {subtitle &&
                <h3>
                    {subtitle}
                </h3>
            }
            <CustomLink to={{ pathname: "/projects", search: `?projectName = ${projectName}` }} size="small">
                Mehr
            </CustomLink>
        </div>
    </div>
)

Slide.propTypes = {
    title: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,

    subtitle: PropTypes.string
}

export default Slide;