import React from "react";  
import styled from "styled-components";
import { Button } from "../button/Button";
import { FaPaperPlane } from "react-icons/fa";
import { IconContext } from "react-icons";


export const ContactForm = () => {
    return ( 
        <StyledForm>
            <StyledFieldInput placeholder="Enter email address"/>
            <StyledfieldTextarea as={"textarea"} placeholder="Enter message..."/>
            <IconContext.Provider value={{color: "#1c85a2" }}>
                <Button type="submit">Send Message<FaPaperPlane /></Button>
            </IconContext.Provider>
        </StyledForm>
    )
}

const StyledForm = styled.form`
margin-top: 25px;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 29px;
`

const StyledFieldInput = styled.input`
    max-width: 615px;
    min-height: 50px;
    padding: 12px 18px 12px 18px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 2px 1px 0px rgba(0, 0, 0, 0.12),0px 1px 1px 0px rgba(0, 0, 0, 0.14);
    background: rgb(255, 255, 255);
    margin-bottom: 40px;
`
const StyledfieldTextarea = styled.textarea`
    max-width: 615px;
    min-height: 160px;
    padding: 11px 19px 11px 19px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 2px 1px 0px rgba(0, 0, 0, 0.12),0px 1px 1px 0px rgba(0, 0, 0, 0.14);
    background: rgb(255, 255, 255);
    resize: none;
    margin-bottom: 20px;
    /* color: #1c85a2; */
`