import { Addons } from '@/components/Addons'
import { useSteps } from '@/hooks/useSteps'
import { SelectPlan } from '@/components/SelectPlan'
import { FinishingUp } from '@/components/FinishingUp'
import { PersonalInfo } from '@/components/PersonalInfo'
import { useCompletedForm } from '@/hooks/useCompletedForm'
import FinishedForm from '@/components/FinishedForm'

const ActiveStep = () => {
    const { steps } = useSteps()
    const { completedForm } = useCompletedForm()

    const activeStep = steps.find((step) => step.state === 'active')

    const handleActiveComponent = () => {
        switch (activeStep?.id) {
            case 'info':
                return PersonalInfo
            case 'plan':
                return SelectPlan
            case 'addons':
                return Addons
            default:
                return FinishingUp
        }
    }

    const ActiveComponent = handleActiveComponent()

    return completedForm ? <FinishedForm /> : <ActiveComponent />
}

export default ActiveStep
