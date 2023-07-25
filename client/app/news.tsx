import React from "react";
import { ptSansNarrow } from "./fonts";

type Props = {};

function News({}: Props) {
  return (
    <section className="container mx-auto my-10 lg:my-14">
      <h3
        className={`${ptSansNarrow.className} lg:text-left text-3xl text-center`}
      >
        News
      </h3>
      <ul className="mt-5 flex flex-col">
        <li>News Item 1</li>
        <li>News Item 1</li>
        <li>News Item 1</li>
      </ul>
    </section>
  );
}

export default News;
