import React, { Component } from 'react'
import Label from './Label'

export default class LabelContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      description: '',
      labels: [],
    }
  }

  handleChange = (key, value) => {
    this.setState(() => ({
      [key]: value,
    }))
  }
  addLabel = () => {
    if (this.state.id != '' && this.state.description != '') {
      const labels = [
        ...this.state.labels,
        {
          id: this.state.id,
          description: this.state.description,
        },
      ]
      this.setState(() => ({
        id: '',
        description: '',
        labels,
      }))
    } else {
      alert('Please fill in the id and description')
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <input
              type="text"
              value={this.state.description}
              onChange={e => this.handleChange('description', e.target.value)}
            />
            <input
              type="text"
              value={this.state.id}
              onChange={e => this.handleChange('id', e.target.value)}
            />
            <button onClick={() => this.addLabel()}>Add Label</button>
          </div>
        </div>
        <div className="row">
          {this.state.labels.map((label, i) => (
            <Label key={i} id={label.id} description={label.description} />
          ))}
        </div>
      </div>
    )
  }
}
