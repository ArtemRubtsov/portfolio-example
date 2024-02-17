import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type FooterSocialPropsType = {
    iconId: string,
}
type FooterLinkPropstype = {
    href: string
}

export const FooterSocail = (props: FooterSocialPropsType) =>{
    return (
        <StyledFooterSocial>
            <StyledFooterSocialLink href="#">
                <Icon iconId={props.iconId} width="50" viewBox="0 0 60 40"/>
            </StyledFooterSocialLink>
        </StyledFooterSocial>
    )
}


const StyledFooterSocial = styled.li`
    &:first-child{
        margin-left: 0;
    }
    margin-left: 30px;
    display: inline-block;
    list-style: none;
`
const StyledFooterSocialLink = styled.a<FooterLinkPropstype>`
    color: #fff;
    cursor: pointer;
    &:hover{
        color: rgb(232, 73, 73);
        transition: all 3s ease-in-out;
    }
`
