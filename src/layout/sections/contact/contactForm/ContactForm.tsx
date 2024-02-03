import React from "react";  
import styled from "styled-components";
import { Button } from "../button/Button";



export const ContactForm = () => {
    return ( 
        <StyledForm>
            <Field placeholder="type your email"/>
            <Field as={"textarea"} placeholder="type message"/>
            <Button type="submit">Send Message</Button>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const Field = styled.input`
    
`