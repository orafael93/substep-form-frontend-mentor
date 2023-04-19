import { InfoTypes } from '../context/GlobalContext'
import { useGlobalState } from './useGlobalState'

export const usePersonalInfo = () => {
    const { infoModule } = useGlobalState()
    const [info, updateInfo] = infoModule

    const onUpdatePersonalInfo = (infoToUpdate: InfoTypes) => {
        updateInfo(infoToUpdate)
    }

    return {
        info,
        onUpdatePersonalInfo,
    }
}
