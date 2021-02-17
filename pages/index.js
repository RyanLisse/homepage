import Head from "next/head";
import { groq } from "next-sanity";
import { NextSeo } from "next-seo";

import Intro from "components/Intro";
import PostList from "components/BlogList";
import WorkList from "components/WorkList";

import { getClient } from "lib/sanity";
import Layout from "components/Layout";

export async function getStaticProps({ preview }) {
  const client = getClient(preview);
  const posts = await client.fetch(
    groq`*[_type == "post" && category == "blog"][0...3] { 
      _id, 
      publishedAt, 
      slug, 
      title, 
      summary 
    } | order(publishedAt desc)`
  );
  const projects = await client.fetch(
    groq`*[_type == "post" && category == "work"][0..0]`
  );
  return {
    props: {
      posts,
      projects,
    },
    revalidate: 1,
  };
}

export default function Home({ posts, projects }) {
  return (
    <Layout>
      <div className="space-y-16">
        <NextSeo
          openGraph={{
            type: "website",
            description:
              "Music Marketing Coach and Consultant turned front-end developer. Aiming to build fast, simple and accessible experiences for everyone to use and enjoy.",
            locale: "en_GB",
            url: "https://www.ryanlisse.com",
            site_name: "Ryan Lisse",
            images: [
              {
                url: "https://ryanlisse.com/api/og",
                width: 1200,
                height: 628,
                alt: "Ryan Lisse",
              },
            ],
          }}
        />

        <Intro />
        <div className="space-y-8 divide-gray-300 dark:divide-gray-400 md:divide-x md:grid md:grid-cols-2 md:space-y-0">
          <PostList posts={posts} />
          <WorkList projects={projects} />
        </div>
      </div>
    </Layout>
  );
}
