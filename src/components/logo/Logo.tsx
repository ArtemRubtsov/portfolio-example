import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import logoX1 from '../../assets/img/logo-x1.png'
import logoX2 from '../../assets/img/logo-x2.png'
import { theme } from "../../styles/Theme";

export const Logo = () =>{
    return (
        <StyledLogo href="#"><StyledLogoImg src={logoX2} alt="Logo" /></StyledLogo>
    )
}
// <StyledLogo href="#"><StyledLogoImg src={logoX1} srcSet={`${logoX2} x2`} alt="Logo" /></StyledLogo> ???


const StyledLogo = styled.a`
    margin-left: 20px;
    @media ${theme.media.mobile}{
        display: none;
    }
`

const StyledLogoImg = styled.img`
    
`