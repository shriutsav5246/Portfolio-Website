import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";

import "./MainLayout.css";

function MainLayout() {
  const location = useLocation();

  /* =========================================
            DYNAMIC BROWSER TAB TITLE
  ========================================= */

  useEffect(() => {
    const pageTitles = {
      "/": "Utsav Shrivastav | Portfolio",
      "/about": "About | Utsav Shrivastav",
      "/skills": "Skills | Utsav Shrivastav",
      "/projects": "Projects | Utsav Shrivastav",
      "/contact": "Contact | Utsav Shrivastav",
    };

    document.title =
      pageTitles[location.pathname] || "Utsav Shrivastav | Portfolio";
  }, [location.pathname]);

  /* =========================================
          RESET SCROLL ON PAGE CHANGE
========================================= */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <main
        className={`layout ${
          location.pathname === "/" ? "layout-home" : "layout-scrollable"
        }`}
      >
        <section className="layout-content">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default MainLayout;
