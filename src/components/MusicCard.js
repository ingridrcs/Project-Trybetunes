import PropTypes from 'prop-types';
import React from 'react';
// import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
    //   loading: false,
    };
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    // const { loading } = this.state;
    return (
      <div>
        <h1 id={ trackId }>{trackName}</h1>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        {/* <label htmlFor="favoritos">
          Favorita
          <input
            type="checkbox"
            name="favoritos"
            data-testid={ `checkbox-music-${trackId}` }
          />
        </label> */}
      </div>
    );
  }
}
MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
};
export default MusicCard;
