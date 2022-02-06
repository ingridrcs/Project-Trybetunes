import React from 'react';
import { Link } from 'react-router-dom';

class Favorites extends React.Component {
  render() {
    return (
      <nav>
        <div data-testid="page-favorites">
          <Link to="/favorites" />
        </div>
      </nav>
    );
  }
}

export default Favorites;
