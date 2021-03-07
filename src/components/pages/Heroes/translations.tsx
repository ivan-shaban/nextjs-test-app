import { FormattedMessage } from 'react-intl'
import React from 'react'

import { Attribute } from '../../../constants/heroes'

export const HEROES_TITLE = (
    <FormattedMessage
        id="heroes.title"
        defaultMessage="Герои"
    />
)

export const ATTRIBUTE = {
    [Attribute.STRENGTH]: (
        <FormattedMessage
            id="attributes.strength"
            defaultMessage="Сила"
        />
    ),
    [Attribute.AGILITY]: (
        <FormattedMessage
            id="attributes.agility"
            defaultMessage="Ловкость"
        />
    ),
    [Attribute.INTELLECT]: (
        <FormattedMessage
            id="attributes.intellect"
            defaultMessage="Аниме"
        />
    ),
}
