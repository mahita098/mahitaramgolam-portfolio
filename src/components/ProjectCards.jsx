import { useState } from "react";

export default function ProjectCards(projectprop) {
  return (
    <div className="cards w-60 md:w-80 pb-4 shadow-[0px_1px_7px_3px_#718096] mt-3 mb-5 rounded">
      <a href={projectprop.projlink} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full h-[200px] object-cover rounded-lg object-fit"
          src={projectprop.projimage}
        />
        <p className="m-2">{projectprop.projtitle}</p>
        <p className="mx-2">{projectprop.projdescription}</p>
      </a>
    </div>
  );
}
