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
      [e.target.filter]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <div className="well">
            <InputGroup name="filter" labelText="Filter">
              <Select
                name="filter"
                options={filters}
                value="Normal"
                onChange={this.onChangeInput}
              />
            </InputGroup>
          </div>
        </form>

        <AllPhotosContainer
          filteredPhotos={photoHelper.getPhotos(this.state.filter)}
        />

      </div>
    );
  }
}

export default Form;
