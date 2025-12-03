import { usePlan } from '@/hooks/usePlan'
import { useSteps } from '@/hooks/useSteps'
import { useAddons } from '@/hooks/useAddons'
import { useCompletedForm } from '@/hooks/useCompletedForm'

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
        <S.Wrapper>
            <S.StepTitle>Finishing up</S.StepTitle>
            <S.StepDescription>
                Double-check everything looks OK before confirming
            </S.StepDescription>

            <S.SelectedContentWrapper>
                <S.StepContentWrapper>
                    <S.SelectedNameContentWrapper>
                        <S.Name>
                            {mappedPlan.name} ({mappedPlan.frequencyLongText})
                        </S.Name>
                        <S.Price onClick={() => onActiveStep('plan')}>
                            Change
                        </S.Price>
                    </S.SelectedNameContentWrapper>
                    <S.PriceSelectedWrapper>
                        <S.PriceSelected>
                            ${mappedPlan.price}/{mappedPlan.frequencyShorText}
                        </S.PriceSelected>
                    </S.PriceSelectedWrapper>
                </S.StepContentWrapper>
                <S.AddonsWrapper>
                    {mappedAddons?.map(({ type, price, frequency }) => (
                        <S.AddonWrapper key={type}>
                            <S.AddonNameService>{type}</S.AddonNameService>
                            <S.AddonPrice>
                                +{price}/{frequency}
                            </S.AddonPrice>
                        </S.AddonWrapper>
                    ))}
                </S.AddonsWrapper>
            </S.SelectedContentWrapper>

            <S.TotalPriceWrapper>
                <S.PriceText>
                    Total ({totalPriceContent.totalTextLong})
                </S.PriceText>
                <S.PriceValue>
                    ${totalPriceContent.price}/
                    {totalPriceContent.totalTextShort}
                </S.PriceValue>
            </S.TotalPriceWrapper>

            <S.ButtonsWrapper>
                <S.BackButton onClick={() => onActiveStep('addons')}>
                    Go Back
                </S.BackButton>
                <S.Button onClick={onCompleteForm}>Confirm</S.Button>
            </S.ButtonsWrapper>
        </S.Wrapper>
    )
}
