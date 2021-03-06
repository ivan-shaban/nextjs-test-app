import React, { PropsWithChildren } from 'react'
import classNames from 'classnames'

import styles from './Layout.module.css'

export interface Props {
    readonly isCentered?: boolean
}

export const Layout: React.FC<PropsWithChildren<Props>> = ({
    isCentered, children,
}) => (
    <div className={classNames(styles.base, { [styles.withCenteredContent]: isCentered })}>{children}</div>
)
