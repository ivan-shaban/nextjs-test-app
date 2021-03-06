import { getSession } from 'next-auth/client'

import { reservePath } from '../../helpers/routers'
import { Routes } from '../../constants/routes'
import { LearnPage } from '../../components/pages/Learn/LearnPage'

export default LearnPage

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
