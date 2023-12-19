import React from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: relative;
  width: 70px;
`;

const RotatingIcon = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 140 }) => {
  return (
    <Container>
      <RotatingIcon width={`${size * 0.5}px`} src="/logo.webp" />
    </Container>
  );
};

export default Spinner;
