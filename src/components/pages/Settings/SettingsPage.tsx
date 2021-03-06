import React from 'react'
import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button'

import { Layout } from '../../Layout/Layout'

import styles from './SettingsPage.module.css'
import {
    BACK_BUTTON,
    SETTINGS_TITLE,
} from './translations'

export function SettingsPage() {
    const router = useRouter()
    const handleBackClick = () =>
        router.back()

    return (
        <Layout isCentered={true}>
            <Button
                className={styles.backButton}
                color="secondary"
                size="large"
                onClick={handleBackClick}
            >
                {BACK_BUTTON}
            </Button>
            <h1 className={'upper'}>{SETTINGS_TITLE}</h1>
        </Layout>
    )
}
