import { useEffect, useState } from "react";

export default function FullStackDevelopmentAIAndDevOps() {
  const [imageExpanded, setImageExpanded] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    trainingType: "",
    description: "",
  });

  const accomplishments = [
    {
      title: "Design and build robust .NET Core applications",
      description:
        "Develop high-performance, cross-platform applications and microservices using C#, ASP.NET Core, and Entity Framework Core.",
    },
    {
      title: "Automate the software delivery lifecycle",
      description:
        "Implement Continuous Integration/Continuous Deployment (CI/CD) pipelines using tools like Azure DevOps, Jenkins, or GitHub Actions to automate building, testing, and deployment processes.",
    },
    {
      title: "Implement Infrastructure as Code (IaC)",
      description:
        "Automate the provisioning and management of cloud infrastructure on platforms such as Azure, AWS, or GCP using tools such as Terraform or Ansible.",
    },
    {
      title: "Integrate AI and Machine Learning (ML) models",
      description:
        "Incorporate AI and ML functionalities into .NET applications and use machine learning for tasks like predictive monitoring, automated root cause analysis, and smart resource optimization.",
    },
    {
      title: "Develop intelligent monitoring and self-healing systems",
      description:
        "Set up AI-driven monitoring tools that detect anomalies, predict failures, and automatically execute remedial actions, reducing downtime and manual intervention.",
    },
    {
      title: "Enhance application security",
      description:
        "Integrate security practices throughout the development lifecycle using DevSecOps, with AI-assisted vulnerability scanning and threat detection.",
    },
    {
      title: "Lead collaborative, cross-functional teams",
      description:
        "Apply DevOps cultural practices to foster communication and shared responsibility between development, operations, and data science teams.",
    },
    {
      title: "Optimize cloud resource management",
      description:
        "Use AI-powered insights to ensure efficient utilization and scaling of cloud resources, leading to cost optimization.",
    },
  ];

  const benefits = [
    {
      title: "Unified Developer Experience",
      description:
        "Developers can leverage existing C# skills and familiar Visual Studio tooling to build, train, and deploy AI/ML models using resources such as ML.NET and Semantic Kernel SDKs.",
    },
    {
      title: "High Performance and Scalability",
      description:
        ".NET Core is optimized for performance. Combined with Azure auto-scaling and serverless options such as Azure Functions and Kubernetes Service, applications can handle large workloads efficiently.",
    },
    {
      title: "Seamless Cloud Integration",
      description:
        ".NET Core is cloud-native and designed to integrate with Azure services, simplifying deployment, management, and monitoring of AI solutions.",
    },
    {
      title: "Greater Project Ownership",
      description:
        "Leverage Azure cloud-native services for serverless computing, microservices, and managed databases.",
    },
    {
      title: "Access to Rich Azure AI Ecosystem",
      description:
        "Developers gain access to AI services such as Vision, Speech, Language, Azure OpenAI Service, and Azure Machine Learning.",
    },
    {
      title: "Faster Time-to-Market",
      description:
        "Pre-built AI models and integrated development tools can help rapidly prototype and deploy AI solutions.",
    },
    {
      title: "Robust Security & Compliance",
      description:
        "Azure provides enterprise-grade security capabilities including data encryption, access controls, and compliance features.",
    },
    {
      title: "Innovation & Competitive Edge",
      description:
        "Rapidly prototype and deploy solutions using technologies such as Generative AI and Large Language Models.",
    },
  ];

  const learners = [
    {
      title: "Existing .NET/C# Developers",
      description:
        "Developers already proficient in C# and .NET can extend their skills to build intelligent applications and integrate Azure AI services.",
    },
    {
      title: "Software Developers",
      description:
        "Developers using languages such as Python or Java who want to expand into the Microsoft ecosystem and .NET development.",
    },
    {
      title: "AI Engineers & Data Scientists",
      description:
        "Professionals building, training, and deploying machine learning models can use Azure Machine Learning and .NET for enterprise application integration.",
    },
    {
      title: "Cloud Professionals",
      description:
        "Azure administrators and architects can learn to design and manage scalable, secure, and cost-effective AI solutions in Azure.",
    },
    {
      title: "DevOps Engineers",
      description:
        "Professionals working with CI/CD pipelines can specialize in MLOps and automate deployment and monitoring of AI applications.",
    },
    {
      title: "Students & Career Changers",
      description:
        "Individuals with a foundation in computer science and programming can begin learning cloud and AI technologies.",
    },
  ];

  const handleFormChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const openEnquiry = () => {
    setSubmitted(false);
    setEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    setEnquiryOpen(false);
    setSubmitted(false);
  };

  useEffect(() => {
    if (!enquiryOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeEnquiry();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [enquiryOpen]);

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "#f5faff",
          color: "#18324b",
          fontFamily:
            "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* =====================================================
            HERO
        ===================================================== */}
        <section
          style={{
            background:
              "linear-gradient(135deg, #eaf7ff 0%, #ffffff 55%, #e8f5ff 100%)",
            padding: "65px 20px 55px",
            borderBottom: "1px solid #dcebf7",
          }}
        >
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <div
                  style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    background: "#e1f3ff",
                    color: "#087bc9",
                    borderRadius: "30px",
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "1.2px",
                    marginBottom: "18px",
                  }}
                >
                  DOT NET FULL STACK DEVELOPMENT
                </div>

                <h1
                  style={{
                    fontSize: "clamp(36px, 5vw, 56px)",
                    lineHeight: 1.08,
                    fontWeight: 800,
                    letterSpacing: "-1.5px",
                    color: "#10263d",
                    marginBottom: "22px",
                  }}
                >
                  Full Stack Development
                  <br />
                  with{" "}
                  <span style={{ color: "#1687dc" }}>
                    Azure DevOps & AI
                  </span>
                </h1>

                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.85,
                    color: "#5b7185",
                    maxWidth: "700px",
                    marginBottom: "15px",
                  }}
                >
                  Learn the latest .NET Full Stack development with Azure
                  DevOps and AI integration through structured learning and
                  hands-on projects.
                </p>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.8,
                    color: "#64798c",
                    maxWidth: "700px",
                  }}
                >
                  Build core development skills, cloud expertise, DevOps
                  practices and AI/ML knowledge required for modern software
                  development.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">
                  <button
                    type="button"
                    onClick={openEnquiry}
                    style={{
                      border: "none",
                      borderRadius: "12px",
                      padding: "13px 23px",
                      background:
                        "linear-gradient(135deg,#087bc9,#168fe1)",
                      color: "#ffffff",
                      fontWeight: 800,
                      fontSize: "14px",
                      boxShadow: "0 10px 25px rgba(22,135,220,.18)",
                      cursor: "pointer",
                    }}
                  >
                    Enquire Now
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>

              <div className="col-lg-5">
                <div
                  style={{
                    background: "#ffffff",
                    padding: "12px",
                    borderRadius: "24px",
                    border: "1px solid #dcebf7",
                    boxShadow:
                      "0 20px 50px rgba(22, 135, 220, 0.12)",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1100&q=85"
                    alt=".NET Full Stack Development"
                    onClick={() => setImageExpanded(true)}
                    style={{
                      width: "100%",
                      height: "330px",
                      objectFit: "cover",
                      borderRadius: "18px",
                      cursor: "zoom-in",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            COURSE INFORMATION
        ===================================================== */}
        <section style={{ padding: "35px 20px" }}>
          <div className="container">
            <div className="row g-3">
              {[
                ["Course Duration", "9 Months", "bi-clock"],
                ["Training Mode", "Classroom & Online", "bi-display"],
                [
                  "Batches Available",
                  "Weekdays / Weekends",
                  "bi-calendar3",
                ],
                ["Language", "English, Hindi, Marathi", "bi-translate"],
              ].map(([title, value, icon], index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div
                    style={{
                      background: "#ffffff",
                      border: "1px solid #dcebf7",
                      borderRadius: "20px",
                      padding: "24px 20px",
                      height: "100%",
                      boxShadow:
                        "0 8px 25px rgba(22,75,110,.05)",
                    }}
                  >
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "14px",
                        background: "#e8f5ff",
                        color: "#087bc9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "21px",
                        marginBottom: "15px",
                      }}
                    >
                      <i className={`bi ${icon}`}></i>
                    </div>

                    <div
                      style={{
                        fontSize: "12px",
                        color: "#7c8fa0",
                        fontWeight: 700,
                        marginBottom: "5px",
                      }}
                    >
                      {title}
                    </div>

                    <div
                      style={{
                        fontSize: "16px",
                        color: "#17324b",
                        fontWeight: 800,
                      }}
                    >
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}
        <section
          style={{
            padding: "45px 20px 65px",
            background: "#ffffff",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div
                  style={{
                    fontSize: "12px",
                    color: "#087bc9",
                    fontWeight: 800,
                    letterSpacing: "2px",
                    marginBottom: "10px",
                  }}
                >
                  INTRODUCTION
                </div>

                <h2
                  style={{
                    fontSize: "36px",
                    fontWeight: 800,
                    color: "#10263d",
                    marginBottom: "20px",
                  }}
                >
                  Become a Modern .NET Full Stack Developer
                </h2>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.9,
                    color: "#5c7184",
                  }}
                >
                  To become a modern .NET Full Stack Developer with Azure
                  DevOps and AI integration, the learning approach combines
                  core development skills, cloud expertise, DevOps practices,
                  and AI/ML knowledge with hands-on projects.
                </p>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.9,
                    color: "#5c7184",
                  }}
                >
                  To become a .NET full-stack developer with Azure and AI
                  integration, the course focuses on mastering .NET Core,
                  Azure cloud services, and integrating AI capabilities using
                  Azure AI tools and libraries.
                </p>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.9,
                    color: "#5c7184",
                  }}
                >
                  CIIT's .NET with Azure course provides an opportunity for
                  learners interested in building projects from the ground up
                  and developing skills for opportunities in the IT industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT CAN YOU ACCOMPLISH
        ===================================================== */}
        <section style={{ padding: "65px 20px" }}>
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8">
                <div
                  style={{
                    fontSize: "12px",
                    color: "#087bc9",
                    fontWeight: 800,
                    letterSpacing: "2px",
                    marginBottom: "10px",
                  }}
                >
                  LEARNING OUTCOMES
                </div>

                <h2
                  style={{
                    fontSize: "36px",
                    fontWeight: 800,
                    color: "#10263d",
                    marginBottom: "18px",
                  }}
                >
                  What Can You Accomplish?
                </h2>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.85,
                    color: "#5d7185",
                    marginBottom: "28px",
                  }}
                >
                  Upon completing training in .NET Core with DevOps and AI,
                  learners can work across the lifecycle of intelligent,
                  cloud-native software systems and understand automated
                  software delivery.
                </p>

                {accomplishments.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      gap: "16px",
                      marginBottom: "24px",
                    }}
                  >
                    <div
                      style={{
                        minWidth: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "#e8f5ff",
                        color: "#087bc9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                      }}
                    >
                      ✓
                    </div>

                    <div>
                      <h5
                        style={{
                          fontSize: "17px",
                          fontWeight: 800,
                          color: "#17324b",
                          marginBottom: "7px",
                        }}
                      >
                        {item.title}
                      </h5>

                      <p
                        style={{
                          margin: 0,
                          color: "#63788b",
                          fontSize: "14px",
                          lineHeight: 1.75,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-lg-4">
                <div
                  style={{
                    position: "sticky",
                    top: "100px",
                    background: "#edf7ff",
                    border: "1px solid #d7eaf7",
                    borderRadius: "24px",
                    padding: "25px",
                  }}
                >
                  <h4
                    style={{
                      color: "#17324b",
                      fontWeight: 800,
                      marginBottom: "20px",
                    }}
                  >
                    Course Information
                  </h4>

                  <img
                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=85"
                    alt="Dot Net development"
                    style={{
                      width: "100%",
                      height: "210px",
                      objectFit: "cover",
                      borderRadius: "16px",
                      marginBottom: "20px",
                    }}
                  />

                  <p style={{ color: "#526a7e", fontSize: "14px" }}>
                    <b>Training:</b> Classroom & Online
                  </p>

                  <p style={{ color: "#526a7e", fontSize: "14px" }}>
                    <b>Batches:</b> Weekdays / Weekends
                  </p>

                  <p style={{ color: "#526a7e", fontSize: "14px" }}>
                    <b>Language:</b> English, Hindi, Marathi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CORE BENEFITS
        ===================================================== */}
        <section
          style={{
            background: "#edf7ff",
            padding: "65px 20px",
          }}
        >
          <div className="container">
            <div className="text-center mb-5">
              <div
                style={{
                  fontSize: "12px",
                  color: "#087bc9",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}
              >
                CORE BENEFITS
              </div>

              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#10263d",
                }}
              >
                .NET + Azure + AI/ML
              </h2>
            </div>

            <div className="row g-4">
              {benefits.map((item, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div
                    style={{
                      background: "#ffffff",
                      border: "1px solid #dcebf7",
                      borderRadius: "20px",
                      padding: "24px",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "12px",
                        background: "#e8f5ff",
                        color: "#087bc9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        marginBottom: "15px",
                      }}
                    >
                      {index + 1}
                    </div>

                    <h5
                      style={{
                        fontWeight: 800,
                        color: "#17324b",
                        fontSize: "16px",
                        marginBottom: "10px",
                      }}
                    >
                      {item.title}
                    </h5>

                    <p
                      style={{
                        color: "#63788b",
                        fontSize: "13px",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHO CAN LEARN
        ===================================================== */}
        <section style={{ padding: "70px 20px" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #dcebf7",
                    borderRadius: "25px",
                    padding: "35px",
                    boxShadow:
                      "0 12px 35px rgba(22,75,110,.06)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#087bc9",
                      fontWeight: 800,
                      letterSpacing: "2px",
                      marginBottom: "10px",
                    }}
                  >
                    ELIGIBILITY
                  </div>

                  <h2
                    style={{
                      fontSize: "34px",
                      fontWeight: 800,
                      color: "#10263d",
                      marginBottom: "20px",
                    }}
                  >
                    Who Can Learn This Course?
                  </h2>

                  <p
                    style={{
                      color: "#63788b",
                      lineHeight: 1.8,
                    }}
                  >
                    The future of .NET development includes strong focus on
                    cross-platform capabilities and cloud-based solutions.
                  </p>

                  <div className="row g-4 mt-2">
                    {learners.map((item, index) => (
                      <div className="col-md-6" key={index}>
                        <div
                          style={{
                            background: "#f7fbfe",
                            border: "1px solid #e0edf6",
                            borderRadius: "17px",
                            padding: "20px",
                            height: "100%",
                          }}
                        >
                          <h5
                            style={{
                              fontSize: "16px",
                              fontWeight: 800,
                              color: "#17324b",
                            }}
                          >
                            <span
                              style={{
                                color: "#087bc9",
                                marginRight: "8px",
                              }}
                            >
                              ★
                            </span>
                            {item.title}
                          </h5>

                          <p
                            style={{
                              color: "#65798c",
                              fontSize: "14px",
                              lineHeight: 1.75,
                              marginBottom: 0,
                            }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            COURSE HIGHLIGHTS
        ===================================================== */}
        <section
          style={{
            background: "#ffffff",
            padding: "20px 20px 70px",
          }}
        >
          <div className="container">
            <div
              style={{
                background: "#f7fbfe",
                border: "1px solid #dcebf7",
                borderRadius: "25px",
                padding: "35px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  color: "#087bc9",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}
              >
                COURSE HIGHLIGHTS
              </div>

              <h2
                style={{
                  fontSize: "34px",
                  fontWeight: 800,
                  color: "#10263d",
                  marginBottom: "30px",
                }}
              >
                What You Will Learn
              </h2>

              {/* BACKEND */}
              <div style={{ marginBottom: "35px" }}>
                <h4
                  style={{
                    color: "#17324b",
                    fontWeight: 800,
                    marginBottom: "12px",
                  }}
                >
                  Core Backend Development — .NET & C#
                </h4>

                <p
                  style={{
                    color: "#65798c",
                    lineHeight: 1.8,
                  }}
                >
                  The foundation focuses on high-performance server-side
                  development using Microsoft's .NET frameworks.
                </p>

                <div className="row g-3">
                  {[
                    [
                      "C# Mastery",
                      "Advanced OOP principles, asynchronous programming, LINQ, and collections.",
                    ],
                    [
                      "ASP.NET Core Web MVC",
                      "Building secure and scalable ASP.NET Core MVC applications.",
                    ],
                    [
                      "ASP.NET Core Web API",
                      "Building secure RESTful services and microservices architecture.",
                    ],
                    [
                      "Entity Framework Core",
                      "Database management using Code-First and Database-First approaches, migrations, and performance tuning.",
                    ],
                    [
                      "Security",
                      "JWT Authentication, OAuth2, and Azure AD for identity management.",
                    ],
                  ].map(([title, text], index) => (
                    <div className="col-md-6" key={index}>
                      <div
                        style={{
                          background: "#ffffff",
                          border: "1px solid #dcebf7",
                          borderRadius: "16px",
                          padding: "18px",
                          height: "100%",
                        }}
                      >
                        <h6
                          style={{
                            fontWeight: 800,
                            color: "#17324b",
                          }}
                        >
                          {title}
                        </h6>

                        <p
                          style={{
                            fontSize: "14px",
                            color: "#65798c",
                            lineHeight: 1.7,
                            margin: 0,
                          }}
                        >
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FRONTEND */}
              <div style={{ marginBottom: "35px" }}>
                <h4
                  style={{
                    color: "#17324b",
                    fontWeight: 800,
                    marginBottom: "12px",
                  }}
                >
                  Modern Frontend Frameworks
                </h4>

                <p
                  style={{
                    color: "#65798c",
                    lineHeight: 1.8,
                  }}
                >
                  Building responsive and interactive user interfaces that
                  consume .NET services.
                </p>

                <div className="row g-3">
                  {[
                    [
                      "Framework Options",
                      "Angular or React, including state management and routing.",
                    ],
                    [
                      "Blazor Integration",
                      "Using C# for frontend development with Blazor WebAssembly.",
                    ],
                    [
                      "UI/UX Basics",
                      "HTML5, CSS3, JavaScript, and responsive design using Bootstrap or Tailwind CSS.",
                    ],
                  ].map(([title, text], index) => (
                    <div className="col-md-4" key={index}>
                      <div
                        style={{
                          background: "#ffffff",
                          border: "1px solid #dcebf7",
                          borderRadius: "16px",
                          padding: "20px",
                          height: "100%",
                        }}
                      >
                        <h6
                          style={{
                            fontWeight: 800,
                            color: "#17324b",
                          }}
                        >
                          {title}
                        </h6>

                        <p
                          style={{
                            fontSize: "14px",
                            color: "#65798c",
                            lineHeight: 1.7,
                            margin: 0,
                          }}
                        >
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PRACTICAL */}
              <div>
                <h4
                  style={{
                    color: "#17324b",
                    fontWeight: 800,
                    marginBottom: "15px",
                  }}
                >
                  Practical Learning & Career Support
                </h4>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div
                      style={{
                        background: "#ffffff",
                        border: "1px solid #dcebf7",
                        borderRadius: "16px",
                        padding: "20px",
                      }}
                    >
                      <h6
                        style={{
                          fontWeight: 800,
                          color: "#17324b",
                        }}
                      >
                        Hands-On Projects
                      </h6>

                      <p
                        style={{
                          color: "#65798c",
                          lineHeight: 1.7,
                          marginBottom: 0,
                        }}
                      >
                        Practical training through multiple real-world
                        projects and a capstone project to build a strong
                        portfolio.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div
                      style={{
                        background: "#ffffff",
                        border: "1px solid #dcebf7",
                        borderRadius: "16px",
                        padding: "20px",
                      }}
                    >
                      <h6
                        style={{
                          fontWeight: 800,
                          color: "#17324b",
                        }}
                      >
                        Job Assistance
                      </h6>

                      <p
                        style={{
                          color: "#65798c",
                          lineHeight: 1.7,
                          marginBottom: 0,
                        }}
                      >
                        Career support services such as resume building, mock
                        interviews, and placement assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CAREER PATH
        ===================================================== */}
        <section style={{ padding: "10px 20px 70px" }}>
          <div className="container">
            <div
              style={{
                background:
                  "linear-gradient(135deg, #0e3458 0%, #1687dc 100%)",
                borderRadius: "27px",
                padding: "42px 35px",
                color: "#ffffff",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  color: "#dff3ff",
                  marginBottom: "10px",
                }}
              >
                CAREER PATH
              </div>

              <h2
                style={{
                  fontSize: "35px",
                  fontWeight: 800,
                  marginBottom: "18px",
                }}
              >
                Dot Net Career Path
              </h2>

              <p
                style={{
                  color: "#e1f3ff",
                  lineHeight: 1.85,
                  maxWidth: "900px",
                }}
              >
                Combining expertise in .NET, Azure, and AI/ML provides a
                broad technical foundation for building, deploying, and
                managing modern intelligent applications.
              </p>

              <div className="row g-4 mt-2">
                {[
                  [
                    "Growing Need for AI Integration",
                    "Companies across industries are integrating AI into their operations, creating demand for developers who can connect application development with AI capabilities.",
                  ],
                  [
                    "Full-Stack AI Developers",
                    "Modern development roles increasingly involve the complete application lifecycle from front-end and back-end development to cloud deployment and AI integration.",
                  ],
                  [
                    "Diverse Job Roles",
                    "Possible roles include AI/ML Engineer, Azure AI Engineer, .NET AI Lead/Architect, Cloud Solution Architect, Data Scientist, and MLOps Engineer.",
                  ],
                  [
                    "Career Growth",
                    "The combination of .NET, Azure, and AI/ML provides versatility for working on cloud-native, intelligent, and data-driven applications.",
                  ],
                ].map(([title, text], index) => (
                  <div className="col-md-6" key={index}>
                    <div
                      style={{
                        height: "100%",
                        background: "rgba(255,255,255,.10)",
                        border: "1px solid rgba(255,255,255,.20)",
                        borderRadius: "18px",
                        padding: "22px",
                      }}
                    >
                      <h5
                        style={{
                          fontWeight: 800,
                          marginBottom: "10px",
                        }}
                      >
                        {title}
                      </h5>

                      <p
                        style={{
                          color: "#e3f4ff",
                          lineHeight: 1.7,
                          fontSize: "14px",
                          margin: 0,
                        }}
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section
          style={{
            background: "#ffffff",
            padding: "0 20px 70px",
          }}
        >
          <div className="container text-center">
            <h2
              style={{
                fontSize: "34px",
                fontWeight: 800,
                color: "#10263d",
                marginBottom: "12px",
              }}
            >
              Start Your .NET Full Stack Journey
            </h2>

            <p
              style={{
                color: "#63788b",
                maxWidth: "700px",
                margin: "0 auto 25px",
                lineHeight: 1.8,
              }}
            >
              Learn .NET Full Stack Development with Azure DevOps and AI
              integration through practical learning and project experience.
            </p>

            <button
              type="button"
              onClick={openEnquiry}
              style={{
                border: "none",
                borderRadius: "12px",
                padding: "13px 25px",
                background:
                  "linear-gradient(135deg,#087bc9,#168fe1)",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: "14px",
                boxShadow: "0 10px 25px rgba(22,135,220,.18)",
                cursor: "pointer",
              }}
            >
              Enquire Now
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </section>
      </div>

      {/* =====================================================
          IMAGE EXPAND
      ===================================================== */}
      {imageExpanded && (
        <div
          onClick={() => setImageExpanded(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(8, 25, 42, 0.90)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "25px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=90"
            alt=".NET Full Stack Development"
            onClick={(event) => event.stopPropagation()}
            style={{
              maxWidth: "94%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "18px",
            }}
          />

          <button
            type="button"
            onClick={() => setImageExpanded(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "25px",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              border: "none",
              background: "#ffffff",
              color: "#17324b",
              fontSize: "25px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
      )}

      {/* ENQUIRY MODAL */}
{enquiryOpen && (
  <div
    onClick={closeEnquiry}
    style={{
      position: "fixed",
      inset: 0,
      zIndex: 10000,
      background: "rgba(8, 25, 42, 0.72)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "15px",
    }}
  >
    <div
      onClick={(event) => event.stopPropagation()}
      style={{
        width: "100%",
        maxWidth: "650px",
        maxHeight: "90vh",
        overflowY: "auto",
        background: "#ffffff",
        borderRadius: "22px",
        border: "1px solid #dcebf7",
        boxShadow: "0 25px 65px rgba(5,35,65,.22)",
        position: "relative",
      }}
    >
      {/* MODAL HEADER */}
      <div
        style={{
          padding: "20px 22px",
          background:
            "linear-gradient(135deg,#eaf7ff 0%,#ffffff 100%)",
          borderBottom: "1px solid #dcebf7",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <div className="d-flex align-items-center gap-2">
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "#e8f5ff",
              color: "#087bc9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "19px",
            }}
          >
            <i className="bi bi-chat-dots"></i>
          </div>

          <div>
            <div
              style={{
                fontSize: "10px",
                color: "#087bc9",
                fontWeight: 800,
                letterSpacing: "1.5px",
                marginBottom: "3px",
              }}
            >
              CIIT ENQUIRY
            </div>

            <h3
              style={{
                margin: 0,
                fontSize: "21px",
                fontWeight: 800,
                color: "#10263d",
              }}
            >
              Get Course Information
            </h3>
          </div>
        </div>

        <button
          type="button"
          onClick={closeEnquiry}
          aria-label="Close enquiry form"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid #dcebf7",
            background: "#ffffff",
            color: "#17324b",
            fontSize: "20px",
            lineHeight: 1,
            cursor: "pointer",
          }}
        >
          ×
        </button>
      </div>

      {/* SUCCESS */}
      {submitted ? (
        <div
          style={{
            padding: "45px 25px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#e8f5ff",
              color: "#087bc9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "29px",
              margin: "0 auto 16px",
            }}
          >
            <i className="bi bi-check-lg"></i>
          </div>

          <h3
            style={{
              fontWeight: 800,
              fontSize: "22px",
              color: "#10263d",
              marginBottom: "8px",
            }}
          >
            Enquiry Submitted
          </h3>

          <p
            style={{
              color: "#63788b",
              fontSize: "14px",
              lineHeight: 1.7,
              marginBottom: "20px",
            }}
          >
            Thank you for your interest in CIIT. Our team will contact you
            shortly.
          </p>

          <button
            type="button"
            onClick={closeEnquiry}
            style={{
              border: "none",
              borderRadius: "10px",
              padding: "10px 24px",
              background:
                "linear-gradient(135deg,#087bc9,#168fe1)",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            padding: "22px",
          }}
        >
          <div className="row g-3">

            {/* NAME */}
            <div className="col-md-6">
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  color: "#17324b",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Enter your name"
                required
                style={{
                  width: "100%",
                  border: "1px solid #d8e8f3",
                  borderRadius: "10px",
                  padding: "10px 12px",
                  fontSize: "13px",
                  color: "#17324b",
                  outline: "none",
                  background: "#fbfdff",
                }}
              />
            </div>

            {/* EMAIL */}
            <div className="col-md-6">
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  color: "#17324b",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Enter your email"
                required
                style={{
                  width: "100%",
                  border: "1px solid #d8e8f3",
                  borderRadius: "10px",
                  padding: "10px 12px",
                  fontSize: "13px",
                  color: "#17324b",
                  outline: "none",
                  background: "#fbfdff",
                }}
              />
            </div>

            {/* CONTACT */}
            <div className="col-md-6">
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  color: "#17324b",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                Contact
              </label>

              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleFormChange}
                placeholder="Enter contact number"
                required
                style={{
                  width: "100%",
                  border: "1px solid #d8e8f3",
                  borderRadius: "10px",
                  padding: "10px 12px",
                  fontSize: "13px",
                  color: "#17324b",
                  outline: "none",
                  background: "#fbfdff",
                }}
              />
            </div>

            {/* TRAINING TYPE */}
            <div className="col-md-6">
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  color: "#17324b",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                Training Type
              </label>

              <select
                name="trainingType"
                value={formData.trainingType}
                onChange={handleFormChange}
                required
                style={{
                  width: "100%",
                  border: "1px solid #d8e8f3",
                  borderRadius: "10px",
                  padding: "10px 12px",
                  fontSize: "13px",
                  color: "#17324b",
                  outline: "none",
                  background: "#fbfdff",
                }}
              >
                <option value="">Select training type</option>
                <option value="Online Training">
                  Online Training
                </option>
                <option value="Offline Training">
                  Offline Training
                </option>
              </select>
            </div>

            {/* DESCRIPTION */}
            <div className="col-12">
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  color: "#17324b",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                placeholder="Tell us what you would like to know..."
                rows={3}
                style={{
                  width: "100%",
                  border: "1px solid #d8e8f3",
                  borderRadius: "10px",
                  padding: "10px 12px",
                  fontSize: "13px",
                  color: "#17324b",
                  outline: "none",
                  background: "#fbfdff",
                  resize: "vertical",
                }}
              ></textarea>
            </div>

            {/* SUBMIT */}
            <div className="col-12">
              <button
                type="submit"
                style={{
                  width: "100%",
                  border: "none",
                  borderRadius: "10px",
                  padding: "11px 18px",
                  background:
                    "linear-gradient(135deg,#087bc9,#168fe1)",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "13px",
                  boxShadow:
                    "0 8px 20px rgba(22,135,220,.16)",
                  cursor: "pointer",
                }}
              >
                <i className="bi bi-send me-2"></i>
                Submit Enquiry
                <i className="bi bi-arrow-right ms-2"></i>
              </button>

              <div
                style={{
                  textAlign: "center",
                  color: "#8193a2",
                  fontSize: "11px",
                  marginTop: "9px",
                }}
              >
                Our team will contact you shortly.
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  </div>
)}
    </>
  );
}