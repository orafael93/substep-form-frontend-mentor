import { useSteps } from '../../hooks/useSteps'
import Step1 from '../Step1'
import Step2 from '../Step2'
import Step3 from '../Step3'
import Step4 from '../Step4'
import FinishedForm from '../FinishedForm'
import { useCompletedForm } from '../../hooks/useCompletedForm'

const ActiveStep = () => {
    const { steps } = useSteps()
    const { completedForm } = useCompletedForm()

    const activeStep = steps.find((step) => step.state === 'active')

    const handleActiveComponent = () => {
        switch (activeStep?.id) {
            case 'info':
                return Step1
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
