import React from "react";

import styled from "styled-components";
import { theme } from "../styles/Theme";

type FLexWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    minHeight?: string,
    maxWidth?: string,
    margin?: string,
}




export const FLexWrapper = styled.div<FLexWrapperPropsType>`
    max-width: 1230px;
    margin: ${props => props.margin ||"0 auto"};
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    min-height: ${props => props.minHeight};
    max-width: ${props => props.maxWidth || "1230px"};
`