import React, { Component } from "react";
import styled from "styled-components";

export const Calculadora = styled.main`
  background-color: #d8bfd8;
  font-family: "Poppins", sans-serif;
  border: 2px solid currentcolor;
  border-radius: 50%;

  h1 {
    color: rgb(0, 0, 255, 0.3);
    margin-left: 170px;
  }

  input {
    margin-left: 40px;
  }

  button {
    margin-bottom: 30px;
    margin-left: 60px;
    margin-top: 45px;
    color: #800080;
    border: none;
    background-color: #d8bfd8;
    border-radius: 50%;
    transition-duration: 2s;
  }

  button:hover {
    background-color: red;
    color: white;
    border: 2px solid gray;
  }
  h2 {
    color: #fafad2;
    margin-left: 230px;
  }
`;

export class App extends Component {
  state = {
    numero1: "",
    numero2: "",
    resultado: ""
  };

  handleChange1 = (event) => {
    this.setState({
      numero1: Number(event.target.value)
    });
  };

  handleChange2 = (event) => {
    this.setState({
      numero2: Number(event.target.value)
    });
  };

  soma = () => {
    this.setState({
      resultado: this.state.numero1 + this.state.numero2
    });
  };

  dimi = () => {
    this.setState({
      resultado: this.state.numero1 - this.state.numero2
    });
  };

  divi = () => {
    this.setState({
      resultado: this.state.numero1 / this.state.numero2
    });
  };

  mult = () => {
    this.setState({
      resultado: this.state.numero1 * this.state.numero2
    });
  };

  apagar = () => {
    this.setState({
      numero1: "",
      numero2: "",
      resultado: ""
    });
  };

  render() {
    return (
      <Calculadora>
        <h1>Calc App</h1>
        <input
          onChange={this.handleChange1}
          type="number"
          value={this.state.numero1}
        />
        <input
          onChange={this.handleChange2}
          type="number"
          value={this.state.numero2}
        />
        <div>
          <button onClick={this.soma}>+</button>
          <button onClick={this.dimi}>-</button>
          <button onClick={this.divi}>/</button>
          <button onClick={this.mult}>*</button>
          <button onClick={this.apagar}>c</button>
        </div>
        <h2>{this.state.resultado}</h2>
      </Calculadora>
    );
  }
}

export default App;
