import React from "react";
import styled from "styled-components";
import { SectionTittle } from "../../../components/SectionTittle";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { ProjectsItem } from "./projectsItem/ProjectsItem";
import socialImg from '../../../assets/img/proj-1.webp'
import cardImg from '../../../assets/img/proj-2.webp'
import trackingImg from '../../../assets/img/proj-3.webp'
import { IconGears } from "../../../components/icon/IconGears";
import { theme } from "../../../styles/Theme";


export const Projects = () => {
    return (
        <StyledProjects>
                <SectionTittle textAlign="center" color="rgba(255, 255, 255, 0.87)"><IconGears iconId="gears" />Projects</SectionTittle>
                <StyledProjectsP>A select number of projects</StyledProjectsP>
                <FLexWrapper justify="space-around">
                    <ProjectsItem tittle={"Made a social media manager template using HTML 5, CSS and JS." } 
                                src={socialImg} />
                    <ProjectsItem tittle={"Made a simple card page using HTML 5 and  CSS 3"} 
                                src={cardImg}/>
                    <ProjectsItem tittle={"Made an I.P address tracking website."} 
                                src={trackingImg}/>
                </FLexWrapper>
        </StyledProjects>
    )
}



const StyledProjects = styled.section`
    position: relative;
    min-height: 591px;
    background-color: #343D68;
    svg{
        margin-right: 20px;
    }
    ${FLexWrapper} {
        @media ${theme.media.mobile} {
            flex-direction: column;
            align-items: center;
            /* max-width: 360px; */
        }
    }
    
`

const StyledProjectsP = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 25px;
`
