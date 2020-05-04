import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import BadgeList from '../BadgeList';
import ShowMoreButton from '../ShowMoreButton';
import GitRepoLink from '../GitRepoLink';

// Styles
import styles from './Project.module.scss';

const Project = ({ data, colorMode }) => {
    const { projectName, categories, languages, technologies, teamMembers, startDate, endDate, gitRepoLink, paragraphs } = data;

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article className={`${styles.projectOuterContainer} ${styles[colorMode]} ${isExpanded ? styles.expanded : ""}`}>
            <div className={styles.projectInnerContainer}>
                <div className={`${styles.headingContainer} fade`}>
                    <Heading type="secondary" colorMode={colorMode}>
                        {projectName}
                    </Heading>
                </div>
                {gitRepoLink !== "" &&
                    <div className={styles.gitRepoLinkContainer}>
                        <GitRepoLink to={gitRepoLink} />
                    </div>
                }
                <div className={styles.content}>
                    <section className="fade">
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
                    <section className="fade">
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
                    <section className="fade">
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
                    <section className="fade">
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
                    <section className="fade">
                        <div>
                            <Heading type="tertiary" colorMode={colorMode}>
                                Projectlaufzeit:
                        </Heading>
                        </div>
                        <div className={styles.projectDuration}>
                            {`${formatDate(startDate)} - ${formatDate(endDate)}`}
                        </div>
                    </section>
                    <section className="fade">
                        <div>
                            <Heading type="tertiary" colorMode={colorMode}>
                                Beschreibung:
                            </Heading>
                        </div>
                        <div className={styles.paragraphsContainer}>
                            {paragraphs.map((paragraph, paragraphIndex) => {
                                const { heading, description, image } = paragraph;
                                return (
                                    <div className={styles.paragraphContainer} key={paragraphIndex}>
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
            </div>
        </article>
    )
}

const formatDate = (date) => {
    const year = date.substr(0, 4);
    const month = date.substr(5, 2);
    return `${month}/${year}`;
}

Project.propTypes = {
    data: PropTypes.exact({
        _id: PropTypes.string,
        projectName: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.string),
        languages: PropTypes.arrayOf(PropTypes.string),
        technologies: PropTypes.arrayOf(PropTypes.string),
        teamMembers: PropTypes.arrayOf(PropTypes.string),
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        gitRepoLink: PropTypes.string,
        paragraphs: PropTypes.arrayOf(PropTypes.exact({
            heading: PropTypes.string,
            description: PropTypes.string,
            image: PropTypes.exact({
                position: PropTypes.string,
                url: PropTypes.string,
            })
        }))
    }).isRequired,
    colorMode: PropTypes.oneOf(["dark", "light"])
}

Project.defaultProps = {
    colorMode: "light"
}



export default Project;

