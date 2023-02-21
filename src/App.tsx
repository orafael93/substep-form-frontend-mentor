import {
    GlobalWrapper,
    Wrapper,
    WrapperContent,
    WrapperNextStepMobile,
    BackButton,
    Button,
} from './components/GlobalWrapper'
import Sidebar from './components/Sidebar'

import Step3 from './components/Step3'

function App() {
    return (
        <GlobalWrapper>
            <Wrapper>
                <Sidebar />
                <WrapperContent>
                    <Step3 />
                </WrapperContent>
                <WrapperNextStepMobile>
                    <BackButton>Go Back</BackButton>
                    <Button>Next Step</Button>
                </WrapperNextStepMobile>
            </Wrapper>
        </GlobalWrapper>
    )
}

export default App
