import React from "react";
import styled from "styled-components";
import { FLexWrapper } from "../../../components/FlexWrapper";
import { SectionTittle } from "../../../components/SectionTittle";
import { SkillCheckPhoto } from "../skills/skillCheckPhoto/SkillCheckPhoto";
import { ContactForm } from "./contactForm/ContactForm";
import { Container } from "../../../components/Container";

type SectionPropsTittleType = {
    tittle: string,
    src: string,

}


export const Contact = (props: SectionPropsTittleType) => {
    return(
        <StyledContact>
            <Container>
                <SectionTittle>{props.tittle}</SectionTittle>
                <FLexWrapper justify="space-around">
                    <SkillCheckPhoto src={props.src}/>
                    <ContactForm/>
                </FLexWrapper>
            </Container>
        </StyledContact>
    )
}



const StyledContact = styled.section`
    min-height: 591px;
    background-color: #f4f4f4;
`