import {
    GlobalWrapper,
    Wrapper,
    WrapperContent,
    WrapperNextStepMobile,
    BackButton,
    Button,
} from './components/GlobalWrapper'
import Sidebar from './components/Sidebar'
import Step2 from './components/Step2'

function App() {
    return (
        <GlobalWrapper>
            <Wrapper>
                <Sidebar />
                <WrapperContent>
                    <Step2 />
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
