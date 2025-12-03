import { ActiveStep } from '@/components/ActiveStep'
import {
    GlobalWrapper,
    Wrapper,
    WrapperContent,
} from '@/components/GlobalWrapper'
import Sidebar from '@/components/Sidebar'

export const App = () => (
    <GlobalWrapper>
        <Wrapper>
            <Sidebar />
            <WrapperContent>
                <ActiveStep />
            </WrapperContent>
        </Wrapper>
    </GlobalWrapper>
)
