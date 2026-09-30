import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

const javaImage =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85";

const benefits = [
  {
    title: "High Demand and Job Opportunities",
    description:
      "Companies, from startups to large enterprises (like those in finance and e-commerce), actively seek developers who can manage entire projects, which translates to a high demand for skilled professionals and abundant job openings.",
  },
  {
    title: "Versatility and Flexibility",
    description:
      "Full stack developers possess a broad range of skills, allowing them to adapt to various roles and project requirements across different industries. This flexibility means more career options and the ability to work on diverse projects.",
  },
  {
    title: "Competitive Salaries",
    description:
      "Due to their wide-ranging skills and ability to handle multiple tasks, Java full stack developers often command competitive salaries compared to specialized front-end or back-end only developers.",
  },
  {
    title: "Faster Development and Troubleshooting",
    description:
      "A deep understanding of the entire application lifecycle enables developers to make faster, more informed technical decisions and quickly pinpoint and resolve issues across different system layers.",
  },
  {
    title: "Complete Project Ownership and Creative Freedom",
    description:
      "The knowledge of both front-end and back-end aspects allows developers to take ownership of a project from design to deployment, offering significant creative control over the final product.",
  },
  {
    title: "Strong Career Growth Potential",
    description:
      "The broad experience gained from working across the entire stack provides a solid foundation for career progression into leadership roles such as technical lead, software architect, or project manager.",
  },
  {
    title: "Adaptability to New Technologies",
    description:
      "Full stack developers are accustomed to continuous learning across various technologies, which makes them highly adaptable to new frameworks, tools, and industry trends.",
  },
  {
    title: "Faster Development Cycles",
    description:
      "When a single developer manages both the front-end and back-end, communication gaps are reduced, and development progresses faster.",
  },
  {
    title: "Freelance and Remote Work Options",
    description:
      "The ability to independently build and manage entire applications makes full stack developers well-suited for freelance opportunities and remote work.",
  },
];

const outcomes = [
  {
    title: "Frontend Development",
    text: "Proficiency in core web technologies like HTML, CSS, and JavaScript, along with modern frameworks such as React or Angular, to create dynamic, responsive, and user-friendly interfaces.",
    icon: "bi-window-stack",
  },
  {
    title: "Backend Development",
    text: "Expertise in Core and Advanced Java, OOP concepts, multithreading, exception handling, Spring and Spring Boot to build robust, scalable and secure business logic and RESTful APIs.",
    icon: "bi-server",
  },
  {
    title: "Database Management",
    text: "Ability to design, manage, and optimize data storage solutions using relational databases such as MySQL, PostgreSQL, Oracle and NoSQL databases such as MongoDB.",
    icon: "bi-database",
  },
  {
    title: "Testing and Quality Assurance",
    text: "Skills in debugging, writing unit tests using JUnit, and implementing automated testing to ensure reliability and performance of applications.",
    icon: "bi-check2-circle",
  },
];

