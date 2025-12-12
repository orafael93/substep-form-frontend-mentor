import { useEffect, useMemo, useState } from 'react'

import { maskToValidateEmail } from '@/utils/masks'

export type InputErrorType = {
    hasError: boolean
    message?: string
}

export type OnValidateEmailType = {
    emailToValidate: string
}

export const useValidateEmail = () => {
    const [error, setError] = useState<InputErrorType>(<InputErrorType>{})
    const [email, setEmail] = useState('')
    const [canInitValidation, setCanInitValidation] = useState(false)

    const onStartValidationOnBlur = () => {
        if (!canInitValidation) {
            setCanInitValidation(true)
        }
    }

    const onUpdateEmail = (updatedEmail: string) => {
        setEmail(updatedEmail)
    }

    const handleEmailInputState = useMemo(() => {
        if (error.hasError) {
            return 'error'
        }

        if (canInitValidation && !error.hasError) {
            return 'success'
        }

        return 'invalidated'
    }, [error, canInitValidation])

    const onValidateEmail = ({ emailToValidate }: OnValidateEmailType) => {
        const validatedEmail = new RegExp(maskToValidateEmail).test(
            emailToValidate.toLowerCase()
        )

        if (emailToValidate.length < 1) {
            setError({
                hasError: true,
                message: 'O campo de e-mail é obrigatório.',
            })
            return
        }

        if (!validatedEmail) {
            setError({ hasError: true, message: 'O e-mail está inválido.' })
            return
        }

        setError({ hasError: false })
    }

    useEffect(() => {
        if (canInitValidation) {
            onValidateEmail({ emailToValidate: email })
        }
    }, [email, canInitValidation])

    return {
        email,
        emailError: error,
        emailState: handleEmailInputState,
        onUpdateEmail,
        onStartValidationOnBlur,
    }
}
