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

import styles from './LearnPage.module.css'
import { LEARN_TITLE } from './translations'

export function LearnPage() {
    const router = useRouter()
    const handleFindGameClick = () =>
        router.push(reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.WAITING }))

    return (
        <Layout isCentered={true}>
            <LobbyHeader currentPage={SUB_SECTIONS.LEARN} />
            <Button
                className={styles.findGameButton}
                color="secondary"
                variant="contained"
                size="large"
                onClick={handleFindGameClick}
            >
                {FIND_GAME}
            </Button>
            <h1 className={'upper'}>{LEARN_TITLE}</h1>
        </Layout>
    )

}
