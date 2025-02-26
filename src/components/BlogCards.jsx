import React from "react";

const BlogCards = ({
  pblogimage,
  pblogtitle,
  pblogdescription,
  pbloglink,
  pblogdate,
}) => {
  return (
    <div className="cards pb-4 mt-3 mb-5 px-0">
      <a href={pbloglink}>
        <div className="card image-full w-auto md:w-96 ">
          <figure>
            <img src={pblogimage} alt="sydney" />
          </figure>
          <div className="card-body p-8">
            <h2 className="card-title mx-auto text-slate-200">{pblogtitle}</h2>
            <p className="text-center text-slate-200 drop-shadow-lg">
              {pblogdescription}
            </p>
            <div className="card-actions justify-end">
              <p className="text-primary flex justify-end">{pblogdate}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogCards;
