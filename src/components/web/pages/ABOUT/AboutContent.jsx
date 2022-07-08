import React from "react";
import useFetch from "../../../../customHooks/useFetch";
import { getPhoto } from "../../../../utilityFunction/getPhoto";
function AboutContent() {
  const api = `${process.env.REACT_APP_API_BASE_URL}/about-us`;
  const {
    loading,
    result: { data: aboutData },
  } = useFetch(api);
  const { description, photo } = aboutData[0];
  return (
    !loading && (
      <section className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="about-content">
                <h3>
                  Welcome To <span>Impulse</span>
                </h3>
                <p>{description}</p>
                <div className="button">
                  <a
                    href="http://127.0.0.1:8000/contact"
                    className="btn primary"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about-img overlay">
                <img
                  src={getPhoto(photo)}
                  alt=" /storage/photos/1/blog3.jpg "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default AboutContent;
