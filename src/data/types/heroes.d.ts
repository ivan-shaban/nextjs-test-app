import { Attribute } from '../../constants/heroes'

export type Hero = {
    primaryAttr: Attribute
    id?: number
    name?: string
    image?:string
}
