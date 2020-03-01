import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import GitRepoLink from './GitRepoLink';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "GitRepoLink",
    Component: GitRepoLink,
    stories: [{
        to: "https://google.de"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))