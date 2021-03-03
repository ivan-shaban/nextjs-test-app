import React from 'react'
import classNames from 'classnames'

import styles from './BaseView.module.css'

// eslint-disable-next-line react/prop-types
export const ScreenView: React.FC = ({ children }) => (
    <div className={styles.base}>{children}</div>
)

// eslint-disable-next-line react/prop-types
export const ScreenCenteredContentView: React.FC = ({ children }) => (
    <div className={classNames(styles.base, styles.withCenteredContent)}>{children}</div>
)
