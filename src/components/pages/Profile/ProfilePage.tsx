import Button from '@material-ui/core/Button'
import React from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'

import { Layout } from '../../Layout/Layout'
import { BACK_BUTTON } from '../Settings/translations'

import { PROFILE_TITLE } from './translations'

const useStyles = makeStyles((theme) => ({
    backButton: {
        position: 'absolute',
        top: theme.offsets.buttonBorderOffset,
        left: theme.offsets.buttonBorderOffset,
    },
}))

export function ProfilePage() {
    const classes = useStyles()
    const router = useRouter()
    const handleBackClick = () =>
        router.back()

    return (
        <Layout isCentered={true}>
            <Button
                className={classes.backButton}
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
