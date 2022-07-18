import { IArticle } from '../interfaces/article.model';
import ArticleItem from './ArticleItem';

export default function ArticleList({ articles }: any) {

    return (
        <div>
            {articles.map((article: IArticle) => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </div>
    )
}