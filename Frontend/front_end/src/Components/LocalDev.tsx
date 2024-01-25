import React from "react";
import { icons1, icons2 } from "./imgUrl";

const LocalDev = () => {
  return (
    <>
      <section className="echo-trending-area-1 py-5">
        <div className="container">
          <h6 className="mb-5">Local Developement</h6>
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <div className="row">
                <div className="col-sm-4 text-center mb-5">
                  <div className="local-developement">
                    <a href="/publicauthorities">
                      <img src="https://admin.integreat-app.de/media/regions/166/2019/01/clerk.png" width={100} alt="" />
                      <p>Public authorities</p>
                    </a>
                  </div>
                </div>
                <div className="col-sm-4 text-center mb-5">
                  <div className="local-developement">
                    <a href="/country">
                      <img src="https://admin.integreat-app.de/media/regions/166/2019/01/pin66.png" width={100} alt="" />
                      <p>Entering the country and residence status</p>
                    </a>
                  </div>
                </div>
                <div className="col-sm-4 text-center mb-5">
                  <div className="local-developement">
                    <a href="/asylumprocess">
                      <img src="https://admin.integreat-app.de/media/regions/166/2019/01/layers.png" width={100} alt="" />
                      <p>The asylum process - Legal Information</p>
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

export default LocalDev;
