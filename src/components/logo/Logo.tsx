import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Logo = () =>{
    return (
        <StyledLogo href="#">
            <Icon iconId={"logoSvg"}/>
        </StyledLogo>
    )
}


const StyledLogo = styled.a`

`