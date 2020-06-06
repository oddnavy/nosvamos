import Head from "next/head";

import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getPaginatedPosts } from "../lib/api";
import { SITE_NAME } from "../lib/constants";
import PostList from "../components/post-list";
import Pagination from "../components/pagination";

export default function Index({ posts, nextPage, prevPage }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{SITE_NAME} | Dave &amp; Carman’s World Tour</title>
        </Head>
        <Container>
          <Intro />
          <section>
            <PostList posts={posts} />
          </section>
        </Container>
        <Pagination nextPage={nextPage} prevPage={prevPage} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const { items, nextPage, prevPage } = getPaginatedPosts([
    "title",
    "date",
    "slug",
    "author",
    "location",
    "coverImage",
    "excerpt",
    "format",
  ]);

  return {
    props: { posts: items, nextPage, prevPage },
  };
}
