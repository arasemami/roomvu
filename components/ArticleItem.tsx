import Link from 'next/link';

export default function ArticleItem({ article }: any) {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <Link href="/article/[id]" as={`/article/${article.id}`}>
                <h3>{article.title.toUpperCase()}</h3>
            </Link>
            <span className='date'>Date: {currentYear} / {article.id}</span>
            <p>{article.body}</p>
            <p>{article.id}</p>
        </div>
    )
}