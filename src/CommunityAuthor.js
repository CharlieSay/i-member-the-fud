import React from 'react';

const CommunityAuthor = ({ name, imageUrl, twitterUrl, githubUrl, description }) => {
  return (
    <>
      <h2 className="communitySection">About the community author</h2>
      <div className="authorSection">
        <div className="authorImg">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="authorDetails">
          <div className="authorName">
            <strong>
              {name}
              https://www.reddit.com/r/Superstonk/comments/n8mizw/here_is_a_complete_compilation_documenting_the/
            </strong>
          </div>
          <div className="authorDesc">{description}</div>
        </div>
      </div>
    </>
  );
};

export default CommunityAuthor;
