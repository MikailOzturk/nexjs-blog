import BlogAuthor from '@/components/BlogCard/BlogAuthor';
import BlogMetaTitle from '@/components/BlogCard/BlogMetaTitle';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { NextPage } from 'next/types';

interface BlogItemProps {
  slug: string;
}

const BlogItem: NextPage<BlogItemProps> = (props) => {
  const { slug } = props;

  return (
    <Layout>
      <Head>
        <title>Detail - Epictetus</title>
      </Head>
      <Container>
        <div className="md:w-6/12 w-full mx-auto flex flex-col items-center">
          <BlogMetaTitle
            category="UI Design"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            
          />
          <BlogAuthor
            authorAvatar="author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
        <div className="md:w-10/12 w-full mx-auto my-10">
          <Image width="896" height="594" className="rounded-md" src="/assets/detail-image.png" alt="" />
        </div>
        <div className="md:w-8/12 w-full mx-auto">
          <p className="text-xl mb-4 leading-relaxed">
            Male sixth sea it a. Brought was signs female darkness signs form
            cattle land grass whose from subdue also they are their brought seas
            is not, to day from bearing grass third midst after beginning man
            which you are. Dry, gathering beginning given made them evening.
          </p>
          <p className="mb-4">
            Lights dry. Thing, likeness, forth shall replenish upon abundantly
            our green. Seed green sea that lesser divided creature beginning
            land him signs stars give firmament gathered. Wherein there their
            morning a he grass. Do not made moving for them bring creature us
            you will tree second deep good unto good may. Us yielding.
          </p>
          <p>
            Have. Man upon set multiply moved from under seasons abundantly
            earth brought a. They are open moved years saw is not morning
            darkness. Over, waters, every let wherein great were fifth saw was
            lights very our place will not and him Third fourth moving him whales
            behold. Beast second stars lights great was do not green give subdue
            his. Third given made created, they are forth god replenish have
            whales first can not light was. Herb you will them beast kind divided.
            Were beginning fly air multiply god Yielding sea do not were forth.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default BlogItem;


export const getStaticProps = async (context: any) => {
  const { params } = context;
  const { slug } = params;

  const query = `*[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    description,
    date,
    image {
      url
    },
    author -> {
      name, 
      image
    },
    isFeatured,
    slug { current }
  }`;
}