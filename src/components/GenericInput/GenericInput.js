import React from 'react';
import './GenericInput.css';

class GenericInput extends React.Component {

  render() {
    return (
      <form className="field">
        <label>
          {this.props.name}
          <input
            onChange={(e) => this.props.handler(e.target.value)}
            type="text"
            value={this.props.text}
          />
        </label>
      </form>
    );
  }
};

export default GenericInput;
