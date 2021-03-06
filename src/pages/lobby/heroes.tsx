import { getSession } from 'next-auth/client'

import { reservePath } from '../../helpers/routers'
import { Routes } from '../../constants/routes'
import { HeroesPage } from '../../components/pages/Heroes/HeroesPage'

export default HeroesPage

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: reservePath(Routes.LOGIN),
                permanent: false,
            },
        }
    }

    return { props: {} }
}
