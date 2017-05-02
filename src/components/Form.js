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
      filter: 'All'
    };
  }

  onChangeInput = e => {
    console.log('Changed state to: ', e.target.value);
    this.setState({
      filter: e.target.value
    });
      console.log(this.state.filter)
  };



  render() {
    const {filter} = this.state;
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

        <AllPhotosContainer
          filteredPhotos={photoHelper.getPhotos(filter)}
        />

      </div>
    );
  }
}

export default Form;
