import React from 'react';
import { Link } from 'react-router-dom';

class ProfileEdit extends React.Component {
  render() {
    return (
      <nav>
        <div data-testid="page-profile-edit">
          <Link to="/profile/edit" />
        </div>
      </nav>
    );
  }
}

export default ProfileEdit;
