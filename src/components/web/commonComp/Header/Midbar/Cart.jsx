import React from "react";
import { FiHeart } from "react-icons/fi";

function Cart() {
  return (
    <div className="right-bar">
      {/* Search Form */}
      <div className="sinlge-bar shopping">
        <a href="http://127.0.0.1:8000/wishlist" className="single-icon">
          <FiHeart />
          <span className="total-count">1</span>
        </a>
        {/* Shopping Item */}
        <div className="shopping-item">
          <div className="dropdown-cart-header">
            <span>1 Items</span>
            <a href="http://127.0.0.1:8000/wishlist">View Wishlist</a>
          </div>
          <ul className="shopping-list">
            <li>
              <a
                href="http://127.0.0.1:8000/wishlist-delete/3"
                className="remove"
                title="Remove this item"
              >
                <i className="fa fa-remove" />
              </a>
              <a className="cart-img" href="#">
                <img
                  src={require(`../../../../../assets/mini-banner1.jpg`)}
                  alt="/storage/photos/1/Products/405b7-pmtk004t.jpg"
                />
              </a>
              <h4>
                <a
                  href="http://127.0.0.1:8000/product-detail/melange-casual-black"
                  target="_blank"
                >
                  Melange Casual Black
                </a>
              </h4>
              <p className="quantity">
                1 x - <span className="amount">$540.00</span>
              </p>
            </li>
          </ul>
          <div className="bottom">
            <div className="total">
              <span>Total</span>
              <span className="total-amount">$540.00</span>
            </div>
            <a href="http://127.0.0.1:8000/cart" className="btn animate">
              Cart
            </a>
          </div>
        </div>
        {/*/ End Shopping Item */}
      </div>
      <div className="sinlge-bar shopping">
        <a href="http://127.0.0.1:8000/cart" className="single-icon">
          <i className="ti-bag" /> <span className="total-count">6</span>
        </a>
        {/* Shopping Item */}
        <div className="shopping-item">
          <div className="dropdown-cart-header">
            <span>3 Items</span>
            <a href="http://127.0.0.1:8000/cart">View Cart</a>
          </div>
          <ul className="shopping-list">
            {["mini-banner1.jpg", "mini-banner2.jpg", "mini-banner3.jpg"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="http://127.0.0.1:8000/cart-delete/10"
                    className="remove"
                    title="Remove this item"
                  >
                    <i className="fa fa-remove" />
                  </a>
                  <a className="cart-img" href="#">
                    <img
                      src={require(`../../../../../assets/${item}`)}
                      alt="/storage/photos/1/Products/01f42-pwt004b.jpg"
                    />
                  </a>
                  <h4>
                    <a href="" target="_blank">
                      Lorem Ipsum is simply
                    </a>
                  </h4>
                  <p className="quantity">
                    1 x - <span className="amount">$270.00</span>
                  </p>
                </li>
              )
            )}
          </ul>
          <div className="bottom">
            <div className="total">
              <span>Total</span>
              <span className="total-amount">$2,450.00</span>
            </div>
            <a href="" className="btn animate">
              Checkout
            </a>
          </div>
        </div>
        {/*/ End Shopping Item */}
      </div>
    </div>
  );
}

export default Cart;
