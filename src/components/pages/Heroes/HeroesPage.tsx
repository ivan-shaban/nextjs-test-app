import Button from '@material-ui/core/Button'
import React from 'react'
import { useRouter } from 'next/router'

import {
    Routes,
    SUB_SECTIONS,
} from '../../../constants/routes'
import { reservePath } from '../../../helpers/routers'
import { Layout } from '../../Layout/Layout'
import { FIND_GAME } from '../Lobby/translations'
import { LobbyHeader } from '../../LobbyHeader/LobbyHeader'

import styles from './HeroesPage.module.css'
import { HEROES_TITLE } from './translations'

export function HeroesPage() {
    const router = useRouter()
    const handleFindGameClick = () =>
        router.push(reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.WAITING }))

    return (
        <Layout isCentered={true}>
            <LobbyHeader currentPage={SUB_SECTIONS.HEROES} />
            <Button
                className={styles.findGameButton}
                color="secondary"
                variant="contained"
                size="large"
                onClick={handleFindGameClick}
            >
                {FIND_GAME}
            </Button>
            <h1 className={'upper'}>{HEROES_TITLE}</h1>
        </Layout>
    )

}
