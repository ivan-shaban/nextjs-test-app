import Button from '@material-ui/core/Button'
import {
    AppBar,
    Toolbar,
} from '@material-ui/core'
import { signOut } from 'next-auth/client'
import React from 'react'
import { useRouter } from 'next/router'

import {
    Routes,
    SUB_SECTIONS,
} from '../../../constants/routes'
import { reservePath } from '../../../helpers/routers'
import { Layout } from '../../Layout/Layout'
import {
    TabData,
    TabsView,
} from '../../Tabs/TabsView'
import {
    FIND_GAME,
    HEROES_TITLE,
    LEARN_TITLE,
    LOGOUT,
    MAIN_TITLE,
} from '../Lobby/translations'

import styles from './StorePage.module.css'
import { TITLE } from './translations'

export const tabs: TabData[] = [{
    id: 'main',
    title: MAIN_TITLE,
    link: reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.MAIN }),
}, {
    id: SUB_SECTIONS.HEROES,
    title: HEROES_TITLE,
    link: reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.HEROES }),
}, {
    id: SUB_SECTIONS.LEARN,
    title: LEARN_TITLE,
    link: reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.LEARN }),
}]

export function StorePage() {
    const router = useRouter()
    const handleFindGameClick = () =>
        router.push(reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.WAITING }))
    const handleLogoutClick = () =>
        signOut()

    return (
        <Layout isCentered={true}>
            <Button
                className={styles.findGameButton}
                color="secondary"
                variant="contained"
                size="large"
                onClick={handleFindGameClick}
            >
                {FIND_GAME}
            </Button>
            <AppBar position="absolute">
                <Toolbar>
                    <TabsView data={tabs} />
                    <Button
                        className={styles.logoutButton}
                        color={'inherit'}
                        onClick={handleLogoutClick}
                    >
                        {LOGOUT}
                    </Button>
                </Toolbar>
            </AppBar>
            <h1>{TITLE}</h1>
        </Layout>
    )

}
