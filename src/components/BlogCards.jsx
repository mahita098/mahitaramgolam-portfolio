import { useState } from "react";

export default function BlogCards(blogprop) {
  console.log(blogprop);
  return (
    <div className="cards w-80">
      <a href="#">
        <img className="w-full h-40 object-cover" src={blogprop.image} />
        <p>{blogprop.title}</p>
        <p>{blogprop.description}</p>
      </a>
    </div>
  );
}
