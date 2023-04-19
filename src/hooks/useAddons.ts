import { Addons } from '../context/GlobalContext'
import { useGlobalState } from './useGlobalState'

export const useAddons = () => {
    const { addonsModule } = useGlobalState()
    const [addons, updateAddons] = addonsModule

    const onUpdateAddons = (addonsToUpdate: Addons[]) => {
        updateAddons(addonsToUpdate)
    }

    return {
        addons,
        onUpdateAddons,
    }
}
