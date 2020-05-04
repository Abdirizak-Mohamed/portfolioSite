import React, { Component } from "react";
import AnimatedSquare from "./animatedSquare";

class SquareContainer extends Component {
  state = {
    dimensions: null
  };

  componentDidMount() {
    console.log(this.container.offsetHeight);
    this.setState({
      dimensions: {
        width: this.container.offsetWidth,
        height: 500
      }
    });
  }

  renderContent() {
    const { dimensions } = this.state;

    return (
      <AnimatedSquare width={dimensions.width} height={dimensions.height} />
    );
  }

  render() {
    const { dimensions } = this.state;
    return (
      <div className="Hello" ref={el => (this.container = el)}>
        {dimensions && this.renderContent()}
      </div>
    );
  }
}

export default SquareContainer;
