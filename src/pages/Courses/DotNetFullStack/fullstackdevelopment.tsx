import { useState } from "react";

export default function FullStackDevelopment() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const outcomes = [
    {
      title: "Modern Tech Stack Mastery",
      text: "Proficiency in C#, ASP.NET Core, Entity Framework Core, and SQL Server, combined with front-end frameworks like React, Angular, or Blazor.",
    },
    {
      title: "End-to-End Development",
      text: "Master the full lifecycle of an application, from designing interactive UIs to implementing server logic and secure databases.",
    },
    {
      title: "High Employability",
      text: "Most learners secure job-ready roles within 6–12 months of completion.",
    },
    {
      title: "Diverse Job Roles",
      text: "Graduates qualify for positions such as Full Stack Developer, .NET Developer, Software Engineer, Cloud Developer, and Solution Architect.",
    },
    {
      title: "Salary Growth",
      text: "In India, entry-level salaries typically range from ₹4.5 – ₹6.5 LPA, while mid-level professionals (3–5 years) can earn ₹10 – ₹15 LPA. Certified engineers often see a 20–40% hike in their current packages.",
    },
    {
      title: "Problem-Solving & Soft Skills",
      text: "Enhanced ability to debug across layers, communicate technical trade-offs to stakeholders, and work effectively in Agile environments.",
    },
  ];

  const benefits = [
    {
      title: "All-Round Technical Proficiency",
      text: "A full stack .NET developer possesses knowledge of both user interface technologies like HTML, CSS, JavaScript, Blazor and server-side frameworks such as ASP.NET Core and C#. This combination allows them to independently build and manage complete applications.",
    },
    {
      title: "High Employability and Demand",
      text: "Organizations prefer professionals who can manage end-to-end software development. Full stack developers reduce the need for large teams by managing both front-end and back-end tasks, making them a top choice in hiring decisions.",
    },
    {
      title: "Better Compensation",
      text: "Because of their wide skill set, full stack .NET developers often earn higher salaries than developers who specialize in only one part of the tech stack. Their ability to handle diverse responsibilities adds to their overall market value.",
    },
    {
      title: "Greater Project Ownership",
      text: "They are capable of understanding and managing every layer of a software project, from designing the user interface to integrating with databases and deploying to servers. This leads to better control and deeper involvement in projects.",
    },
    {
      title: "Career Growth Opportunities",
      text: "Having expertise across various technologies opens up several career paths, including roles like Software Architect, Tech Lead, or Solution Engineer. Over time, they can even move into leadership or consulting positions.",
    },
    {
      title: "Improved Problem Solving",
      text: "Full stack .NET developers can quickly identify and fix issues as they arise in both client and server components. This ability to see the bigger picture helps streamline development and reduce downtime.",
    },
    {
      title: "Ideal for Freelance and Startups",
      text: "Since full stack .NET developers can manage full project cycles alone, they’re well-suited for freelance work and early-stage startups where teams are small but projects are still demanding.",
    },
    {
      title: "Faster Development Cycles",
      text: "When a single developer manages both the front-end and back-end, communication gaps are reduced, and development progresses faster. This agility is beneficial in environments that require rapid delivery.",
    },
    {
      title: "Broad Technology Exposure",
      text: "Working across the stack introduces developers to a wide range of tools and frameworks such as Visual Studio, Entity Framework, LINQ, Azure DevOps, SQL Server, and REST APIs—building a rich and varied skill set.",
    },
  ];

  const whoCanLearn = [
    {
      title: "Freshers & Graduates",
      text: "Students or recent graduates from fields like BCA, BSc (CS/IT), BE/B.Tech (CS/IT), and MCA are the most common candidates.",
    },
    {
      title: "Career Switchers",
      text: "Individuals from non-IT backgrounds such as commerce, arts, or management can successfully transition through structured bootcamps.",
    },
    {
      title: "Existing Developers",
      text: "Backend or frontend developers looking to master the other half of the stack.",
    },
    {
      title: "QA & Manual Testers",
      text: "Professionals aiming to move into development roles by learning full-cycle application building.",
    },
    {
      title: "Entrepreneurs",
      text: "Startup founders wanting to understand the full technical lifecycle of their product.",
    },
  ];

  const careerPath = [
    {
      title: "Junior Developer (0–2 Years)",
      text: "Focuses on C# 12+ fundamentals, ASP.NET Core, and basic SQL. Expected to assist in coding and debugging within Agile teams.",
    },
    {
      title: "Software Engineer (2–5 Years)",
      text: "Manages independent modules, integrates APIs, and begins specializing in paths like Blazor (frontend) or Microservices (backend).",
    },
    {
      title: "Senior Developer (5–8 Years)",
      text: "Acts as a technical owner. Beyond coding, they are expected to design scalable architectures, mentor teams, and debug complex production issues.",
    },
    {
      title: "Technical/Solution Architect (8+ Years)",
      text: "Strategic leadership roles focusing on enterprise-wide system design, cloud-native migration (Azure/AWS), and cross-platform strategies.",
    },
  ];

  const whyLearn = [
    {
      title: "Enterprise Dominance & Stability",
      text: 'While startups often jump between trendy stacks, .NET remains widely used in banking, healthcare, and logistics. Companies in these sectors offer long-term opportunities for those who master structured coding environments.',
    },
    {
      title: "Performance Leadership",
      text: "According to the supplied source material, .NET, specifically ASP.NET Core, performs strongly in areas such as JSON serialization and database access. Native AOT compilation further supports fast and memory-efficient applications.",
    },
    {
      title: 'The "AI-Augmented" Developer',
      text: "The supplied material describes deep integration between .NET and AI, including Microsoft.Extensions.AI, enabling developers to build LLM-powered applications and agentic tools.",
    },
    {
      title: "True Versatility",
      text: "A single C# skill set can be used across Web, Cloud, Mobile/Desktop and Games.",
    },
    {
      title: "Better Career Entry for Juniors",
      text: "The supplied course material states that .NET can provide opportunities for disciplined learners seeking junior positions.",
    },
  ];

  const courseHighlights = [
    {
      title: "Front-End Development",
      text: "This layer focuses on building the user interface and ensuring a responsive user experience.",
      items: [
        "HTML5 — Semantic tags, Forms, Media",
        "CSS3 — Flexbox, Grid, Animations",
        "Bootstrap 5 or Tailwind CSS",
        "JavaScript & TypeScript — ES6+, DOM manipulation and type-safe code",
        "Angular — Modules, Components, RxJS",
        "React — Hooks, State and Props",
      ],
    },
    {
      title: "Back-End Development",
      text: "The core application engine is typically built using the Microsoft ecosystem.",
      items: [
        "C# Language Fundamentals",
        "Object-Oriented Programming",
        "ASP.NET Core MVC",
        "Minimal APIs",
        "RESTful Web API",
        "JWT and OAuth2",
        "Entity Framework Core",
        "Database First and Code First",
        "Migrations and LINQ queries",
      ],
    },
    {
      title: "Database Management",
      text: "Developers must manage data persistence and retrieval efficiently.",
      items: [
        "Microsoft SQL Server",
        "DDL / DML commands",
        "Joins",
        "Stored Procedures",
        "Triggers",
        "Indexes",
        "Introduction to MongoDB",
      ],
    },
    {
      title: "Advanced Topics & Design Patterns",
      text: "Modern application development also requires architecture, design and security knowledge.",
      items: [
        "Clean Architecture",
        "Repository Pattern",
        "Dependency Injection",
        "Security",
      ],
    },
  ];

  const salaryData = [
    ["Fresher (0–1 yr)", "₹3.5L – ₹6L"],
    ["Junior (1–3 yrs)", "₹6L – ₹11L"],
    ["Mid-Level (4–7 yrs)", "₹11L – ₹20L"],
    ["Senior / Architect", "₹22L – ₹45L+"],
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
            "linear-gradient(135deg,#eaf7ff 0%,#ffffff 48%,#e8f5ff 100%)",
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
                  fontSize: "clamp(32px,5vw,58px)",
                  lineHeight: 1.08,
                  fontWeight: 800,
                  letterSpacing: "-2px",
                  color: "#101b30",
                  marginBottom: 22,
                }}
              >
                Learn Latest Dot Net
                <br />
                <span style={{ color: "#1687dc" }}>
                  Full Stack Development
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
                CIIT's Dot Net Training is ideal for both freshers and working
                professionals interested in building a career as a Dot Net
                full stack developer.
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
                Get Your Dream IT Job Just in 6 Months
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
                <div
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: 20,
                    background: "#e8f5ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1687dc",
                    fontSize: 30,
                    marginBottom: 20,
                  }}
                >
                  <i className="bi bi-code-square" />
                </div>

                <h3
                  style={{
                    fontWeight: 800,
                    color: "#101b30",
                    marginBottom: 12,
                  }}
                >
                  .NET Full Stack
                </h3>

                <p
                  style={{
                    color: "#60788d",
                    lineHeight: 1.75,
                    marginBottom: 0,
                  }}
                >
                  Learn frontend, backend, databases, APIs, cloud technologies
                  and modern .NET development through a structured full-stack
                  training path.
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
          INTRODUCTION
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
                  padding: 35,
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
                  Learn Latest Dot Net & Become a Full Stack Developer
                </h2>

                <p style={{ lineHeight: 1.9, color: "#566e82" }}>
                  .NET Core is a free, open-source, and cross-platform software
                  framework developed by Microsoft for building modern,
                  high-performance applications. It represents a significant
                  evolution of the earlier .NET platform, designed to be more
                  lightweight, modular, and flexible.
                </p>

                <p style={{ lineHeight: 1.9, color: "#566e82" }}>
                  .NET is in demand due to its versatility, performance, and
                  continued support from Microsoft. It is used across many
                  industries, including finance, healthcare, and e-commerce,
                  to build secure and scalable applications, with strong job
                  opportunities in areas like cloud-based solutions and
                  cross-platform development.
                </p>

                <p style={{ lineHeight: 1.9, color: "#566e82" }}>
                  CIIT's .NET Full Stack Development course offers an ideal
                  opportunity for individuals passionate about building
                  projects from the ground up. CIIT serves as an excellent
                  platform for those aspiring for opportunities in the IT
                  industry as a Dot Net Full Stack Developer.
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
                        Full Stack Technology Path
                      </strong>

                      <p
                        style={{
                          margin: "7px 0 0",
                          color: "#60788d",
                          lineHeight: 1.75,
                        }}
                      >
                        C#, ASP.NET Core, Entity Framework Core, SQL Server,
                        React, Angular, Blazor, REST APIs, Azure DevOps and
                        modern development tools.
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
          OUTCOMES
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
              Outcomes of the .NET Training
            </h2>

            <p
              style={{
                maxWidth: 800,
                margin: "12px auto 0",
                color: "#71879a",
                lineHeight: 1.75,
              }}
            >
              .NET full-stack development training provides a comprehensive
              pathway to becoming a versatile software professional,
              equipping you with the skills to build, deploy, and manage
              entire web applications from scratch.
            </p>
          </div>

          <div className="row g-4">
            {outcomes.map((item, index) => (
              <div className="col-md-6" key={item.title}>
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
                    <i className="bi bi-star-fill" />
                  </div>

                  <div>
                    <h5
                      style={{
                        color: "#101b30",
                        fontWeight: 800,
                        marginBottom: 8,
                      }}
                    >
                      {item.title}
                    </h5>

                    <p
                      style={{
                        margin: 0,
                        lineHeight: 1.75,
                        color: "#526a7e",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 35,
              background: "white",
              border: "1px solid #dcebf7",
              borderRadius: 20,
              padding: 24,
              color: "#60788d",
              lineHeight: 1.8,
            }}
          >
            With flexible learning options—both online and offline—you will
            receive expert-led instruction, job assistance, and certification
            guidance to support your career in Dot Net.
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6">
              <div
                style={{
                  background: "white",
                  border: "1px solid #dcebf7",
                  borderRadius: 20,
                  padding: 22,
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
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
                  }}
                >
                  <i className="bi bi-clock-fill" />
                </div>

                <div>
                  <div style={{ fontWeight: 800, color: "#18324b" }}>
                    Weekdays (Mon-Fri)
                  </div>
                  <div style={{ color: "#60788d", marginTop: 5 }}>
                    6 Months
                  </div>

                  <div
                    style={{
                      fontWeight: 800,
                      color: "#18324b",
                      marginTop: 8,
                    }}
                  >
                    Weekends (Sat & Sun)
                  </div>
                  <div style={{ color: "#60788d", marginTop: 5 }}>
                    7 Months
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                style={{
                  height: "100%",
                  background: "white",
                  border: "1px solid #dcebf7",
                  borderRadius: 20,
                  padding: 22,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className="bi bi-star-fill"
                    style={{
                      color: "#1687dc",
                      fontSize: 20,
                    }}
                  />
                ))}

                <span
                  style={{
                    marginLeft: 8,
                    color: "#526a7e",
                    fontWeight: 700,
                  }}
                >
                  (5/5 Rating)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSE INFORMATION
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
                Learn .NET Full Stack Development in a practical environment
              </h2>

              <div style={{ marginTop: 28 }}>
                {[
                  [
                    "bi-calendar-check",
                    "Batches Available",
                    "Weekdays / Weekends",
                  ],
                  [
                    "bi-laptop",
                    "Training Mode",
                    "Classroom & Online",
                  ],
                  [
                    "bi-translate",
                    "Language",
                    "English, Hindi, Marathi",
                  ],
                  ["bi-clock", "Course Duration", "6 Months"],
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
              WHY .NET FULL STACK
            </span>

            <h2
              style={{
                marginTop: 10,
                color: "#101b30",
                fontWeight: 800,
              }}
            >
              What are the Benefits of Full Stack .Net Developer?
            </h2>
          </div>

          <div className="row g-4">
            {benefits.map((item) => (
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
                    <i className="bi bi-star-fill" />
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
          WHY LEARN .NET IN 2026
      ========================================================= */}
      <section style={{ padding: "75px 0" }}>
        <div className="container">
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
              CAREER & TECHNOLOGY
            </span>

            <h2
              style={{
                marginTop: 12,
                color: "#101b30",
                fontWeight: 800,
              }}
            >
              Why Learn .NET in 2026?
            </h2>

            <p
              style={{
                color: "#60788d",
                lineHeight: 1.85,
              }}
            >
              In 2026, learning .NET remains a career option connecting
              enterprise development with areas such as AI and cloud-native
              architecture. The supplied course material highlights .NET 10
              and modern Visual Studio tooling as part of this ecosystem.
            </p>

            <div className="row g-4 mt-2">
              {whyLearn.map((item, index) => (
                <div className="col-lg-6" key={item.title}>
                  <div
                    style={{
                      height: "100%",
                      background: "#f8fcff",
                      border: "1px solid #dcebf7",
                      borderRadius: 20,
                      padding: 23,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 13,
                      }}
                    >
                      <div
                        style={{
                          minWidth: 40,
                          width: 40,
                          height: 40,
                          borderRadius: 13,
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

                      <div>
                        <h5
                          style={{
                            margin: 0,
                            fontWeight: 800,
                            color: "#101b30",
                          }}
                        >
                          {item.title}
                        </h5>

                        <p
                          style={{
                            margin: "8px 0 0",
                            color: "#60788d",
                            lineHeight: 1.75,
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

            {/* Versatility */}
            <div
              style={{
                marginTop: 28,
                padding: 24,
                borderRadius: 20,
                background: "#edf7ff",
                border: "1px solid #d8edfc",
              }}
            >
              <h5
                style={{
                  fontWeight: 800,
                  color: "#101b30",
                  marginBottom: 18,
                }}
              >
                One Language, Multiple Platforms
              </h5>

              <div className="row g-3">
                {[
                  ["Web", "High-scale APIs and interactive UIs with Blazor."],
                  [
                    "Cloud",
                    "Integration with Microsoft Azure for serverless and containerized applications.",
                  ],
                  [
                    "Mobile / Desktop",
                    "Cross-platform applications using .NET MAUI.",
                  ],
                  [
                    "Games",
                    "C# is widely used for game development through platforms such as Unity.",
                  ],
                ].map(([title, text]) => (
                  <div className="col-md-6" key={title}>
                    <div
                      style={{
                        background: "white",
                        border: "1px solid #dcebf7",
                        borderRadius: 16,
                        padding: 18,
                      }}
                    >
                      <strong style={{ color: "#1687dc" }}>
                        {title}
                      </strong>

                      <p
                        style={{
                          color: "#60788d",
                          lineHeight: 1.7,
                          margin: "6px 0 0",
                        }}
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Salary */}
            <div
              style={{
                marginTop: 28,
                padding: 25,
                borderRadius: 20,
                background: "#f8fcff",
                border: "1px solid #dcebf7",
              }}
            >
              <h5
                style={{
                  fontWeight: 800,
                  color: "#101b30",
                  marginBottom: 18,
                }}
              >
                Projected 2026 Salary Packages (India)
              </h5>

              <div className="row g-3">
                {salaryData.map(([level, salary]) => (
                  <div className="col-md-6 col-lg-3" key={level}>
                    <div
                      style={{
                        background: "white",
                        border: "1px solid #dcebf7",
                        borderRadius: 16,
                        padding: 18,
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#71879a",
                        }}
                      >
                        {level}
                      </div>

                      <div
                        style={{
                          marginTop: 7,
                          fontSize: 20,
                          fontWeight: 800,
                          color: "#1687dc",
                        }}
                      >
                        {salary}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSE HIGHLIGHTS
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
              COURSE HIGHLIGHTS
            </span>

            <h2
              style={{
                marginTop: 10,
                color: "#101b30",
                fontWeight: 800,
              }}
            >
              .NET Full Stack Development Curriculum
            </h2>

            <p
              style={{
                maxWidth: 850,
                margin: "12px auto 0",
                color: "#71879a",
                lineHeight: 1.75,
              }}
            >
              A .NET Full Stack Development syllabus encompasses front-end,
              back-end, and database technologies, along with DevOps and cloud
              integration.
            </p>
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
                      marginBottom: 22,
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

                  <p
                    style={{
                      color: "#60788d",
                      lineHeight: 1.75,
                    }}
                  >
                    {section.text}
                  </p>

                  {section.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "flex-start",
                        padding: "10px 0",
                        borderTop: "1px solid #edf2f6",
                      }}
                    >
                      <i
                        className="bi bi-check-circle-fill"
                        style={{
                          color: "#1687dc",
                          marginTop: 3,
                        }}
                      />

                      <span
                        style={{
                          color: "#526a7e",
                          lineHeight: 1.65,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 35,
              background: "white",
              border: "1px solid #dcebf7",
              borderRadius: 22,
              padding: 26,
              color: "#60788d",
              lineHeight: 1.8,
            }}
          >
            By the end of this Dot Net Full Stack Development Course, you’ll
            be prepared to work toward roles such as Dot Net Developer, Dot
            Net Full Stack Developer, Junior .NET Developer, Mid-Level .NET
            Developer, Senior .NET Developer, Back-End .NET Developer and
            Front-End .NET Developer.
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO CAN LEARN
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
              WHO CAN LEARN
            </span>

            <h2
              style={{
                marginTop: 10,
                fontWeight: 800,
                color: "#101b30",
              }}
            >
              Who can do .NET Full Stack Development?
            </h2>

            <p
              style={{
                maxWidth: 850,
                margin: "12px auto 0",
                color: "#71879a",
                lineHeight: 1.75,
              }}
            >
              Training for .NET full stack development is open to a wide range
              of individuals, from complete beginners to experienced IT
              professionals.
            </p>
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
            <div className="col-lg-8">
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
                In 2026, the .NET career path has transitioned from traditional
                Windows-centric development to a cloud-first and
                AI-integrated ecosystem. The supplied material describes .NET
                10 as the current long-term support baseline.
              </p>

              <div style={{ marginTop: 25 }}>
                {careerPath.map((item, index) => (
                  <div
                    key={item.title}
                    style={{
                      background: "white",
                      border: "1px solid #dcebf7",
                      borderRadius: 20,
                      padding: 22,
                      marginBottom: 15,
                      display: "flex",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        minWidth: 45,
                        width: 45,
                        height: 45,
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

                    <div>
                      <h5
                        style={{
                          margin: 0,
                          fontWeight: 800,
                          color: "#101b30",
                        }}
                      >
                        {item.title}
                      </h5>

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
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div
                style={{
                  background: "white",
                  border: "1px solid #dcebf7",
                  borderRadius: 25,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 17,
                    background: "#e8f5ff",
                    color: "#1687dc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    marginBottom: 18,
                  }}
                >
                  <i className="bi bi-diagram-3-fill" />
                </div>

                <h4
                  style={{
                    fontWeight: 800,
                    color: "#101b30",
                  }}
                >
                  Career Growth
                </h4>

                <p
                  style={{
                    color: "#60788d",
                    lineHeight: 1.75,
                  }}
                >
                  These positions offer opportunities across technology
                  companies and startups worldwide, with progression from
                  development roles toward architecture and technical
                  leadership.
                </p>

                <div
                  style={{
                    marginTop: 20,
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
                  Build skills across application development, cloud,
                  databases, DevOps and modern .NET technologies.
                </div>
              </div>
            </div>
          </div>

          {/* FINAL CTA */}
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
              Build Your .NET Full Stack Skill Set
            </h3>

            <p
              style={{
                maxWidth: 760,
                margin: "12px auto 24px",
                lineHeight: 1.75,
                opacity: 0.9,
              }}
            >
              Learn frontend, backend, databases, APIs, cloud integration and
              modern .NET development through a structured training path.
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
                border: "none",
              }}
            >
              Enquire Now
              <i className="bi bi-arrow-right ms-2" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENQUIRY MODAL — SAME HEADER DESIGN
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
            background: "rgba(6,28,48,0.65)",
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
            {/* MODAL HEADER */}
            <div
              style={{
                background:
                  "linear-gradient(135deg,#0c4f82,#168fe1)",
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
                  border:
                    "1px solid rgba(255,255,255,0.35)",
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
                    background:
                      "rgba(255,255,255,0.16)",
                    border:
                      "1px solid rgba(255,255,255,0.18)",
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

            {/* MODAL BODY */}
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
                <div
                  style={{
                    marginTop: 13,
                    marginBottom: 13,
                  }}
                >
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
                    defaultValue=""
                    className="form-select"
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