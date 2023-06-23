import Link from 'next/link';
import React, { FC } from 'react'

interface MetaTitleProps {
    category: string;
    title: string;
    date: string;
  }
const BlogMetaTitle: FC<MetaTitleProps> = (props)=> {
    const { category, date, title} = props;
  return (
    <>
      <div className="flex items-center text-white/60 space-x-3">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className={`text-2xl mt-4 `}>
        <Link href="/detail">
          {title}
        </Link>
      </h2>
    </>
  )
}

export default BlogMetaTitle


