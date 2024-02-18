import React from "react";
import styled from "styled-components";
import mainPhoto from '../../../assets/img/photo.webp'
import { FLexWrapper } from "../../../components/FlexWrapper";
import cube from '../../../assets/img/mainSvg/cube.svg'
import zigzag from '../../../assets/img/mainSvg/zigzags.svg'
import ellipse from '../../../assets/img/mainSvg/ellipse.svg'
import circles from '../../../assets/img/mainSvg/circles.svg'
import plus from '../../../assets/img/mainSvg/plus.svg'
import { PiHandWavingFill } from "react-icons/pi";
import { IconContext } from "react-icons";
import { MobileMenu } from "../../../components/menu/MobileMenu/MobileMenu";
import { theme } from "../../../styles/Theme";

type MainPropsType = {
  img?: string,
  ava?: string
}



export const Main = (props: MainPropsType) => {
  return (
    <StyledMain img={props.img}>
        <FLexWrapper  align="center" justify="space-between" minHeight="600px" >
          <MainStyledInfo>
            <IconContext.Provider value={{color: "yellow"}}>
              <StyledTittleH2>
                Hi<PiHandWavingFill />, I'm a
              </StyledTittleH2>
            </IconContext.Provider>
            <MainTittle>Software Developer</MainTittle>
            <StyledMainP>
              I’m <StyledSpan>John Doe</StyledSpan>, a developer dedicated to making the
              world a better place one line of code at a time.
            </StyledMainP>
            <StyledButton>Hire me</StyledButton>
          </MainStyledInfo>
          <StyledMainPhoto >
              <StyledPseudoCirclesElem></StyledPseudoCirclesElem>
              <StyledPseudoPlusElem></StyledPseudoPlusElem>
          </StyledMainPhoto>
        </FLexWrapper>

    </StyledMain>
  );
};

const MainTittle = styled.h1`
  color: rgb(52, 61, 104);
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const StyledTittleH2 = styled.h2`
  color: rgb(52, 61, 104);
  font-size: 32px;
  font-weight: 600;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  background: rgb(232, 73, 73);
  border-radius: 4px;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

const StyledMain = styled.section<MainPropsType>`
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  ${FLexWrapper}{
    @media ${theme.media.mobile} {
      flex-direction: column-reverse;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }
`;


const StyledMainPhoto = styled.div<MainPropsType>`
  min-height: 390px;
  max-width: 290px;
  width: 100%;
  background-image: url(${mainPhoto});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  margin-right: 10px;
  &::before{
    content: '';
    position: absolute;
    top: -25px;
    left:-50px;
    width: 38px;
    height: 100px;
    background-image: url(${zigzag});
    background-repeat: no-repeat;
    background-size: cover;
  }
  &::after{
    content: '';
    right: -20px;
    top: -50px;
    position: absolute;
    width: 40px;
    height: 40px;
    background-image: url(${cube});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media ${theme.media.mobile} {
    margin-top: 70px;
    max-width: 180px;
    min-height: 290px;
  }

`

const MainStyledInfo = styled.div`
  max-width: 550px;
  @media ${theme.media.mobile}{
    margin-top: 70px;
    max-width: 290px;
    min-height: 135px;
  }
`
const StyledMainP = styled.p`
  display: inline-block;
  max-width: 555px;
  width: 100%;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
  cursor: pointer;
  overflow: hidden;
  @media ${theme.media.mobile} {
    max-width: 250px;
  }
`
const StyledSpan = styled.span`
  font-weight: 700;
`
const StyledPseudoCirclesElem = styled.span`
    &::before{
      content: "";
      position: absolute;
      background-image: url(${ellipse});
      background-repeat: no-repeat;
      background-size: cover;
      width: 22px;
      height: 22px;
      bottom: -30px;
      left: -20px;
    }
    &::after{
      content: "";
      position: absolute;
      background-image: url(${circles});
      background-repeat: no-repeat;
      width: 120px;
      height: 76px;
      right: -25px;
      bottom: -55px;
    }
`
const StyledPseudoPlusElem = styled.span`
  &::before{
    content: "";
    position: absolute;
    background-image: url(${plus});
    background-repeat: no-repeat;
    width: 27px;
    height: 27px;
    top: -50px;
    left: 90px;
  }
`