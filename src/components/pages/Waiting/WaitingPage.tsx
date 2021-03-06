import { CircularProgress } from '@material-ui/core'
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
import styles from './WaitingPage.module.css'

export function WaitingPage() {
    const router = useRouter()
    const handleCancelClick = () =>
        router.push(reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.MAIN }))

    return (
        <Layout isCentered={true}>
            <CircularProgress color="secondary" />
            <h5>{WAITING_TITLE}</h5>
            <Button
                className={styles.cancelButton}
                color="secondary"
                size="large"
                onClick={handleCancelClick}
            >
                {CANCEL_BUTTON}
            </Button>
        </Layout>
    )
}
