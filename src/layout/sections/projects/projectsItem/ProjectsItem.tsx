import React from "react";
import styled from "styled-components";
import { FLexWrapper } from "../../../../components/FlexWrapper";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IconContext } from "react-icons";
import { theme } from "../../../../styles/Theme";


type ProjectsPropsType = {
    tittle: string,
    src: string,

}


export const ProjectsItem = (props: ProjectsPropsType) =>{
    return(
        <StyledProjectsItem>
                <Image src={props.src} alt="" />
                    <StyledProjectsWrapper>
                        <FLexWrapper  align="center" justify="space-between" minHeight="150px" maxWidth="380px" wrap="wrap"  >
                            <Tittle>{props.tittle}</Tittle>
                            <StyledProjectsWrapper>
                                <IconContext.Provider value={{color: "white", size: "20px"}}>
                                    <Link href={"#"} >Learn More<HiArrowNarrowRight /></Link>
                                </IconContext.Provider>
                            </StyledProjectsWrapper>
                        </FLexWrapper>
                    </StyledProjectsWrapper>
        </StyledProjectsItem>
    )
}

const StyledProjectsItem = styled.div`
    background: rgb(38, 44, 77);
    max-width: 390px;
    min-height: 470px;
    border: 4px solid transparent;
    border-image: linear-gradient(to top, rgb(13, 84, 190), rgb(32, 236, 211));
    border-image-slice: 1;
    border-style: solid;
    margin-bottom: 40px;
    @media ${theme.media.mobile}{
        max-width: 265px;
        
    }
`
const StyledProjectsWrapper = styled.div`
    margin: 0 auto;
    max-width: 400px;
    text-align: center;
    padding: 15px 10px 5px 10px;
    
`

const Image = styled.img`
    width: 100%;
    max-width: 388px;
    height: 276px;
    object-fit: cover;
    @media ${theme.media.mobile} {
        min-height: 165px;
        max-width: 265px;
    }
`

const Tittle = styled.h3`
    display: inline-block;
    max-width: 360px;
    min-height: 50px;
    word-wrap: break-word;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    color: rgba(255, 255, 255, 0.87);
    overflow: hidden;
    
    
`
const Link = styled.a`
    position: relative;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: rgb(255, 255, 255);
    border: 2px solid rgb(255,255,255);
    border-radius: 4px;
    padding: 8px 36px 10px 16px;
    svg{
        max-width: 15px;
        min-height: 9px;
        margin-left: 10px;
        position: absolute;
    }

`
