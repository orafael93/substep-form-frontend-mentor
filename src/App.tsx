import FinishedForm from './components/FinishedForm'
import {
    GlobalWrapper,
    Wrapper,
    WrapperContent,
    WrapperNextStepMobile,
    BackButton,
    Button,
} from './components/GlobalWrapper'
import Sidebar from './components/Sidebar'

import Step4 from './components/Step4'

function App() {
    return (
        <GlobalWrapper>
            <Wrapper>
                <Sidebar />
                <WrapperContent>
                    <FinishedForm />
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
