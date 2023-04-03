import React from 'react'

function footer() {
  return (
    <div>
      <div className="grid grid-col-1 w-full text-sm dark:bg-gray-700 bg-gray-100 dark:text-white font-thin sm:text-base bottom-0 shadow-sm ">
        <div className="flex flex-col p-2 py-5 overflow-auto sm:p-30 justify-center">
          <div className="flex justify-center flex-row gap-5  p-1 flex-wrap sm:p-2 uppercase">
            <div className="">
              <a href="http://jyotirmoy.dev/about-me" target="_blank" rel="noopener noreferrer">about</a>
            </div>
            <div className="">
              <a href="https://github.com/jyotirmoydotdev/Ethereum-Reader" target="_blank" rel="noopener noreferrer">Source-Code</a>
            </div>
            <div className="">
              <a href="http://jyotirmoy.dev" target="_blank" rel="noopener noreferrer">Blog</a>
            </div>
            <div className="">
              <a href="https://jyotirmoy.dev/series/project" target="_blank" rel="noopener noreferrer">Projects</a>
            </div>
          </div>
          <div className="flex justify-center flex-row gap-4 p-2 uppercase">
            <div className="">
              <a href="http://twitter.com/jyotirmoydotdev" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
            <div className="">
              <a href="http://github.com/jyotirmoydotdev" target="_blank" rel="noopener noreferrer">github</a>
            </div>
            <div className="">
              <a href="http://linkedin.com/in/jyotirmoydotdev" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
            <div className="">
              <a href="mailto:jyotirmoydotdev@gmail.com" >Gmail</a>
            </div>
          </div>
          <div className="flex justify-center flex-row p-1">Made with 💙 by Jyotirmoy Barman</div>
        </div>
      </div>
    </div>
  )
}

export default footer