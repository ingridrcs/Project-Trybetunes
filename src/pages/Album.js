import React from 'react';
import { Link } from 'react-router-dom';

class Album extends React.Component {
  render() {
    return (
      <nav>
        <div data-testid="page-album">
          <Link to="/album/:id" />
        </div>

      </nav>
    );
  }
}

export default Album;
