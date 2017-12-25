import React, { Component } from 'react'
import Label from './Label'

export default class LabelContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      description: '',
      labels: [
        {
          description: 'Apple Pie',
          id: '123456789',
        },
      ],
      addingLabel: false,
    }
  }

  handleChange = (key, value) => {
    this.setState(() => ({
      [key]: value,
    }))
  }
  addLabel = () => {
    if (this.state.id !== '' && this.state.description !== '') {
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
        addingLabel: false,
      }))
    } else {
      alert('Please fill in the id and description')
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            {this.state.labels.map((label, i) => (
              <Label key={i} id={label.id} description={label.description} />
            ))}
            <div className="col-sm-4 mt-4">
              {!this.state.addingLabel &&
                <button
                  className="btn btn-primary btn-lg btn-block"
                  onClick={e => this.handleChange('addingLabel', true)}
                >
                  Add Label
                </button>}
              {this.state.addingLabel &&
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <input
                        id="description"
                        type="text"
                        value={this.state.description}
                        className="form-control"
                        onChange={e =>
                          this.handleChange('description', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="id">Id</label>
                      <input
                        id="id"
                        type="text"
                        className="form-control"
                        value={this.state.id}
                        onChange={e => this.handleChange('id', e.target.value)}
                      />
                    </div>
                    <button onClick={e => this.addLabel()}>Save</button>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
