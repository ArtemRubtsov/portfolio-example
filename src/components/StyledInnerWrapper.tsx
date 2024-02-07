import styled from "styled-components"



type StyledInnerWrapperPropsType = {
    dierction?: string,
    justify?: string,
    align?: string,
    wrap?: string
}


export const StyledInnerWrapper = styled.div<StyledInnerWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.dierction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stetch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
`