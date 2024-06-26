import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewDetailPage(props) {
    const { params } = props;
    const slug = params.slug;
    const item = DUMMY_NEWS.find((item) => item.slug === slug);

    if (!item) {
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${item.slug}/image`}>
                    <img src={`/images/news/${item.image}`} alt={item.title} />
                </Link>
                <h1>{item.title}</h1>
                <time dateTime={item.date}>{item.date}</time>
            </header>
            <p>{item.content}</p>
        </article>
    );
}
