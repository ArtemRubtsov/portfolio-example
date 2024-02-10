import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type FooterSocialPropsType = {
    iconId: string,
}

export const FooterSocail = (props: FooterSocialPropsType) =>{
    return (
        <StyledFooterSocial>
            <Icon iconId={props.iconId}/>
        </StyledFooterSocial>
    )
}


const StyledFooterSocial = styled.li`
    min-height: 30px;
    list-style: none;
`

