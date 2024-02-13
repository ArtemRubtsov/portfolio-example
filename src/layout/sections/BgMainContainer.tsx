import react from 'react'
import styled from 'styled-components'
import Bg from '../../assets/img/mainBg.jpg'
import { Main } from './main/Main'
import { Skills } from './skills/Skillls'

// type BgMainPropsType = {
//     backGround: string
// }


export const BgMainContainer = () => {
    return(
        <StyledBgmain>
            <Main/>
            <Skills/>
        </StyledBgmain>
    )
}

const StyledBgmain = styled.div`
    background-image: url(${Bg});
    background-size: cover;
    background-repeat: no-repeat;
`