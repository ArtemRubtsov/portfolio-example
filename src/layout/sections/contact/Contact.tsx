import React from "react";
import styled from "styled-components";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { SectionTittle } from "../../../components/SectionTittle";
import { SkillCheckPhoto } from "../skills/skillCheckPhoto/SkillCheckPhoto";
import { ContactForm } from "./contactForm/ContactForm";
import { theme } from "../../../styles/Theme";

type SectionPropsTittleType = {
    tittle: string,
    src: string,

}


export const Contact = (props: SectionPropsTittleType) => {
    return(
        <StyledContact>
                <SectionTittle textAlign="center" marginBottom="30px">{props.tittle}</SectionTittle>
                <FLexWrapper justify="space-between">
                    <SkillCheckPhoto src={props.src}/>
                    <ContactForm/>
                </FLexWrapper>
        </StyledContact>
    )
}



const StyledContact = styled.section`
    min-height: 591px;
    padding-top: 50px;
    background-color: #f4f4f4;
    ${FLexWrapper} {
        @media ${theme.media.mobile} {
            max-width: 360px;
            flex-direction: column;
            flex-wrap: wrap;
        }
    }
    
    
`