import React from "react";
import styled from "styled-components";

type SectionTittlePropsType = {
    tittle?: string,
    textAlign?: string,
    color?: string,
    marginBottom?: string,
}



export const SectionTittle = styled.h2<SectionTittlePropsType>`
    margin-bottom: 30px;
    text-align: ${props => props.textAlign || "start"};
    color: ${props => props.color || "#E84949"}; 
    margin-bottom: ${props => props.marginBottom};
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    padding-top: 25px;
    
     
`;


