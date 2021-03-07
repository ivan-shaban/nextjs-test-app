import Button from '@material-ui/core/Button'
import React from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'

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

const useStyles = makeStyles((theme) => ({
    findGameButton: {
        position: 'fixed',
        bottom: theme.offsets.buttonBorderOffset,
        left: theme.offsets.buttonBorderOffset,
    },
}))

export function LobbyPage() {
    const classes = useStyles()
    const router = useRouter()
    const handleFindGameClick = () =>
        router.push(reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.WAITING }))

    return (
        <Layout isCentered={true} isProtected={true}>
            <LobbyHeader currentPage={SUB_SECTIONS.MAIN} />
            <Button
                className={classes.findGameButton}
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
