import { useEffect, useMemo, useState } from 'react'

import { usePersonalInfo } from '@/hooks/usePersonalInfo'
import { maskToValidateEmail } from '@/utils/masks'

export type InputErrorType = {
    hasError: boolean
    message?: string
}

export type OnValidateEmailType = {
    emailToValidate: string
}

export const useValidateEmail = () => {
    const { info } = usePersonalInfo()

    const [error, setError] = useState<InputErrorType>(<InputErrorType>{})
    const [email, setEmail] = useState(info?.email || '')
    const [canInitValidation, setCanInitValidation] = useState(
        Boolean(info?.email)
    )

    const onStartValidateEmailOnBlur = () => {
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
                message: 'Email is required.',
            })
            return
        }

        if (!validatedEmail) {
            setError({ hasError: true, message: 'Email is invalid.' })
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
        onStartValidateEmailOnBlur,
    }
}
