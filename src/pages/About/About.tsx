import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import yuvrajSir from "../../assets/YuvrajSir.jpg";

export default function About() {
  const features = [
    {
      icon: "bi-person-check",
      title: "Expert Trainers",
      text: "Learn from experienced trainers with strong industry and technical knowledge.",
    },
    {
      icon: "bi-building",
      title: "Modern Infrastructure",
      text: "Practical learning environment with facilities designed for effective training.",
    },
    {
      icon: "bi-book",
      title: "Comprehensive Curriculum",
      text: "Industry-focused courses covering current technologies and practical skills.",
    },
    {
      icon: "bi-calendar-check",
      title: "Flexible Schedules",
      text: "Weekday and weekend learning options designed around your availability.",
    },
    {
      icon: "bi-people",
      title: "Personalized Attention",
      text: "Individual guidance and support throughout your learning journey.",
    },
    {
      icon: "bi-code-slash",
      title: "Real Time Projects",
      text: "Hands-on practical training through real-time projects and examples.",
    },
    {
      icon: "bi-briefcase",
      title: "Placement Assistance",
      text: "Career guidance and placement assistance to help you prepare for opportunities.",
    },
    {
      icon: "bi-wallet2",
      title: "Affordable Fees",
      text: "Flexible and affordable learning options for students and professionals.",
    },
    {
      icon: "bi-infinity",
      title: "Learning Materials",
      text: "Access useful learning resources and materials throughout your journey.",
    },
    {
      icon: "bi-award",
      title: "Industry Certifications",
      text: "Industry-oriented learning with certification-focused course structures.",
    },
    {
      icon: "bi-grid",
      title: "Diverse Courses",
      text: "Courses across software development, data, cloud, testing and other IT domains.",
    },
    {
      icon: "bi-lightbulb",
      title: "Updated Technology",
      text: "Training aligned with latest industry trends and technology requirements.",
    },
  ];

  const history = [
    {
      year: "Corporate Trainer",
      text: "5+ years of corporate training experience with organizations including Cognizant, Diabose, Palicon Brown, eSuccessor and WNS.",
    },
    {
      year: "Developer & Tech Lead",
      text: "Worked with technologies including .NET and Java as Developer and Tech Lead at eSuccessor Solutions & Services and Glyphisoft Technology Solutions.",
    },
    {
      year: "Institute Trainer",
      text: "Trained 14K+ working professionals, freshers and undergraduate students in Java, .NET, Python, Data Science, DevOps and Data Analytics.",
    },
    {
      year: "Engineering Colleges",
      text: "Conducting technical training programs and workshops for engineering colleges across Maharashtra since 2016.",
    },
    {
      year: "CIIT Training Institute",
      text: "Co-founded and leads CIIT Training Institute with courses covering Java, Python, .NET, DevOps, Data Science and Data Analytics.",
    },
    {
      year: "YSAAS Infotech",
      text: "Co-founded and directs YSAAS Infotech Pvt. Ltd., a software development company working on technology solutions.",
    },
  ];

  const whyCiit = [
    {
      icon: "bi-trophy",
      title: "Success Focused Learning",
      text: "Quality education, structured learning processes, regular feedback, soft skills, business etiquette, communication and teamwork.",
    },
    {
      icon: "bi-laptop",
      title: "100% Industry Oriented Training",
      text: "Concepts are explained clearly and followed by practical examples, exercises and real project scenarios.",
    },
    {
      icon: "bi-people-fill",
      title: "Work With Development Team",
      text: "Students get exposure to experienced developers and understand how technologies are used in actual development projects.",
    },
    {
      icon: "bi-person-workspace",
      title: "Highly Experienced Trainers",
      text: "Industry professionals bring practical experience and technical knowledge into classroom training.",
    },
    {
      icon: "bi-compass",
      title: "Career Counselling",
      text: "Professional guidance helps students understand their interests, strengths, skills and suitable career directions.",
    },
    {
      icon: "bi-diagram-3",
      title: "Industry Interaction",
      text: "Industry interaction helps learners understand workplace expectations, current technologies and professional requirements.",
    },
  ];

  return (
    <div
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: "#f8fafc",
        color: "#252b33",
      }}
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #f5f9ff 0%, #ffffff 55%, #eef6ff 100%)",
          borderBottom: "1px solid #e8edf3",
          padding: "72px 0 68px",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span
                  className="d-inline-flex align-items-center gap-2 mb-3"
                  style={{
                    background: "#eaf3ff",
                    color: "#0866c6",
                    borderRadius: "30px",
                    padding: "8px 17px",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  <i className="bi bi-buildings"></i>
                  About CIIT
                </span>

                <h1
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "clamp(38px, 5vw, 60px)",
                    lineHeight: 1.12,
                    color: "#172033",
                  }}
                >
                  Building Skills.
                  <br />
                  <span style={{ color: "#0866c6" }}>
                    Building Careers.
                  </span>
                </h1>

                <p
                  className="mb-4"
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.8,
                    maxWidth: "700px",
                    color: "#5c6675",
                  }}
                >
                  CIIT Training Institute is focused on developing skilled,
                  industry-ready professionals through practical learning,
                  experienced trainers and updated technology-based training.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <Link
                    to="/courses"
                    className="btn px-4 py-3 rounded-pill fw-semibold"
                    style={{
                      background: "#0866c6",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    Explore Courses
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>

                  <a
                    href="#director"
                    className="btn px-4 py-3 rounded-pill fw-semibold"
                    style={{
                      background: "#fff",
                      color: "#0866c6",
                      border: "1px solid #cfe1f7",
                    }}
                  >
                    Meet Our Director
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="position-relative"
              >
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2eaf3",
                    borderRadius: "24px",
                    padding: "12px",
                    boxShadow: "0 20px 50px rgba(25, 70, 120, 0.10)",
                  }}
                >
                  {/* ONLINE IMAGE - ONLY CHANGE */}
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
                    alt="CIIT Training Institute"
                    style={{
                      width: "100%",
                      height: "420px",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "18px",
                      display: "block",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT CIIT
      ========================================================= */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container py-lg-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span
                  style={{
                    color: "#0866c6",
                    fontSize: "14px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Who We Are
                </span>

                <h2
                  className="fw-bold mt-2 mb-4"
                  style={{
                    fontSize: "38px",
                    color: "#172033",
                  }}
                >
                  About CIIT Training Institute
                </h2>

                <p
                  style={{
                    color: "#626c7a",
                    lineHeight: 1.85,
                    fontSize: "16px",
                  }}
                >
                  CIIT is a Skills and Talent Development organization focused
                  on building manpower for global industry requirements. We
                  provide multidisciplinary learning, training and development
                  opportunities to individuals, students, institutions and
                  organizations.
                </p>

                <p
                  style={{
                    color: "#626c7a",
                    lineHeight: 1.85,
                    fontSize: "16px",
                  }}
                >
                  Our training approach combines technology knowledge,
                  practical exposure and industry-oriented learning so that
                  candidates can develop the skills required to enter and grow
                  in the IT industry.
                </p>

                <p
                  style={{
                    color: "#626c7a",
                    lineHeight: 1.85,
                    fontSize: "16px",
                  }}
                >
                  CIIT was founded by qualified professionals with varied
                  technology expertise. Our objective is to make candidates
                  industry-ready from day one through updated knowledge,
                  practical projects and continuous guidance.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="row g-3">
                  {[
                    {
                      icon: "bi-building",
                      title: "Corporate Training",
                      text: "Technology training and skill development for organizations and working professionals.",
                    },
                    {
                      icon: "bi-person-workspace",
                      title: "Skills & Careers",
                      text: "Career-oriented technical training designed to build practical and professional skills.",
                    },
                    {
                      icon: "bi-mortarboard",
                      title: "School & College Learning",
                      text: "Technology learning, workshops and practical training for students and institutions.",
                    },
                  ].map((item) => (
                    <div className="col-12" key={item.title}>
                      <div
                        className="d-flex gap-3 align-items-start p-4"
                        style={{
                          background: "#f8fbff",
                          border: "1px solid #e1ebf7",
                          borderRadius: "16px",
                        }}
                      >
                        <div
                          className="d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            background: "#eaf3ff",
                            color: "#0866c6",
                            fontSize: "21px",
                          }}
                        >
                          <i className={`bi ${item.icon}`}></i>
                        </div>

                        <div>
                          <h5
                            className="fw-bold mb-1"
                            style={{ color: "#202936" }}
                          >
                            {item.title}
                          </h5>

                          <p
                            className="mb-0"
                            style={{
                              color: "#697482",
                              lineHeight: 1.65,
                            }}
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section
        className="py-5"
        style={{
          background: "#f5f9fe",
          borderTop: "1px solid #e7eef7",
          borderBottom: "1px solid #e7eef7",
        }}
      >
        <div className="container">
          <div className="row g-3">
            {[
              ["14+", "Years of Experience", "bi-calendar3"],
              ["14K+", "Learners Trained", "bi-people"],
              ["3", "CIIT Locations", "bi-geo-alt"],
              ["100%", "Placement Assistance", "bi-briefcase"],
            ].map(([number, title, icon]) => (
              <div className="col-6 col-lg-3" key={title}>
                <div
                  className="text-center p-4 h-100"
                  style={{
                    background: "#fff",
                    border: "1px solid #e0e8f2",
                    borderRadius: "16px",
                  }}
                >
                  <i
                    className={`bi ${icon}`}
                    style={{
                      color: "#0866c6",
                      fontSize: "24px",
                    }}
                  ></i>

                  <h3
                    className="fw-bold mt-2 mb-1"
                    style={{ color: "#0866c6" }}
                  >
                    {number}
                  </h3>

                  <p
                    className="mb-0"
                    style={{
                      color: "#626c78",
                      fontSize: "14px",
                    }}
                  >
                    {title}
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
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container py-lg-4">
          <div className="text-center mb-5">
            <span
              style={{
                color: "#0866c6",
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Our Direction
            </span>

            <h2
              className="fw-bold mt-2 mb-2"
              style={{ fontSize: "38px", color: "#172033" }}
            >
              Mission & Vision
            </h2>

            <p
              className="mx-auto"
              style={{
                maxWidth: "680px",
                color: "#697482",
                lineHeight: 1.7,
              }}
            >
              We focus on practical education, updated knowledge and long-term
              career development.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="h-100 p-4 p-lg-5"
                style={{
                  background: "#f7fbff",
                  border: "1px solid #dceaf8",
                  borderRadius: "20px",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "15px",
                    background: "#0866c6",
                    color: "#fff",
                    fontSize: "25px",
                  }}
                >
                  <i className="bi bi-bullseye"></i>
                </div>

                <h3 className="fw-bold mb-3" style={{ color: "#172033" }}>
                  Our Mission
                </h3>

                <p
                  style={{
                    color: "#626c7a",
                    lineHeight: 1.85,
                  }}
                >
                  To train candidates on real-time projects and make them
                  job-ready with real-time experience. We aim to develop the
                  right skills with the right and updated knowledge required by
                  the industry.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="h-100 p-4 p-lg-5"
                style={{
                  background: "#fffaf5",
                  border: "1px solid #f2e5d4",
                  borderRadius: "20px",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "15px",
                    background: "#f19a3e",
                    color: "#fff",
                    fontSize: "25px",
                  }}
                >
                  <i className="bi bi-eye"></i>
                </div>

                <h3 className="fw-bold mb-3" style={{ color: "#172033" }}>
                  Our Vision
                </h3>

                <p
                  style={{
                    color: "#626c7a",
                    lineHeight: 1.85,
                  }}
                >
                  To make learners future-ready and future-secure with a
                  successful career in IT. We aim to create an immersive
                  learning environment connecting learners with resources,
                  collaboration, innovation and empowerment.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

 {/* =========================================================
    DIRECTOR
========================================================= */}
<section
  id="director"
  className="py-5"
  style={{
    background: "#f5f9fe",
    borderTop: "1px solid #e6eef7",
    borderBottom: "1px solid #e6eef7",
  }}
>
  <div className="container py-lg-4">
    <div className="row align-items-start g-5">

      {/* ================= DIRECTOR IMAGE ================= */}
      <div className="col-lg-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "#fff",
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #dfe8f2",
            boxShadow: "0 15px 40px rgba(20, 60, 100, 0.08)",
          }}
        >
          <img
            src={yuvrajSir}
            alt="Yuvraj Gadadare - Director"
            style={{
              width: "100%",
              height: "460px",
              objectFit: "cover",
              objectPosition: "center top",
              borderRadius: "15px",
              display: "block",
            }}
          />
        </motion.div>
      </div>

      {/* ================= DIRECTOR CONTENT ================= */}
      <div className="col-lg-8">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="mb-4">
            <span
              style={{
                color: "#0866c6",
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Leadership
            </span>

            <h2
              className="fw-bold mt-2 mb-2"
              style={{
                color: "#172033",
                fontSize: "38px",
                lineHeight: 1.2,
              }}
            >
              Meet Our Director
            </h2>
          </div>

          {/* Director Name */}
          <h2
            className="fw-bold mb-2"
            style={{
              color: "#172033",
              fontSize: "32px",
            }}
          >
            Yuvraj Gadadare
          </h2>

          <p
            className="mb-4"
            style={{
              color: "#0866c6",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Co-Founder • Director • Mentor • CTO • Tech Lead • Software Developer • Lead Trainer • Corporate Trainer  
            
{/* Co-Founder, Director, Mentor, CTO, Tech Lead, Software Developer, Lead Trainer, Corporate Trainer */}
          </p>

          <p
            style={{
              color: "#626c7a",
              lineHeight: 1.85,
              fontSize: "16px",
            }}
          >
            Yuvraj Gadadare is a technology mentor and leader with 14+
            years of experience in software training, IT services and
            technology development. He is the Director and Lead Mentor of
            CIIT Training Institute Pvt. Ltd.
          </p>

          <p
            style={{
              color: "#626c7a",
              lineHeight: 1.85,
              fontSize: "16px",
            }}
          >
            He has guided thousands of learners and has conducted training
            programs for corporations and engineering colleges across
            Maharashtra. His training approach focuses on hands-on
            learning, practical projects and technically sound concepts.
          </p>

          <p
            style={{
              color: "#626c7a",
              lineHeight: 1.85,
              fontSize: "16px",
            }}
          >
            His professional responsibilities include software
            development, technology leadership, software training,
            corporate training and mentoring students and working
            professionals.
          </p>

          {/* Qualification / Experience */}
          <div className="row g-3 mt-3">

            <div className="col-sm-6">
              <div
                className="p-3 h-100"
                style={{
                  background: "#fff",
                  border: "1px solid #e1e8f0",
                  borderRadius: "13px",
                }}
              >
                <small style={{ color: "#7a8490" }}>
                  Qualification
                </small>

                <div
                  className="fw-semibold mt-1"
                  style={{ color: "#263140" }}
                >
                  BE • ME
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div
                className="p-3 h-100"
                style={{
                  background: "#fff",
                  border: "1px solid #e1e8f0",
                  borderRadius: "13px",
                }}
              >
                <small style={{ color: "#7a8490" }}>
                  Experience
                </small>

                <div
                  className="fw-semibold mt-1"
                  style={{ color: "#263140" }}
                >
                  14+ Years
                </div>
              </div>
            </div>

          </div>

          <p
            className="mt-3 mb-0"
            style={{
              color: "#6a7480",
              fontSize: "14px",
            }}
          >
            BE from D Y Patil, Akurdi, Pune • ME from Raisoni,
            Wagholi, Pune
          </p>
        </motion.div>
      </div>

    </div>
  </div>
</section>

      {/* =========================================================
          PROFESSIONAL HISTORY
      ========================================================= */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container py-lg-4">
          <div className="text-center mb-5">
            <span
              style={{
                color: "#0866c6",
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Experience
            </span>

            <h2
              className="fw-bold mt-2"
              style={{
                color: "#172033",
                fontSize: "38px",
              }}
            >
              Professional Journey
            </h2>
          </div>

          <div className="row g-4">
            {history.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={item.year}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  whileHover={{ y: -5 }}
                  className="h-100 p-4"
                  style={{
                    background: "#fff",
                    border: "1px solid #e1e8f0",
                    borderRadius: "17px",
                    boxShadow: "0 8px 25px rgba(30, 60, 90, 0.05)",
                  }}
                >
                  <div
                    className="mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "12px",
                      background: "#eaf3ff",
                      color: "#0866c6",
                    }}
                  >
                    <i className="bi bi-briefcase"></i>
                  </div>

                  <h5
                    className="fw-bold mb-2"
                    style={{ color: "#263140" }}
                  >
                    {item.year}
                  </h5>

                  <p
                    className="mb-0"
                    style={{
                      color: "#697482",
                      lineHeight: 1.75,
                      fontSize: "14px",
                    }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CIIT
      ========================================================= */}
      <section
        className="py-5"
        style={{
          background: "#f5f9fe",
          borderTop: "1px solid #e5edf6",
          borderBottom: "1px solid #e5edf6",
        }}
      >
        <div className="container py-lg-4">
          <div className="text-center mb-5">
            <span
              style={{
                color: "#0866c6",
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Why CIIT
            </span>

            <h2
              className="fw-bold mt-2 mb-2"
              style={{
                color: "#172033",
                fontSize: "38px",
              }}
            >
              Why Learn With CIIT?
            </h2>

            <p
              className="mx-auto"
              style={{
                maxWidth: "700px",
                color: "#697482",
                lineHeight: 1.7,
              }}
            >
              Our learning approach combines technical knowledge, practical
              exposure, industry interaction and career guidance.
            </p>
          </div>

          <div className="row g-4">
            {whyCiit.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  whileHover={{ y: -5 }}
                  className="h-100 p-4"
                  style={{
                    background: "#fff",
                    border: "1px solid #dfe8f2",
                    borderRadius: "17px",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "13px",
                      background: "#eaf3ff",
                      color: "#0866c6",
                      fontSize: "21px",
                    }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <h5
                    className="fw-bold mb-2"
                    style={{ color: "#263140" }}
                  >
                    {item.title}
                  </h5>

                  <p
                    className="mb-0"
                    style={{
                      color: "#697482",
                      lineHeight: 1.75,
                      fontSize: "14px",
                    }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          KEY FEATURES
      ========================================================= */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container py-lg-4">
          <div className="text-center mb-5">
            <span
              style={{
                color: "#0866c6",
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Our Strengths
            </span>

            <h2
              className="fw-bold mt-2"
              style={{
                color: "#172033",
                fontSize: "38px",
              }}
            >
              Key Features
            </h2>
          </div>

          <div className="row g-3">
            {features.map((feature, index) => (
              <div className="col-12 col-sm-6 col-lg-4" key={feature.title}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.03,
                  }}
                  whileHover={{ y: -3 }}
                  className="d-flex gap-3 align-items-start p-4 h-100"
                  style={{
                    background: "#f9fbfd",
                    border: "1px solid #e4eaf1",
                    borderRadius: "15px",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "11px",
                      background: "#eaf3ff",
                      color: "#0866c6",
                    }}
                  >
                    <i className={`bi ${feature.icon}`}></i>
                  </div>

                  <div>
                    <h6
                      className="fw-bold mb-1"
                      style={{ color: "#273140" }}
                    >
                      {feature.title}
                    </h6>

                    <p
                      className="mb-0"
                      style={{
                        color: "#707a86",
                        fontSize: "13px",
                        lineHeight: 1.65,
                      }}
                    >
                      {feature.text}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}