import React, { FC } from 'react'
import { useRouter } from 'next/router'
import {
    createStyles,
    Grid,
    makeStyles,
    Paper,
    Theme,
} from '@material-ui/core'

import { reserveHeroesPath } from '../../../../helpers/routers'
import { Hero } from '../../../../data/types/heroes'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: (hero: Hero) => ({
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            height: 144,
            cursor: 'pointer',
            backgroundPosition: 'center',
            // backgroundImage: `url("/images/hero-icons/${hero.id}/card.png")`,
            backgroundImage: `url("${hero.img}")`,
        }),
    })
)

export interface Props {
    readonly data: Hero
}

export const HeroCard: FC<Props> = ({ data }) => {
    const classes = useStyles(data)
    const router = useRouter()
    const onClick = () =>
        router.push(reserveHeroesPath(data.id))

    return (
        <Grid item xs={1} key={`hero-${data.id}`}
            onClick={onClick}
        >
            <Paper className={classes.paper}>
                {data.localized_name}
            </Paper>
        </Grid>
    )
}
