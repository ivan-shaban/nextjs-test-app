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
import { FIND_GAME } from '../Lobby/translations'

import { LEARN_TITLE } from './translations'

const useStyles = makeStyles((theme) => ({
    findGameButton: {
        position: 'fixed',
        bottom: theme.offsets.buttonBorderOffset,
        left: theme.offsets.buttonBorderOffset,
    },
}))

export function LearnPage() {
    const classes = useStyles()
    const router = useRouter()
    const handleFindGameClick = () =>
        router.push(reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.WAITING }))

    return (
        <Layout isCentered={true} isProtected={true} currentPage={SUB_SECTIONS.LEARN}>
            <Button
                className={classes.findGameButton}
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
