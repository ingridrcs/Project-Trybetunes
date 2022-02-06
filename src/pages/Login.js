import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      onButton: true,
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onButtonCLick = this.onButtonCLick.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState(() => ({
      [name]: value }
    ), () => {
      const { userName } = this.state;
      const numMax = 3;
      const verifyUserName = userName.length >= numMax;
      this.setState({ onButton: !verifyUserName });
    });
  }

  async onButtonCLick(event) {
    event.preventDefault();
    const { userName } = this.state;
    createUser({ name: userName });
    this.setState({ loading: true });
  }

  render() {
    const { onButton, loading } = this.state;
    if (loading) return <Redirect to="/search" />;
    return (
      <nav>
        <div data-testid="page-login">
          <Link to="/">Login</Link>
          <form>
            <label htmlFor="nome">
              Nome
              <input
                data-testid="login-name-input"
                name="userName"
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="submit"
              data-testid="login-submit-button"
              name="onButtonCLick"
              disabled={ onButton }
              onClick={ this.onButtonCLick }
            >
              Entrar
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Login;

// Source: https://pt.stackoverflow.com/questions/367738/diferen%C3%A7a-entre-comandos-onclick-no-react
// https://celke.com.br/artigo/como-consumir-dados-da-api-com-react
