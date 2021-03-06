import { CircularProgress } from '@material-ui/core'
import React from 'react'

import { Layout } from '../../Layout/Layout'

export function IndexPage() {
    return (
        <Layout isCentered={true}>
            <CircularProgress color="secondary" />
        </Layout>
    )
}
