import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import logo from '../../assets/img/logo-comp.png'
import { theme } from "../../styles/Theme";

export const Logo = () =>{
    return (
        <StyledLogo href="#">
            {/* <Icon iconId={"logoSvg"}/> */}
        </StyledLogo>
    )
}


const StyledLogo = styled.a`
    background-image: url(${logo});
    background-size: cover;
    background-repeat: no-repeat;
    width: 90px;
    height: 35px;
    margin-left: 20px;
    @media ${theme.media.mobile}{
        display: none;
    }
`