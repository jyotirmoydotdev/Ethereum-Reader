import React from 'react'
import {DAO_DB} from '../../Data/DAO'

function DAOs() {
    const datas=DAO_DB;
  return (
    <div>
        <div className="scrollbar-hide pt-2 grid dark:text-white xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 overflow-auto gap-3"style={{height: "45rem"}}>
            {datas.data.map((el,i)=>(
             <div className="shadow-sm border border-1 hover:shadow-lg hover:border-white dark:border-gray-600 bg-white  hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800  dark:shadow-gray-500 flex flex-row  overflow-auto rounded-xl h-28 gap-2 p-3 m-2 mt-0" key={i+1}>
              <div className="px-2">
              <img src={el.img} className="bg-gray-300 dark:bg-white min-w-[82px] border border-gray-300 shadow-sm rounded-full h-[82px] ">
              </img>
              </div>
              <div className="w-full flex flex-col justify-center items-center ">
                <div className="font-bold justify-self-start">
                  {el.name}
                </div>
                <div className="flex flex-row gap-2 p-2 ">
                <a href={el.twitter} target="_blank" rel="noopener noreferrer"> <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" class="text-[23px]"><path d="M25.2688 9.53141C25.2846 9.76543 25.2846 9.99945 25.2846 10.2356C25.2846 17.432 19.9588 25.7316 10.2203 25.7316V25.7273C7.34353 25.7316 4.52651 24.884 2.10474 23.2857C2.52304 23.3375 2.94345 23.3634 3.3649 23.3645C5.74893 23.3666 8.06482 22.5438 9.94038 21.0286C7.67482 20.9844 5.68812 19.4648 4.99409 17.2465C5.78772 17.404 6.60546 17.3716 7.38441 17.1527C4.91441 16.6394 3.1374 14.407 3.1374 11.8145C3.1374 11.7907 3.1374 11.7681 3.1374 11.7454C3.87337 12.1671 4.6974 12.4011 5.5403 12.427C3.21393 10.8277 2.49683 7.64416 3.90167 5.15514C6.58974 8.55759 10.5558 10.626 14.8133 10.8449C14.3866 8.95337 14.9695 6.97122 16.345 5.64151C18.4774 3.57955 21.8312 3.68524 23.8357 5.87769C25.0214 5.6372 26.1579 5.18965 27.1979 4.55553C26.8026 5.81622 25.9755 6.8871 24.8705 7.56759C25.9199 7.44034 26.9452 7.15132 27.9108 6.71024C27.2 7.80592 26.3047 8.76034 25.2688 9.53141Z"></path></svg></a>
                <a href={el.website} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="1em" height="1em" class="text-[23px]"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"></path></svg></a>
                <div className="px-2 p-1 rounded-md font-semibold text-white text-sm bg-blue-400 ">
                  <a href={el.join}>JOIN</a>
                </div>
                </div>
              </div>
             </div>
            ))} 
          </div>
    </div>
  )
}

export default DAOs