import React from "react";

import styled from "styled-components";

type FLexWrapperPropsType = {
    dierction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    minHeight?: string
}




export const FLexWrapper = styled.div<FLexWrapperPropsType>`
    max-width: 1230px;
    margin: 0 auto;
    display: flex;
    flex-direction: ${props => props.dierction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stetch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    min-height: ${props => props.minHeight};
`