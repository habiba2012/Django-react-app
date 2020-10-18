import React from "react";
import styled from "styled-components";
import Input from "./Input";
// import FormOption from "./FormOption";
import Example from "./CategoryOptions";
import Checkbox from "./Checkbox";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import ExpandArrow from './img/expand-arrow.png'
// import FormikControl from './FormikControl'

const Form = () => (

  <Formik
    initialValues={{
      store_name: "",
      website: "",
      categories: "",
      address: "",
      categoriesOption: []
    }}
    onSubmit={(values, { setSubmitting }) => {
      console.log("form data", values);

      setSubmitting(true);
      setTimeout(() => {
        console.log("Sucess", values);
      }, 500);
      setSubmitting(false);
    }
    }
    handleClick={(e) => {
      e.preventDefault();
      console.log('The link was clicked.');
    }}
    validationSchema={
      Yup.object().shape({
        store_name: Yup.string()
          .required("name of the store is required")
          .max(200, "name is too long"),
        categories: Yup.string()
          .required("category is requires"),
        adress: Yup.string()
          .min(3, "adress is too short")
          .max(32, "adress is too long")
          .required("adress is required"),
        website: Yup.string()
          .min(3, "website is too short")
          .max(32, "website is too long")
          .required("website is required"),
        // checkboxOptions: Yup.array.required('Required')
      })
    }
  >
    {({

      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleClick }) =>

      <Container>
        <Heading>ADD YOUR FAVORITE SUSTAINABLE STORE TO THE MAP</Heading>
        <StyledForm autoComplete="off" onSubmit={handleSubmit}>
          <Field placeholder="name of the store*"
            name="store_name" type="input"
            error={touched.store_name ? errors.store_name : ""}
            as={Input} />

          <Field placeholder="website*" name="website" type="input"
            error={touched.website ? errors.website : ""}
            as={Input} />
          {/* <Example /> */}

          <label className="labelCategory" htmlFor="categories">categories<img className="expand" src={ExpandArrow} alt="expand-arrow" /></label>

          <Checkbox />
          <Field placeholder="address" name="address" type="input"

            error={touched.address ? errors.address : ""} as={Input} />
          <div>
            <Button type="submit" disabled={isSubmitting}  >
              Send
        </Button>
          </div>
        </StyledForm>
      </Container>
    }


  </Formik >
);




const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  color: #152afc;
  height: 100%;

  .labelCategory{
   /* 
    height: ${(props) => (props.open ? "58px" : "100px;")};
  transition: 200ms; */
    background: #152AFC;
    font-size: 20px;
    border-radius: 25px;
    color: #fff;
    border: 2px solid;
    border-color: #152AFC;
    width: 250px;
    outline: none;
    padding: 8px;
    text-align: center;
    margin-top: 12px; 
  }
  .expand{
    position: relative;
    float:right;
    padding-right: 5px;
   /*  margin-left: 5px;
    margin-top: 5px; */}
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.h2`
  text-align: center;
  font-size: 25px;
  max-width: 250px;
  margin-top: -15px;
  font-weight: bold;
`;

const Button = styled.button`
padding: 10px;
width: 110px;
height: 40px;
outline:none;
border-radius: 25px;
color:white;
border:none;
margin-top: 40px;
text-transform: uppercase;
background-color:var(--blue);
font-weight: bold;
text-align: center;

`;


export default Form;
