import React from "react";

function ShopService() {
  return (
    <section className="shop-services section home">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Service */}
            <div className="single-service">
              <i className="ti-rocket" />
              <h4>Free shiping</h4>
              <p>Orders over 1000tk</p>
            </div>
            {/* End Single Service */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Service */}
            <div className="single-service">
              <i className="ti-reload" />
              <h4>Free Return</h4>
              <p>Within 30 days returns</p>
            </div>
            {/* End Single Service */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Service */}
            <div className="single-service">
              <i className="ti-lock" />
              <h4>Secure Payment</h4>
              <p>100% secure payment</p>
            </div>
            {/* End Single Service */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Start Single Service */}
            <div className="single-service">
              <i className="ti-tag" />
              <h4>Best Price</h4>
              <p>Guaranteed price</p>
            </div>
            {/* End Single Service */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopService;
