import PropTypes from 'prop-types';
import React from 'react';

class MusicCard extends React.Component {
  // componentDidMount = async () => {
  //   this.setState({ loading: true });
  //   const getFavorites = await getFavoriteSongs();
  //   this.setState({
  //     favorites: getFavorites,
  //     loading: false,
  //   });
  // }

  render() {
    const { favorites, trackName, previewUrl, trackId, handleCheck } = this.props;

    return (
      <div>
        <h1 id={ trackId }>{trackName}</h1>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>

        <label htmlFor={ trackId }>
          Favorita
          <input
            id={ trackId }
            type="checkbox"
            name="favoritos"
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ handleCheck }
            checked={ favorites }
          />
        </label>
      </div>
    );
  }
}
MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  handleCheck: PropTypes.func.isRequired,
  favorites: PropTypes.bool.isRequired,
};
export default MusicCard;
