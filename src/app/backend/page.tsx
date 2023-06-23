"use client"

import { useState } from "react";
import Head from "next/head";
import { NextPage } from "next";
import mockPosts from "../../utils/posts.json";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import BlogCard from "@/components/BlogCard/BlogCard";

import SectionHeader from "@/components/SectionHeader";

interface BlogPageProps {
    category: string;
    title: string;
    slug: string;

  }
  const Posts: NextPage<BlogPageProps> = (props) => {
  const [posts, setPosts] = useState(mockPosts);
  return (
    <Layout>
      <Head>
        <title>Posts - Epictetus</title>
      </Head>
      <Container>
        
        <SectionHeader>Back End</SectionHeader>
        {!posts.length ? (
          <div className="text-center py-16">
            <h2 className="text-6xl">No result 😥</h2>
          </div>
        ) : (
          <div className="flex -mx-4 mt-8 flex-wrap">
            {posts.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <BlogCard slug={post.authorName} {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}

export default Posts;