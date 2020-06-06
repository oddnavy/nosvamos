import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Link from 'next/link'
import Head from 'next/head'
import { Cloudinary } from 'cloudinary-core'

import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import { SITE_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import PostGallery from '../../components/post-gallery'

var cloudinary = new Cloudinary({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
})

export default function Post({ post, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Container>
            <article className="mb-24">
              <Head>
                <title>
                  {post.title} | {SITE_NAME}
                </title>
                {post.ogImage && (
                  <meta
                    property="og:image"
                    content={cloudinary.url(
                      `${process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER}/${post.ogImage}`,
                      {
                        width: 1200,
                        height: 630,
                        crop: 'fill',
                        gravity: 'faces',
                        quality: 'auto',
                      }
                    )}
                    key="og:image"
                  />
                )}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                location={post.location?.title}
              />
              <PostBody content={post.content} />
              {post.images.length > 1 && <PostGallery images={post.images} />}
            </article>
          </Container>
          <div className="py-8 border-t border-accent-2 text-center text-xl">
            <Link href="/">
              <a className="group transition-all duration-100 hover:text-orange-600">
                Read another
                <span className="inline-block ml-1 transition-transform duration-100 transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Link>
          </div>
        </>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'location',
    'coverImage',
    'images',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
