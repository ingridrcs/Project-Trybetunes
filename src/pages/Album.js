import React from 'react';
import Header from '../components/Header';
// import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     getAllMusics: '',
  //   };
  // }
  render() {
    return (
      <>
        <div data-testid="page-album" />
        <Header />
      </>
    );
  }
}

export default Album;
