import react from 'react'
import styled from 'styled-components'
import { Main } from './main/Main'
import { Skills } from './skills/Skillls'




export const BgMainContainer = () => {
    return(
        <StyledBgmain>
            <Main/>
            <Skills/>
        </StyledBgmain>
    )
}

const StyledBgmain = styled.div`
    background: linear-gradient(to left, rgba(29, 213, 208, 0.22), rgba(79, 74, 200, 0.20));
`