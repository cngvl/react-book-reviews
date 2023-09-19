import React from "react";

const SearchBar = (search) => {
  return (
    <>
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Enter title of book"
          // onChange={(event) => onChangeTest()}
          onChange={(event) => console.log(event.nativeEvent.data)}
        />
        <button>Submit</button>
      </div>
    </>
  );
};

export default SearchBar;
