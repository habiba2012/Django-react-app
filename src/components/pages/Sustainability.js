import React from 'react'
import styled from "styled-components";
import SusBrandPin from "../img/sustainable-pin.svg"
import VintagePin from "../img/vintage-pin.svg"
import LocalPin from "../img/local-pin.svg"
import RentingPin from "../img/rent-pin.svg"
import SusBrown from "../img/_S-brown_use.svg"

function Shops() {
    return (
        <Container >
            <h1 style={{ marginTop: "10px" }}>Sustainability</h1>
            <br />
            <p style={{ marginTop: "15px", fontStyle: "italic", }}>‘The level of sustainability in the fashion industry mirrors the values we have as a society.’</p>
            <br />
            <p>Is style & comfort more important to us than next generations’ quality of life? Do we choose retail therapy over than well-being of third world people? Some people might not care and Conscious Sweater won’t change that. We can
                however help those of you who do care.</p>
            <br />
            <p>The best thing to make fashion industry more sustainable is to quit shopping. We however feel this is way too big of a change right now. Therefore we only ask you to consider each of your fashion purchases twice. When the need
                to shop wins then choose vintage or brands producing clothes ethically & ecologically rather then fast fashion. Use our map to find them easily. </p>
            <br />
            <p style={{ textTransform: "uppercase" }}>WHAT KIND OF SHOPS CAN MAKE IT IN CONSCIOUS SWEATER MAP</p>
            <br />
            <p>We add shops selling vintage fashion, sustainable fashion boutiques, shops selling local produce, fashion rental services and we also have a special category for shops selling conventional fashion and a selection of sustainable brands.
                Yes, the last one is a bit tricky!</p>
            <SusWrapper>
                <SusUl>
                    <SusLi>
                        <ImgDiv><img src={SusBrandPin} alt="" style={{ width: "50px", height: "50px" }} /></ImgDiv>
                        <SusSpan><span style={{ fontWeight: "bold" }}>Sustainable fashion shops,</span> boutiques, brands & designers focused on selling
                             clothes that are brand new and made in an ecological & ethical way.</SusSpan>
                    </SusLi>

                    <SusLi>
                        <ImgDiv><img src={VintagePin} alt="" style={{ width: "50px", height: "50px" }} /></ImgDiv>
                        <SusSpan><span style={{ fontWeight: "bold" }}>Vintage shops</span> sell used clothes whose impact is several times lower than that of any new clothes’.</SusSpan>
                    </SusLi>
                    <SusLi>
                        <ImgDiv><img src={LocalPin} alt="" style={{ width: "50px", height: "50px" }} /></ImgDiv>
                        <SusSpan><span style={{ fontWeight: "bold" }}>Local fashion</span> means fashion designed and produced(!) both locally & ecologically.</SusSpan>
                    </SusLi>
                    <SusLi>
                        <ImgDiv><img src={RentingPin} alt="" style={{ width: "50px", height: "50px" }} /></ImgDiv>
                        <SusSpan><span style={{ fontWeight: 'bold' }}>Rental services</span> usually offer more festive clothes used multiple times by multiple people.</SusSpan>
                    </SusLi>
                    <SusLi>
                        <ImgDiv><img src={SusBrown} alt="" style={{ width: "30px", height: "50px", marginLeft: "12px" }} /> </ImgDiv>
                        <SusSpan><span style={{ fontWeight: "bold" }}>Shops selling some sustainable brands</span> choose to sell some sustainable brands,
                    even though their core value is not sustainability. We spent many days & nights discussing whether or not
                     to include those shops and we ended up adding them, under a completely different brown pin. That way,
                             they don’t get mixed up with shops having sustainability as a core value.</SusSpan>
                    </SusLi>
                </SusUl>
            </SusWrapper>
            <br />
            <p style={{ fontStyle: "italic" }}>HOW WE SELECT THE SHOPS</p>
            <p>We only allow shops focusing on
                 <span style={{ fontWeight: "bold" }}> fashion that doesn’t harm the planet &
                  people</span> to be on our map. That means we look into: 1. how fashion is made from an ecological <span style={{ fontWeight: "bold" }}></span>perspective and 2.who makes
                the clothes and how: <span style={{ fontWeight: "bold" }}>was it produced ethically?</span> </p>
            <br />
            <p style={{ fontWeight: "bold" }}>ECOLOGICAL ASPECT </p>
            <br />
            <p>When scanning <span style={{ fontWeight: "bold" }}>sustainable fashion shops </span>for ecological aspect we want to know: <br />
                <span style={{ fontWeight: "bold" }}>What are the fabrics made of and how?</span><br />
                <span style={{ fontWeight: "bold" }}> Do THEY NOT contain toxic chemicals?</span><br />
                <span style={{ fontWeight: "bold" }}>Do factories treat the waste water well? </span><br />
             We first look at the shop’s philosophy &
             values and then we investigate what brands it sells.
             Knowing the history of different brands worldwide helps us recognise which of them are really committed to only producing sustainable fashion long term. Then we focus on looking for internationally recognised certifications such as GOTS & Econyl etc. that prove the brand and the shop are choosing the best & most sustainable material alternative possible. Still, those certifications are not available for all types of fabrics and, therefore, we also need to trust brands and their statements about sustainability.
             Many of them present their garment supply chain, which means we can find the specific factory where the piece was made.
            </p>
            <br />
            <p>With <span style={{ fontWeight: "bold" }}>sustainable brands, designers and local fashion,</span> we ask the same questions and investigate the same ecological aspects of the used materials. Given that those might be very small, businesses rather than internationally recognised brands, we often get in touch directly
                with them to check on their practices.</p>
            <br />
            <p>With <span style={{ fontWeight: "bold" }}>vintage shops and rental services,</span> we consider them as having no ecological impact. Those shops give already used and tossed clothes a new life, so no new resources are used. The only downside here is the transport between countries usually within Europe or the US. Compared with producing & transporting new clothes, the impact is still very low.
                From an ecological point of view, we always recommend & support choosing first used clothes. </p>
            <br />
            <p style={{ fontWeight: "bold" }}>ETHICAL ASPECT</p>
            <p>We don’t want our clothes to be made by underpaid people,
            who cannot afford to live, don’t work in safe conditions and we especially don’t want clothes made by
            children. We, therefore, check sustainable & local shops’ values and see how much they care. It’s very
            common that owners of brands and shops personally visit the factories,
            know the owners and meet some of the people making the clothes. Some shops & brands share their
            garment’s supply chain which is only a positive sign showing that brands know all of the information (that’s not the case for fast fashion brands) and also that they don’t have anything to hide. Some certificates as GOTS and Fairtrade focus
            on the social aspect of the production too.
            They guarantee fair wages and safe conditions for the workers, so we also check whether the clothes in the shop are
                certified. As for <span style={{ fontWeight: "bold" }}>vintage shops and rented fashion,</span> we again consider them to create an ethically positive impact.</p>
            <br />
            <br /><br /><br />
        </Container >
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin:0;
    padding:0;
    justify-content: center!important;
    align-items: center!important;
    background-color: var(--blue);
    color:var(--lavender)!important;

    @media only screen and (max-width: 768px){
        width: 100%;
    }

    h1 {
     position:relative;
    font-weight: bold;
    text-transform: uppercase;
    text-align:center!important;
    color: var(--lavender);
    font-size: 30px;

    @media only screen and (max-width: 768px){
    font-size: 20px;
    justify-content: center;
    /* margin-top: 20px; */
    /* margin-left: 140px; */
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
    /* word-break: keep-all; */
    @media only screen and (max-width: 768px){
    font-size: 12.5px;
    margin-left:-5px;
    margin-top: 5px;
    width: 230px;
    letter-spacing: none;


}
}`

const SusWrapper = styled.div`
 font-family:  'Adobe Clean', sans-serif;
display: flex;
flex-flow: row;
padding: 20px;
font-size: 18px;
justify-content: start;
margin: -15px 80px 40px 20px;
box-sizing: border-box;
width: 600px;
height: 550px;
border:  none;
text-decoration: none;
background: transparent!important;
background-origin: padding-box;
background-color: var(--blue);
color: var(--lavender);
border-radius: none;
display: inline-block;


@media only screen and (max-width: 768px){
    font-size: 12.5px;
    /* margin: 50px 50px 0px 80px; */
    width: 230px;
    height: 500px;
    padding: 10px;
    letter-spacing: none;
}
`;

const SusUl = styled.ul`
  padding: 0;
`
const SusLi = styled.li`
 list-style-type: none;
    width: 41em;
`
const SusSpan = styled.span`
width:60%;
height: 75px;
font-size:18px;
font-family:  'Adobe Clean', sans-serif;
margin: 13px 0px 5px -270px;
float:right;
padding: 2px;
position:relative;
overflow:hidden;
@media only screen and (max-width: 768px){
  width: 220px;
  font-size: 12.5px;
}


`
const ImgDiv = styled.div`
width:50%;
height:40px; 
padding:5px;
margin: 10px 0px 5px 5px;
float:left;
position:relative;
@media only screen and (max-width: 768px){
    margin: 8px 50px 5px 5px;

}

`
const ImgPin = styled.image`
  position:absolute;
  top:50%;
  overflow:hidden;
`

export default Shops
