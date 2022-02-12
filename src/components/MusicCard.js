import PropTypes from 'prop-types';
import React from 'react';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      // favorites: [],
      check: false,
    };
  }

  favoriteList= async () => {
    const { check } = this.state;
    this.setState({ loading: true });
    const add = await addSong({ test: 'ola' });
    this.setState({
      loading: false,
      // favorites: add,
      check: !check,
    });
    console.log(add);
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { loading, check } = this.state;
    return (
      <div>
        <h1 id={ trackId }>{trackName}</h1>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        { loading ? <Loading />
          : (
            <label htmlFor={ trackId }>
              Favorita
              <input
                id={ trackId }
                type="checkbox"
                name="favoritos"
                data-testid={ `checkbox-music-${trackId}` }
                onChange={ this.favoriteList }
                checked={ check }
              />
            </label>
          )}
      </div>
    );
  }
}
MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};
export default MusicCard;
