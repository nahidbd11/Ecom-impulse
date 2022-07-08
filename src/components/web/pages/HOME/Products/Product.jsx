import React from "react";
import usePluginInit from "../../../../../customHooks/Plugin_Init/usePluginInit";
import ProductItems from "./ProductItems";
import Productnav from "./Productnav";

function Product() {
  usePluginInit("isotope", "nice_select");
  return (
    <div className="product-area section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="product-info">
              {/* TODO:product filter nav */}
              <Productnav />
              {/* TODO:show product Items by filtering with productnav with isotope js  */}
              <ProductItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
