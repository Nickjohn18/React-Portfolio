import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./elements/footer/footer";
import Work from "./pages/Work";

function Portfolio() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      case "Work":
        return <Work />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <div>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        <div>{renderPage(currentPage)}</div>
      </div>
      <footer class="footer">
        <Footer />
      </footer>
    </>
  );
}

export default Portfolio;
