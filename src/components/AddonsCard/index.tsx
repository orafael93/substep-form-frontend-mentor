import { MouseEvent, useState } from 'react'

import * as S from './styles'

const AddonsCard = () => {
    const [checked, setChecked] = useState(false)

    const handleCheck = (e: MouseEvent) => {
        e.preventDefault()
        setChecked((oldState) => !oldState)
    }

    return (
        <S.Wrapper onClick={handleCheck} addonIsChecked={checked}>
            <S.CheckboxInput type="checkbox" checked={checked} />
            <S.WrapperService>
                <S.ServiceName>Online service</S.ServiceName>
                <S.ServiceDescription>
                    Access to multiplayer games
                </S.ServiceDescription>
            </S.WrapperService>
            <S.WrapperPrice>
                <S.Price>+$1/mo</S.Price>
            </S.WrapperPrice>
        </S.Wrapper>
    )
}

export default AddonsCard
