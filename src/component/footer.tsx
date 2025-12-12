import React, { useState, useEffect } from 'react';
import forkIcon from '../media/github-repo-forked.svg';
import starIcon from '../media/github-star.svg';

// Footer component which links to GitHub repo and displays repo stats.
const Footer: React.FC = () => {
  const [originalRepoInfo, setOriginalRepoInfo] = useState([0, 0]);
  const [enhancedRepoInfo, setEnhancedRepoInfo] = useState([0, 0]);

  // Fetches repo information from GitHub.
  useEffect(() => {
    const fetchRepoInfo = async (repoUrl: string): Promise<number[]> => {
      const headers = new Headers({
        'Authorization': `${process.env.REACT_APP_GITHUB_AUTHORIZATION_TOKEN}`,
      });
      const result = await fetch(repoUrl, { headers: headers });
      const json = await result.json();
      return [json.stargazers_count, json.forks_count];
    };

    fetchRepoInfo('https://api.github.com/repos/jbberinger/visual-barbell-calculator')
      .then(res => setOriginalRepoInfo(res));

    fetchRepoInfo('https://api.github.com/repos/AnthonyMickaelAlexis/visual-barbell-calculator')
      .then(res => setEnhancedRepoInfo(res));
  }, []);

  return (
    <footer className='footer-container'>
      <div>
        <a href="https://github.com/jbberinger/visual-barbell-calculator" target="_blank" rel="noopener noreferrer">
          <h5>Designed & Built by Justin Beringer</h5>
          <div className='footer-repo-container'>
            <div className='footer-icon-container'>
              <img src={starIcon} className="footer-icon-star" alt="star icon" />
              <div className='footer-repo-info'>{` ${originalRepoInfo[0]}`}</div>
            </div>
            <div className='footer-icon-container'>
              <img src={forkIcon} className="footer-icon-fork" alt="fork icon" />
              <div className='footer-repo-info'>{` ${originalRepoInfo[1]}`}</div>
            </div>
          </div>
        </a>
        <a href="https://github.com/AnthonyMickaelAlexis/visual-barbell-calculator" target="_blank" rel="noopener noreferrer">
          <h5>Enhanced Version by Anthony Mickael Alexis</h5>
          <div className='footer-repo-container'>
            <div className='footer-icon-container'>
              <img src={starIcon} className="footer-icon-star" alt="star icon" />
              <div className='footer-repo-info'>{` ${enhancedRepoInfo[0]}`}</div>
            </div>
            <div className='footer-icon-container'>
              <img src={forkIcon} className="footer-icon-fork" alt="fork icon" />
              <div className='footer-repo-info'>{` ${enhancedRepoInfo[1]}`}</div>
            </div>
          </div>
        </a>
      </div>
    </footer>
  )
}

export default Footer;
