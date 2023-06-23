"use client"

import mockPosts from "@/utils/posts.json";
import { useState } from 'react'
import Head from 'next/head'
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import FeaturedBlog from "@/components/BlogCard/FeaturedBlog";
import BlogCard from "@/components/BlogCard/BlogCard";


export default function Home() {
  const [posts] = useState(mockPosts);
  return (
    <Layout>
      <Head>
        <title>Home - Epictetus</title>
      </Head>
      <Container>
        <FeaturedBlog />
        <div className="flex -mx-4 mt-8 flex-wrap">
          {posts.map((post) => (
            <div key={post.id}  className="md:w-4/12 w-full px-4 py-6">
              <BlogCard slug={post.category}  {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout> 
  )
}
