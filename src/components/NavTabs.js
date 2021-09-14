import React from "react";
import "./NavTab.css";

function NavTabs(props) {
  const tabs = ["About", "Work", "Contact", "Resume"];
  return (
    <div class="links">
      <nav>
        <ul className="nav nav-tabs nav-bar">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab}>
              <a
                href={"#" + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? "nav-link active" : "nav-link"
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavTabs;
