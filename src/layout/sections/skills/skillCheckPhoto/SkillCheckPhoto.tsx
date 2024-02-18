import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type SkillsPropstype = {
    src: string
}

export const SkillCheckPhoto = (props: SkillsPropstype) => {
    return (
        <StyledSkillCheckPhoto>
            <StyledSkillPhoto src={props.src}/>
        </StyledSkillCheckPhoto>
        
    )
}
            


const StyledSkillCheckPhoto = styled.div`
     max-width: 510px;
     @media ${theme.media.mobile}{
        max-width: 250px;
        min-height: 185px;
        margin: 0 auto;
     }
`
const StyledSkillPhoto = styled.img`
    width: 100%;
   
`