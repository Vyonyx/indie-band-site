import React from "react";
import { ptSansNarrow } from "./fonts";

async function getNews() {
  return new Promise<NewsItemProps[]>((resolve, _reject) => {
    resolve([
      { title: "Title 1", date: new Date() },
      { title: "Title 2", date: new Date() },
      { title: "Title 3", date: new Date() },
    ]);
  });
}

async function News() {
  const news = await getNews();

  return (
    <section className="container mx-auto my-10 lg:my-14">
      <h3
        className={`${ptSansNarrow.className} lg:text-left text-3xl text-center`}
      >
        News
      </h3>
      <ul className="mt-5 flex flex-col">
        {news.map(({ title, date }, id) => (
          <NewsItem key={id} title={title} date={date} />
        ))}
      </ul>
    </section>
  );
}

// ------Sub-Components------ //
type NewsItemProps = {
  title: string;
  date: Date;
};

function NewsItem({ title, date }: NewsItemProps) {
  return (
    <li className="align-center flex justify-between bg-neutral-200 p-4">
      <h4 className="text-lg font-bold">{title}</h4>
      <span>
        {`${date.toLocaleString("default", {
          month: "short",
        })}. ${date.toLocaleString("default", {
          day: "2-digit",
        })}`}
      </span>
    </li>
  );
}

export default News;
