import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* =========================================================
   TYPES
========================================================= */

type CourseDomain = {
  id: string;
  name: string;
  icon: string;
  color: string;
  image: string;
  description: string;
  path: string;
};

/* =========================================================
   7 MAIN CIIT COURSE DOMAINS
========================================================= */

const courseDomains: CourseDomain[] = [
  {
    id: "full-stack",
    name: "Full Stack Development",
    icon: "bi bi-code-slash",
    color: "#1687dc",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=85",
    description:
      "Build modern web applications with .NET, Java, Python and modern full stack technologies.",
    path: "/courses/full-stack",
  },

  {
    id: "data-science",
    name: "Data Science & AI",
    icon: "bi bi-bar-chart-line",
    color: "#7c4dff",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=85",
    description:
      "Learn data science, analytics, machine learning, business analytics and Generative AI.",
    path: "/courses/data-science",
  },

  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    icon: "bi bi-cloud",
    color: "#1687dc",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=85",
    description:
      "Learn cloud platforms and DevOps engineering with Azure, AWS and GCP.",
    path: "/courses/cloud-devops",
  },

  {
    id: "software-testing",
    name: "Software Testing",
    icon: "bi bi-shield-check",
    color: "#20a36a",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85",
    description:
      "Develop practical testing skills with manual and automation testing technologies.",
    path: "/courses/software-testing",
  },

  {
    id: "database",
    name: "Database",
    icon: "bi bi-database",
    color: "#1687dc",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=700&q=85",
    description:
      "Learn database administration and SQL technologies for professional development.",
    path: "/courses/database",
  },

  {
    id: "digital-marketing",
    name: "Digital Marketing",
    icon: "bi bi-megaphone",
    color: "#e85aad",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=700&q=85",
    description:
      "Learn digital marketing, SEO, social media and online marketing strategies.",
    path: "/courses/digital-marketing",
  },

  {
    id: "short-term",
    name: "Short Term Training",
    icon: "bi bi-lightning-charge",
    color: "#f39c12",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=700&q=85",
    description:
      "Upgrade your programming and database skills with focused short-term training.",
    path: "/courses/short-term",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Courses() {
  return (
    <div className="ciit-courses">
      <style>{`

        .ciit-courses {
          min-height: 100vh;
          background: #f5faff;
          color: #18324b;
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

        .courses-hero {
          position: relative;
          padding: 75px 0 70px;

          background:
            radial-gradient(
              circle at 88% 18%,
              rgba(22,135,220,.15),
              transparent 28%
            ),
            radial-gradient(
              circle at 8% 85%,
              rgba(22,135,220,.08),
              transparent 26%
            ),
            linear-gradient(
              135deg,
              #ffffff 0%,
              #f3faff 55%,
              #eaf6ff 100%
            );
        }

        .courses-hero-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 55px;
        }

        .courses-hero-content {
          flex: 1;
          min-width: 0;
        }

        .courses-hero-visual {
          width: 46%;
          flex-shrink: 0;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .courses-hero-image-box {
          width: 100%;
          max-width: 560px;
          height: 390px;
          border-radius: 32px;
          overflow: hidden;
          position: relative;

          background: #ffffff;
          border: 1px solid rgba(190,222,243,.8);

          box-shadow:
            0 25px 60px rgba(25,94,137,.13);
        }

        .courses-hero-image-box::before {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 25px solid rgba(255,255,255,.22);
          right: -55px;
          top: -55px;
          z-index: 2;
        }

        .courses-hero-image-box::after {
          content: "";
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(22,135,220,.13);
          left: -35px;
          bottom: -35px;
        }

        .courses-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .6s ease;
        }

        .courses-hero-image-box:hover .courses-hero-image {
          transform: scale(1.04);
        }

        .hero-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              135deg,
              rgba(8,123,201,.04),
              rgba(255,255,255,.02)
            );

          z-index: 1;
          pointer-events: none;
        }

        /* =====================================================
           FLOATING CARD
        ===================================================== */

        .hero-floating-card {
          position: absolute;
          left: -28px;
          bottom: 28px;
          z-index: 5;

          display: flex;
          align-items: center;
          gap: 11px;

          padding: 14px 18px;

          background: rgba(255,255,255,.96);

          border: 1px solid #dcebf7;
          border-radius: 15px;

          box-shadow:
            0 15px 35px rgba(31,91,130,.12);
        }

        .hero-floating-icon {
          width: 42px;
          height: 42px;

          border-radius: 12px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #e9f5ff;
          color: #1687dc;

          font-size: 18px;
        }

        .hero-floating-text strong {
          display: block;

          color: #16334d;

          font-size: 13px;
          font-weight: 800;
        }

        .hero-floating-text span {
          display: block;

          color: #75879a;

          font-size: 11px;
          margin-top: 2px;
        }

        /* =====================================================
           LABEL
        ===================================================== */

        .courses-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 8px 14px;

          border-radius: 50px;

          background: #e9f5ff;
          color: #1687dc;

          font-size: 12px;
          font-weight: 800;

          letter-spacing: 1.5px;
        }

        /* =====================================================
           TITLE
        ===================================================== */

        .courses-title {
          margin-top: 22px;

          font-size: clamp(2.8rem,5vw,5rem);
          line-height: .98;

          font-weight: 850;

          letter-spacing: -3px;

          color: #101b30;
        }

        .courses-title span {
          color: #1687dc;
        }

        .courses-description {
          max-width: 700px;

          margin-top: 25px;

          color: #59697e;

          font-size: 17px;
          line-height: 1.8;
        }

        .course-count {
          margin-top: 30px;

          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 12px 18px;

          border-radius: 14px;

          background: #ffffff;

          border: 1px solid #dcebf7;

          color: #164a73;

          font-weight: 700;

          box-shadow:
            0 10px 30px rgba(24,80,120,.06);
        }

        /* =====================================================
           SECTION
        ===================================================== */

        .courses-section {
          padding: 80px 0 85px;
        }

        .section-label {
          color: #1687dc;

          font-size: 12px;
          font-weight: 800;

          letter-spacing: 2px;

          text-transform: uppercase;

          margin-bottom: 10px;
        }

        .section-heading {
          color: #101b30;

          font-weight: 800;

          letter-spacing: -1px;

          margin-bottom: 12px;
        }

        .section-text {
          color: #66768a;

          line-height: 1.8;

          max-width: 850px;

          margin-bottom: 42px;
        }

        /* =====================================================
           DOMAIN CARD
        ===================================================== */

        .domain-link {
          display: block;

          height: 100%;

          text-decoration: none;

          color: inherit;
        }

        .domain-card {
          height: 100%;

          background: #ffffff;

          border: 1px solid #dcebf7;

          border-radius: 24px;

          overflow: hidden;

          position: relative;

          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;

          box-shadow:
            0 10px 35px rgba(31,91,130,.05);
        }

        .domain-link:hover .domain-card {
          transform: translateY(-7px);

          border-color: #b9ddf5;

          box-shadow:
            0 20px 48px rgba(31,91,130,.13);
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .domain-image {
          width: 100%;
          height: 215px;

          overflow: hidden;

          position: relative;

          background: #eaf6ff;
        }

        .domain-image::after {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,0) 40%,
              rgba(9,39,65,.22)
            );
        }

        .domain-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;

          transition: transform .5s ease;
        }

        .domain-link:hover .domain-image img {
          transform: scale(1.06);
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .domain-content {
          padding: 24px;
          position: relative;
        }

        .domain-small-label {
          display: inline-flex;

          align-items: center;
          gap: 7px;

          color: #1687dc;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 1px;

          text-transform: uppercase;

          margin-bottom: 9px;
        }

        .domain-title {
          margin: 0 0 10px;

          font-size: 21px;

          line-height: 1.25;

          font-weight: 800;

          color: #14253a;
        }

        .domain-description {
          margin: 0;

          color: #69798d;

          font-size: 13px;

          line-height: 1.65;

          padding-right: 30px;
        }

        .domain-arrow {
          position: absolute;

          right: 22px;
          bottom: 22px;

          width: 38px;
          height: 38px;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #eaf6ff;

          color: #1687dc;

          transition: .25s ease;
        }

        .domain-link:hover .domain-arrow {
          background: #1687dc;
          color: #ffffff;

          transform: translateX(3px);
        }

        /* =====================================================
           CTA
        ===================================================== */

        .courses-cta {
          margin-top: 55px;

          padding: 50px;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              #0e3458,
              #1687dc
            );

          color: white;

          position: relative;

          overflow: hidden;
        }

        .courses-cta::after {
          content: "";

          position: absolute;

          width: 230px;
          height: 230px;

          right: -100px;
          top: -110px;

          border-radius: 50%;

          border: 35px solid rgba(255,255,255,.08);
        }

        .courses-cta h2 {
          font-weight: 800;

          letter-spacing: -1px;

          position: relative;

          z-index: 2;
        }

        .courses-cta p {
          color: rgba(255,255,255,.78);

          line-height: 1.8;

          max-width: 650px;

          position: relative;

          z-index: 2;
        }

        .cta-button {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          padding: 13px 22px;

          border-radius: 12px;

          background: #ffffff;

          color: #12517e;

          text-decoration: none;

          font-weight: 800;

          margin-top: 15px;

          transition: .25s ease;

          position: relative;

          z-index: 2;
        }

        .cta-button:hover {
          color: #12517e;

          transform: translateY(-2px);

          box-shadow:
            0 10px 25px rgba(0,0,0,.12);
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 991px) {

          .courses-hero {
            padding: 65px 0 60px;
          }

          .courses-hero-row {
            gap: 35px;
          }

          .courses-hero-visual {
            width: 43%;
          }

          .courses-hero-image-box {
            height: 320px;
          }

          .hero-floating-card {
            left: -15px;
            bottom: 18px;
          }

          .courses-section {
            padding: 65px 0;
          }

          .domain-image {
            height: 190px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .courses-hero {
            padding: 55px 0 50px;
          }

          .courses-hero-row {
            display: block;
          }

          .courses-hero-content {
            width: 100%;
          }

          .courses-hero-visual {
            width: 100%;
            margin-top: 40px;
          }

          .courses-hero-image-box {
            max-width: 100%;
            height: 280px;

            border-radius: 25px;
          }

          .hero-floating-card {
            left: 15px;
            bottom: 15px;
          }

          .courses-title {
            font-size: clamp(2.5rem,12vw,4rem);
            letter-spacing: -2px;
          }

          .courses-description {
            font-size: 15px;
          }

          .courses-section {
            padding: 55px 0;
          }

          .section-text {
            margin-bottom: 30px;
          }

          .domain-image {
            height: 190px;
          }

          .domain-content {
            padding: 20px;
          }

          .domain-title {
            font-size: 18px;
          }

          .courses-cta {
            padding: 35px 24px;
            border-radius: 24px;
          }
        }

        @media (max-width: 420px) {

          .courses-hero-image-box {
            height: 230px;
          }

          .hero-floating-card {
            padding: 10px 13px;
          }

          .hero-floating-icon {
            width: 36px;
            height: 36px;
          }

          .hero-floating-text strong {
            font-size: 11px;
          }

          .hero-floating-text span {
            font-size: 9px;
          }

          .domain-image {
            height: 165px;
          }
        }

      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="courses-hero">
        <div className="container">

          <div className="courses-hero-row">

            <motion.div
              className="courses-hero-content"
              initial={{
                opacity: 0,
                x: -25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >

              <div className="courses-label">
                <i className="bi bi-mortarboard-fill"></i>
                CIIT TRAINING PROGRAMS
              </div>

              <h1 className="courses-title">
                Learn Skills.
                <br />
                Build Your <span>Career.</span>
              </h1>

              <p className="courses-description">
                Explore CIIT's practical technology training programs
                designed around industry skills, hands-on learning
                and project-based experience.
              </p>

              <div className="course-count">
                <i className="bi bi-grid-3x3-gap-fill"></i>

                {courseDomains.length} Main Learning Domains
              </div>

            </motion.div>

            <motion.div
              className="courses-hero-visual"
              initial={{
                opacity: 0,
                x: 35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
            >

              <div className="courses-hero-image-box">

                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1100&q=90"
                  alt="CIIT Technology Training"
                  className="courses-hero-image"
                />

                <div className="hero-image-overlay"></div>

              </div>

              <motion.div
                className="hero-floating-card"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                }}
              >

                <div className="hero-floating-icon">
                  <i className="bi bi-laptop"></i>
                </div>

                <div className="hero-floating-text">
                  <strong>Practical Learning</strong>
                  <span>Skills • Projects • Career</span>
                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN DOMAINS
      ===================================================== */}

      <section className="courses-section">

        <div className="container">

          <div className="section-label">
            Explore Programs
          </div>

          <h2 className="section-heading display-5">
            Choose Your Learning Path
          </h2>

          <p className="section-text">
            Choose a learning domain to explore its technologies
            and available CIIT training programs.
          </p>

          <div className="row g-4">

            {courseDomains.map((domain, index) => (

              <div
                className="col-xl-4 col-lg-6 col-md-6"
                key={domain.id}
              >

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    delay: (index % 3) * 0.08,
                  }}
                  className="h-100"
                >

                  <Link
                    to={domain.path}
                    className="domain-link"
                  >

                    <div className="domain-card">

                      <div className="domain-image">

                        <img
                          src={domain.image}
                          alt={domain.name}
                          loading="lazy"
                        />

                      </div>

                      <div className="domain-content">

                        <div className="domain-small-label">

                          <i
                            className={domain.icon}
                            style={{
                              color: domain.color,
                            }}
                          ></i>

                          CIIT PROGRAM

                        </div>

                        <h3 className="domain-title">
                          {domain.name}
                        </h3>

                        <p className="domain-description">
                          {domain.description}
                        </p>

                        <div className="domain-arrow">

                          <i className="bi bi-arrow-right"></i>

                        </div>

                      </div>

                    </div>

                  </Link>

                </motion.div>

              </div>

            ))}

          </div>

          {/* =================================================
              CTA
          ================================================= */}

          <div className="courses-cta">

            <div className="row align-items-center">

              <div className="col-lg-8">

                <h2>
                  Not sure which course is right
                  for you?
                </h2>

                <p className="mb-0 mt-3">
                  Talk to the CIIT team and understand
                  the suitable learning path based on
                  your education, skills and career goals.
                </p>

              </div>

              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

                <Link
                  to="/contact"
                  className="cta-button"
                >
                  Talk to CIIT
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}