import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    return (
      <nav>
        <div data-testid="page-profile">
          <Link to="/profile" />
        </div>
      </nav>
    );
  }
}

export default Profile;
