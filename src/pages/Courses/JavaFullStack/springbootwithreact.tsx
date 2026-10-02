import { useState } from "react";

export default function SpringBootWithReact() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const outcomes = [
    {
      title: "Develop Robust Backends",
      text: "Build scalable, efficient server-side applications and microservices using Spring Boot, leveraging features like auto-configuration and dependency injection.",
    },
    {
      title: "Create Dynamic User Interfaces",
      text: "Design and implement compelling, responsive user interfaces (UI) and single-page applications (SPAs) using React's component-based architecture, JSX syntax, state management using hooks or Redux, and routing with React Router.",
    },
    {
      title: "Implement and Consume RESTful APIs",
      text: "Master the creation of secure REST services in Spring Boot and seamlessly integrate them with the React frontend using JavaScript's fetch API or libraries like Axios to ensure smooth data transfer and user experience.",
    },
    {
      title: "Manage Databases Efficiently",
      text: "Connect the backend to various databases such as MySQL, PostgreSQL and MongoDB using Spring Data JPA and Hibernate for effective data access, management, and Object-Relational Mapping.",
    },
    {
      title: "Build Real-World Projects",
      text: "Apply all learned concepts to hands-on, end-to-end projects that simulate real-world scenarios, building a comprehensive portfolio that demonstrates full-stack proficiency.",
    },
  ];

  const benefits = [
    {
      title: "In-Demand Skill Set",
      text: "Both Spring Boot and ReactJS are widely adopted by large enterprises and startups, ensuring consistent job demand in the market.",
    },
    {
      title: "Full-Stack Opportunities",
      text: "Learning both technologies qualifies you for versatile full-stack developer roles, where professionals manage both frontend and backend development, significantly broadening job prospects.",
    },
    {
      title: "Global Company Adoption",
      text: "Major companies like Netflix, Amazon, Google Cloud, and many e-commerce and fintech platforms rely on this stack for their scalable systems, which means these skills are relevant in diverse industries globally.",
    },
    {
      title: "Job Security",
      text: "Given that many large organizations have substantial existing systems built on Java and Spring, expertise in this area provides long-term opportunities for maintenance and enhancement projects.",
    },
    {
      title: "High Performance",
      text: "React uses a Virtual DOM to optimize UI rendering and update only necessary parts, leading to faster and smoother user experiences. Spring Boot provides an efficient multithreaded backend with fast server responses.",
    },
  ];

  const whyLearn = [
    {
      title: "Industry Dominance",
      text: "Java, backed by the Spring ecosystem, continues to be a primary language for large enterprises in finance, healthcare, and e-commerce due to its stability, reliability, and long-term support.",
    },
    {
      title: "Job Security and Demand",
      text: "Companies have massive, battle-tested systems built on Spring and need developers to maintain and modernize them, ensuring consistent and high demand for skilled professionals.",
    },
    {
      title: "Modernization and AI Integration",
      text: "Spring Boot is actively adapting to new demands, with a strong focus on AI agent development, machine learning model orchestration, and data science integration.",
    },
    {
      title: "Microservices Backbone",
      text: "Spring Boot is widely used for developing efficient, independently deployable microservices, which is a preferred architectural style for modern, scalable applications.",
    },
    {
      title: "Cloud-Native & DevOps Ready",
      text: "The stack integrates seamlessly with cloud platforms such as AWS, Azure and Google Cloud and containerization tools like Docker and Kubernetes.",
    },
  ];

  const whoCanDo = [
    {
      title: "Aspiring Developers and Fresh Graduates",
      text: "Students from various academic backgrounds such as B.E./B.Tech, BCA, B.Sc. IT, B.Com, Arts, etc. can enroll. Many programs are designed for beginners and require only basic computer literacy and logical thinking skills.",
    },
    {
      title: "Full-Stack Developers",
      text: "These individuals possess the skills to manage both the Java-based backend using Spring Boot and the JavaScript-based frontend using React. This is ideal for solo projects or smaller teams.",
    },
    {
      title: "Backend Developers (Java/Spring Boot)",
      text: "Specialists in Java and the Spring ecosystem build robust, scalable and secure REST APIs, business logic and database integrations.",
    },
    {
      title: "Frontend Developers (React)",
      text: "Experts in building dynamic and interactive user interfaces with React, HTML, CSS and JavaScript/TypeScript. Their role is to consume APIs provided by the backend.",
    },
    {
      title: "Development Teams / Enterprises",
      text: "Many organizations, including Netflix, Airbnb and PayPal, use this combination for enterprise-level applications due to its performance and scalability.",
    },
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        color: "#18324b",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section
        style={{
          background:
            "linear-gradient(135deg, #f5faff 0%, #eef8ff 55%, #ffffff 100%)",
          borderBottom: "1px solid #dcebf7",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}

        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            border: "1px solid rgba(22,135,220,0.10)",
            borderRadius: "50%",
            right: "-100px",
            top: "-120px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "210px",
            height: "210px",
            border: "1px solid rgba(22,135,220,0.08)",
            borderRadius: "50%",
            left: "-100px",
            bottom: "-100px",
          }}
        />

        <div className="container py-5 position-relative">
          <div className="row align-items-center g-5">
            {/* LEFT */}

            <div className="col-lg-7">
              <div
                className="d-inline-flex align-items-center mb-3"
                style={{
                  background: "#e5f4ff",
                  color: "#087bc9",
                  border: "1px solid #cde8f8",
                  borderRadius: "30px",
                  padding: "8px 16px",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "1.5px",
                }}
              >
                SPRING BOOT + REACT
              </div>

              <h1
                style={{
                  fontSize: "clamp(38px, 5vw, 62px)",
                  lineHeight: "1.04",
                  fontWeight: 800,
                  letterSpacing: "-2.5px",
                  color: "#101b30",
                  marginBottom: "22px",
                }}
              >
                Learn Latest Spring Boot with React & get placed as a{" "}
                <span style={{ color: "#1687dc" }}>
                  Java Full Stack Developer
                </span>
              </h1>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.85",
                  color: "#5d7690",
                  maxWidth: "760px",
                  marginBottom: "18px",
                }}
              >
                CIIT's Spring Boot + React Training is ideal for both freshers
                and working professionals interested in building a career as a
                Java full stack developer.
              </p>

              <div
                className="my-4"
                style={{
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  borderLeft: "5px solid #1687dc",
                  borderRadius: "14px",
                  padding: "16px 20px",
                  boxShadow: "0 8px 25px rgba(30,100,150,0.06)",
                }}
              >
                <div
                  style={{
                    fontSize: "21px",
                    fontWeight: 800,
                    color: "#1687dc",
                  }}
                >
                  Get Your Dream IT Job Just in 3 Months
                </div>
              </div>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#5d7690",
                  marginBottom: "15px",
                }}
              >
                The combination of Spring Boot for backend development and
                React for frontend development remains a highly sought-after
                skill set in the software industry, offering numerous
                opportunities across various sectors.
              </p>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#5d7690",
                  marginBottom: "28px",
                }}
              >
                Training in Spring Boot and ReactJS equips individuals with the
                skills to become proficient full-stack developers capable of
                building, deploying, and maintaining modern, secure, and
                scalable web applications.
              </p>

              <button
                type="button"
                onClick={() => setEnquiryOpen(true)}
                style={{
                  border: "none",
                  background: "linear-gradient(135deg,#087bc9,#168fe1)",
                  color: "#ffffff",
                  padding: "14px 25px",
                  borderRadius: "12px",
                  fontWeight: 800,
                  fontSize: "14px",
                  boxShadow: "0 12px 28px rgba(8,123,201,0.22)",
                  cursor: "pointer",
                }}
              >
                Enquire Now
                <span style={{ marginLeft: "9px" }}>→</span>
              </button>
            </div>

            {/* RIGHT IMAGE */}

            <div className="col-lg-5">
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #cfe5f5",
                  borderRadius: "24px",
                  padding: "12px",
                  boxShadow: "0 25px 60px rgba(22,104,150,0.12)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85"
                  alt="Spring Boot and React Development"
                  className="img-fluid w-100"
                  style={{
                    height: "370px",
                    objectFit: "cover",
                    borderRadius: "17px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* QUICK INFO */}

          <div className="row g-3 mt-4 pb-3">
            <div className="col-6 col-lg-3">
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  borderRadius: "16px",
                  padding: "17px 12px",
                  textAlign: "center",
                  height: "100%",
                  boxShadow: "0 6px 18px rgba(30,100,150,0.04)",
                }}
              >
                <div
                  style={{
                    color: "#1687dc",
                    fontSize: "12px",
                    fontWeight: 800,
                    marginBottom: "6px",
                  }}
                >
                  COURSE DURATION
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#18324b",
                  }}
                >
                  3 Months
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  borderRadius: "16px",
                  padding: "17px 12px",
                  textAlign: "center",
                  height: "100%",
                  boxShadow: "0 6px 18px rgba(30,100,150,0.04)",
                }}
              >
                <div
                  style={{
                    color: "#1687dc",
                    fontSize: "12px",
                    fontWeight: 800,
                    marginBottom: "6px",
                  }}
                >
                  TRAINING MODE
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#18324b",
                  }}
                >
                  Classroom & Online
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  borderRadius: "16px",
                  padding: "17px 12px",
                  textAlign: "center",
                  height: "100%",
                  boxShadow: "0 6px 18px rgba(30,100,150,0.04)",
                }}
              >
                <div
                  style={{
                    color: "#1687dc",
                    fontSize: "12px",
                    fontWeight: 800,
                    marginBottom: "6px",
                  }}
                >
                  BATCHES AVAILABLE
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#18324b",
                  }}
                >
                  Weekdays / Weekends
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  borderRadius: "16px",
                  padding: "17px 12px",
                  textAlign: "center",
                  height: "100%",
                  boxShadow: "0 6px 18px rgba(30,100,150,0.04)",
                }}
              >
                <div
                  style={{
                    color: "#1687dc",
                    fontSize: "12px",
                    fontWeight: 800,
                    marginBottom: "6px",
                  }}
                >
                  LANGUAGE
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#18324b",
                  }}
                >
                  English, Hindi, Marathi
                </div>
              </div>
            </div>
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
                  color: "#1687dc",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  marginBottom: "8px",
                }}
              >
                LEARNING OUTCOMES
              </div>

              <h2
                style={{
                  fontSize: "34px",
                  fontWeight: 800,
                  color: "#101b30",
                  letterSpacing: "-1px",
                  marginBottom: "25px",
                }}
              >
                Outcomes of the Spring Boot + React Training
              </h2>

              {outcomes.map((item, index) => (
                <div
                  key={index}
                  className="d-flex gap-3 mb-4"
                  style={{
                    padding: "18px",
                    background: "#ffffff",
                    border: "1px solid #e0edf7",
                    borderRadius: "15px",
                  }}
                >
                  <div
                    style={{
                      minWidth: "38px",
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "#e8f5ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1687dc",
                    }}
                  >
                    <i className="bi bi-star-fill"></i>
                  </div>

                  <div>
                    <h5
                      style={{
                        fontSize: "16px",
                        fontWeight: 800,
                        color: "#18324b",
                        marginBottom: "7px",
                      }}
                    >
                      {item.title}
                    </h5>

                    <p
                      style={{
                        margin: 0,
                        color: "#61788e",
                        fontSize: "14px",
                        lineHeight: "1.8",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#5d7690",
                }}
              >
                Spring Boot with React is a powerful and highly relevant
                combination, offering excellent and stable career opportunities
                in the software development industry.
              </p>

              <div
                className="row mt-4 p-3"
                style={{
                  background: "#f5faff",
                  border: "1px solid #dcebf7",
                  borderRadius: "16px",
                }}
              >
                <div className="col-md-6 mb-3 mb-md-0">
                  <div className="d-flex gap-3">
                    <i
                      className="bi bi-clock-fill"
                      style={{
                        color: "#1687dc",
                        fontSize: "24px",
                      }}
                    />

                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          color: "#18324b",
                          marginBottom: "5px",
                        }}
                      >
                        Weekdays (Mon-Fri)
                      </div>

                      <div
                        style={{
                          color: "#61788e",
                          fontSize: "14px",
                        }}
                      >
                        3 Months
                      </div>

                      <div
                        style={{
                          fontWeight: 700,
                          color: "#18324b",
                          marginTop: "8px",
                        }}
                      >
                        Weekends (Sat & Sun)
                      </div>

                      <div
                        style={{
                          color: "#61788e",
                          fontSize: "14px",
                        }}
                      >
                        4 Months
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div style={{ color: "#f5a623", fontSize: "18px" }}>
                    <i className="bi bi-star-fill"></i>{" "}
                    <i className="bi bi-star-fill"></i>{" "}
                    <i className="bi bi-star-fill"></i>{" "}
                    <i className="bi bi-star-fill"></i>{" "}
                    <i className="bi bi-star-fill"></i>

                    <span
                      style={{
                        color: "#61788e",
                        fontSize: "14px",
                        marginLeft: "8px",
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
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 15px 40px rgba(30,100,150,0.08)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"
                  alt="Spring Boot React Course"
                  className="img-fluid w-100"
                  style={{
                    height: "280px",
                    objectFit: "cover",
                  }}
                />

                <div className="p-4">
                  <h4
                    style={{
                      fontSize: "21px",
                      fontWeight: 800,
                      color: "#101b30",
                      marginBottom: "22px",
                    }}
                  >
                    Course Information
                  </h4>

                  <p style={{ fontSize: "14px", color: "#61788e" }}>
                    <i
                      className="bi bi-person-fill me-2"
                      style={{ color: "#1687dc" }}
                    />
                    <b style={{ color: "#18324b" }}>
                      Batches Available:
                    </b>{" "}
                    Weekdays/Weekends
                  </p>

                  <p style={{ fontSize: "14px", color: "#61788e" }}>
                    <i
                      className="bi bi-bookmark-heart-fill me-2"
                      style={{ color: "#1687dc" }}
                    />
                    <b style={{ color: "#18324b" }}>
                      Training Mode:
                    </b>{" "}
                    Classroom & Online
                  </p>

                  <p style={{ fontSize: "14px", color: "#61788e" }}>
                    <i
                      className="bi bi-bell-fill me-2"
                      style={{ color: "#1687dc" }}
                    />
                    <b style={{ color: "#18324b" }}>
                      Language:
                    </b>{" "}
                    English, Hindi, Marathi
                  </p>

                  <button
                    type="button"
                    onClick={() => setEnquiryOpen(true)}
                    className="btn w-100 mt-3"
                    style={{
                      background:
                        "linear-gradient(135deg,#087bc9,#168fe1)",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "11px",
                      padding: "12px",
                      fontWeight: 800,
                    }}
                  >
                    Enquire About This Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MONEY BACK / COMPANIES PLACEHOLDER STYLE
      ========================================================= */}

      <section
        className="py-4"
        style={{
          background: "#edf7ff",
          borderTop: "1px solid #dcebf7",
          borderBottom: "1px solid #dcebf7",
        }}
      >
        <div className="container">
          <div className="row g-3">
            <div className="col-md-6">
              <div
                className="h-100"
                style={{
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  borderRadius: "18px",
                  padding: "25px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#e8f5ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1687dc",
                    fontSize: "21px",
                    marginBottom: "14px",
                  }}
                >
                  <i className="bi bi-shield-check"></i>
                </div>

                <h4
                  style={{
                    color: "#101b30",
                    fontWeight: 800,
                    fontSize: "20px",
                  }}
                >
                  Learn With Confidence
                </h4>

                <p
                  style={{
                    color: "#61788e",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    margin: 0,
                  }}
                >
                  Get practical learning with structured training,
                  hands-on projects and guidance designed around real-world
                  development requirements.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="h-100"
                style={{
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  borderRadius: "18px",
                  padding: "25px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#e8f5ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1687dc",
                    fontSize: "21px",
                    marginBottom: "14px",
                  }}
                >
                  <i className="bi bi-buildings"></i>
                </div>

                <h4
                  style={{
                    color: "#101b30",
                    fontWeight: 800,
                    fontSize: "20px",
                  }}
                >
                  Industry-Oriented Learning
                </h4>

                <p
                  style={{
                    color: "#61788e",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    margin: 0,
                  }}
                >
                  Learn Spring Boot, React, REST APIs, databases,
                  microservices and deployment concepts through practical
                  development scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE BENEFITS
      ========================================================= */}

      <section className="py-5">
        <div className="container">
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #dcebf7",
              borderRadius: "22px",
              padding: "35px",
              boxShadow: "0 10px 35px rgba(30,100,150,0.05)",
            }}
          >
            <div
              style={{
                color: "#1687dc",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "8px",
              }}
            >
              CAREER BENEFITS
            </div>

            <h2
              style={{
                fontSize: "30px",
                fontWeight: 800,
                color: "#101b30",
                marginBottom: "28px",
              }}
            >
              Core Benefits of Spring Boot + React
            </h2>

            <div className="row g-4">
              {benefits.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="d-flex gap-3">
                    <div
                      style={{
                        minWidth: "40px",
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
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
                      <h5
                        style={{
                          color: "#18324b",
                          fontSize: "16px",
                          fontWeight: 800,
                          marginBottom: "8px",
                        }}
                      >
                        {item.title}
                      </h5>

                      <p
                        style={{
                          color: "#61788e",
                          fontSize: "14px",
                          lineHeight: "1.8",
                          margin: 0,
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SALARY SECTION
      ========================================================= */}

      <section
        className="py-5"
        style={{
          background: "#f5faff",
          borderTop: "1px solid #dcebf7",
          borderBottom: "1px solid #dcebf7",
        }}
      >
        <div className="container">
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #dcebf7",
              borderRadius: "22px",
              padding: "35px",
            }}
          >
            <div
              style={{
                color: "#1687dc",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "8px",
              }}
            >
              CAREER OPPORTUNITIES
            </div>

            <h2
              style={{
                color: "#101b30",
                fontSize: "30px",
                fontWeight: 800,
                marginBottom: "30px",
              }}
            >
              Average Salaries
            </h2>

            <div className="row g-4">
              <div className="col-lg-6">
                <h4
                  style={{
                    color: "#1687dc",
                    fontWeight: 800,
                    fontSize: "20px",
                    marginBottom: "20px",
                  }}
                >
                  Average Salaries in the United States
                </h4>

                <SalaryItem
                  title="Entry-Level (0-2 years)"
                  value="$85,000 - $115,000+"
                />

                <SalaryItem
                  title="Mid-Level (3-7 years)"
                  value="$120,000 - $145,000+"
                />

                <SalaryItem
                  title="Senior/Lead (7+ years, Architect roles)"
                  value="$150,000 - $200,000+ and above"
                />

                <h6
                  style={{
                    fontWeight: 800,
                    color: "#18324b",
                    marginTop: "20px",
                  }}
                >
                  Specific roles leveraging these skills include:
                </h6>

                <SalaryItem
                  title="Azure AI Engineer"
                  value="$140,000 to over $212,500 annually"
                />

                <SalaryItem
                  title="AI Architect"
                  value="Potential to exceed $250,000 annually"
                />
              </div>

              <div className="col-lg-6">
                <h4
                  style={{
                    color: "#1687dc",
                    fontWeight: 800,
                    fontSize: "20px",
                    marginBottom: "20px",
                  }}
                >
                  Average Salaries in India
                </h4>

                <SalaryItem
                  title="Entry-Level (0-2 years)"
                  value="₹4 - ₹7 Lakhs per year"
                />

                <SalaryItem
                  title="Mid-Level (3-5 years)"
                  value="₹8 - ₹15 Lakhs per year"
                />

                <SalaryItem
                  title="Senior/Lead (5+ years, Architect roles)"
                  value="₹16 - ₹30 Lakhs+ per year"
                />

                <h4
                  style={{
                    color: "#1687dc",
                    fontWeight: 800,
                    fontSize: "20px",
                    marginTop: "28px",
                    marginBottom: "18px",
                  }}
                >
                  Key Factors Influencing Salary
                </h4>

                <SalaryItem
                  title="Location"
                  value="Cities like Bangalore, Hyderabad and Pune generally offer more competitive salaries due to high tech demand."
                />

                <SalaryItem
                  title="Company Size / Industry"
                  value="Large enterprises and high-growth industries like Fintech and E-commerce tend to offer higher packages."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY LEARN
      ========================================================= */}

      <section className="py-5">
        <div className="container">
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #dcebf7",
              borderRadius: "22px",
              padding: "35px",
              boxShadow: "0 10px 35px rgba(30,100,150,0.05)",
            }}
          >
            <div
              style={{
                color: "#1687dc",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "8px",
              }}
            >
              FUTURE READY SKILLS
            </div>

            <h2
              style={{
                color: "#101b30",
                fontSize: "30px",
                fontWeight: 800,
                marginBottom: "15px",
              }}
            >
              Why Learn Spring Boot + React in 2025?
            </h2>

            <p
              style={{
                color: "#61788e",
                fontSize: "15px",
                lineHeight: "1.8",
                marginBottom: "28px",
              }}
            >
              Learning the Spring Boot and ReactJS stack in 2025 is a strategic
              career move because this combination remains a highly demanded,
              enterprise-grade solution for building modern, scalable, and
              secure web applications. The ongoing evolution of both
              technologies ensures their relevance for the future.
            </p>

            <div className="row g-4">
              {whyLearn.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div
                    style={{
                      height: "100%",
                      background: "#f8fcff",
                      border: "1px solid #dcebf7",
                      borderRadius: "16px",
                      padding: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "#e8f5ff",
                        color: "#1687dc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "13px",
                      }}
                    >
                      <i className="bi bi-star-fill"></i>
                    </div>

                    <h5
                      style={{
                        color: "#18324b",
                        fontWeight: 800,
                        fontSize: "16px",
                      }}
                    >
                      {item.title}
                    </h5>

                    <p
                      style={{
                        color: "#61788e",
                        fontSize: "14px",
                        lineHeight: "1.8",
                        margin: 0,
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
          COURSE HIGHLIGHTS
      ========================================================= */}

      <section
        className="py-5"
        style={{
          background: "#edf7ff",
          borderTop: "1px solid #dcebf7",
          borderBottom: "1px solid #dcebf7",
        }}
      >
        <div className="container">
          <div
            style={{
              background: "#ffffff",
              borderRadius: "22px",
              border: "1px solid #dcebf7",
              padding: "35px",
            }}
          >
            <div
              style={{
                color: "#1687dc",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "8px",
              }}
            >
              WHAT YOU WILL LEARN
            </div>

            <h2
              style={{
                color: "#101b30",
                fontSize: "30px",
                fontWeight: 800,
                marginBottom: "28px",
              }}
            >
              Course Highlights
            </h2>

            {/* BACKEND */}

            <HighlightBlock
              icon="bi-server"
              title="Back-End Development (Spring Boot)"
            >
              <HighlightSubItem
                title="Core Concepts"
                text="Mastering Inversion of Control (IoC) and Dependency Injection (DI) for modular application design."
              />

              <HighlightSubItem
                title="Data Management"
                text="Implementing data persistence using Spring Data JPA and Hibernate for robust Object-Relational Mapping with databases like MySQL, PostgreSQL, or MongoDB."
              />

              <HighlightSubItem
                title="Security"
                text="Applying industry-standard security measures, including user authentication and authorization using Spring Security, JWT and OAuth2."
              />

              <HighlightSubItem
                title="Microservices"
                text="Designing and building applications based on microservices architecture, including service discovery and API gateways."
              />
            </HighlightBlock>

            {/* FRONTEND */}

            <HighlightBlock
              icon="bi-window-stack"
              title="Front-End Development (ReactJS)"
            >
              <HighlightSubItem
                title="Component-Based UI"
                text="Learning to build scalable and reusable user interfaces using React's component architecture and JSX syntax."
              />

              <HighlightSubItem
                title="State Management & Routing"
                text="Mastering state management using hooks such as useState and useEffect and potentially libraries like Redux, as well as handling navigation using React Router."
              />

              <HighlightSubItem
                title="Responsive Design"
                text="Utilizing HTML5, CSS3 and modern styling frameworks to ensure UIs are responsive and work across various devices."
              />
            </HighlightBlock>

            {/* PROJECT */}

            <HighlightBlock
              icon="bi-code-square"
              title="Practical and Project-Based Learning"
            >
              <HighlightSubItem
                title="Hands-on Projects"
                text="A major highlight is working on real-world, end-to-end capstone projects such as e-commerce platforms and job portals that integrate all concepts from scratch to deployment."
              />

              <HighlightSubItem
                title="Industry Tools"
                text="Gaining proficiency with essential development tools such as IDEs, IntelliJ IDEA, VS Code, Maven, npm, Git and GitHub."
              />

              <HighlightSubItem
                title="Deployment and DevOps Basics"
                text="Understanding modern deployment strategies, including containerization with Docker and orchestration with Kubernetes, and deploying applications to cloud platforms such as AWS and Azure."
              />

              <HighlightSubItem
                title="Performance and Monitoring"
                text="Utilizing production-ready features like Spring Boot Actuator for monitoring application metrics and health checks."
              />
            </HighlightBlock>

            <p
              style={{
                color: "#61788e",
                fontSize: "15px",
                lineHeight: "1.8",
                marginTop: "20px",
              }}
            >
              These courses aim to provide a job-ready skill set, preparing
              learners for roles such as Full-Stack Developer, Back-End
              Developer, or Software Engineer in enterprise environments.
            </p>
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
              background: "#ffffff",
              border: "1px solid #dcebf7",
              borderRadius: "22px",
              padding: "35px",
            }}
          >
            <div
              style={{
                color: "#1687dc",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "8px",
              }}
            >
              WHO CAN LEARN
            </div>

            <h2
              style={{
                color: "#101b30",
                fontSize: "30px",
                fontWeight: 800,
                marginBottom: "15px",
              }}
            >
              Who can do?
            </h2>

            <p
              style={{
                color: "#61788e",
                fontSize: "15px",
                lineHeight: "1.8",
                marginBottom: "28px",
              }}
            >
              Our Java full stack development course is suitable for building
              applications with Spring Boot for the backend and React for the
              frontend. This is a common and powerful combination typically
              handled by full-stack developers or a team of specialized backend
              and frontend developers.
            </p>

            <div className="row g-4">
              {whoCanDo.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div
                    style={{
                      height: "100%",
                      padding: "20px",
                      background: "#f8fcff",
                      border: "1px solid #dcebf7",
                      borderRadius: "16px",
                    }}
                  >
                    <div className="d-flex gap-3">
                      <div
                        style={{
                          minWidth: "40px",
                          width: "40px",
                          height: "40px",
                          background: "#e8f5ff",
                          color: "#1687dc",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i className="bi bi-star-fill"></i>
                      </div>

                      <div>
                        <h5
                          style={{
                            fontSize: "16px",
                            fontWeight: 800,
                            color: "#18324b",
                            marginBottom: "8px",
                          }}
                        >
                          {item.title}
                        </h5>

                        <p
                          style={{
                            color: "#61788e",
                            fontSize: "14px",
                            lineHeight: "1.8",
                            margin: 0,
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
          </div>
        </div>
      </section>

      {/* =========================================================
          CAREER PATH
      ========================================================= */}

      <section
        className="py-5"
        style={{
          background: "#f5faff",
          borderTop: "1px solid #dcebf7",
        }}
      >
        <div className="container">
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #dcebf7",
              borderRadius: "22px",
              padding: "35px",
            }}
          >
            <div
              style={{
                color: "#1687dc",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "8px",
              }}
            >
              CAREER GROWTH
            </div>

            <h2
              style={{
                color: "#101b30",
                fontSize: "30px",
                fontWeight: 800,
                marginBottom: "15px",
              }}
            >
              Advance Java Career Path
            </h2>

            <p
              style={{
                color: "#61788e",
                fontSize: "15px",
                lineHeight: "1.8",
                marginBottom: "30px",
              }}
            >
              A career path combining Spring Boot and ReactJS typically leads
              to a Full Stack Developer role, with opportunities for
              specialization and advancement. This combination allows
              individuals to build robust, scalable backends with Spring Boot
              and dynamic, interactive frontends with ReactJS.
            </p>

            <div className="row g-4">
              <CareerCard
                title="Junior Full Stack Developer"
                text="Focuses on foundational tasks, bug fixes, and working within an agile team to implement new features."
              />

              <CareerCard
                title="Junior Java Developer / Junior Frontend Developer"
                text="Entry points if one area is stronger than the other. The goal would be to eventually integrate both skill sets into a full-stack role."
              />

              <CareerCard
                title="Backend Developer"
                text="Focused primarily on server-side logic using Spring Boot, building robust APIs, handling data storage, and implementing security protocols."
              />

              <CareerCard
                title="Frontend Developer"
                text="Focused on the client-side user experience using React, building responsive interfaces, and consuming backend APIs."
              />
            </div>

            <div
              style={{
                marginTop: "35px",
                paddingTop: "30px",
                borderTop: "1px solid #dcebf7",
              }}
            >
              <h4
                style={{
                  color: "#1687dc",
                  fontWeight: 800,
                  fontSize: "21px",
                  marginBottom: "12px",
                }}
              >
                Career Progression and Specialization (Senior/Lead)
              </h4>

              <p
                style={{
                  color: "#61788e",
                  fontSize: "14px",
                  lineHeight: "1.8",
                }}
              >
                As you gain experience, typically 3–5+ years, you can advance
                into more senior roles and specialize in specific areas.
              </p>

              <div className="row g-4 mt-2">
                <CareerCard
                  title="Senior Full-Stack Developer"
                  text="Taking ownership of larger features or modules, mentoring junior developers, and making architectural decisions within a project team."
                />

                <CareerCard
                  title="Tech Lead / Team Lead"
                  text="Leading a development team, defining coding standards, reviewing code, and collaborating with project managers and stakeholders."
                />

                <CareerCard
                  title="Software Architect"
                  text="Designing the overall structure of applications and systems, defining architecture patterns such as microservices and ensuring scalability, performance and maintainability."
                />

                <CareerCard
                  title="DevOps Engineer"
                  text="Specializing in automation, deployment and infrastructure of applications using Docker, Kubernetes and cloud platforms such as AWS, Azure and GCP."
                />
              </div>
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
              borderRadius: "26px",
              padding: "50px 35px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "250px",
                height: "250px",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50%",
                right: "-100px",
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
                left: "-80px",
                bottom: "-100px",
              }}
            />

            <div className="position-relative">
              <div
                style={{
                  color: "#bfe5ff",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}
              >
                START YOUR LEARNING JOURNEY
              </div>

              <h2
                style={{
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "clamp(28px,4vw,42px)",
                  marginBottom: "12px",
                }}
              >
                Start Your Spring Boot + React Career
              </h2>

              <p
                style={{
                  color: "#dceeff",
                  maxWidth: "700px",
                  margin: "0 auto 25px",
                  lineHeight: "1.8",
                }}
              >
                Build modern full-stack applications with Spring Boot and
                React through practical, project-based training.
              </p>

              <button
                type="button"
                onClick={() => setEnquiryOpen(true)}
                style={{
                  background: "#ffffff",
                  color: "#087bc9",
                  border: "none",
                  borderRadius: "12px",
                  padding: "14px 25px",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                Enquire Now →
              </button>
            </div>
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
            background: "rgba(9,31,52,0.68)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "560px",
              background: "#ffffff",
              borderRadius: "22px",
              padding: "30px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.22)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <div
                  style={{
                    color: "#1687dc",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "1.5px",
                  }}
                >
                  COURSE ENQUIRY
                </div>

                <h3
                  style={{
                    color: "#101b30",
                    fontWeight: 800,
                    margin: "5px 0 0",
                  }}
                >
                  Spring Boot + React
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setEnquiryOpen(false)}
                style={{
                  border: "none",
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "#edf7ff",
                  color: "#1687dc",
                  fontSize: "22px",
                  cursor: "pointer",
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
            >
              <div className="mb-3">
                <label
                  className="form-label"
                  style={{ fontWeight: 700, color: "#18324b" }}
                >
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                  style={{
                    borderColor: "#cfe2ef",
                    borderRadius: "10px",
                    padding: "12px",
                  }}
                />
              </div>

              <div className="mb-3">
                <label
                  className="form-label"
                  style={{ fontWeight: 700, color: "#18324b" }}
                >
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                  style={{
                    borderColor: "#cfe2ef",
                    borderRadius: "10px",
                    padding: "12px",
                  }}
                />
              </div>

              <div className="mb-3">
                <label
                  className="form-label"
                  style={{ fontWeight: 700, color: "#18324b" }}
                >
                  Contact Number
                </label>

                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your contact number"
                  required
                  style={{
                    borderColor: "#cfe2ef",
                    borderRadius: "10px",
                    padding: "12px",
                  }}
                />
              </div>

              <div className="mb-3">
                <label
                  className="form-label"
                  style={{ fontWeight: 700, color: "#18324b" }}
                >
                  Training Type
                </label>

                <select
                  className="form-select"
                  required
                  style={{
                    borderColor: "#cfe2ef",
                    borderRadius: "10px",
                    padding: "12px",
                  }}
                >
                  <option value="">Select Training Type</option>
                  <option value="Online Training">
                    Online Training
                  </option>
                  <option value="Offline Training">
                    Offline Training
                  </option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="form-label"
                  style={{ fontWeight: 700, color: "#18324b" }}
                >
                  Description
                </label>

                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Write your enquiry..."
                  style={{
                    borderColor: "#cfe2ef",
                    borderRadius: "10px",
                    padding: "12px",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn w-100"
                style={{
                  background:
                    "linear-gradient(135deg,#087bc9,#168fe1)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "11px",
                  padding: "13px",
                  fontWeight: 800,
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

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SalaryItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      className="mb-3"
      style={{
        padding: "15px 16px",
        background: "#f8fcff",
        border: "1px solid #dcebf7",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          fontWeight: 800,
          color: "#18324b",
          fontSize: "14px",
          marginBottom: "5px",
        }}
      >
        <i
          className="bi bi-star-fill me-2"
          style={{ color: "#1687dc" }}
        />
        {title}
      </div>

      <div
        style={{
          color: "#61788e",
          fontSize: "14px",
          lineHeight: "1.7",
          paddingLeft: "24px",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function HighlightBlock({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="mb-4"
      style={{
        background: "#f8fcff",
        border: "1px solid #dcebf7",
        borderRadius: "17px",
        padding: "22px",
      }}
    >
      <div className="d-flex align-items-center gap-3 mb-3">
        <div
          style={{
            width: "45px",
            height: "45px",
            minWidth: "45px",
            borderRadius: "11px",
            background: "#e8f5ff",
            color: "#1687dc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "19px",
          }}
        >
          <i className={`bi ${icon}`}></i>
        </div>

        <h4
          style={{
            margin: 0,
            color: "#18324b",
            fontSize: "18px",
            fontWeight: 800,
          }}
        >
          {title}
        </h4>
      </div>

      {children}
    </div>
  );
}

function HighlightSubItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      className="mb-3"
      style={{
        paddingLeft: "58px",
      }}
    >
      <div
        style={{
          color: "#18324b",
          fontWeight: 800,
          fontSize: "14px",
          marginBottom: "5px",
        }}
      >
        <i
          className="bi bi-check-circle-fill me-2"
          style={{ color: "#1687dc" }}
        />
        {title}
      </div>

      <p
        style={{
          color: "#61788e",
          fontSize: "14px",
          lineHeight: "1.8",
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function CareerCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="col-md-6">
      <div
        style={{
          height: "100%",
          background: "#f8fcff",
          border: "1px solid #dcebf7",
          borderRadius: "16px",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            background: "#e8f5ff",
            color: "#1687dc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "13px",
          }}
        >
          <i className="bi bi-arrow-up-right-circle-fill"></i>
        </div>

        <h5
          style={{
            color: "#18324b",
            fontSize: "16px",
            fontWeight: 800,
            marginBottom: "8px",
          }}
        >
          {title}
        </h5>

        <p
          style={{
            color: "#61788e",
            fontSize: "14px",
            lineHeight: "1.8",
            margin: 0,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}