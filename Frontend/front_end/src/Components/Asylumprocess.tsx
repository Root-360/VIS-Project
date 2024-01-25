import React, { useEffect, useState } from "react";

const Asylumprocess = () => {
  const BASE_URL = "http://localhost:2500/api/";
  const [newsData, setNewsData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:2500/api/asylumprocess");
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
      <section className="echo-feature-area py-5">
        <div className="echo-feature-area-content">
          <div className="container">
            <div className="echo-feature-full-content">
              <div className="row gx-6">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="echo-feature-area-site-title">
                    <h4 className="mb-5">Asylum Process</h4>
                    {newsData ? (
                      <div className="row gx-5">
                        {newsData.map((news: any) => (
                          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                            <div
                              className="echo-feature-area-post"
                              key={news.id}
                            >
                              <div className="echo-feature-area-post-img img-transition-scale">
                                <a href={`asylumprocessdetails/${news._id}`}>
                                  <img
                                    src={BASE_URL + news.image_URL}
                                    alt="Echo"
                                    className="img-hover"
                                  />
                                </a>
                              </div>
                              <div className="echo-feature-area-post-hins">
                                <h5 className="text-capitalize">
                                  <a
                                    href={`asylumprocessdetails/${news._id}`}
                                    className="title-hover"
                                  >
                                    {news.title}
                                  </a>
                                </h5>
                              </div>
                              <hr />
                            {news.detail}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Asylumprocess;
