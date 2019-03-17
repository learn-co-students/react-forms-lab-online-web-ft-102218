import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: ''
    };
  }

  handleChange = (event) => {
    const tweet = event.target.value;
    const remaining = this.props.maxChars - tweet.length;
    this.setState({
      msg: tweet,
      remainingChars: remaining
    }, () => {console.log(this.state.remainingChars)});
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)} value={this.state.msg} />
        <p>Remaining: {this.props.maxChars - this.state.msg.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
