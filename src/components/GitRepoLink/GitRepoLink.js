import React from 'react';
import PropTypes from 'prop-types';

import styles from './GitRepoLink.module.scss';

const GitRepoLink = ({ to }) => (
    <a title="Zum Git Repository" className={`${styles.gitRepoLink} fade`} href={to} target="_blank" rel="noopener noreferrer">
        <div className={styles.gitRepoLogosContainer}>
            <div className={styles.bitBucketLogoContainer}>
                <svg height="2256" preserveAspectRatio="xMidYMid" width="2500" xmlns="http://www.w3.org/2000/svg" viewBox="-0.9662264221278978 -0.5824607696358868 257.93281329857973 230.8324730411935">
                    <linearGradient id="a" x1="108.633%" x2="46.927%" y1="13.818%" y2="78.776%">
                        <stop offset=".18" stopColor="#0052cc" />
                        <stop offset="1" stopColor="#2684ff" />
                    </linearGradient>
                    <g fill="none">
                        <path d="M101.272 152.561h53.449l12.901-75.32H87.06z" />
                        <path d="M8.308 0A8.202 8.202 0 0 0 .106 9.516l34.819 211.373a11.155 11.155 0 0 0 10.909 9.31h167.04a8.202 8.202 0 0 0 8.201-6.89l34.82-213.752a8.202 8.202 0 0 0-8.203-9.514zm146.616 152.768h-53.315l-14.436-75.42h80.67z" fill="#2684ff" /><path d="M244.61 77.242h-76.916l-12.909 75.36h-53.272l-62.902 74.663a11.105 11.105 0 0 0 7.171 2.704H212.73a8.196 8.196 0 0 0 8.196-6.884z" fill="url(#a)" />
                    </g>
                </svg>
            </div>
            <div className={styles.gitLabLogoContainer}>
                <svg width="2500" height="2305" viewBox="0 0 256 236" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M128.075 236.075l47.104-144.97H80.97l47.104 144.97z" fill="#E24329" />
                    <path d="M128.075 236.074L80.97 91.104H14.956l113.119 144.97z" fill="#FC6D26" />
                    <path d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012-113.12-144.97z" fill="#FCA326" />
                    <path d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0l-28.37 87.315z" fill="#E24329" />
                    <path d="M128.075 236.074l47.104-144.97h66.015l-113.12 144.97z" fill="#FC6D26" />
                    <path d="M241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012 113.119-144.97z" fill="#FCA326" />
                    <path d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0l28.37 87.315z" fill="#E24329" />
                </svg>
            </div>
            <div className={styles.gitHubLogoContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            </div>
        </div>
    </a>
);

GitRepoLink.propTypes = {
    to: PropTypes.string.isRequired
}


export default GitRepoLink;