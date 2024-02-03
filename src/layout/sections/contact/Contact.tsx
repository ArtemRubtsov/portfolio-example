import React from "react";
import styled from "styled-components";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { SectionTittle } from "../../../components/SectionTittle";
import { SkillCheckPhoto } from "../skills/skillCheckPhoto/SkillCheckPhoto";
import { ContactForm } from "./contactForm/ContactForm";

type SectionPropsTittleType = {
    tittle: string,
    src: string,

}


export const Contact = (props: SectionPropsTittleType) => {
    return(
        <StyledContact>
            <SectionTittle>{props.tittle}</SectionTittle>
            <FLexWrapper justify="space-around">
                <SkillCheckPhoto src={props.src}/>
                <ContactForm/>
            </FLexWrapper>
        </StyledContact>
    )
}



const StyledContact = styled.section`
    min-height: 100vh;
    background-color: #f4f4f4;
`