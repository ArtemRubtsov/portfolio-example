import React from "react";
import styled from "styled-components";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { FooterSocail } from "./footerSocial/FooterSocial";
import { FooterGit } from "./footerGit/FooterGit";
import { FooterTittle } from "./footerTittle/FooterTittle";
import { Container } from "../../../components/Container";


type FooterPropstype = {
    img: string
}

export const Footer = (props: FooterPropstype) => {
    return(
        <StyledFooter img={props.img}>
            <Container>
                <FLexWrapper justify="space-around" align="center">
                    <FooterTittle tittle="My social media links:"/>
                    <FooterTittle tittle="More projects I’ve worked on"/>
                </FLexWrapper>
                <FLexWrapper justify="space-around">
                    
                    <StyledFooterSocialList>
                        <FooterSocail iconId={"linkSvg"}/>
                        <FooterSocail iconId={"mesSvg"}/>
                        <FooterSocail iconId={"twitSvg"}/>
                        <FooterSocail iconId={"emailSvg"}/>
                    </StyledFooterSocialList>
                    <StyledFooterProjectslGit>
                        <FooterSocail iconId={"gitSvg"}/>
                            <StyledFooterP>
                                @john-doe on github
                            </StyledFooterP>
                    </StyledFooterProjectslGit>
                </FLexWrapper>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer<{img: string}>`
    min-height: 251px;
    background-image: url(${(props) => props.img});
    background-color: #f4f4f4;
    background-repeat: no-repeat;
    background-size: cover;
`
const StyledFooterSocialList = styled.ul`
    max-width: 209px;
    display: flex;
`

const StyledFooterProjectslGit = styled.div`
    max-width: 215px;
    display: flex;
`
const StyledFooterP = styled.p`
    
`

const StyledFooterLink = styled.a`
    
`