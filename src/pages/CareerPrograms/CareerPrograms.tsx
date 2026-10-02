import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function CareerPrograms() {
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
        {/* Decorative Circle */}
        <div
          style={{
            position: "absolute",
            width: 280,
            height: 280,
            borderRadius: "50%",
            border: "44px solid rgba(22,135,220,0.06)",
            top: -110,
            right: -80,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 190,
            height: 190,
            borderRadius: "50%",
            border: "28px solid rgba(22,135,220,0.05)",
            bottom: -90,
            left: -70,
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
                  <i className="bi bi-briefcase" />
                  Career Development
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
                  Career Programs
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
                  Build the knowledge, skills and professional capabilities
                  needed to develop a strong and successful career.
                </p>

                <a
                  href="#career-overview"
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
                    textDecoration: "none",
                  }}
                >
                  Explore Career Overview

                  <i
                    className="bi bi-arrow-down ms-2"
                    style={{ fontSize: 13 }}
                  />
                </a>
              </motion.div>
            </div>

            {/* =================================================
                RIGHT IMAGE
            ================================================= */}
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
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                  alt="Career Programs"
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
                    minWidth: 245,
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      marginBottom: 4,
                    }}
                  >
                    Career Development
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.78)",
                    }}
                  >
                    Knowledge • Skills • Career Growth
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAREER OVERVIEW
      ===================================================== */}
      <section
        id="career-overview"
        style={{
          padding: "82px 0 95px",
          background: "#f5faff",
        }}
      >
        <div className="container">
          {/* =================================================
              SECTION HEADING
          ================================================= */}
          <div
            className="text-center"
            style={{
              maxWidth: 800,
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
              Career Overview
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
              Building a Successful Career
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#687d90",
                marginBottom: 0,
              }}
            >
              Career preparation begins much before a person starts working.
              CIIT focuses on the different stages that help an individual
              progress throughout the career lifecycle.
            </p>
          </div>

          {/* =================================================
              MAIN CAREER OVERVIEW
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            style={{
              maxWidth: 1050,
              margin: "0 auto",
              background: "#fff",
              border: "1px solid #dcebf7",
              borderRadius: 26,
              padding: "38px 42px",
              boxShadow: "0 14px 40px rgba(31,88,122,0.07)",
            }}
          >
            <h3
              style={{
                fontSize: 25,
                fontWeight: 800,
                color: "#18324b",
                marginBottom: 20,
              }}
            >
              Career Overview
            </h3>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "#60758a",
                marginBottom: 18,
              }}
            >
              If one were to ask when a person’s career starts, the most
              common answer would be, ‘with his first job’. But if the
              question was, ‘when does the preparation for one’s career
              start’, there might not be as clear-cut an answer. Career is
              often defined as the general course or progression of one’s
              working life or one’s professional achievements. However, the
              preparation for any career, irrespective of how successful it
              is, starts much before one actually starts working.
            </p>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "#60758a",
                marginBottom: 0,
              }}
            >
              CIIT INSTITUTE. has identified three distinct stages in a
              person’s career, each stage being equally important on the path
              to vocational self actualization. The three stages are, (1)
              Knowledge Enablement, (2) Employability Enhancement and (3) Job
              Effectiveness & Efficiency.
            </p>
          </motion.div>

          {/* =================================================
              THREE CAREER STAGES
          ================================================= */}
          <div
            className="row g-4"
            style={{
              maxWidth: 1050,
              margin: "34px auto 0",
            }}
          >
            {[
              {
                number: "01",
                icon: "bi bi-lightbulb",
                title: "Knowledge Enablement",
                text: "Develop life skills and career foundation skills during the pre-job and early career stages.",
              },
              {
                number: "02",
                icon: "bi bi-person-check",
                title: "Employability Enhancement",
                text: "Develop the skills required to get and keep a job through qualifications, aptitude, communication and technical competency.",
              },
              {
                number: "03",
                icon: "bi bi-graph-up-arrow",
                title: "Job Effectiveness & Efficiency",
                text: "Strengthen professional skills and capabilities to perform better and progress throughout the career.",
              },
            ].map((stage, index) => (
              <motion.div
                key={stage.number}
                className="col-md-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: 22,
                    padding: 25,
                    boxShadow: "0 10px 30px rgba(31,88,122,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: 55,
                      height: 55,
                      borderRadius: 16,
                      background: "#e8f5ff",
                      color: "#1687dc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 23,
                      marginBottom: 18,
                    }}
                  >
                    <i className={stage.icon} />
                  </div>

                  <div
                    style={{
                      fontSize: 11,
                      color: "#1687dc",
                      fontWeight: 800,
                      letterSpacing: "1px",
                      marginBottom: 6,
                    }}
                  >
                    STAGE {stage.number}
                  </div>

                  <h4
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#18324b",
                      marginBottom: 10,
                    }}
                  >
                    {stage.title}
                  </h4>

                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: "#71869a",
                      marginBottom: 0,
                    }}
                  >
                    {stage.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* =================================================
              KNOWLEDGE ENABLEMENT
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              maxWidth: 1050,
              margin: "34px auto 0",
              background: "#fff",
              border: "1px solid #dcebf7",
              borderRadius: 24,
              padding: "32px 36px",
              boxShadow: "0 12px 34px rgba(31,88,122,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "#e8f5ff",
                  color: "#1687dc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  flexShrink: 0,
                }}
              >
                <i className="bi bi-lightbulb" />
              </div>

              <h3
                style={{
                  fontSize: 23,
                  fontWeight: 800,
                  color: "#18324b",
                  margin: 0,
                }}
              >
                Knowledge Enablement
              </h3>
            </div>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "#60758a",
                marginBottom: 0,
              }}
            >
              Knowledge Enablement typically happens during the pre-job and
              early career stages. It is during these years that one can
              develop life skills and career foundation skills, which will
              have a long-term impact on the shape that one’s career takes.
              Language, communication, logical, mathematical, IT foundation
              skills etc. are enabling skills that help one assimilate
              knowledge, analyze it, and communicate one’s thoughts and ideas
              effectively. These vital skills are the absolute bedrock of a
              successful career.
            </p>
          </motion.div>

          {/* =================================================
              EMPLOYABILITY ENHANCEMENT
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              maxWidth: 1050,
              margin: "24px auto 0",
              background: "#fff",
              border: "1px solid #dcebf7",
              borderRadius: 24,
              padding: "32px 36px",
              boxShadow: "0 12px 34px rgba(31,88,122,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "#e8f5ff",
                  color: "#1687dc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  flexShrink: 0,
                }}
              >
                <i className="bi bi-person-check" />
              </div>

              <h3
                style={{
                  fontSize: 23,
                  fontWeight: 800,
                  color: "#18324b",
                  margin: 0,
                }}
              >
                Employability Enhancement
              </h3>
            </div>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "#60758a",
                marginBottom: 0,
              }}
            >
              Employability enhancement focuses on the skills required to get
              and keep one’s job, typically one’s first job. Employability is
              a result of Robust Educational Qualifications, Right Attitude,
              Strong Aptitude and Interest, Effective Communication Skills,
              Technical Competency, Relevant Global Certifications, and
              Demonstrable Project or Work Experience.
            </p>
          </motion.div>

          {/* =================================================
              EFFECTIVENESS & EFFICIENCY
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              maxWidth: 1050,
              margin: "24px auto 0",
              background: "#fff",
              border: "1px solid #dcebf7",
              borderRadius: 24,
              padding: "32px 36px",
              boxShadow: "0 12px 34px rgba(31,88,122,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "#e8f5ff",
                  color: "#1687dc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  flexShrink: 0,
                }}
              >
                <i className="bi bi-graph-up-arrow" />
              </div>

              <h3
                style={{
                  fontSize: 23,
                  fontWeight: 800,
                  color: "#18324b",
                  margin: 0,
                }}
              >
                Effectiveness and Efficiency in the Career Life Cycle
              </h3>
            </div>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "#60758a",
                marginBottom: 18,
              }}
            >
              Paradigm refer simply to a set of skills that help the
              individual do a better job. These would typically be relevant
              once the person has gained initial employment and is looking for
              a career step-up. At this stage, the focus of career development
              shifts from basic issues of vocational identity to acquiring
              sharpness in skills or education or opportunity. Individuals,
              through CIIT training edge, can re-focus on shaping their
              vocational identity consistent with their deepest, wisest self.
            </p>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "#60758a",
                marginBottom: 18,
              }}
            >
              We identify our value proposition to knowledge seekers as a
              company that provides essential support through appropriate
              training intervention to an individual throughout his/her
              career lifecycle.
            </p>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "#60758a",
                marginBottom: 0,
              }}
            >
              From an employer’s perspective, the Career Lifecycle is a
              natural reflection of the belief that employees of an
              organization are it's most valuable asset and that effectively
              managing their Career Lifecycle is vital to the organization’s
              success. Employees who are given the tools to make strong career
              choices are more satisfied, engaged and will positively
              contribute to organization bottom line.
            </p>
          </motion.div>

          {/* =================================================
              HR CHALLENGES
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              maxWidth: 1050,
              margin: "34px auto 0",
              background: "#fff",
              border: "1px solid #dcebf7",
              borderRadius: 24,
              padding: "32px 36px",
              boxShadow: "0 12px 34px rgba(31,88,122,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 22,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "#e8f5ff",
                  color: "#1687dc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  flexShrink: 0,
                }}
              >
                <i className="bi bi-people" />
              </div>

              <h3
                style={{
                  fontSize: 23,
                  fontWeight: 800,
                  color: "#18324b",
                  margin: 0,
                }}
              >
                In our opinion, the main challenges related to skilled HR are
              </h3>
            </div>

            <div>
              {[
                "Adapting to frequent and dynamic changes in resource requirements and projects",
                "Identifying people with Right Skills and Right Attitude",
                "We assess and identify people with right skills and attitude, and then train them on the latest technologies.",
                "We provide skill enhancement programs and consulting for adoption of the new Cutting Edge Technologies.",
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    padding: "13px 0",
                    borderBottom:
                      index !== 3 ? "1px solid #e8f1f6" : "none",
                  }}
                >
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
                      flexShrink: 0,
                      fontSize: 13,
                    }}
                  >
                    <i className="bi bi-check2" />
                  </div>

                  <p
                    style={{
                      margin: 0,
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "#60758a",
                      paddingTop: 3,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}