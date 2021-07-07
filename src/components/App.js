import React from 'react';

import SearchBar from './searchBar/SearchBar';
//import { getImages } from '../actions/ImageList';
import unsplash from '../api/unsplash';
import ImageList from './imageList/ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    //const data = await getImages(term);

    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '20px' }}>
        <SearchBar onSubmit2={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
