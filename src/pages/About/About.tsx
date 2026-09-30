import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import yuvrajSir from "../../assets/YuvrajSir.jpg";
import ciitImage from "../../assets/ciitimage.jpg";

const onlineImages = {
  learning:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",

  technology:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",

  classroom:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85",
};

export default function About() {
  const [imageOpen, setImageOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#18324b",
        background: "#f5faff",
        overflow: "hidden",
      }}
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        style={{
          position: "relative",
          padding: "85px 0 90px",
          background:
            "linear-gradient(135deg, #f7fcff 0%, #edf8ff 52%, #ffffff 100%)",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            border: "1px solid rgba(22,135,220,0.10)",
            borderRadius: "50%",
            top: "-180px",
            right: "-130px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "250px",
            height: "250px",
            border: "1px solid rgba(22,135,220,0.10)",
            borderRadius: "50%",
            bottom: "-120px",
            left: "-100px",
          }}
        />

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            {/* LEFT */}
            <div className="col-lg-6">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  padding: "8px 14px",
                  borderRadius: "50px",
                  background: "#e8f5ff",
                  color: "#087bc9",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "1.8px",
                  marginBottom: "22px",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#1687dc",
                  }}
                />
                ABOUT CIIT
              </div>

              <h1
                style={{
                  fontSize: "clamp(42px, 5vw, 68px)",
                  lineHeight: "1.05",
                  fontWeight: 800,
                  letterSpacing: "-2.5px",
                  color: "#101b30",
                  marginBottom: "24px",
                }}
              >
                Learn.
                <br />
                Build.
                <br />
                <span style={{ color: "#1687dc" }}>Grow With CIIT.</span>
              </h1>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.85,
                  color: "#60758a",
                  maxWidth: "600px",
                  marginBottom: "30px",
                }}
              >
                CIIT is a career-focused training institute dedicated to
                providing practical, industry-oriented technology education.
                We help students and professionals build the skills,
                confidence and experience needed to grow in the IT industry.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link
                  to="/courses"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 22px",
                    borderRadius: "12px",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "14px",
                    background:
                      "linear-gradient(135deg,#087bc9,#168fe1)",
                    boxShadow: "0 12px 25px rgba(8,123,201,0.20)",
                  }}
                >
                  Explore Courses
                  <i className="bi bi-arrow-up-right" />
                </Link>

                <Link
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "13px 21px",
                    borderRadius: "12px",
                    color: "#087bc9",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "14px",
                    background: "#fff",
                    border: "1px solid #cce2f2",
                  }}
                >
                  Contact CIIT
                  <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6">
              <div
                style={{
                  position: "relative",
                  maxWidth: "560px",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "20px -15px -20px 20px",
                    background: "#dff1ff",
                    borderRadius: "30px",
                    transform: "rotate(3deg)",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "28px",
                    background: "#fff",
                    padding: "9px",
                    boxShadow:
                      "0 30px 70px rgba(24,75,110,0.16)",
                  }}
                >
                  <img
                    src={ciitImage}
                    alt="Students learning technology"
                    onClick={() => setImageOpen(true)}
                    style={{
                      width: "100%",
                      height: "430px",
                      objectFit: "cover",
                      borderRadius: "22px",
                      display: "block",
                      cursor: "zoom-in",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => setImageOpen(true)}
                    style={{
                      position: "absolute",
                      right: "22px",
                      bottom: "22px",
                      width: "45px",
                      height: "45px",
                      border: "none",
                      borderRadius: "12px",
                      background: "#fff",
                      color: "#087bc9",
                      boxShadow: "0 8px 22px rgba(0,0,0,0.15)",
                    }}
                  >
                    <i className="bi bi-arrows-fullscreen" />
                  </button>
                </div>

                {/* Floating Card */}
                <div
                  style={{
                    position: "absolute",
                    left: "-25px",
                    bottom: "-30px",
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: "18px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    boxShadow:
                      "0 18px 40px rgba(20,80,120,0.12)",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "#e8f5ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#087bc9",
                      fontSize: "20px",
                    }}
                  >
                    <i className="bi bi-mortarboard-fill" />
                  </div>

                  <div>
                    <div
                      style={{
                        fontWeight: 800,
                        color: "#10243a",
                        fontSize: "14px",
                      }}
                    >
                      Career Focused
                    </div>

                    <div
                      style={{
                        fontSize: "12px",
                        color: "#71869a",
                        marginTop: "2px",
                      }}
                    >
                      Practical Learning
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section
        style={{
          background: "#fff",
          borderTop: "1px solid #e5f0f7",
          borderBottom: "1px solid #e5f0f7",
          padding: "32px 0",
        }}
      >
        <div className="container">
          <div className="row g-4">
            {[
              {
                value: "14+",
                title: "Years Experience",
                icon: "bi-award",
              },
              {
                value: "14K+",
                title: "Learners Trained",
                icon: "bi-people",
              },
              {
                value: "3",
                title: "CIIT Locations",
                icon: "bi-geo-alt",
              },
              {
                value: "100%",
                title: "Practical Learning",
                icon: "bi-lightning-charge",
              },
            ].map((item) => (
              <div className="col-6 col-lg-3" key={item.title}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "13px",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      minWidth: "48px",
                      borderRadius: "13px",
                      background: "#eaf6ff",
                      color: "#087bc9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                    }}
                  >
                    <i className={`bi ${item.icon}`} />
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: "25px",
                        fontWeight: 800,
                        color: "#101b30",
                        lineHeight: 1,
                      }}
                    >
                      {item.value}
                    </div>

                    <div
                      style={{
                        fontSize: "12px",
                        color: "#71869a",
                        marginTop: "6px",
                      }}
                    >
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section style={{ padding: "95px 0" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src={onlineImages.learning}
                alt="Students learning together"
                style={{
                  width: "100%",
                  height: "430px",
                  objectFit: "cover",
                  borderRadius: "25px",
                  boxShadow:
                    "0 25px 60px rgba(24,75,110,0.13)",
                }}
              />
            </div>

            <div className="col-lg-6">
              <div
                style={{
                  color: "#087bc9",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  marginBottom: "15px",
                }}
              >
                OUR STORY
              </div>

              <h2
                style={{
                  fontSize: "clamp(32px,4vw,48px)",
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  color: "#101b30",
                  marginBottom: "22px",
                }}
              >
                Building Skills That
                <br />
                <span style={{ color: "#1687dc" }}>
                  Build Careers.
                </span>
              </h2>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.9,
                  color: "#63798d",
                  marginBottom: "18px",
                }}
              >
                CIIT was created with a simple purpose — to bridge the gap
                between academic learning and real-world IT requirements.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.9,
                  color: "#63798d",
                  marginBottom: "18px",
                }}
              >
                Our training approach combines concepts, hands-on practice,
                projects and career guidance so learners can understand not
                only what to learn, but also how to apply it.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.9,
                  color: "#63798d",
                }}
              >
                From freshers starting their first technology journey to
                professionals upgrading their skills, CIIT focuses on
                practical and career-oriented learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          JOURNEY
      ========================================================= */}
      <section
        style={{
          padding: "90px 0",
          background: "#edf7ff",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <div
              style={{
                color: "#087bc9",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "13px",
              }}
            >
              OUR JOURNEY
            </div>

            <h2
              style={{
                fontSize: "clamp(32px,4vw,48px)",
                fontWeight: 800,
                letterSpacing: "-1.5px",
                color: "#101b30",
              }}
            >
              Growing With Our Learners
            </h2>
          </div>

          <div className="row g-4">
            {[
              {
                year: "01",
                title: "Strong Foundation",
                text: "Started with a focus on practical technology education and skill development.",
              },
              {
                year: "02",
                title: "Industry Focus",
                text: "Expanded training with technologies and practices relevant to the IT industry.",
              },
              {
                year: "03",
                title: "Career Development",
                text: "Focused on projects, interview preparation, placement support and professional growth.",
              },
              {
                year: "04",
                title: "Continuous Learning",
                text: "Continuously improving learning experiences for students and working professionals.",
              },
            ].map((item) => (
              <div className="col-md-6 col-lg-3" key={item.year}>
                <div
                  style={{
                    height: "100%",
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: "22px",
                    padding: "28px",
                    boxShadow:
                      "0 12px 30px rgba(23,75,110,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "#e8f5ff",
                      color: "#087bc9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      marginBottom: "22px",
                    }}
                  >
                    {item.year}
                  </div>

                  <h3
                    style={{
                      fontSize: "19px",
                      fontWeight: 800,
                      color: "#142a40",
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#71869a",
                      fontSize: "14px",
                      lineHeight: 1.8,
                      marginBottom: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION / VISION
      ========================================================= */}
      <section style={{ padding: "95px 0" }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div
                style={{
                  height: "100%",
                  padding: "38px",
                  background: "#fff",
                  border: "1px solid #dcebf7",
                  borderRadius: "25px",
                  boxShadow:
                    "0 15px 40px rgba(23,75,110,0.07)",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "16px",
                    background: "#e8f5ff",
                    color: "#087bc9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    marginBottom: "23px",
                  }}
                >
                  <i className="bi bi-bullseye" />
                </div>

                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#101b30",
                    marginBottom: "15px",
                  }}
                >
                  Our Mission
                </h3>

                <p
                  style={{
                    color: "#687e91",
                    fontSize: "15px",
                    lineHeight: 1.9,
                    marginBottom: 0,
                  }}
                >
                  To provide practical, accessible and industry-oriented
                  technology training that helps learners develop relevant
                  skills and move confidently toward their career goals.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                style={{
                  height: "100%",
                  padding: "38px",
                  background:
                    "linear-gradient(135deg,#0e3458,#1687dc)",
                  borderRadius: "25px",
                  color: "#fff",
                  boxShadow:
                    "0 20px 45px rgba(8,123,201,0.20)",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    marginBottom: "23px",
                  }}
                >
                  <i className="bi bi-eye" />
                </div>

                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    marginBottom: "15px",
                  }}
                >
                  Our Vision
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,0.82)",
                    fontSize: "15px",
                    lineHeight: 1.9,
                    marginBottom: 0,
                  }}
                >
                  To create a learning environment where technology
                  education becomes practical, engaging and directly
                  connected with real career opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CIIT
      ========================================================= */}
      <section
        style={{
          padding: "95px 0",
          background: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-7">
              <div
                style={{
                  color: "#087bc9",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  marginBottom: "13px",
                }}
              >
                WHY CIIT
              </div>

              <h2
                style={{
                  fontSize: "clamp(32px,4vw,48px)",
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  color: "#101b30",
                  marginBottom: 0,
                }}
              >
                More Than Training.
                <br />
                <span style={{ color: "#1687dc" }}>
                  A Career Journey.
                </span>
              </h2>
            </div>

            <div className="col-lg-5">
              <p
                style={{
                  color: "#6b8092",
                  fontSize: "15px",
                  lineHeight: 1.85,
                  marginBottom: 0,
                }}
              >
                Our learning experience is designed around practical
                knowledge, projects, guidance and continuous skill
                development.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "bi-laptop",
                title: "Practical Training",
                text: "Learn through hands-on exercises, projects and real development practices.",
              },
              {
                icon: "bi-person-check",
                title: "Expert Guidance",
                text: "Get structured guidance throughout your learning journey.",
              },
              {
                icon: "bi-code-slash",
                title: "Industry Skills",
                text: "Focus on relevant technologies and development practices.",
              },
              {
                icon: "bi-briefcase",
                title: "Career Focus",
                text: "Build skills that support your professional and career goals.",
              },
              {
                icon: "bi-people",
                title: "Learner Community",
                text: "Learn and grow in an environment that encourages collaboration.",
              },
              {
                icon: "bi-arrow-repeat",
                title: "Continuous Growth",
                text: "Keep improving your technical skills as technology evolves.",
              },
            ].map((item) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <div
                  style={{
                    height: "100%",
                    padding: "28px",
                    border: "1px solid #dcebf7",
                    borderRadius: "22px",
                    background: "#fff",
                    transition: "all .25s ease",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "15px",
                      background: "#e8f5ff",
                      color: "#087bc9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      marginBottom: "20px",
                    }}
                  >
                    <i className={`bi ${item.icon}`} />
                  </div>

                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "#142a40",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#71869a",
                      fontSize: "14px",
                      lineHeight: 1.8,
                      marginBottom: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          DIRECTOR
      ========================================================= */}
      <section
        style={{
          padding: "95px 0",
          background: "#edf7ff",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 text-center">
              <div
                style={{
                  display: "inline-block",
                  padding: "10px",
                  background: "#fff",
                  borderRadius: "25px",
                  boxShadow:
                    "0 20px 45px rgba(20,75,110,0.12)",
                }}
              >
                <img
                  src={yuvrajSir}
                  alt="CIIT Director"
                  style={{
                    width: "100%",
                    maxWidth: "360px",
                    height: "430px",
                    objectFit: "cover",
                    borderRadius: "18px",
                  }}
                />
              </div>
            </div>

            <div className="col-lg-7">
              <div
                style={{
                  color: "#087bc9",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  marginBottom: "13px",
                }}
              >
                LEADERSHIP
              </div>

              <h2
                style={{
                  fontSize: "clamp(32px,4vw,48px)",
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  color: "#101b30",
                  marginBottom: "18px",
                }}
              >
                Learning With
                <br />
                <span style={{ color: "#1687dc" }}>
                  Purpose & Direction.
                </span>
              </h2>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.9,
                  color: "#63798d",
                  marginBottom: "18px",
                }}
              >
                CIIT's learning philosophy focuses on helping students
                develop practical technical skills along with the confidence
                required to enter and grow in the technology industry.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.9,
                  color: "#63798d",
                  marginBottom: "25px",
                }}
              >
                With a strong focus on practical education and career
                development, CIIT continues to build learning experiences
                around the needs of today's technology learners.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "3px",
                    background: "#1687dc",
                    borderRadius: "10px",
                  }}
                />

                <span
                  style={{
                    fontWeight: 800,
                    color: "#17324a",
                    fontSize: "14px",
                  }}
                >
                  CIIT Training Institute
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section style={{ padding: "95px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <div
              style={{
                color: "#087bc9",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "13px",
              }}
            >
              OUR VALUES
            </div>

            <h2
              style={{
                fontSize: "clamp(32px,4vw,48px)",
                fontWeight: 800,
                letterSpacing: "-1.5px",
                color: "#101b30",
              }}
            >
              What We Believe In
            </h2>
          </div>

          <div className="row g-4">
            {[
              ["bi-heart", "Learner First", "We keep learners at the centre of our training experience."],
              ["bi-lightbulb", "Practical Thinking", "We encourage learning by doing and solving real problems."],
              ["bi-shield-check", "Quality", "We focus on delivering structured and meaningful learning."],
              ["bi-graph-up-arrow", "Growth", "We encourage continuous technical and professional development."],
            ].map(([icon, title, text]) => (
              <div className="col-md-6 col-lg-3" key={title}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "30px 22px",
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: "22px",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      margin: "0 auto 18px",
                      borderRadius: "17px",
                      background: "#e8f5ff",
                      color: "#087bc9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "23px",
                    }}
                  >
                    <i className={`bi ${icon}`} />
                  </div>

                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 800,
                      color: "#142a40",
                      marginBottom: "10px",
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "#71869a",
                      lineHeight: 1.75,
                      marginBottom: 0,
                    }}
                  >
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LEARNING ENVIRONMENT
      ========================================================= */}
      <section
        style={{
          padding: "90px 0",
          background: "#edf7ff",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div
                style={{
                  color: "#087bc9",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  marginBottom: "13px",
                }}
              >
                LEARNING ENVIRONMENT
              </div>

              <h2
                style={{
                  fontSize: "clamp(32px,4vw,48px)",
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  color: "#101b30",
                  marginBottom: "20px",
                }}
              >
                Learn In An
                <br />
                <span style={{ color: "#1687dc" }}>
                  Engaging Environment.
                </span>
              </h2>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.9,
                  color: "#63798d",
                  marginBottom: "25px",
                }}
              >
                Our learning environment is designed to encourage practice,
                interaction, collaboration and continuous improvement.
              </p>

              {[
                "Hands-on practical sessions",
                "Project-oriented learning",
                "Interactive classroom environment",
                "Technology-focused training",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "11px",
                    marginBottom: "13px",
                    color: "#39566e",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  <i
                    className="bi bi-check-circle-fill"
                    style={{ color: "#1687dc" }}
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <img
                src={onlineImages.classroom}
                alt="CIIT classroom learning"
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                  borderRadius: "25px",
                  boxShadow:
                    "0 25px 55px rgba(24,75,110,0.13)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "30px",
              padding: "65px 50px",
              background:
                "linear-gradient(135deg,#0e3458,#1687dc)",
              color: "#fff",
              boxShadow:
                "0 25px 60px rgba(8,123,201,0.18)",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50%",
                right: "-90px",
                top: "-130px",
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "180px",
                height: "180px",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "50%",
                left: "-70px",
                bottom: "-100px",
              }}
            />

            <div className="row align-items-center position-relative">
              <div className="col-lg-8">
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "2px",
                    opacity: 0.8,
                    marginBottom: "12px",
                  }}
                >
                  START YOUR JOURNEY
                </div>

                <h2
                  style={{
                    fontSize: "clamp(30px,4vw,45px)",
                    fontWeight: 800,
                    letterSpacing: "-1.3px",
                    marginBottom: "12px",
                  }}
                >
                  Ready To Build Your Career?
                </h2>

                <p
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    maxWidth: "650px",
                    marginBottom: 0,
                  }}
                >
                  Explore CIIT courses and start learning the skills that can
                  help you move toward your technology career goals.
                </p>
              </div>

              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <Link
                  to="/courses"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "15px 23px",
                    borderRadius: "12px",
                    background: "#fff",
                    color: "#087bc9",
                    textDecoration: "none",
                    fontWeight: 800,
                    fontSize: "14px",
                  }}
                >
                  Explore Courses
                  <i className="bi bi-arrow-up-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMAGE MODAL
      ========================================================= */}
      {imageOpen && (
        <div
          onClick={() => setImageOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(5,22,38,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "25px",
          }}
        >
          <button
            type="button"
            onClick={() => setImageOpen(false)}
            style={{
              position: "fixed",
              top: "20px",
              right: "25px",
              width: "45px",
              height: "45px",
              border: "none",
              borderRadius: "50%",
              background: "#fff",
              color: "#087bc9",
              fontSize: "20px",
              zIndex: 10000,
            }}
          >
            <i className="bi bi-x-lg" />
          </button>

          <img
            src={ciitImage}
            alt="Students learning technology"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "95%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "18px",
              boxShadow: "0 25px 80px rgba(0,0,0,0.35)",
            }}
          />
        </div>
      )}

      {/* =========================================================
          RESPONSIVE
      ========================================================= */}
      <style>
        {`
          @media (max-width: 991px) {
            .about-hero-image {
              height: 360px !important;
            }
          }

          @media (max-width: 767px) {
            section {
              overflow: hidden;
            }

            .container {
              padding-left: 18px;
              padding-right: 18px;
            }

            h1 {
              letter-spacing: -1.5px !important;
            }

            .about-hero-image {
              height: 300px !important;
            }
          }
        `}
      </style>
    </div>
  );
}