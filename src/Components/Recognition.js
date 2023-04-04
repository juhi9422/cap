import React from "react";

const Recognition = () => {
  return (
    <>
      <div class="container">
        <div class="row boxes-row">
          <div class="col-md-6 col-sm-6 col-xs-12 main_rec ">
            <div class="table-col rec_table">
              <div class="td ">
                <p>
                  <img
                    class="content-box-img aligncenter img_rec"
                    src="https://x-port.capgemini.com/wp-content/uploads/2023/03/Nelsonhall3.png"
                  />
                </p>
                <p className="p_rec">
                  Nelson Hall Financial Services Cloud, SaaS, &amp; BPaaS 2023
                  &#8211; Leader
                </p>
                <div className="img_div">
                  <a
                    class="button-icon"
                    href="https://research.nelson-hall.com/sourcing-expertise/neat-reports/?avpage-views=neat&amp;avpage-views=article&amp;id=81955&amp;fv=1"
                  >
                    Read More &#8594;
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-sm-6 col-xs-12 main_rec ">
            <div class="table-col rec_table">
              <div class="td ">
                <p>
                  <img
                    class="content-box-img aligncenter img_rec"
                    src="https://x-port.capgemini.com/wp-content/uploads/2023/03/public-cloud2.png"
                  />
                </p>
                <p className="p_rec">
                  Gartner Magic Quadrant for Public Cloud IT &#8211; Leader in
                  Transformation Services
                </p>
                <div className="img_div">
                  <a
                    class="button-icon"
                    href="https://www.capgemini.com/news/analyst-recognition/capgemini-named-a-leader-in-2022-gartner-magic-quadrant-for-public-cloud-it-transformation-services-worldwide/"
                  >
                    Read More &#8594;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recognition;
