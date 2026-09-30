import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          .ciit-home {
            background: #f5faff;
            color: #18324b;
            overflow: hidden;
            font-family:
              Inter,
              system-ui,
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif;
          }

          /* =====================================================
             HERO
          ===================================================== */

          .ciit-hero {
            min-height: 650px;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;

            background:
              radial-gradient(
                circle at 85% 15%,
                rgba(22, 135, 220, 0.16),
                transparent 28%
              ),
              radial-gradient(
                circle at 5% 85%,
                rgba(255, 122, 31, 0.07),
                transparent 25%
              ),
              linear-gradient(
                135deg,
                #edf7ff 0%,
                #ffffff 52%,
                #eaf6ff 100%
              );
          }

          .hero-decoration {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
          }

          .hero-ring {
            width: 320px;
            height: 320px;
            right: -130px;
            top: 50px;
            border: 1px solid rgba(22, 135, 220, 0.18);
            animation: rotateRing 22s linear infinite;
          }

          .hero-small-circle {
            width: 130px;
            height: 130px;
            left: -50px;
            bottom: 50px;
            background: rgba(22, 135, 220, 0.08);
            animation: floating 5s ease-in-out infinite;
          }

          .hero-dot {
            width: 20px;
            height: 20px;
            right: 17%;
            bottom: 15%;
            background: #1687dc;
            opacity: 0.25;
            animation: floating 4s ease-in-out infinite;
          }

          @keyframes rotateRing {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes floating {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-14px);
            }
          }

          .hero-content {
            opacity: 0;
            transform: translateY(35px);
            transition: all 0.9s ease;
          }

          .hero-content.show {
            opacity: 1;
            transform: translateY(0);
          }

          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: white;
            border: 1px solid #d7eafb;
            color: #1687dc;
            padding: 9px 17px;
            border-radius: 50px;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 1px;
            box-shadow:
              0 10px 30px rgba(30, 95, 135, 0.07);
            animation: badgeFloat 3s ease-in-out infinite;
          }

          @keyframes badgeFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-5px);
            }
          }

          .hero-title {
            color: #101b30;
            font-size: clamp(3.2rem, 6vw, 5.4rem);
            line-height: 0.98;
            font-weight: 850;
            letter-spacing: -3px;
          }

          .hero-title span {
            color: #1687dc;
          }

          .hero-line {
            width: 80px;
            height: 5px;
            border-radius: 50px;
            background:
              linear-gradient(
                90deg,
                #1687dc,
                #73bcec
              );
            animation: lineGrow 1.2s ease forwards;
          }

          @keyframes lineGrow {
            from {
              width: 0;
            }

            to {
              width: 80px;
            }
          }

          .hero-description {
            color: #59697e;
            font-size: 17px;
            line-height: 1.85;
            max-width: 650px;
          }

          /* =====================================================
             BUTTONS
          ===================================================== */

          .ciit-blue-btn {
            background:
              linear-gradient(
                135deg,
                #087bc9,
                #168fe1
              );
            border: none;
            color: white;
            box-shadow:
              0 10px 25px rgba(22, 135, 220, 0.22);
            transition: 0.3s ease;
          }

          .ciit-blue-btn:hover {
            color: white;
            transform: translateY(-3px);
            box-shadow:
              0 15px 32px rgba(22, 135, 220, 0.30);
          }

          .ciit-outline-btn {
            border: 1px solid #cce2f2;
            color: #164a73;
            background: white;
            transition: 0.3s ease;
          }

          .ciit-outline-btn:hover {
            background: #1687dc;
            color: white;
            border-color: #1687dc;
            transform: translateY(-3px);
          }

          /* =====================================================
             MINI STATS
          ===================================================== */

          .number-card {
            transition: 0.3s ease;
          }

          .number-card:hover {
            transform: translateY(-5px);
          }

          .number-card h4 {
            color: #101b30;
          }

          /* =====================================================
             HERO VISUAL
          ===================================================== */

          .hero-visual {
            position: relative;
          }

          .hero-card {
            transition: 0.4s ease;
            border: 1px solid #dcebf7;
          }

          .hero-card:hover {
            transform: translateY(-8px);
            box-shadow:
              0 30px 65px rgba(25, 83, 125, 0.15) !important;
          }

          .hero-card-top {
            background:
              linear-gradient(
                135deg,
                #e8f5ff,
                #f3f9ff
              );
          }

          .hero-icon {
            width: 58px;
            height: 58px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 18px;
            color: white;
            background:
              linear-gradient(
                135deg,
                #1687dc,
                #54a9e4
              );
            box-shadow:
              0 12px 25px rgba(22, 135, 220, 0.22);
          }

          .floating-card {
            animation:
              floatingCard 4s ease-in-out infinite;
          }

          @keyframes floatingCard {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-12px);
            }
          }

          .orbit-one {
            animation:
              orbitOne 7s linear infinite;
          }

          .orbit-two {
            animation:
              orbitTwo 9s linear infinite;
          }

          @keyframes orbitOne {
            from {
              transform:
                rotate(0deg)
                translateX(115px)
                rotate(0deg);
            }

            to {
              transform:
                rotate(360deg)
                translateX(115px)
                rotate(-360deg);
            }
          }

          @keyframes orbitTwo {
            from {
              transform:
                rotate(360deg)
                translateX(160px)
                rotate(-360deg);
            }

            to {
              transform:
                rotate(0deg)
                translateX(160px)
                rotate(0deg);
            }
          }

          /* =====================================================
             COMMON
          ===================================================== */

          .section-label {
            color: #1687dc;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 2px;
          }

          .section-title {
            color: #101b30;
            font-weight: 800;
            letter-spacing: -1px;
          }

          .section-description {
            color: #66768a;
            line-height: 1.85;
            font-size: 16px;
          }

          /* =====================================================
             WHY CIIT
          ===================================================== */

          .why-section {
            background: #ffffff;
          }

          .feature-card {
            background: white;
            border: 1px solid #dcebf7;
            border-radius: 24px;
            transition: 0.35s ease;
          }

          .feature-card:hover {
            transform: translateY(-9px);
            border-color: #8fc4e6;
            box-shadow:
              0 22px 45px rgba(25, 83, 125, 0.10);
          }

          .feature-icon {
            width: 58px;
            height: 58px;
            border-radius: 17px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e8f5ff;
            color: #1687dc;
            transition: 0.35s ease;
          }

          .feature-card:hover .feature-icon {
            background: #1687dc !important;
            color: white !important;
            transform:
              rotate(-7deg)
              scale(1.08);
          }

          /* =====================================================
             COURSES
          ===================================================== */

          .courses-section {
            background: #edf7ff;
          }

          .course-card {
            background: white;
            border: 1px solid #dcebf7;
            transition: 0.35s ease;
            overflow: hidden;
          }

          .course-card:hover {
            transform: translateY(-8px);
            border-color: #8fc4e6;
            box-shadow:
              0 25px 50px rgba(25, 83, 125, 0.10);
          }

          .course-icon {
            transition: 0.4s ease;
          }

          .course-card:hover .course-icon {
            transform:
              scale(1.12)
              rotate(5deg);
          }

          .course-link {
            color: #1687dc;
            transition: 0.3s ease;
          }

          .course-link:hover {
            color: #0d6eae;
          }

          /* =====================================================
             LEARNING JOURNEY
          ===================================================== */

          .journey-card {
            background: white;
            border: 1px solid #dcebf7;
            border-radius: 24px;
            transition: 0.35s ease;
          }

          .journey-card:hover {
            transform: translateY(-8px);
            border-color: #9ccced;
            box-shadow:
              0 20px 45px rgba(25, 83, 125, 0.09);
          }

          .journey-number {
            font-size: 3rem;
            font-weight: 900;
            color: #d9ebf8;
            line-height: 1;
            transition: 0.3s ease;
          }

          .journey-card:hover .journey-number {
            color: #1687dc;
          }

          /* =====================================================
             CTA
          ===================================================== */

          .ciit-cta {
            background:
              radial-gradient(
                circle at 10% 20%,
                rgba(255,255,255,0.15),
                transparent 25%
              ),
              radial-gradient(
                circle at 90% 80%,
                rgba(255,255,255,0.12),
                transparent 25%
              ),
              linear-gradient(
                135deg,
                #0e3458,
                #1687dc
              );
            overflow: hidden;
            position: relative;
            box-shadow:
              0 25px 60px rgba(25, 83, 125, 0.17);
          }

          .cta-circle {
            position: absolute;
            width: 220px;
            height: 220px;
            border: 1px solid rgba(255,255,255,0.18);
            border-radius: 50%;
          }

          .cta-circle-one {
            right: -80px;
            top: -100px;
          }

          .cta-circle-two {
            left: -100px;
            bottom: -130px;
          }

          .cta-button {
            background: white;
            color: #123b66;
            border: none;
            transition: 0.3s ease;
          }

          .cta-button:hover {
            background: #eef8ff;
            color: #123b66;
            transform: translateY(-4px);
            box-shadow:
              0 15px 30px rgba(0,0,0,.15);
          }

          /* =====================================================
             MOBILE
          ===================================================== */

          @media (max-width: 991px) {

            .ciit-hero {
              min-height: auto;
              padding: 90px 0 100px;
            }

            .hero-visual {
              margin-top: 25px;
            }

            .floating-card {
              display: none;
            }
          }

          @media (max-width: 767px) {

            .hero-title {
              font-size: 3.2rem;
              letter-spacing: -1.5px;
            }

            .hero-description {
              font-size: 16px;
            }

            .hero-card {
              width: 100% !important;
              max-width: 330px;
            }

            .ciit-cta {
              border-radius: 28px !important;
            }
          }
        `}
      </style>

      <div className="ciit-home">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="ciit-hero">

          <div className="hero-decoration hero-ring"></div>
          <div className="hero-decoration hero-small-circle"></div>
          <div className="hero-decoration hero-dot"></div>

          <div className="container position-relative py-5">

            <div className="row align-items-center g-5">

              {/* LEFT */}
              <div
                className={`col-lg-7 hero-content ${
                  visible ? "show" : ""
                }`}
              >

                <div className="hero-badge mb-4">

                  <span
                    className="rounded-circle"
                    style={{
                      width: "9px",
                      height: "9px",
                      background: "#1687dc",
                    }}
                  ></span>

                  <span>
                    Career Focused Learning Institute
                  </span>

                </div>

                <h1 className="hero-title mb-4">
                  Learn Today.
                  <br />
                  <span>Build Your Career.</span>
                  <br />
                  Grow With CIIT.
                </h1>

                <div className="hero-line mb-4"></div>

                <p className="hero-description mb-4">
                  Learn practical technology skills through
                  industry-oriented courses, real projects and
                  career-focused training designed to help you move
                  confidently towards your professional goals.
                </p>

                <div className="d-flex flex-wrap gap-3">

                  <Link
                    to="/courses"
                    className="btn btn-lg rounded-pill px-4 fw-bold ciit-blue-btn"
                  >
                    Explore Courses
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>

                  <Link
                    to="/contact"
                    className="btn btn-lg rounded-pill px-4 fw-bold ciit-outline-btn"
                  >
                    Talk to CIIT
                    <i className="bi bi-chat-dots ms-2"></i>
                  </Link>

                </div>

                {/* MINI STATS */}

                <div className="row g-3 mt-5">

                  <div className="col-4">
                    <div className="number-card">
                      <h4 className="fw-bold mb-1">
                        10+
                      </h4>

                      <small className="text-secondary">
                        Career Courses
                      </small>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="number-card">
                      <h4 className="fw-bold mb-1">
                        1000+
                      </h4>

                      <small className="text-secondary">
                        Learners
                      </small>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="number-card">
                      <h4 className="fw-bold mb-1">
                        100%
                      </h4>

                      <small className="text-secondary">
                        Practical Focus
                      </small>
                    </div>
                  </div>

                </div>

              </div>

              {/* RIGHT */}

              <div className="col-lg-5 hero-visual">

                <div
                  className="position-relative d-flex justify-content-center align-items-center"
                  style={{
                    minHeight: "430px",
                  }}
                >

                  {/* ORBIT */}

                  <div
                    className="orbit-one position-absolute rounded-circle"
                    style={{
                      width: "16px",
                      height: "16px",
                      background: "#1687dc",
                      opacity: 0.8,
                    }}
                  ></div>

                  <div
                    className="orbit-two position-absolute rounded-circle"
                    style={{
                      width: "12px",
                      height: "12px",
                      background: "#54a9e4",
                    }}
                  ></div>

                  {/* MAIN CARD */}

                  <div
                    className="hero-card bg-white rounded-5 shadow-lg p-4 position-relative"
                    style={{
                      width: "330px",
                      minHeight: "350px",
                      zIndex: 2,
                    }}
                  >

                    <div className="d-flex justify-content-between align-items-center mb-4">

                      <div>

                        <small className="text-secondary">
                          Welcome to
                        </small>

                        <h4 className="fw-bold mb-0">
                          CIIT Institute
                        </h4>

                      </div>

                      <div className="hero-icon">

                        <i className="bi bi-mortarboard-fill fs-4"></i>

                      </div>

                    </div>

                    <div className="hero-card-top rounded-4 p-4 mb-3">

                      <div className="d-flex align-items-center gap-3">

                        <div
                          className="rounded-4 d-flex align-items-center justify-content-center"
                          style={{
                            width: "55px",
                            height: "55px",
                            background: "#1687dc",
                            color: "white",
                          }}
                        >
                          <i className="bi bi-code-slash fs-3"></i>
                        </div>

                        <div>

                          <h6 className="fw-bold mb-1">
                            Technology Skills
                          </h6>

                          <small className="text-secondary">
                            Learn. Practice. Build.
                          </small>

                        </div>

                      </div>

                    </div>

                    <div className="mb-3">

                      <div className="d-flex justify-content-between mb-2">

                        <small className="fw-semibold">
                          Learning Progress
                        </small>

                        <small
                          className="fw-bold"
                          style={{
                            color: "#1687dc",
                          }}
                        >
                          80%
                        </small>

                      </div>

                      <div
                        className="progress"
                        style={{
                          height: "8px",
                        }}
                      >

                        <div
                          className="progress-bar"
                          style={{
                            width: "80%",
                            background:
                              "linear-gradient(90deg, #1687dc, #54a9e4)",
                          }}
                        ></div>

                      </div>

                    </div>

                    <div className="d-flex gap-2 mt-4">

                      <span className="badge bg-light text-dark p-2">
                        Projects
                      </span>

                      <span className="badge bg-light text-dark p-2">
                        Skills
                      </span>

                      <span className="badge bg-light text-dark p-2">
                        Career
                      </span>

                    </div>

                  </div>

                  {/* FLOATING CARD */}

                  <div
                    className="floating-card position-absolute bg-white rounded-4 shadow p-3"
                    style={{
                      right: "-5px",
                      bottom: "35px",
                      zIndex: 3,
                      border: "1px solid #dcebf7",
                    }}
                  >

                    <div className="d-flex align-items-center gap-2">

                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "42px",
                          height: "42px",
                          background: "#e8f5ff",
                          color: "#1687dc",
                        }}
                      >
                        <i className="bi bi-check-lg fs-5"></i>
                      </div>

                      <div>

                        <small className="text-secondary d-block">
                          Skill Completed
                        </small>

                        <strong className="small">
                          Ready for Next Step
                        </strong>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            WHY CIIT
        ===================================================== */}

        <section className="why-section py-5">

          <div className="container py-lg-5">

            <div className="text-center mb-5">

              <div className="section-label mb-3">
                WHY CIIT
              </div>

              <h2 className="section-title display-5 mb-3">
                More Than Just Training
              </h2>

              <p
                className="section-description mx-auto"
                style={{
                  maxWidth: "680px",
                }}
              >
                We focus on practical knowledge, real-world
                projects and career-oriented learning so students
                can turn their skills into opportunities.
              </p>

            </div>

            <div className="row g-4">

              {[
                {
                  icon: "bi-laptop",
                  title: "Practical Learning",
                  text:
                    "Learn concepts by working on practical exercises and real project scenarios.",
                },
                {
                  icon: "bi-briefcase",
                  title: "Career Focus",
                  text:
                    "Build technical and professional skills aligned with today's job requirements.",
                },
                {
                  icon: "bi-people",
                  title: "Expert Guidance",
                  text:
                    "Get guidance throughout your learning journey from experienced trainers.",
                },
                {
                  icon: "bi-rocket-takeoff",
                  title: "Industry Ready",
                  text:
                    "Develop confidence, projects and skills that help you prepare for your career.",
                },
              ].map((item) => (

                <div
                  className="col-md-6 col-lg-3"
                  key={item.title}
                >

                  <div className="feature-card h-100 p-4">

                    <div className="feature-icon mb-4">

                      <i
                        className={`bi ${item.icon} fs-4`}
                      ></i>

                    </div>

                    <h5 className="fw-bold mb-3">
                      {item.title}
                    </h5>

                    <p className="text-secondary mb-0 lh-lg">
                      {item.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            COURSES
        ===================================================== */}

        <section className="courses-section py-5">

          <div className="container py-lg-5">

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-5">

              <div>

                <div className="section-label mb-3">
                  POPULAR LEARNING
                </div>

                <h2 className="section-title display-5 mb-2">
                  Explore Our Courses
                </h2>

                <p className="section-description mb-0">
                  Learn the skills that can move your career forward.
                </p>

              </div>

              <Link
                to="/courses"
                className="btn rounded-pill px-4 ciit-outline-btn"
              >
                View All Courses
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>

            </div>

            <div className="row g-4">

              {[
                {
                  icon: "bi-code-square",
                  title: "Full Stack Development",
                  text:
                    "Build modern web applications and understand frontend, backend and databases.",
                  color: "#1687dc",
                },
                {
                  icon: "bi-file-earmark-bar-graph",
                  title: "Data Analytics",
                  text:
                    "Learn data handling, analysis, visualization and practical business insights.",
                  color: "#1687dc",
                },
                {
                  icon: "bi-phone",
                  title: "Mobile Development",
                  text:
                    "Create modern mobile applications with practical development experience.",
                  color: "#1687dc",
                },
                {
                  icon: "bi-database",
                  title: "Database & SQL",
                  text:
                    "Understand databases, SQL queries, data management and real-world use cases.",
                  color: "#1687dc",
                },
              ].map((course) => (

                <div
                  className="col-md-6 col-lg-3"
                  key={course.title}
                >

                  <div className="course-card h-100 rounded-4 p-4">

                    <div
                      className="course-icon rounded-4 d-flex align-items-center justify-content-center mb-4"
                      style={{
                        width: "62px",
                        height: "62px",
                        background: "#e8f5ff",
                        color: course.color,
                      }}
                    >

                      <i
                        className={`bi ${course.icon} fs-3`}
                      ></i>

                    </div>

                    <h5 className="fw-bold mb-3">
                      {course.title}
                    </h5>

                    <p className="text-secondary small mb-4 lh-lg">
                      {course.text}
                    </p>

                    <Link
                      to="/courses"
                      className="text-decoration-none fw-semibold course-link"
                    >
                      Explore
                      <i className="bi bi-arrow-up-right ms-2"></i>
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            LEARNING JOURNEY
        ===================================================== */}

        <section className="py-5 bg-white">

          <div className="container py-lg-5">

            <div className="text-center mb-5">

              <div className="section-label mb-3">
                YOUR JOURNEY
              </div>

              <h2 className="section-title display-5 mb-3">
                Learn. Build. Prepare. Grow.
              </h2>

              <p
                className="section-description mx-auto"
                style={{
                  maxWidth: "650px",
                }}
              >
                A simple learning journey designed to take you
                from understanding concepts to building confidence
                for your career.
              </p>

            </div>

            <div className="row g-4">

              {[
                {
                  number: "01",
                  title: "Learn",
                  text:
                    "Understand concepts with structured classroom and practical learning.",
                },
                {
                  number: "02",
                  title: "Practice",
                  text:
                    "Strengthen your knowledge through exercises and hands-on activities.",
                },
                {
                  number: "03",
                  title: "Build",
                  text:
                    "Work on projects that help you apply your knowledge in real situations.",
                },
                {
                  number: "04",
                  title: "Grow",
                  text:
                    "Prepare yourself for interviews, opportunities and continuous learning.",
                },
              ].map((step) => (

                <div
                  className="col-md-6 col-lg-3"
                  key={step.number}
                >

                  <div className="journey-card p-4 h-100">

                    <div className="journey-number mb-4">
                      {step.number}
                    </div>

                    <h5 className="fw-bold mb-3">
                      {step.title}
                    </h5>

                    <p className="text-secondary mb-0 lh-lg">
                      {step.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="py-5 bg-white">

          <div className="container py-lg-4">

            <div className="ciit-cta rounded-5 p-4 p-md-5">

              <div className="cta-circle cta-circle-one"></div>
              <div className="cta-circle cta-circle-two"></div>

              <div className="row align-items-center position-relative">

                <div className="col-lg-8 text-white">

                  <div className="small fw-bold mb-3 opacity-75">
                    START YOUR JOURNEY
                  </div>

                  <h2 className="fw-bold display-6 mb-3">
                    Ready to Build Your Future With CIIT?
                  </h2>

                  <p className="mb-0 opacity-75 lh-lg">
                    Explore our courses and take the next step
                    towards developing practical technology skills.
                  </p>

                </div>

                <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

                  <Link
                    to="/contact"
                    className="btn btn-light btn-lg rounded-pill px-4 fw-bold cta-button"
                  >
                    Get Started
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>
    </>
  );
}

export default Home;