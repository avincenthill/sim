import React from 'react';
import Cell from './Cell.jsx';
import Console from './Console.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    // TBD refactor with redux and drawBoard method from store data
    this.rows = 25;
    this.columns = 40;
    this.row = new Array(this.columns).fill(0);
    this.sim = new Array(this.rows).fill(this.row);
    this.state = {
      sim: this.sim,
    }
  }

  render() {
    let sim = this.state.sim;
    return (
      <React.Fragment>
        <div className='Board'>
          {sim.map((row, i) => {
            return row.map((cell, j) => {
              return <Cell text={`${i},${j}`} row={i} col={j} />
            })
          })
          }
        </div>
        <Console />
      </React.Fragment>
    )
  }
}

export default App;
