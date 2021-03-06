import {
    TextField,
    Typography,
} from '@material-ui/core'
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import ErrorIcon from '@material-ui/icons/Error'
import React, { SyntheticEvent } from 'react'
import { WithRouterProps } from 'next/dist/client/with-router'
import { csrfToken } from 'next-auth/client'
import axios from 'axios'

import { reservePath } from '../../../helpers/routers'
import {
    Routes,
    SUB_SECTIONS,
} from '../../../constants/routes'
import { Layout } from '../../Layout/Layout'

import {
    START_GAME,
    WELCOME_MESSAGE,
    YOUR_NAME,
} from './translations'
import styles from './LoginPage.module.css'

export interface Props {
    readonly csrfToken: string
}

export interface State {
    readonly username: string;
    readonly invalidName: boolean;
    readonly reason?: string;
    readonly isSnackbarOpen: boolean;
    readonly requestInProgress: boolean;
}

const snackbarPosition: SnackbarOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
}

export class LoginPage extends React.PureComponent<Props & WithRouterProps, State> {
    static getInitialProps = async (context): Promise<Props> => {
        return { csrfToken: await csrfToken(context) }
    }

    state: State = {
        username: '',
        invalidName: false,
        isSnackbarOpen: false,
        requestInProgress: false,
    }

    isUsernameValid = (username: string) => {
        return !!username
    }

    handleSnackbarClose = (event?: SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ isSnackbarOpen: false })
    }

    handleLoginClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        event.stopPropagation()

        if (!this.isUsernameValid(this.state.username)) {
            this.setState({ invalidName: true })
        } else {
            try {
                this.setState({ requestInProgress: true })

                await axios.post('/api/auth/callback/credentials', {
                    username: this.state.username,
                    csrfToken: this.props.csrfToken,
                })

                await this.props.router.push(reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.MAIN }))
            } catch (error) {
                this.setState({
                    invalidName: true,
                    isSnackbarOpen: true,
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    reason: error.response.data.error,
                    requestInProgress: false,
                })
            }
        }
    }

    handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            username: event.target.value,
            invalidName: false,
        })
    }

    render() {
        const input = (
            <TextField
                className={styles.input}
                id="standard-search"
                label={YOUR_NAME}
                type="search"
                required
                disabled={this.state.requestInProgress}
                error={this.state.invalidName}
                onChange={this.handleNameChange}
            />
        )
        const snackMessage = (
            <span className={styles.snackbarMessage}
                id="client-snackbar"
            >
                <ErrorIcon className={styles.errorIcon} />
                {this.state.reason}
            </span>
        )
        const snackAction = [
            <IconButton key="close"
                aria-label="close"
                color="inherit"
                onClick={this.handleSnackbarClose}
            >
                <CloseIcon className={styles.closeIcon} />
            </IconButton>,
        ]

        return (
            <Layout isCentered={true}>
                <div className={styles.form}>
                    <div className={styles.texts}>
                        <Typography
                            className={styles.title}
                            variant="body2"
                            component="div"
                        >
                            {WELCOME_MESSAGE(input)}
                        </Typography>
                    </div>
                    <Button
                        className={styles.loginButton}
                        color="secondary"
                        disabled={this.state.requestInProgress}
                        onClick={this.handleLoginClick}
                    >
                        {START_GAME}
                    </Button>
                </div>
                <Snackbar
                    anchorOrigin={snackbarPosition}
                    key={this.state.reason}
                    open={this.state.isSnackbarOpen}
                    onClose={this.handleSnackbarClose}
                    autoHideDuration={6000}
                >
                    <SnackbarContent
                        className={styles.snackbarContent}
                        aria-describedby="client-snackbar"
                        message={snackMessage}
                        action={snackAction}
                    />
                </Snackbar>
            </Layout>
        )
    }
}
