import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import { BASE_URL, COLOR } from "../../constants";
import ArrowRightSVG from "../icons/ArrowRightSVG";
import ArrowLeftSVG from "../icons/ArrowLeftSVG";
import ClockSVG from "../icons/ClockSVG";
import GlobeSVG from "../icons/GlobeSVG";
import CloseSVG from "../icons/CloseSVG";

import NavigationSVG from "../icons/NavigationSVG";

export default function CustomInfoWindow({ shop }) {
  return (
    <Container color={shop.marker_img[1]}>
      <Name>{shop.name}</Name>
      <Description>{shop.description}</Description>
      <CarouselWrapper>
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (
            <Button onClick={previousSlide}>
              <ArrowLeftSVG />
            </Button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <Button onClick={nextSlide}>
              <ArrowRightSVG />
            </Button>
          )}
          style={{ outline: "none" }}
          defaultControlsConfig={{
            pagingDotsStyle: {
              fill: "#fff",
            },
            svgStyle: { width: "8px" },
          }}
        >
          {shop.photos.map((image, i) => (
            <Thumbnail key={i} image={image} />
          ))}
        </Carousel>
      </CarouselWrapper>
      <Wrapper>
        <ClockSVG />
        <StyledText>
          {shop.opennig_hours.split("<br>").map((item, i) => (
            <Hours key={i}>{item}</Hours>
          ))}
        </StyledText>
      </Wrapper>
      <Wrapper>
        <GlobeSVG />
        <StyledText>{shop.shop_domain}</StyledText>
      </Wrapper>
      <Wrapper>
        <NavigationSVG />
        <StyledText>{shop.adress}</StyledText>
      </Wrapper>
      <Categories>{shop.categories}</Categories>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6px;
  padding-bottom: 10px;
  color: ${(props) => (props.color === "vintage" ? COLOR.BLUE : COLOR.PURPLE)};
  border-radius: 20px;
  box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.3);
  background: ${(props) =>
    props.color === "vintage" ? COLOR.PURPLE : COLOR.BLUE};

  ::after {
    box-shadow: -2px 2px 2px 0 rgba(178, 178, 178, 0.4);
    content: "";
    height: 15px;
    left: 50%;
    position: absolute;
    bottom: -15px;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 15px;
    background: ${(props) =>
    props.color === "vintage" ? COLOR.PURPLE : COLOR.BLUE};
  }
`;
const CarouselWrapper = styled.div`
  width: 250px;
  height: 150px;
  margin-bottom: 6px;
`;
const Button = styled.div`
  cursor: pointer;
`;
const Name = styled.h3`
  max-width: 200px;
  font-size: 32px;
  font-weight: bold;
  margin: 0 25px;
  text-transform: uppercase;
`;
const Description = styled.h4`
  text-transform: uppercase;
  font-weight: bold!important;
  margin: 6px 25px 20px 25px;
  font-size: 12px;
`;
const Thumbnail = styled.div`
  width: 100%;
  max-width: 250px;
  height: 150px;
  font-weight: bold;
  background-position-y: bottom;
  background: url(${(props) => BASE_URL + props.image});
  background-size: cover;
  outline: none;
`;
const Wrapper = styled.div`
  margin: 6px 25px;
  color: inherit;
  display: flex;
  align-items: center;
`;
const StyledText = styled.span`
  font-size: 14px;
  margin: 0 0 0 10px;
  max-width: 150px;
  text-transform:none;

`;
const Hours = styled.p`
  margin: 0;
  text-transform:none;
`;
const Categories = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  margin: 8px 0;
  max-width: 200px;
  align-self: center;
`;
