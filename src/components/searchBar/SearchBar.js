import React from 'react';

import '../searchBar/SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit2(this.state.term);
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={e => this.onFormSubmit(e)}>
          <div className='ui field'>
            <label className='ui label'>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
