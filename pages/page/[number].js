import Link from "next/link";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import Container from "../../components/container";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getPaginatedPosts } from "../../lib/api";
import { SITE_NAME } from "../../lib/constants";
import PostList from "../../components/post-list";
import Pagination from "../../components/pagination";

export async function getStaticProps({ params }) {
  const { items, nextPage, prevPage, isLastPage } = getPaginatedPosts(
    [
      "title",
      "date",
      "slug",
      "author",
      "location",
      "coverImage",
      "excerpt",
      "format",
    ],
    Number(params.number)
  );

  return {
    props: {
      posts: items,
      currentPage: params.number,
      nextPage,
      prevPage,
      isLastPage,
    },
  };
}

export async function getStaticPaths() {
  const paginatedPosts = getPaginatedPosts();
  const paths = Array.from(
    { length: paginatedPosts.totalPages - 1 },
    (_, index) => {
      return {
        params: {
          number: `${index + 1}`,
        },
      };
    }
  ).slice(1);

  return {
    fallback: false,
    paths,
  };
}

export default function PaginatedPosts({
  posts,
  prevPage,
  nextPage,
  isLastPage,
}) {
  return (
    <>
      <Layout>
        <Head>
          <title>{SITE_NAME} | Dave &amp; Carman’s World Tour</title>
        </Head>
        <Container>
          <Intro />
        </Container>
        <section>
          <Container>
            <PostList posts={posts} />
          </Container>
          <Pagination
            nextPage={nextPage}
            prevPage={prevPage}
            isLastPage={isLastPage}
          />
        </section>
      </Layout>
    </>
  );
}
