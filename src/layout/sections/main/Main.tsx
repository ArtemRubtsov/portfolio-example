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
      <Container>
        <FLexWrapper align={"center"} justify="space-around">
          <div>
            <h2>
              Hi<span>1</span>,I'm a
            </h2>
            <MainTittle>Software Developer</MainTittle>
            <p>
              I’m <span>John Doe</span>, a developer dedicated to making the
              world a better place one line of code at a time.
            </p>
          </div>
          <Photo src={photo} alt="" />
        </FLexWrapper>
      </Container>
    </StyledMain>
  );
};

const MainTittle = styled.h1``;

const StyledMain = styled.section<{img: string}>`
  min-height: 591px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  /* backdrop-filter: blur(800px); */
  /* background-color: rgba(79, 71, 200, 0.4); */
`;

const Photo = styled.img`
  width: 350px;
  height: 330px;
  object-fit: cover;
`;
