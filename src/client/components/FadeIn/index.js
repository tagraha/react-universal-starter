/* @flow */
import * as React from "react";
import styled from "styled-components";

const FadeIn = styled.div`
  opacity: ${props => (props.visible ? "1" : "0")};
  position: relative;
  top: ${props => (props.visible ? "0" : "60px")};
  transition: all 1s ease;
`;

class FadeInWrapper extends React.Component {
  state = {
    visible: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: true
      });
    }, 200);
  }
  render(): React.Node {
    return <FadeIn visible={this.state.visible} {...this.props} />;
  }
}

export default FadeInWrapper;
