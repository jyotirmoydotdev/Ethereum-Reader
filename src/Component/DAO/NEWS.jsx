import React,{ useState, useEffect } from 'react';

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdaotimes.com%2Flatest%2Frss%2F&api_key=p1w590gjm9h5v1ii0b7z4ft8ry64qjpgx3hf3ywn';
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticles(parsedData.items);
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove('lazy');
          observer.unobserve(lazyImage);
        }
      });
    }, options);

    const images = document.querySelectorAll('.lazy');
    images.forEach(img => {
      observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, [articles]);

  return (
    <div>
    <div className="grid dark:text-white xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 overflow-auto gap-1"style={{height: "45rem"}}>
        {articles.map((el, i) => (
          <a href={el.link} target='_blank' className="shadow-sm border border-1 dark:border-gray-600 bg-white  hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800  dark:shadow-gray-500   rounded-xl gap-2 p-3 m-2 mt-0 flex flex-col justify-around "key={i + 1}>
            <div className="">
              <img className="lazy w-full" data-src={el.enclosure.link} alt={el.title} />
            </div>
            <div className="flex flex-col">
              <div className="p-1 font-bold">
                {el.title}
              </div>
              <div className="p-1 gap-2 flex text-white">
                <div className="bg-blue-400 p-1 px-2 flex flex-row gap-1 rounded-md">
                {el.categories.map((cl,i)=>(
                  <div className="">
                    {cl}
                  </div>
                ))}
                </div>
                <div className="bg-blue-400 p-1 px-2 rounded-md">
                {el.author}
                </div>
              </div>
            </div>
          
          </a>
        ))}
        {loading && <div className='col-span-4'>
          <div className=" grid-cols-1 w-full sm:grid-cols-2 gap-3 p-1 " style={{height: "45rem"}}>
            <div className="overflow-auto grid justify-items-center grid-cols-1 h-full items-center gap-3">
              <span className="relative flex justify-center h-12 w-12">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-12 w-12 bg-sky-500"></span>
              </span>
            </div>
          </div>
          </div>
        }
      </div>
    </div>
  );
}

export default News;

