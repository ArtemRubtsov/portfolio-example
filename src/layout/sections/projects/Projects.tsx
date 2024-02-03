import React from "react";
import styled from "styled-components";
import { SectionTittle } from "../../../components/SectionTittle";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { ProjectsItem } from "./projectsItem/ProjectsItem";
import socialImg from '../../../assets/img/proj-1.webp'
import cardImg from '../../../assets/img/proj-2.webp'
import trackingImg from '../../../assets/img/proj-3.webp'


export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTittle>Projects</SectionTittle>
            <StyledProjectsP>A select number of projects</StyledProjectsP>
            <FLexWrapper justify="space-around">
                <ProjectsItem tittle={"Made a social media manager template using HTML 5, CSS and JS."} 
                             src={socialImg}/>
                <ProjectsItem tittle={"Made a simple card page using HTML 5 and  CSS 3"} 
                            src={cardImg}/>
                <ProjectsItem tittle={"Made an I.P address tracking website."} 
                             src={trackingImg}/>
            </FLexWrapper>
        </StyledProjects>
    )
}



const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #343D68;
`

const StyledProjectsP = styled.p`
    text-align: center;
`