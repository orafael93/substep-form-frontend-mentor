import { useAddons } from '../../hooks/useAddons'
import { useCompletedForm } from '../../hooks/useCompletedForm'
import { usePlan } from '../../hooks/usePlan'
import { useSteps } from '../../hooks/useSteps'

import * as S from './styles'

const Step4 = () => {
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

            <S.WrapperSelectedContent>
                <S.WrapperStepContent>
                    <S.WrapperNameSelectedContent>
                        <S.Name>
                            {mappedPlan.name} ({mappedPlan.frequencyLongText})
                        </S.Name>
                        <S.Price onClick={() => onActiveStep('plan')}>
                            Change
                        </S.Price>
                    </S.WrapperNameSelectedContent>
                    <S.WrapperSelectedPrice>
                        <S.SelectedPrice>
                            ${mappedPlan.price}/{mappedPlan.frequencyShorText}
                        </S.SelectedPrice>
                    </S.WrapperSelectedPrice>
                </S.WrapperStepContent>
                <S.WrapperAddons>
                    {mappedAddons?.map(({ type, price, frequency }) => (
                        <S.WrapperAddon key={type}>
                            <S.AddonNameService>{type}</S.AddonNameService>
                            <S.AddonPrice>
                                +{price}/{frequency}
                            </S.AddonPrice>
                        </S.WrapperAddon>
                    ))}
                </S.WrapperAddons>
            </S.WrapperSelectedContent>

            <S.WrapperTotalPrice>
                <S.PriceText>
                    Total ({totalPriceContent.totalTextLong})
                </S.PriceText>
                <S.PriceValue>
                    ${totalPriceContent.price}/
                    {totalPriceContent.totalTextShort}
                </S.PriceValue>
            </S.WrapperTotalPrice>

            <S.WrapperButtons>
                <S.BackButton onClick={() => onActiveStep('addons')}>
                    Go Back
                </S.BackButton>
                <S.Button onClick={onCompleteForm}>Confirm</S.Button>
            </S.WrapperButtons>
        </S.Wrapper>
    )
}

export default Step4
