import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      allName: '',
    };
  }

  componentDidMount = async () => {
    const getName = await getUser();
    this.setState({ allName: getName.name, loading: false });
    console.log(getName);
    console.log(getName.name);
  }

  render() {
    const { allName, loading } = this.state;
    return (
      <header data-testid="header-component">
        { !loading ? (
          <p data-testid="header-user-name">{allName}</p>
        ) : (
          <Loading />
        )}
        <Link data-testid="link-to-search" to="/search">Pesquisa</Link>
        <Link data-testid="link-to-favorites" to="/favorites">Favoritas</Link>
        <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
      </header>
    );
  }
}

export default Header;
