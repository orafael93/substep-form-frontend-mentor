import { useEffect, useMemo, useState } from 'react'

import { getOnlyLetters } from '@/utils/masks'
import { usePersonalInfo } from '@/hooks/usePersonalInfo'

export type OnValidateNameType = {
    nameToValidate: string
}

export type InputErrorType = {
    hasError: boolean
    message?: string
}

export const useValidateName = () => {
    const { info } = usePersonalInfo()

    const [error, setError] = useState<InputErrorType>(<InputErrorType>{})
    const [name, setName] = useState(info?.name || '')
    const [canInitValidation, setCanInitValidation] = useState(
        Boolean(info?.name)
    )

    const onStartValidateNameOnBlur = () => {
        if (!canInitValidation) {
            setCanInitValidation(true)
        }
    }

    const onUpdateName = (nameToUpdate: string) => {
        const clearName = nameToUpdate.replace(getOnlyLetters, '')

        if (clearName.length > 2) {
            onStartValidateNameOnBlur()
        }

        setName(clearName)
    }

    const handleNameInputState = useMemo(() => {
        if (error.hasError) {
            return 'error'
        }

        if (canInitValidation && !error.hasError) {
            return 'success'
        }

        return 'invalidated'
    }, [error, canInitValidation])

    const onValidateName = ({ nameToValidate }: OnValidateNameType) => {
        if (nameToValidate.length < 3) {
            setError({
                hasError: true,
                message: 'Name must have at least 3 characters.',
            })

            return
        }

        setError({ hasError: false })
    }

    useEffect(() => {
        if (canInitValidation) {
            onValidateName({ nameToValidate: name })
        }
    }, [name, canInitValidation])

    return {
        name,
        nameError: error,
        nameState: handleNameInputState,
        onUpdateName,
        onStartValidateNameOnBlur,
    }
}
