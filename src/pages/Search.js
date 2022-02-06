import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const num = 1000;
    setTimeout(() => this.setState({ loading: false }), num);
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
    return (
      <nav>
        <div data-testid="page-search">
          <Link to="/search" />
        </div>
      </nav>
    );
  }
}

export default Search;
