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
   FULL STACK TECHNOLOGIES
========================================================= */

const technologies: Technology[] = [
  {
    name: ".NET",
    icon: "bi bi-braces",
    color: "#1687dc",
    description:
      "Build modern enterprise and web applications using .NET, ASP.NET Core, Angular, React and DevOps.",
    courses: [
      {
        name: "Full Stack Development with DevOps And AI",
        path: "/courses/dotnetfullstack/fullstackdevelopmentaianddevops",
      },
      {
        name: "Full Stack Development with Azure DevOps",
        path: "/courses/dotnet/fullstackdevelopmentazuredevops",
      },
      {
        name: "Full Stack Development",
        path: "/courses/dotnet/fullstackdevelopment",
      },
      {
        name: ".Net Core Training For Working Professionals",
        path: "/courses/dotnet/dotnetcore",
      },
      {
        name: ".Net Core With Angular",
        path: "/courses/dotnet/dotnetcorewithangular",
      },
      {
        name: ".Net Core With React",
        path: "/courses/dotnet/dotnetcorewithreact",
      },
    ],
  },

  {
    name: "Java",
    icon: "bi bi-cup-hot",
    color: "#1687dc",
    description:
      "Learn Java full stack development with Spring Boot, React, Angular, DevOps and practical projects.",
    courses: [
      {
        name: "Full Stack Development with DevOps And AI",
        path: "/courses/java/fullstackdevelopmentaianddevops",
      },
      {
        name: "Full Stack Development with AWS DevOps",
        path: "/courses/java/fullstackdevelopmentawsdevops",
      },
      {
        name: "Full Stack Development",
        path: "/courses/java/fullstackdevelopment",
      },
      {
        name: "Advance Java Training For Working Professionals",
        path: "/courses/java/advancejava",
      },
      {
        name: "Spring Boot With React",
        path: "/courses/java/springbootwithreact",
      },
      {
        name: "Spring Boot With Angular",
        path: "/courses/java/springbootwithangular",
      },
    ],
  },

  {
    name: "Python",
    icon: "bi bi-filetype-py",
    color: "#1687dc",
    description:
      "Develop full stack applications with Python, Django, FastAPI, React, Angular and modern DevOps tools.",
    courses: [
      {
        name: "Full Stack Development with DevOps And AI",
        path: "/courses/python/fullstackdevelopmentaianddevops",
      },
      {
        name: "Full Stack Development with AWS DevOps",
        path: "/courses/python/fullstackdevelopmentawsdevops",
      },
      {
        name: "Full Stack Development",
        path: "/courses/python/fullstackdevelopment",
      },
      {
        name: "Django + FastApi Training For Working Professionals",
        path: "/courses/python/djangofastapi",
      },
      {
        name: "Django + FastApi With React",
        path: "/courses/python/djangofastapiwithreact",
      },
      {
        name: "Django + FastApi With Angular",
        path: "/courses/python/djangofastapiwithangular",
      },
    ],
  },

  {
    name: "MEAN / MERN",
    icon: "bi bi-boxes",
    color: "#1687dc",
    description:
      "Learn modern JavaScript full stack development with frontend, backend, databases, AWS and AI.",
    courses: [
      {
        name: "MEARN Stack Development with AWS DevOps And AI",
        path: "/courses/meanmern/mearnawsdevopsai",
      },
      {
        name: "MEARN Stack Development with Live Project",
        path: "/courses/meanmern/mearnwithliveproject",
      },
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function FullStackCourses() {
  const [openTechnology, setOpenTechnology] = useState<string | null>(
    null
  );

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
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "45px solid rgba(22,135,220,0.05)",
            right: -80,
            top: -110,
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
                LEFT CONTENT
            ================================================= */}

            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* LABEL */}

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
                  <i className="bi bi-code-slash" />
                  FULL STACK DEVELOPMENT
                </div>

                {/* TITLE */}

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
                  Full Stack
                  <br />

                  <span style={{ color: "#1687dc" }}>
                    Development Courses
                  </span>
                </h1>

                {/* DESCRIPTION */}

                <p
                  style={{
                    maxWidth: 650,
                    fontSize: 17,
                    lineHeight: 1.8,
                    color: "#61768a",
                    marginBottom: 30,
                  }}
                >
                  Learn complete full stack development with
                  industry-focused technologies, practical projects,
                  modern frameworks and real-world development
                  practices.
                </p>

                {/* BUTTON */}

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
                  Explore Technologies
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
                {/* Decorative square */}

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

                {/* IMAGE CARD */}

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
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=85"
                    alt="Full Stack Development"
                    style={{
                      width: "100%",
                      height: 390,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* IMAGE OVERLAY */}

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
                      <i className="bi bi-laptop" />
                    </div>

                    <div>
                      <div
                        style={{
                          fontWeight: 800,
                          color: "#18324b",
                          fontSize: 14,
                        }}
                      >
                        Industry Focused Learning
                      </div>

                      <div
                        style={{
                          color: "#718496",
                          fontSize: 12,
                          marginTop: 2,
                        }}
                      >
                        Practical skills • Projects • Career
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
          TECHNOLOGIES
      ===================================================== */}

      <section
        id="technologies"
        style={{
          padding: "80px 20px",
          background: "#f5faff",
        }}
      >
        <div className="container">
          {/* =================================================
              SECTION HEADER
          ================================================= */}

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
              TECHNOLOGIES
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
              Choose Your Full Stack Path
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: 16,
                lineHeight: 1.8,
                color: "#6a7e90",
              }}
            >
              Explore our full stack technologies and choose
              the learning path that matches your career goals.
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
                    {/* MAIN ROW */}

                    <div
                      style={{
                        padding: "18px 20px",
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                      }}
                    >
                      {/* TECHNOLOGY ICON */}

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

                      {/* VIEW COURSES */}

                      <button
                        type="button"
                        onClick={() =>
                          handleToggle(
                            technology.name
                          )
                        }
                        aria-expanded={
                          isOpen
                        }
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
                        EXPANDED COURSES
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
                                    borderRadius: 10,
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