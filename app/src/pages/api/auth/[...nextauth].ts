import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers';
import {
    NextApiRequest,
    NextApiResponse,
} from 'next'

const options: InitOptions = {
    // https://next-auth.js.org/configuration/providers
    providers: [
        Providers.Credentials({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                },
            },
            // @ts-ignore
            authorize({ username }) {
                if (username) {
                    // Any user object returned here will be saved in the JSON Web Token
                    return {
                        id: 1,
                        name: username,
                        email: `${username}@example.com`,
                    };
                } else {
                    return null;
                }
            },
        }),
    ],
    // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
    // https://next-auth.js.org/configuration/databases
    //
    // Notes:
    // * You must to install an appropriate node_module for your database
    // * The Email provider requires a database (OAuth providers do not)
    database: process.env.DATABASE_URL,
    // The secret should be set to a reasonably long random string.
    // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
    // a separate secret is defined explicitly for encrypting the JWT.
    secret: process.env.SECRET,
    session: {
        // Use JSON Web Tokens for session instead of database sessions.
        // This option can be used with or without a database for users/accounts.
        // Note: `jwt` is automatically set to `true` if no database is specified.
        jwt: true,

        // Seconds - How long until an idle session expires and is no longer valid.
        // maxAge: 30 * 24 * 60 * 60, // 30 days

        // Seconds - Throttle how frequently to write to database to extend a session.
        // Use it to limit write operations. Set to 0 to always update the database.
        // Note: This option is ignored if using JSON Web Tokens
        // updateAge: 24 * 60 * 60, // 24 hours
    },
    // JSON Web tokens are only used for sessions if the `jwt: true` session
    // option is set - or by default if no database is specified.
    // https://next-auth.js.org/configuration/options#jwt
    // eslint-disable-next-line object-curly-newline
    jwt: {
        // A secret to use for key generation (you should set this explicitly)
        // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
        // Set to true to use encryption (default: false)
        // encryption: true,
        // You can define your own encode/decode functions for signing and encryption
        // if you want to override the default behaviour.
        // encode: async ({ secret, token, maxAge }) => {},
        // decode: async ({ secret, token, maxAge }) => {},
        // eslint-disable-next-line object-curly-newline
    },
    // You can define custom pages to override the built-in pages.
    // The routes shown here are the default URLs that will be used when a custom
    // pages is not specified for that route.
    // https://next-auth.js.org/configuration/pages
    // eslint-disable-next-line object-curly-newline
    pages: {
        signIn: '/login',  // Displays signin buttons
        // signIn: '/api/auth/signin',  // Displays signin buttons
        // signOut: '/api/auth/signout', // Displays form with sign out button
        // error: '/api/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/api/auth/verify-request', // Used for check email page
        // newUser: null // If set, new users will be directed here on first sign in
        // eslint-disable-next-line object-curly-newline
    },
    // Callbacks are asynchronous functions you can use to control what happens
    // when an action is performed.
    // https://next-auth.js.org/configuration/callbacks
    // eslint-disable-next-line object-curly-newline
    callbacks: {
        // async signIn(user, account, profile) { return true },
        // async redirect(url, baseUrl) { return baseUrl },
        // async session(session, user) { return session },
        // async jwt(token, user, account, profile, isNewUser) { return token }
        // eslint-disable-next-line object-curly-newline
    },
    // Events are useful for logging
    // https://next-auth.js.org/configuration/events
    events: {},
    // Enable debug messages in the console if you are having problems
    debug: false,
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