const careerPath = [
  {
    stage: "Entry Level",
    experience: "0–2 years",
    roles:
      "Junior Full Stack Developer, Associate Developer, Developer Intern, Entry-Level Software Engineer",
    skills:
      "Core Java, HTML/CSS/JavaScript, Git and basic database interaction. Works on bugs and small features under mentorship.",
  },
  {
    stage: "Mid Level",
    experience: "3–5 years",
    roles:
      "Full Stack Developer, Software Engineer, Application Developer",
    skills:
      "Works independently on end-to-end features and participates in design and architecture. React/Angular, Spring Boot, Hibernate and APIs.",
  },
  {
    stage: "Senior Level",
    experience: "6+ years",
    roles:
      "Senior Full Stack Developer, Lead Developer/Tech Lead, Software Architect",
    skills:
      "Leads projects, designs scalable systems, reviews code and mentors developers. Microservices, AWS/Azure, Docker and Kubernetes.",
  },
  {
    stage: "Leadership / Executive",
    experience: "10+ years",
    roles:
      "Engineering Manager, Director of Engineering, VP of Technology, CTO",
    skills:
      "Strategic planning, people management, multiple teams and aligning technology vision with business goals.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-4">
      {eyebrow && (
        <div
          style={{
            color: "#1687dc",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          {eyebrow}
        </div>
      )}

      <h2
        style={{
          color: "#101b30",
          fontWeight: 800,
          letterSpacing: "-1px",
          fontSize: "30px",
          marginBottom: "10px",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            color: "#627589",
            fontSize: "15px",
            lineHeight: 1.8,
            maxWidth: "850px",
            marginBottom: 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function BulletItem({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="d-flex gap-3 mb-4">
      <div
        style={{
          minWidth: "34px",
          width: "34px",
          height: "34px",
          borderRadius: "10px",
          background: "#e8f5ff",
          color: "#1687dc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          marginTop: "2px",
        }}
      >
        <i className="bi bi-check-lg"></i>
      </div>

      <div>
        <div
          style={{
            color: "#18324b",
            fontWeight: 750,
            fontSize: "15px",
            marginBottom: "4px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            color: "#66788a",
            fontSize: "14px",
            lineHeight: 1.8,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function FullStackDevelopment() {
  const [imageOpen, setImageOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const openEnquiry = () => {
    setSubmitted(false);
    setEnquiryOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeEnquiry = () => {
    setEnquiryOpen(false);
    setSubmitted(false);
    document.body.style.overflow = "";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5faff",
        color: "#18324b",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        style={{
          background:
            "linear-gradient(135deg, #f7fcff 0%, #edf8ff 55%, #ffffff 100%)",
          padding: "55px 0 65px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "330px",
            height: "330px",
            borderRadius: "50%",
            border: "55px solid rgba(22,135,220,0.055)",
            right: "-100px",
            top: "-120px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "rgba(22,135,220,0.045)",
            left: "-80px",
            bottom: "-80px",
          }}
        />

        <div className="container position-relative">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "7px 13px",
                  borderRadius: "30px",
                  background: "#e8f5ff",
                  color: "#1687dc",
                  fontSize: "12px",
                  fontWeight: 800,
                  marginBottom: "18px",
                }}
              >
                <i className="bi bi-code-slash"></i>
                JAVA FULL STACK DEVELOPMENT
              </div>

              <h1
                style={{
                  fontSize: "clamp(32px, 4vw, 54px)",
                  lineHeight: 1.08,
                  fontWeight: 850,
                  letterSpacing: "-2px",
                  color: "#101b30",
                  marginBottom: "20px",
                }}
              >
                Learn Java & Get Placed as a{" "}
                <span style={{ color: "#1687dc" }}>
                  Java Full Stack Developer
                </span>
              </h1>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "#607589",
                  maxWidth: "700px",
                }}
              >
                CIIT's Java Full Stack Development Training is ideal for both
                freshers and working professionals interested in building a
                career as a Java full stack developer.
              </p>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 18px",
                  background: "#ffffff",
                  border: "1px solid #d9ebf8",
                  borderRadius: "14px",
                  margin: "10px 0 20px",
                  color: "#18324b",
                  fontWeight: 800,
                  boxShadow: "0 8px 25px rgba(18,74,110,0.06)",
                }}
              >
                <i
                  className="bi bi-briefcase-fill"
                  style={{ color: "#1687dc" }}
                />
                Get Your Dream IT Job Just in 6 Months
              </div>

              <p
                style={{
                  color: "#66788a",
                  lineHeight: 1.8,
                  fontSize: "15px",
                }}
              >
                The demand for Java full stack developers is high,
                particularly in enterprise environments such as finance,
                healthcare and e-commerce due to Java's stability,
                scalability and robust ecosystem.
              </p>

              <p
                style={{
                  color: "#66788a",
                  lineHeight: 1.8,
                  fontSize: "15px",
                }}
              >
                A career in Java full stack development offers numerous
                benefits, primarily driven by the ability to work on all
                layers of a software application, from the front-end user
                interface to the back-end logic and databases.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <button
                  onClick={openEnquiry}
                  className="btn text-white fw-bold px-4 py-3"
                  style={{
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg,#087bc9,#168fe1)",
                    border: "none",
                  }}
                >
                  Enquire Now
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>

                <a
                  href="#courseHighlights"
                  className="btn px-4 py-3 fw-bold"
                  style={{
                    borderRadius: "12px",
                    background: "#fff",
                    border: "1px solid #cce2f2",
                    color: "#1687dc",
                  }}
                >
                  View Course
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  borderRadius: "26px",
                  padding: "10px",
                  boxShadow: "0 22px 55px rgba(17,65,96,0.12)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "20px",
                  }}
                >
                  <img
                    src={javaImage}
                    alt="Java Full Stack Development"
                    style={{
                      width: "100%",
                      height: "370px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => setImageOpen(true)}
                    style={{
                      position: "absolute",
                      right: "15px",
                      bottom: "15px",
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      border: "none",
                      background: "rgba(255,255,255,0.94)",
                      color: "#1687dc",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                    }}
                  >
                    <i className="bi bi-arrows-fullscreen"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* INFO CARDS */}
          <div className="row g-3 mt-5">
            {[
              ["bi-clock", "Course Duration", "6 Months"],
              ["bi-laptop", "Training Mode", "Classroom & Online"],
              ["bi-calendar3", "Batches", "Weekdays / Weekends"],
              ["bi-translate", "Language", "English, Hindi, Marathi"],
            ].map(([icon, title, value]) => (
              <div className="col-12 col-sm-6 col-lg-3" key={title}>
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #dcebf7",
                    borderRadius: "18px",
                    padding: "18px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "13px",
                    boxShadow: "0 8px 25px rgba(17,65,96,0.05)",
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      minWidth: "46px",
                      borderRadius: "13px",
                      background: "#e8f5ff",
                      color: "#1687dc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                    }}
                  >
                    <i className={`bi ${icon}`}></i>
                  </div>

                  <div>
                    <div
                      style={{
                        color: "#718497",
                        fontSize: "12px",
                        marginBottom: "3px",
                      }}
                    >
                      {title}
                    </div>

                    <div
                      style={{
                        color: "#18324b",
                        fontWeight: 800,
                        fontSize: "14px",
                      }}
                    >
                      {value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OUTCOMES
      ========================================================= */}

      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-8">
              <SectionHeading
                eyebrow="Learning Outcomes"
                title="Outcomes of the Java Full Stack Training"
                description="Build practical skills across front-end, back-end, database and testing technologies."
              />

              <div className="row g-3">
                {outcomes.map((item) => (
                  <div className="col-md-6" key={item.title}>
                    <div
                      style={{
                        background: "#fff",
                        border: "1px solid #dcebf7",
                        borderRadius: "20px",
                        padding: "22px",
                        height: "100%",
                        boxShadow: "0 8px 25px rgba(17,65,96,0.05)",
                      }}
                    >
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "15px",
                          background: "#e8f5ff",
                          color: "#1687dc",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "21px",
                          marginBottom: "16px",
                        }}
                      >
                        <i className={`bi ${item.icon}`}></i>
                      </div>

                      <h5
                        style={{
                          color: "#18324b",
                          fontWeight: 800,
                          fontSize: "17px",
                        }}
                      >
                        {item.title}
                      </h5>

                      <p
                        style={{
                          color: "#687b8e",
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

              <div
                className="mt-4"
                style={{
                  background: "#edf7ff",
                  borderRadius: "18px",
                  padding: "20px",
                  color: "#536c80",
                  lineHeight: 1.8,
                  fontSize: "14px",
                }}
              >
                <i
                  className="bi bi-info-circle-fill me-2"
                  style={{ color: "#1687dc" }}
                />
                With flexible learning options—both online and offline—you
                will receive expert-led instruction, job assistance and
                certification guidance to fast-track your career in Java
                Technology.
              </div>
            </div>

            <div className="col-lg-4">
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #dcebf7",
                  borderRadius: "22px",
                  padding: "24px",
                  boxShadow: "0 10px 30px rgba(17,65,96,0.07)",
                }}
              >
                <h4
                  style={{
                    color: "#101b30",
                    fontWeight: 800,
                    fontSize: "20px",
                    marginBottom: "20px",
                  }}
                >
                  Course Information
                </h4>

                <div className="mb-4">
                  <small style={{ color: "#8292a0" }}>Batches Available</small>
                  <div className="fw-bold mt-1">Weekdays / Weekends</div>
                </div>

                <div className="mb-4">
                  <small style={{ color: "#8292a0" }}>Training Mode</small>
                  <div className="fw-bold mt-1">Classroom & Online</div>
                </div>

                <div className="mb-4">
                  <small style={{ color: "#8292a0" }}>Language</small>
                  <div className="fw-bold mt-1">English, Hindi, Marathi</div>
                </div>

                <div
                  style={{
                    height: "1px",
                    background: "#e5eff6",
                    margin: "20px 0",
                  }}
                />

                <div className="d-flex align-items-center gap-3">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "#e8f5ff",
                      color: "#1687dc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="bi bi-star-fill"></i>
                  </div>

                  <div>
                    <div className="fw-bold">5/5 Rating</div>
                    <small style={{ color: "#8192a0" }}>
                      Learner experience
                    </small>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "#e8f5ff",
                      color: "#1687dc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="bi bi-calendar-check"></i>
                  </div>

                  <div>
                    <div className="fw-bold">6 Months</div>
                    <small style={{ color: "#8192a0" }}>
                      Weekday program
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MONEY BACK + COMPANIES
      ========================================================= */}

      <section
        style={{
          background: "#edf7ff",
          padding: "55px 0",
        }}
      >
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #dcebf7",
                  borderRadius: "22px",
                  padding: "28px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "15px",
                    background: "#e8f5ff",
                    color: "#1687dc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "21px",
                    marginBottom: "16px",
                  }}
                >
                  <i className="bi bi-shield-check"></i>
                </div>

                <h4 style={{ fontWeight: 800, color: "#101b30" }}>
                  Money Back Guarantee
                </h4>

                <p
                  style={{
                    color: "#66788a",
                    lineHeight: 1.8,
                    marginBottom: 0,
                  }}
                >
                  Learn with confidence through CIIT's career-focused
                  training programs.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #dcebf7",
                  borderRadius: "22px",
                  padding: "28px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "15px",
                    background: "#e8f5ff",
                    color: "#1687dc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "21px",
                    marginBottom: "16px",
                  }}
                >
                  <i className="bi bi-buildings"></i>
                </div>

                <h4 style={{ fontWeight: 800, color: "#101b30" }}>
                  Our Hiring Companies
                </h4>

                <p
                  style={{
                    color: "#66788a",
                    lineHeight: 1.8,
                    marginBottom: 0,
                  }}
                >
                  CIIT provides career guidance and placement assistance to
                  help learners prepare for opportunities in the IT industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}

      <section className="py-5">
        <div className="container">
          <div
            style={{
              background: "#fff",
              border: "1px solid #dcebf7",
              borderRadius: "24px",
              padding: "clamp(24px,4vw,42px)",
              boxShadow: "0 10px 35px rgba(17,65,96,0.06)",
            }}
          >
            <SectionHeading
              eyebrow="Career Benefits"
              title="Benefits of Becoming a Java Full Stack Developer"
              description="Full stack Java skills combine front-end, back-end, database and deployment knowledge into one practical skill set."
            />

            <div className="row g-4 mt-2">
              {benefits.map((item, index) => (
                <div className="col-md-6" key={item.title}>
                  <BulletItem title={`${index + 1}. ${item.title}`}>
                    {item.description}
                  </BulletItem>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#edf7ff",
                borderRadius: "16px",
                padding: "20px",
                color: "#587083",
                lineHeight: 1.8,
                fontSize: "14px",
              }}
            >
              In essence, Java full stack development offers a dynamic and
              rewarding career path with high demand, strong financial
              prospects and significant opportunities for personal and
              professional growth.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY JAVA
      ========================================================= */}

      <section className="py-4">
        <div className="container">
          <div
            style={{
              background: "#fff",
              border: "1px solid #dcebf7",
              borderRadius: "24px",
              padding: "clamp(24px,4vw,42px)",
              boxShadow: "0 10px 35px rgba(17,65,96,0.05)",
            }}
          >
            <SectionHeading
              eyebrow="Why Java"
              title="Why Learn Java?"
              description="Java continues to be used across enterprise applications and modern software development."
            />

            <div className="row g-3 mt-2">
              {[
                [
                  "Enterprise Backbone",
                  "Java is used in mission-critical systems across finance, banking, e-commerce and healthcare because of its stability, security and scalability.",
                ],
                [
                  "Platform Independence",
                  'The "Write Once, Run Anywhere" principle, facilitated by the JVM, allows Java applications to run across operating systems.',
                ],
                [
                  "High Demand for Developers",
                  "The demand for skilled Java developers remains consistently high across various technology sectors.",
                ],
                [
                  "Competitive Salaries",
                  "Java developers work on critical systems and can pursue a wide range of professional opportunities.",
                ],
                [
                  "Diverse Career Paths",
                  "Java opens opportunities including Java Developer, Android Developer, Big Data Engineer, Cloud Solutions Architect and Full Stack Developer.",
                ],
                [
                  "Career Stability",
                  "Java has a long track record and LTS releases such as Java 17 and Java 21.",
                ],
              ].map(([title, description]) => (
                <div className="col-md-6" key={title}>
                  <BulletItem title={title}>{description}</BulletItem>
                </div>
              ))}
            </div>

            <p
              style={{
                color: "#66788a",
                lineHeight: 1.8,
                fontSize: "14px",
                marginBottom: 0,
              }}
            >
              For beginners, Java provides a strong foundation in core
              programming concepts like object-oriented programming (OOP),
              which can make learning other languages easier later on.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSE HIGHLIGHTS
      ========================================================= */}

      <section className="py-5" id="courseHighlights">
        <div className="container">
          <SectionHeading
            eyebrow="Curriculum"
            title="Course Highlights"
            description="A project-oriented curriculum covering the complete Java full stack development ecosystem."
          />

          <div className="row g-4">
            {[
              {
                icon: "bi-window",
                title: "Front-End Development",
                text: "HTML5, CSS3, Flexbox, CSS Grid, Bootstrap and JavaScript ES6+ with DOM manipulation and event handling.",
                sub: "React.js or Angular for scalable single-page applications.",
              },
              {
                icon: "bi-braces",
                title: "Back-End Development",
                text: "Core Java, OOP, data structures and algorithms with Servlets, JSP and JDBC.",
                sub: "Spring, Spring Boot, REST APIs, microservices and Hibernate ORM.",
              },
              {
                icon: "bi-database",
                title: "Database Management",
                text: "Work with relational databases including MySQL, Oracle, MSSQL and PostgreSQL.",
                sub: "Introduction to NoSQL databases such as MongoDB.",
              },
              {
                icon: "bi-cloud-arrow-up",
                title: "DevOps & Deployment",
                text: "Git and GitHub for version control and Maven for build automation.",
                sub: "CI/CD pipelines using Jenkins.",
              },
              {
                icon: "bi-kanban",
                title: "Hands-on Projects",
                text: "Build real-world applications such as e-commerce platforms, online banking systems and food delivery applications.",
                sub: "Develop a strong professional portfolio.",
              },
              {
                icon: "bi-patch-check",
                title: "Certifications",
                text: "Successful completion can provide certifications from the training provider or affiliated bodies.",
                sub: "Helps demonstrate your learning and technical skills.",
              },
              {
                icon: "bi-person-workspace",
                title: "Placement Assistance",
                text: "Resume building, mock interviews and soft skills training.",
                sub: "Career support and connections to hiring opportunities.",
              },
              {
                icon: "bi-person-video3",
                title: "Expert Mentorship",
                text: "Learn from professionals with real-world experience.",
                sub: "Curriculum aligned with current development practices.",
              },
              {
                icon: "bi-calendar2-check",
                title: "Flexible Learning",
                text: "Online, offline and hybrid learning models.",
                sub: "Flexible batch timings for students and professionals.",
              },
            ].map((item) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: "21px",
                    padding: "24px",
                    height: "100%",
                    boxShadow: "0 8px 25px rgba(17,65,96,0.045)",
                  }}
                >
                  <div
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "15px",
                      background: "#e8f5ff",
                      color: "#1687dc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "21px",
                      marginBottom: "17px",
                    }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <h5
                    style={{
                      color: "#18324b",
                      fontWeight: 800,
                      fontSize: "17px",
                    }}
                  >
                    {item.title}
                  </h5>

                  <p
                    style={{
                      color: "#687b8e",
                      fontSize: "14px",
                      lineHeight: 1.75,
                      marginBottom: "8px",
                    }}
                  >
                    {item.text}
                  </p>

                  <div
                    style={{
                      color: "#1687dc",
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO CAN DO
      ========================================================= */}

      <section
        style={{
          background: "#edf7ff",
          padding: "60px 0",
        }}
      >
        <div className="container">
          <SectionHeading
            eyebrow="Eligibility"
            title="Who Can Do This Course?"
            description="The Java Full Stack Development course is suitable for beginners as well as professionals looking to upskill or change careers."
          />

          <div className="row g-4 mt-2">
            {[
              [
                "bi-mortarboard",
                "Aspiring Developers & Fresh Graduates",
                "Students from B.E./B.Tech, BCA, B.Sc. IT, B.Com, Arts and other backgrounds can enroll.",
              ],
              [
                "bi-arrow-repeat",
                "Working Professionals",
                "Professionals from non-IT fields can learn development skills and transition into technology roles.",
              ],
              [
                "bi-code-square",
                "Existing Programmers",
                "Front-end or back-end developers can expand their skill set and become full stack professionals.",
              ],
              [
                "bi-lightbulb",
                "Coding Enthusiasts",
                "Anyone passionate about building applications, solving problems and continuous learning can pursue this path.",
              ],
            ].map(([icon, title, text]) => (
              <div className="col-md-6" key={title}>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: "20px",
                    padding: "24px",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "14px",
                      background: "#e8f5ff",
                      color: "#1687dc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      marginBottom: "15px",
                    }}
                  >
                    <i className={`bi ${icon}`}></i>
                  </div>

                  <h5
                    style={{
                      color: "#18324b",
                      fontWeight: 800,
                      fontSize: "16px",
                    }}
                  >
                    {title}
                  </h5>

                  <p
                    style={{
                      color: "#687b8e",
                      fontSize: "14px",
                      lineHeight: 1.8,
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
          CAREER PATH
      ========================================================= */}

      <section className="py-5">
        <div className="container">
          <div
            style={{
              background: "#fff",
              border: "1px solid #dcebf7",
              borderRadius: "24px",
              padding: "clamp(20px,4vw,38px)",
              boxShadow: "0 10px 35px rgba(17,65,96,0.06)",
            }}
          >
            <SectionHeading
              eyebrow="Career Growth"
              title="Java Full Stack Developer Career Path"
              description="The career path generally progresses from entry-level development roles to senior technical leadership and management positions."
            />

            <div className="table-responsive mt-4">
              <table
                className="table align-middle mb-0"
                style={{
                  minWidth: "850px",
                  fontSize: "13px",
                }}
              >
                <thead>
                  <tr>
                    {[
                      "Stage",
                      "Experience",
                      "Example Roles",
                      "Key Focus & Skills",
                    ].map((heading) => (
                      <th
                        key={heading}
                        style={{
                          background: "#edf7ff",
                          color: "#18324b",
                          fontWeight: 800,
                          padding: "15px",
                          borderBottom: "2px solid #cfe6f6",
                        }}
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {careerPath.map((item) => (
                    <tr key={item.stage}>
                      <td
                        style={{
                          padding: "17px 15px",
                          fontWeight: 800,
                          color: "#1687dc",
                        }}
                      >
                        {item.stage}
                      </td>

                      <td style={{ padding: "17px 15px", color: "#536b7d" }}>
                        {item.experience}
                      </td>

                      <td
                        style={{
                          padding: "17px 15px",
                          color: "#536b7d",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.roles}
                      </td>

                      <td
                        style={{
                          padding: "17px 15px",
                          color: "#687b8e",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.skills}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEEDBACK
      ========================================================= */}

      <section className="pb-5">
        <div className="container">
          <div
            style={{
              background: "#fff",
              border: "1px solid #dcebf7",
              borderRadius: "22px",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                background: "#e8f5ff",
                color: "#1687dc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 15px",
                fontSize: "21px",
              }}
            >
              <i className="bi bi-chat-quote-fill"></i>
            </div>

            <h4 style={{ color: "#101b30", fontWeight: 800 }}>
              Student Feedback
            </h4>

            <p
              style={{
                color: "#687b8e",
                lineHeight: 1.8,
                maxWidth: "650px",
                margin: "0 auto",
              }}
            >
              We value learner feedback and continuously work to improve the
              training experience.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="pb-5">
        <div className="container">
          <div
            style={{
              background:
                "linear-gradient(135deg,#0e3458,#1687dc)",
              borderRadius: "28px",
              padding: "45px 30px",
              textAlign: "center",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <h2
              style={{
                fontWeight: 850,
                fontSize: "clamp(26px,4vw,38px)",
                marginBottom: "12px",
              }}
            >
              Start Your Java Full Stack Journey
            </h2>

            <p
              style={{
                maxWidth: "680px",
                margin: "0 auto 25px",
                opacity: 0.88,
                lineHeight: 1.8,
              }}
            >
              Build practical skills, work on real-world projects and prepare
              for opportunities in Java Full Stack Development.
            </p>

            <button
              onClick={openEnquiry}
              className="btn btn-light px-4 py-3 fw-bold"
              style={{
                color: "#087bc9",
                borderRadius: "12px",
              }}
            >
              Enquire About This Course
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
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
            background: "rgba(7,25,42,0.88)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
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
              borderRadius: "50%",
              border: "none",
              background: "#fff",
              color: "#18324b",
              fontSize: "18px",
              zIndex: 10000,
            }}
          >
            <i className="bi bi-x-lg"></i>
          </button>

          <img
            src={javaImage}
            alt="Java Full Stack Development enlarged"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "95%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "18px",
              boxShadow: "0 20px 70px rgba(0,0,0,0.35)",
            }}
          />
        </div>
      )}

      {/* =========================================================
          ENQUIRY MODAL
      ========================================================= */}

      {enquiryOpen && (
        <div
          onClick={closeEnquiry}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(7,25,42,0.65)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "18px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "540px",
              background: "#fff",
              borderRadius: "24px",
              padding: "28px",
              boxShadow: "0 25px 80px rgba(0,0,0,0.25)",
              position: "relative",
            }}
          >
            <button
              type="button"
              onClick={closeEnquiry}
              style={{
                position: "absolute",
                right: "18px",
                top: "18px",
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                border: "1px solid #dcebf7",
                background: "#f5faff",
                color: "#18324b",
              }}
            >
              <i className="bi bi-x-lg"></i>
            </button>

            {!submitted ? (
              <>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "14px",
                    background: "#e8f5ff",
                    color: "#1687dc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    marginBottom: "14px",
                  }}
                >
                  <i className="bi bi-send-fill"></i>
                </div>

                <h3
                  style={{
                    color: "#101b30",
                    fontWeight: 800,
                    marginBottom: "5px",
                  }}
                >
                  Course Enquiry
                </h3>

                <p
                  style={{
                    color: "#718497",
                    fontSize: "14px",
                    marginBottom: "22px",
                  }}
                >
                  Enquire about Java Full Stack Development training.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      required
                      style={{ padding: "12px", borderRadius: "11px" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                      style={{ padding: "12px", borderRadius: "11px" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter contact number"
                      required
                      style={{ padding: "12px", borderRadius: "11px" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Training Type
                    </label>

                    <select
                      className="form-select"
                      required
                      style={{ padding: "12px", borderRadius: "11px" }}
                    >
                      <option value="">Select training type</option>
                      <option>Online Training</option>
                      <option>Offline Training</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Description
                    </label>

                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Write your requirement"
                      style={{ borderRadius: "11px" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn w-100 text-white fw-bold py-3"
                    style={{
                      background:
                        "linear-gradient(135deg,#087bc9,#168fe1)",
                      borderRadius: "12px",
                      border: "none",
                    }}
                  >
                    Submit Enquiry
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#e8f7ef",
                    color: "#1c9b5f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "30px",
                    margin: "0 auto 18px",
                  }}
                >
                  <i className="bi bi-check-lg"></i>
                </div>

                <h3
                  style={{
                    color: "#101b30",
                    fontWeight: 800,
                  }}
                >
                  Enquiry Submitted
                </h3>

                <p
                  style={{
                    color: "#718497",
                    lineHeight: 1.7,
                  }}
                >
                  Thank you for your enquiry. Our team will get in touch with
                  you soon.
                </p>

                <button
                  type="button"
                  onClick={closeEnquiry}
                  className="btn text-white px-4 py-2 fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg,#087bc9,#168fe1)",
                    borderRadius: "10px",
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}