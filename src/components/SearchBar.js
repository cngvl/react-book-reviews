import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  // Not sure if it makes much sense for the function to be here?
  function onChangeTest() {
    console.log("calling onChangeTest");
  }

  // Wrapping this in a useEffect meant that the fetchData method call in the return couldn't be read.
  const fetchedData = async () => {
    const apiKey = process.env.REACT_APP_GOOGLEBOOKS_APIKEY;
    const url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Enter title of book"
          value={search}
          onChange={(event) => {
            onChangeTest();
            // fetchedData(); // THIS BREAKS
            // console.log(event.target.value);
            setSearch(event.target.value);
          }}
          // onChange={(event) => console.log(event.nativeEvent.data)}
        />
        <button>Submit</button>
      </div>
    </>
  );
};

export default SearchBar;
