import React from 'react';
// import Loading from '../components/Loading';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      // loading: true,
    };
  }

  // componentDidMount() {
  //   const num = 1000;
  //   setTimeout(() => this.setState({ loading: false }), num);
  // }

  render() {
    // const { loading } = this.state;
    // if (loading) return <Loading />;
    return (
      <>
        <div data-testid="page-search" />
        <Header />
      </>
    );
  }
}

export default Search;
