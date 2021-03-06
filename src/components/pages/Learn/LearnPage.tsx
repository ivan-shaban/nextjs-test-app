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
    LOGOUT,
    MAIN_TITLE,
    STORE_TITLE,
} from '../Lobby/translations'

import styles from './LearnPage.module.css'
import { LEARN_TITLE } from './translations'

export const tabs: TabData[] = [{
    id: 'main',
    title: MAIN_TITLE,
    link: reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.MAIN }),
}, {
    id: SUB_SECTIONS.HEROES,
    title: HEROES_TITLE,
    link: reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.HEROES }),
}, {
    id: SUB_SECTIONS.STORE,
    title: STORE_TITLE,
    link: reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.STORE }),
}]

export function LearnPage() {
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
            <h1 className={'upper'}>{LEARN_TITLE}</h1>
        </Layout>
    )

}
