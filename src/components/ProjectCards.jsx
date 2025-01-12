import { useState } from "react";

export default function ProjectCards(projectprop) {
  return (
    <div className="cards w-60 md:w-80 pb-4 shadow-lg shadow-gray-400 mt-3 mb-5 rounded">
      <a href={projectprop.projlink} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full h-40 object-cover pb-2 rounded-lg"
          src={projectprop.projimage}
        />
        <p className="mx-2">{projectprop.projtitle}</p>
        <p className="mx-2">{projectprop.projdescription}</p>
      </a>
    </div>
  );
}
