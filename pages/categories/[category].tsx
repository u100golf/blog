import Post from '../../types/post'
import Layout from '../../components/layout'
import Head from 'next/head'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import { getAllPosts } from '../../lib/api'
import { categories } from '../../util/constant/constant'
import Category from '../../components/category'

type Props = {
    categorizedPosts: Post[]
}

const CategoryPage = ({ categorizedPosts }: Props) => {
    return (
        <>
            <Layout>
                <Head>
                    <title>Next.js Blog Example with </title>
                </Head>
                <Container>
                    <Category />
                    {categorizedPosts.length > 0 && <MoreStories posts={categorizedPosts} />}
                </Container>
            </Layout>
        </>
    )
}

export default CategoryPage

type Params = {
    params: {
        category: string
    }
}

export async function getStaticProps({ params }: Params) {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'category',
    ])

    type Items = {
        [key: string]: string
      }

    let categorizedPosts: Items[] = [];
    allPosts.map((post) => {
        if (post.category == params.category) {
            categorizedPosts.push(post);
        }
    })
    return {
        props: { categorizedPosts },
    }
}

export async function getStaticPaths() {
    return {
        paths: categories.map((category) => {
            return {
                params: {
                    category: category.category,
                },
            }
        }),
        fallback: false,
    }
}
