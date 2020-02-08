import React from 'react';

// Styles
import './Toast.scss';

// Components
import Heading from '../Heading';

const Toast = ({ heading, description, type }) => (
    <div className={`toast ${type}`}>
        <Heading type="quatenary">
            {heading}
        </Heading>
        <p>
            {description}
        </p>
    </div>
)

export default Toast;