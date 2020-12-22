import React, { Component } from 'react';

class Result extends Component {

  render() {
    let result = null;
    if (this.props.userResult === 3) {
      result = <div className='result bg-success text-light d-flex'>YOU WON !</div>
    }
    if (this.props.computerResult === 3) {
      result = <div className='result bg-error text-light d-flex'>You lost...</div>
    }

    return (
      <div>
        {result}
      </div>
    );
  }

}

export default Result;