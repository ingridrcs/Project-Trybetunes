import React from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import Card from '../components/Card';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      onSearch: true,
      valueInput: '',
      album: [],
      loading: false,
      clear: '',
    };
    this.buttonSearch = this.buttonSearch.bind(this);
    this.getAlbum = this.getAlbum.bind(this);
  }

  getAlbum = async (event) => {
    event.preventDefault();
    const { valueInput } = this.state;
    this.setState({ loading: true });
    const getAlbum = await searchAlbumsAPI(valueInput);
    this.setState({ album: getAlbum, loading: false, clear: '' });
  }

  buttonSearch(event) {
    const { value, name } = event.target;
    this.setState(() => ({
      [name]: value }
    ), () => {
      const { valueInput } = this.state;
      const numMin = 2;
      const verifySearch = valueInput.length >= numMin;
      this.setState({ onSearch: !verifySearch });
    });
  }

  render() {
    const { onSearch, loading, album, valueInput, clear } = this.state;
    return (
      <div>
        <div data-testid="page-search" />
        <Header />
        <form>
          <label htmlFor="searchbut">
            { !loading ? (
              <>
                <input
                  data-testid="search-artist-input"
                  name="valueInput"
                  onChange={ this.buttonSearch }
                />
                <button
                  type="submit"
                  data-testid="search-artist-button"
                  disabled={ onSearch }
                  onClick={ this.getAlbum }
                  value={ clear }
                >
                  Pesquisar
                </button>
              </>
            ) : (
              <Loading />
            )}
          </label>
        </form>
        <div>
          { album.length
            ? <p>{`Resultado de álbuns de: ${valueInput}`}</p>
            : <p>Nenhum álbum foi encontrado</p>}

          {album.map((item) => (<Card
            key={ item.collectionId }
            artistId={ item.artistId }
            artistName={ item.artistName }
            collectionId={ item.collectionId }
            collectionName={ item.collectionName }
            collectionPric={ item.collectionPrice }
            artworkUrl100={ item.artworkUrl100 }
          />))}
        </div>
      </div>
    );
  }
}

export default Search;
