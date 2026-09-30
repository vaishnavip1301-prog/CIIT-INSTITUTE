import { useEffect, useState } from "react";

const courseImage =
  "https://ciitinstitute.com/assets/Courses/Java/Full%20Stack%20Development%20with%20DevOps%20and%20AI.png";

export default function FullStackDevelopmentAIAndDevOps() {
  const [imageOpen, setImageOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accomplishments = [
    {
      icon: "bi-window-stack",
      title: "Develop Scalable Web Applications",
      text: "Design, develop and deploy robust, high-performance full-stack web applications using Java for the back-end and modern front-end frameworks such as React or Angular.",
    },
    {
      icon: "bi-cloud-arrow-up",
      title: "Deploy on the Cloud",
      text: "Use AWS services such as EC2, S3, RDS and Lambda to deploy, manage and scale applications reliably in a cloud environment.",
    },
    {
      icon: "bi-robot",
      title: "Integrate AI/ML Capabilities",
      text: "Incorporate AI features such as chatbots, data analytics and search functionality into Java applications using AI APIs and relevant frameworks.",
    },
    {
      icon: "bi-diagram-3",
      title: "Implement DevOps Practices",
      text: "Understand Docker, Jenkins and AWS services such as CodePipeline to build efficient Continuous Integration and Continuous Deployment pipelines.",
    },
    {
      icon: "bi-cart3",
      title: "Build an E-commerce Platform",
      text: "Work toward a functional e-commerce application with product listings, shopping cart, payment integration and potentially AI-powered recommendations.",
    },
    {
      icon: "bi-briefcase",
      title: "Job Readiness",
      text: "Prepare for roles such as Full Stack Java Developer, Cloud Engineer, Software Architect and AI Integrator.",
    },
    {
      icon: "bi-folder-check",
      title: "Portfolio Building",
      text: "Use completed projects to create a professional portfolio that demonstrates practical technical skills to potential employers.",
    },
    {
      icon: "bi-patch-check",
      title: "Certification",
      text: "Prepare for relevant industry certifications such as AWS Certified Developer – Associate or Java certifications.",
    },
  ];

  const benefits = [
    {
      icon: "bi-graph-up-arrow",
      title: "High Demand and Job Security",
      text: "The source page highlights demand for AI/ML professionals across sectors including healthcare, finance and e-commerce. Java enterprise systems combined with AWS and AI/ML create a broad technical skill set.",
    },
    {
      icon: "bi-currency-rupee",
      title: "High Earning Potential",
      text: "The source states that AI/ML specialists often command premium compensation because of the specialised nature of their expertise.",
    },
    {
      icon: "bi-globe2",
      title: "Versatile Opportunities",
      text: "The combined skills can be applied across AI/ML engineering, enterprise software architecture, MLOps and data engineering roles.",
    },
    {
      icon: "bi-lightning-charge",
      title: "Innovation at Scale",
      text: "These technologies can contribute to applications such as fraud detection, voice assistants, recommendation engines and other intelligent systems.",
    },
    {
      icon: "bi-stack",
      title: "Robust Ecosystem",
      text: "Java libraries and its compatibility with big-data technologies complement AWS's cloud and AI/ML services.",
    },
    {
      icon: "bi-shield-check",
      title: "Future-Proofing Skills",
      text: "The integration of cloud and AI technologies gives learners a skill set aligned with evolving technology environments.",
    },
    {
      icon: "bi-speedometer2",
      title: "Faster Development Cycles",
      text: "A developer capable of managing more parts of the development process can reduce dependencies and communication gaps.",
    },
    {
      icon: "bi-cpu",
      title: "Intelligent Automation",
      text: "AI can assist with repetitive development activities such as code generation, testing and documentation.",
    },
  ];

  const highlights = [
    {
      icon: "bi-code-slash",
      title: "Core and Advanced Java",
      text: "Java programming, OOP, data structures, algorithms, exception handling, multithreading and Java 8+ features including Lambda expressions and Streams API.",
    },
    {
      icon: "bi-layout-text-window",
      title: "Front-End Development",
      text: "HTML5, CSS3, JavaScript ES6+ and modern frameworks such as React.js or Angular for single-page applications and complex user interfaces.",
    },
    {
      icon: "bi-server",
      title: "Back-End Development",
      text: "Spring, Spring Boot, Spring MVC, Spring Security, JWT, OAuth2 and Spring Data JPA for robust applications and RESTful APIs.",
    },
    {
      icon: "bi-diagram-2",
      title: "Microservices",
      text: "Understanding and implementing microservices architecture using Spring Boot and Spring Cloud.",
    },
    {
      icon: "bi-database",
      title: "Database Management",
      text: "SQL and NoSQL databases including MySQL, Oracle and MongoDB, together with Hibernate and JPA.",
    },
    {
      icon: "bi-cloud",
      title: "AWS Cloud Integration",
      text: "EC2, S3, RDS, AWS Lambda, API Gateway and CI/CD services including CodeCommit, CodeBuild and CodeDeploy.",
    },
    {
      icon: "bi-git",
      title: "DevOps & Tools",
      text: "Git, GitHub, Docker, Kubernetes, Jenkins, Maven and Gradle for source control, containers and build automation.",
    },
    {
      icon: "bi-robot",
      title: "AI/ML Integration",
      text: "AI API integration, machine-learning model deployment with Amazon SageMaker and generative AI concepts including Spring AI.",
    },
    {
      icon: "bi-bar-chart",
      title: "Data Analysis Fundamentals",
      text: "Introduction to data analysis, statistical concepts and machine-learning algorithms that support AI-powered features.",
    },
    {
      icon: "bi-kanban",
      title: "Hands-On Projects",
      text: "Multiple real-world projects and a capstone project to build a strong professional portfolio.",
    },
    {
      icon: "bi-person-workspace",
      title: "Job Assistance",
      text: "Career support including resume building, mock interviews and placement assistance.",
    },
  ];

  const learnerGroups = [
    {
      icon: "bi-mortarboard",
      title: "Students & Recent Graduates",
      text: "Students from computer science, engineering or data-science backgrounds can build an employable combination of Java, cloud and AI skills.",
    },
    {
      icon: "bi-person-gear",
      title: "IT Professionals & DevOps Engineers",
      text: "Existing IT and DevOps professionals can use the combination to transition toward MLOps and cloud-based AI roles.",
    },
    {
      icon: "bi-code-square",
      title: "Experienced Software Developers",
      text: "Developers who already understand one part of the stack can expand their skills into Java, AWS and AI/ML.",
    },
    {
      icon: "bi-cup-hot",
      title: "Java Developers",
      text: "Java developers can extend their skills into data pipelines, MLOps systems, backend services and AWS-based AI integrations.",
    },
    {
      icon: "bi-cloud-check",
      title: "AWS Developers & Cloud Architects",
      text: "AWS professionals can add Java backend development and AI/ML services such as Amazon SageMaker and Amazon Bedrock.",
    },
    {
      icon: "bi-bar-chart-line",
      title: "AI/ML Specialists & Data Scientists",
      text: "AI/ML professionals can learn Java to integrate models into enterprise applications and use AWS for scalable deployments.",
    },
    {
      icon: "bi-cloud-arrow-down",
      title: "Cloud Professionals",
      text: "Cloud-focused professionals can develop skills for scalable, secure and cost-effective AI solutions.",
    },
    {
      icon: "bi-arrow-repeat",
      title: "DevOps Engineers",
      text: "DevOps professionals can specialise in MLOps, including automated deployment and monitoring of AI models and applications.",
    },
    {
      icon: "bi-person-plus",
      title: "Students & Career Changers",
      text: "Learners with basic programming knowledge can start with foundational programming and cloud concepts and progress toward advanced technologies.",
    },
  ];

  const features = [
    ["bi-person-workspace", "Expert Trainers", "Training from industry experts with extensive experience."],
    ["bi-building", "State-of-the-Art Infrastructure", "Modern facilities and tools for an engaging learning experience."],
    ["bi-journal-code", "Comprehensive Curriculum", "In-depth curriculum designed around industry standards and trends."],
    ["bi-calendar-week", "Flexible Schedules", "Weekday, weekend and online batch options."],
    ["bi-person-check", "Personalized Attention", "Small batch sizes for individualized mentoring and guidance."],
    ["bi-kanban", "Real-Time Project Training", "Real-world industry projects and practical sessions."],
    ["bi-briefcase", "100% Placement Assistance", "Dedicated support toward career and placement opportunities."],
    ["bi-wallet2", "Affordable Fees", "Quality training with competitive pricing and flexible payment options."],
    ["bi-book", "Lifetime Learning Materials", "Access course materials for continuous learning."],
    ["bi-award", "Industry Certifications", "Certification-oriented learning to strengthen professional credentials."],
    ["bi-grid", "Diverse Course Offerings", "A wide range of programs across technology and related domains."],
  ];

  const testimonials = [
    {
      name: "Vaibhav Saykar",
      text: "One off the best institutes then other training institutions and specially for those students who wants to start their career for IT. I hope everyone can join with us CIIT Training Institute.",
    },
    {
      name: "Saurabh Lonkar",
      text: "Learning at CIIT has been a truly rewarding experience. Trainers are knowledgeable, approachable and always ready to help. Each topic is explained clearly with special attention to doubt-solving.",
    },
    {
      name: "Ajay Wagh",
      text: "I recently completed the .NET Full Stack Developer course at CIIT Training Institute, and it was an excellent experience. The course content was practical and well-organized.",
    },
    {
      name: "Kalyani Dhavale",
      text: "I’m truly grateful for the mentorship throughout my journey. The deep expertise, structured guidance and hands-on approach made complex concepts easier to understand.",
    },
    {
      name: "Anil Kamble",
      text: "It was a fantastic learning experience. Mock interviews, topic revision, conceptual and practical approach and one-to-one doubt solving were very helpful.",
    },
    {
      name: "Sagar Vyavhare",
      text: "I had an excellent experience at CIIT Training Institute. The Full Stack Developer course was comprehensive and well structured with expert guidance and a hands-on approach.",
    },
    {
      name: "Lubna Patel",
      text: "As a Full Stack Development student at CIIT Training Institute, I can confidently say they provide excellent training from basics to advanced levels with hands-on projects and internship opportunities.",
    },
    {
      name: "PRAJWAL DIVEKAR",
      text: "CIIT Training Institute is a great place to learn and grow. They focus on quality knowledge with hands-on projects and internship opportunities that help build real-world skills.",
    },
  ];

  return (
    <div
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#18324b",
        background: "#f5faff",
        overflow: "hidden",
      }}
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        style={{
          position: "relative",
          padding: "75px 0 90px",
          background:
            "linear-gradient(135deg,#f7fcff 0%,#eaf6ff 55%,#ffffff 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "440px",
            height: "440px",
            borderRadius: "50%",
            border: "1px solid rgba(22,135,220,.10)",
            right: "-180px",
            top: "-180px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            border: "1px solid rgba(22,135,220,.10)",
            left: "-130px",
            bottom: "-100px",
          }}
        />

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#e5f4ff",
                  color: "#087bc9",
                  padding: "8px 14px",
                  borderRadius: "50px",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "1.6px",
                  marginBottom: "20px",
                }}
              >
                <i className="bi bi-stars" />
                JAVA FULL STACK
              </div>

              <h1
                style={{
                  fontSize: "clamp(36px,4.5vw,62px)",
                  lineHeight: 1.08,
                  fontWeight: 800,
                  letterSpacing: "-2px",
                  color: "#101b30",
                  marginBottom: "22px",
                }}
              >
                Java Full Stack
                <br />
                <span style={{ color: "#1687dc" }}>
                  With AWS + AI
                </span>
              </h1>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.85,
                  color: "#62798d",
                  maxWidth: "610px",
                  marginBottom: "28px",
                }}
              >
                Learn Latest Java Full Stack Development with AWS DevOps
                and AI Integration and build the skills required for modern,
                scalable and intelligent applications.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href="#enquiry"
                  style={{
                    padding: "14px 22px",
                    borderRadius: "12px",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 800,
                    fontSize: "14px",
                    background:
                      "linear-gradient(135deg,#087bc9,#168fe1)",
                    boxShadow:
                      "0 12px 25px rgba(8,123,201,.20)",
                  }}
                >
                  Enquiry Now
                  <i
                    className="bi bi-arrow-right ms-2"
                  />
                </a>

                <a
                  href="#courseHighlights"
                  style={{
                    padding: "13px 21px",
                    borderRadius: "12px",
                    color: "#087bc9",
                    textDecoration: "none",
                    fontWeight: 800,
                    fontSize: "14px",
                    background: "#fff",
                    border: "1px solid #cce2f2",
                  }}
                >
                  View Curriculum
                  <i
                    className="bi bi-arrow-down ms-2"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                style={{
                  position: "relative",
                  maxWidth: "580px",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "18px -14px -18px 18px",
                    background: "#d9efff",
                    borderRadius: "28px",
                    transform: "rotate(2deg)",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    padding: "9px",
                    borderRadius: "26px",
                    background: "#fff",
                    boxShadow:
                      "0 30px 70px rgba(24,75,110,.17)",
                  }}
                >
                  <img
                    src={courseImage}
                    alt="Java Full Stack Development with DevOps and AI"
                    onClick={() => setImageOpen(true)}
                    style={{
                      width: "100%",
                      height: "390px",
                      objectFit: "cover",
                      borderRadius: "19px",
                      display: "block",
                      cursor: "zoom-in",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => setImageOpen(true)}
                    style={{
                      position: "absolute",
                      right: "22px",
                      bottom: "22px",
                      width: "46px",
                      height: "46px",
                      border: "none",
                      borderRadius: "12px",
                      background: "#fff",
                      color: "#087bc9",
                      boxShadow:
                        "0 8px 22px rgba(0,0,0,.18)",
                    }}
                  >
                    <i className="bi bi-arrows-fullscreen" />
                  </button>
                </div>

                <div
                  style={{
                    position: "absolute",
                    left: "-22px",
                    bottom: "-25px",
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: "17px",
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "11px",
                    boxShadow:
                      "0 16px 35px rgba(24,75,110,.13)",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "11px",
                      background: "#e8f5ff",
                      color: "#087bc9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="bi bi-cloud-check" />
                  </div>

                  <div>
                    <strong
                      style={{
                        display: "block",
                        fontSize: "13px",
                        color: "#142a40",
                      }}
                    >
                      AWS + AI + DevOps
                    </strong>

                    <span
                      style={{
                        fontSize: "11px",
                        color: "#71869a",
                      }}
                    >
                      Career-focused training
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSE QUICK INFO
      ========================================================= */}
      <section
        style={{
          background: "#fff",
          borderTop: "1px solid #e1edf5",
          borderBottom: "1px solid #e1edf5",
          padding: "28px 0",
        }}
      >
        <div className="container">
          <div className="row g-3">
            {[
              ["bi-calendar3", "Course Duration", "9 Months"],
              ["bi-laptop", "Training Mode", "Classroom & Online"],
              ["bi-calendar-week", "Batches", "Weekdays / Weekends"],
              ["bi-translate", "Language", "English, Hindi, Marathi"],
            ].map(([icon, title, value]) => (
              <div className="col-6 col-lg-3" key={title}>
                <div
                  style={{
                    height: "100%",
                    padding: "15px",
                    borderRadius: "15px",
                    background: "#f7fbfe",
                    border: "1px solid #e1edf5",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      minWidth: "42px",
                      borderRadius: "11px",
                      background: "#e8f5ff",
                      color: "#087bc9",
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
                        fontSize: "11px",
                        color: "#7a8e9f",
                        marginBottom: "3px",
                      }}
                    >
                      {title}
                    </div>

                    <strong
                      style={{
                        fontSize: "13px",
                        color: "#17324a",
                      }}
                    >
                      {value}
                    </strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ACCOMPLISHMENTS
      ========================================================= */}
      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-8">
              <div
                style={{
                  color: "#087bc9",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                LEARNING OUTCOMES
              </div>

              <h2
                style={{
                  fontSize: "clamp(32px,4vw,48px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  color: "#101b30",
                  marginBottom: 0,
                }}
              >
                What Can You
                <br />
                <span style={{ color: "#1687dc" }}>
                  Accomplish?
                </span>
              </h2>
            </div>

            <div className="col-lg-4">
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "#71869a",
                  marginBottom: 0,
                }}
              >
                By the end of training, learners can work across Java
                full-stack development, AWS cloud, AI/ML integration and
                DevOps practices.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {accomplishments.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={item.title}>
                <div
                  style={{
                    height: "100%",
                    padding: "25px",
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: "21px",
                    boxShadow:
                      "0 10px 28px rgba(23,75,110,.05)",
                  }}
                >
                  <div
                    style={{
                      width: "53px",
                      height: "53px",
                      borderRadius: "14px",
                      background: "#e8f5ff",
                      color: "#087bc9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "21px",
                      marginBottom: "18px",
                    }}
                  >
                    <i className={`bi ${item.icon}`} />
                  </div>

                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      color: "#1687dc",
                      marginBottom: "7px",
                    }}
                  >
                    0{index + 1}
                  </div>

                  <h3
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.35,
                      fontWeight: 800,
                      color: "#142a40",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.75,
                      color: "#71869a",
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
      </section>

      {/* =========================================================
          COURSE SCHEDULE
      ========================================================= */}
      <section
        style={{
          padding: "75px 0",
          background: "#edf7ff",
        }}
      >
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-8">
              <div
                style={{
                  height: "100%",
                  background: "#fff",
                  border: "1px solid #dcebf7",
                  borderRadius: "23px",
                  padding: "30px",
                }}
              >
                <div
                  style={{
                    color: "#087bc9",
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "2px",
                    marginBottom: "12px",
                  }}
                >
                  BATCH SCHEDULE
                </div>

                <h2
                  style={{
                    fontSize: "30px",
                    fontWeight: 800,
                    color: "#101b30",
                    marginBottom: "25px",
                  }}
                >
                  Flexible Learning Options
                </h2>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div
                      style={{
                        padding: "23px",
                        borderRadius: "16px",
                        background: "#f5faff",
                        border: "1px solid #e1edf5",
                      }}
                    >
                      <i
                        className="bi bi-calendar-week"
                        style={{
                          color: "#087bc9",
                          fontSize: "25px",
                        }}
                      />

                      <h4
                        style={{
                          marginTop: "15px",
                          fontSize: "18px",
                          fontWeight: 800,
                          color: "#17324a",
                        }}
                      >
                        Weekdays
                      </h4>

                      <p
                        style={{
                          marginBottom: 0,
                          color: "#71869a",
                          fontSize: "14px",
                        }}
                      >
                        Monday – Friday
                        <br />
                        <strong style={{ color: "#087bc9" }}>
                          9 Months
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div
                      style={{
                        padding: "23px",
                        borderRadius: "16px",
                        background: "#f5faff",
                        border: "1px solid #e1edf5",
                      }}
                    >
                      <i
                        className="bi bi-calendar2-week"
                        style={{
                          color: "#087bc9",
                          fontSize: "25px",
                        }}
                      />

                      <h4
                        style={{
                          marginTop: "15px",
                          fontSize: "18px",
                          fontWeight: 800,
                          color: "#17324a",
                        }}
                      >
                        Weekends
                      </h4>

                      <p
                        style={{
                          marginBottom: 0,
                          color: "#71869a",
                          fontSize: "14px",
                        }}
                      >
                        Saturday – Sunday
                        <br />
                        <strong style={{ color: "#087bc9" }}>
                          12 Months
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                style={{
                  height: "100%",
                  borderRadius: "23px",
                  padding: "30px",
                  background:
                    "linear-gradient(135deg,#0e3458,#1687dc)",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    fontSize: "38px",
                    fontWeight: 800,
                  }}
                >
                  5/5
                </div>

                <div
                  style={{
                    color: "#ffe58c",
                    fontSize: "18px",
                    margin: "8px 0 15px",
                  }}
                >
                  ★★★★★
                </div>

                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                  }}
                >
                  Learning Experience
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,.78)",
                    lineHeight: 1.8,
                    fontSize: "14px",
                  }}
                >
                  Practical training, projects, mentoring, doubt solving
                  and career support form the learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MONEY BACK
      ========================================================= */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div
            style={{
              borderRadius: "25px",
              padding: "35px",
              background: "#fff",
              border: "1px solid #dcebf7",
              boxShadow:
                "0 15px 40px rgba(23,75,110,.06)",
            }}
          >
            <div className="row align-items-center g-4">
              <div className="col-lg-2 text-center">
                <div
                  style={{
                    width: "85px",
                    height: "85px",
                    borderRadius: "50%",
                    background: "#e8f5ff",
                    color: "#087bc9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "35px",
                    margin: "0 auto",
                  }}
                >
                  <i className="bi bi-shield-check" />
                </div>
              </div>

              <div className="col-lg-10">
                <div
                  style={{
                    color: "#087bc9",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "1.5px",
                    marginBottom: "7px",
                  }}
                >
                  100% MONEY BACK GUARANTEE
                </div>

                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#101b30",
                    marginBottom: "12px",
                  }}
                >
                  5-Day Money-Back Guarantee
                </h2>

                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.8,
                    color: "#71869a",
                    marginBottom: 0,
                  }}
                >
                  The source page states that CIIT has trained 10,000+
                  candidates including undergraduates, freshers and working
                  professionals, and offers a 5-day refund commitment for
                  learners who are not satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE BENEFITS
      ========================================================= */}
      <section
        style={{
          padding: "90px 0",
          background: "#edf7ff",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <div
              style={{
                color: "#087bc9",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              CORE BENEFITS
            </div>

            <h2
              style={{
                fontSize: "clamp(32px,4vw,48px)",
                fontWeight: 800,
                letterSpacing: "-1.5px",
                color: "#101b30",
              }}
            >
              Java + AWS + AI/ML
            </h2>

            <p
              style={{
                maxWidth: "750px",
                margin: "15px auto 0",
                color: "#71869a",
                fontSize: "15px",
                lineHeight: 1.8,
              }}
            >
              Combining Java, AWS and AI/ML creates a broad skill set for
              modern software development, cloud applications and intelligent
              systems.
            </p>
          </div>

          <div className="row g-4">
            {benefits.map((item) => (
              <div className="col-md-6 col-lg-3" key={item.title}>
                <div
                  style={{
                    height: "100%",
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: "20px",
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "13px",
                      background: "#e8f5ff",
                      color: "#087bc9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      marginBottom: "17px",
                    }}
                  >
                    <i className={`bi ${item.icon}`} />
                  </div>

                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 800,
                      color: "#17324a",
                      lineHeight: 1.4,
                      marginBottom: "9px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "#71869a",
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
      </section>

      {/* =========================================================
          SALARY
      ========================================================= */}
      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <div
              style={{
                color: "#087bc9",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              CAREER INFORMATION
            </div>

            <h2
              style={{
                fontSize: "clamp(32px,4vw,48px)",
                fontWeight: 800,
                letterSpacing: "-1.5px",
                color: "#101b30",
              }}
            >
              Average Salary Ranges
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #dcebf7",
                  borderRadius: "22px",
                  padding: "30px",
                }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#17324a",
                    marginBottom: "22px",
                  }}
                >
                  <i
                    className="bi bi-globe2 me-2"
                    style={{ color: "#087bc9" }}
                  />
                  United States
                </h3>

                {[
                  ["Entry Level", "0–2 years", "$75,000 – $95,000"],
                  ["Mid Level", "3–7 years", "$120,000 – $180,000"],
                  ["Senior / Lead", "7+ years", "$100,000 – $130,000"],
                  ["AWS AI Engineer", "", "$140,000 – $212,500+"],
                  ["AI Architect", "", "$250,000+"],
                ].map(([role, experience, salary]) => (
                  <div
                    key={role}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "15px",
                      padding: "14px 0",
                      borderBottom: "1px solid #edf2f6",
                    }}
                  >
                    <div>
                      <strong
                        style={{
                          display: "block",
                          fontSize: "14px",
                          color: "#17324a",
                        }}
                      >
                        {role}
                      </strong>

                      {experience && (
                        <span
                          style={{
                            fontSize: "11px",
                            color: "#8092a1",
                          }}
                        >
                          {experience}
                        </span>
                      )}
                    </div>

                    <strong
                      style={{
                        color: "#087bc9",
                        fontSize: "13px",
                        textAlign: "right",
                      }}
                    >
                      {salary}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #dcebf7",
                  borderRadius: "22px",
                  padding: "30px",
                }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#17324a",
                    marginBottom: "22px",
                  }}
                >
                  <i
                    className="bi bi-geo-alt me-2"
                    style={{ color: "#087bc9" }}
                  />
                  India
                </h3>

                {[
                  ["Entry Level", "< 2 years", "₹6 LPA – ₹12 LPA"],
                  ["Mid Level", "3–7 years", "₹12 LPA – ₹25 LPA"],
                  ["Senior / Lead", "7+ years", "₹25 LPA – ₹50 LPA+"],
                ].map(([role, experience, salary]) => (
                  <div
                    key={role}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "15px",
                      padding: "14px 0",
                      borderBottom: "1px solid #edf2f6",
                    }}
                  >
                    <div>
                      <strong
                        style={{
                          display: "block",
                          fontSize: "14px",
                          color: "#17324a",
                        }}
                      >
                        {role}
                      </strong>

                      <span
                        style={{
                          fontSize: "11px",
                          color: "#8092a1",
                        }}
                      >
                        {experience}
                      </span>
                    </div>

                    <strong
                      style={{
                        color: "#087bc9",
                        fontSize: "13px",
                        textAlign: "right",
                      }}
                    >
                      {salary}
                    </strong>
                  </div>
                ))}

                <div
                  style={{
                    marginTop: "22px",
                    padding: "17px",
                    borderRadius: "14px",
                    background: "#f5faff",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "13px",
                      color: "#17324a",
                    }}
                  >
                    Salary depends on:
                  </strong>

                  <p
                    style={{
                      margin: "8px 0 0",
                      fontSize: "13px",
                      color: "#71869a",
                      lineHeight: 1.75,
                    }}
                  >
                    Certifications, company type, location and hands-on
                    project experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p
            style={{
              marginTop: "20px",
              fontSize: "11px",
              color: "#8a9aa8",
              textAlign: "center",
            }}
          >
            Salary figures above are reproduced from the referenced CIIT
            course page and are presented as indicative ranges, not
            guarantees.
          </p>
        </div>
      </section>

      {/* =========================================================
          WHO CAN LEARN
      ========================================================= */}
      <section
        style={{
          padding: "90px 0",
          background: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-7">
              <div
                style={{
                  color: "#087bc9",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                WHO CAN LEARN
              </div>

              <h2
                style={{
                  fontSize: "clamp(32px,4vw,48px)",
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  color: "#101b30",
                  marginBottom: 0,
                }}
              >
                Who Is This Course
                <br />
                <span style={{ color: "#1687dc" }}>
                  For?
                </span>
              </h2>
            </div>

            <div className="col-lg-5">
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "#71869a",
                  marginBottom: 0,
                }}
              >
                The referenced page describes the course as suitable for
                students, developers, cloud professionals, DevOps engineers,
                AI/ML specialists and career changers.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {learnerGroups.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    gap: "15px",
                    padding: "23px",
                    borderRadius: "19px",
                    background: "#f8fcff",
                    border: "1px solid #dcebf7",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      minWidth: "48px",
                      borderRadius: "13px",
                      background: "#e8f5ff",
                      color: "#087bc9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "19px",
                    }}
                  >
                    <i className={`bi ${item.icon}`} />
                  </div>

                  <div>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: 800,
                        color: "#17324a",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.7,
                        color: "#71869a",
                        marginBottom: 0,
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
      <section
        id="courseHighlights"
        style={{
          padding: "95px 0",
          background: "#edf7ff",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <div
              style={{
                color: "#087bc9",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              COURSE HIGHLIGHTS
            </div>

            <h2
              style={{
                fontSize: "clamp(32px,4vw,48px)",
                fontWeight: 800,
                letterSpacing: "-1.5px",
                color: "#101b30",
              }}
            >
              Complete Java Full Stack Curriculum
            </h2>
          </div>

          <div className="row g-4">
            {highlights.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <div
                  style={{
                    height: "100%",
                    padding: "27px",
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: "21px",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
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
                      }}
                    >
                      <i className={`bi ${item.icon}`} />
                    </div>

                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 800,
                        color: "#1687dc",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "#17324a",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.8,
                      color: "#71869a",
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
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section style={{ padding: "95px 0" }}>
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-8">
              <div
                style={{
                  color: "#087bc9",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                WHY CIIT
              </div>

              <h2
                style={{
                  fontSize: "clamp(32px,4vw,48px)",
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  color: "#101b30",
                  marginBottom: 0,
                }}
              >
                Key Features That
                <br />
                <span style={{ color: "#1687dc" }}>
                  Make CIIT Different
                </span>
              </h2>
            </div>
          </div>

          <div className="row g-4">
            {features.map(([icon, title, text]) => (
              <div className="col-md-6 col-lg-4" key={title}>
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    gap: "15px",
                    padding: "23px",
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: "20px",
                    boxShadow:
                      "0 10px 28px rgba(23,75,110,.04)",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      minWidth: "50px",
                      borderRadius: "13px",
                      background: "#e8f5ff",
                      color: "#087bc9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                    }}
                  >
                    <i className={`bi ${icon}`} />
                  </div>

                  <div>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: 800,
                        color: "#17324a",
                        marginBottom: "7px",
                      }}
                    >
                      {title}
                    </h3>

                    <p
                      style={{
                        fontSize: "13px",
                        color: "#71869a",
                        lineHeight: 1.7,
                        marginBottom: 0,
                      }}
                    >
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}
      <section
        style={{
          padding: "90px 0",
          background: "#edf7ff",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <div
              style={{
                color: "#087bc9",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              SUCCESS STORIES
            </div>

            <h2
              style={{
                fontSize: "clamp(32px,4vw,48px)",
                fontWeight: 800,
                letterSpacing: "-1.5px",
                color: "#101b30",
              }}
            >
              Our Learners' Experiences
            </h2>

            <p
              style={{
                maxWidth: "650px",
                margin: "15px auto 0",
                color: "#71869a",
                fontSize: "15px",
                lineHeight: 1.8,
              }}
            >
              Explore learner experiences shared on the referenced CIIT
              course page.
            </p>
          </div>

          <div className="row g-4">
            {testimonials.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.name}>
                <div
                  style={{
                    height: "100%",
                    padding: "25px",
                    background: "#fff",
                    border: "1px solid #dcebf7",
                    borderRadius: "20px",
                  }}
                >
                  <div
                    style={{
                      color: "#1687dc",
                      fontSize: "18px",
                      marginBottom: "13px",
                    }}
                  >
                    ★★★★★
                  </div>

                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.8,
                      color: "#667d90",
                      marginBottom: "20px",
                    }}
                  >
                    "{item.text}"
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "11px",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: "#e8f5ff",
                        color: "#087bc9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "13px",
                      }}
                    >
                      {item.name.charAt(0)}
                    </div>

                    <strong
                      style={{
                        fontSize: "13px",
                        color: "#17324a",
                      }}
                    >
                      {item.name}
                    </strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ENQUIRY CTA
      ========================================================= */}
      <section id="enquiry" style={{ padding: "80px 0" }}>
        <div className="container">
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "30px",
              padding: "60px 45px",
              background:
                "linear-gradient(135deg,#0e3458,#1687dc)",
              color: "#fff",
              boxShadow:
                "0 25px 60px rgba(8,123,201,.18)",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "330px",
                height: "330px",
                border: "1px solid rgba(255,255,255,.12)",
                borderRadius: "50%",
                right: "-120px",
                top: "-150px",
              }}
            />

            <div className="row align-items-center position-relative">
              <div className="col-lg-8">
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "2px",
                    opacity: .8,
                    marginBottom: "10px",
                  }}
                >
                  START YOUR JOURNEY
                </div>

                <h2
                  style={{
                    fontSize: "clamp(30px,4vw,45px)",
                    fontWeight: 800,
                    letterSpacing: "-1.3px",
                    marginBottom: "13px",
                  }}
                >
                  Become a Job-Ready
                  <br />
                  Java Full Stack Developer
                </h2>

                <p
                  style={{
                    color: "rgba(255,255,255,.78)",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    marginBottom: 0,
                    maxWidth: "650px",
                  }}
                >
                  Take the next step toward Java Full Stack Development
                  with AWS, DevOps and AI/ML integration.
                </p>
              </div>

              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <a
                  href="mailto:enquiry@ciitinstitute.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "9px",
                    padding: "15px 23px",
                    borderRadius: "12px",
                    background: "#fff",
                    color: "#087bc9",
                    textDecoration: "none",
                    fontWeight: 800,
                    fontSize: "14px",
                  }}
                >
                  Enquire Now
                  <i className="bi bi-arrow-up-right" />
                </a>
              </div>
            </div>
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
            zIndex: 9999,
            background: "rgba(5,22,38,.90)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "25px",
          }}
        >
          <button
            type="button"
            onClick={() => setImageOpen(false)}
            style={{
              position: "fixed",
              right: "25px",
              top: "20px",
              width: "45px",
              height: "45px",
              border: "none",
              borderRadius: "50%",
              background: "#fff",
              color: "#087bc9",
              fontSize: "18px",
              zIndex: 10000,
            }}
          >
            <i className="bi bi-x-lg" />
          </button>

          <img
            src={courseImage}
            alt="Java Full Stack Development with AWS DevOps and AI"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "95%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "18px",
            }}
          />
        </div>
      )}

      {/* =========================================================
          RESPONSIVE
      ========================================================= */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          @media (max-width: 991px) {
            .container {
              padding-left: 18px;
              padding-right: 18px;
            }
          }

          @media (max-width: 767px) {
            section {
              overflow: hidden;
            }

            h1 {
              letter-spacing: -1.2px !important;
            }
          }
        `}
      </style>
    </div>
  );
}