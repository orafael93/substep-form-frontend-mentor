import { usePlan } from '@/hooks/usePlan'
import { useSteps } from '@/hooks/useSteps'
import { useAddons } from '@/hooks/useAddons'
import { useCompletedForm } from '@/hooks/useCompletedForm'
import { StepsWrapper } from '@/components/StepsWrapper'

import * as S from './styles'

export const FinishingUp = () => {
    const { addons } = useAddons()
    const { plan } = usePlan()
    const { onActiveStep } = useSteps()
    const { onCompleteForm } = useCompletedForm()

    const mappedPlan = {
        name: `${plan?.type.charAt(0).toUpperCase()}${plan?.type.slice(1)}`,
        frequencyLongText: plan?.frequency === 'month' ? 'Monthly' : 'Yearly',
        price: plan?.price,
        frequencyShorText: plan?.frequency === 'month' ? 'mo' : 'yr',
    }

    const mappedAddons = addons?.map((currentAddon) => {
        const parsedFirstNameAddon =
            currentAddon.type.split('-')[0].charAt(0).toUpperCase() +
            currentAddon.type.split('-')[0].slice(1)

        const parsedSecondNameAddon = currentAddon.type.split('-')[1]

        return {
            ...currentAddon,
            type: `${parsedFirstNameAddon} ${parsedSecondNameAddon}`,
            frequency: plan?.frequency === 'month' ? 'mo' : 'yr',
            price:
                plan?.frequency === 'year'
                    ? Number(currentAddon.price) * 10
                    : Number(currentAddon.price),
        }
    })

    const priceAddons = mappedAddons
        ?.map(({ price }) => price)
        .reduce((acc, currentPrice) => {
            acc += currentPrice
            return acc
        }, 0)

    const totalPriceContent = {
        price: (priceAddons || 0) + (plan?.price || 0),
        totalTextLong: plan?.frequency === 'month' ? 'per month' : 'per year',
        totalTextShort: plan?.frequency === 'month' ? 'mo' : 'yr',
    }

    return (
        <StepsWrapper>
            <S.StepTitle>Finishing up</S.StepTitle>
            <S.StepDescription>
                Double-check everything looks OK before confirming.
            </S.StepDescription>

            <S.SelectedContentWrapper 
                as="section" 
                role="region" 
                aria-label="Order summary"
            >
                <S.StepContentWrapper>
                    <S.SelectedNameContentWrapper>
                        <S.Name>
                            {mappedPlan.name} ({mappedPlan.frequencyLongText})
                        </S.Name>
                        <S.ChangeButton 
                            onClick={() => onActiveStep('plan')}
                            aria-label="Change plan selection"
                        >
                            Change
                        </S.ChangeButton>
                    </S.SelectedNameContentWrapper>
                    <S.SelectedPriceWrapper>
                        <S.SelectedPrice aria-label={`Plan price: $${mappedPlan.price} per ${mappedPlan.frequencyShorText}`}>
                            ${mappedPlan.price}/{mappedPlan.frequencyShorText}
                        </S.SelectedPrice>
                    </S.SelectedPriceWrapper>
                </S.StepContentWrapper>
                {mappedAddons && mappedAddons.length > 0 && (
                    <S.AddonsWrapper as="ul" role="list" aria-label="Selected add-ons">
                        {mappedAddons.map(({ type, price, frequency }) => (
                            <S.AddonWrapper as="li" key={type}>
                                <S.AddonNameService>{type}</S.AddonNameService>
                                <S.AddonPrice aria-label={`Add-on price: $${price} per ${frequency}`}>
                                    +${price}/{frequency}
                                </S.AddonPrice>
                            </S.AddonWrapper>
                        ))}
                    </S.AddonsWrapper>
                )}
            </S.SelectedContentWrapper>

            <S.TotalPriceWrapper role="status" aria-live="polite">
                <S.PriceText>
                    Total ({totalPriceContent.totalTextLong})
                </S.PriceText>
                <S.PriceValue aria-label={`Total price: $${totalPriceContent.price} per ${totalPriceContent.totalTextShort}`}>
                    ${totalPriceContent.price}/
                    {totalPriceContent.totalTextShort}
                </S.PriceValue>
            </S.TotalPriceWrapper>

            <S.ButtonsWrapper>
                <S.BackButton 
                    type="button"
                    onClick={() => onActiveStep('addons')}
                    aria-label="Go back to add-ons selection step"
                >
                    Go Back
                </S.BackButton>
                <S.Button 
                    type="button"
                    onClick={onCompleteForm}
                    aria-label="Confirm and complete order"
                >
                    Confirm
                </S.Button>
            </S.ButtonsWrapper>
        </StepsWrapper>
    )
}
