import { useState } from "react";

export default function AdvanceJava() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const outcomes = [
    {
      title: "Frontend Development",
      text: "Proficiency in core web technologies like JavaScript, along with modern frameworks such as React or Angular, to create dynamic, responsive, and user-friendly interfaces.",
    },
    {
      title: "Backend Development",
      text: "Expertise in Advanced Java such as Hibernate, JPA, server-side frameworks like Spring and Spring Boot, MicroServices to build robust, scalable, and secure business logic and RESTful APIs.",
    },
    {
      title: "Database Management",
      text: "Ability to design, manage, and optimize data storage solutions using both relational (e.g., MySQL, PostgreSQL, Oracle) and NoSQL (e.g., MongoDB) databases.",
    },
    {
      title: "Testing and Quality Assurance",
      text: "Skills in debugging, writing unit tests (JUnit), and implementing automated testing to ensure the reliability and performance of applications.",
    },
  ];

  const benefits = [
    {
      title: "High Demand and Job Opportunities",
      text: "Companies, from startups to large enterprises (like those in finance and e-commerce), actively seek developers who can manage entire projects, which translates to a high demand for skilled professionals and abundant job openings.",
    },
    {
      title: "Versatility and Flexibility",
      text: 'Senior Java developers possess a broad range of skills, allowing them to adapt to various roles and project requirements across different industries. This flexibility means more career options and the ability to work on diverse projects.',
    },
    {
      title: "Competitive Salaries",
      text: "Due to their wide-ranging skills and ability to handle multiple tasks (potentially reducing the need to hire multiple specialists), Java full stack developers often command higher salaries compared to specialized front-end or back-end only developers.",
    },
    {
      title: "Faster Development and Troubleshooting",
      text: "A deep understanding of the entire application lifecycle enables developers to make faster, more informed technical decisions and quickly pinpoint and resolve issues across different system layers, leading to improved project efficiency and quicker delivery times.",
    },
    {
      title: "Complete Project Ownership and Creative Freedom",
      text: "The knowledge of both front-end and back-end aspects allows developers to take ownership of a project from design to deployment, offering significant creative control over the final product.",
    },
    {
      title: "Strong Career Growth Potential",
      text: "The broad experience gained from working across the entire stack provides a solid foundation for career progression into leadership roles such as technical lead, software architect, or project manager.",
    },
    {
      title: "Adaptability to New Technologies",
      text: "Senior Java developers are accustomed to continuous learning across various technologies, which makes them highly adaptable to new frameworks, tools, and industry trends, future-proofing their careers.",
    },
    {
      title: "Faster Development Cycles",
      text: "When a single developer manages both the front-end and back-end, communication gaps are reduced, and development progresses faster. This agility is beneficial in environments that require rapid delivery.",
    },
    {
      title: "Freelance and Remote Work Options",
      text: "The ability to independently build and manage entire applications makes full stack developers well-suited for freelance opportunities and a popular choice for startups and small businesses looking for cost-effective solutions.",
    },
  ];

  const courseHighlights = [
    {
      title: "Front-End Development",
      description:
        "Proficiency in client-side technologies to create dynamic and responsive user interfaces.",
      subTitle: "Frameworks",
      subText:
        "Hands-on experience with modern front-end frameworks like React.js or Angular for building scalable single-page applications (SPAs).",
    },
    {
      title: "Back-End Development",
      description:
        "Mastery of server-side programming using the Java ecosystem.",
      subTitle: "Advanced Java & Frameworks",
      subText:
        "In-depth coverage of advanced topics like Servlets, JSP, JDBC, and industry-standard frameworks such as Spring and Spring Boot (for microservices and RESTful APIs) and Hibernate (for Object-Relational Mapping - ORM), MicroServices.",
    },
    {
      title: "Database Management",
      description:
        "Knowledge of managing and interacting with various database systems.",
      subTitle: "SQL Databases",
      subText:
        "Working with relational databases like MySQL, Oracle, MSSQL or PostgreSQL.",
      secondSubTitle: "NoSQL Databases",
      secondSubText:
        "Introduction to NoSQL databases such as MongoDB for flexible data storage.",
    },
    {
      title: "DevOps and Deployment",
      description:
        "Understanding the Version Control System including CI CD Pipeline and maintenance.",
      subTitle: "Tools",
      subText:
        "Proficiency in version control with Git and GitHub, build automation using Maven, continuous integration/continuous deployment (CI/CD) pipelines with Jenkins.",
    },
    {
      title: "Hands-on Projects & Capstone Projects",
      description:
        "The curriculum is heavily project-based, requiring learners to build several real-world applications (e.g., e-commerce platform, online banking system, food delivery app) to develop a strong professional portfolio.",
    },
    {
      title: "Industry-Recognized Certifications",
      description:
        "Successful completion often results in certifications from the training provider or affiliated bodies, which enhances job prospects and credibility.",
    },
    {
      title: "Placement Assistance",
      description:
        "Many programs offer dedicated career support, including resume building, mock interviews, soft skills training, and direct connections to hiring partners to facilitate job placement.",
    },
    {
      title: "Expert Mentorship",
      description:
        "Learning from industry experts and professionals with real-world experience ensures the curriculum is up-to-date with current best practices and industry trends.",
    },
    {
      title: "Flexible Learning Options",
      description:
        "Availability of online, offline, and hybrid learning models with flexible batch timings to accommodate students and working professionals.",
    },
  ];

  const whoCanDo = [
    {
      title: "Working Professionals Seeking a Career Change",
      text: "Individuals currently working in non-IT fields who are interested in the tech industry can transition into a development role by acquiring the necessary skills.",
    },
    {
      title: "Existing Programmers/Developers",
      text: 'Front-end or back-end developers can take this course to round out their skill set and become more versatile "full stack" professionals, which enhances their value in the job market and opens up leadership opportunities.',
    },
    {
      title: "Anyone Passionate About Coding",
      text: "Individuals with a strong interest in building applications after knowing core java, problem-solving, and continuous learning are well-suited for this demanding but rewarding field.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5faff",
        // color: "#18324b",
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
            "linear-gradient(135deg, #063b68 0%, #087bc9 55%, #168fe1 100%)",
          color: "#fff",
          padding: "55px 0 70px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 330,
            height: 330,
            borderRadius: "50%",
            border: "45px solid rgba(255,255,255,0.05)",
            right: -100,
            top: -110,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 180,
            height: 180,
            borderRadius: "50%",
            border: "25px solid rgba(255,255,255,0.06)",
            left: -70,
            bottom: -80,
          }}
        />

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-8">
              <div
                style={{
                  display: "inline-flex",
                  padding: "7px 14px",
                  borderRadius: 30,
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  marginBottom: 18,
                }}
              >
                ADVANCE JAVA DEVELOPMENT
              </div>

              <h1
                style={{
                  fontSize: "clamp(30px, 4vw, 48px)",
                  lineHeight: 1.12,
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  marginBottom: 22,
                }}
              >
                Learn Latest Advance Java on job training & get placed as a
                Senior Java Developer
              </h1>

              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.9)",
                  maxWidth: 820,
                }}
              >
                CIIT's Advance Java Development Training is ideal for working
                professionals interested in building a career as a Senior Java
                Developer.
              </p>

              <div
                style={{
                  background: "rgba(255,255,255,0.09)",
                  borderRadius: 18,
                  padding: "20px 22px",
                  margin: "25px 0",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <h3
                  style={{
                    textAlign: "center",
                    fontWeight: 800,
                    color: "#fff",
                    fontSize: 22,
                    marginBottom: 12,
                  }}
                >
                  Get Your Dream IT Job Just in 6 Months
                </h3>

                <p
                  style={{
                    lineHeight: 1.8,
                    marginBottom: 12,
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  The demand for Senior Java developers is high, particularly
                  in enterprise environments (e.g., finance, healthcare,
                  e-commerce) due to Java's stability, scalability, and robust
                  ecosystem.
                </p>

                <p
                  style={{
                    lineHeight: 1.8,
                    marginBottom: 0,
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  CIIT's A career in Advance Java development offers numerous
                  benefits, primarily driven by the ability to work on all
                  layers of a software application, from the front-end user
                  interface to the back-end logic and databases. This
                  comprehensive skill set makes developers highly versatile and
                  valuable to employers.
                </p>
              </div>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setEnquiryOpen(true)}
                  style={{
                    border: 0,
                    borderRadius: 12,
                    padding: "13px 24px",
                    fontWeight: 800,
                    background: "#fff",
                    color: "#087bc9",
                  }}
                >
                  Enquire Now
                </button>

                <div
                  style={{
                    padding: "13px 18px",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontWeight: 700,
                  }}
                >
                  Advance Java • 3 Months
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  padding: 10,
                  boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"
                  alt="Java programming and software development"
                  style={{
                    width: "100%",
                    height: 340,
                    objectFit: "cover",
                    borderRadius: 18,
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK INFO
      ========================================================= */}
      <section style={{ marginTop: -35, position: "relative", zIndex: 3 }}>
        <div className="container">
          <div
            className="row g-3"
            style={{
              background: "#fff",
              borderRadius: 22,
              padding: 18,
              boxShadow: "0 18px 50px rgba(17,65,96,0.12)",
              border: "1px solid #dcebf7",
            }}
          >
            {[
              ["bi-clock-fill", "Course Duration", "3 Months"],
              [
                "bi-laptop-fill",
                "Training Mode",
                "Classroom & Online",
              ],
              [
                "bi-calendar-week-fill",
                "Batches Available",
                "Weekdays / Weekends",
              ],
              [
                "bi-translate",
                "Language",
                "English, Hindi, Marathi",
              ],
            ].map(([icon, title, value]) => (
              <div className="col-md-6 col-lg-3" key={title}>
                <div
                  style={{
                    minHeight: 105,
                    borderRadius: 16,
                    background: "#f5faff",
                    border: "1px solid #e0eef8",
                    padding: 18,
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 13,
                      background: "#e8f5ff",
                      color: "#087bc9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 20,
                    }}
                  >
                    <i className={`bi ${icon}`} />
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 800,
                        color: "#687d90",
                        marginBottom: 4,
                      }}
                    >
                      {title}
                    </div>

                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: "#18324b",
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
          <div className="row g-5">
            <div className="col-lg-8">
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#087bc9",
                  letterSpacing: 2,
                  marginBottom: 10,
                }}
              >
                CAREER OUTCOMES
              </div>

              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 800,
                  letterSpacing: "-1px",
                  color: "#101b30",
                  marginBottom: 18,
                }}
              >
                Outcomes of the Advance Java Development Training
              </h2>

              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.85,
                  color: "#5e7182",
                }}
              >
                With flexible learning options—both online and offline—you
                will receive expert-led instruction, job assistance, and
                certification guidance to fast-track your career in Java
                Technology.
              </p>

              <div className="mt-4">
                {outcomes.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      display: "flex",
                      gap: 14,
                      marginBottom: 20,
                      padding: "17px 18px",
                      background: "#fff",
                      border: "1px solid #dcebf7",
                      borderRadius: 16,
                      boxShadow: "0 8px 24px rgba(17,65,96,0.05)",
                    }}
                  >
                    <div
                      style={{
                        color: "#087bc9",
                        fontSize: 18,
                        marginTop: 2,
                      }}
                    >
                      <i className="bi bi-star-fill" />
                    </div>

                    <div>
                      <div
                        style={{
                          fontWeight: 800,
                          color: "#18324b",
                          marginBottom: 6,
                        }}
                      >
                        {item.title}
                      </div>

                      <div
                        style={{
                          color: "#607486",
                          lineHeight: 1.75,
                          fontSize: 15,
                        }}
                      >
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="row g-3 mt-4"
                style={{
                  borderTop: "1px solid #dcebf7",
                  paddingTop: 24,
                }}
              >
                <div className="col-md-6">
                  <div
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <i
                      className="bi bi-clock-fill"
                      style={{
                        color: "#087bc9",
                        fontSize: 25,
                      }}
                    />

                    <div>
                      <p style={{ marginBottom: 7, fontWeight: 700 }}>
                        Weekdays (Mon-Fri) - 3 Months
                      </p>

                      <p style={{ marginBottom: 0, fontWeight: 700 }}>
                        Weekends (Sat & Sun) - 4 Months
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                      flexWrap: "wrap",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className="bi bi-star-fill"
                        style={{
                          color: "#087bc9",
                          fontSize: 18,
                        }}
                      />
                    ))}

                    <span
                      style={{
                        marginLeft: 7,
                        fontWeight: 700,
                        color: "#52697c",
                      }}
                    >
                      (5/5 Rating)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* COURSE INFORMATION */}
            <div className="col-lg-4">
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #dcebf7",
                  borderRadius: 22,
                  padding: 12,
                  boxShadow: "0 12px 35px rgba(17,65,96,0.08)",
                  position: "sticky",
                  top: 100,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
                  alt="Advance Java Development"
                  style={{
                    height: 300,
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: 15,
                    display: "block",
                  }}
                />

                <div style={{ padding: "20px 12px 10px" }}>
                  <h3
                    style={{
                      fontSize: 23,
                      fontWeight: 800,
                      color: "#101b30",
                      marginBottom: 20,
                    }}
                  >
                    Course Information
                  </h3>

                  {[
                    ["bi-person-fill", "Batches Available", "Weekdays/Weekends"],
                    ["bi-bookmark-heart-fill", "Training Mode", "Classroom & Online"],
                    ["bi-bell-fill", "Language", "English, Hindi, Marathi"],
                  ].map(([icon, title, value]) => (
                    <div
                      key={title}
                      style={{
                        display: "flex",
                        gap: 10,
                        marginBottom: 15,
                        color: "#536b7d",
                        lineHeight: 1.5,
                      }}
                    >
                      <i
                        className={`bi ${icon}`}
                        style={{
                          color: "#087bc9",
                          fontSize: 17,
                        }}
                      />

                      <span>
                        <b style={{ color: "#18324b" }}>{title}:</b>{" "}
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section
        className="py-5"
        style={{
          background: "#edf7ff",
        }}
      >
        <div className="container">
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#087bc9",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            CAREER BENEFITS
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: "#101b30",
              letterSpacing: "-1px",
              marginBottom: 15,
            }}
          >
            What are the Benefits of Advance Java Developer?
          </h2>

          <div className="row g-4 mt-2">
            {benefits.map((item, index) => (
              <div className="col-md-6" key={item.title}>
                <div
                  style={{
                    height: "100%",
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: 20,
                    padding: 24,
                    boxShadow: "0 8px 25px rgba(17,65,96,0.05)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 11,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 10,
                        background: "#e8f5ff",
                        color: "#087bc9",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i className="bi bi-star-fill" />
                    </div>

                    <div>
                      <h5
                        style={{
                          fontWeight: 800,
                          color: "#18324b",
                          marginBottom: 10,
                          fontSize: 17,
                        }}
                      >
                        {item.title}
                      </h5>

                      <p
                        style={{
                          color: "#617486",
                          lineHeight: 1.75,
                          marginBottom: 0,
                          fontSize: 15,
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 30,
              background: "#fff",
              borderRadius: 18,
              padding: "22px 25px",
              border: "1px solid #dcebf7",
              color: "#52697c",
              lineHeight: 1.8,
            }}
          >
            In essence, Advance Java development offers a dynamic and
            rewarding career path with high demand, strong financial
            prospects, and significant opportunities for personal and
            professional growth.
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY LEARN JAVA 2026
      ========================================================= */}
      <section className="py-5">
        <div className="container">
          <div
            style={{
              background: "#fff",
              border: "1px solid #dcebf7",
              borderRadius: 24,
              padding: "30px",
              boxShadow: "0 12px 35px rgba(17,65,96,0.06)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#087bc9",
                letterSpacing: 2,
                marginBottom: 10,
              }}
            >
              JAVA CAREER
            </div>

            <h2
              style={{
                color: "#101b30",
                fontWeight: 800,
                fontSize: "clamp(26px, 4vw, 36px)",
                marginBottom: 18,
              }}
            >
              Why Learn Java in 2026?
            </h2>

            <p
              style={{
                color: "#607486",
                lineHeight: 1.85,
              }}
            >
              Learning Java in 2026 is a strategic and future-proof decision
              due to its continued dominance in enterprise-level applications,
              robust ecosystem, high demand for skilled developers, and
              consistent evolution with modern trends like cloud computing and
              AI.
            </p>

            <div className="row g-3 mt-2">
              {[
                [
                  "Enterprise Backbone",
                  "Java is the foundation of mission-critical systems in finance, banking, e-commerce, and healthcare industries. Over 90% of Fortune 500 companies use Java for their backend architecture due to its stability, security, and scalability.",
                ],
                [
                  "Platform Independence (WORA)",
                  'The "Write Once, Run Anywhere" principle, facilitated by the Java Virtual Machine (JVM), allows applications to run on any operating system, making it highly versatile for cross-platform development.',
                ],
                [
                  "High Demand for Developers",
                  "The demand for skilled Java developers remains consistently high globally, with a projected growth in job opportunities across various sectors.",
                ],
                [
                  "Competitive Salaries",
                  "Due to the critical nature of the systems they build, Java developers often command competitive salaries compared to other language specialists.",
                ],
                [
                  "Diverse Career Paths",
                  "Proficiency in Java opens doors to a wide range of roles, including Java Developer, Android Developer, Big Data Engineer, Cloud Solutions Architect, and Full Stack Developer.",
                ],
                [
                  "Career Stability",
                  "Java has a proven track record and long-term support (LTS) releases (like Java 17 and 21) that ensure longevity, meaning the skills you acquire today will remain relevant for decades to come.",
                ],
              ].map(([title, text]) => (
                <div className="col-md-6" key={title}>
                  <div
                    style={{
                      padding: 18,
                      borderRadius: 16,
                      background: "#f5faff",
                      border: "1px solid #e0eef8",
                      height: "100%",
                    }}
                  >
                    <h5
                      style={{
                        color: "#18324b",
                        fontWeight: 800,
                        fontSize: 16,
                      }}
                    >
                      <i
                        className="bi bi-star-fill me-2"
                        style={{ color: "#087bc9" }}
                      />
                      {title}
                    </h5>

                    <p
                      style={{
                        color: "#637687",
                        lineHeight: 1.75,
                        fontSize: 14,
                        marginBottom: 0,
                      }}
                    >
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                marginTop: 22,
                marginBottom: 0,
                color: "#607486",
                lineHeight: 1.8,
              }}
            >
              For beginners, Java is an excellent choice as it provides a
              strong foundation in core programming concepts like
              object-oriented programming (OOP), which makes learning other
              languages easier later on.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSE HIGHLIGHTS
      ========================================================= */}
      <section
        className="py-5"
        style={{
          background: "#edf7ff",
        }}
      >
        <div className="container">
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#087bc9",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            CURRICULUM
          </div>

          <h2
            style={{
              color: "#101b30",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 40px)",
              marginBottom: 25,
            }}
          >
            Course Highlights
          </h2>

          <div className="row g-4">
            {courseHighlights.map((item) => (
              <div className="col-lg-6" key={item.title}>
                <div
                  style={{
                    height: "100%",
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: 20,
                    padding: 25,
                    boxShadow: "0 8px 25px rgba(17,65,96,0.05)",
                  }}
                >
                  <h5
                    style={{
                      fontWeight: 800,
                      color: "#18324b",
                      marginBottom: 10,
                    }}
                  >
                    <i
                      className="bi bi-star-fill me-2"
                      style={{ color: "#087bc9" }}
                    />
                    {item.title}
                  </h5>

                  <p
                    style={{
                      color: "#617486",
                      lineHeight: 1.75,
                      fontSize: 15,
                    }}
                  >
                    {item.description}
                  </p>

                  {item.subTitle && (
                    <div
                      style={{
                        marginTop: 15,
                        marginLeft: 10,
                        paddingLeft: 15,
                        borderLeft: "3px solid #1687dc",
                      }}
                    >
                      <strong style={{ color: "#18324b" }}>
                        {item.subTitle}
                      </strong>

                      <p
                        style={{
                          color: "#637687",
                          lineHeight: 1.7,
                          marginTop: 6,
                          marginBottom: 12,
                          fontSize: 14,
                        }}
                      >
                        {item.subText}
                      </p>
                    </div>
                  )}

                  {item.secondSubTitle && (
                    <div
                      style={{
                        marginTop: 10,
                        marginLeft: 10,
                        paddingLeft: 15,
                        borderLeft: "3px solid #1687dc",
                      }}
                    >
                      <strong style={{ color: "#18324b" }}>
                        {item.secondSubTitle}
                      </strong>

                      <p
                        style={{
                          color: "#637687",
                          lineHeight: 1.7,
                          marginTop: 6,
                          marginBottom: 0,
                          fontSize: 14,
                        }}
                      >
                        {item.secondSubText}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO CAN DO
      ========================================================= */}
      <section className="py-5">
        <div className="container">
          <div
            style={{
              background: "#fff",
              borderRadius: 24,
              border: "1px solid #dcebf7",
              padding: "30px",
              boxShadow: "0 10px 35px rgba(17,65,96,0.06)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#087bc9",
                letterSpacing: 2,
                marginBottom: 10,
              }}
            >
              ELIGIBILITY
            </div>

            <h2
              style={{
                color: "#101b30",
                fontWeight: 800,
                fontSize: 34,
                marginBottom: 15,
              }}
            >
              Who can do?
            </h2>

            <p
              style={{
                color: "#607486",
                lineHeight: 1.8,
              }}
            >
              Our Advance Java development course is suitable for a wide range
              of individuals, from working professionals, experienced
              professionals looking to upskill or make a career change.
            </p>

            <div className="row g-4 mt-2">
              {whoCanDo.map((item) => (
                <div className="col-lg-4" key={item.title}>
                  <div
                    style={{
                      height: "100%",
                      background: "#f5faff",
                      borderRadius: 17,
                      padding: 20,
                      border: "1px solid #e0eef8",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "#e8f5ff",
                        color: "#087bc9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 14,
                      }}
                    >
                      <i className="bi bi-star-fill" />
                    </div>

                    <h5
                      style={{
                        fontWeight: 800,
                        color: "#18324b",
                        fontSize: 17,
                        marginBottom: 10,
                      }}
                    >
                      {item.title}
                    </h5>

                    <p
                      style={{
                        color: "#637687",
                        fontSize: 14,
                        lineHeight: 1.75,
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
        </div>
      </section>

      {/* =========================================================
          CAREER PATH
      ========================================================= */}
      <section
        className="py-5"
        style={{
          background: "#edf7ff",
        }}
      >
        <div className="container">
          <div
            style={{
              background: "#fff",
              borderRadius: 24,
              border: "1px solid #dcebf7",
              padding: 30,
              boxShadow: "0 10px 35px rgba(17,65,96,0.06)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#087bc9",
                letterSpacing: 2,
                marginBottom: 10,
              }}
            >
              CAREER GROWTH
            </div>

            <h2
              style={{
                color: "#101b30",
                fontWeight: 800,
                fontSize: "clamp(27px, 4vw, 36px)",
              }}
            >
              Senior Java Developer Career Path
            </h2>

            <p
              style={{
                color: "#607486",
                lineHeight: 1.8,
              }}
            >
              The career path for a Advance Java developer offers significant
              growth potential, typically progressing from entry-level coding
              roles to senior technical leadership or management positions.
            </p>

            <p
              style={{
                color: "#607486",
                lineHeight: 1.8,
              }}
            >
              The career path generally follows a structured ladder, with
              increasing responsibilities and skill requirements at each stage:
            </p>

            <div
              className="table-responsive"
              style={{
                marginTop: 25,
                border: "1px solid #dcebf7",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <table className="table align-middle mb-0">
                <thead>
                  <tr
                    style={{
                      background:
                        "linear-gradient(135deg,#087bc9,#168fe1)",
                      color: "#fff",
                    }}
                  >
                    <th style={{ padding: 15 }}>Stage</th>
                    <th style={{ padding: 15 }}>
                      Years of Experience
                    </th>
                    <th style={{ padding: 15 }}>Example Roles</th>
                    <th style={{ padding: 15 }}>Key Focus & Skills</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td style={{ padding: 15, fontWeight: 800 }}>
                      Entry Level
                    </td>

                    <td style={{ padding: 15 }}>0–2 years</td>

                    <td style={{ padding: 15 }}>
                      Junior Full Stack Developer, Associate Developer,
                      Developer Intern, Entry-Level Software Engineer
                    </td>

                    <td style={{ padding: 15, lineHeight: 1.7 }}>
                      Focuses on learning the codebase, fixing bugs, and
                      developing small features under mentorship. Key skills
                      include core Java, HTML/CSS/JavaScript, version control
                      (Git), and basic database interaction.
                    </td>
                  </tr>

                  <tr>
                    <td style={{ padding: 15, fontWeight: 800 }}>
                      Mid Level
                    </td>

                    <td style={{ padding: 15 }}>3–5 years</td>

                    <td style={{ padding: 15 }}>
                      Full Stack Developer, Software Engineer, Application
                      Developer
                    </td>

                    <td style={{ padding: 15, lineHeight: 1.7 }}>
                      Works independently on end-to-end features, participates
                      in design and architecture, and collaborates with
                      cross-functional teams. Expected to have proficiency in
                      front-end frameworks like React or Angular, Java
                      frameworks (Spring Boot, Hibernate), and API development.
                    </td>
                  </tr>

                  <tr>
                    <td style={{ padding: 15, fontWeight: 800 }}>
                      Senior Level
                    </td>

                    <td style={{ padding: 15 }}>6+ years</td>

                    <td style={{ padding: 15 }}>
                      Senior Full Stack Developer, Lead Developer/Tech Lead,
                      Software Architect
                    </td>

                    <td style={{ padding: 15, lineHeight: 1.7 }}>
                      Leads projects or sprint modules, designs scalable and
                      robust systems, reviews peers' code, mentors junior
                      developers, and makes key technology decisions. Expertise
                      in microservices architecture, cloud platforms (AWS,
                      Azure), and DevOps tools (Docker, Kubernetes) is crucial.
                    </td>
                  </tr>

                  <tr>
                    <td style={{ padding: 15, fontWeight: 800 }}>
                      Leadership/Executive
                    </td>

                    <td style={{ padding: 15 }}>10+ years</td>

                    <td style={{ padding: 15 }}>
                      Engineering Manager, Director of Engineering, VP of
                      Technology, Chief Technology Officer (CTO)
                    </td>

                    <td style={{ padding: 15, lineHeight: 1.7 }}>
                      Shifts from hands-on coding to strategic planning, people
                      management, overseeing multiple teams, and aligning
                      technological vision with business goals.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="py-5">
        <div className="container">
          <div
            style={{
              background:
                "linear-gradient(135deg,#0e3458,#1687dc)",
              borderRadius: 26,
              padding: "45px 30px",
              textAlign: "center",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 40px)",
                marginBottom: 14,
              }}
            >
              Start Your Advance Java Career
            </h2>

            <p
              style={{
                maxWidth: 720,
                margin: "0 auto 25px",
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.8,
              }}
            >
              Build advanced Java skills and prepare yourself for senior Java
              development opportunities.
            </p>

            <button
              type="button"
              onClick={() => setEnquiryOpen(true)}
              style={{
                border: 0,
                borderRadius: 12,
                padding: "14px 28px",
                background: "#fff",
                color: "#087bc9",
                fontWeight: 800,
              }}
            >
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENQUIRY MODAL
      ========================================================= */}
      {enquiryOpen && (
        <div
          onClick={() => setEnquiryOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(8,35,57,0.65)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 560,
              background: "#fff",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
            }}
          >
            <div
              style={{
                background:
                  "linear-gradient(135deg,#087bc9,#168fe1)",
                padding: "22px 25px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h4
                  style={{
                    marginBottom: 4,
                    fontWeight: 800,
                  }}
                >
                  Course Enquiry
                </h4>

                <small style={{ opacity: 0.9 }}>
                  Advance Java Development
                </small>
              </div>

              <button
                type="button"
                onClick={() => setEnquiryOpen(false)}
                style={{
                  border: 0,
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  fontSize: 20,
                }}
              >
                ×
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you! Your enquiry has been submitted successfully."
                );
                setEnquiryOpen(false);
              }}
              style={{ padding: 25 }}
            >
              <div className="mb-3">
                <label
                  className="form-label"
                  style={{ fontWeight: 700 }}
                >
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label
                    className="form-label"
                    style={{ fontWeight: 700 }}
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label
                    className="form-label"
                    style={{ fontWeight: 700 }}
                  >
                    Contact Number
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter contact number"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label
                  className="form-label"
                  style={{ fontWeight: 700 }}
                >
                  Training Type
                </label>

                <select className="form-select" required>
                  <option value="">Select Training Type</option>
                  <option value="online">Online Training</option>
                  <option value="offline">Offline Training</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="form-label"
                  style={{ fontWeight: 700 }}
                >
                  Description
                </label>

                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Write your enquiry..."
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  border: 0,
                  borderRadius: 12,
                  padding: "13px",
                  color: "#fff",
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg,#087bc9,#168fe1)",
                }}
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}