import ActiveStep from './components/ActiveStep'
import {
    GlobalWrapper,
    Wrapper,
    WrapperContent,
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
            </Wrapper>
        </GlobalWrapper>
    )
}

export default App
