import heroes from '../../public/data/heroes.json'
import { Hero } from '../data/types/heroes'

// eslint-disable-next-line @typescript-eslint/require-await
export const getAllHeroesByPrimaryAttr = async (): Promise<Hero[]> => {
    // const heroes = await axios.get<{
    //     [id:string]: Hero
    // }>('https://raw.githubusercontent.com/odota/dotaconstants/master/build/heroes.json')
    // await delay(1)

    return Object.values(heroes) as Hero[]
}
