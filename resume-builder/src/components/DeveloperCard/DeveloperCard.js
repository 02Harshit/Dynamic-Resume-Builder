import React from "react";
import "./DeveloperCard.css";

const DeveloperCard = ({ imageUrl, githubLink, linkedinLink, name }) => {
  return (
    <div className="developer-card">
      {/* Main Image */}
      <div className="image-container">
        <img src={imageUrl} alt={`${name}'s profile`} className="profile-image" />

        {/* Overlay */}
        <div className="overlay">
          <h2>{name}</h2>
          <div className="logos">
            {/* GitHub Logo */}
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className="logo"
              />
            </a>
            {/* LinkedIn Logo */}
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <img
                src="https://openmoji.org/php/download_asset.php?type=emoji&emoji_hexcode=E046&emoji_variant=black"
                alt="LinkedIn"
                className="logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
