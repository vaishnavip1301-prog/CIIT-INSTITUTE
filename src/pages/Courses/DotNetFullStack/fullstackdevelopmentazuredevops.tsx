import { useState } from "react";

export default function FullStackDevelopmentAzureDevOps() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const courseHighlights = [
    {
      title: "Front End Development",
      items: [
        {
          name: "Web Fundamentals",
          text: "HTML5, CSS3, and JavaScript fundamentals.",
        },
        {
          name: "Frontend Frameworks",
          text: "Building Single-Page Applications using Angular, React, or Blazor. This includes components, routing, state management, and API integration.",
        },
        {
          name: "UI Libraries",
          text: "Using CSS frameworks such as Bootstrap or Tailwind CSS for responsive design.",
        },
      ],
    },
    {
      title: "Backend Development (.NET Core / 8 / 9 / 10)",
      items: [
        {
          name: "Core C# & OOP",
          text: "Advanced C# concepts, Object-Oriented Programming, LINQ, Generics, and exception handling.",
        },
        {
          name: "ASP.NET Core",
          text: "Building web applications using ASP.NET Core MVC and Razor Pages.",
        },
        {
          name: "Web APIs & Microservices",
          text: "Designing RESTful Web APIs, API versioning, authentication using JWT and OAuth, and microservices architecture with Docker and Kubernetes integration.",
        },
        {
          name: "Key Concepts",
          text: "Dependency Injection, Middleware, configuration, logging, and security best practices.",
        },
      ],
    },
    {
      title: "Database & Data Management",
      items: [
        {
          name: "Relational Databases",
          text: "Working with SQL Server, RDBMS concepts, T-SQL queries, and data integrity.",
        },
        {
          name: "ORM",
          text: "Using Entity Framework Core for database interactions, Code First, Database First, migrations, and advanced querying.",
        },
        {
          name: "Cloud Databases",
          text: "Introduction to Azure SQL Database and Cosmos DB.",
        },
        {
          name: "Key Concepts",
          text: "Dependency Injection, Middleware, configuration, logging, and security best practices.",
        },
      ],
    },
    {
      title: "Azure DevOps & Cloud Integration",
      items: [
        {
          name: "DevOps Fundamentals",
          text: "Understanding the DevOps lifecycle, Agile methodologies such as Scrum, and the importance of CI/CD.",
        },
        {
          name: "Version Control",
          text: "In-depth Git and Azure Repos including branching strategies, merging, pull requests, and command-line operations.",
        },
        {
          name: "Azure Pipelines (CI/CD)",
          text: "Creating and managing automated build and release pipelines for continuous integration and continuous deployment.",
        },
        {
          name: "Azure Boards",
          text: "Using boards for project management, backlog management, sprint planning, and tracking work items.",
        },
        {
          name: "Azure Artifacts / Test Plans",
          text: "Managing application dependencies and implementing test management strategies.",
        },
        {
          name: "Containerization & Orchestration",
          text: "Docker for building and managing containers and introduction to Azure Kubernetes Service for orchestrating containerized applications.",
        },
      ],
    },
  ];

  const whoCanLearn = [
    {
      title: "Existing .NET / C# Developers",
      text: "Developers already proficient in C# and the .NET framework can extend their skill set to build applications using Azure services and modern cloud technologies.",
    },
    {
      title: "IT Professionals and System Administrators",
      text: "Individuals managing on-premise infrastructure can transition into cloud roles by learning Azure administration, identities, virtual networks, storage, and security.",
    },
    {
      title: "AI Engineers & Data Scientists",
      text: "Professionals working with machine learning can use Azure Machine Learning and the .NET platform for deploying and integrating models into enterprise applications.",
    },
    {
      title: "Cloud Professionals",
      text: "Azure administrators and architects can learn how to design and manage scalable, secure, and cost-effective solutions in the Azure environment.",
    },
    {
      title: "DevOps Engineers",
      text: "The integration between .NET, Azure, and Azure DevOps makes this course useful for professionals interested in CI/CD pipelines, automation, and release management.",
    },
    {
      title: "Students & Career Changers",
      text: "Individuals with a foundational understanding of computer science and programming principles can begin their journey toward .NET and Azure development.",
    },
  ];

  const careerRoles = [
    "AI / ML Engineer",
    "Azure AI Engineer",
    ".NET AI Lead / Architect",
    "Data Scientist specializing in Azure ML",
    "Cloud Solution Architect",
    "MLOps Engineer",
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
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #eaf7ff 0%, #ffffff 48%, #e8f5ff 100%)",
          borderBottom: "1px solid #dcebf7",
          padding: "70px 0 60px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            borderRadius: "50%",
            border: "55px solid rgba(22,135,220,0.06)",
            right: -130,
            top: -120,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "rgba(22,143,225,0.06)",
            left: -80,
            bottom: -80,
          }}
        />

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-8">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 14px",
                  borderRadius: 50,
                  background: "#e4f4ff",
                  color: "#087bc9",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "1.5px",
                  marginBottom: 18,
                }}
              >
                <i className="bi bi-code-slash" />
                DOT NET FULL STACK
              </div>

              <h1
                style={{
                  fontSize: "clamp(32px, 5vw, 58px)",
                  lineHeight: 1.08,
                  fontWeight: 800,
                  letterSpacing: "-2px",
                  color: "#101b30",
                  marginBottom: 22,
                }}
              >
                Full Stack Development
                <br />
                <span style={{ color: "#1687dc" }}>
                  with Azure DevOps
                </span>
              </h1>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.85,
                  color: "#536b80",
                  maxWidth: 850,
                  marginBottom: 24,
                }}
              >
                CIIT's Dot Net with Azure DevOps Training is designed for
                freshers and working professionals interested in building a
                career as a Dot Net Full Stack Developer with Azure and Azure
                DevOps.
              </p>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 20px",
                  borderRadius: 16,
                  background:
                    "linear-gradient(135deg,#087bc9,#168fe1)",
                  color: "white",
                  fontWeight: 800,
                  boxShadow: "0 12px 30px rgba(8,123,201,0.20)",
                }}
              >
                <i className="bi bi-briefcase-fill" />
                Become a Job-Ready .NET Full Stack Developer
              </div>
            </div>

            <div className="col-lg-4">
              <div
                style={{
                  background: "white",
                  border: "1px solid #dcebf7",
                  borderRadius: 28,
                  padding: 28,
                  boxShadow: "0 20px 55px rgba(30,100,150,0.10)",
                }}
              >
                {/* =================================================
                    HERO CARD IMAGE - ADDED
                ================================================= */}
                <div
                  style={{
                    width: "100%",
                    height: 165,
                    borderRadius: 20,
                    overflow: "hidden",
                    marginBottom: 22,
                    background: "#e8f5ff",
                  }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78UgUm72cJSSZY11jmfuH9FrYiNXpaYmSbliZji9awQ&s=10"
                    alt=".NET Azure DevOps Cloud"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontWeight: 800,
                    color: "#101b30",
                    marginBottom: 12,
                  }}
                >
                  .NET + Azure + DevOps
                </h3>

                <p
                  style={{
                    color: "#60788d",
                    lineHeight: 1.75,
                    marginBottom: 0,
                  }}
                >
                  Learn frontend, backend, databases, cloud integration,
                  CI/CD, containers and Azure DevOps through a structured
                  full-stack training path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSE INFO
      ========================================================= */}
      <section style={{ padding: "55px 0" }}>
        <div className="container">
          <div className="row g-4">
            {[
              {
                icon: "bi-clock-history",
                title: "Course Duration",
                value: "6 Months",
              },
              {
                icon: "bi-laptop",
                title: "Training Mode",
                value: "Classroom & Online",
              },
              {
                icon: "bi-calendar-week",
                title: "Batches Available",
                value: "Weekdays / Weekends",
              },
              {
                icon: "bi-translate",
                title: "Language",
                value: "English, Hindi, Marathi",
              },
            ].map((item) => (
              <div className="col-md-6 col-lg-3" key={item.title}>
                <div
                  style={{
                    height: "100%",
                    background: "white",
                    border: "1px solid #dcebf7",
                    borderRadius: 22,
                    padding: 24,
                    boxShadow: "0 10px 30px rgba(20,90,130,0.07)",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      background: "#e8f5ff",
                      color: "#1687dc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      marginBottom: 18,
                    }}
                  >
                    <i className={`bi ${item.icon}`} />
                  </div>

                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#71879a",
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      fontSize: 17,
                      fontWeight: 800,
                      color: "#18324b",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION + ENQUIRY
      ========================================================= */}
      <section style={{ padding: "15px 0 70px" }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div
                style={{
                  background: "white",
                  border: "1px solid #dcebf7",
                  borderRadius: 26,
                  padding: "35px",
                  boxShadow: "0 12px 35px rgba(20,90,130,0.06)",
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "2px",
                    color: "#1687dc",
                  }}
                >
                  COURSE OVERVIEW
                </span>

                <h2
                  style={{
                    marginTop: 12,
                    color: "#101b30",
                    fontWeight: 800,
                    letterSpacing: "-1px",
                  }}
                >
                  Learn Latest Dot Net Full Stack Developer With Azure DevOps
                </h2>

                <p style={{ lineHeight: 1.9, color: "#566e82" }}>
                  .NET and Azure are closely integrated, providing a
                  comprehensive platform for building, deploying, and managing
                  modern cloud applications. Azure provides strong support for
                  .NET developers and integrates with Visual Studio tools.
                </p>

                <p style={{ lineHeight: 1.9, color: "#566e82" }}>
                  CIIT's .NET with Azure course provides an opportunity for
                  individuals interested in building projects from the ground
                  up while learning modern application development, cloud
                  services and DevOps practices.
                </p>

                <div
                  style={{
                    marginTop: 28,
                    padding: "20px 22px",
                    borderRadius: 18,
                    background: "#edf7ff",
                    border: "1px solid #d8edfc",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <i
                      className="bi bi-lightbulb-fill"
                      style={{
                        color: "#1687dc",
                        fontSize: 22,
                      }}
                    />

                    <div>
                      <strong style={{ color: "#101b30" }}>
                        What you will work with
                      </strong>

                      <p
                        style={{
                          margin: "7px 0 0",
                          color: "#60788d",
                          lineHeight: 1.75,
                        }}
                      >
                        C#, ASP.NET Core, Web APIs, SQL Server, Entity
                        Framework Core, React / Angular / Blazor, Git, Azure
                        DevOps, CI/CD, Docker and Azure cloud services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                style={{
                  position: "sticky",
                  top: 100,
                  background:
                    "linear-gradient(145deg,#0e3458,#1687dc)",
                  borderRadius: 28,
                  padding: 30,
                  color: "white",
                  overflow: "hidden",
                  boxShadow: "0 20px 45px rgba(15,100,160,0.18)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: 170,
                    height: 170,
                    borderRadius: "50%",
                    border: "35px solid rgba(255,255,255,0.08)",
                    right: -65,
                    top: -55,
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: "1.8px",
                      opacity: 0.8,
                    }}
                  >
                    START YOUR JOURNEY
                  </div>

                  <h3
                    style={{
                      fontWeight: 800,
                      marginTop: 10,
                      marginBottom: 14,
                    }}
                  >
                    Interested in this course?
                  </h3>

                  <p
                    style={{
                      lineHeight: 1.75,
                      opacity: 0.9,
                    }}
                  >
                    Connect with CIIT counsellors to know about batches,
                    training mode and course details.
                  </p>

                  <button
                    type="button"
                    onClick={() => setEnquiryOpen(true)}
                    className="btn w-100"
                    style={{
                      background: "white",
                      color: "#087bc9",
                      borderRadius: 14,
                      padding: "13px 18px",
                      fontWeight: 800,
                      border: "none",
                    }}
                  >
                    <i className="bi bi-send-fill me-2" />
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT CAN YOU ACCOMPLISH
      ========================================================= */}
      <section
        style={{
          background: "#edf7ff",
          padding: "75px 0",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#1687dc",
              }}
            >
              CAREER OUTCOMES
            </span>

            <h2
              style={{
                marginTop: 10,
                fontWeight: 800,
                color: "#101b30",
                fontSize: "clamp(30px,4vw,44px)",
              }}
            >
              What can you accomplish at the end of training?
            </h2>
          </div>

          <div className="row g-4">
            {[
              "Build real-world projects using .NET Core and Azure DevOps.",
              "Develop full-stack applications using modern frontend and backend technologies.",
              "Understand CI/CD pipelines and cloud deployment workflows.",
              "Prepare for .NET Developer and DevOps interviews.",
              "Expand career opportunities with .NET and Azure expertise.",
              "Work with enterprise-oriented cloud technologies.",
            ].map((item, index) => (
              <div className="col-md-6" key={item}>
                <div
                  style={{
                    height: "100%",
                    background: "white",
                    border: "1px solid #dcebf7",
                    borderRadius: 20,
                    padding: 24,
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      minWidth: 44,
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      background: "#e8f5ff",
                      color: "#1687dc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                    }}
                  >
                    {index + 1}
                  </div>

                  <p
                    style={{
                      margin: 0,
                      lineHeight: 1.75,
                      color: "#526a7e",
                    }}
                  >
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="text-center"
            style={{
              marginTop: 45,
              color: "#536b80",
              fontSize: 16,
            }}
          >
            Take the next step to become a job-ready Full-Stack .NET Developer
            with Azure today.
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSE INFORMATION + IMAGE
      ========================================================= */}
      <section style={{ padding: "75px 0" }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "2px",
                  color: "#1687dc",
                }}
              >
                COURSE INFORMATION
              </span>

              <h2
                style={{
                  marginTop: 12,
                  fontWeight: 800,
                  color: "#101b30",
                }}
              >
                Learn .NET with Azure DevOps in a practical environment
              </h2>

              <div style={{ marginTop: 30 }}>
                {[
                  ["bi-calendar-check", "Batches", "Weekdays / Weekends"],
                  ["bi-laptop", "Training Mode", "Classroom & Online"],
                  ["bi-translate", "Language", "English, Hindi, Marathi"],
                  ["bi-clock", "Duration", "7 Months"],
                ].map(([icon, title, value]) => (
                  <div
                    key={title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "16px 0",
                      borderBottom: "1px solid #e4eef5",
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 14,
                        background: "#e8f5ff",
                        color: "#1687dc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i className={`bi ${icon}`} />
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          color: "#71879a",
                          fontWeight: 700,
                        }}
                      >
                        {title}
                      </div>

                      <div
                        style={{
                          fontWeight: 800,
                          color: "#18324b",
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div
                style={{
                  borderRadius: 28,
                  overflow: "hidden",
                  background: "white",
                  border: "1px solid #dcebf7",
                  boxShadow: "0 18px 45px rgba(20,90,130,0.10)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85"
                  alt=".NET Full Stack Development"
                  style={{
                    width: "100%",
                    height: 360,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section
        style={{
          background: "#edf7ff",
          padding: "75px 0",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#1687dc",
              }}
            >
              WHY .NET + AZURE
            </span>

            <h2
              style={{
                marginTop: 10,
                color: "#101b30",
                fontWeight: 800,
              }}
            >
              Benefits of .NET Full-Stack Development with Azure
            </h2>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "bi-graph-up-arrow",
                title: "Scalability and Reliability",
                text: "Azure provides robust infrastructure for building highly scalable and available applications.",
              },
              {
                icon: "bi-lightning-charge-fill",
                title: "Increased Productivity",
                text: ".NET and Azure provide an ecosystem of tools and services that streamline development and deployment.",
              },
              {
                icon: "bi-cloud-check-fill",
                title: "Seamless Cloud Integration",
                text: ".NET Core integrates with Azure services, simplifying deployment, management, and monitoring.",
              },
              {
                icon: "bi-kanban-fill",
                title: "Greater Project Ownership",
                text: "Azure cloud-native services support serverless computing, microservices, and managed databases.",
              },
              {
                icon: "bi-person-workspace",
                title: "Career Growth Opportunities",
                text: "Expertise across .NET, Azure and DevOps opens several technical and leadership career paths.",
              },
              {
                icon: "bi-diagram-3-fill",
                title: "Integration and Ecosystem",
                text: "Seamless integration between .NET applications and different Azure services.",
              },
              {
                icon: "bi-shield-check",
                title: "Security and Compliance",
                text: "Azure offers extensive security features and compliance capabilities for enterprise applications.",
              },
            ].map((item) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <div
                  style={{
                    height: "100%",
                    background: "white",
                    border: "1px solid #dcebf7",
                    borderRadius: 22,
                    padding: 25,
                    boxShadow: "0 10px 28px rgba(20,90,130,0.05)",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 17,
                      background: "#e8f5ff",
                      color: "#1687dc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 23,
                      marginBottom: 18,
                    }}
                  >
                    <i className={`bi ${item.icon}`} />
                  </div>

                  <h5
                    style={{
                      color: "#101b30",
                      fontWeight: 800,
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </h5>

                  <p
                    style={{
                      color: "#60788d",
                      lineHeight: 1.75,
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
      </section>

      {/* =========================================================
          SALARY INFORMATION
      ========================================================= */}
      <section style={{ padding: "75px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#1687dc",
              }}
            >
              SALARY INFORMATION
            </span>

            <h2
              style={{
                marginTop: 10,
                color: "#101b30",
                fontWeight: 800,
              }}
            >
              Salary ranges mentioned in the source course material
            </h2>

            <p
              style={{
                maxWidth: 750,
                margin: "12px auto 0",
                color: "#71879a",
                lineHeight: 1.7,
              }}
            >
              The following figures are the indicative ranges stated in the
              supplied legacy course content. Actual compensation can vary by
              experience, company, location and role.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div
                style={{
                  height: "100%",
                  background: "white",
                  border: "1px solid #dcebf7",
                  borderRadius: 25,
                  padding: 30,
                }}
              >
                <h4
                  style={{
                    fontWeight: 800,
                    color: "#101b30",
                    marginBottom: 25,
                  }}
                >
                  <i
                    className="bi bi-globe2 me-2"
                    style={{ color: "#1687dc" }}
                  />
                  United States
                </h4>

                {[
                  ["Entry-Level (0–2 years)", "$80,000 – $100,000+"],
                  ["Mid-Level (3–7 years)", "$120,000 – $160,000"],
                  [
                    "Senior / Lead (7+ years, Architect roles)",
                    "$150,000 – $250,000+",
                  ],
                ].map(([level, salary]) => (
                  <div
                    key={level}
                    style={{
                      padding: "17px 0",
                      borderBottom: "1px solid #e7f0f5",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#71879a",
                      }}
                    >
                      {level}
                    </div>

                    <div
                      style={{
                        marginTop: 5,
                        color: "#1687dc",
                        fontSize: 20,
                        fontWeight: 800,
                      }}
                    >
                      {salary}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div
                style={{
                  height: "100%",
                  background: "white",
                  border: "1px solid #dcebf7",
                  borderRadius: 25,
                  padding: 30,
                }}
              >
                <h4
                  style={{
                    fontWeight: 800,
                    color: "#101b30",
                    marginBottom: 25,
                  }}
                >
                  <i
                    className="bi bi-geo-alt-fill me-2"
                    style={{ color: "#1687dc" }}
                  />
                  India
                </h4>

                <p
                  style={{
                    color: "#60788d",
                    lineHeight: 1.75,
                  }}
                >
                  The supplied source states that .NET Azure Developer
                  salaries in India can range from ₹3.0 Lakhs to ₹20.0 Lakhs
                  per year depending on experience and location.
                </p>

                {[
                  ["Entry-Level (0–2 years)", "₹3 – ₹7 LPA"],
                  ["Mid-Level (3–7 years)", "₹7 – ₹20 LPA"],
                  [
                    "Senior / Lead (5+ years)",
                    "₹25 – ₹50+ LPA",
                  ],
                ].map(([level, salary]) => (
                  <div
                    key={level}
                    style={{
                      padding: "17px 0",
                      borderBottom: "1px solid #e7f0f5",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#71879a",
                      }}
                    >
                      {level}
                    </div>

                    <div
                      style={{
                        marginTop: 5,
                        color: "#1687dc",
                        fontSize: 20,
                        fontWeight: 800,
                      }}
                    >
                      {salary}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 25,
              padding: 25,
              background: "#f8fcff",
              border: "1px solid #dcebf7",
              borderRadius: 22,
            }}
          >
            <h5 style={{ fontWeight: 800, color: "#101b30" }}>
              Key factors mentioned for India
            </h5>

            <div className="row g-4 mt-1">
              {[
                {
                  title: "Location",
                  text: "Cities such as Bangalore, Pune and Hyderabad are mentioned as major technology centres.",
                },
                {
                  title: "Company Type",
                  text: "Product-based companies and large consulting firms may offer different compensation compared with smaller IT services firms.",
                },
                {
                  title: "Certifications",
                  text: "The source notes that Azure certifications can contribute to salary potential.",
                },
              ].map((item) => (
                <div className="col-md-4" key={item.title}>
                  <strong style={{ color: "#1687dc" }}>
                    {item.title}
                  </strong>

                  <p
                    style={{
                      color: "#60788d",
                      lineHeight: 1.7,
                      marginTop: 8,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO CAN LEARN
      ========================================================= */}
      <section
        style={{
          background: "#edf7ff",
          padding: "75px 0",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#1687dc",
              }}
            >
              WHO CAN LEARN
            </span>

            <h2
              style={{
                marginTop: 10,
                fontWeight: 800,
                color: "#101b30",
              }}
            >
              Who can learn this course?
            </h2>
          </div>

          <div className="row g-4">
            {whoCanLearn.map((item, index) => (
              <div className="col-md-6" key={item.title}>
                <div
                  style={{
                    height: "100%",
                    background: "white",
                    border: "1px solid #dcebf7",
                    borderRadius: 22,
                    padding: 25,
                    display: "flex",
                    gap: 18,
                  }}
                >
                  <div
                    style={{
                      minWidth: 48,
                      width: 48,
                      height: 48,
                      borderRadius: 15,
                      background: "#e8f5ff",
                      color: "#1687dc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h5
                      style={{
                        fontWeight: 800,
                        color: "#101b30",
                        marginBottom: 10,
                      }}
                    >
                      {item.title}
                    </h5>

                    <p
                      style={{
                        margin: 0,
                        color: "#60788d",
                        lineHeight: 1.75,
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
      </section>

      {/* =========================================================
          COURSE HIGHLIGHTS
      ========================================================= */}
      <section style={{ padding: "75px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#1687dc",
              }}
            >
              COURSE HIGHLIGHTS
            </span>

            <h2
              style={{
                marginTop: 10,
                color: "#101b30",
                fontWeight: 800,
              }}
            >
              Full-Stack .NET + Azure DevOps Curriculum
            </h2>
          </div>

          <div className="row g-4">
            {courseHighlights.map((section, index) => (
              <div className="col-lg-6" key={section.title}>
                <div
                  style={{
                    height: "100%",
                    background: "white",
                    border: "1px solid #dcebf7",
                    borderRadius: 24,
                    padding: 28,
                    boxShadow: "0 10px 30px rgba(20,90,130,0.05)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      marginBottom: 24,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 15,
                        background: "#e8f5ff",
                        color: "#1687dc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h4
                      style={{
                        margin: 0,
                        fontWeight: 800,
                        color: "#101b30",
                      }}
                    >
                      {section.title}
                    </h4>
                  </div>

                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        padding: "15px 0",
                        borderTop: "1px solid #edf2f6",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: 9,
                          alignItems: "center",
                          fontWeight: 800,
                          color: "#18324b",
                        }}
                      >
                        <i
                          className="bi bi-check-circle-fill"
                          style={{ color: "#1687dc" }}
                        />
                        {item.name}
                      </div>

                      <p
                        style={{
                          margin: "7px 0 0 25px",
                          color: "#60788d",
                          lineHeight: 1.75,
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAREER PATH
      ========================================================= */}
      <section
        style={{
          background: "#edf7ff",
          padding: "75px 0",
        }}
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "2px",
                  color: "#1687dc",
                }}
              >
                CAREER PATH
              </span>

              <h2
                style={{
                  marginTop: 10,
                  color: "#101b30",
                  fontWeight: 800,
                }}
              >
                Dot Net Career Path
              </h2>

              <p
                style={{
                  color: "#60788d",
                  lineHeight: 1.85,
                }}
              >
                Combining expertise in .NET and Azure can provide a broad
                technical foundation covering application development, cloud
                deployment, DevOps and emerging technologies.
              </p>

              <h5
                style={{
                  marginTop: 30,
                  fontWeight: 800,
                  color: "#18324b",
                }}
              >
                <i
                  className="bi bi-star-fill me-2"
                  style={{ color: "#1687dc" }}
                />
                High Demand and Job Opportunities
              </h5>

              <div style={{ marginTop: 20 }}>
                {[
                  {
                    title: "Growing Need for AI Integration",
                    text: "Companies across industries are integrating AI into their operations, creating opportunities for developers who can connect application development with AI capabilities.",
                  },
                  {
                    title: "Full-Stack AI Developers",
                    text: "Modern development roles increasingly cover the full application lifecycle from frontend and backend to cloud deployment and emerging technologies.",
                  },
                  {
                    title: "Diverse Job Roles",
                    text: "The combined skill set can support a variety of specialised roles across application development, cloud, AI and MLOps.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      background: "white",
                      border: "1px solid #dcebf7",
                      borderRadius: 18,
                      padding: 20,
                      marginBottom: 14,
                    }}
                  >
                    <strong style={{ color: "#101b30" }}>
                      {item.title}
                    </strong>

                    <p
                      style={{
                        color: "#60788d",
                        lineHeight: 1.75,
                        margin: "8px 0 0",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-5">
              <div
                style={{
                  background: "white",
                  border: "1px solid #dcebf7",
                  borderRadius: 25,
                  padding: 28,
                }}
              >
                <h4
                  style={{
                    fontWeight: 800,
                    color: "#101b30",
                    marginBottom: 22,
                  }}
                >
                  Potential Career Roles
                </h4>

                {careerRoles.map((role) => (
                  <div
                    key={role}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "13px 0",
                      borderBottom: "1px solid #edf2f6",
                    }}
                  >
                    <i
                      className="bi bi-check-circle-fill"
                      style={{ color: "#1687dc" }}
                    />

                    <span
                      style={{
                        color: "#526a7e",
                        fontWeight: 650,
                      }}
                    >
                      {role}
                    </span>
                  </div>
                ))}

                <div
                  style={{
                    marginTop: 25,
                    padding: 20,
                    background: "#eaf7ff",
                    borderRadius: 18,
                    color: "#526a7e",
                    lineHeight: 1.75,
                  }}
                >
                  <i
                    className="bi bi-info-circle-fill me-2"
                    style={{ color: "#1687dc" }}
                  />
                  The supplied course material describes opportunities across
                  .NET, Azure, cloud, AI and DevOps-related roles.
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 45,
              background:
                "linear-gradient(135deg,#0e3458,#1687dc)",
              color: "white",
              borderRadius: 28,
              padding: "38px 35px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontWeight: 800 }}>
              Build Your .NET + Azure DevOps Skill Set
            </h3>

            <p
              style={{
                maxWidth: 760,
                margin: "12px auto 24px",
                lineHeight: 1.75,
                opacity: 0.9,
              }}
            >
              Learn application development, databases, cloud integration,
              CI/CD and DevOps practices through a structured training path.
            </p>

            <button
              type="button"
              onClick={() => setEnquiryOpen(true)}
              className="btn"
              style={{
                background: "white",
                color: "#087bc9",
                borderRadius: 14,
                padding: "13px 28px",
                fontWeight: 800,
              }}
            >
              Enquire Now
              <i className="bi bi-arrow-right ms-2" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENQUIRY MODAL
      ========================================================= */}
      {enquiryOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setEnquiryOpen(false);
            }
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(6, 28, 48, 0.65)",
            backdropFilter: "blur(7px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 15,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 650,
              maxHeight: "90vh",
              overflowY: "auto",
              background: "#ffffff",
              borderRadius: 22,
              position: "relative",
              boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
              animation: "ciitModalIn 0.25s ease-out",
            }}
          >
            {/* HEADER */}
            <div
              style={{
                background: "linear-gradient(135deg,#0c4f82,#168fe1)",
                color: "white",
                padding: "20px 22px",
                position: "relative",
                overflow: "hidden",
                borderRadius: "22px 22px 0 0",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  border: "28px solid rgba(255,255,255,0.08)",
                  right: -55,
                  top: -65,
                }}
              />

              <button
                type="button"
                onClick={() => setEnquiryOpen(false)}
                aria-label="Close enquiry form"
                style={{
                  position: "absolute",
                  right: 16,
                  top: 15,
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.12)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  cursor: "pointer",
                  zIndex: 3,
                }}
              >
                <i className="bi bi-x-lg" />
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    minWidth: 44,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.16)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 19,
                  }}
                >
                  <i className="bi bi-send-fill" />
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: "1.7px",
                      opacity: 0.82,
                      marginBottom: 3,
                    }}
                  >
                    COURSE ENQUIRY
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: 21,
                      fontWeight: 800,
                      lineHeight: 1.25,
                    }}
                  >
                    Get Course Information
                  </h3>
                </div>
              </div>
            </div>

            {/* FORM BODY */}
            <div
              style={{
                padding: "22px",
              }}
            >
              <p
                style={{
                  color: "#71879a",
                  fontSize: 13,
                  lineHeight: 1.65,
                  marginBottom: 18,
                }}
              >
                Fill in your details and our counsellor will contact you with
                training details, batches and other information.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  alert(
                    "Thank you! Your enquiry has been submitted successfully."
                  );

                  setEnquiryOpen(false);
                }}
              >
                {/* NAME */}
                <div style={{ marginBottom: 13 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#18324b",
                      marginBottom: 6,
                    }}
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="form-control"
                    style={{
                      width: "100%",
                      fontSize: 13,
                      borderRadius: 10,
                      padding: "10px 12px",
                      border: "1px solid #d9e8f3",
                      background: "#fbfdff",
                      color: "#18324b",
                      boxShadow: "none",
                    }}
                  />
                </div>

                {/* EMAIL + CONTACT */}
                <div className="row g-3">
                  <div className="col-md-6">
                    <label
                      style={{
                        display: "block",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#18324b",
                        marginBottom: 6,
                      }}
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="form-control"
                      style={{
                        width: "100%",
                        fontSize: 13,
                        borderRadius: 10,
                        padding: "10px 12px",
                        border: "1px solid #d9e8f3",
                        background: "#fbfdff",
                        color: "#18324b",
                        boxShadow: "none",
                      }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label
                      style={{
                        display: "block",
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#18324b",
                        marginBottom: 6,
                      }}
                    >
                      Contact
                    </label>

                    <input
                      type="tel"
                      required
                      placeholder="Enter contact number"
                      className="form-control"
                      style={{
                        width: "100%",
                        fontSize: 13,
                        borderRadius: 10,
                        padding: "10px 12px",
                        border: "1px solid #d9e8f3",
                        background: "#fbfdff",
                        color: "#18324b",
                        boxShadow: "none",
                      }}
                    />
                  </div>
                </div>

                {/* TRAINING TYPE */}
                <div style={{ marginTop: 13, marginBottom: 13 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#18324b",
                      marginBottom: 6,
                    }}
                  >
                    Training Type
                  </label>

                  <select
                    required
                    className="form-select"
                    defaultValue=""
                    style={{
                      width: "100%",
                      fontSize: 13,
                      borderRadius: 10,
                      padding: "10px 12px",
                      border: "1px solid #d9e8f3",
                      background: "#fbfdff",
                      color: "#18324b",
                      boxShadow: "none",
                    }}
                  >
                    <option value="" disabled>
                      Select training type
                    </option>

                    <option value="Online Training">
                      Online Training
                    </option>

                    <option value="Offline Training">
                      Offline Training
                    </option>
                  </select>
                </div>

                {/* DESCRIPTION */}
                <div style={{ marginBottom: 17 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#18324b",
                      marginBottom: 6,
                    }}
                  >
                    Description
                  </label>

                  <textarea
                    rows={3}
                    placeholder="Tell us what you would like to know..."
                    className="form-control"
                    style={{
                      width: "100%",
                      fontSize: 13,
                      borderRadius: 10,
                      padding: "10px 12px",
                      border: "1px solid #d9e8f3",
                      background: "#fbfdff",
                      color: "#18324b",
                      resize: "none",
                      boxShadow: "none",
                    }}
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    background:
                      "linear-gradient(135deg,#087bc9,#168fe1)",
                    color: "white",
                    border: "none",
                    borderRadius: 11,
                    padding: "11px 18px",
                    fontSize: 13,
                    fontWeight: 800,
                    boxShadow:
                      "0 10px 25px rgba(8,123,201,0.20)",
                    cursor: "pointer",
                  }}
                >
                  Submit Enquiry
                  <i className="bi bi-arrow-right ms-2" />
                </button>
              </form>
            </div>
          </div>

          {/* MODAL ANIMATION */}
          <style>
            {`
              @keyframes ciitModalIn {
                from {
                  opacity: 0;
                  transform: translateY(18px) scale(0.97);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
            `}
          </style>
        </div>
      )}
    </div>
  );
}