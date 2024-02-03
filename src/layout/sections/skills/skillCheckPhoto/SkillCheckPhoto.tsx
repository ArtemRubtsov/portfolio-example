import React from "react";
import styled from "styled-components";

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
    
`
const StyledSkillPhoto = styled.img`
    width: 100%;
`