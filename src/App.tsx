import {
    GlobalWrapper,
    Wrapper,
    WrapperContent,
    WrapperNextStepMobile,
    Button,
} from './components/GlobalWrapper'
import Sidebar from './components/Sidebar'
import Step1 from './components/Step1'

function App() {
    return (
        <GlobalWrapper>
            <Wrapper>
                <Sidebar />
                <WrapperContent>
                    <Step1 />
                </WrapperContent>
            </Wrapper>
            <WrapperNextStepMobile>
                <Button>Next Step</Button>
            </WrapperNextStepMobile>
        </GlobalWrapper>
    )
}

export default App
