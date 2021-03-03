import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import {
    DESCRIPTION,
    HEADER,
    INTRODUCTION,
} from '../components/pages/Lobby/translations'

export default function Home({ allPostsData }: {
    allPostsData: {
        date: string
        title: string
        id: string
    }[]
}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>{INTRODUCTION}</p>
                <p>{DESCRIPTION('https://nextjs.org/learn')}</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>{HEADER}</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({
                        id, date, title,
                    }) => (
                        <li className={utilStyles.listItem}
                            key={id}
                        >
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()

    return { props: { allPostsData } }
}
