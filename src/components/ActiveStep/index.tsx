import { useSteps } from '@/hooks/useSteps'
import { PersonalInfo } from '@/components/PersonalInfo'
import Step2 from '@/components/Step2'
import Step3 from '@/components/Step3'
import Step4 from '@/components/Step4'
import FinishedForm from '@/components/FinishedForm'
import { useCompletedForm } from '@/hooks/useCompletedForm'

const ActiveStep = () => {
    const { steps } = useSteps()
    const { completedForm } = useCompletedForm()

    const activeStep = steps.find((step) => step.state === 'active')

    const handleActiveComponent = () => {
        switch (activeStep?.id) {
            case 'info':
                return PersonalInfo
            case 'plan':
                return Step2
            case 'addons':
                return Step3
            default:
                return Step4
        }
    }

    const ActiveComponent = handleActiveComponent()

    return completedForm ? <FinishedForm /> : <ActiveComponent />
}

export default ActiveStep
