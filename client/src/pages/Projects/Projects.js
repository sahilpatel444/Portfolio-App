import React from "react";
import "./Projects.css";
import Zoom from 'react-reveal/Zoom';
const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          {" "}
          top recent projects{" "}
        </h2>
        <hr />
        <p className="pb-3 text-center">
          here are my top 3 recent project with live links and source code
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Zoom>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src="image/project1.jpeg" alt="project1" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto mt-3">
                  <h5 className="text-uppercase">STYLUXE Ecommerce Website</h5>
                </div>
                <a className="ad-btn" href="styluxe.com">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src="image/project1.jpeg" alt="project1" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto mt-3">
                  <h5 className="text-uppercase">STYLUXE Ecommerce Website</h5>
                </div>
                <a className="ad-btn" href="styluxe.com">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src="image/project1.jpeg" alt="project1" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto mt-3">
                  <h5 className="text-uppercase">STYLUXE Ecommerce Website</h5>
                </div>
                
                <a className="ad-btn" href="view">
                  View
                </a>
              </div>
            </div>
          </div>
        </Zoom>
        </div>
      </div>
    </>
  );
};

export default Projects;
