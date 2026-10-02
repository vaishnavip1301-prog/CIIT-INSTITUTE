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
    name: "Digital Marketing",
    icon: "bi bi-megaphone",
    color: "#e85aad",
    description:
      "Build practical digital marketing skills with SEO, social media, advertising, analytics and modern online marketing strategies.",
    courses: [
      {
        name: "Digital Marketing",
        path: "/courses/digitalmarketing/digitalmarketing",
      },
    ],
  },
];

export default function DigitalMarketingCourses() {
  const [openTechnology, setOpenTechnology] = useState<number | null>(null);

  const toggleTechnology = (index: number) => {
    setOpenTechnology((current) => (current === index ? null : index));
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
            "linear-gradient(135deg, #f8fcff 0%, #edf8ff 55%, #dff2ff 100%)",
          padding: "76px 0 82px",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            border: "42px solid rgba(22,135,220,0.06)",
            top: -100,
            right: -80,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 180,
            height: 180,
            borderRadius: "50%",
            border: "28px solid rgba(22,135,220,0.05)",
            bottom: -80,
            left: -60,
          }}
        />

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            {/* Left */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="d-inline-flex align-items-center gap-2"
                  style={{
                    background: "#e8f5ff",
                    color: "#1687dc",
                    padding: "8px 14px",
                    borderRadius: 30,
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.7px",
                    marginBottom: 20,
                  }}
                >
                  <i className="bi bi-megaphone" />
                  Industry Focused Learning
                </div>

                <h1
                  style={{
                    fontSize: "clamp(38px, 5vw, 58px)",
                    lineHeight: 1.08,
                    fontWeight: 800,
                    letterSpacing: "-2px",
                    color: "#101b30",
                    marginBottom: 20,
                  }}
                >
                  Digital Marketing
                </h1>

                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.85,
                    color: "#60758a",
                    maxWidth: 620,
                    marginBottom: 30,
                  }}
                >
                  Build practical digital marketing skills with industry-focused
                  training in SEO, social media, advertising, analytics and
                  modern online marketing strategies.
                </p>

                <a
                  href="#digital-marketing-technologies"
                  className="btn"
                  style={{
                    background:
                      "linear-gradient(135deg,#087bc9,#168fe1)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 12,
                    padding: "13px 22px",
                    fontWeight: 700,
                    fontSize: 14,
                    boxShadow: "0 10px 25px rgba(22,135,220,0.18)",
                  }}
                >
                  Explore Technology
                  <i
                    className="bi bi-arrow-down ms-2"
                    style={{ fontSize: 13 }}
                  />
                </a>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                style={{
                  position: "relative",
                  borderRadius: 28,
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(27,84,120,0.16)",
                  border: "8px solid rgba(255,255,255,0.75)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
                  alt="Digital Marketing"
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
                    left: 22,
                    bottom: 22,
                    background: "rgba(12,45,75,0.88)",
                    backdropFilter: "blur(8px)",
                    color: "#fff",
                    borderRadius: 16,
                    padding: "15px 18px",
                    minWidth: 235,
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      marginBottom: 4,
                    }}
                  >
                    Digital Marketing
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.78)",
                    }}
                  >
                    SEO • Social Media • Analytics
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY SECTION
      ===================================================== */}
      <section
        id="digital-marketing-technologies"
        style={{
          padding: "82px 0 95px",
          background: "#f5faff",
        }}
      >
        <div className="container">
          {/* Section Heading */}
          <div
            className="text-center"
            style={{
              maxWidth: 760,
              margin: "0 auto 48px",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#1687dc",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Digital Marketing
            </div>

            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 800,
                letterSpacing: "-1px",
                color: "#101b30",
                marginBottom: 14,
              }}
            >
              Choose Your Learning Path
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#687d90",
                marginBottom: 0,
              }}
            >
              Learn practical digital marketing skills designed around modern
              industry requirements and real-world applications.
            </p>
          </div>

          {/* Technology Cards */}
          <div
            style={{
              maxWidth: 1000,
              margin: "0 auto",
            }}
          >
            {technologies.map((technology, index) => {
              const isOpen = openTechnology === index;

              return (
                <motion.div
                  key={technology.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  style={{
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: 24,
                    marginBottom: 18,
                    overflow: "hidden",
                    boxShadow: "0 12px 32px rgba(31,88,122,0.07)",
                  }}
                >
                  {/* Main Technology Row */}
                  <div
                    style={{
                      padding: "24px 26px",
                    }}
                  >
                    <div className="row align-items-center g-3">
                      {/* Icon */}
                      <div className="col-auto">
                        <div
                          style={{
                            width: 62,
                            height: 62,
                            borderRadius: 18,
                            background: "#e8f5ff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: technology.color,
                            fontSize: 27,
                          }}
                        >
                          <i className={technology.icon} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="col">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            flexWrap: "wrap",
                            marginBottom: 6,
                          }}
                        >
                          <h3
                            style={{
                              margin: 0,
                              fontSize: 21,
                              fontWeight: 800,
                              color: "#18324b",
                            }}
                          >
                            {technology.name}
                          </h3>

                          <span
                            style={{
                              background: "#eef7fd",
                              color: "#1687dc",
                              borderRadius: 20,
                              padding: "4px 10px",
                              fontSize: 11,
                              fontWeight: 800,
                            }}
                          >
                            {technology.courses.length} Course
                            {technology.courses.length > 1 ? "s" : ""}
                          </span>
                        </div>

                        <p
                          style={{
                            margin: 0,
                            color: "#71869a",
                            fontSize: 14,
                            lineHeight: 1.7,
                            maxWidth: 720,
                          }}
                        >
                          {technology.description}
                        </p>
                      </div>

                      {/* Button */}
                      <div className="col-12 col-md-auto">
                        <button
                          type="button"
                          onClick={() => toggleTechnology(index)}
                          className="btn w-100"
                          style={{
                            minWidth: 145,
                            borderRadius: 11,
                            padding: "10px 15px",
                            fontSize: 13,
                            fontWeight: 700,
                            border: "1px solid #cfe5f5",
                            background: isOpen ? "#1687dc" : "#f5faff",
                            color: isOpen ? "#fff" : "#1687dc",
                          }}
                        >
                          {isOpen ? "Hide Courses" : "View Courses"}

                          <i
                            className={`bi ${
                              isOpen
                                ? "bi-chevron-up"
                                : "bi-chevron-down"
                            } ms-2`}
                            style={{ fontSize: 11 }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Courses */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{
                          overflow: "hidden",
                          borderTop: "1px solid #e5f0f7",
                          background: "#fbfdff",
                        }}
                      >
                        <div
                          style={{
                            padding: "8px 20px 14px",
                          }}
                        >
                          {technology.courses.map((course, courseIndex) => (
                            <Link
                              key={course.path}
                              to={course.path}
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <motion.div
                                whileHover={{
                                  x: 4,
                                  backgroundColor: "#f0f8ff",
                                }}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 14,
                                  padding: "13px 12px",
                                  borderBottom:
                                    courseIndex !==
                                    technology.courses.length - 1
                                      ? "1px solid #e8f1f6"
                                      : "none",
                                  borderRadius: 10,
                                  transition: "0.2s ease",
                                }}
                              >
                                {/* Number */}
                                <div
                                  style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 9,
                                    background: "#e8f5ff",
                                    color: "#1687dc",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 12,
                                    fontWeight: 800,
                                    flexShrink: 0,
                                  }}
                                >
                                  {String(courseIndex + 1).padStart(2, "0")}
                                </div>

                                {/* Course Name */}
                                <div
                                  style={{
                                    flex: 1,
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#26445d",
                                    lineHeight: 1.5,
                                  }}
                                >
                                  {course.name}
                                </div>

                                {/* Arrow */}
                                <i
                                  className="bi bi-arrow-right"
                                  style={{
                                    color: "#1687dc",
                                    fontSize: 16,
                                  }}
                                />
                              </motion.div>
                            </Link>
                          ))}
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