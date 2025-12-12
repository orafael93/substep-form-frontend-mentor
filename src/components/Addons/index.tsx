import { useState } from 'react'

import { useSteps } from '@/hooks/useSteps'
import { useAddons } from '@/hooks/useAddons'
import { AddonsCard } from '@/components/AddonsCard'
import { AddonsType } from '@/context/GlobalContext'
import { StepsWrapper } from '@/components/StepsWrapper'

import * as S from './styles'

export const Addons = () => {
    const { onUpdateAddons, addons } = useAddons()
    const [addonsAdded, setAddonsAdded] = useState<AddonsType[]>(addons || [])
    const { onCompleteStep, onActiveStep } = useSteps()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onGoToNextStep()
    }

    const onGoToNextStep = () => {
        onCompleteStep('addons')
        onUpdateAddons(addonsAdded)
    }

    const onAddAddons = (addon: AddonsType) => {
        setAddonsAdded((prevState) => {
            const addonAlreadyAdded = prevState.find(
                (prevAddon) => prevAddon.type === addon.type
            )

            if (addonAlreadyAdded) {
                return prevState.filter(
                    (prevAddon) => prevAddon.type !== addon.type
                )
            }

            return [...prevState, addon]
        })
    }

    return (
        <StepsWrapper>
            <S.StepTitle>Pick add-ons</S.StepTitle>
            <S.StepDescription>
                Add-ons help enhance your gaming experience.
            </S.StepDescription>
            <S.Form onSubmit={handleSubmit} aria-label="Add-ons selection form">
                <S.AddonsCardsWrapper role="group" aria-label="Available add-ons">
                    <AddonsCard
                        id="online-service"
                        serviceName="Online service"
                        serviceDescription="Access to multiplayer games"
                        servicePrice="1"
                        onAddAddons={onAddAddons}
                        isChecked={!!addonsAdded.find(a => a.type === 'online-service')}
                    />
                    <AddonsCard
                        id="larger-storage"
                        serviceName="Larger storage"
                        serviceDescription="Extra 1TB of cloud save"
                        servicePrice="2"
                        onAddAddons={onAddAddons}
                        isChecked={!!addonsAdded.find(a => a.type === 'larger-storage')}
                    />
                    <AddonsCard
                        id="customizable-profile"
                        serviceName="Customizable profile"
                        serviceDescription="Custom theme on your profile"
                        servicePrice="2"
                        onAddAddons={onAddAddons}
                        isChecked={!!addonsAdded.find(a => a.type === 'customizable-profile')}
                    />
                </S.AddonsCardsWrapper>
                <S.ButtonsWrapper>
                    <S.BackButton 
                        type="button"
                        onClick={() => onActiveStep('plan')}
                        aria-label="Go back to plan selection step"
                    >
                        Go Back
                    </S.BackButton>
                    <S.Button 
                        type="submit"
                        aria-label="Proceed to next step"
                    >
                        Next Step
                    </S.Button>
                </S.ButtonsWrapper>
            </S.Form>
        </StepsWrapper>
    )
}
