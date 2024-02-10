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
                <Icon iconId={props.iconId} width="50" viewBox="0 0 70 40"/>
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
    cursor: pointer;
`
