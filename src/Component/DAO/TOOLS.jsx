import React from 'react'
import {DAOTools_DB} from '../../Data/DAOTools'

function TOOLS() {
    const datas=DAOTools_DB;
  return (
    <div>
        <div className="pt-2 grid dark:text-white xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 overflow-auto gap-3 scrollbar-hide"style={{height: "45rem"}}>
            {datas.data.map((el,i)=>(
             <div className="shadow-sm border border-1 hover:shadow-lg hover:border-white dark:border-gray-600 bg-white  hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800  dark:shadow-gray-500 flex flex-row  overflow-auto rounded-xl h-28 gap-2 p-3 m-2 mt-0" key={i+1}>
              <div className="px-2">
              <img src={el.img} className="bg-gray-100 dark:bg-white min-w-[82px] border border-gray-300 shadow-sm rounded-full h-[82px] ">
              </img>
              </div>
              <div className="w-full flex flex-col justify-center items-center ">
                <div className="font-bold justify-self-start">
                  {el.name}
                </div>
                <div className="flex flex-row gap-2 p-2 ">
                <a href={el.twitter} target="_blank" rel="noopener noreferrer"> <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" class="text-[23px]"><path d="M25.2688 9.53141C25.2846 9.76543 25.2846 9.99945 25.2846 10.2356C25.2846 17.432 19.9588 25.7316 10.2203 25.7316V25.7273C7.34353 25.7316 4.52651 24.884 2.10474 23.2857C2.52304 23.3375 2.94345 23.3634 3.3649 23.3645C5.74893 23.3666 8.06482 22.5438 9.94038 21.0286C7.67482 20.9844 5.68812 19.4648 4.99409 17.2465C5.78772 17.404 6.60546 17.3716 7.38441 17.1527C4.91441 16.6394 3.1374 14.407 3.1374 11.8145C3.1374 11.7907 3.1374 11.7681 3.1374 11.7454C3.87337 12.1671 4.6974 12.4011 5.5403 12.427C3.21393 10.8277 2.49683 7.64416 3.90167 5.15514C6.58974 8.55759 10.5558 10.626 14.8133 10.8449C14.3866 8.95337 14.9695 6.97122 16.345 5.64151C18.4774 3.57955 21.8312 3.68524 23.8357 5.87769C25.0214 5.6372 26.1579 5.18965 27.1979 4.55553C26.8026 5.81622 25.9755 6.8871 24.8705 7.56759C25.9199 7.44034 26.9452 7.15132 27.9108 6.71024C27.2 7.80592 26.3047 8.76034 25.2688 9.53141Z"></path></svg></a>
                <a href={el.github} target="_blank" rel="noopener noreferrer">
                  <svg width="1.3em" height="1.3em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" clip-rule="evenodd"></path></svg>
                </a>
                <div className="px-2 rounded-md p-1 font-semibold text-white text-sm bg-blue-400 ">
                  <a href={el.use}>USE</a>
                </div>
                </div>
              </div>
             </div>
            ))} 
          </div>
    </div>
  )
}

export default TOOLS