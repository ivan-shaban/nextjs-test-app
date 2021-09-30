import React from 'react'
import { FormattedMessage } from 'react-intl'

export const WELCOME_MESSAGE = (username: React.ReactNode) => (
    <FormattedMessage
        id="login.welcome"
        defaultMessage="Добро пожаловать, {username}!"
        values={{ username }}
    />
)

export const YOUR_NAME = (
    <FormattedMessage
        id="login.your_name"
        defaultMessage="ваше имя"
    />
)

export const START_GAME = (
    <FormattedMessage
        id="login.start_game"
        defaultMessage="Начать игру!"
    />
)
