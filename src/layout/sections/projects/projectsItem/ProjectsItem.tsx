import React from "react";
import styled from "styled-components";
import { FLexWrapper } from "../../../../components/FlexWrapper";

type ProjectsPropstype = {
    tittle: string,
    src: string,
}


export const ProjectsItem = (props: ProjectsPropstype) =>{
    return(
        <StyledProjectsItem>
                <Image src={props.src} alt="" />
                <Tittle>{props.tittle}</Tittle>
                <Link href={"#"}>Learn More</Link>
        </StyledProjectsItem>
    )
}

const StyledProjectsItem = styled.div`
    background-color: aquamarine;
    max-width: 381px;

`
const Image = styled.img`
    width: 100%;
    height: 276px;
    object-fit: cover;
`

const Tittle = styled.h3`
    text-align: center;

`
const Link = styled.a`
    

`
