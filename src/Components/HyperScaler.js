import React from "react";
import aws from "../Images/AWS.webp";
import google from "../Images/GCP.webp";
import redhat from "../Images/ibm_redhat.webp";
import micro from "../Images/Microsoft-Azure.webp";


const HyperScaler = () => {
  return (
    <>
      <div className="container">
        <div className="row boxes-row">
          <div className="col-lg-3 col-md-6 col-sm-12 hyper_sec">
            <div className="table-col hyper_table">
              <div className="td">
                <p>
                  <img
                    className="content-box-img aligncenter img_hyper"
                    src={aws}
                  />
                </p>
                <div className="main_hyper">
                  <div className="hyper_link">
                    <a
                      className="cg-a link_hyper"
                      href="https://x-port.capgemini.com/fs-alliances-amazon-web-services/"
                      target="_blank"
                      rel="noopener"
                    >
                      AWS Alliance Page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 hyper_sec">
            <div className="table-col hyper_table">
              <div className="td">
                <p>
                  <img
                    className="content-box-img aligncenter img_hyper"
                    src={micro}
                  />
                </p>
                <div className="main_hyper">
                  <div className="hyper_link">
                    <a
                      className="cg-a link_hyper"
                      href="https://x-port.capgemini.com/fs-alliances-microsoft/"
                      target="_blank"
                      rel="noopener"
                    >
                      MS/Azure Alliance Page{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 hyper_sec">
            <div className="table-col hyper_table">
              <div className="td">
                <p>
                  <img
                    className="content-box-img aligncenter img_hyper"
                    src={google}
                  />
                </p>
                <div className="main_hyper">
                  <div className="hyper_link">
                    <a
                      className="cg-a link_hyper"
                      href="https://x-port.capgemini.com/fs-alliances-google-cloud/"
                      target="_blank"
                      rel="noopener"
                    >
                      GCP Alliance Page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 hyper_sec">
            <div className="table-col hyper_table">
              <div className="td">
                <p>
                  <img
                    className="content-box-img aligncenter img_hyper"
                    src={redhat}
                  />
                </p>
                <div className="main_hyper">
                  <div className="hyper_link">
                    <a
                      className="cg-a link_hyper"
                      href="https://x-port.capgemini.com/fs-alliances-ibm/"
                      target="_blank"
                      rel="noopener"
                    >
                      IBM/Redhat Alliance{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HyperScaler;
