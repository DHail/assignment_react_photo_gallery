import React, { Component } from 'react';
import InputGroup from './elements/InputGroup';
// import Input from './elements/Input'
import Select from './elements/Select';
import AllPhotosContainer from './AllPhotosContainer';

const photoHelper = require('../helpers/getPhotos');
const filters = ['All', 'Normal', 'Lark', 'Inkwell', 'Reyes', 'Valencia'];

class Form extends Component {
  constructor() {
    super();
    this.state = {
      filter: 'All',
      page: 1,
      sort: true,
      searchTerm: ''
    };
  }

  onChangeInput = e => {
    console.log('Changed state to: ', e.target.value);
    this.setState({
      filter: e.target.value
    });
    console.log(this.state.filter);
  };

  paginationHandler = e => {
    if (e.target.name == 'next') {
      this.setState({
        page: this.state.page + 1
      });
    } else {
      this.setState({
        page: this.state.page - 1
      });
    }
  };

  sortHandler = e => {
    this.setState({
      sort: !this.state.sort
    });
  };

  searchHandler = e => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    let photosToDisplay;
    const { filter, page, sort, searchTerm } = this.state;
    photosToDisplay = photoHelper.getPhotos(filter);
    photosToDisplay = photoHelper.paginatePhotos(photosToDisplay, page);

    photosToDisplay.sort(function(a, b) {
      if (sort) return a.postTime - b.postTime;
    });

    photosToDisplay = photoHelper.searchPhotos(searchTerm, photosToDisplay);

    return (
      <div>
        <form>
          <div className="well">
            <InputGroup name="filter" labelText="Filter">
              <Select
                name="filter"
                options={filters}
                value={filter}
                onChange={this.onChangeInput}
              />
            </InputGroup>
          </div>
          <div className="well">
            <InputGroup name="search" labelText="Search">
              <input type="text" name="search" onChange={this.searchHandler} />
            </InputGroup>
            <button type="button" name="search">
              Search
            </button>
          </div>
          <button type="button" name="sort" onClick={this.sortHandler}>
            Sort Results
          </button>
        </form>

        <h2>Number of Results: {photoHelper.getPhotos(filter).length}</h2>

        <AllPhotosContainer filteredPhotos={photosToDisplay} />

        <p>Current Page: {this.state.page}</p>

        <button type="button" name="previous" onClick={this.paginationHandler}>
          Previous page
        </button>
        <button type="button" name="next" onClick={this.paginationHandler}>
          Next page
        </button>

      </div>
    );
  }
}

export default Form;
