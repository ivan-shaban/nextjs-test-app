import { delay } from '../helpers/timer'
import { Attribute } from '../constants/heroes'
import { Hero } from '../data/types/heroes'

const allHeroes: Hero[] = [
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.STRENGTH },
    { primaryAttr: Attribute.AGILITY },
    { primaryAttr: Attribute.AGILITY },
    { primaryAttr: Attribute.AGILITY },
    { primaryAttr: Attribute.AGILITY },
    { primaryAttr: Attribute.AGILITY },
    { primaryAttr: Attribute.AGILITY },
    { primaryAttr: Attribute.AGILITY },
    { primaryAttr: Attribute.AGILITY },
    { primaryAttr: Attribute.AGILITY },
    { primaryAttr: Attribute.AGILITY },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
    { primaryAttr: Attribute.INTELLECT },
].map((hero, index) => ({
    ...hero,
    id: index,
}))

export const getAllHeroesByPrimaryAttr = async () => {
    await delay(5)

    return allHeroes
}
