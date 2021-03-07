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
        flexDirection: 'column',
        alignItems: isCentered ? 'center' : 'initial',
        justifyContent: isCentered ? 'center' : 'initial',
        backgroundColor: '#f5f5f5',
    }),
})

export const Layout: React.FC<PropsWithChildren<Props>> = (props) => {
    useEffect(() => {
        if (props.isProtected && !session) {
            void router.push(reservePath(Routes.LOGIN))
        }
    }, [])

    const router = useRouter()
    const [session] = useSession()
    const classes = useStyles(props)

    if (props.isProtected && !session) {
        return null
    }

    return (
        <div className={classes.base}>{props.children}</div>
    )
}
