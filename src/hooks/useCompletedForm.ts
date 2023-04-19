import { useGlobalState } from './useGlobalState'

export const useCompletedForm = () => {
    const { completedFormModule } = useGlobalState()
    const [completedForm, updateCompletedForm] = completedFormModule

    const onCompleteForm = () => {
        updateCompletedForm(true)
    }

    return {
        completedForm,
        onCompleteForm,
    }
}
