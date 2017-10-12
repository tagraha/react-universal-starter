/* @fow */
import * as React from "react";
import PropTypes from "prop-types";
import { CentredContainer as Container } from "../BlockContainer";
import styled from "styled-components";

const Inner = styled.div`padding: 1em 0em;`;
const Outer = styled.div`
  background-color: #f9f9f9;
  padding: 1em 0;
  height: 100%;
  overflow: auto;
`;

type Props = {
  className: string,
  children: React.Node
}

const Core = (props: Props) => (
  <Outer className={props.className}>
    <Container>
      <Inner>{props.children}</Inner>
    </Container>
  </Outer>
);
Core.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

export default Core;
