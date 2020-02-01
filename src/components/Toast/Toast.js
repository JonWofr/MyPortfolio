import React from 'react';

// Styles
import './Toast.scss';

const Toast = ({ heading, description, type }) => (
        <div className={`toast ${type}`}>
            <h4>
                { heading }
            </h4>
            <p>
                { description }
            </p>
        </div>
    )

export default Toast;