import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
      this.postRequestMultiplyingByTen = this.postRequestMultiplyingByTen.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
    }

    postRequestMultiplyingByTen() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.currentCount)
        }
        fetch('weatherforecast', requestOptions)
            .then(response => response.json())
            .then(number => this.setState({ currentCount: number }))
            .catch(ex => console.log(ex));

    }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

            <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
            <br />
            <button className="btn btn-success" onClick={this.postRequestMultiplyingByTen}>Multiply by 10</button>
      </div>
    );
    }
}
