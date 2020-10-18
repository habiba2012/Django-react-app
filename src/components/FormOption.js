import React, { useState, useRef } from "react";
import styled from "styled-components";
import { COLOR } from "../constants";

const FormOption = () => {
  const [open, setOpen] = useState(false);
  const [optionValue, setOptionValue] = useState("name of the store*");
  const [chosen, setChosen] = useState(false);
  const ref = useRef();

  function cahngeOption(event) {
    const value = event.target.innerHTML;
    setOptionValue(value);
    setChosen(true);
    setOpen(!open);
  }

  return (
    <Container open={open}>
      <Option onClick={() => setOpen(!open)} option={chosen}>
        {optionValue}
      </Option>
      {/*  <Option ref={ref} option onClick={cahngeOption}>
        I'm adding new store
      </Option> */}
      {/*  <Option ref={ref} option onClick={cahngeOption}>
        I'm correcting information
      </Option>
      <Disclamer>
        Have we made a mistake? Let us know and we'll make it right!
      </Disclamer> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: ${(props) => (props.open ? "206px" : "57px")};
  transition: 200ms;
  overflow: hidden;
`;
const Option = styled.div`
  background: ${(props) => (props.option ? "#fff" : COLOR.BLUE)};
  font-size: 20px;
  border-radius: 25px;
  margin: 8px;
  color: ${(props) => (props.option ? COLOR.BLUE : "#fff")};
  border: 2px solid;
  border-color: ${(props) => (props.option ? "#fff" : COLOR.BLUE)};
  width: 220px;
  height: 20px;
  font-weight: 300;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;
const Disclamer = styled.div`
  font-size: 12px;
  color: ${COLOR.BLUE};
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  max-width: 250px;
`;

export default FormOption;
