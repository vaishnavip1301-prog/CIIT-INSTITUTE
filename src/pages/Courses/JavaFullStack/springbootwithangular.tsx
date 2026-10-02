import { useState } from "react";

export default function SpringBootWithAngular() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const outcomes = [
    {
      title: "Develop Robust Backends",
      text: "Build scalable, efficient server-side applications and microservices using Spring Boot, leveraging features like auto-configuration and dependency injection.",
    },
    {
      title: "Create Dynamic User Interfaces",
      text: "Design and implement compelling, responsive user interfaces (UI) and single-page applications (SPAs) using Angular's component-based architecture, state management, and routing with Angular Router.",
    },
    {
      title: "Implement and Consume RESTful APIs",
      text: "Master the creation of secure REST services in Spring Boot and seamlessly integrate them with the Angular frontend using JavaScript's fetch API or libraries like Axios.",
    },
    {
      title: "Manage Databases Efficiently",
      text: "Connect the backend to databases such as MySQL, PostgreSQL, and MongoDB using Spring Data JPA and Hibernate for effective data access and Object-Relational Mapping.",
    },
    {
      title: "Build Real-World Projects",
      text: "Apply learned concepts to hands-on, end-to-end projects that simulate real-world scenarios and build a comprehensive full-stack development portfolio.",
    },
  ];

  const benefits = [
    {
      title: "In-Demand Skill Set",
      text: "Both Spring Boot and Angular are widely adopted by large enterprises and startups, ensuring consistent job demand in the market.",
    },
    {
      title: "Full-Stack Opportunities",
      text: "Learning both technologies qualifies you for versatile full-stack developer roles where professionals manage both frontend and backend development.",
    },
    {
      title: "Global Company Adoption",
      text: "Major companies and many e-commerce and fintech platforms rely on Java and modern frontend technologies for scalable systems.",
    },
    {
      title: "Job Security",
      text: "Many large organizations have substantial existing systems built on Java and Spring, creating opportunities for maintenance and enhancement projects.",
    },
    {
      title: "High Performance",
      text: "Angular supports efficient UI development while Spring Boot provides an efficient, multithreaded backend with fast server responses.",
    },
  ];

  const whyLearn = [
    {
      title: "Industry Dominance",
      text: "Java, backed by the Spring ecosystem, continues to be a primary language for large enterprises in finance, healthcare, and e-commerce due to its stability, reliability, and long-term support.",
    },
    {
      title: "Job Security and Demand",
      text: "Companies have large systems built on Spring and need developers to maintain and modernize them, creating demand for skilled professionals.",
    },
    {
      title: "Modernization and AI Integration",
      text: "Spring Boot is adapting to new demands, including AI agent development, machine learning model orchestration, and data science integration.",
    },
    {
      title: "Microservices Backbone",
      text: "Spring Boot is widely used for developing independently deployable microservices for modern and scalable applications.",
    },
    {
      title: "Cloud-Native & DevOps Ready",
      text: "The stack integrates with AWS, Azure, Google Cloud, Docker, and Kubernetes, aligning with modern DevOps and cloud-native practices.",
    },
  ];

  const whoCanDo = [
    {
      title: "Aspiring Developers and Fresh Graduates",
      text: "Students from academic backgrounds such as B.E./B.Tech, BCA, B.Sc. IT, B.Com, Arts, and others can enroll. Many programs are suitable for beginners with basic computer literacy and logical thinking skills.",
    },
    {
      title: "Full-Stack Developers",
      text: "Developers who want to manage both the Java-based backend using Spring Boot and the JavaScript-based frontend using Angular.",
    },
    {
      title: "Backend Developers (Java/Spring Boot)",
      text: "Specialists in Java and Spring who build robust REST APIs, business logic, database integrations, and secure backend systems.",
    },
    {
      title: "Frontend Developers (Angular)",
      text: "Developers building dynamic and interactive user interfaces with Angular, HTML, CSS, and JavaScript/TypeScript while consuming backend APIs.",
    },
    {
      title: "Development Teams / Enterprises",
      text: "Organizations can use this combination for enterprise-level applications because of its scalability and suitability for modern software systems.",
    },
  ];

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
      {/* =========================================================
          HERO
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
        <div
          style={{
            position: "absolute",
            width: "330px",
            height: "330px",
            borderRadius: "50%",
            border: "45px solid rgba(22,135,220,0.06)",
            right: "-120px",
            top: "-130px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            border: "28px solid rgba(22,135,220,0.05)",
            left: "-100px",
            bottom: "-100px",
          }}
        />

        <div className="container py-5 position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-8">
              <div
                className="d-inline-flex align-items-center gap-2 mb-3"
                style={{
                  background: "#ffffff",
                  border: "1px solid #cce2f2",
                  borderRadius: "50px",
                  padding: "8px 16px",
                  color: "#087bc9",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "1px",
                }}
              >
                <i className="bi bi-code-slash"></i>
                SPRING BOOT + ANGULAR
              </div>

              <h1
                style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  color: "#101b30",
                  marginBottom: "20px",
                }}
              >
                Learn Latest Spring Boot with Angular & get placed as a{" "}
                <span style={{ color: "#1687dc" }}>
                  Java Full Stack Developer
                </span>
              </h1>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "#53697c",
                  maxWidth: "850px",
                }}
              >
                CIIT's Spring Boot + Angular Training is ideal for both
                freshers and working professionals interested in building a
                career as a Java full stack developer.
              </p>

              <div
                className="my-4 p-3 p-md-4"
                style={{
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  borderRadius: "18px",
                  boxShadow: "0 12px 30px rgba(17,65,96,0.07)",
                }}
              >
                <h3
                  className="mb-2"
                  style={{
                    color: "#087bc9",
                    fontWeight: 800,
                    fontSize: "24px",
                  }}
                >
                  Get Your Dream IT Job Just in 3 Months
                </h3>

                <p
                  className="mb-3"
                  style={{
                    lineHeight: 1.8,
                    color: "#53697c",
                  }}
                >
                  The combination of Spring Boot for backend development and
                  Angular for frontend development remains a highly sought-after
                  skill set in the software industry, offering numerous
                  opportunities across various sectors.
                </p>

                <p
                  className="mb-0"
                  style={{
                    lineHeight: 1.8,
                    color: "#53697c",
                  }}
                >
                  Training in Spring Boot and Angular equips individuals with
                  the skills to become proficient full-stack developers capable
                  of building, deploying, and maintaining modern, secure, and
                  scalable web applications.
                </p>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="btn px-4 py-3"
                  style={{
                    background:
                      "linear-gradient(135deg,#087bc9,#168fe1)",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "12px",
                    fontWeight: 700,
                    boxShadow: "0 10px 22px rgba(8,123,201,0.20)",
                  }}
                >
                  Enquire Now
                </button>

                <div
                  className="d-flex align-items-center gap-2 px-3 py-2"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #dcebf7",
                    borderRadius: "12px",
                    color: "#18324b",
                  }}
                >
                  <i
                    className="bi bi-calendar3"
                    style={{ color: "#1687dc" }}
                  ></i>
                  <span>2.5 Months Course</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                style={{
                  background: "#ffffff",
                  padding: "10px",
                  borderRadius: "24px",
                  border: "1px solid #dcebf7",
                  boxShadow: "0 20px 50px rgba(17,65,96,0.12)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=85"
                  alt="Spring Boot Angular Development"
                  className="img-fluid w-100"
                  style={{
                    height: "330px",
                    objectFit: "cover",
                    borderRadius: "18px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* QUICK INFO */}
          <div className="row g-3 mt-4">
            {[
              ["bi-clock", "Course Duration", "2.5 Months"],
              ["bi-laptop", "Training Mode", "Classroom & Online"],
              ["bi-calendar-check", "Batches Available", "Weekdays / Weekends"],
              ["bi-translate", "Language", "English, Hindi, Marathi"],
            ].map(([icon, title, value]) => (
              <div className="col-12 col-sm-6 col-lg-3" key={title}>
                <div
                  className="h-100 p-3"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #dcebf7",
                    borderRadius: "16px",
                    boxShadow: "0 8px 22px rgba(17,65,96,0.06)",
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "12px",
                        background: "#e8f5ff",
                        color: "#1687dc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        flexShrink: 0,
                      }}
                    >
                      <i className={`bi ${icon}`}></i>
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#71879a",
                          marginBottom: "3px",
                        }}
                      >
                        {title}
                      </div>

                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#18324b",
                        }}
                      >
                        {value}
                      </div>
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
      <section className="py-5" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div
                style={{
                  color: "#1687dc",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                TRAINING OUTCOMES
              </div>

              <h2
                className="mt-2 mb-4"
                style={{
                  fontWeight: 800,
                  color: "#101b30",
                  fontSize: "34px",
                  letterSpacing: "-1px",
                }}
              >
                Outcomes of the Spring Boot + Angular Training
              </h2>

              {outcomes.map((item) => (
                <div
                  key={item.title}
                  className="d-flex gap-3 mb-4"
                  style={{
                    padding: "18px",
                    border: "1px solid #e0edf7",
                    borderRadius: "16px",
                    background: "#fbfdff",
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
                      flexShrink: 0,
                    }}
                  >
                    <i className="bi bi-star-fill"></i>
                  </div>

                  <div>
                    <h5
                      style={{
                        color: "#18324b",
                        fontWeight: 800,
                        marginBottom: "7px",
                      }}
                    >
                      {item.title}
                    </h5>

                    <p
                      className="mb-0"
                      style={{
                        color: "#5c7081",
                        lineHeight: 1.8,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}

              <p
                style={{
                  color: "#53697c",
                  lineHeight: 1.8,
                  fontSize: "16px",
                }}
              >
                Spring Boot with Angular is a powerful and highly relevant
                combination, offering excellent and stable career opportunities
                in the software development industry.
              </p>

              <div
                className="row g-3 mt-3"
                style={{
                  borderTop: "1px solid #e1edf5",
                  paddingTop: "22px",
                }}
              >
                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <i
                      className="bi bi-clock-fill"
                      style={{
                        color: "#1687dc",
                        fontSize: "24px",
                      }}
                    ></i>

                    <div>
                      <p className="mb-1">Weekdays (Mon-Fri) - 3 Months</p>
                      <p className="mb-0">Weekends (Sat & Sun) - 4 Months</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className="bi bi-star-fill me-1"
                      style={{ color: "#1687dc" }}
                    ></i>
                  ))}
                  <span>(5/5 Rating)</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="p-3"
                style={{
                  border: "1px solid #dcebf7",
                  borderRadius: "22px",
                  background: "#ffffff",
                  boxShadow: "0 12px 35px rgba(17,65,96,0.08)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85"
                  alt="Spring Boot and Angular"
                  className="img-fluid w-100"
                  style={{
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />

                <h4
                  className="mt-4 mb-3"
                  style={{
                    color: "#101b30",
                    fontWeight: 800,
                  }}
                >
                  Course Information
                </h4>

                <p>
                  <i
                    className="bi bi-person-fill me-2"
                    style={{ color: "#1687dc" }}
                  ></i>
                  <b>Batches Available:</b> Weekdays/Weekends
                </p>

                <p>
                  <i
                    className="bi bi-bookmark-heart-fill me-2"
                    style={{ color: "#1687dc" }}
                  ></i>
                  <b>Training Mode:</b> Classroom & Online
                </p>

                <p>
                  <i
                    className="bi bi-bell-fill me-2"
                    style={{ color: "#1687dc" }}
                  ></i>
                  <b>Language:</b> English, Hindi, Marathi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE BENEFITS
      ========================================================= */}
      <section className="py-5" style={{ background: "#edf7ff" }}>
        <div className="container">
          <div
            className="p-4 p-lg-5"
            style={{
              background: "#ffffff",
              border: "1px solid #dcebf7",
              borderRadius: "24px",
              boxShadow: "0 12px 35px rgba(17,65,96,0.07)",
            }}
          >
            <div
              style={{
                color: "#1687dc",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
              }}
            >
              CAREER ADVANTAGES
            </div>

            <h2
              className="mt-2 mb-4"
              style={{
                fontWeight: 800,
                color: "#101b30",
              }}
            >
              Core Benefits of Spring Boot + Angular
            </h2>

            <div className="row g-4">
              {benefits.map((item) => (
                <div className="col-md-6 col-lg-4" key={item.title}>
                  <div
                    className="h-100 p-4"
                    style={{
                      background: "#f8fcff",
                      border: "1px solid #dcebf7",
                      borderRadius: "18px",
                    }}
                  >
                    <i
                      className="bi bi-star-fill"
                      style={{
                        color: "#1687dc",
                        fontSize: "20px",
                      }}
                    ></i>

                    <h5
                      className="mt-3"
                      style={{
                        fontWeight: 800,
                        color: "#18324b",
                      }}
                    >
                      {item.title}
                    </h5>

                    <p
                      className="mb-0"
                      style={{
                        color: "#5c7081",
                        lineHeight: 1.8,
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
          SALARY
      ========================================================= */}
      <section className="py-5" style={{ background: "#ffffff" }}>
        <div className="container">
          <div
            className="p-4 p-lg-5"
            style={{
              border: "1px solid #dcebf7",
              borderRadius: "24px",
              boxShadow: "0 12px 35px rgba(17,65,96,0.07)",
            }}
          >
            <h2
              className="mb-5"
              style={{
                fontWeight: 800,
                color: "#101b30",
              }}
            >
              Salary Overview
            </h2>

            <div className="row g-5">
              <div className="col-lg-6">
                <h4
                  className="mb-4"
                  style={{
                    color: "#1687dc",
                    fontWeight: 800,
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
                  value="$150,000 - $200,000+"
                />

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
                  className="mb-4"
                  style={{
                    color: "#1687dc",
                    fontWeight: 800,
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

                <div
                  className="mt-4 p-4"
                  style={{
                    background: "#f3faff",
                    borderRadius: "16px",
                    border: "1px solid #dcebf7",
                  }}
                >
                  <h5
                    style={{
                      fontWeight: 800,
                      color: "#18324b",
                    }}
                  >
                    Key Factors Influencing Salary
                  </h5>

                  <p className="mb-2">
                    <b>Location:</b> Cities like Bangalore, Hyderabad, and Pune
                    generally offer more competitive salaries due to high tech
                    demand.
                  </p>

                  <p className="mb-0">
                    <b>Company Size/Industry:</b> Large enterprises and
                    high-growth industries like Fintech and E-commerce tend to
                    offer higher packages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY LEARN
      ========================================================= */}
      <section className="py-5" style={{ background: "#edf7ff" }}>
        <div className="container">
          <div
            className="p-4 p-lg-5"
            style={{
              background: "#ffffff",
              border: "1px solid #dcebf7",
              borderRadius: "24px",
            }}
          >
            <div
              style={{
                color: "#1687dc",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
              }}
            >
              WHY THIS STACK
            </div>

            <h2
              className="mt-2"
              style={{
                color: "#101b30",
                fontWeight: 800,
              }}
            >
              Why Learn Spring Boot + Angular in 2025?
            </h2>

            <p
              style={{
                color: "#5c7081",
                lineHeight: 1.85,
                fontSize: "16px",
              }}
            >
              Learning the Spring Boot and AngularJS stack is a strategic
              career move because this combination remains a highly demanded,
              enterprise-grade solution for building modern, scalable, and
              secure web applications. The ongoing evolution of both
              technologies ensures their relevance for the future.
            </p>

            <div className="row g-4 mt-2">
              {whyLearn.map((item, index) => (
                <div className="col-md-6" key={item.title}>
                  <div
                    className="h-100 p-4"
                    style={{
                      background: "#f8fcff",
                      border: "1px solid #dcebf7",
                      borderRadius: "18px",
                    }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "11px",
                          background: "#e8f5ff",
                          color: "#1687dc",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                        }}
                      >
                        0{index + 1}
                      </div>

                      <h5
                        className="mb-0"
                        style={{
                          fontWeight: 800,
                          color: "#18324b",
                        }}
                      >
                        {item.title}
                      </h5>
                    </div>

                    <p
                      className="mb-0"
                      style={{
                        color: "#5c7081",
                        lineHeight: 1.8,
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
      <section className="py-5" style={{ background: "#ffffff" }}>
        <div className="container">
          <div
            className="p-4 p-lg-5"
            style={{
              border: "1px solid #dcebf7",
              borderRadius: "24px",
              boxShadow: "0 12px 35px rgba(17,65,96,0.07)",
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                color: "#101b30",
              }}
            >
              Course Highlights
            </h2>

            <div className="row g-4 mt-2">
              <HighlightCard
                title="Back-End Development (Spring Boot)"
                items={[
                  [
                    "Core Concepts",
                    "Mastering Inversion of Control (IoC) and Dependency Injection (DI) for modular application design.",
                  ],
                  [
                    "Data Management",
                    "Implementing data persistence using Spring Data JPA and Hibernate with MySQL, PostgreSQL, or MongoDB.",
                  ],
                  [
                    "Security",
                    "Applying authentication and authorization using Spring Security, JWT, and OAuth2.",
                  ],
                  [
                    "Microservices",
                    "Designing applications based on microservices architecture, including service discovery and API gateways.",
                  ],
                ]}
              />

              <HighlightCard
                title="Front-End Development (Angular)"
                items={[
                  [
                    "Component-Based UI",
                    "Learning to build scalable and reusable interfaces using Angular's component architecture.",
                  ],
                  [
                    "State Management & Routing",
                    "Handling application state and navigation within single-page applications using Angular Router.",
                  ],
                  [
                    "Responsive Design",
                    "Utilizing HTML5, CSS3, and modern styling frameworks to ensure responsive UIs across devices.",
                  ],
                ]}
              />

              <HighlightCard
                title="Practical and Project-Based Learning"
                items={[
                  [
                    "Hands-on Projects",
                    "Work on real-world end-to-end capstone projects such as e-commerce platforms and job portals.",
                  ],
                  [
                    "Industry Tools",
                    "Gain proficiency with IntelliJ IDEA, VS Code, Maven, npm, Git, and GitHub.",
                  ],
                  [
                    "Deployment and DevOps Basics",
                    "Understand Docker, Kubernetes, and deployment to AWS and Azure.",
                  ],
                  [
                    "Performance and Monitoring",
                    "Utilize Spring Boot Actuator for monitoring application metrics and health checks.",
                  ],
                ]}
              />
            </div>

            <p
              className="mt-4 mb-0"
              style={{
                color: "#5c7081",
                lineHeight: 1.8,
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
      <section className="py-5" style={{ background: "#f5faff" }}>
        <div className="container">
          <div
            className="p-4 p-lg-5"
            style={{
              background: "#ffffff",
              border: "1px solid #dcebf7",
              borderRadius: "24px",
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                color: "#101b30",
              }}
            >
              Who Can Do?
            </h2>

            <p
              className="mt-3"
              style={{
                color: "#5c7081",
                lineHeight: 1.8,
              }}
            >
              Our Java full stack development course is suitable for building
              applications with Spring Boot for the backend and Angular for the
              frontend. This powerful combination is typically handled by
              full-stack developers or teams of specialized backend and
              frontend developers.
            </p>

            <div className="row g-4 mt-2">
              {whoCanDo.map((item) => (
                <div className="col-md-6" key={item.title}>
                  <div
                    className="h-100 p-4"
                    style={{
                      background: "#f8fcff",
                      border: "1px solid #dcebf7",
                      borderRadius: "18px",
                    }}
                  >
                    <div className="d-flex gap-3">
                      <i
                        className="bi bi-star-fill"
                        style={{
                          color: "#1687dc",
                          fontSize: "18px",
                          marginTop: "3px",
                        }}
                      ></i>

                      <div>
                        <h5
                          style={{
                            fontWeight: 800,
                            color: "#18324b",
                          }}
                        >
                          {item.title}
                        </h5>

                        <p
                          className="mb-0"
                          style={{
                            color: "#5c7081",
                            lineHeight: 1.8,
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
      <section className="py-5" style={{ background: "#ffffff" }}>
        <div className="container">
          <div
            className="p-4 p-lg-5"
            style={{
              border: "1px solid #dcebf7",
              borderRadius: "24px",
              boxShadow: "0 12px 35px rgba(17,65,96,0.07)",
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                color: "#101b30",
              }}
            >
              Advance Java Career Path
            </h2>

            <p
              className="mt-3"
              style={{
                color: "#5c7081",
                lineHeight: 1.8,
              }}
            >
              A career path combining Spring Boot and Angular typically leads
              to a Full Stack Developer role, with opportunities for
              specialization and advancement. This combination allows
              individuals to build robust, scalable backends with Spring Boot
              and dynamic, interactive frontends with Angular.
            </p>

            <div className="table-responsive mt-4">
              <table
                className="table align-middle"
                style={{
                  border: "1px solid #dcebf7",
                  overflow: "hidden",
                }}
              >
                <thead>
                  <tr
                    style={{
                      background:
                        "linear-gradient(135deg,#087bc9,#168fe1)",
                      color: "#ffffff",
                    }}
                  >
                    <th style={{ padding: "16px" }}>Career Stage</th>
                    <th style={{ padding: "16px" }}>Roles</th>
                    <th style={{ padding: "16px" }}>Description</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td style={{ padding: "16px", fontWeight: 800 }}>
                      Entry Level
                    </td>

                    <td style={{ padding: "16px" }}>
                      Junior Full Stack Developer
                      <br />
                      Junior Java Developer
                      <br />
                      Junior Frontend Developer
                      <br />
                      Backend Developer
                      <br />
                      Frontend Developer
                    </td>

                    <td style={{ padding: "16px" }}>
                      Focuses on foundational tasks, bug fixes, backend APIs,
                      responsive interfaces, and working within an agile team.
                    </td>
                  </tr>

                  <tr>
                    <td style={{ padding: "16px", fontWeight: 800 }}>
                      Senior / Lead
                    </td>

                    <td style={{ padding: "16px" }}>
                      Senior Full Stack Developer
                      <br />
                      Tech Lead / Team Lead
                    </td>

                    <td style={{ padding: "16px" }}>
                      Takes ownership of larger features, mentors junior
                      developers, reviews code, and makes architectural
                      decisions.
                    </td>
                  </tr>

                  <tr>
                    <td style={{ padding: "16px", fontWeight: 800 }}>
                      Specialized
                    </td>

                    <td style={{ padding: "16px" }}>
                      Software Architect
                      <br />
                      DevOps Engineer
                    </td>

                    <td style={{ padding: "16px" }}>
                      Designs application architecture, scalability,
                      performance, deployment, infrastructure, Docker,
                      Kubernetes, and cloud solutions.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="py-5">
        <div className="container">
          <div
            className="p-4 p-lg-5 text-center"
            style={{
              borderRadius: "28px",
              background:
                "linear-gradient(135deg,#0e3458,#1687dc)",
              color: "#ffffff",
              boxShadow: "0 20px 50px rgba(14,52,88,0.20)",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                opacity: 0.8,
              }}
            >
              START YOUR JOURNEY
            </div>

            <h2
              className="mt-2"
              style={{
                fontWeight: 800,
                fontSize: "clamp(28px,4vw,42px)",
              }}
            >
              Start Your Spring Boot + Angular Career
            </h2>

            <p
              className="mx-auto"
              style={{
                maxWidth: "700px",
                lineHeight: 1.8,
                opacity: 0.9,
              }}
            >
              Build modern full-stack applications with Spring Boot and
              Angular and develop the skills required for real-world software
              development.
            </p>

            <button
              onClick={() => setEnquiryOpen(true)}
              className="btn px-4 py-3 mt-2"
              style={{
                background: "#ffffff",
                color: "#087bc9",
                border: "none",
                borderRadius: "12px",
                fontWeight: 800,
              }}
            >
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSE ENQUIRY MODAL
      ========================================================= */}
      {enquiryOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            background: "rgba(8, 32, 52, 0.68)",
            zIndex: 99999,
            padding: "20px",
          }}
          onClick={() => setEnquiryOpen(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "560px",
              maxHeight: "92vh",
              overflowY: "auto",
              background: "#ffffff",
              borderRadius: "0 0 8px 8px",
              boxShadow: "0 25px 70px rgba(0,0,0,0.28)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* BLUE HEADER */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, #087bc9, #168fe1)",
                padding: "18px 25px 20px",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "23px",
                    fontWeight: 800,
                    letterSpacing: "-0.3px",
                  }}
                >
                  Course Enquiry
                </h3>

                <div
                  style={{
                    marginTop: "4px",
                    fontSize: "14px",
                    opacity: 0.95,
                  }}
                >
                  Spring Boot With Angular
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEnquiryOpen(false)}
                style={{
                  width: "38px",
                  height: "38px",
                  border: "none",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.16)",
                  color: "#ffffff",
                  fontSize: "25px",
                  lineHeight: "1",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>

            {/* FORM */}
            <form
              onSubmit={(e) => {
                e.preventDefault();

                alert(
                  "Thank you! Your enquiry has been submitted successfully."
                );

                setEnquiryOpen(false);
              }}
              style={{
                padding: "26px 25px 28px",
              }}
            >
              {/* FULL NAME */}
              <div className="mb-3">
                <label
                  style={{
                    display: "block",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#18324b",
                    marginBottom: "8px",
                  }}
                >
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="form-control"
                  style={{
                    height: "39px",
                    borderRadius: "6px",
                    border: "1px solid #d6dee5",
                    fontSize: "14px",
                    boxShadow: "none",
                  }}
                />
              </div>

              {/* EMAIL + CONTACT */}
              <div className="row g-4">
                <div className="col-md-6">
                  <label
                    style={{
                      display: "block",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#18324b",
                      marginBottom: "8px",
                    }}
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="Enter email"
                    className="form-control"
                    style={{
                      height: "39px",
                      borderRadius: "6px",
                      border: "1px solid #d6dee5",
                      fontSize: "14px",
                      boxShadow: "none",
                    }}
                  />
                </div>

                <div className="col-md-6">
                  <label
                    style={{
                      display: "block",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#18324b",
                      marginBottom: "8px",
                    }}
                  >
                    Contact Number
                  </label>

                  <input
                    type="tel"
                    required
                    placeholder="Enter contact number"
                    className="form-control"
                    style={{
                      height: "39px",
                      borderRadius: "6px",
                      border: "1px solid #d6dee5",
                      fontSize: "14px",
                      boxShadow: "none",
                    }}
                  />
                </div>
              </div>

              {/* TRAINING TYPE */}
              <div className="mt-3 mb-3">
                <label
                  style={{
                    display: "block",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#18324b",
                    marginBottom: "8px",
                  }}
                >
                  Training Type
                </label>

                <select
                  required
                  className="form-select"
                  style={{
                    height: "39px",
                    borderRadius: "6px",
                    border: "1px solid #d6dee5",
                    fontSize: "14px",
                    color: "#555",
                    boxShadow: "none",
                  }}
                >
                  <option value="">Select Training Type</option>
                  <option value="online">Online Training</option>
                  <option value="offline">Offline Training</option>
                </select>
              </div>

              {/* DESCRIPTION */}
              <div className="mb-4">
                <label
                  style={{
                    display: "block",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#18324b",
                    marginBottom: "8px",
                  }}
                >
                  Description
                </label>

                <textarea
                  rows={4}
                  placeholder="Write your enquiry..."
                  className="form-control"
                  style={{
                    minHeight: "110px",
                    borderRadius: "6px",
                    border: "1px solid #d6dee5",
                    fontSize: "14px",
                    resize: "vertical",
                    boxShadow: "none",
                  }}
                ></textarea>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="btn w-100"
                style={{
                  height: "50px",
                  background:
                    "linear-gradient(135deg, #087bc9, #168fe1)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: 800,
                  boxShadow: "0 7px 18px rgba(8,123,201,0.20)",
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
   SALARY ITEM
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
      className="mb-3 p-3"
      style={{
        border: "1px solid #dcebf7",
        borderRadius: "14px",
        background: "#f9fcff",
      }}
    >
      <div className="d-flex gap-2 align-items-start">
        <i
          className="bi bi-star-fill"
          style={{
            color: "#1687dc",
            marginTop: "4px",
          }}
        ></i>

        <div>
          <div
            style={{
              fontWeight: 800,
              color: "#18324b",
            }}
          >
            {title}
          </div>

          <div
            style={{
              color: "#5c7081",
              marginTop: "4px",
            }}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   HIGHLIGHT CARD
========================================================= */

function HighlightCard({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <div className="col-lg-4">
      <div
        className="h-100 p-4"
        style={{
          background: "#f8fcff",
          border: "1px solid #dcebf7",
          borderRadius: "18px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "#e8f5ff",
            color: "#1687dc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            marginBottom: "18px",
          }}
        >
          <i className="bi bi-code-square"></i>
        </div>

        <h4
          style={{
            fontWeight: 800,
            color: "#18324b",
            fontSize: "20px",
            marginBottom: "20px",
          }}
        >
          {title}
        </h4>

        {items.map(([itemTitle, itemText]) => (
          <div key={itemTitle} className="mb-4">
            <div
              className="d-flex gap-2"
              style={{
                color: "#18324b",
                fontWeight: 800,
              }}
            >
              <i
                className="bi bi-check-circle-fill"
                style={{ color: "#1687dc" }}
              ></i>

              {itemTitle}
            </div>

            <p
              className="mb-0 mt-2"
              style={{
                color: "#5c7081",
                lineHeight: 1.75,
                fontSize: "14px",
              }}
            >
              {itemText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}