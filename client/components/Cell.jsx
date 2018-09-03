import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className='Cell'>{this.props.text}</div>
      </React.Fragment>
    )
  }
}

export default Cell;
