import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface NewsData {
  image_URL: string;
  title: string;
  detail: string;
}

const AsylumprocessDetails: React.FC = () => {
  const BASE_URL = "http://localhost:2500/api/";
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const { _id } = useParams<{ _id: string }>();

  console.log(_id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}asylumprocess/${_id}`);
        const data = await response.json();
        setNewsData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, [_id]);

  return (
    <div>
      <div className="container py-5">
        <div>
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <img
                className="w-full"
                src={BASE_URL + newsData?.image_URL}
                alt=""
              />
            </div>
          </div>
          <h2>{newsData?.title}</h2>
          <p>{newsData?.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default AsylumprocessDetails;
