import React from 'react';
import Search from '../pages/Search';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import ProfileEdit from '../pages/ProfileEdit';
import Profile from '../pages/Profile';

class Header extends React.Component {
  render() {
    return (
      <header data-testid="header-component">
        <Search />
        <Album />
        <Favorites />
        <Profile />
        <ProfileEdit />
      </header>
    );
  }
}

export default Header;
