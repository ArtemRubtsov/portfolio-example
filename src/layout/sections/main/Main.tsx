import React from "react";
import styled from "styled-components";
import mainPhoto from '../../../assets/img/photo.webp'
import { FLexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

type MainPropsType = {
  img?: string,
  ava?: string
}

export const Main = (props: MainPropsType) => {
  return (
    <StyledMain img={props.img}>

        <FLexWrapper  align="center" justify="space-between" minHeight="600px">
          <MainStyledInfo>
            <StyledTittleH2>
              Hi<span>1</span>,I'm a
            </StyledTittleH2>
            <MainTittle>Software Developer</MainTittle>
            <StyledMainP>
              I’m <span>John Doe</span>, a developer dedicated to making the
              world a better place one line of code at a time.
            </StyledMainP>
            <StyledButton>Hire me</StyledButton>
          </MainStyledInfo>
          <StyledMainPhoto />
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
  border-radius: 10px;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: rgb(255, 255, 255);
`;

const StyledMain = styled.section<MainPropsType>`
  /* max-width: 1230px; */
  /* margin: 0 auto; */
  /* min-height: 600px; */
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-around; */
`;


const StyledMainPhoto = styled.div<MainPropsType>`
  min-height: 390px;
  max-width: 280px;
  width: 100%;
  background-image: url(${mainPhoto});
  background-size: cover;
  background-repeat: no-repeat;
`

const MainStyledInfo = styled.div`
  max-width: 550px;
`
const StyledMainP = styled.p`
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
  cursor: pointer;
`
