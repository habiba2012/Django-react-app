import React from 'react'
import styled from "styled-components";

function Team() {
    return (
        <ContainerTeam>
            <br /><br />
            <br /><br />
            <br /><br />

            <h1>Team</h1>
            <br />   <br />
            <p style={{ marginTop: "10px", textAlign: "center", fontStyle: "italic", fontSize: "18px!important", color: "blue" }}>WHO KNITS THE CONSCIOUS SWEATER?</p>
            <p>We are a Copenhagen-based group of sustainable fashion enthusiasts who decided to give back and actively join the sustainable fashion movement.
                We are the team that wears Conscious Sweater:</p>
            <br />
            <p >Veronika is our founder and CEO. She started thinking about a map of sustainable fashion shops back in 2015 when she lived in London. ‘I was so surprised that no one has made it yet
             that I thought this idea must be waiting for me to make it happen!’</p>
            <br />
            <p>Veronika is our founder and CEO. She started thinking about a map of sustainable fashion shops back in 2015 when she lived in London. ‘I was so surprised that no one has made it
                  yet that I thought this idea must be waiting for me to make it happen!’</p>
            <br />
            <p>Bára worked as well on Conscious Sweater map design & our branding. And she also created the initial Conscious Sweater copy. </p>
            <br />
            <p> Robin was our initial developer who built
                the very first pieces of the Conscious Sweater map!</p>
            <br />
            <p>Nila studied communication in Copenhagen. She is a passionate writer and Conscious Sweater’s voice on social media channels. </p>
            <br />
            <p>Habiba coded the version of
                 the map that you can see and explore it now. She studied Web development and enjoys coding as anything else. </p>
            <br />
            <p>Finn helps us structure the coding & advises us on the web development process.</p>
            <br /><br />
            <br /><br />

        </ContainerTeam>
    )
}

const ContainerTeam = styled.div`
    display: flex;
    flex-direction: column;
    margin:0;
    padding:0;
    width:100vw;
    height: 100vh;
    justify-content: center!important;
    align-items: center!important;
    background-color: var(--lavender);

    @media only screen and (max-width: 768px){
        width: 100%;
    }
    
    h1 {
    position:relative;
    font-weight: bold;
    text-transform: uppercase;
    text-align:center!important;
    font-size: 30px;
    color: blue;
    /* margin-top: -180px; */
    /* transform: translate(-50% , -50%); */

    @media only screen and (max-width: 768px){
    font-size: 25px;
    justify-content: center;
    /* margin-left: 140px; */
}
}  
p {
    font-family:  'Adobe Clean', sans-serif;
    font-size: 18px;
    letter-spacing: 0.01em;
    padding-left: 20px;
    padding-right: 20px;
     /* margin-top: 10px;  */
    width: 750px;
    text-align: justify;
    color: blue;
    @media only screen and (max-width: 768px){
    font-size: 12.5px;
    margin-left:-5px;
    width: 230px;
    letter-spacing: none;


}
}`

export default Team
