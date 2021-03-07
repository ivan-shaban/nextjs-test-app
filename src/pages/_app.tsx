import '../styles/global.css'
import App, { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'
import React from 'react'
import {
    CssBaseline,
    ThemeProvider,
} from '@material-ui/core'
import { Provider } from 'next-auth/client'
import Head from 'next/head'

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
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')

        if (jssStyles) {
            console.log('>> remove ssr css', jssStyles.innerHTML);
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>cyber manager app</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
            <Provider session={pageProps.session}>
                <IntlProvider
                    locale={locale}
                    defaultLocale={defaultLocale}
                    messages={messages}
                >
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </IntlProvider>
            </Provider>
        </React.Fragment>
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
