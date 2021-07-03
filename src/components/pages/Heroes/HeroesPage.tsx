import Button from '@material-ui/core/Button'
import React, {
    FC,
    useMemo,
} from 'react'
import { useRouter } from 'next/router'
import {
    createStyles,
    Grid,
    makeStyles,
    Paper,
    Theme,
} from '@material-ui/core'

import {
    Routes,
    SUB_SECTIONS,
} from '../../../constants/routes'
import { reservePath } from '../../../helpers/routers'
import { Layout } from '../../Layout/Layout'
import { FIND_GAME } from '../Lobby/translations'
import { Hero } from '../../../data/types/heroes'
import { Attribute } from '../../../constants/heroes'
import { LobbyHeader } from '../../LobbyHeader/LobbyHeader'

import { ATTRIBUTE } from './translations'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        findGameButton: {
            position: 'fixed',
            bottom: theme.offsets.buttonBorderOffset,
            left: theme.offsets.buttonBorderOffset,
        },
        grid: {
            width: '70%',
            margin: '0 auto',
            padding: '150px 0',
        },
        section: {
            paddingTop: theme.spacing(2),
            paddingLeft: 6,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            height: 144,
            backgroundPosition: 'center',
            backgroundImage: 'url("/images/hero-icons/Crystal_Maiden_icon.png")',
        },
    })
)

export interface Props {
    readonly heroes: Hero[]
}

export const HeroesPage: FC<Props> = ({ heroes }) => {
    const classes = useStyles()
    const strengthHeroes = useMemo(() => heroes.filter(({ primary_attr }) => primary_attr === Attribute.STRENGTH), [])
    const agilityHeroes = useMemo(() => heroes.filter(({ primary_attr }) => primary_attr === Attribute.AGILITY), [])
    const intellectHeroes = useMemo(() => heroes.filter(({ primary_attr }) => primary_attr === Attribute.INTELLECT), [])
    const router = useRouter()
    const handleFindGameClick = () =>
        router.push(reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.WAITING }))

    return (
        <Layout isProtected={true}>
            <LobbyHeader currentPage={SUB_SECTIONS.HEROES} />
            <Button
                className={classes.findGameButton}
                color="secondary"
                variant="contained"
                size="large"
                onClick={handleFindGameClick}
            >
                {FIND_GAME}
            </Button>
            <div className={classes.grid}>
                <Grid container spacing={1}>
                    <Grid className={classes.section} item xs={12}>{ATTRIBUTE[Attribute.STRENGTH]}</Grid>
                    {strengthHeroes.map(({
                        id, localized_name, name,
                    }) => (
                        <Grid item xs={1} key={`hero-${id}`}>
                            <Paper className={classes.paper}>
                                {localized_name}
                            </Paper>
                        </Grid>
                    ))}
                    <Grid className={classes.section} item xs={12}>{ATTRIBUTE[Attribute.AGILITY]}</Grid>
                    {agilityHeroes.map(({
                        id, localized_name, name,
                    }) => (
                        <Grid item xs={1} key={`hero-${id}`}>
                            <Paper className={classes.paper}>
                                {localized_name}
                            </Paper>
                        </Grid>
                    ))}
                    <Grid className={classes.section} item xs={12}>{ATTRIBUTE[Attribute.INTELLECT]}</Grid>
                    {intellectHeroes.map(({
                        id, localized_name, name,
                    }) => (
                        <Grid item xs={1} key={`hero-${id}`}>
                            <Paper className={classes.paper}>
                                {localized_name}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Layout>
    )
}
