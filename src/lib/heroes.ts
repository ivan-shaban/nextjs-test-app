import axios from 'axios'

import { Hero } from '../data/types/heroes'

export const getAllHeroesByPrimaryAttr = async () => {
    const heroes = await axios.get<{
        [id:string]: Hero
    }>('https://raw.githubusercontent.com/odota/dotaconstants/master/build/heroes.json')

    return Object.values(heroes.data)

}
