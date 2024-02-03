import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
    iconId: string,
    title: string,

}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <StyledSkillTittle >{props.title}</StyledSkillTittle>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    
`

const StyledSkillTittle = styled.h3`
    
`