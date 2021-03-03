import { FormattedMessage } from 'react-intl'
import React from 'react'

export const INTRODUCTION = (
    <FormattedMessage
        id="lobby.introduction"
        defaultMessage="[Your Self Introduction]"
    />
)

export const HEADER = (
    <FormattedMessage
        id="lobby.header"
        defaultMessage="Blog"
    />
)

export const DESCRIPTION = (link: string) => (
    <FormattedMessage
        id="lobby.description"
        defaultMessage="(This is a sample website - you’ll be building a site like this in <a>our Next.js tutorial</a>.)"
        values={{
            a: (chunks: string) => (
                <a href={link}>{chunks}</a>
            ),
        }}
    />
)
