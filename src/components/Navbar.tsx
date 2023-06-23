"use client"

import classNames from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react'
import Container from './Container';

   
const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);
    const dropDownList = [
      { text: "INTERNET", href: "/posts" },
      { text: "INSPIRATIONS", href: "/posts" },
      { text: "9 TO 5", href: "/posts" },
    ];
    const [offcanvas, setOffcanvas] = useState(false);
    const [search, setSearch] = useState(false);
    
  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          <div className="w-8/12 lg:hidden">
            <button onClick={() => setOffcanvas(!offcanvas)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M3 12H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="lg:w-3/12 w-8/12">
            <Link href="/" className="lg:justify-start justify-center flex items-center text-lg">
                <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl text-lg">
                  E
                </div>
                Epictetus
            </Link>
          </div>
          <div className="w-6/12 lg:hidden text-right">
            <button onClick={() => setSearch(!search)}>
              <svg
                className="inline-block"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div
            className={classNames(
              "lg:w-7/12 w-full fixed lg:bg-none lg:static lg:h-auto lg:p-0 bg-gradient-to-b to-gray-900 top-0 h-full p-10 transition-all",
              offcanvas ? "left-0" : "-left-full"
            )}
          >
            <button
              className="absolute top-10 right-10 lg:hidden"
              onClick={() => setOffcanvas(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <ul className="flex lg:space-x-12 lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
              <li>
                <Link href="/posts" className="text-sm hover:underline">
                  UI Design
                </Link>
              </li>
              <li>
                <Link href="/frontend" className="text-sm hover:underline">
                  Front-end
                </Link>
              </li>
              <li>
                <Link href="/backend" className="text-sm hover:underline">
                  Back-end
                </Link>
              </li>
              <li className="relative">
                <a
                  className="text-sm hover:underline cursor-pointer flex items-center"
                  onClick={() => setDropDown(!dropDown)}
                >
                  Lainnya
                  <svg
                    className="ml-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {dropDown && (
                  <ul className="mt-4 absolute w-[200px] bg-gray-800 rounded shadow-2xl">
                    {dropDownList.map(({ text, href }) => (
                      <li
                        key={text}
                        className="border-b border-white/5 last:border-0"
                      >
                        <Link href={href} className="flex px-6 py-3 hover:bg-gray-600/60">
                            {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div
            className={classNames(
              "lg:w-3/12 absolute lg:static w-full left-0 px-10 lg:px-0 transition-all",
              search ? "top-10" : "-top-40"
            )}
          >
            <button
              className="absolute top-3 right-12 lg:hidden"
              onClick={() => setSearch(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search"
              className="lg:rounded-full h-10 w-56 rounded-lg bg-gray-800 px-6 py-3 pl-12 bg-search"
            />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar