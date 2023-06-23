import Link from "next/link";

import Image from "next/image";
import BlogInfo from "./BlogInfo";
import { FC } from "react";

interface BlogCardProps {
  category: string;
  title: string;
  date: string;
  shortDesc: string;
  authorAvatar: string;
  authorJob: string;
  authorName: string;
  slug: string;
  thumbnail: string;
}

const BlogCard:FC<BlogCardProps> = ( props ) => {
  const { category, 
    date, title, 
    slug, shortDesc, 
    thumbnail, authorAvatar, 
    authorName, authorJob 
  } = props;
  return (
    <article>
      <Link href={`/posts/${slug}`}>
        <Image
          width={200}
          height={200}
          src={`/assets/${thumbnail}`}
          className="w-full rounded-lg mb-4" 
          alt={"alt"}          
        />
      </Link>
      <BlogInfo 
        category={category} 
        title={title} 
        date={date} 
        shortDesc={shortDesc} 
        authorAvatar={authorAvatar} 
        authorJob={authorJob} 
        authorName={authorName} 
      />
    </article>
  );
}
export default BlogCard;