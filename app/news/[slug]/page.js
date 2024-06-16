import { DUMMY_NEWS } from "@/dummy-news";

export default function NewDetailPage(props) {
    const { params } = props;
    const slug = params.slug;
    const item = DUMMY_NEWS.find((item) => item.slug === slug);

    return (
        <article className="news-article">
            <header>
                <img src={`/images/news/${item.image}`} alt={item.title} />
                <h1>{item.title}</h1>
                <time dateTime={item.date}>{item.date}</time>
            </header>
            <p>{item.content}</p>
        </article>
    );
}
