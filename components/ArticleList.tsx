import ArticleItem from './ArticleItem';

export default function ArticleList({ articles }: any) {

    return (
        <div>
            {articles.map((article: any) => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </div>
    )
}