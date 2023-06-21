import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children}) => {
  const styles = {
    container: {
      textAlign: 'center',
      margin: '20px',
      padding: '10px',
      border: '1px solid gray',
    },
    image: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.container}>
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <img src={children} alt="Profile" style={styles.image} />
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'foulen ben foulen',
  bio: 'No bio available',
  profession: 'Unknown',
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
