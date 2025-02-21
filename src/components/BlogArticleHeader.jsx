import React from "react";

const BlogArticleHeader = ({
  title,
  subtitle,
  moredescription,
  date,
  readtime,
}) => {
  return (
    <div className="flex justify-between">
      <div className="text-left">
        <h1 className="text-3xl font-bold py-3">{title}</h1>
        <div className="text-lg pb-4 italic">
          <h2>{subtitle}</h2>
          <p> {moredescription}</p>
        </div>
      </div>
      <section class="flex items-end justify-start gap-4 ">
        <section class="">
          <h4 class=" md:text-xl font-semibold text-gray-600 dark:text-gray-300 text-left">
            <a className="text-lg" href="">
              Mahita Ramgolam{" "}
            </a>
          </h4>
          <div class="text-gray-500 flex">
            <p className="text-md">{date}</p>
            <span>
              {" "}
              <span class="px-2">•</span> {readtime}{" "}
            </span>
          </div>
        </section>
        <ul>
          <li>
            <a href="" class="w-14 h-14 rounded-full overflow-hidden block">
              <img src="../images/yellowpp.jpg" alt="" />
            </a>
          </li>
        </ul>{" "}
      </section>
    </div>
  );
};

export default BlogArticleHeader;
