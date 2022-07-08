import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../../customHooks/useFetch";

function Navbar() {
  const catApi = `${process.env.REACT_APP_API_BASE_URL}/product-categories `;
  const {
    loading: catLoading,
    result: { data: catData },
  } = useFetch(catApi);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-collapse">
        <div className="nav-inner">
          <ul className="nav main-menu menu navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
              <span className="new">New</span>
            </li>
            <li>
              <a>
                Category
                <i className="ti-angle-down" />
              </a>
              <ul className="dropdown border-0 ">
                {!catLoading &&
                  catData.map(({ title, id, child_cat, slug }) => (
                    <li key={id}>
                      <Link to={`/category/${slug}`}>{title}</Link>
                      {child_cat.length > 0 && (
                        <ul className="dropdown sub-dropdown border-0 ">
                          {child_cat.map(({ title, id, slug: sub_slug }) => (
                            <li key={id}>
                              <Link to={`/category/${slug}/${sub_slug}`}>
                                {title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
            </li>
            {/* <li>
							<Link to="blog">Blog</Link>
						</li> */}
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
