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
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'

import {
    START_GAME,
    WELCOME_MESSAGE,
    YOUR_NAME,
} from '../components/pages/Login/translations'
import { Layout } from '../components/pages/Base/BaseView'
import styles from '../components/pages/Login/LoginView.module.css'
import { reservePath } from '../components/helpers/routers'
import { Routes } from '../components/constants/routes'

export interface State {
    readonly username: string;
    readonly invalidName: boolean;
    readonly reason?: string;
    readonly isSnackbarOpen: boolean;
}

const snackbarPosition: SnackbarOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
}

export class LoginView extends React.PureComponent<WithRouterProps, State> {
    state: State = {
        username: '',
        invalidName: false,
        isSnackbarOpen: false,
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
                await Promise.resolve()
                // await login(this.state.username)
            } catch (error) {
                this.setState({
                    invalidName: true,
                    isSnackbarOpen: true,
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    reason: error.response.data.error,
                })

                return
            }
            await this.props.router.push({ pathname: reservePath(Routes.LOBBY) })
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

export default withRouter(LoginView)
