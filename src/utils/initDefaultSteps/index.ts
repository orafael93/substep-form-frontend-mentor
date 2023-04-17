import { StepsTypes } from '../../components/Sidebar/types'

export const initDefaultSteps = (): StepsTypes[] => [
    {
        id: 'info',
        name: 'Step 1',
        content: 'Your Info',
        state: 'active',
        slug: 1,
    },
    {
        id: 'plan',
        name: 'Step 2',
        content: 'Select Plan',
        state: 'disabled',
        slug: 2,
    },
    {
        id: 'addons',
        name: 'Step 3',
        content: 'Add-ons',
        state: 'disabled',
        slug: 3,
    },
    {
        id: 'summary',
        name: 'Step 4',
        content: 'Summary',
        state: 'disabled',
        slug: 4,
    },
]
