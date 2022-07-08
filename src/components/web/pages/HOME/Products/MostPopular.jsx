import React, { useState } from "react";
import usePluginInit from "../../../../../customHooks/Plugin_Init/usePluginInit";
import useFetch from "../../../../../customHooks/useFetch";
import ProductModal from "../../Products/ProductModal";
import SinglePopularProduct from "./SinglePopularProduct";

function MostPopular() {
  const { result: popularProducts, loading } = useFetch(
    `${process.env.REACT_APP_API_BASE_URL}/products/hot`
  );

  const [modalData, setModalData] = useState(null);

  const getModalData = (id) => {
    let [res] = popularProducts.data.filter((product) => product.id === id);
    setModalData(res);
  };
  usePluginInit("isotope", "nice_select", "popular_slider");
  return (
    <div className="product-area most-popular section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Popular Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {!loading && (
              <div className="owl-carousel popular-slider">
                {/* Start Single Product */}
                {popularProducts.data.map((product) => (
                  <SinglePopularProduct
                    {...{ ...product, getModalData }}
                    key={product.id}
                  />
                ))}

                {/* End Single Product */}
              </div>
            )}
          </div>
        </div>
      </div>

      {modalData && <ProductModal {...{ ...modalData, setModalData }} />}
    </div>
  );
}

export default MostPopular;
