export type StepStateType = 'active' | 'disabled' | 'completed'

export type StepNameType = 'info' | 'plan' | 'addons' | 'summary'

export type StepsType = {
    id: StepNameType
    name: string
    content: string
    state: StepStateType
    slug: number
}
