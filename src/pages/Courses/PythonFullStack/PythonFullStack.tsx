import { Link } from "react-router-dom";

export default function PythonFullStack() {
  return (
    <>
      <style>
        {`
          .python-page {
            min-height: 100vh;
            background:
              radial-gradient(
                circle at 85% 8%,
                rgba(55, 118, 171, 0.13),
                transparent 30%
              ),
              linear-gradient(
                180deg,
                #f7fbff 0%,
                #ffffff 55%,
                #f4faff 100%
              );
            color: #1d2b3a;
            font-family:
              Inter,
              system-ui,
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif;
            overflow: hidden;
          }

          .python-hero {
            position: relative;
            padding: 85px 0 70px;
          }

          .python-hero::before {
            content: "";
            position: absolute;
            width: 430px;
            height: 430px;
            border-radius: 50%;
            border: 75px solid rgba(55, 118, 171, 0.055);
            right: -190px;
            top: -130px;
            animation: pythonFloat 7s ease-in-out infinite;
          }

          .python-hero::after {
            content: "";
            position: absolute;
            width: 175px;
            height: 175px;
            border-radius: 50%;
            background: rgba(255, 212, 59, 0.10);
            left: -85px;
            bottom: 20px;
            animation: pythonFloat 6s ease-in-out infinite reverse;
          }

          @keyframes pythonFloat {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }

            50% {
              transform: translateY(-18px) rotate(5deg);
            }
          }

          .python-content {
            position: relative;
            z-index: 2;
          }

          .python-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 9px 16px;
            border-radius: 30px;
            background: #eef7ff;
            color: #2673a9;
            font-size: 11px;
            font-weight: 850;
            letter-spacing: 1.5px;
            animation: pythonFadeUp 0.7s ease both;
          }

          .python-badge span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #3776ab;
          }

          .python-title {
            margin-top: 22px;
            max-width: 760px;
            font-size: clamp(2.8rem, 6vw, 5.2rem);
            line-height: 0.98;
            font-weight: 850;
            letter-spacing: -3px;
            color: #111d2d;
            animation: pythonFadeUp 0.8s ease 0.1s both;
          }

          .python-title span {
            color: #3776ab;
          }

          .python-description {
            max-width: 690px;
            margin-top: 25px;
            color: #607184;
            font-size: 17px;
            line-height: 1.8;
            animation: pythonFadeUp 0.8s ease 0.2s both;
          }

          .python-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 13px;
            margin-top: 30px;
            animation: pythonFadeUp 0.8s ease 0.3s both;
          }

          .python-primary-btn {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            padding: 14px 24px;
            border-radius: 30px;
            background: linear-gradient(135deg, #3776ab, #2d8ac7);
            color: #ffffff;
            text-decoration: none;
            font-size: 14px;
            font-weight: 800;
            box-shadow: 0 12px 25px rgba(55, 118, 171, 0.23);
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }

          .python-primary-btn:hover {
            color: #ffffff;
            transform: translateY(-4px);
            box-shadow: 0 17px 32px rgba(55, 118, 171, 0.31);
          }

          .python-secondary-btn {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            padding: 14px 24px;
            border-radius: 30px;
            background: #ffffff;
            border: 1px solid #d8e7f2;
            color: #31526d;
            text-decoration: none;
            font-size: 14px;
            font-weight: 800;
            transition:
              transform 0.3s ease,
              border-color 0.3s ease;
          }

          .python-secondary-btn:hover {
            color: #3776ab;
            border-color: #3776ab;
            transform: translateY(-4px);
          }

          .python-visual {
            position: relative;
            z-index: 2;
            min-height: 430px;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pythonVisual 1s ease 0.25s both;
          }

          @keyframes pythonVisual {
            from {
              opacity: 0;
              transform: translateX(50px) scale(0.92);
            }

            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          .python-card {
            position: relative;
            width: 390px;
            min-height: 380px;
            padding: 34px;
            border-radius: 30px;
            background: linear-gradient(145deg, #ffffff, #eef8ff);
            border: 1px solid #d9e8f3;
            box-shadow: 0 30px 70px rgba(30, 70, 100, 0.12);
            overflow: hidden;
          }

          .python-card::before {
            content: "";
            position: absolute;
            width: 220px;
            height: 220px;
            border-radius: 50%;
            background: rgba(55, 118, 171, 0.075);
            right: -90px;
            top: -90px;
          }

          .python-card-top {
            position: relative;
            z-index: 2;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .python-logo-box {
            width: 72px;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            background: linear-gradient(135deg, #3776ab, #2d8ac7);
            color: #ffd43b;
            font-size: 27px;
            font-weight: 900;
            box-shadow: 0 12px 25px rgba(55, 118, 171, 0.25);
          }

          .python-level {
            padding: 8px 13px;
            border-radius: 20px;
            background: #ffffff;
            color: #3776ab;
            font-size: 10px;
            font-weight: 850;
            letter-spacing: 1px;
          }

          .python-card-title {
            position: relative;
            z-index: 2;
            margin-top: 38px;
            color: #111d2d;
            font-size: 28px;
            line-height: 1.15;
            font-weight: 850;
          }

          .python-card-text {
            position: relative;
            z-index: 2;
            margin-top: 12px;
            color: #718092;
            line-height: 1.7;
            font-size: 14px;
          }

          .python-tech-list {
            position: relative;
            z-index: 2;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 25px;
          }

          .python-tech {
            padding: 8px 11px;
            border-radius: 9px;
            background: #ffffff;
            border: 1px solid #dceaf4;
            color: #37536d;
            font-size: 11px;
            font-weight: 750;
          }

          .python-section {
            padding: 80px 0;
          }

          .python-section-label {
            color: #3776ab;
            font-size: 11px;
            font-weight: 850;
            letter-spacing: 2px;
          }

          .python-section-title {
            margin-top: 10px;
            color: #111d2d;
            font-size: clamp(2rem, 4vw, 3.3rem);
            font-weight: 850;
            letter-spacing: -1.5px;
          }

          .python-section-description {
            max-width: 680px;
            margin-top: 14px;
            color: #66778a;
            line-height: 1.8;
          }

          .python-learn-card {
            height: 100%;
            padding: 27px;
            background: #ffffff;
            border: 1px solid #dceaf4;
            border-radius: 22px;
            box-shadow: 0 10px 35px rgba(30, 70, 100, 0.05);
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }

          .python-learn-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 22px 45px rgba(30, 70, 100, 0.11);
          }

          .python-number {
            color: #3776ab;
            font-size: 12px;
            font-weight: 850;
            letter-spacing: 1px;
          }

          .python-learn-card h4 {
            margin-top: 18px;
            color: #1d3044;
            font-size: 18px;
            font-weight: 800;
          }

          .python-learn-card p {
            margin: 10px 0 0;
            color: #718092;
            font-size: 14px;
            line-height: 1.7;
          }

          .python-journey {
            background: #edf7ff;
          }

          .python-step {
            position: relative;
            height: 100%;
            padding: 25px;
            border-radius: 20px;
            background: #ffffff;
            border: 1px solid #dceaf4;
          }

          .python-step-number {
            color: #3776ab;
            font-size: 28px;
            font-weight: 850;
          }

          .python-step h5 {
            margin-top: 14px;
            color: #203247;
            font-weight: 800;
          }

          .python-step p {
            margin: 8px 0 0;
            color: #718092;
            font-size: 13px;
            line-height: 1.65;
          }

          .python-cta {
            padding: 50px;
            border-radius: 30px;
            background: linear-gradient(135deg, #183d5b, #3776ab);
            color: #ffffff;
            overflow: hidden;
            position: relative;
          }

          .python-cta::after {
            content: "";
            position: absolute;
            width: 270px;
            height: 270px;
            border-radius: 50%;
            border: 55px solid rgba(255, 255, 255, 0.055);
            right: -90px;
            top: -105px;
          }

          .python-cta h2 {
            position: relative;
            z-index: 2;
            font-size: clamp(2rem, 4vw, 3.2rem);
            font-weight: 850;
            letter-spacing: -1px;
          }

          .python-cta p {
            position: relative;
            z-index: 2;
            max-width: 650px;
            margin-top: 12px;
            color: rgba(255, 255, 255, 0.79);
            line-height: 1.8;
          }

          .python-cta-btn {
            position: relative;
            z-index: 2;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 22px;
            padding: 13px 22px;
            border-radius: 30px;
            background: #ffffff;
            color: #3776ab;
            text-decoration: none;
            font-weight: 800;
            font-size: 14px;
            transition: transform 0.3s ease;
          }

          .python-cta-btn:hover {
            color: #3776ab;
            transform: translateY(-3px);
          }

          @keyframes pythonFadeUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 991px) {
            .python-hero {
              padding: 65px 0;
            }

            .python-visual {
              margin-top: 35px;
            }

            .python-card {
              width: 100%;
              max-width: 430px;
            }
          }

          @media (max-width: 575px) {
            .python-hero {
              padding: 45px 0;
            }

            .python-title {
              letter-spacing: -1.8px;
            }

            .python-buttons {
              flex-direction: column;
            }

            .python-primary-btn,
            .python-secondary-btn {
              justify-content: center;
            }

            .python-card {
              min-height: 350px;
              padding: 25px;
            }

            .python-cta {
              padding: 30px 24px;
            }
          }
        `}
      </style>

      <main className="python-page">

        {/* HERO */}

        <section className="python-hero">
          <div className="container">
            <div className="row align-items-center g-5">

              <div className="col-lg-7">
                <div className="python-content">

                  <div className="python-badge">
                    <span></span>
                    CIIT CAREER PROGRAM
                  </div>

                  <h1 className="python-title">
                    Python Full Stack
                    <br />
                    <span>Development</span>
                  </h1>

                  <p className="python-description">
                    Learn Python full stack development
                    with Python programming, Django,
                    databases, APIs and frontend technologies
                    through practical project-based learning.
                  </p>

                  <div className="python-buttons">

                    <Link
                      to="/contact"
                      className="python-primary-btn"
                    >
                      Enquire Now
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>

                    <Link
                      to="/courses"
                      className="python-secondary-btn"
                    >
                      <i className="bi bi-arrow-left"></i>
                      All Courses
                    </Link>

                  </div>

                </div>
              </div>


              <div className="col-lg-5">

                <div className="python-visual">

                  <div className="python-card">

                    <div className="python-card-top">

                      <div className="python-logo-box">
                        Py
                      </div>

                      <div className="python-level">
                        FULL STACK
                      </div>

                    </div>

                    <div className="python-card-title">
                      Build Smart
                      <br />
                      Web Applications
                    </div>

                    <p className="python-card-text">
                      Develop modern web applications by
                      combining Python backend development,
                      databases, APIs and frontend technologies.
                    </p>

                    <div className="python-tech-list">

                      <span className="python-tech">
                        Python
                      </span>

                      <span className="python-tech">
                        Django
                      </span>

                      <span className="python-tech">
                        REST API
                      </span>

                      <span className="python-tech">
                        SQL
                      </span>

                      <span className="python-tech">
                        React
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>


        {/* WHAT YOU WILL LEARN */}

        <section className="python-section">

          <div className="container">

            <div className="text-center mb-5">

              <div className="python-section-label">
                COURSE STRUCTURE
              </div>

              <h2 className="python-section-title">
                What You Will Learn
              </h2>

              <p className="python-section-description mx-auto">
                Start with Python programming and progress
                toward backend development, databases, APIs
                and complete full stack applications.
              </p>

            </div>


            <div className="row g-4">

              <div className="col-md-6 col-lg-4">

                <div className="python-learn-card">

                  <div className="python-number">
                    01
                  </div>

                  <h4>
                    Python Programming
                  </h4>

                  <p>
                    Learn variables, data types, conditions,
                    loops, functions, modules, OOP and
                    practical Python programming.
                  </p>

                </div>

              </div>


              <div className="col-md-6 col-lg-4">

                <div className="python-learn-card">

                  <div className="python-number">
                    02
                  </div>

                  <h4>
                    Django Framework
                  </h4>

                  <p>
                    Understand Django structure, views,
                    templates, models, URLs and application
                    development.
                  </p>

                </div>

              </div>


              <div className="col-md-6 col-lg-4">

                <div className="python-learn-card">

                  <div className="python-number">
                    03
                  </div>

                  <h4>
                    Database
                  </h4>

                  <p>
                    Work with SQL databases, tables,
                    relationships, queries and application
                    data management.
                  </p>

                </div>

              </div>


              <div className="col-md-6 col-lg-4">

                <div className="python-learn-card">

                  <div className="python-number">
                    04
                  </div>

                  <h4>
                    REST API
                  </h4>

                  <p>
                    Build APIs and understand how frontend
                    applications communicate with backend
                    services.
                  </p>

                </div>

              </div>


              <div className="col-md-6 col-lg-4">

                <div className="python-learn-card">

                  <div className="python-number">
                    05
                  </div>

                  <h4>
                    Frontend Development
                  </h4>

                  <p>
                    Learn HTML, CSS, JavaScript and modern
                    frontend concepts for interactive web
                    applications.
                  </p>

                </div>

              </div>


              <div className="col-md-6 col-lg-4">

                <div className="python-learn-card">

                  <div className="python-number">
                    06
                  </div>

                  <h4>
                    Full Stack Project
                  </h4>

                  <p>
                    Combine frontend, Python backend and
                    database technologies to create a
                    practical application.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* LEARNING JOURNEY */}

        <section className="python-section python-journey">

          <div className="container">

            <div className="text-center mb-5">

              <div className="python-section-label">
                YOUR LEARNING JOURNEY
              </div>

              <h2 className="python-section-title">
                Learn → Practice → Build → Grow
              </h2>

            </div>


            <div className="row g-4">

              <div className="col-md-6 col-lg-3">

                <div className="python-step">

                  <div className="python-step-number">
                    01
                  </div>

                  <h5>
                    Learn
                  </h5>

                  <p>
                    Understand Python concepts through
                    structured practical learning.
                  </p>

                </div>

              </div>


              <div className="col-md-6 col-lg-3">

                <div className="python-step">

                  <div className="python-step-number">
                    02
                  </div>

                  <h5>
                    Practice
                  </h5>

                  <p>
                    Solve coding exercises and strengthen
                    your Python programming skills.
                  </p>

                </div>

              </div>


              <div className="col-md-6 col-lg-3">

                <div className="python-step">

                  <div className="python-step-number">
                    03
                  </div>

                  <h5>
                    Build
                  </h5>

                  <p>
                    Create backend and full stack projects
                    using Python technologies.
                  </p>

                </div>

              </div>


              <div className="col-md-6 col-lg-3">

                <div className="python-step">

                  <div className="python-step-number">
                    04
                  </div>

                  <h5>
                    Grow
                  </h5>

                  <p>
                    Strengthen your development foundation
                    for real-world opportunities.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* CTA */}

        <section className="python-section">

          <div className="container">

            <div className="python-cta">

              <h2>
                Ready to start your
                <br />
                Python journey?
              </h2>

              <p>
                Explore the Python Full Stack program and
                start developing practical programming and
                web development skills with CIIT.
              </p>

              <Link
                to="/contact"
                className="python-cta-btn"
              >
                Enquire About This Course
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}