import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function Portfolio() {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Portfolio;
