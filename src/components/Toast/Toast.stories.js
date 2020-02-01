import React from 'react';
import { storiesOf } from '@storybook/react';

// Presentational component
import Toast from './Toast';

// Mocking data
const data = {
    success: {
        type: "success",
        heading: "Success!",
        description: "Everything worked."
    },
    info: {
        type: "info",
        heading: "Info!",
        description: "This happenned."
    },
    warn: {
        type: "warn",
        heading: "Warning!",
        description: "Something went not as planned."
    },
    error: {
        type: "error",
        heading: "Error!",
        description: "Something did not work."
    }
}

storiesOf("Toast", module)
    .add("success", () => <Toast {...data.success} />)
    .add("info", () => <Toast {...data.info} />)
    .add("warn", () => <Toast {...data.warn} />)
    .add("error", () => <Toast {...data.error} />)