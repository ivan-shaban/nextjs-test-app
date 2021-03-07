import React, {
    PropsWithChildren,
    useEffect,
} from 'react'
import { makeStyles } from '@material-ui/core'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import { reservePath } from '../../helpers/routers'
import { Routes } from '../../constants/routes'

export interface Props {
    readonly isCentered?: boolean
    readonly isProtected?: boolean
}

const useStyles = makeStyles({
    base: ({ isCentered }: Props) => ({
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        minWidth: 1024,
        flexDirection: 'column',
        alignItems: isCentered ? 'center' : 'initial',
        justifyContent: isCentered ? 'center' : 'initial',
        backgroundColor: '#f5f5f5',
    }),
})

export const Layout: React.FC<PropsWithChildren<Props>> = (props) => {
    const router = useRouter()
    const [session, loading] = useSession()
    const classes = useStyles(props)

    useEffect(() => {
        if (props.isProtected && !loading && !session) {
            void router.push(reservePath(Routes.LOGIN))
        }
    }, [loading])

    return (
        <div className={classes.base}>{props.children}</div>
    )
}
