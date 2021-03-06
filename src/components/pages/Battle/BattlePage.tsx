import Button from '@material-ui/core/Button'
import { signOut } from 'next-auth/client'
import React from 'react'

import { Layout } from '../../Layout/Layout'
import styles from '../Lobby/LobbyPage.module.css'
import { LOGOUT } from '../Lobby/translations'

import { TITLE } from './translations'

export function BattlePage() {
    const handleLogoutClick = () =>
        signOut()

    return (
        <Layout isCentered={true}>
            <Button
                className={styles.logoutButton}
                color="secondary"
                onClick={handleLogoutClick}
            >
                {LOGOUT}
            </Button>
            <h1>{TITLE}</h1>
        </Layout>
    )
}
