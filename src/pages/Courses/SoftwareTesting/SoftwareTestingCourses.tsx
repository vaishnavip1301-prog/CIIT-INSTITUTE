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

const technologies: Technology[] = [
  {
    name: "Software Testing",
    icon: "bi bi-check2-circle",
    color: "#20a36a",
    description:
      "Learn software testing fundamentals, test cases, defect management and practical manual testing techniques.",
    courses: [
      {
        name: "Diploma in Software Testing",
        path: "/courses/softwaretesting/diplomainsoftwaretesting",
      },
    ],
  },
  {
    name: "Selenium",
    icon: "bi bi-bug",
    color: "#20a36a",
    description:
      "Build automation testing skills using Selenium with practical DevOps and AI integration.",
    courses: [
      {
        name: "Selenium Automation Testing With DevOps + AI",
        path: "/courses/softwaretesting/seleniumautomationwithdevopsai",
      },
    ],
  },
  {
    name: "Playwright",
    icon: "bi bi-window-stack",
    color: "#1687dc",
    description:
      "Learn modern web automation testing with Playwright along with DevOps and AI practices.",
    courses: [
      {
        name: "Playwright Automation Testing With DevOps + AI",
        path: "/courses/softwaretesting/playwrightautomationwithdevopsai",
      },
    ],
  },
];

