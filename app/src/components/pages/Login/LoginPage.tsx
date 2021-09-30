import {
    createStyles,
    TextField,
    Typography,
    WithStyles,
    withStyles,
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
import { NextPageContext } from 'next'

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

const styles = createStyles({
    form: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    texts: {
        display: 'flex',
        alignItems: 'baseline',
    },
    loginButton: { marginTop: 20 },
    title: { marginRight: 5 },
    input: {
        width: 150,
        marginTop: -23,
    },
    errorIcon: {
        fontSize: 20,
        opacity: 0.9,
        marginRight: 10,
    },
    closeIcon: { fontSize: 20 },
    snackbarContent: { backgroundColor: '#d32f2f' },
    snackbarMessage: {
        display: 'flex',
        alignItems: 'center',
    },
})

export interface Props {
    readonly csrfToken: string | null
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

export class LoginView extends React.PureComponent<Props & WithRouterProps & WithStyles<typeof styles>, State> {
    static getInitialProps = async (context: NextPageContext): Promise<Props> => {
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
        const { classes } = this.props

        const input = (
            <TextField
                className={classes.input}
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
            <span className={classes.snackbarMessage}
                id="client-snackbar"
            >
                <ErrorIcon className={classes.errorIcon} />
                {this.state.reason}
            </span>
        )
        const snackAction = [
            <IconButton key="close"
                aria-label="close"
                color="inherit"
                onClick={this.handleSnackbarClose}
            >
                <CloseIcon className={classes.closeIcon} />
            </IconButton>,
        ]

        return (
            <Layout isCentered={true}>
                <div className={classes.form}>
                    <div className={classes.texts}>
                        <Typography
                            className={classes.title}
                            variant="body2"
                            component="div"
                        >
                            {WELCOME_MESSAGE(input)}
                        </Typography>
                    </div>
                    <Button
                        className={classes.loginButton}
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
                        className={classes.snackbarContent}
                        aria-describedby="client-snackbar"
                        message={snackMessage}
                        action={snackAction}
                    />
                </Snackbar>
            </Layout>
        )
    }
}

export const LoginPage = withStyles(styles)(LoginView)
