import React from "react";
import styled from 'styled-components';
import { IconGears } from "../icon/IconGears";
import {theme} from '../../styles/Theme'


type MenuPropsType = {
    menuItems: Array<string>
}



 export const Menu = (props: MenuPropsType) =>{
    return(
        <StyledMenu>
                <ul>
                    {props.menuItems.map((item,index) => {
                        return <li key={index}>
                                    <a href="#">{index === 1 &&  <IconGears iconId="gears" width="24" height="22"/>}{item}</a>
                                </li>
                    })} 
                </ul>
            </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    ul {
        position: relative;
        display: flex;
        align-items: center;
        line-height: 26px;
        
    }
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
        margin-right: 20px;
    }
   
    a{
        color: rgb(0, 0, 0);
        &:hover{
            transition: all 0.3s ease-out;
            color: rgb(232, 73, 73);
        }
    }
    @media ${theme.media.tablet} {
        display: none;
    }
    
`