export default function SoftwareTestingCourses() {
  const [openTechnology, setOpenTechnology] = useState<string | null>(null);

  const toggleTechnology = (technology: string) => {
    setOpenTechnology((current) =>
      current === technology ? null : technology
    );
  };

  return (
    <div
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: "#f5faff",
        color: "#18324b",
        minHeight: "100vh",
      }}
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #eef8ff 0%, #ffffff 52%, #e9f6ff 100%)",
          padding: "90px 0 75px",
        }}
      >
        {/* Decorative Circle */}

        <div
          style={{
            position: "absolute",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            border: "45px solid rgba(22,135,220,0.06)",
            right: "-80px",
            top: "-100px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            border: "25px solid rgba(22,135,220,0.05)",
            left: "-70px",
            bottom: "-80px",
          }}
        />

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "9px",
                    padding: "9px 15px",
                    borderRadius: "50px",
                    background: "#e8f5ff",
                    color: "#1687dc",
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  <i className="bi bi-shield-check" />
                  Industry Focused Learning
                </div>

                <h1
                  style={{
                    fontSize: "clamp(40px, 5vw, 64px)",
                    lineHeight: 1.08,
                    fontWeight: 800,
                    letterSpacing: "-2px",
                    color: "#101b30",
                    marginBottom: "22px",
                  }}
                >
                  Software{" "}
                  <span style={{ color: "#1687dc" }}>Testing</span>
                </h1>

                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.85,
                    color: "#5f7285",
                    maxWidth: "620px",
                    marginBottom: "30px",
                  }}
                >
                  Build practical software testing skills with industry-focused
                  training in Manual Testing, Selenium and Playwright.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <a
                    href="#testing-technologies"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "9px",
                      padding: "13px 22px",
                      borderRadius: "12px",
                      background:
                        "linear-gradient(135deg, #087bc9, #168fe1)",
                      color: "#ffffff",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "14px",
                      boxShadow: "0 12px 28px rgba(22,135,220,0.20)",
                    }}
                  >
                    Explore Technologies
                    <i className="bi bi-arrow-down" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* =================================================
                RIGHT IMAGE
            ================================================= */}

            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "-15px",
                    borderRadius: "32px",
                    background:
                      "linear-gradient(135deg, rgba(22,135,220,0.12), rgba(22,135,220,0.02))",
                    transform: "rotate(2deg)",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "28px",
                    border: "1px solid #dcebf7",
                    background: "#ffffff",
                    boxShadow: "0 25px 60px rgba(25,85,130,0.14)",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
                    alt="Software Testing"
                    style={{
                      width: "100%",
                      height: "390px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      left: "22px",
                      bottom: "22px",
                      right: "22px",
                      padding: "17px 19px",
                      borderRadius: "18px",
                      background: "rgba(255,255,255,0.94)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.8)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "11px",
                      }}
                    >
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "13px",
                          background: "#e8f5ff",
                          color: "#1687dc",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "20px",
                          flexShrink: 0,
                        }}
                      >
                        <i className="bi bi-shield-check" />
                      </div>

                      <div>
                        <div
                          style={{
                            fontWeight: 800,
                            color: "#18324b",
                            fontSize: "15px",
                          }}
                        >
                          Quality Assurance
                        </div>

                        <div
                          style={{
                            fontSize: "12px",
                            color: "#718496",
                            marginTop: "3px",
                          }}
                        >
                          Testing • Automation • Quality
                        </div>
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
          TESTING TECHNOLOGIES
      ===================================================== */}

      <section
        id="testing-technologies"
        style={{
          padding: "80px 0 95px",
          background: "#ffffff",
        }}
      >
        <div className="container">
          {/* Section Heading */}

          <div
            className="text-center"
            style={{
              maxWidth: "760px",
              margin: "0 auto 48px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#1687dc",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              Testing Technologies
            </div>

            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-1px",
                color: "#101b30",
                marginBottom: "14px",
              }}
            >
              Choose Your Testing Path
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#718496",
                marginBottom: 0,
              }}
            >
              Explore software testing technologies and choose the training
              path that matches your career goals.
            </p>
          </div>

          {/* =================================================
              TECHNOLOGY CARDS
          ================================================= */}

          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {technologies.map((technology, index) => {
              const isOpen = openTechnology === technology.name;

              return (
                <motion.div
                  key={technology.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  style={{
                    border: "1px solid #dcebf7",
                    borderRadius: "22px",
                    background: "#ffffff",
                    boxShadow: isOpen
                      ? "0 18px 45px rgba(22,135,220,0.10)"
                      : "0 8px 25px rgba(25,85,130,0.06)",
                    overflow: "hidden",
                  }}
                >
                  {/* =================================================
                      MAIN TECHNOLOGY ROW
                  ================================================= */}

                  <div
                    style={{
                      padding: "22px 24px",
                      display: "flex",
                      alignItems: "center",
                      gap: "18px",
                    }}
                  >
                    {/* ICON */}

                    <div
                      style={{
                        width: "62px",
                        height: "62px",
                        borderRadius: "17px",
                        background: "#e8f5ff",
                        color: technology.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "27px",
                        flexShrink: 0,
                      }}
                    >
                      <i className={technology.icon} />
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
                          gap: "10px",
                          flexWrap: "wrap",
                          marginBottom: "5px",
                        }}
                      >
                        <h3
                          style={{
                            margin: 0,
                            color: "#18324b",
                            fontSize: "20px",
                            fontWeight: 800,
                          }}
                        >
                          {technology.name}
                        </h3>

                        <span
                          style={{
                            padding: "4px 9px",
                            borderRadius: "50px",
                            background: "#f0f8ff",
                            color: "#1687dc",
                            fontSize: "11px",
                            fontWeight: 700,
                          }}
                        >
                          {technology.courses.length}{" "}
                          {technology.courses.length === 1
                            ? "Course"
                            : "Courses"}
                        </span>
                      </div>

                      <p
                        style={{
                          margin: 0,
                          color: "#718496",
                          fontSize: "14px",
                          lineHeight: 1.65,
                        }}
                      >
                        {technology.description}
                      </p>
                    </div>

                    {/* =================================================
                        VIEW / HIDE COURSES
                    ================================================= */}

                    <button
                      type="button"
                      onClick={() => toggleTechnology(technology.name)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "7px",
                        minWidth: "132px",
                        height: "42px",
                        padding: "0 15px",
                        borderRadius: "11px",
                        border: isOpen
                          ? "1px solid #1687dc"
                          : "1px solid #cce2f2",
                        background: isOpen ? "#1687dc" : "#f5faff",
                        color: isOpen ? "#ffffff" : "#1687dc",
                        fontSize: "13px",
                        fontWeight: 750,
                        cursor: "pointer",
                        flexShrink: 0,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <i
                        className={
                          isOpen
                            ? "bi bi-chevron-up"
                            : "bi bi-chevron-down"
                        }
                      />

                      {isOpen ? "Hide Courses" : "View Courses"}
                    </button>
                  </div>

                  {/* =================================================
                      COURSES
                  ================================================= */}

                  <AnimatePresence initial={false}>
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
                          duration: 0.28,
                          ease: "easeInOut",
                        }}
                        style={{
                          overflow: "hidden",
                          borderTop: "1px solid #edf4f9",
                        }}
                      >
                        <div
                          style={{
                            padding: "8px 24px 18px 104px",
                          }}
                        >
                          {technology.courses.map(
                            (course, courseIndex) => (
                              <Link
                                key={course.path}
                                to={course.path}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "12px",
                                  padding: "13px 14px",
                                  borderBottom:
                                    courseIndex !==
                                    technology.courses.length - 1
                                      ? "1px solid #edf3f7"
                                      : "none",
                                  textDecoration: "none",
                                  color: "#18324b",
                                  transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = "#1687dc";
                                  e.currentTarget.style.paddingLeft = "18px";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = "#18324b";
                                  e.currentTarget.style.paddingLeft = "14px";
                                }}
                              >
                                {/* NUMBER */}

                                <span
                                  style={{
                                    width: "28px",
                                    height: "28px",
                                    borderRadius: "8px",
                                    background: "#e8f5ff",
                                    color: "#1687dc",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "11px",
                                    fontWeight: 800,
                                    flexShrink: 0,
                                  }}
                                >
                                  {String(courseIndex + 1).padStart(2, "0")}
                                </span>

                                {/* COURSE NAME */}

                                <span
                                  style={{
                                    flex: 1,
                                    fontSize: "14px",
                                    fontWeight: 650,
                                  }}
                                >
                                  {course.name}
                                </span>

                                {/* ARROW */}

                                <i
                                  className="bi bi-arrow-right"
                                  style={{
                                    fontSize: "16px",
                                    color: "#1687dc",
                                  }}
                                />
                              </Link>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}