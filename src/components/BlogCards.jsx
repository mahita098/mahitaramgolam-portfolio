import React from "react";

const BlogCards = ({ pblogimage, pblogtitle, pblogdescription, pbloglink }) => {
  return (
    <div className="cards pb-4 mt-3 mb-5 px-0">
      <a href={pbloglink}>
        <div className="card bg-base-100 image-full w-auto md:w-96 shadow-xl">
          <figure>
            <img src={pblogimage} alt="sydney" />
          </figure>
          <div className="card-body p-8">
            <h2 className="card-title mx-auto">{pblogtitle}</h2>
            <p className="text-center">{pblogdescription}</p>
            <div className="card-actions justify-end">
              <p className="text-primary flex justify-end">16 Feb 2025</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogCards;
