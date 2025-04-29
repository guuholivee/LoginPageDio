import React from 'react';

import { IconConteiner, InputContainer, InputText} from './styles'

const Input = ({leftIcon, name, ...rest}) => {
    return (
        <InputContainer>
            {leftIcon ? (<IconConteiner>{leftIcon}</IconConteiner>) : null}
            <InputText { ...rest}/>
       </InputContainer>
    )
}

export {Input}