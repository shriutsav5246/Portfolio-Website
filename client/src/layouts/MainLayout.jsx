import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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

  return (
    <>
      <Navbar />

      <main
        className={`layout ${
          location.pathname === "/" ? "layout-home" : "layout-scrollable"
        }`}
      >
        {/* =========================================
                    PAGE CONTENT
        ========================================= */}

        <section className="layout-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{
                opacity: 0,
                x: 60,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                x: -60,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
    </>
  );
}

export default MainLayout;
