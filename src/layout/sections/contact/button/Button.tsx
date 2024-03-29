import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";


export const Button = styled.button`
    display: inline-block;
    max-width: 215px;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    background: rgb(52, 61, 104);
    padding: 12px 24px 12px 24px;
    color: rgb(255, 253, 253);
    border-radius: 4px;
    margin: 0 auto;
    cursor: pointer;
    svg{
        margin-left: 20px;
    }
    @media ${theme.media.mobile} {
        margin-bottom: 30px;
    }
`