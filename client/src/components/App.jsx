import React from 'react';
import Cell from './Cell.jsx';
import Console from './Console.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    // TBD refactor with redux and drawBoard method from store data
    this.rows = 13;
    this.columns = 20;
    this.row = new Array(this.columns).fill(0);
    this.sim = new Array(this.rows).fill(this.row);
    this.state = {
      sim: this.sim,
      readout: 'welcome to sim',
    }
  }

  handleCellClick(data) {
    this.writeToConsole(data);
  }

  writeToConsole(data) {
    this.setState({ readout: data });
  }

  render() {
    let state = this.state;
    return (
      <React.Fragment>
        <div className='Board'>
          {state.sim.map((row, i) => {
            return row.map((cell, j) => {
              return <Cell handleCellClick={this.handleCellClick.bind(this)} text={`${i},${j}`} row={i} col={j} />
            })
          })}
        </div>
        <Console readout={state.readout} />
      </React.Fragment>
    )
  }
}

export default App;
