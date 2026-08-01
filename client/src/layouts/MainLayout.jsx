import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "../components/Navbar/Navbar";

import heroBackground from "../assets/images/hero-background.png";

import "./MainLayout.css";

function MainLayout() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <main className="layout">
        {/* Left Side */}
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

        {/* Right Side (Persistent Image) */}
        <aside className="layout-image">
          <img src={heroBackground} alt="Background Portrait" />
        </aside>
      </main>
    </>
  );
}

export default MainLayout;
