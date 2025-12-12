import { ReactNode } from 'react'

import * as S from './styles'

type StepsWrapperType = {
    children: ReactNode
}

export const StepsWrapper = (props: StepsWrapperType) => (
    <S.StepWrapper role="region" aria-label="Form step content">
        {props.children}
    </S.StepWrapper>
)
