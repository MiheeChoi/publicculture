import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Buttons,
  ImgWrap,
  Img,
} from "./InfoElements";
import svgImg from "../../../assets/image/calendar.svg";
import { useNavigate } from "react-router-dom";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  alt,
  primary,
  dark,
  dark2,
}) => {
  const navigate = useNavigate();
  const onButtonClicked = (e) => {
    e.preventDefault();
    navigate(`calendar`);
  };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Buttons
                    to="/calendar"
                    // smooth={true}
                    // duration={500}
                    // spy={true}
                    // exact="true"
                    // offset={-80}
                    // primary={primary ? 1 : 0}
                    // dark={dark ? 1 : 0}
                    // dark2={dark2 ? 1 : 0}
                    onClick={onButtonClicked}
                  >
                    {buttonLabel}
                  </Buttons>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={svgImg} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
