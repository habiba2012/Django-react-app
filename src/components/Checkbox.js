import React from "react";
import { Formik, FieldArray } from "formik";
import styled from "styled-components";
import CheckSVG from "./icons/CheckSVG";

console.clear();

const categories = [
    { id: "men", name: "Men" },
    { id: "women", name: "Women" },
    { id: "children", name: "Children" },
    { id: "concept store", name: "Concept Store" }
];

const Checkbox = () => (
    <Container>
        <Formik
            initialValues={{ categoryIds: ["men"] }}
            onSubmit={values =>
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500)
            }
            render={({ values }) => (
                <div>
                    <FieldArray
                        name="categoryIds"
                        render={arrayHelpers => (
                            <div>
                                {categories.map(category => (
                                    <div key={category.id}>
                                        <label>
                                            <input className="checkbox-input"
                                                name="categoryIds"
                                                type="checkbox"
                                                value={category.id}
                                                checked={values.categoryIds.includes(category.id)}
                                                onChange={e => {
                                                    if (e.target.checked) arrayHelpers.push(category.id);


                                                    else {
                                                        const idx = values.categoryIds.indexOf(category.id);
                                                        arrayHelpers.remove(idx);
                                                    }
                                                }}
                                            />{" "}
                                            {category.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    />
                    {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                </div>
            )}
        />
    </Container>
);
const Container = styled.div`
  
label{
 
  font-size: 16px;
  text-transform: uppercase;
  margin: 0px;  
}
.checkbox-input{
    display:inline-block;
  vertical-align:middle;
}
`
export default Checkbox;