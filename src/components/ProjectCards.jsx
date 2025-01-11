import { useState } from "react";

export default function ProjectCards(projectprop) {
  return (
    <div className="cards w-80">
      <a href={projectprop.projlink} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full h-40 object-cover pb-2 rounded-lg"
          src={projectprop.projimage}
        />
        <p>{projectprop.projtitle}</p>
        <p>{projectprop.projdescription}</p>
      </a>
    </div>
  );
}
