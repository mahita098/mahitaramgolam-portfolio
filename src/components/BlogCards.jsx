import { useState } from "react";

export default function BlogCards(blogprop) {
  console.log(blogprop);
  return (
    <div>
      <div className="cards w-60 md:w-80 pb-4 shadow-lg shadow-gray-400 mt-3 mb-5 rounded">
        <a href={blogprop.link} target="_blank" rel="noopener noreferrer">
          <img
            className="w-full h-40 object-cover pb-2 rounded-lg"
            src={blogprop.image}
          />
          <p>{blogprop.title}</p>
          <p>{blogprop.description}</p>
        </a>
      </div>
    </div>
  );
}
