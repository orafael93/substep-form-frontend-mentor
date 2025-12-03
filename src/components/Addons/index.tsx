import { useState } from 'react'

import { useSteps } from '@/hooks/useSteps'
import { useAddons } from '@/hooks/useAddons'
import { AddonsCard } from '@/components/AddonsCard'
import { AddonsType } from '@/context/GlobalContext'

import * as S from './styles'

export const Addons = () => {
    const { onUpdateAddons, addons } = useAddons()
    const [addonsAdded, setAddonsAdded] = useState<AddonsType[]>(addons || [])
    const { onCompleteStep, onActiveStep } = useSteps()

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
        <S.Wrapper>
            <S.StepTitle>Pick add-ons</S.StepTitle>
            <S.StepDescription>
                Add-ons help enhance your gaming experience
            </S.StepDescription>
            <S.AddonsCardsWrapper>
                <AddonsCard
                    id="online-service"
                    serviceName="Online service"
                    serviceDescription="Access to multiplayer games"
                    servicePrice="1"
                    onAddAddons={onAddAddons}
                />
                <AddonsCard
                    id="larger-storage"
                    serviceName="Larger storage"
                    serviceDescription="Extra 1TB of cloud save"
                    servicePrice="2"
                    onAddAddons={onAddAddons}
                />
                <AddonsCard
                    id="customizable-profile"
                    serviceName="Customizable profile"
                    serviceDescription="Custom theme on your profile"
                    servicePrice="2"
                    onAddAddons={onAddAddons}
                />
            </S.AddonsCardsWrapper>
            <S.ButtonsWrapper>
                <S.BackButton onClick={() => onActiveStep('plan')}>
                    Go Back
                </S.BackButton>
                <S.Button onClick={onGoToNextStep}>Next Step</S.Button>
            </S.ButtonsWrapper>
        </S.Wrapper>
    )
}
