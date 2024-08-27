import { useState } from "react";

export default function Header() {
  return (
    <div className="navbar bg-base-100 mx-auto max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Blogs</a>

              <ul className="p-2">
                <li>
                  <a>Learning</a>
                </li>
                <li>
                  <a>Life</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Event</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Mahita Ramgolam</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Projects</a>
          </li>
          <li>
            <details>
              <summary>
                Blogs{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </summary>
              <ul className="p-2">
                <li>
                  <a>Learning</a>
                </li>
                <li>
                  <a>Life</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Events</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Resume</a>
      </div>
    </div>
  );
}
