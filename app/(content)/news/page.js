// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
    //this only works on react server componentes, NOT CLIENT
    const news = getAllNews();

    return (
        <div>
            <h1>News Page</h1>
            <NewsList news={news} />
        </div>
    );
}
