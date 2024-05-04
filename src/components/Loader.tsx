import React from "react";
import styled, { keyframes } from "styled-components";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string;
  border?: string;
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const LoaderCircle = styled.div<LoaderProps>`
  width: ${(props) => (props.size ? props.size : "50px")};
  height: ${(props) => (props.size ? props.size : "50px")};
  border: ${(props) => (props.border ? props.border : "4px")} solid #f3f3f3;
  border-top: ${(props) => (props.border ? props.border : "4px")} solid #4c4c4c;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loader: React.FC<LoaderProps> = ({ size, border, ...rest }) => {
  return (
    <LoaderContainer>
      <LoaderCircle size={size} border={border} {...rest} />
    </LoaderContainer>
  );
};

export default Loader;
