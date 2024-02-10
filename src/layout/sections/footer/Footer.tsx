import React from "react";
import styled from "styled-components";
import { FooterSocail } from "./footerSocial/FooterSocial";
import { FooterTittle } from "./footerTittle/FooterTittle";
import { StyledInnerWrapper } from "../../../components/StyledInnerWrapper";


type FooterPropstype = {
    img: string
}

export const Footer = (props: FooterPropstype) => {
    return(
        <StyledFooter img={props.img}>
                <StyledInnerWrapper justify="space-around" align="center" minHeight="250px">
                        <StyledFooterSocialWrapper>
                            <FooterTittle tittle="My social media links:"/>
                            <StyledFooterSocialList>   
                                    <FooterSocail iconId={"linkSvg"}/>
                                    <FooterSocail iconId={"mesSvg"}/>
                                    <FooterSocail iconId={"twitSvg"}/>
                                    <FooterSocail iconId={"emailSvg"}/>
                            </StyledFooterSocialList>
                        </StyledFooterSocialWrapper>
                    <StyledFooterProjectslGitWrapper>                
                    <FooterTittle tittle="More projects I’ve worked on"/>
                        <StyledFooterSocialList>
                            <FooterSocail iconId={"gitSvg"}/>
                                <StyledFooterLinkGit>
                                        @<StyledSocialLinkSpan>john-doe</StyledSocialLinkSpan> on github
                                </StyledFooterLinkGit>
                        </StyledFooterSocialList>
                    </StyledFooterProjectslGitWrapper>
                </StyledInnerWrapper>

        </StyledFooter>
    )
}

const StyledFooterSocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 315px;
`

const StyledFooter = styled.footer<{img: string}>`
    padding-top: 50px;
    min-height: 250px;
    background-image: url(${(props) => props.img});
    background-color: #f4f4f4;
    background-repeat: no-repeat;
    background-size: cover;
`
const StyledFooterSocialList = styled.ul`
    display: inline-block;
    max-width: 240px;
    display: flex;
`

const StyledFooterProjectslGitWrapper = styled.div`
    max-width: 285px;
    display: flex;
    flex-direction: column;
`
const StyledFooterLinkGit = styled.a`
    display: inline-block;
    color: #f0f0f0;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
`
const StyledSocialLinkSpan = styled.span`
    &:hover{
        color: rgb(10, 203, 191);
    }
    
`
