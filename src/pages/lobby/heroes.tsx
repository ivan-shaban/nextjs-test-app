import { getSession } from 'next-auth/client'
import { NextPageContext } from 'next'

import { reservePath } from '../../helpers/routers'
import { Routes } from '../../constants/routes'
import { HeroesPage } from '../../components/pages/Heroes/HeroesPage'
import { getAllHeroesByPrimaryAttr } from '../../lib/heroes'

export default HeroesPage

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: reservePath(Routes.LOGIN),
                permanent: false,
            },
        }
    }

    const heroes = await getAllHeroesByPrimaryAttr()

    return { props: { heroes } }
}
