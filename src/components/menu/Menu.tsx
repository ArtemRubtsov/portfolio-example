import React from "react";
import styled from 'styled-components';



 export const Menu = (props: {menuItems: Array<string>}) =>{
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
    a{
        color: rgb(0, 0, 0);
        &:hover{
            color: rgb(232, 73, 73);
        }
    }
    
`