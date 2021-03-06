import Button from '@material-ui/core/Button'
import React from 'react'
import { useRouter } from 'next/router'

import {
    Routes,
    SUB_SECTIONS,
} from '../../../constants/routes'
import { reservePath } from '../../../helpers/routers'
import { Layout } from '../../Layout/Layout'
import { LobbyHeader } from '../../LobbyHeader/LobbyHeader'

import {
    FIND_GAME,
    LOBBY_MAIN_TITLE,
} from './translations'
import styles from './LobbyPage.module.css'

export function LobbyPage() {
    const router = useRouter()
    const handleFindGameClick = () =>
        router.push(reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.WAITING }))

    return (
        <Layout isCentered={true}>
            <LobbyHeader currentPage={SUB_SECTIONS.MAIN} />
            <Button
                className={styles.findGameButton}
                color="secondary"
                variant="contained"
                size="large"
                onClick={handleFindGameClick}
            >
                {FIND_GAME}
            </Button>
            <h1 className={'upper'}>{LOBBY_MAIN_TITLE}</h1>
        </Layout>
    )
}
