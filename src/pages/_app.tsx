import '../styles/global.css'
import App, { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'
import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { Provider } from 'next-auth/client'

import { getLocaleMessages } from '../lib/intl'
import { theme } from '../components/theme'

export interface AppExtendedProps {
    readonly messages: any
    readonly locale: string
    readonly defaultLocale: string
}

export default function MyApp({
    Component, pageProps, messages, locale, defaultLocale,
}: AppProps & AppExtendedProps) {
    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        <Provider session={pageProps.session}>
            <IntlProvider
                locale={locale}
                defaultLocale={defaultLocale}
                messages={messages}
            >
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </IntlProvider>
        </Provider>
    )
}

const getInitialProps: typeof App.getInitialProps = async (appContext) => {
    const [{ default: messages }, props] = await Promise.all([
        getLocaleMessages(appContext.router.locale),
        App.getInitialProps(appContext),
    ])

    return {
        ...props,
        locale: appContext.router.locale,
        defaultLocale: appContext.router.defaultLocale,
        messages,
    }
}

MyApp.getInitialProps = getInitialProps
