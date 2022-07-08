import React from "react";

function Searchbar() {
  return (
    <div className="search-bar-top">
      <div className="search-bar">
        {/* <select>
					<option>All Category</option>
					<option>Kid's</option>
					<option>Men's Fashion</option>
					<option>Women's Fashion</option>
				</select> */}
        <form method="POST" action="http://127.0.0.1:8000/product/search">
          <input
            type="hidden"
            name="_token"
            defaultValue="VbGlkdubwyv5otgzCLwGw8K82tYGDe82YZPl24kL"
          />
          <input
            name="search"
            placeholder="Search Products Here....."
            type="search"
          />
          <button className="btnn" type="submit">
            <i className="ti-search" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
