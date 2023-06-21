import React, { Component } from 'react';
import Profile from './Profile';
import profileImage from './profileImage.jpg';

class App extends Component {
  
  state = {
    showProfile: false,
  };

  handleToggleProfile = () => {
    this.setState((prevState) => ({
      showProfile: !prevState.showProfile,
    }));
  };
  handleName = (name) => {
    alert(`Profile user's name is ${name}`);
  };

  render() {
    const { showProfile } = this.state;
    return (
      <div>
        <button style={{
          margin:'0px 700px 0px 700px',
            padding: '10px 20px',
            backgroundColor: '#008689',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }} onClick={this.handleToggleProfile}>
          {showProfile ? 'Hide Profile' : 'Show Profile'}
        </button>

        {showProfile && (
          <Profile
            fullName="Samer Khiari"
            bio="I'm a FULL STACK WEB DEV."
            profession="React Developer"
            handleName={this.handleName}
          >
            {profileImage}
          </Profile>
        )}
      </div>
    );
  }
}

export default App;
