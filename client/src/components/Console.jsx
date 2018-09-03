import React from 'react';

class Console extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className='Console'>{this.props.readout}</div>
      </React.Fragment>
    )
  }
}

export default Console;
