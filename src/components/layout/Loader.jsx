import React from 'react'
import { StyledLoader } from '../styles/Loader.Styled'

const Loader = () => {
    return (
        <StyledLoader>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </StyledLoader>
    )
}

export default Loader