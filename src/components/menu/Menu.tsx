import React from "react";
import styled from 'styled-components';
import gears from '../../assets/img/gears.svg'


type MenuPropsType = {
    menuItems: Array<string>
}


 export const Menu = (props: MenuPropsType) =>{
    return(
        <StyledMenu>
                <ul>
                    {props.menuItems.map((item,index) => {
                        return <li key={index}>
                                    <a href="#">{item}</a>
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
        gap: 30px;
        height: 26px;
        
    }
    li{
        margin-right: 50px;
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
        
    }
    li:nth-child(2){
        &::before{
            position: absolute;
            content: "";
            width: 33px;
            height: 30px;
            top: -3px;
            right: 317px;
            background-image: url(${gears});
            background-repeat: no-repeat;
            background-size: cover;
            
        }
    }
    li:nth-child(2){
        &:hover::before{
            position: absolute;
            display: inline-block;
            content: "";
            width: 33px;
            height: 30px;
            top: -3px;
            right: 317px;
            background-image: url(${gears});
            background-repeat: no-repeat;
            background-size: cover;
            
            
        }
    }
    a{
        color: rgb(0, 0, 0);
        &:hover{
            color: rgb(232, 73, 73);
        }
    }
    
`