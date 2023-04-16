import ActiveStep from './components/ActiveStep'
import {
    GlobalWrapper,
    Wrapper,
    WrapperContent,
    WrapperNextStepMobile,
    BackButton,
    Button,
} from './components/GlobalWrapper'
import Sidebar from './components/Sidebar'

function App() {
    return (
        <GlobalWrapper>
            <Wrapper>
                <Sidebar />
                <WrapperContent>
                    <ActiveStep />
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
