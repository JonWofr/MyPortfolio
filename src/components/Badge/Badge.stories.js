import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import Badge from './Badge';

storiesOf("Badge", module)
    .add("default", () => (
        <Badge>
            Kotlin
        </Badge>
    ))