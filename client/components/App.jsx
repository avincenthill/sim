import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.n = 100;
    const row = new Array(this.n).fill(0);
    const sim = new Array(this.n).fill(row);
    this.state = {
      sim: sim,
    }
  }
  render() {
    let sim = this.state.sim;
    return (
      <React.Fragment>
        <h1>Hello World!</h1>
        <div className='board'>
          {sim.map((row, i) => {
            return row.map((cell, j) => {
              return <div className='cell'>0</div>
            })
          })
          }
        </div>
        <h2>Goodbye</h2>
      </React.Fragment>
    )
  }
}

export default App;
