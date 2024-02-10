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
            <Icon iconId={props.iconId} width="50px" height="80px" viewBox="0 -15 115 100"/>
            <StyledSkillTittle >{props.title}</StyledSkillTittle>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`

    &:first-child{
        margin-left: 0;
    }
    margin-left: 60px;
`

const StyledSkillTittle = styled.h3`
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
`