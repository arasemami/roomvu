
const article = ({ article }: any) => {
    return (
        <div>
            <h1>{article.title.toUpperCase()}</h1>
            <p>{article.body}</p>
        </div>
    )
}

export const getServerSideProps = async (context: any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export default article;

