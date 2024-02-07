import React from "react";
import styled from "styled-components";
import photo from "../../../assets/img/photo.webp";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

type MainPropsType = {
  img: string,
}

export const Main = (props: MainPropsType) => {
  return (
    <StyledMain img={props.img}>

        <FLexWrapper align="center" justify="space-between" >
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
          <Photo src={photo} alt="ava" />
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

const StyledMain = styled.section<{img: string}>`
  min-height: 600px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;

`;
const Photo = styled.img`
  width: 350px;
  min-height: 200px;
  /* object-fit: cover; */
`;
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
