import {
    GetStaticPaths,
    GetStaticProps,
} from 'next'

import { getAllHeroesByPrimaryAttr } from '../../../lib/heroes'
import {
    HeroDescriptionPage,
    Props,
} from '../../../components/pages/HeroDescription/HeroDescriptionPage'
import { reservePath } from '../../../helpers/routers'
import {
    Routes,
    SUB_SECTIONS,
} from '../../../constants/routes'

export default HeroDescriptionPage

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async (props) => {
    const heroes = await getAllHeroesByPrimaryAttr()
    const paths = heroes.reduce((result, hero) => {
        props.locales!.forEach((locale) => {
            result.push({
                params: { heroId: hero.id.toString() },
                locale,
            })
        })

        return result
    }, [] as Array<{ params: { heroId: string}; locale?: string }>)

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<Props, { readonly heroId: string }> = async ({ params }) => {
    const heroes = await getAllHeroesByPrimaryAttr()
    const heroId = parseInt(params!.heroId)
    const hero = heroes.find(({ id }) => heroId === id)

    if (!hero) {
        return {
            redirect: {
                // TODO: #7 redirect to error script with description what has happened
                destination: reservePath(Routes.LOBBY, { subSection: SUB_SECTIONS.MAIN }),
                permanent: false,
            },
        }
    }

    return { props: { hero: hero } }
}
