import React from "react";
import News from "./News";
import Event from "./Event";
import LocalDev from "./LocalDev";
import { icons1, icons2, icons7, icons8 } from "./imgUrl";

const Home = () => {
  return (
    <>
      <section className="echo-trending-area-1 py-5">
        <div className="container">
          
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <div className="row">
                <div className="col-sm-3 text-center mb-5">
                  <div className="local-developement">
                    <a href="/">
                      <img src={icons1} width={100} alt="" />
                      <p>News</p>
                    </a>
                  </div>
                </div>
                <div className="col-sm-3 text-center mb-5">
                  <div className="local-developement">
                    <a href="/offers">
                      <img src={icons2} width={100} alt="" />
                      <p>Offers</p>
                    </a>
                  </div>
                </div>
                <div className="col-sm-3 text-center mb-5">
                  <div className="local-developement">
                    <a href="/event">
                      <img src={icons8} width={100} alt="" />
                      <p>Event</p>
                    </a>
                  </div>
                </div>
                <div className="col-sm-3 text-center mb-5">
                  <div className="local-developement">
                    <a href="/localdev">
                      <img src={icons7} width={100} alt="" />
                      <p>Info Residence</p>
                    </a>
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

export default Home;
