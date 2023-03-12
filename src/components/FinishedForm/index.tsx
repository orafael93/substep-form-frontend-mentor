import ThankYouIcon from '../../assets/icon-thank-you.svg'

import * as S from './styles'

const FinishedForm = () => {
    return (
        <S.Wrapper>
            <ThankYouIcon />
            <S.ThankYouText>Thank you!</S.ThankYouText>
            <S.ThankYouMessage>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </S.ThankYouMessage>
        </S.Wrapper>
    )
}

export default FinishedForm
