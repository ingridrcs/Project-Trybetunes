import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const {
      artistId,
      artistName,
      collectionId,
      collectionName,
      artworkUrl100,
    } = this.props;

    return (

      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <img src={ artworkUrl100 } alt={ artistName } />
        <h3>{ artistName }</h3>
        <p>{ collectionId }</p>
        <p>{ collectionName }</p>
        <p>{ artistId }</p>

      </Link>
    );
  }
}
Card.propTypes = {
  artistId: PropTypes.number.isRequired,
  artistName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
  collectionName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
};

export default Card;
