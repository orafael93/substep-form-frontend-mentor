import { ActiveStep } from '@/components/ActiveStep'
import {
    GlobalWrapper,
    Wrapper,
    ContentWrapper,
} from '@/components/GlobalWrapper'
import { Sidebar } from '@/components/Sidebar'

export const App = () => (
    <GlobalWrapper>
        <Wrapper>
            <Sidebar />
            <ContentWrapper>
                <ActiveStep />
            </ContentWrapper>
        </Wrapper>
    </GlobalWrapper>
)
