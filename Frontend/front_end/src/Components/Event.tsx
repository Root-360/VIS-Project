import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Event = () => {
  const BASE_URL = "http://localhost:2500/api/";
  const [newsData, setNewsData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:2500/api/events");
        const data = await response.json();
        setNewsData(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="echo-trending-area py-5">
        <div className="echo-trending-content">
          <div className="container">
            <h6>Events</h6>
            <div className="echo-trending-full-content">
              {newsData ? (
                <div className="row gx-5">
                  {newsData.map((news: any) => (
                    <div className="col-xl-12 col-lg-12 col-md-12 mb-3 border-bottom pb-3">
                      <div className="echo-trending-left-site-post row">
                        <div className="echo-trending-left-site-post-img img-transition-scale col-sm-3">
                          <a href={`eventdetails/${news._id}`}>
                            <img
                              src={BASE_URL + news.image_URL}
                              alt="Echo"
                              className="img-hover"
                            />
                          </a>
                        </div>
                        <div className="echo-trending-right-site-post-title col-sm-9">
                          <h5>
                            <a
                              href="post-details.html"
                              className="text-capitalize title-hover"
                            >
                              {news.title}
                            </a>
                          </h5>
                          <p>{news.sort_desc}</p>
                          <div className="echo-trending-post-bottom-icons">
                            <a href="#" className="pe-none">
                              <i className="fa-light fa-clock" /> 06 minute read
                            </a>
                            <a href="#" className="pe-none">
                              <i className="fa-light fa-eye" /> 3.5k Views
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
