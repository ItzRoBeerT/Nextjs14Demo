import Link from "next/link";

export default function NewsPage() {
    return (
        <div>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href={'/news/first'}>First News item</Link>
                </li>
                <li>
                    <Link href={'/news/second'}>Second News item</Link>
                </li>
                <li>
                    <Link href={'/news/third'}>Third News item</Link>
                </li>
            </ul>
        </div>
    );
}
