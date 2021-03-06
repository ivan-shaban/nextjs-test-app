import Button from '@material-ui/core/Button'
import {
    AppBar,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
} from '@material-ui/core'
import { signOut } from 'next-auth/client'
import React from 'react'
import { useRouter } from 'next/router'
import { AccountCircle } from '@material-ui/icons'

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
import { PROFILE_TITLE } from '../Profile/translations'
import { SETTINGS_TITLE } from '../Settings/translations'

import {
    FIND_GAME,
    HEROES_TITLE,
    LEARN_TITLE,
    LOGOUT,
    STORE_TITLE,
    LOBBY_MAIN_TITLE,
} from './translations'
import styles from './LobbyPage.module.css'

export const tabs: TabData[] = [{
    id: SUB_SECTIONS.HEROES,
    title: HEROES_TITLE,
    link: reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.HEROES }),
}, {
    id: SUB_SECTIONS.STORE,
    title: STORE_TITLE,
    link: reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.STORE }),
}, {
    id: SUB_SECTIONS.LEARN,
    title: LEARN_TITLE,
    link: reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.LEARN }),
}]

export function LobbyPage() {
    const router = useRouter()
    const handleFindGameClick = () =>
        router.push(reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.WAITING }))
    const handleLogoutClick = () =>
        signOut()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const isOpen = !!anchorEl
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const gotoProfile = () => {
        handleClose()
        void router.push(reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.PROFILE }))
    }
    const gotoSettings = () => {
        handleClose()
        void router.push(reservePath(Routes.SETTINGS))
    }

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
                    <div className={styles.logoutButton}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={isOpen}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={gotoProfile}>{PROFILE_TITLE}</MenuItem>
                            <MenuItem onClick={gotoSettings}>{SETTINGS_TITLE}</MenuItem>
                            <MenuItem onClick={handleLogoutClick}>{LOGOUT}</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <h1 className={'upper'}>{LOBBY_MAIN_TITLE}</h1>
        </Layout>
    )

}
