import React, {
    PropsWithChildren,
    useEffect,
} from 'react'
import { makeStyles } from '@material-ui/core'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import { reservePath } from '../../helpers/routers'
import {
    Routes,
    SUB_SECTIONS,
} from '../../constants/routes'
import { LobbyHeader } from '../LobbyHeader/LobbyHeader'

export interface Props {
    readonly isCentered?: boolean
    readonly isProtected?: boolean
    readonly currentPage?: SUB_SECTIONS
}

const useStyles = makeStyles({
    base: ({ isCentered }: Props) => ({
        position: isCentered ? 'absolute' : 'unset',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        minWidth: 1024,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        userSelect: 'none',
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
        <>
            {!!props.currentPage && <LobbyHeader currentPage={props.currentPage} />}
            <div className={classes.base}>
                {props.children}
            </div>
        </>
    )
}
