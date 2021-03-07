import { HeroesPage } from '../../components/pages/Heroes/HeroesPage'
import { getAllHeroesByPrimaryAttr } from '../../lib/heroes'

export default HeroesPage

export async function getStaticProps() {
    const heroes = await getAllHeroesByPrimaryAttr()

    return { props: { heroes } }
}
