/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";


import BlogInfo from "./BlogInfo";
import Image from "next/image";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-4 lg:items-center items-start flex-wrap">
        <div className="lg:w-8/12 md:w-7/12 w-full px-4">
          <Link href="/detail">
            <Image
              width={200}
              height={200}
              src="/assets/featured-thumbnail.png"
              className="rounded-xl w-full mb-4 md:mb-0" 
              alt={"alt"}              
            />
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <BlogInfo
            category="ui design"
            date="July 2 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDesc="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            authorAvatar="author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"       
          />
        </div>
      </div>
    </article>
  );
}
