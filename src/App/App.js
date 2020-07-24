import React from 'react';
import GenericInput from '../components/GenericInput/GenericInput';
import './App.css';

class App extends React.Component {
  state = { text: '' };

  handleChange = (inputVal) =>  {
    this.setState({ text: inputVal });
  };

  render () {
    return (
      <div className="container">
        <GenericInput
          handler = {this.handleChange}
          text = {this.state.text}
          name = {"Dante"}
        />
        <GenericInput
          handler = {this.handleChange}
          text = {this.state.text}
          name = {"Virgil"}
        />
      </div>
    );
  }
};

export default App;
