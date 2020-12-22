import React, { Component } from 'react';
import 'spectre.css';
import './App.css';
import Play from './views/Play';
import Display from './views/Display';
import Result from './views/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userResult: 0,
      computerResult: 0,
      userChoice : -1,
      computerChoice: -1,
      onPause: false
    };
  }

  compareChoice() {
    const user = this.state.userChoice;
    const computer = this.state.computerChoice;
    if ((computer === 0 && user === 2) || (computer === 1 && user === 0) || (computer === 2 && user === 1)) {
      this.setState(prevState => {
        return {
          computerResult : prevState.computerResult += 1,
          round : prevState.round += 1
        }
      }, () => this.newRound());
    } else if (computer !== user) {
      this.setState(prevState => {
        return {
          userResult : prevState.userResult += 1,
          round : prevState.round += 1
        }
      }, () => this.newRound());
    }
  }

  setChoice(value){
    this.setState({
      userChoice: (value === 'Rock') ? 0 : (value === 'Paper') ? 1 : 2,
      computerChoice: Math.floor(Math.random() * 3)
    }, () => this.compareChoice());
  }

  newRound(){
    if (this.state.userResult === 3 || this.state.computerResult === 3) {
      this.setState({
        onPause: true
      });
      setTimeout(() => {
        this.setState({
          userResult: 0,
          computerResult: 0,
          userChoice : -1,
          computerChoice: -1,
          onPause: false
        });
      }, 2500);
    }
  }

  restartGame () {
    this.setState({
      userResult: 0,
      computerResult: 0,
    });
  }

  render() {
    return (
      <div className="App">

        {!this.state.onPause &&
          <Play setChoice={this.setChoice.bind(this)}/>
        }

        <Result userResult={this.state.userResult}
          computerResult={this.state.computerResult}
        />

        <Display userResult={this.state.userResult}
          computerResult={this.state.computerResult}
          userChoice={this.state.userChoice}
          computerChoice={this.state.computerChoice}
        />
        <div className="footer">
        <button onClick={() => {this.restartGame()}}>Restart Game</button>
        </div>
      </div>
    );
  }
}

export default App;