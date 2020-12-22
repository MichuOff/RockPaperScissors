import React, { Component } from 'react';
import './Play.css'

class Play extends Component {
  handleClick(e) {
    const value = e.target.textContent;
    this.props.setChoice(value);
  }

  render() {
    return (
        <div className='some-page-wrapper'>
            <div className='row'>
                <div className='column'>
                    <div className='rock-column'>
                    <button className='btn btn-success' onClick={this.handleClick.bind(this)}>Rock</button>
                    </div>
                </div>
                <div className='column'>
                    <div className='paper-column'>
                    <button className='btn btn-success' onClick={this.handleClick.bind(this)}>Paper</button>
                    </div>
                </div>
                <div className='column'>
                    <div className='siscors-column'>
                    <button className='btn btn-success' onClick={this.handleClick.bind(this)}>Siscors</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }

}

export default Play;