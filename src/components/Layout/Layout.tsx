import React, { PropsWithChildren } from 'react'
import { makeStyles } from '@material-ui/core'

export interface Props {
    readonly isCentered?: boolean
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
    const classes = useStyles(props)

    return (
        <div className={classes.base}>{props.children}</div>
    )
}
