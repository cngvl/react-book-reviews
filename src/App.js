import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <p>sdds</p>
      <BookReviewCard />
      <BookReviewCard />
      <FetchTest />
    </div>
  );
}

function FetchTest() {
  const apiKey = process.env.GoogleBooksAPIKey;
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
        // console.log(`x`);
        console.log(data.json());
      })
      .catch((error) => console.log(error));
  }, [apiKey]);
}

// function Test() {
//   return (
//     <React.Fragment>
//       <p>Testing</p>
//     </React.Fragment>
//   );
// }

function BookReviewCard() {
  return (
    <React.Fragment>
      <div className="BookReviewCard">
        {/* Need image */}
        {/* Need header */}
        {/* Need description from API? */}
        <p>BookReviewCard</p>
      </div>
    </React.Fragment>
  );
}

//  App;
