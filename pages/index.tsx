import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }: any) {

  return (
    <div>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="content" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}
