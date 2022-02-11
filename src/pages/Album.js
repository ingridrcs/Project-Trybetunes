import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      idAlbum: [],
      nameImage: '',
      loading: false,
      allSong: [],
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
    console.log(getAllMusics);
  }

  render() {
    const {
      idAlbum,
      nameImage,
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
                key={ item.trackId }
                trackName={ item.trackName }
                previewUrl={ item.previewUrl }
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
// Album.propTypes = {
//   match: PropTypes.string.isRequired,
//   params: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };
// Album.propTypes = {
//   match: PropTypes.objectOf(
//     PropTypes.shape({
//       params: PropTypes.objectOf(
//         PropTypes.shape({
//           id: PropTypes.string.isRequired,
//         }).isRequired,
//       ).isRequired,
//     }).isRequired,
//   ).isRequired,
// };

export default Album;

// Source: https://www.devmedia.com.br/javascript-slice-selecionando-elementos-de-uma-string-ou-array/39810
