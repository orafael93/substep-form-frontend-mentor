import AddonsCard from '../AddonsCard'

import * as S from './styles'

const Step3 = () => {
    return (
        <S.Wrapper>
            <S.StepTitle>Pick add-ons</S.StepTitle>
            <S.StepDescription>
                Add-ons help enhance your gaming experience
            </S.StepDescription>
            <S.WrapperAddonsCards>
                <AddonsCard
                    serviceName="Online service"
                    serviceDescription="Access to multiplayer games"
                    servicePrice="1"
                />
                <AddonsCard
                    serviceName="Larger storage"
                    serviceDescription="Extra 1TB of cloud save"
                    servicePrice="2"
                />
                <AddonsCard
                    serviceName="Customizable profile"
                    serviceDescription="Custom theme on your profile"
                    servicePrice="2"
                />
            </S.WrapperAddonsCards>
            <S.WrapperButtons>
                <S.BackButton>Go Back</S.BackButton>
                <S.Button>Next Step</S.Button>
            </S.WrapperButtons>
        </S.Wrapper>
    )
}

export default Step3
