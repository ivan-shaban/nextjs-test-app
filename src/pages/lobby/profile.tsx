import { getSession } from 'next-auth/client'
import { NextPageContext } from 'next'

import { reservePath } from '../../helpers/routers'
import { Routes } from '../../constants/routes'
import { ProfilePage } from '../../components/pages/Profile/ProfilePage'

export default ProfilePage

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

    return { props: {} }
}
