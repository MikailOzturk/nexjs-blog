"use client"

import { useState } from "react";
import Head from "next/head";
import mockPosts from "../../utils/posts.json";
import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard/BlogCard";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

export default function FrontendPosts() {
  const [posts] = useState(mockPosts);
  return (
    <Layout>
      <Head>
        <title>Posts - Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>Front End</SectionHeader>
        {!posts.length ? (
          <div className="text-center py-16">
            <h2 className="text-6xl">No result 😥</h2>
          </div>
        ) : (
          <div className="flex -mx-4 mt-8 flex-wrap">
            {posts.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <BlogCard slug={""} {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}