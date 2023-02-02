import {
    GlobalWrapper,
    Wrapper,
} from './components/GlobalWrapper'
import Sidebar from './components/Sidebar'

function App() {
    return (
        <GlobalWrapper>
            <Wrapper>
                <Sidebar />
            </Wrapper>
        </GlobalWrapper>
    )
}

export default App
