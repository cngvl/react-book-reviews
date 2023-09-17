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
      <LogoBar />
      <NavBar />
      <BookReviewCard />
      <BookReviewCard />
      <Footer />
    </div>
  );
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

// function Test() {
//   return (
//     <React.Fragment>
//       <div>
//         <p>Testing</p>
//       </div>
//       ;
//     </React.Fragment>
//   );
// }

function LogoBar() {
  return (
    <React.Fragment>
      <div>
        <p>LogoBar</p>
      </div>
    </React.Fragment>
  );
}

function NavBar() {
  return (
    <React.Fragment>
      <div className="NavBar">
        <ul>
          <li>X</li>
          <li>Y</li>
          <li>Z</li>
          <li>A</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

function Footer() {
  return (
    <React.Fragment>
      <div>
        <p>Testing</p>
      </div>
      ;
    </React.Fragment>
  );
}

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
