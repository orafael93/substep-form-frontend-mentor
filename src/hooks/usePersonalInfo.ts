import { InfoType } from '@/context/GlobalContext'
import { useGlobalState } from '@/hooks/useGlobalState'

export const usePersonalInfo = () => {
    const { infoModule } = useGlobalState()
    const [info, updateInfo] = infoModule

    const onUpdatePersonalInfo = (infoToUpdate: InfoType) => {
        updateInfo(infoToUpdate)
    }

    return {
        info,
        onUpdatePersonalInfo,
    }
}
