import React from "react";
import styled from "styled-components";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { SectionTittle } from "../../../components/SectionTittle";
import { SkillCheckPhoto } from "./skillCheckPhoto/SkillCheckPhoto";
import { Skill } from "./skill/Skill";
import skillPhoto from "../../../assets/img/skillPhoto.png";


type SkillsPropsType = {
  img?: string
}

export const Skills = (props: SkillsPropsType) => {
  return (
    <StyledSkills img={props.img}>
        <SectionTittle textAlign="center">Skills</SectionTittle>
        <FLexWrapper justify="space-between" align="center">
          <SkillsWrapper>
            <StyledSkillP>
              I have a vast experience in the following web technologies:
            </StyledSkillP>
            <SkillFlexWrapper>
              <Skill iconId={"htmlSvg"} title={"HTML5"} />
              <Skill iconId={"cssSvg"} title={"CSS3"} />
              <Skill iconId={"jsSvg"} title={"JavaScript"} />
              <Skill iconId={"reactSvg"} title={"React"} />
            </SkillFlexWrapper>
          </SkillsWrapper>
          <SkillCheckPhoto src={skillPhoto} />
        </FLexWrapper>

    </StyledSkills>
  );
};

const StyledSkills = styled.section<SkillsPropsType>`
  min-height: 590px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;

`;

const StyledSkillP = styled.p`
  color: rgb(129, 128, 128);
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 40px;
  overflow: hidden;

`;
const SkillsWrapper = styled.div`
  max-width: 515px;
`;

const SkillFlexWrapper = styled.div`
  min-height: 110px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
`;
