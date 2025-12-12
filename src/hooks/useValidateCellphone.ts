import { useEffect, useMemo, useState } from 'react'

import { usePersonalInfo } from '@/hooks/usePersonalInfo'
import { addTelefoneMask, getAllSpecialCharacters } from '@/utils/masks'

export type OnValidateCellphoneType = {
    cellphoneToValidate: string
}

export type InputErrorType = {
    hasError: boolean
    message?: string
}

export const useValidateCellphone = () => {
    const { info } = usePersonalInfo()

    const [error, setError] = useState<InputErrorType>(<InputErrorType>{})
    const [cellphone, setCellphone] = useState(info?.cellphone || '')
    const [canInitValidation, setCanInitValidation] = useState(
        Boolean(info?.cellphone)
    )

    const onStartValidateCellphoneOnBlur = () => {
        if (!canInitValidation) {
            setCanInitValidation(true)
        }
    }

    const MAX_CELLPHONE_LENGTH = 10

    const onUpdateCellphone = (updatedTelefone: string) => {
        const maskedTelefone = addTelefoneMask(updatedTelefone)

        const cleanTelefone = maskedTelefone
            .replace(getAllSpecialCharacters, '')
            .replace(' ', '')

        if (cleanTelefone.length >= MAX_CELLPHONE_LENGTH) {
            setCanInitValidation(true)
        }

        setCellphone(maskedTelefone)
    }

    const handleTelelefoneInputState = useMemo(() => {
        if (error.hasError) {
            return 'error'
        }

        if (canInitValidation && !error.hasError) {
            return 'success'
        }

        return 'invalidated'
    }, [error, canInitValidation])

    const onValidateTelefone = ({
        cellphoneToValidate,
    }: OnValidateCellphoneType) => {
        const cleanTelefone = cellphoneToValidate
            .replace(getAllSpecialCharacters, '')
            .replace(' ', '')

        if (cleanTelefone.length < MAX_CELLPHONE_LENGTH) {
            setError({
                hasError: true,
                message: 'Telefone deve ter pelo menos 10 números.',
            })
            return
        }

        setError({ hasError: false })
    }

    useEffect(() => {
        if (canInitValidation) {
            onValidateTelefone({ cellphoneToValidate: cellphone })
        }
    }, [cellphone, canInitValidation])

    return {
        cellphone,
        cellphoneError: error,
        cellphoneState: handleTelelefoneInputState,
        onUpdateCellphone,
        onStartValidateCellphoneOnBlur,
    }
}
