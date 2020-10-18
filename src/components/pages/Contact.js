import React from 'react'
import styled from "styled-components";
import InstaIcon from "../img/insta-cs1.svg";
import FacebookIcon from "../img/facebook-icon.svg";
import LinkedinIcon from "../img/linkedin-icon.svg";
import LinesPurple from "../img/lines3-purple.svg";




function Contact() {
    return (
        <ContactWrapper >

            <br />  <br />
            <br />  <br />  <br />
            <br /> <br />  <br />
            <br /> <br />  <br />
            <br /><br />
            <h1>Let's talk</h1>
            <br />
            <p style={{ marginTop: "20px" }}>We want to hear from you!</p>
            <br />
            <p>Please let us know your feedback on our Conscious Sweater map at <span style={{ textDecoration: "underline" }}>hi@conscioussweater.com</span></p>
            <br />
            <p className="contact-details">Would you like to collaborate with CS? Tell us what you do at <span style={{ textDecoration: "underline" }}>volunteer@conscioussweater.com</span> </p>
            <br />
            <p>Do you want to follow us? Then find us here: IG, FB, Linkedin</p>
            <br />
            <SocialLink><ul>
                <li>
                    <a href="https://www.instagram.com/conscious_sweater/"><img src={InstaIcon} alt="instagram-icon" style={{ marginBottom: "-7px" }} />
                    </a>

                </li>
                <li>
                    <a href="https://www.facebook.com/Conscious-Sweater-100714858298427"><img src={FacebookIcon} alt="facebook-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/conscious-sweater"><img src={LinkedinIcon} alt="linkedin-icon" />
                    </a>
                </li>

            </ul>
            </SocialLink>
            <Lines>
                <img src={LinesPurple} alt="" width="300px" />
            </Lines>
        </ContactWrapper>
    )
}

const ContactWrapper = styled.div`
    display: flex;
    justify-content: center!important;
    align-items: center!important;
    background-color: var(--blue);
    flex-direction: column;
   margin:0;
   padding:0;
   width:100vw;
    height: 100vh;
    @media only screen and (max-width: 768px){
        width: 100%;
        /* flex-direction: row; */
    }

    h1 {
   position:sticky;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--lavender);
    text-align: center!important;
    font-size: 30px;
    
     /* margin-top: 30px;  */
    @media only screen and (max-width: 768px){
    
        font-size: 25px;
        justify-content: center;
        margin-top: 60px;
    }
}
p {
    font-family: 'Adobe Clean';
    font-size: 16px;
    letter-spacing: 0.01em;
    padding-left: 20px;
    padding-right: 20px;
    /* margin-top: 310px; */
    color: var(--lavender);
    width: 750px;
    text-align: justify;

    @media only screen and (max-width: 768px){
    font-size: 12.5px;
    margin-left:0px;
    width: 230px;
    letter-spacing: none;
    
}
}

.contact-details {
  
    margin-top: 10px;
}
`
const SocialLink = styled.div`
display:flex;
justify-items:center;

ul
{ 
white-space:nowrap; 
width: 100%;
} 

li
{ 
display:inline;
padding: 4px;
font-family:  Helvetica, sans-serif;

} 

`
const Lines = styled.div`
img{
    background-size: 600px;
    float: right;
    transform: rotate(30deg);
    margin-top: -350px;
    margin-right: -645px;

    @media only screen and (max-width: 768px){
        background-size: 200px;
        transform: rotate(45deg);
        margin-top: -340px;
        margin-right:0px;
        padding-bottom: 200px;
        background-position-x: 50px;
        background-position-y: 90px;
    }
}
`


export default Contact
