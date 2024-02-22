import React from "react";
import styled from "styled-components";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { PiHandWavingFill } from "react-icons/pi";
import { IconContext } from "react-icons";
import { MobileMenu } from "../../../components/menu/MobileMenu/MobileMenu";
import mainPhoto from '../../../assets/img/mainPhoto.svg'
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
          <StyledPhotoWrapper>
            <StyledMainPhoto src={mainPhoto}/>
          </StyledPhotoWrapper>
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

const StyledPhotoWrapper = styled.div`
  max-width: 415px;
  min-height: 500px;
`

const StyledMainPhoto = styled.img<MainPropsType>`
  width: 100%;
  
  
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

