import React, { useEffect } from "react";

function SearchBar(search) {
  // Not sure if it makes much sense for the function to be here?
  function onChangeTest() {
    console.log("calling onChangeTest");
  }

  function FetchTest() {
    const apiKey = process.env.REACT_APP_GOOGLEBOOKS_APIKEY;
    // console.log(apiKey);
    useEffect(() => {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${apiKey}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    }, [apiKey]);
  }

  return (
    <>
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Enter title of book"
          onChange={(event) => {
            onChangeTest();
            // FetchTest(); - THIS BREAKS
          }}
          // onChange={(event) => console.log(event.nativeEvent.data)}
        />
        <button>Submit</button>
      </div>
    </>
  );
}

export default SearchBar;
