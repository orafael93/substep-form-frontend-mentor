import { ReactNode } from 'react'

import * as S from './styles'

type StepsWrapperType = {
    children: ReactNode
}

export const StepsWrapper = (props: StepsWrapperType) => (
    <S.StepWrapper>{props.children}</S.StepWrapper>
)
