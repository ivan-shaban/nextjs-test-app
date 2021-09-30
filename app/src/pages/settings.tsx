import { getSession } from 'next-auth/client'
import { NextPageContext } from 'next'

import { reservePath } from '../helpers/routers'
import { Routes } from '../constants/routes'
import { SettingsPage } from '../components/pages/Settings/SettingsPage'

export default SettingsPage

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
