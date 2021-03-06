import {
    CircularProgress,
    makeStyles,
} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import React from 'react'
import { useRouter } from 'next/router'

import { Layout } from '../../Layout/Layout'
import { reservePath } from '../../../helpers/routers'
import {
    Routes,
    SUB_SECTIONS,
} from '../../../constants/routes'

import {
    CANCEL_BUTTON,
    WAITING_TITLE,
} from './translations'

const useStyles = makeStyles((theme) => ({
    cancelButton: {
        position: 'absolute',
        bottom: theme.offsets.buttonBorderOffset,
        left: theme.offsets.buttonBorderOffset,
    },
}))

export function WaitingPage() {
    const classes = useStyles()
    const router = useRouter()
    const handleCancelClick = () =>
        router.push(reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.MAIN }))

    return (
        <Layout isCentered={true}>
            <CircularProgress color="secondary" />
            <h5>{WAITING_TITLE}</h5>
            <Button
                className={classes.cancelButton}
                color="secondary"
                size="large"
                onClick={handleCancelClick}
            >
                {CANCEL_BUTTON}
            </Button>
        </Layout>
    )
}
