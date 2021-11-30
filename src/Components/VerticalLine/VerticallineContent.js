import React from "react";
import styled from "styled-components";
import { device } from "../helpers/styled-component-media-queries";

const Content = styled.aside`
  position: relative;
  margin: 2em auto;
  padding-left: 10px;

  ::after {
    content: "";
    display: table;
    clear: both;
  }

  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }

  @media screen and (${device.tablets}) {
    padding-left: 0px;
  }
`;

const ContentPoint = styled.span`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid red;
  background-color: white;
  display: block;
  margin-left: -6px;

  @media screen and (${device.tablets}) {
    left: 50%;
  }
`;

const ContentChildren = styled.div`
  position: relative;
  padding: 0em;
  top: -8px;
  width: 50%;

  @media screen and (${device.tablets}) {
    padding: 0em 2em;
    left: ${(props) => (props.position === "left" ? "0%" : "50%")};
    text-align: ${(props) => (props.position === "left" ? "right" : "left")};
  }
`;

function VerticalLineContent({ children, className, position }) {
  return (
    <Content className={className}>
      <ContentPoint />
      <ContentChildren position={position}>{children}</ContentChildren>
    </Content>
  );
}

export default VerticalLineContent;
