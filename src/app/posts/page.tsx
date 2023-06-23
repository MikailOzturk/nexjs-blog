"use client"

import { useState } from "react";
import Head from "next/head";
import mockPosts from "../../utils/posts.json";
import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard/BlogCard";
import SectionHeader from "@/components/SectionHeader";
import Container from "@/components/Container";


export default function Posts() {
  const [posts] = useState(mockPosts);
  return (
    <Layout>
      <Head>
        <title>Posts - Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
        {!posts.length ? (
          <div className="text-center py-16">
            <h2 className="text-6xl">No result 😥</h2>
            <p className="text-xl mt-4 md:w-6/12 w-full mx-auto">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className="flex -mx-4 mt-8 flex-wrap">
            {posts.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <BlogCard slug={post.category} {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}