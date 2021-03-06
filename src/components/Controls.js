import React, { Component } from 'react';
import '../styles/Controls.css';
import PropTypes from 'prop-types';

class Controls extends Component {
  constructor(props){
    super(props);
    this.state = {
      district: ''
    };
  }

  handleInput = (event) => {
    this.setState({district: event.target.value}, () => {
      this.props.handleSearch(this.state.district);
    });
  }

  render() {
    return (
      <header className='search-wrap'>
        <h1> HeadCount 2.0 </h1>
        <input 
          onChange={this.handleInput} 
          value={this.state.district} 
          type='text' placeholder='Enter District Name' 
        />  
      </header>
    );
  }
}

Controls.propTypes = {
  handleSearch: PropTypes.func,
  district: PropTypes.string
};

export default Controls;