import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import LogoBar from "./components/LogoBar";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="header">
        <SearchBar />
        <LogoBar />
        <NavBar />
      </div>
    </>
  );
}

function Body() {
  return (
    <>
      <Card />;
      <Card />;
      <Card />;
    </>
  );
}
