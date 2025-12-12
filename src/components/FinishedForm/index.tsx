import ThankYouIcon from '@/assets/icon-thank-you.svg'

import * as S from './styles'

export const FinishedForm = () => (
    <S.Wrapper 
        as="section" 
        role="status" 
        aria-live="polite"
        aria-label="Form submission successful"
    >
        <ThankYouIcon aria-label="Success" />
        <S.ThankYouText>Thank you!</S.ThankYouText>
        <S.ThankYouMessage>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
        </S.ThankYouMessage>
    </S.Wrapper>
)
