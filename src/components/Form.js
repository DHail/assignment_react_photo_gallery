import React, {Component} from 'react'
import InputGroup from './elements/InputGroup'
// import Input from './elements/Input'
import Select from './elements/Select'

const filters = ['Normal', 'Lark', 'Inkwell', 'Reyes', 'Valencia']

class Form extends Component {
  render() {
    return (
      <form>
        <div className="well">
          <InputGroup name="filter" labelText="Filter">
            <Select
              name="filter"
              options={filters}
              value="Normal"
            />
          </InputGroup>
        </div>
      </form>
    )
  }
}

export default Form;