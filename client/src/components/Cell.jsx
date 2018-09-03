import React from 'react';
import { Collection } from 'mongoose';

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div onClick={() => this.props.handleCellClick(this.props.text)} className='Cell' >{this.props.text}</div>
      </React.Fragment >
    )
  }
}

export default Cell;
