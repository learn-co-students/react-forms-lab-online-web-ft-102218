import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      maxChars: this.props.maxChars,
      remainingChars: 140
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      remainingChars: this.state.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message}/><br></br>
        <span>Remaining Characters: {this.state.remainingChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
