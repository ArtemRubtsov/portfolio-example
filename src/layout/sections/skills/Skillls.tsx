import React from "react";
import styled from "styled-components";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { SectionTittle } from "../../../components/SectionTittle";
import { SkillCheckPhoto } from "./skillCheckPhoto/SkillCheckPhoto";
import { Skill } from "./skill/Skill";
import skillPhoto from "../../../assets/img/skillPhoto.png";
import { Container } from "../../../components/Container";

type SkillsPropsType = {
  img: string
}

export const Skills = (props: SkillsPropsType) => {
  return (
    <StyledSkills img={props.img}>
      <Container>
        <SectionTittle>Skills</SectionTittle>
        <FLexWrapper justify="space-around">
          <SkillsWrapper>
            <StyledSkillP>
              I have a vast experience in the following web technologies:
            </StyledSkillP>
            <SkillFlexWrapper>
              <Skill iconId={"htmlSvg"} title={"HTML5"} />
              <Skill iconId={"cssSvg"} title={"CSS3"} />
              <Skill iconId={"jsSvg"} title={"JAVASCRIPT"} />
              <Skill iconId={"bsSvg"} title={"Bootstrap"} />
            </SkillFlexWrapper>
          </SkillsWrapper>
          <SkillCheckPhoto src={skillPhoto} />
        </FLexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section<{img: string}>`
  min-height: 591px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledSkillP = styled.p``;
const SkillsWrapper = styled.div``;

const SkillFlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
