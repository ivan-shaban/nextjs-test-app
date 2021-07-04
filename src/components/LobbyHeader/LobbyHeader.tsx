import {
    AppBar,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar,
} from '@material-ui/core'
import React, {
    FC,
    useMemo,
} from 'react'
import { AccountCircle } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'

import {
    TabData,
    TabsView,
} from '../Tabs/TabsView'
import { PROFILE_TITLE } from '../pages/Profile/translations'
import { SETTINGS_TITLE } from '../pages/Settings/translations'
import {
    Routes,
    SUB_SECTIONS,
} from '../../constants/routes'
import {
    reserveHeroesPath,
    reservePath,
} from '../../helpers/routers'
import { HEROES_TITLE } from '../pages/Heroes/translations'
import { STORE_TITLE } from '../pages/Store/translations'
import { LEARN_TITLE } from '../pages/Learn/translations'
import { LOBBY_MAIN_TITLE } from '../pages/Lobby/translations'

import { LOGOUT } from './translations'

const useStyles = makeStyles((theme) => ({
    logoutButton: {
        position: 'absolute',
        right: theme.offsets.buttonBorderOffset,
    },
}))

export const tabs: TabData[] = [{
    id: SUB_SECTIONS.MAIN,
    title: LOBBY_MAIN_TITLE,
    link: reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.MAIN }),
}, {
    id: SUB_SECTIONS.HEROES,
    title: HEROES_TITLE,
    link: reserveHeroesPath(),
}, {
    id: SUB_SECTIONS.STORE,
    title: STORE_TITLE,
    link: reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.STORE }),
}, {
    id: SUB_SECTIONS.LEARN,
    title: LEARN_TITLE,
    link: reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.LEARN }),
}]

export interface Props {
    readonly currentPage: SUB_SECTIONS
}

export const LobbyHeader: FC<Props> = ({ currentPage }) => {
    const classes = useStyles()
    const router = useRouter()
    const tabsData = useMemo(() => tabs.map((item) => item.id !== currentPage ? item : {
        ...item,
        disabled: true,
    }), [currentPage])
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
        <AppBar position="fixed">
            <Toolbar>
                <TabsView data={tabsData} />
                <div className={classes.logoutButton}>
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

    )
}
