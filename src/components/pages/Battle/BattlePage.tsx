import Button from '@material-ui/core/Button'
import { signOut } from 'next-auth/client'
import React from 'react'
import { makeStyles } from '@material-ui/core'

import { Layout } from '../../Layout/Layout'
import { LOGOUT } from '../../LobbyHeader/translations'

import { BATTLE_TITLE } from './translations'

const useStyles = makeStyles((theme) => ({
    logoutButton: {
        position: 'absolute',
        right: theme.offsets.buttonBorderOffset,
    },
}))

export function BattlePage() {
    const classes = useStyles()
    const handleLogoutClick = () =>
        signOut()

    return (
        <Layout isCentered={true} isProtected={true}>
            <Button
                className={classes.logoutButton}
                color="secondary"
                onClick={handleLogoutClick}
            >
                {LOGOUT}
            </Button>
            <h1 className={'upper'}>{BATTLE_TITLE}</h1>
        </Layout>
    )
}
