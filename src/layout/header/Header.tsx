import React from "react";
import styled from 'styled-components';
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FLexWrapper } from "../../components/FlexWrapper";

const items = ["Skills","Projects","Contact me"]


export const Header = () => {
    return(
        <StyledHeader>
            <Container>
                    <Logo />
                    <Menu menuItems={items}/>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    background: rgb(252, 252, 252);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 2px 1px 0px rgba(0, 0, 0, 0.12),0px 1px 1px 0px rgba(0, 0, 0, 0.14);
    padding: 20px 0;

`
