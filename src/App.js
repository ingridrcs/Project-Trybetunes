import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
// import Header from './components/Header';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import ProfileEdit from './pages/ProfileEdit';
import Profile from './pages/Profile';

class App extends React.Component {
  render() {
    return (

      <div>
        <p>TrybeTunes</p>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="/profile" component={ Profile } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>

    );
  }
}

export default App;
