import { Addons, AddonsTypes } from '@/context/GlobalContext'

export type AddonsCardType = {
    id: AddonsTypes
    serviceName: string
    serviceDescription: string
    servicePrice: string
    onAddAddons: (params: Addons) => void
}
