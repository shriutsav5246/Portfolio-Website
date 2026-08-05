import { motion } from "framer-motion";

/* ==================================================
                  PROJECT FILTERS
================================================== */

const filters = ["All", "Full Stack", "Android Apps"];

function FilterBar({ activeFilter, setActiveFilter }) {
  return (
    <div className="filter-bar">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <motion.button
            key={filter}
            type="button"
            className={isActive ? "active" : ""}
            onClick={() => setActiveFilter(filter)}
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <span>{filter}</span>

            {isActive && (
              <motion.span
                className="filter-active-dot"
                layoutId="project-filter-indicator"
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 32,
                }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

export default FilterBar;