export type StepState = 'active' | 'disabled'

export type StepsTypes = {
    id: number
    name: string
    content: string
    state: StepState
}
