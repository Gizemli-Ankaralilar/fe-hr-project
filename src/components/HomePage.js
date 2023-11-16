// src/components/HomePage.js

import React from 'react';
import './HomePage.scss';

function HomePage() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div className="homepage">
            <h2 style={{ textAlign: 'center' }}>Welcome to the Home Page!</h2>
            <div className="photo-gallery">
                <img
                    src={process.env.PUBLIC_URL + 'src/images/3259374_github_media_social_icon.svg'}
                />
            </div>

            {/* Footer section */}
            <div className="footer">
                <div className="social-icons">
                    <img
                        src={'src/images/GitHub-Mark-ea2971cee799.png'}
                        alt="GitHub"
                        onClick={() => openInNewTab('https://github.com/your-github-username')}
                    />
                    <img
                        src={'src/images/GitHub-Mark-ea2971cee799.png'}
                        alt="LinkedIn"
                        onClick={() => openInNewTab('https://www.linkedin.com/in/your-linkedin-username')}
                    />
                </div>
                <div style={{ marginTop: "16px" }}>
                    ©2023 Created by Java10- Team 1
                </div>
            </div>
        </div>
    );
}

export default HomePage;
