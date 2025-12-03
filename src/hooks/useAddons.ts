import { AddonsType } from '@/context/GlobalContext'
import { useGlobalState } from '@/hooks/useGlobalState'

export const useAddons = () => {
    const { addonsModule } = useGlobalState()
    const [addons, updateAddons] = addonsModule

    const onUpdateAddons = (addonsToUpdate: AddonsType[]) => {
        updateAddons(addonsToUpdate)
    }

    return {
        addons,
        onUpdateAddons,
    }
}
