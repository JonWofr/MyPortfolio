import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';
import BadgeList from '../BadgeList';
import ShowMoreButton from '../ShowMoreButton';

// Styles
import styles from './Project.module.scss';

const Project = ({ projectName, categories, languages, technologies, teamMembers, startDate, endDate, gitRepoLink, paragraphs, colorMode }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const visibleParagraphs = isExpanded ? paragraphs : (paragraphs.length > 0 ? [paragraphs[0]] : []);

    return (
        <article className={`${styles.project} ${styles[colorMode]}`}>
            <div className={styles.headingContainer}>
                <Heading type="secondary" colorMode={colorMode}>
                    {projectName}
                </Heading>
            </div>
            <div className={styles.content}>
                <section>
                    <div>
                        <Heading type="tertiary" colorMode={colorMode}>
                            Kategorien
                        </Heading>
                    </div>
                    <div>
                        <BadgeList
                            items={categories}
                            direction="horizontal"
                            colorMode={colorMode}
                        />
                    </div>
                </section>
                <section>
                    <div>
                        <Heading type="tertiary" colorMode={colorMode}>
                            Sprachen
                        </Heading>
                    </div>
                    <div>
                        <BadgeList
                            items={languages}
                            direction="horizontal"
                            colorMode={colorMode}
                        />
                    </div>
                </section>
                <section>
                    <div>
                        <Heading type="tertiary" colorMode={colorMode}>
                            Verwendete Technologien:
                        </Heading>
                    </div>
                    <div>
                        <BadgeList
                            items={technologies}
                            direction="horizontal"
                            colorMode={colorMode}
                        />
                    </div>
                </section>
                <section>
                    <div>
                        <Heading type="tertiary" colorMode={colorMode}>
                            Teammitglieder
                        </Heading>
                    </div>
                    <div>
                        <BadgeList
                            items={teamMembers}
                            direction="horizontal"
                            colorMode={colorMode}
                        />
                    </div>
                </section>
                <section>
                    <div>
                        <Heading type="tertiary" colorMode={colorMode}>
                            Projectlaufzeit:
                        </Heading>
                    </div>
                    <div className={styles.projectDuration}>
                        {`${startDate} - ${endDate}`}
                    </div>
                </section>
                <section>
                    <div>
                        <Heading type="tertiary" colorMode={colorMode}>
                            Beschreibung:
                        </Heading>
                    </div>
                    <div className={styles.paragraphsContainer}>
                        {visibleParagraphs.map((visibleParagraph, visibleParagraphIndex) => {
                            const { heading, description, image } = visibleParagraph;
                            return (
                                <div className={styles.paragraphContainer} key={visibleParagraphIndex}>
                                    <Paragraph
                                        heading={heading}
                                        description={description}
                                        image={image}
                                        colorMode={colorMode}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </section>
                {/*                 <a href={gitRepoLink} target="_blank" rel="noopener noreferrer">
                    <Button type="button" size="medium">
                        Zum Git Repo!
                    </Button>
                </a> */}
                {paragraphs.length > 1 &&
                    <div className={styles.showMoreButtonContainer}>
                        <ShowMoreButton
                            isExpanded={isExpanded}
                            onClick={() => setIsExpanded(!isExpanded)}
                            colorMode={colorMode}
                        />
                    </div>
                }
            </div>
        </article>
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
    })).isRequired,
    colorMode: PropTypes.oneOf(["dark", "light"])
}

Project.defaultProps = {
    colorMode: "light"
}



export default Project;

