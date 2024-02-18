import React from "react";
import styled from 'styled-components';
import { css } from 'styled-components';
import { IconGears } from "../../icon/IconGears";
import {theme} from '../../../styles/Theme'


type MenuPropsType = {
    menuItems: Array<string>
}



 export const MobileMenu = (props: MenuPropsType) =>{
    return(
        <StyledMobileMenu>
            <StyledBurgerButton isOpen={false}>
                <span></span>
            </StyledBurgerButton>
                <StyledMobileMenuPopup isOpen={false}>
                    <ul>
                        {props.menuItems.map((item,index) => {
                            return <li key={index}>
                                        <a href="#">{index === 1 &&  <IconGears iconId="gears" width="24" height="22"/>}{item}</a>
                                    </li>
                        })} 
                    </ul>
                </StyledMobileMenuPopup>
            </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
    display: none;
    li{     
        margin-right: 50px;
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
        &:nth-child(3) {
            margin-right: 0;
        }
    }
    li svg{
        margin-right: 5px;
    }
   
    a{
        color: rgb(0, 0, 0);
        &:hover{
            transition: all 0.3s ease-out;
            color: rgb(232, 73, 73);
        }
    }
    @media ${theme.media.tablet} {
        display: block;
    }
    
`

const StyledMobileMenuPopup = styled.div<{isOpen: boolean}>`
    display: none;
    position: fixed;
    background-color: rgba(0, 3, 3, 0.5);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 26px;
        @media ${theme.media.tablet} {
        display: block;
        l
        svg{
            /* display: none */

        }
    }
    li{
        &:nth-child(2) {
            margin-right: 60px;
        }
    }
}
    
  
`

const StyledBurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -110px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999;
    span {
        display: block;
        width: 32px;
        height: 2px;
        background-color: black;
        position: absolute;
        left: 40px;
        bottom: 50px;
        ${props => props.isOpen && css<{isOpen: boolean}>`
        background-color: rgba(255, 255, 255, 0);
    `}
        &::before{
            content: "";
            display: block;
            width: 32px;
            height: 2px;
            background-color: black;
            position: absolute;
            transform: translateY(-10px);
                ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}
        }
        &::after{
            content: "";
            display: block;
            width: 32px;
            height: 2px;
            background-color: black;
            position: absolute;
            transform: translateY(10px);
                ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
    @media ${theme.media.mobile} {
        top: -130px;
        left: -30px;
    }
`

