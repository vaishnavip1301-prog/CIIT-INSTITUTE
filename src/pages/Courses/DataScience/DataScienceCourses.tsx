import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

type Course = {
  name: string;
  path: string;
};

type Technology = {
  name: string;
  icon: string;
  color: string;
  description: string;
  courses: Course[];
};

/* =========================================================
   DATA SCIENCE & AI COURSES
========================================================= */

const technologies: Technology[] = [
  {
    name: "Data Science",
    icon: "bi bi-graph-up-arrow",
    color: "#1687dc",
    description:
      "Learn data science concepts, Python, statistics, machine learning and practical data analysis.",
    courses: [
      {
        name: "Data Science",
        path: "/courses/datascience/datascience",
      },
      {
        name: "Machine Learning",
        path: "/courses/datascience/machinelearning",
      },
      {
        name: "Data Engineering",
        path: "/courses/datascience/dataengineering",
      },
    ],
  },

  {
    name: "Data Analytics",
    icon: "bi bi-pie-chart",
    color: "#1687dc",
    description:
      "Build practical analytics skills using Excel, VBA, Power BI and data analysis.",
    courses: [
      {
        name: "Data Analytics For Freshers & Working Professionals",
        path: "/courses/dataanalytics/dataanalytics",
      },
      {
        name: "Advance Excel With VBA",
        path: "/courses/dataanalytics/advanceexcelwithvba",
      },
      {
        name: "Power BI",
        path: "/courses/dataanalytics/powerbi",
      },
    ],
  },

  {
    name: "Generative AI",
    icon: "bi bi-stars",
    color: "#1687dc",
    description:
      "Explore modern Generative AI concepts and learn how AI solutions are used in real-world applications.",
    courses: [
      {
        name: "Advanced Generative AI",
        path: "/courses/datascience/advancedgenerativeai",
      },
      {
        name: "Agentic AI",
        path: "/courses/datascience/agenticai",
      },
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function DataScienceCourses() {
  const [openTechnology, setOpenTechnology] = useState<string | null>(null);

  const handleToggle = (name: string) => {
    setOpenTechnology((current) =>
      current === name ? null : name
    );
  };

  return (
    <div
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: "#f5faff",
        color: "#18324b",
        overflow: "hidden",
      }}
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        style={{
          position: "relative",
          padding: "78px 20px 72px",
          background:
            "linear-gradient(135deg, #f7fcff 0%, #edf8ff 48%, #ffffff 100%)",
          borderBottom: "1px solid #e1eff8",
          overflow: "hidden",
        }}
      >
        {/* Decorative Circle */}

        <div
          style={{
            position: "absolute",
            width: 310,
            height: 310,
            borderRadius: "50%",
            border: "45px solid rgba(22,135,220,0.05)",
            right: -85,
            top: -115,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 180,
            height: 180,
            borderRadius: "50%",
            border: "25px solid rgba(22,135,220,0.05)",
            left: -70,
            bottom: -70,
          }}
        />

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            {/* =================================================
                LEFT
            ================================================= */}

            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 14px",
                    borderRadius: 50,
                    background: "#e8f5ff",
                    color: "#1687dc",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "1.5px",
                    marginBottom: 20,
                  }}
                >
                  <i className="bi bi-bar-chart-line" />
                  DATA SCIENCE & AI
                </div>

                <h1
                  style={{
                    fontSize: "clamp(38px, 5vw, 64px)",
                    lineHeight: 1.08,
                    fontWeight: 800,
                    letterSpacing: "-2px",
                    color: "#101b30",
                    marginBottom: 22,
                  }}
                >
                  Data Science
                  <br />

                  <span style={{ color: "#1687dc" }}>
                    & AI Courses
                  </span>
                </h1>

                <p
                  style={{
                    maxWidth: 650,
                    fontSize: 17,
                    lineHeight: 1.8,
                    color: "#61768a",
                    marginBottom: 30,
                  }}
                >
                  Learn data science, analytics, machine learning and
                  Generative AI through practical, industry-focused
                  training.
                </p>

                <a
                  href="#technologies"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    textDecoration: "none",
                    padding: "13px 23px",
                    borderRadius: 10,
                    background:
                      "linear-gradient(135deg,#087bc9,#168fe1)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 14,
                    boxShadow:
                      "0 10px 25px rgba(22,135,220,0.18)",
                  }}
                >
                  Explore Courses
                  <i className="bi bi-arrow-down" />
                </a>
              </motion.div>
            </div>

            {/* =================================================
                RIGHT IMAGE
            ================================================= */}

            <div className="col-lg-5">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                style={{
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: 90,
                    height: 90,
                    borderRadius: 22,
                    background: "#1687dc",
                    opacity: 0.08,
                    right: -15,
                    top: -18,
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    borderRadius: 28,
                    overflow: "hidden",
                    border:
                      "7px solid rgba(255,255,255,0.9)",
                    boxShadow:
                      "0 24px 60px rgba(20,80,120,0.14)",
                    background: "#fff",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=85"
                    alt="Data Science and Analytics"
                    style={{
                      width: "100%",
                      height: 390,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      left: 20,
                      bottom: 20,
                      right: 20,
                      background:
                        "rgba(255,255,255,0.94)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 16,
                      padding: "14px 16px",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      boxShadow:
                        "0 10px 30px rgba(20,80,120,0.12)",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "#e8f5ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#1687dc",
                        fontSize: 21,
                        flexShrink: 0,
                      }}
                    >
                      <i className="bi bi-bar-chart-line" />
                    </div>

                    <div>
                      <div
                        style={{
                          fontWeight: 800,
                          color: "#18324b",
                          fontSize: 14,
                        }}
                      >
                        Data Driven Learning
                      </div>

                      <div
                        style={{
                          color: "#718496",
                          fontSize: 12,
                          marginTop: 2,
                        }}
                      >
                        Analytics • AI • Machine Learning
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSES SECTION
      ===================================================== */}

      <section
        id="technologies"
        style={{
          padding: "80px 20px",
          background: "#f5faff",
        }}
      >
        <div className="container">
          {/* SECTION HEADER */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            style={{
              maxWidth: 760,
              margin: "0 auto 48px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "#1687dc",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: 10,
              }}
            >
              LEARNING PATHS
            </div>

            <h2
              style={{
                fontSize: "clamp(30px,4vw,44px)",
                lineHeight: 1.15,
                fontWeight: 800,
                letterSpacing: "-1.2px",
                color: "#101b30",
                marginBottom: 14,
              }}
            >
              Explore Data & AI Courses
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: 16,
                lineHeight: 1.8,
                color: "#6a7e90",
              }}
            >
              Choose a learning path and explore the available
              courses at CIIT.
            </p>
          </motion.div>

          {/* =================================================
              TECHNOLOGY CARDS
          ================================================= */}

          <div
            style={{
              maxWidth: 1050,
              margin: "0 auto",
            }}
          >
            {technologies.map(
              (technology, index) => {
                const isOpen =
                  openTechnology === technology.name;

                return (
                  <motion.div
                    key={technology.name}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    style={{
                      background: "#fff",
                      border: `1px solid ${
                        isOpen
                          ? "#bcdff5"
                          : "#dcebf7"
                      }`,
                      borderRadius: 20,
                      marginBottom: 14,
                      overflow: "hidden",
                      boxShadow: isOpen
                        ? "0 14px 35px rgba(22,135,220,0.09)"
                        : "0 6px 20px rgba(25,85,125,0.035)",
                      transition:
                        "all 0.25s ease",
                    }}
                  >
                    {/* MAIN TECHNOLOGY ROW */}

                    <div
                      style={{
                        padding: "18px 20px",
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                      }}
                    >
                      {/* ICON */}

                      <div
                        style={{
                          width: 64,
                          height: 64,
                          minWidth: 64,
                          borderRadius: 17,
                          background: "#e8f5ff",
                          color:
                            technology.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 30,
                          border:
                            "1px solid #d8edfa",
                        }}
                      >
                        <i
                          className={
                            technology.icon
                          }
                        />
                      </div>

                      {/* CONTENT */}

                      <div
                        style={{
                          flex: 1,
                          minWidth: 0,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            flexWrap: "wrap",
                            marginBottom: 5,
                          }}
                        >
                          <h3
                            style={{
                              margin: 0,
                              color: "#18324b",
                              fontSize: 20,
                              fontWeight: 800,
                            }}
                          >
                            {
                              technology.name
                            }
                          </h3>

                          <span
                            style={{
                              display:
                                "inline-flex",
                              alignItems:
                                "center",
                              gap: 5,
                              padding:
                                "4px 9px",
                              borderRadius: 30,
                              background:
                                "#f0f8fd",
                              color:
                                "#1687dc",
                              fontSize: 11,
                              fontWeight: 700,
                            }}
                          >
                            <i className="bi bi-book" />
                            {
                              technology
                                .courses
                                .length
                            }{" "}
                            Courses
                          </span>
                        </div>

                        <p
                          style={{
                            margin: 0,
                            color: "#718496",
                            fontSize: 13,
                            lineHeight: 1.55,
                            maxWidth: 720,
                          }}
                        >
                          {
                            technology.description
                          }
                        </p>
                      </div>

                      {/* VIEW COURSES BUTTON */}

                      <button
                        type="button"
                        onClick={() =>
                          handleToggle(
                            technology.name
                          )
                        }
                        aria-expanded={isOpen}
                        style={{
                          border:
                            "1px solid #cfe5f4",
                          background: isOpen
                            ? "#1687dc"
                            : "#fff",
                          color: isOpen
                            ? "#fff"
                            : "#1687dc",
                          borderRadius: 10,
                          padding:
                            "9px 13px",
                          fontSize: 12,
                          fontWeight: 800,
                          display:
                            "inline-flex",
                          alignItems:
                            "center",
                          gap: 7,
                          cursor: "pointer",
                          flexShrink: 0,
                          transition:
                            "all 0.2s ease",
                        }}
                      >
                        {isOpen
                          ? "Hide"
                          : "View Courses"}

                        <i
                          className={`bi ${
                            isOpen
                              ? "bi-chevron-up"
                              : "bi-chevron-down"
                          }`}
                        />
                      </button>
                    </div>

                    {/* =================================================
                        EXPANDED COURSE LIST
                    ================================================= */}

                    <AnimatePresence
                      initial={false}
                    >
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          style={{
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              borderTop:
                                "1px solid #e6f1f8",
                              background:
                                "#fbfdff",
                              padding:
                                "10px 20px 14px 100px",
                            }}
                          >
                            {technology.courses.map(
                              (
                                course,
                                courseIndex
                              ) => (
                                <Link
                                  key={
                                    course.path
                                  }
                                  to={
                                    course.path
                                  }
                                  style={{
                                    textDecoration:
                                      "none",
                                    color:
                                      "inherit",
                                    display:
                                      "flex",
                                    alignItems:
                                      "center",
                                    gap: 12,
                                    padding:
                                      "10px 12px",
                                    borderBottom:
                                      courseIndex !==
                                      technology
                                        .courses
                                        .length -
                                        1
                                        ? "1px solid #edf4f8"
                                        : "none",
                                    transition:
                                      "all 0.18s ease",
                                  }}
                                  onMouseEnter={(
                                    e
                                  ) => {
                                    e.currentTarget.style.background =
                                      "#eef8ff";
                                  }}
                                  onMouseLeave={(
                                    e
                                  ) => {
                                    e.currentTarget.style.background =
                                      "transparent";
                                  }}
                                >
                                  {/* NUMBER */}

                                  <span
                                    style={{
                                      width: 28,
                                      height: 28,
                                      minWidth: 28,
                                      borderRadius: 8,
                                      background:
                                        "#e8f5ff",
                                      color:
                                        "#1687dc",
                                      display:
                                        "flex",
                                      alignItems:
                                        "center",
                                      justifyContent:
                                        "center",
                                      fontSize: 11,
                                      fontWeight: 800,
                                    }}
                                  >
                                    {String(
                                      courseIndex +
                                        1
                                    ).padStart(
                                      2,
                                      "0"
                                    )}
                                  </span>

                                  {/* COURSE NAME */}

                                  <span
                                    style={{
                                      flex: 1,
                                      fontSize: 13,
                                      fontWeight: 700,
                                      color:
                                        "#29465e",
                                      lineHeight:
                                        1.45,
                                    }}
                                  >
                                    {
                                      course.name
                                    }
                                  </span>

                                  {/* ARROW */}

                                  <span
                                    style={{
                                      width: 30,
                                      height: 30,
                                      borderRadius: 8,
                                      background:
                                        "#fff",
                                      border:
                                        "1px solid #dbeaf4",
                                      color:
                                        "#1687dc",
                                      display:
                                        "flex",
                                      alignItems:
                                        "center",
                                      justifyContent:
                                        "center",
                                      flexShrink: 0,
                                    }}
                                  >
                                    <i className="bi bi-arrow-up-right" />
                                  </span>
                                </Link>
                              )
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </div>
  );
}