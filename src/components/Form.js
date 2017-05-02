import React, { Component } from 'react';
import InputGroup from './elements/InputGroup';
// import Input from './elements/Input'
import Select from './elements/Select';
import AllPhotosContainer from './AllPhotosContainer';

const photoHelper = require('../helpers/getPhotos');
const filters = ['All', 'Normal', 'Lark', 'Inkwell', 'Reyes', 'Valencia'];
let photosToDisplay;

class Form extends Component {
  constructor() {
    super();
    this.state = {
      filter: 'All',
      page: 1
    };
  }

  onChangeInput = e => {
    console.log('Changed state to: ', e.target.value);
    this.setState({
      filter: e.target.value
    });
    console.log(this.state.filter);
  };

  onClickHandler = e => {
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

  render() {
    const { filter, page } = this.state;
    photosToDisplay = photoHelper.getPhotos(filter);
    photosToDisplay = photoHelper.paginatePhotos(photosToDisplay, page);

    return (
      <div>
        <form>
          <div className="well">
            <InputGroup name="filter" labelText="Filter">
              <Select
                name="filter"
                options={filters}
                value={this.state.filter}
                onChange={this.onChangeInput}
              />
            </InputGroup>
          </div>
        </form>
        <h2>Number of Results: {photoHelper.getPhotos(filter).length}</h2>

        <AllPhotosContainer filteredPhotos={photosToDisplay} />

        <p>Current Page: {this.state.page}</p>

        <button type="button" name="previous" onClick={this.onClickHandler}>
          Previous page
        </button>
        <button type="button" name="next" onClick={this.onClickHandler}>
          Next page
        </button>

      </div>
    );
  }
}

export default Form;
