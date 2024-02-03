import React from "react";
import styled from "styled-components";
import photo from "../../../assets/img/photo.webp";
import { FLexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FLexWrapper align={"center"} justify="space-around">
      <div>
        <h2>
          Hi<span>1</span>,I'm a
        </h2>
        <MainTittle>Software Developer</MainTittle>
        <p>
          I’m <span>John Doe</span>, a developer dedicated to making the world a better place
          one line of code at a time.
        </p>
      </div>
      <Photo src={photo} alt="" />
      </FLexWrapper>
    </StyledMain>
  );
};

const MainTittle = styled.h1`
    
`

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #f4f4f4;
`

const Photo = styled.img`
  width: 350px;
  height: 330px;
  object-fit: cover;
`;
