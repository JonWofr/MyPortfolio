import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';
import BadgeList from '../BadgeList';

// Styles
import styles from './Project.module.scss';

// Icons
import arrowDownIcon from '../../assets/icons/arrowDown.svg';
import arrowUpIcon from '../../assets/icons/arrowUp.svg';

const Project = ({ projectName, categories, technologies, teamMembers, startDate, endDate, gitRepoLink, paragraphs }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const visibleParagraphs = isExpanded ? paragraphs : (paragraphs.length > 0 ? [paragraphs[0]] : []);

    return (
        <div className={styles.project}>
            <Heading type="secondary">
                {projectName}
            </Heading>
            <Heading type="tertiary">
                Kategorien
            </Heading>
            <BadgeList
                items={categories}
                direction="horizontal"
            />
            <Heading type="tertiary">
                Verwendete Technologien:
            </Heading>
            <BadgeList
                items={technologies}
                direction="horizontal"
            />
            <Heading type="tertiary">
                Teammitglieder
            </Heading>
            <BadgeList
                items={teamMembers}
                direction="horizontal"
            />
            <Heading type="tertiary">
                Projectlaufzeit:
            </Heading>
            <p>{`${startDate} - ${endDate}`}</p>
            <div className={styles.paragraphsContainer}>
                {visibleParagraphs.map((visibleParagraph, visibleParagraphIndex) => {
                    const { heading, description, image } = visibleParagraph;
                    return (
                        <div key={visibleParagraphIndex} className={styles.paragraphContainer}>
                            <Paragraph
                                heading={heading}
                                description={description}
                                image={image}
                            />
                        </div>
                    )
                })}
            </div>
            <a href={gitRepoLink} target="_blank" rel="noopener noreferrer">
                <Button type="button" size="medium">
                    Zum Git Repo!
                </Button>
            </a>
            <div className={styles.moreBar}>
                <span>
                    {isExpanded ? "Weniger" : "Mehr"}
                </span>
                <button onClick={() => setIsExpanded(!isExpanded)}>
                    <img src={isExpanded ? arrowUpIcon : arrowDownIcon} alt="" />
                </button>
            </div>
        </div>
    )
}

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

