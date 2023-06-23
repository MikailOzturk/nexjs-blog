import React, { FC } from 'react'
import BlogMetaTitle from './BlogMetaTitle';
import BlogAuthor from './BlogAuthor';

interface BlogInfoProps {
    category: string;
    title: string;
    date: string;
    shortDesc: string;
    authorAvatar: string;
    authorJob: string;
    authorName: string;
  
  }

const BlogInfo: FC<BlogInfoProps> = (props)=> {
    const { category, date, title, shortDesc, 
      authorAvatar, authorName, authorJob 
    } = props;
  return (
    <>
      <BlogMetaTitle category={category} date={date} title={title} />
      <p className="text-white/60 mt-4 w-10/12">{shortDesc.slice(0, 120)}...</p>
      <BlogAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}  
      />
    </>
  )
}

export default BlogInfo

