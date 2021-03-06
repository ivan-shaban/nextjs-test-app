import { getSession } from 'next-auth/client'

import { reservePath } from '../helpers/routers'
import {
    Routes,
    SUB_SECTIONS,
} from '../constants/routes'
import { IndexPage } from '../components/pages/Index/IndexPage'

export default IndexPage

export async function getServerSideProps(context) {
    const session = await getSession(context)

    return {
        redirect: {
            destination: session
                ? reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.MAIN })
                : reservePath(Routes.LOGIN),
            permanent: false,
        },
    }
}
