import Button from '@material-ui/core/Button'
import React from 'react'
import { useRouter } from 'next/router'

import { Layout } from '../../Layout/Layout'
import { BACK_BUTTON } from '../Settings/translations'

import styles from './ProfilePage.module.css'
import { PROFILE_TITLE } from './translations'

export function ProfilePage() {
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
            <h1 className={'upper'}>{PROFILE_TITLE}</h1>
        </Layout>
    )
}
