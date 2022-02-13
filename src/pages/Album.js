import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      idAlbum: [],
      loading: false,
      allSong: [],
      listFavorites: [],
    };
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true });
    const allSong = await getMusics(id);
    const getAllMusics = allSong.slice(1);
    this.setState({
      idAlbum: getAllMusics,
      loading: false,
      allSong,
    });
    this.getFromLocal();
  }

  addFavorites= async ({ target }) => {
    const { idAlbum } = this.state;
    this.setState({ loading: true });
    if (target.checked === true) {
      const adds = idAlbum.find((item) => item.trackId === Number(target.id));
      await addSong(adds);
      this.getFromLocal();
    }
  }

  getFromLocal = async () => {
    const getLocal = await getFavoriteSongs();
    console.log(getLocal);
    if (getLocal) {
      this.setState({
        listFavorites: getLocal,
        loading: false,
      });
    }
  }

  verifyCheck = (id) => {
    const { listFavorites } = this.state;
    console.log(listFavorites);
    const verify = listFavorites.some((item) => item.trackId === id);
    return verify;
  }

  render() {
    const {
      idAlbum,
      loading,
      allSong,
    } = this.state;
    const verifyName = allSong.length && allSong[0].artistName;
    const verifyAlbum = allSong.length && allSong[0].collectionName;
    const verifyImage = allSong.length && allSong[0].artworkUrl100;
    return (
      <div data-testid="page-album">
        <Header />
        {loading ? <Loading />
          : (
            <div>
              <div>
                <img src={ verifyImage } alt="Imagem do álbum" />
                <h2 data-testid="artist-name">{verifyName}</h2>
                <h2 data-testid="album-name">{verifyAlbum}</h2>
              </div>
              {idAlbum.map((item) => (<MusicCard
                { ...item }
                key={ item.trackId }
                handleCheck={ this.addFavorites }
                favorites={ this.verifyCheck(item.trackId) }
              />))}
            </div>
          )}

      </div>
    );
  }
}
Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;

// Source: https://www.devmedia.com.br/javascript-slice-selecionando-elementos-de-uma-string-ou-array/39810
