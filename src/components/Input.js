import React, { useState, useRef } from "react";
import { COLOR } from "../constants";
import styled from "styled-components";
import ErrorSVG from "./icons/ErrorSVG";

const Input = ({ placeholder, error, ...props }) => {
  const [focus, setFocus] = useState(false);

  const ref = useRef();

  const handleInput = () => {
    if (ref.current.value !== "") {
      setFocus(true);
    } else {
      setFocus(false);
    }
  };

  return (
    <Container error={error}>
      {error && (
        <ErrorMessage>
          {/* <ErrorSVG size="16px" /> */}
          {error}
        </ErrorMessage>
      )}
      <StyledInput
        onChange={() => handleInput()}
        placeholder={placeholder}
        focus={focus}
        ref={ref}

        {...props}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-top: ${(props) => (props.error ? "6px" : "24px")};
`;
const ErrorMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${COLOR.RED};
  margin-right: 16px;

  > svg {
    margin-right: 6px;
  }
`;
const StyledInput = styled.input`
  background: ${(props) => (props.focus ? "#fff" : COLOR.BLUE)};
  font-family: aktiv-grotesk-condensed, sans-serif;
   font-weight: 200;
  font-style: normal;
  font-size: 20px;
  border-radius: 25px;
  color: #fff;
  border: 2px solid;
  border-color: ${(props) => (props.focus ? "#fff" : COLOR.BLUE)};
  width: 250px;
  outline: none;
  padding: 8px;
  text-align: center;

  ::placeholder {
    color: white;
    text-align: center;
  }
  :focus {
    background: #fff;
    border-color: #fff;
    color: ${COLOR.BLUE};
  }
`;

export default Input;
