export type StepState = 'active' | 'disabled' | 'completed'

export type StepName = 'info' | 'plan' | 'addons' | 'summary'

export type StepsTypes = {
    id: StepName
    name: string
    content: string
    state: StepState
    slug: number
}
