import React from "react";

function Home() {
  return (
    <div >

      <div
        id="carouselWithControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "100vh" }}>
            <div className="carousel-caption d-none d-lg-block mt-0">
              <div className="mask">
                <div className="text-white text-center">
                  <h2>Welcome</h2>
                </div>
              </div>
            </div>
            <video
              //    style={{Width: "50%", Height: "50%"}}
              playsInline
              autoPlay
              muted
              loop

            >
              <source
                //   className="h-100"
                src="https://mdbootstrap.com/img/video/Lines.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="carousel-item" style={{ height: "100vh" }}>
            <video
              //    style={{minWidth: "100%", minHeight: "100%"}}
              playsInline
              autoPlay
              muted
              loop
            >
              <source
                src="https://mdbootstrap.com/img/video/Tropical.mp4"
                type="video/mp4"
              />
            </video>
            <div className="carousel-caption d-none d-lg-block mt-0">
              <div className="mask">
                <div className="text-white text-center">
                  <h2>Welcome</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ height: "100vh" }}>
            <video
              //    style={{Width: "100vh", minHeight: "100%"}}
              playsInline
              autoPlay
              muted
              loop
            >
              <source
                //   className="h-100"
                src="https://mdbootstrap.com/img/video/forest.mp4"
                type="video/mp4"
              />
            </video>
            <div className="carousel-caption d-none d-lg-block mt-0">
              <div className="mask">
                <div className="text-white text-center">
                  <h2>Welcome</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselWithControls"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselWithControls"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
