import React from 'react';
import PropTypes from 'prop-types';

// Components
import Heading from '../Heading';
import List from '../List';
import Paragraph from '../Paragraph';
import Button from '../Button';
import Badge from '../Badge';

// Styles
import styles from './Project.module.scss';

const Project = ({ projectName, categories, technologies, teamMembers, startDate, endDate, gitRepoLink, paragraphs }) => (
    <div>
        <Heading type="secondary">
            {projectName}
        </Heading>
        <List items={categories}></List>
        <List items={technologies}></List>
        <List items={teamMembers}></List>
        <p>{`${startDate} - ${endDate}`}</p>
        <div>
            {paragraphs.length > 0 && paragraphs.map((paragraph, paragraphIndex) => {
                return (
                    <Paragraph key={paragraphIndex} image={paragraph.image}>{paragraph.description}</Paragraph>
                )
            })}
        </div>
        <a href={gitRepoLink} target="_blank" rel="noopener noreferrer">
            <Button type="button" size="medium">
                Zum Git Repo!
            </Button>
        </a>
    </div>
)

Project.propTypes = {
    projectName: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    teamMembers: PropTypes.arrayOf(PropTypes.string).isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    gitRepoLink: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.exact({
        heading: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.exact({
            position: PropTypes.string,
            url: PropTypes.string,
            dataUrl: PropTypes.string
        })
    })).isRequired
}

export default Project;

