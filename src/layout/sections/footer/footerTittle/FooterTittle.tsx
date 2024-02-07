import React from "react";
import styled from "styled-components";

type FooterPropsTittleType = {
    tittle: string
}

export const FooterTittle = (props: FooterPropsTittleType) => {
    return(
        <StyledFooterTittle>{props.tittle}</StyledFooterTittle>
    )
}

const StyledFooterTittle = styled.h3`
    min-height: 29px;
    color: #f0f0f0;
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
`