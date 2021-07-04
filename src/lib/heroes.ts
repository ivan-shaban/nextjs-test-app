import heroes from '../../public/data/heroes.json'

export const getAllHeroesByPrimaryAttr = () => {
    // const heroes = await axios.get<{
    //     [id:string]: Hero
    // }>('https://raw.githubusercontent.com/odota/dotaconstants/master/build/heroes.json')

    return Object.values(heroes)

}
