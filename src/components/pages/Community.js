import React from 'react'
import LinesPurple from "../img/lines3-purple.svg";
import styled from "styled-components";
import BulletIcon from "../img/blue-circle.png"


function Community() {

    return (
        <ContainerCommunity >
            <h1 style={{ marginTop: "10px" }}> Join the Community</h1>
            <br />
            <p>We took our time and energy to create the map we wanted to exist. To be able to give it to you - beautiful, functional, with verified information and for free - we spent months and months voluntarily designing, developing, communicating and organising. We very much en
                ride and would love to get <span style={{ fontWeight: "bold" }}>you</span> onboard now.</p>
            <br />
            <p>By community we don’t only think OF us & you. Even though this connection is very important for us. We’d like FOR YOU to get in touch, hear from you and discuss sustainability in fashion. But we also mean your own community.
                 We literally want to include your friends & network too.</p>

            <br />
            <p style={{ fontStyle: "italic" }}>HOW TO ACTIVELY JOIN CONSCIOUS SWEATER COMMUNITY:</p>
            <div className="bullent-points">
                <ul className="community-details">
                    <li><span style={{ marginTop: "-7px!important" }}>Tell your friends about us <a href="https://www.facebook.com/Conscious-Sweater-100714858298427"> here</a> (CS Fb sharable link)</span></li>
                    <li><span>Chat with other CS fashionistas in our Slow fashion experience sharing group<a href="https://www.facebook.com/Conscious-Sweater-100714858298427"> here</a> </span></li>
                    <li><span>Donate (coming soon)</span></li>
                    <li><span>Organise your local Conscious Sweater film club screening (coming soon)</span></li>

                    <li><span>Print & place our Conscious Sweater poster here (link)</span></li>
                    <li><span>Exchange experience with other slow fashion shop owners in our Slow fashion shop owners group <a href="https://www.facebook.com/Conscious-Sweater-100714858298427">here</a> </span></li>
                    <li><span>Add new places in Conscious Sweater map here</span></li>

                </ul></div>
            <br />
            {/* <img src={LinesPurple} alt="" width="300px" /> */}

            <br />
            <br />
            <br />
            <br />
        </ContainerCommunity>
    )
}

const ContainerCommunity = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--lavender)!important;
    color: var(--blue);
    justify-content: center!important;
    align-items: center!important;
    padding:0;
    margin:0;
    width:100vw;
    height: 100vh;
    
    @media only screen and (max-width: 768px){
        width: 100%;
    }

    h1 {
   
    position:relative;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--blue);
    text-align: center!important;
    font-size: 30px;
    /* left: 50%;
    transform: translate(-50% , -50%); */
    @media only screen and (max-width: 768px){
    font-size: 20px;
    justify-content: center;
    margin-top: 80px!important;

}
}


h2 {
   
@media only screen and (max-width: 768px){
    
    font-size: 20px;
    justify-content: center;
}
}
p {
    font-family:  'Adobe Clean', sans-serif;
    font-size: 18px;
    letter-spacing: 0.01em;
    padding-left: 20px;
    padding-right: 20px;
    width: 750px;
    text-align: justify;

    @media only screen and (max-width: 768px){
    font-size: 12.5px;
    margin-left:-5px;
    margin-top: 5px;
    width: 230px;
    letter-spacing: none;


}
}
ul {
  list-style:none;
  @media only screen and (max-width: 768px){
  width: 230px;
  font-size: 12.5px;
}
}
ul li{
    font-family:  'Adobe Clean', sans-serif;
    font-size: 18px;
    letter-spacing: 0.01em;
    line-height:120%;
    width:750px;
    @media only screen and (max-width: 768px){
  width: 230px;
  font-size: 12.5px;
}
}
ul li span{
    font-family:  'Adobe Clean', sans-serif;  
}
/* li::before {
  content: "🔵";
  


} */


ul li:before {
   content: "•";
   font-size: 250%; /* or whatever */
   /* padding:10px; */
   padding-right:5px;
   vertical-align:bottom;
}
img{
    background-size: 600px;
    vertical-align: top;
    transform: rotate(30deg);
    margin-top: -310px;
    margin-right: -640px;

    @media only screen and (max-width: 768px){
        background-size: 200px;
        transform: rotate(45deg);
        margin-top: -380px;
        padding-bottom: 200px;
        background-position-x: 50px;
        background-position-y: 90px;
    }
}
`

export default Community
