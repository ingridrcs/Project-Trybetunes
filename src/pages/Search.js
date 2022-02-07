import React from 'react';
// import Loading from '../components/Loading';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      // loading: true,
      onSearch: true,
      musicName: '',
    };
    this.buttonSearch = this.buttonSearch.bind(this);
  }

  // componentDidMount() {
  //   const num = 1000;
  //   setTimeout(() => this.setState({ loading: false }), num);
  // }
  buttonSearch(event) {
    const { value, name } = event.target;
    this.setState(() => ({
      [name]: value }
    ), () => {
      const { musicName } = this.state;
      const numMin = 2;
      const verifySearch = musicName.length >= numMin;
      this.setState({ onSearch: !verifySearch });
    });
  }

  render() {
    const { onSearch } = this.state;
    // const { loading } = this.state;
    // if (loading) return <Loading />;
    return (
      <>
        <div data-testid="page-search" />
        <Header />
        <form>
          <label htmlFor="searchbut">
            Pesquisar
            <input
              data-testid="search-artist-input"
              name="musicName"
              onChange={ this.buttonSearch }
            />
          </label>
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ onSearch }
          >
            Pesquisar
          </button>
        </form>
      </>
    );
  }
}

export default Search;
