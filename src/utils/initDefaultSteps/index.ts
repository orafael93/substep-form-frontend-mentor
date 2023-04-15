import { StepsTypes } from '../../components/Sidebar/types'

export const initDefaultSteps = (): StepsTypes[] => [
    {
        id: 1,
        name: 'Step 1',
        content: 'Your Info',
        state: 'active',
    },
    {
        id: 2,
        name: 'Step 2',
        content: 'Select Plan',
        state: 'disabled',
    },
    {
        id: 3,
        name: 'Step 3',
        content: 'Add-ons',
        state: 'disabled',
    },
    {
        id: 4,
        name: 'Step 4',
        content: 'Summary',
        state: 'disabled',
    },
]
