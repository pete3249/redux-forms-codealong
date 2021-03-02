import React, { Component } from 'react'
import {connect} from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      text: '',
    });
  };

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>add todo</label>
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
        </p>
        <input type="submit" />
      </form>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}

// do not need mapStateToProps because component doesn't need any state
// Only need to dispatch an action here
export default connect(null, mapDispatchToProps)(CreateTodo);
