import React, { FC } from 'react'
import { useRouter } from 'next/router'
import {
    Box,
    createStyles,
    makeStyles,
    Theme,
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab';

import { SUB_SECTIONS } from '../../../constants/routes'
import { Layout } from '../../Layout/Layout'
import { Hero } from '../../../data/types/heroes'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        base: {
            width: '70%',
            padding: '80px 0',
        },
        description: { display: 'flex' },
        storyLine: { marginBottom: theme.spacing(1) },
        bigBlock: { marginTop: theme.spacing(3) },
        icon: { marginRight: theme.spacing(3) },

        paper: (hero: Hero) => ({
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            height: 144,
            cursor: 'pointer',
            backgroundPosition: 'center',
            backgroundImage: `url("${hero.img}")`,
        }),
    })
)

export interface Props {
    readonly hero: Hero
}

export const HeroDescriptionPage: FC<Props> = ({ hero }) => {
    const classes = useStyles(hero!)
    const router = useRouter()

    return (
        <Layout isProtected={true} currentPage={SUB_SECTIONS.HEROES}>
            <div className={classes.base}>
                <div className={classes.description}>
                    <Skeleton
                        className={classes.icon}
                        animation={false}
                        variant="rect"
                        width={256}
                        height={144}
                    />
                    <Box width={'calc(100% - 256px - 30px)'}>
                        <Skeleton className={classes.storyLine} animation={false} variant="rect" />
                        <Skeleton className={classes.storyLine} animation={false} variant="rect" />
                        <Skeleton className={classes.storyLine} animation={false} variant="rect"
                            width={'45%'}
                        />
                    </Box>

                </div>
                <Skeleton className={classes.bigBlock} animation={false} variant="rect"
                    height={180}
                />
                <Skeleton className={classes.bigBlock} animation={false} variant="rect"
                    height={220}
                />
                <Skeleton className={classes.bigBlock} animation={false} variant="rect"
                    height={340}
                />
                {/*{HERO_DESCRIPTION_TITLE}*/}
                {/*{hero.localized_name}*/}
                {/*<Paper className={classes.paper}>*/}
                {/*</Paper>*/}
            </div>
        </Layout>
    )
}
