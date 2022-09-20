import React, { Component } from 'react'
import './style.css'

export class NewArticlePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      userId: '',
      body: ''
    }
  }

  handleInputChange (event) {
    return this.setState(event.target.value)
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <div className="centered">
        <h2>Add new article</h2>
        <div>
          <label className="label" htmlFor="">Title</label>
          <input name="title" type="text" value={ this.state.title } onChange={this.handleInputChange}/>
          <label className="label" htmlFor="">Items count</label>
          <input name="userId" type="text" value={ this.state.userId } onChange={this.handleInputChange}/>
          <label className="label" htmlFor="">Body</label>
          <input name="body" type="text" value={ this.state.body } onChange={this.handleInputChange}/>
          <input className="button" type="submit" value="Aceptar" />
        </div>
      </div>
    )
  }
}
