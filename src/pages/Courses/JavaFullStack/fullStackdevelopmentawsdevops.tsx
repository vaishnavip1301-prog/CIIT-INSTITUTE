import { useState } from "react";
import { Link } from "react-router-dom";

export default function FullStackDevelopmentAWSDevOps() {
  const [imageExpanded, setImageExpanded] = useState(false);

  const courseImage =
    "https://ciitinstitute.com/assets/Courses/Java/Full%20Stack%20Development%20with%20AWS%20DevOps.png";

  const outcomes = [
    {
      title: "Versatility",
      text: 'Graduates become "all-rounders" capable of contributing to any part of a project, making them highly valuable to employers across industries like finance, e-commerce, and healthcare.',
    },
    {
      title: "Enhanced Job Opportunities",
      text: "The comprehensive skill set increases employability and opens doors to multiple technical roles.",
      points: [
        "Full Stack Developer",
        "Java Developer",
        "Cloud Engineer",
        "DevOps Engineer",
        "Software Engineer",
        "Technical Architect",
      ],
    },
    {
      title: "Career Advancement",
      text: "A deep understanding of the entire development lifecycle positions developers for faster career growth and leadership roles such as Technical Lead or Solution Architect.",
    },
    {
      title: "Competitive Compensation",
      text: "Due to the high demand for versatile developers, professionals in this field often command competitive salaries.",
    },
    {
      title: "Certification Readiness",
      text: "The curriculum often prepares individuals for industry-recognized certifications such as the AWS Certified Developer – Associate exam.",
    },
  ];

  const benefits = [
    {
      title: "High Demand and Job Opportunities",
      text: "Companies across industries such as finance, healthcare and e-commerce actively seek professionals who can manage the entire application lifecycle, from front-end development to cloud deployment.",
    },
    {
      title: "Increased Versatility",
      text: 'You become an "all-rounder" capable of working on different parts of a project, reducing a company’s reliance on multiple specialized developers.',
    },
    {
      title: "Competitive Salaries",
      text: "Java full stack developers with AWS skills can work across multiple areas and may command competitive salaries because of their broad technical skill set.",
    },
    {
      title: "Career Growth",
      text: "The comprehensive skill set provides a strong foundation for advancement into roles such as Technical Lead, Software Architect or DevOps Engineer.",
    },
    {
      title: "Job Security and Flexibility",
      text: "Java is a stable enterprise language and cloud computing is widely used, providing a broad range of development, remote work and freelance opportunities.",
    },
    {
      title: "Industry Credibility",
      text: "AWS certifications such as AWS Certified Developer – Associate can validate cloud development knowledge and enhance professional credibility.",
    },
    {
      title: "Adaptability to New Technologies",
      text: "Full stack developers continuously work across technologies, making them adaptable to new frameworks, tools and industry trends.",
    },
    {
      title: "End-to-End Project Ownership",
      text: "You gain a holistic understanding of project architecture and can work across the development workflow while making informed technical decisions.",
    },
    {
      title: "Scalability and Performance",
      text: "Combining Java full stack development with AWS enables developers to build scalable and reliable cloud-based applications.",
    },
    {
      title: "Cost Efficiency",
      text: 'AWS pay-as-you-go services and technologies such as AWS Lambda can help optimize infrastructure usage by paying for consumed resources.',
    },
    {
      title: "Streamlined Development with DevOps",
      text: "AWS development and DevOps tools can be used to create CI/CD pipelines, automate testing and deployment, and speed up development cycles.",
    },
    {
      title: "Freelance and Remote Work Options",
      text: "The ability to independently build and manage complete applications makes full stack developers suitable for freelance opportunities and startup environments.",
    },
  ];

  const courseHighlights = [
    {
      title: "Core and Advanced Java",
      text: "Foundational Java programming including Object-Oriented Programming, data structures, algorithms, exception handling, multithreading and Java 8+ features such as Lambda expressions and Streams API.",
    },
    {
      title: "Front-End Development",
      text: "Build dynamic user interfaces using HTML5, CSS3, JavaScript and modern frameworks.",
      points: [
        "HTML5, CSS3 and JavaScript ES6+",
        "React.js or Angular",
        "Single Page Applications",
        "Complex and interactive user interfaces",
      ],
    },
    {
      title: "Back-End Development",
      text: "Master server-side logic and application architecture using modern Java technologies.",
      points: [
        "Spring and Spring Boot",
        "Spring MVC",
        "Spring Security",
        "JWT and OAuth2",
        "Spring Data JPA",
        "RESTful APIs",
      ],
    },
    {
      title: "Microservices",
      text: "Understand and implement microservices architecture using Spring Boot and Spring Cloud for building resilient and independently deployable services.",
    },
    {
      title: "Database Management",
      text: "Develop skills in relational and NoSQL database technologies.",
      points: [
        "MySQL",
        "Oracle",
        "MongoDB",
        "Hibernate",
        "JPA",
      ],
    },
    {
      title: "AWS Cloud Integration",
      text: "Gain practical experience in deploying and managing applications on Amazon Web Services.",
      points: [
        "EC2 – Elastic Compute Cloud",
        "S3 – Simple Storage Service",
        "RDS – Relational Database Service",
        "AWS Lambda",
        "API Gateway",
        "AWS CodeCommit",
        "AWS CodeBuild",
        "AWS CodeDeploy",
      ],
    },
    {
      title: "DevOps and Tools",
      text: "Become familiar with essential development and operations tools.",
      points: [
        "Git and GitHub",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Maven",
        "Gradle",
      ],
    },
  ];

  const learningFeatures = [
    {
      title: "Hands-on Projects",
      text: "Learners work on real-time and capstone projects such as e-commerce platforms or healthcare portals to apply their skills in practical scenarios.",
    },
    {
      title: "Placement Assistance",
      text: "Career support can include resume building, mock interviews and job placement assistance to prepare learners for the workforce.",
    },
    {
      title: "Industry-Recognized Certifications",
      text: "Course completion certificates and preparation for official AWS certifications can enhance professional credibility.",
    },
  ];

  const careerPath = [
    {
      title: "Junior Full Stack Developer / Trainee",
      text: "Focus on learning the basics, working on specific modules and supporting senior team members.",
    },
    {
      title: "Full Stack Developer",
      text: "Take ownership of complete features or smaller projects, manage front-end and back-end integration and work with AWS services such as EC2 and S3.",
    },
    {
      title: "Senior Full Stack Engineer / Technical Lead",
      text: "Lead complex projects, mentor junior developers, perform code reviews and participate in architectural decisions, CI/CD pipelines and cloud deployments.",
    },
    {
      title: "Software Architect / Cloud Architect",
      text: "Design overall system architecture, implement scalable and secure cloud solutions and define technical standards.",
    },
    {
      title: "Engineering Manager / CTO",
      text: "Move into a leadership role, oversee multiple projects and teams and contribute to the organization's technology strategy.",
    },
  ];

  const courseInfo = [
    {
      icon: "bi-calendar3",
      title: "Course Duration",
      value: "7 Months",
    },
    {
      icon: "bi-display",
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
  ];

  return (
    <div
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: "#f5faff",
        color: "#18324b",
        overflow: "hidden",
      }}
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #eaf7ff 0%, #ffffff 52%, #e8f5ff 100%)",
          position: "relative",
          padding: "80px 0 70px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            border: "45px solid rgba(22,135,220,0.055)",
            right: "-110px",
            top: "-80px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "rgba(22,135,220,0.05)",
            left: "-80px",
            bottom: "-50px",
          }}
        />

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            {/* LEFT */}
            <div className="col-lg-7">
              <div
                className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-4"
                style={{
                  background: "#e1f3ff",
                  color: "#087bc9",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "1.5px",
                }}
              >
                <i className="bi bi-cloud-check-fill" />
                JAVA FULL STACK + AWS DEVOPS
              </div>

              <h1
                style={{
                  color: "#101b30",
                  fontSize: "clamp(34px, 5vw, 58px)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-2px",
                  marginBottom: "22px",
                }}
              >
                Learn Latest{" "}
                <span style={{ color: "#1687dc" }}>
                  Java Full Stack
                </span>{" "}
                Developer With AWS DevOps
              </h1>

              <p
                style={{
                  color: "#52677a",
                  fontSize: "16px",
                  lineHeight: 1.85,
                  maxWidth: "760px",
                }}
              >
                CIIT's Java Full Stack Development with AWS Training with Live
                Project is designed to equip individuals with the skills needed
                to become a full-stack Java developer, with a specific focus on
                integrating and deploying applications on Amazon Web Services
                cloud platform, along with practical experience through a live
                project.
              </p>

              <div
                className="my-4 p-3 p-md-4"
                style={{
                  background: "#ffffff",
                  border: "1px solid #cfe8f8",
                  borderRadius: "18px",
                  boxShadow: "0 12px 35px rgba(19,82,120,0.07)",
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "#e7f5ff",
                      color: "#1687dc",
                      fontSize: "22px",
                    }}
                  >
                    <i className="bi bi-briefcase-fill" />
                  </div>

                  <div>
                    <div
                      style={{
                        color: "#1687dc",
                        fontSize: "12px",
                        fontWeight: 800,
                        letterSpacing: "1px",
                      }}
                    >
                      CAREER FOCUSED PROGRAM
                    </div>

                    <div
                      style={{
                        color: "#10243a",
                        fontSize: "20px",
                        fontWeight: 800,
                      }}
                    >
                      Get Your Dream IT Job Just in 8 Months
                    </div>
                  </div>
                </div>
              </div>

              <p
                style={{
                  color: "#52677a",
                  fontSize: "15px",
                  lineHeight: 1.85,
                }}
              >
                Our Full Stack with AWS training aims to prepare individuals
                for roles as Full Stack Java Developers with cloud expertise,
                enabling them to design, develop, deploy and maintain robust
                and scalable applications on the AWS platform.
              </p>

              <p
                style={{
                  color: "#52677a",
                  fontSize: "15px",
                  lineHeight: 1.85,
                }}
              >
                CIIT's Java with AWS course offers an ideal opportunity for
                individuals passionate about building projects from the ground
                up and aspiring for opportunities in the IT industry as a Java
                full stack developer with AWS DevOps skills.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link
                  to="/contact"
                  className="btn rounded-pill px-4 py-3"
                  style={{
                    background:
                      "linear-gradient(135deg,#087bc9,#168fe1)",
                    color: "#fff",
                    border: "none",
                    fontWeight: 700,
                    boxShadow: "0 10px 24px rgba(8,123,201,0.2)",
                  }}
                >
                  Enquire Now
                  <i className="bi bi-arrow-right ms-2" />
                </Link>

                <a
                  href="#courseHighlights"
                  className="btn rounded-pill px-4 py-3"
                  style={{
                    background: "#fff",
                    color: "#1687dc",
                    border: "1px solid #cce2f2",
                    fontWeight: 700,
                  }}
                >
                  Explore Course
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-5">
              <div
                style={{
                  background: "#ffffff",
                  padding: "12px",
                  borderRadius: "28px",
                  boxShadow:
                    "0 25px 70px rgba(17,65,96,0.15)",
                  border: "1px solid #dcebf7",
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
                    src={courseImage}
                    alt="Java Full Stack Development with AWS DevOps"
                    style={{
                      width: "100%",
                      height: "390px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => setImageExpanded(true)}
                    className="btn position-absolute bottom-0 end-0 m-3 rounded-circle"
                    style={{
                      width: "46px",
                      height: "46px",
                      background: "rgba(255,255,255,0.94)",
                      color: "#1687dc",
                      border: "none",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.14)",
                    }}
                    aria-label="Expand course image"
                  >
                    <i className="bi bi-arrows-fullscreen" />
                  </button>
                </div>

                <div
                  className="d-flex align-items-center gap-3 p-3"
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "#e8f5ff",
                      color: "#1687dc",
                      fontSize: "20px",
                    }}
                  >
                    <i className="bi bi-code-slash" />
                  </div>

                  <div>
                    <div
                      style={{
                        color: "#101b30",
                        fontWeight: 800,
                        fontSize: "15px",
                      }}
                    >
                      Java + AWS + DevOps
                    </div>

                    <div
                      style={{
                        color: "#6c8091",
                        fontSize: "12px",
                      }}
                    >
                      Full Stack Career Program
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK INFO */}
          <div className="row g-3 mt-5">
            {courseInfo.map((item) => (
              <div className="col-6 col-lg-3" key={item.title}>
                <div
                  className="h-100 p-3 p-md-4"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #dcebf7",
                    borderRadius: "18px",
                    boxShadow: "0 8px 25px rgba(17,65,96,0.05)",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      background: "#e8f5ff",
                      color: "#1687dc",
                    }}
                  >
                    <i className={`bi ${item.icon}`} />
                  </div>

                  <div
                    style={{
                      color: "#718394",
                      fontSize: "11px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.6px",
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      color: "#17334d",
                      fontWeight: 800,
                      fontSize: "14px",
                      marginTop: "5px",
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
          CAREER OUTCOMES
      ========================================================= */}
      <section className="py-5" style={{ background: "#ffffff" }}>
        <div className="container py-lg-4">
          <div className="row g-5">
            <div className="col-lg-8">
              <div
                style={{
                  color: "#1687dc",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                }}
              >
                CAREER OUTCOMES
              </div>

              <h2
                className="mt-2 mb-4"
                style={{
                  color: "#101b30",
                  fontWeight: 800,
                  fontSize: "clamp(28px,4vw,40px)",
                  letterSpacing: "-1px",
                }}
              >
                Career & Professional Outcomes of Java Full Stack with AWS
                Training
              </h2>

              {outcomes.map((item) => (
                <div
                  key={item.title}
                  className="mb-4 p-3 p-md-4"
                  style={{
                    background: "#f8fcff",
                    border: "1px solid #e0eef8",
                    borderRadius: "18px",
                  }}
                >
                  <div className="d-flex gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "11px",
                        background: "#e8f5ff",
                        color: "#1687dc",
                      }}
                    >
                      <i className="bi bi-check-circle-fill" />
                    </div>

                    <div>
                      <h5
                        className="mb-2"
                        style={{
                          color: "#17334d",
                          fontWeight: 800,
                          fontSize: "17px",
                        }}
                      >
                        {item.title}
                      </h5>

                      <p
                        className="mb-0"
                        style={{
                          color: "#5d7081",
                          fontSize: "14px",
                          lineHeight: 1.8,
                        }}
                      >
                        {item.text}
                      </p>

                      {item.points && (
                        <div className="row g-2 mt-2">
                          {item.points.map((point) => (
                            <div
                              className="col-md-6"
                              key={point}
                            >
                              <div
                                className="d-flex align-items-center gap-2"
                                style={{
                                  color: "#42596d",
                                  fontSize: "13px",
                                }}
                              >
                                <i
                                  className="bi bi-arrow-right-circle-fill"
                                  style={{ color: "#1687dc" }}
                                />
                                {point}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div
                className="p-4 mt-4"
                style={{
                  background:
                    "linear-gradient(135deg,#eaf7ff,#f8fcff)",
                  borderRadius: "20px",
                  border: "1px solid #d5eaf8",
                }}
              >
                <p
                  className="mb-0"
                  style={{
                    color: "#40596e",
                    lineHeight: 1.9,
                    fontSize: "15px",
                  }}
                >
                  The outcomes of Java Full Stack Development with AWS
                  training are a comprehensive technical skill set, diverse
                  career opportunities and the ability to design and deploy
                  scalable applications on the cloud.
                </p>
              </div>
            </div>

            {/* SCHEDULE */}
            <div className="col-lg-4">
              <div
                className="p-4 sticky-lg-top"
                style={{
                  top: "100px",
                  background: "#f5faff",
                  border: "1px solid #dcebf7",
                  borderRadius: "24px",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "16px",
                    background: "#e5f4ff",
                    color: "#1687dc",
                    fontSize: "24px",
                  }}
                >
                  <i className="bi bi-clock-history" />
                </div>

                <h4
                  style={{
                    color: "#101b30",
                    fontWeight: 800,
                  }}
                >
                  Training Schedule
                </h4>

                <div
                  className="p-3 my-3"
                  style={{
                    background: "#ffffff",
                    borderRadius: "15px",
                    border: "1px solid #dcebf7",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#728494",
                    }}
                  >
                    WEEKDAYS
                  </div>

                  <div
                    style={{
                      color: "#17334d",
                      fontWeight: 800,
                    }}
                  >
                    Monday – Friday
                  </div>

                  <div
                    style={{
                      color: "#1687dc",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    7 Months
                  </div>
                </div>

                <div
                  className="p-3 mb-4"
                  style={{
                    background: "#ffffff",
                    borderRadius: "15px",
                    border: "1px solid #dcebf7",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#728494",
                    }}
                  >
                    WEEKENDS
                  </div>

                  <div
                    style={{
                      color: "#17334d",
                      fontWeight: 800,
                    }}
                  >
                    Saturday & Sunday
                  </div>

                  <div
                    style={{
                      color: "#1687dc",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    9 Months
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className="bi bi-star-fill"
                      style={{
                        color: "#1687dc",
                        fontSize: "17px",
                      }}
                    />
                  ))}

                  <span
                    style={{
                      color: "#607386",
                      fontSize: "13px",
                      marginLeft: "5px",
                    }}
                  >
                    5/5 Rating
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSE INFORMATION
      ========================================================= */}
      <section
        className="py-5"
        style={{
          background: "#edf7ff",
        }}
      >
        <div className="container py-lg-4">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <img
                src={courseImage}
                alt="Java Full Stack with AWS DevOps"
                style={{
                  width: "100%",
                  height: "360px",
                  objectFit: "cover",
                  borderRadius: "24px",
                  boxShadow: "0 20px 50px rgba(17,65,96,0.12)",
                  border: "6px solid #ffffff",
                }}
              />
            </div>

            <div className="col-lg-7">
              <div
                style={{
                  color: "#1687dc",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                }}
              >
                COURSE DETAILS
              </div>

              <h2
                className="mt-2 mb-4"
                style={{
                  color: "#101b30",
                  fontWeight: 800,
                  fontSize: "36px",
                }}
              >
                Course Information
              </h2>

              <div className="row g-3">
                {courseInfo.map((item) => (
                  <div className="col-md-6" key={item.title}>
                    <div
                      className="p-3 d-flex align-items-center gap-3 h-100"
                      style={{
                        background: "#ffffff",
                        border: "1px solid #dcebf7",
                        borderRadius: "16px",
                      }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "12px",
                          background: "#e8f5ff",
                          color: "#1687dc",
                        }}
                      >
                        <i className={`bi ${item.icon}`} />
                      </div>

                      <div>
                        <div
                          style={{
                            color: "#748697",
                            fontSize: "11px",
                            fontWeight: 700,
                          }}
                        >
                          {item.title}
                        </div>

                        <div
                          style={{
                            color: "#17334d",
                            fontSize: "14px",
                            fontWeight: 800,
                          }}
                        >
                          {item.value}
                        </div>
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
          BENEFITS
      ========================================================= */}
      <section className="py-5" style={{ background: "#ffffff" }}>
        <div className="container py-lg-4">
          <div className="text-center mb-5">
            <div
              style={{
                color: "#1687dc",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
              }}
            >
              WHY JAVA + AWS
            </div>

            <h2
              className="mt-2"
              style={{
                color: "#101b30",
                fontSize: "clamp(28px,4vw,40px)",
                fontWeight: 800,
                letterSpacing: "-1px",
              }}
            >
              Benefits of Java Full Stack with AWS
            </h2>
          </div>

          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div className="col-md-6 col-lg-4" key={benefit.title}>
                <div
                  className="h-100 p-4"
                  style={{
                    background: "#f8fcff",
                    border: "1px solid #dcebf7",
                    borderRadius: "20px",
                    transition: "all .25s ease",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "#e7f5ff",
                      color: "#1687dc",
                      fontWeight: 800,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h5
                    style={{
                      color: "#17334d",
                      fontWeight: 800,
                      fontSize: "17px",
                    }}
                  >
                    {benefit.title}
                  </h5>

                  <p
                    className="mb-0"
                    style={{
                      color: "#607386",
                      fontSize: "14px",
                      lineHeight: 1.8,
                    }}
                  >
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-5 p-4 p-md-5"
            style={{
              background:
                "linear-gradient(135deg,#0e3458,#1687dc)",
              color: "#ffffff",
              borderRadius: "25px",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-2 text-center mb-3 mb-lg-0">
                <i
                  className="bi bi-cloud-arrow-up-fill"
                  style={{
                    fontSize: "55px",
                    opacity: 0.95,
                  }}
                />
              </div>

              <div className="col-lg-10">
                <p
                  className="mb-0"
                  style={{
                    lineHeight: 1.9,
                    fontSize: "15px",
                    opacity: 0.92,
                  }}
                >
                  Combining Java Full Stack development skills with Amazon Web
                  Services expertise offers enhanced career opportunities,
                  higher earning potential and the ability to build, deploy
                  and manage highly scalable, reliable and cost-effective
                  cloud-based applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SALARY
      ========================================================= */}
      <section
        className="py-5"
        style={{
          background: "#f5faff",
        }}
      >
        <div className="container py-lg-4">
          <div className="text-center mb-5">
            <div
              style={{
                color: "#1687dc",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
              }}
            >
              CAREER COMPENSATION
            </div>

            <h2
              className="mt-2"
              style={{
                color: "#101b30",
                fontWeight: 800,
                fontSize: "38px",
              }}
            >
              Average Salaries
            </h2>
          </div>

          <div className="row g-4">
            {/* USA */}
            <div className="col-lg-6">
              <div
                className="h-100 p-4 p-md-5"
                style={{
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  borderRadius: "24px",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "15px",
                      background: "#e8f5ff",
                      color: "#1687dc",
                      fontSize: "23px",
                    }}
                  >
                    <i className="bi bi-globe-americas" />
                  </div>

                  <h4
                    className="mb-0"
                    style={{
                      color: "#17334d",
                      fontWeight: 800,
                    }}
                  >
                    United States
                  </h4>
                </div>

                {[
                  ["Entry-Level (0–2 years)", "$70,000 – $90,000"],
                  ["Mid-Level (3–6 years)", "$90,000 – $150,000"],
                  [
                    "Senior / Lead (7+ years)",
                    "$150,000 – $250,000+",
                  ],
                ].map(([title, salary]) => (
                  <div
                    key={title}
                    className="p-3 mb-3"
                    style={{
                      background: "#f7fbfe",
                      borderRadius: "15px",
                    }}
                  >
                    <div
                      style={{
                        color: "#6c7f90",
                        fontSize: "12px",
                      }}
                    >
                      {title}
                    </div>

                    <div
                      style={{
                        color: "#1687dc",
                        fontWeight: 800,
                        fontSize: "19px",
                      }}
                    >
                      {salary}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* INDIA */}
            <div className="col-lg-6">
              <div
                className="h-100 p-4 p-md-5"
                style={{
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  borderRadius: "24px",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "15px",
                      background: "#e8f5ff",
                      color: "#1687dc",
                      fontSize: "23px",
                    }}
                  >
                    <i className="bi bi-building" />
                  </div>

                  <h4
                    className="mb-0"
                    style={{
                      color: "#17334d",
                      fontWeight: 800,
                    }}
                  >
                    India
                  </h4>
                </div>

                {[
                  ["Entry-Level (0–2 years)", "₹3 – ₹8 LPA"],
                  ["Mid-Level (3–6 years)", "₹8 – ₹20 LPA"],
                  [
                    "Senior / Lead (6+ years)",
                    "₹25 – ₹50+ LPA",
                  ],
                ].map(([title, salary]) => (
                  <div
                    key={title}
                    className="p-3 mb-3"
                    style={{
                      background: "#f7fbfe",
                      borderRadius: "15px",
                    }}
                  >
                    <div
                      style={{
                        color: "#6c7f90",
                        fontSize: "12px",
                      }}
                    >
                      {title}
                    </div>

                    <div
                      style={{
                        color: "#1687dc",
                        fontWeight: 800,
                        fontSize: "19px",
                      }}
                    >
                      {salary}
                    </div>
                  </div>
                ))}

                <div
                  style={{
                    color: "#65788a",
                    fontSize: "12px",
                    lineHeight: 1.7,
                  }}
                >
                  Senior roles may reach ₹1 Crore in some top companies,
                  according to the source course information.
                </div>
              </div>
            </div>
          </div>

          {/* KEY FACTORS */}
          <div className="mt-5">
            <div
              className="p-4 p-md-5"
              style={{
                background: "#ffffff",
                border: "1px solid #dcebf7",
                borderRadius: "24px",
              }}
            >
              <h4
                style={{
                  color: "#17334d",
                  fontWeight: 800,
                  marginBottom: "25px",
                }}
              >
                Key Factors in India
              </h4>

              <div className="row g-4">
                {[
                  [
                    "Experience Level",
                    "Salaries generally increase with more years of experience. Entry-level positions naturally offer lower compensation than senior or lead roles.",
                  ],
                  [
                    "Location",
                    "Cities such as Bangalore, Pune and Hyderabad are major technology centers with competitive salaries.",
                  ],
                  [
                    "Company Size and Type",
                    "Large corporations or technology companies may offer higher salaries and comprehensive benefits compared with smaller companies or startups.",
                  ],
                  [
                    "Specific AWS Skills",
                    "Advanced AWS services such as Lambda, Kubernetes and advanced security services can add value to a developer's skill set.",
                  ],
                  [
                    "Additional Skills",
                    "Microservices, Docker and front-end frameworks such as React or Angular can also increase career opportunities.",
                  ],
                ].map(([title, text]) => (
                  <div className="col-md-6 col-lg-4" key={title}>
                    <div
                      className="d-flex gap-2"
                      style={{
                        color: "#52677a",
                        fontSize: "14px",
                        lineHeight: 1.75,
                      }}
                    >
                      <i
                        className="bi bi-check-circle-fill"
                        style={{
                          color: "#1687dc",
                          marginTop: "4px",
                        }}
                      />

                      <div>
                        <strong style={{ color: "#17334d" }}>
                          {title}
                        </strong>
                        <div>{text}</div>
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
          WHO CAN LEARN
      ========================================================= */}
      <section className="py-5" style={{ background: "#ffffff" }}>
        <div className="container py-lg-4">
          <div className="row g-5">
            <div className="col-lg-5">
              <div
                style={{
                  color: "#1687dc",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                }}
              >
                WHO CAN LEARN
              </div>

              <h2
                className="mt-2"
                style={{
                  color: "#101b30",
                  fontSize: "38px",
                  fontWeight: 800,
                }}
              >
                Who Can Learn This Course?
              </h2>

              <p
                style={{
                  color: "#607386",
                  fontSize: "15px",
                  lineHeight: 1.9,
                }}
              >
                Anyone with a keen interest in software development can learn
                Java Full Stack with AWS. There are no strict prerequisites,
                but a basic understanding of programming logic is helpful.
              </p>

              <div
                className="p-4 mt-4"
                style={{
                  background:
                    "linear-gradient(135deg,#eaf7ff,#f7fcff)",
                  borderRadius: "20px",
                  border: "1px solid #d7ebf8",
                }}
              >
                <i
                  className="bi bi-lightbulb-fill"
                  style={{
                    color: "#1687dc",
                    fontSize: "28px",
                  }}
                />

                <p
                  className="mb-0 mt-3"
                  style={{
                    color: "#4e6578",
                    fontSize: "14px",
                    lineHeight: 1.8,
                  }}
                >
                  The course is designed to help learners build full stack
                  development skills together with cloud and DevOps expertise.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              {[
                [
                  "Aspiring Software Developers",
                  "Beginners interested in building end-to-end applications and deploying them on the cloud.",
                ],
                [
                  "Existing Developers",
                  "Developers with front-end, back-end or basic Java experience who want to become full stack and cloud proficient.",
                ],
                [
                  "Engineering Graduates",
                  "Recent graduates from Computer Science, IT and related fields who want to become industry-ready.",
                ],
                [
                  "Cloud Enthusiasts",
                  "Individuals interested in integrating robust back-end systems with AWS cloud services.",
                ],
                [
                  "Career Changers",
                  "Professionals from non-IT backgrounds with an interest in technology and software development.",
                ],
              ].map(([title, text], index) => (
                <div
                  className="d-flex gap-3 mb-3 p-3"
                  key={title}
                  style={{
                    background: "#f8fcff",
                    border: "1px solid #e0eef8",
                    borderRadius: "16px",
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "11px",
                      background: "#e8f5ff",
                      color: "#1687dc",
                      fontWeight: 800,
                    }}
                  >
                    {index + 1}
                  </div>

                  <div>
                    <h6
                      style={{
                        color: "#17334d",
                        fontWeight: 800,
                        marginBottom: "5px",
                      }}
                    >
                      {title}
                    </h6>

                    <p
                      className="mb-0"
                      style={{
                        color: "#607386",
                        fontSize: "13px",
                        lineHeight: 1.7,
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

      {/* =========================================================
          COURSE HIGHLIGHTS
      ========================================================= */}
      <section
        id="courseHighlights"
        className="py-5"
        style={{
          background: "#edf7ff",
        }}
      >
        <div className="container py-lg-4">
          <div className="text-center mb-5">
            <div
              style={{
                color: "#1687dc",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
              }}
            >
              WHAT YOU WILL LEARN
            </div>

            <h2
              className="mt-2"
              style={{
                color: "#101b30",
                fontWeight: 800,
                fontSize: "clamp(28px,4vw,40px)",
              }}
            >
              Course Highlights
            </h2>
          </div>

          <div className="row g-4">
            {courseHighlights.map((item, index) => (
              <div className="col-lg-6" key={item.title}>
                <div
                  className="h-100 p-4"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #dcebf7",
                    borderRadius: "22px",
                  }}
                >
                  <div className="d-flex gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        background: "#e8f5ff",
                        color: "#1687dc",
                        fontWeight: 800,
                      }}
                    >
                      {index + 1}
                    </div>

                    <div>
                      <h5
                        style={{
                          color: "#17334d",
                          fontWeight: 800,
                        }}
                      >
                        {item.title}
                      </h5>

                      <p
                        style={{
                          color: "#607386",
                          fontSize: "14px",
                          lineHeight: 1.8,
                        }}
                      >
                        {item.text}
                      </p>

                      {item.points && (
                        <div className="mt-2">
                          {item.points.map((point) => (
                            <div
                              className="d-flex gap-2 mb-2"
                              key={point}
                              style={{
                                color: "#53697b",
                                fontSize: "13px",
                              }}
                            >
                              <i
                                className="bi bi-check2"
                                style={{
                                  color: "#1687dc",
                                  fontWeight: 800,
                                }}
                              />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LEARNING FEATURES
      ========================================================= */}
      <section className="py-5" style={{ background: "#ffffff" }}>
        <div className="container py-lg-4">
          <div className="text-center mb-5">
            <div
              style={{
                color: "#1687dc",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
              }}
            >
              CIIT TRAINING
            </div>

            <h2
              className="mt-2"
              style={{
                color: "#101b30",
                fontWeight: 800,
                fontSize: "38px",
              }}
            >
              Learning Features
            </h2>
          </div>

          <div className="row g-4">
            {learningFeatures.map((item, index) => (
              <div className="col-md-4" key={item.title}>
                <div
                  className="h-100 p-4 p-lg-5 text-center"
                  style={{
                    background: "#f8fcff",
                    border: "1px solid #dcebf7",
                    borderRadius: "22px",
                  }}
                >
                  <div
                    className="mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: "62px",
                      height: "62px",
                      borderRadius: "18px",
                      background: "#e7f5ff",
                      color: "#1687dc",
                      fontSize: "24px",
                    }}
                  >
                    <i
                      className={
                        index === 0
                          ? "bi bi-laptop"
                          : index === 1
                          ? "bi bi-person-check"
                          : "bi bi-award"
                      }
                    />
                  </div>

                  <h5
                    className="mt-4"
                    style={{
                      color: "#17334d",
                      fontWeight: 800,
                    }}
                  >
                    {item.title}
                  </h5>

                  <p
                    className="mb-0"
                    style={{
                      color: "#607386",
                      fontSize: "14px",
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
      </section>

      {/* =========================================================
          CAREER PATH
      ========================================================= */}
      <section
        className="py-5"
        style={{
          background: "#f5faff",
        }}
      >
        <div className="container py-lg-4">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <div className="text-center mb-5">
                <div
                  style={{
                    color: "#1687dc",
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "2px",
                  }}
                >
                  CAREER GROWTH
                </div>

                <h2
                  className="mt-2"
                  style={{
                    color: "#101b30",
                    fontWeight: 800,
                    fontSize: "38px",
                  }}
                >
                  Java + AWS Career Path
                </h2>

                <p
                  style={{
                    color: "#607386",
                    lineHeight: 1.9,
                    fontSize: "15px",
                  }}
                >
                  A Java full stack with AWS career path starts with
                  foundational full-stack skills in Java, front-end
                  technologies like HTML, CSS and JavaScript, and back-end
                  frameworks such as Spring Boot. The path then integrates
                  cloud knowledge, especially AWS core services.
                </p>
              </div>

              <div className="position-relative">
                {careerPath.map((item, index) => (
                  <div
                    className="d-flex gap-3 gap-md-4 mb-4"
                    key={item.title}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "15px",
                        background:
                          "linear-gradient(135deg,#087bc9,#168fe1)",
                        color: "#ffffff",
                        fontWeight: 800,
                        boxShadow:
                          "0 8px 20px rgba(8,123,201,0.18)",
                      }}
                    >
                      {index + 1}
                    </div>

                    <div
                      className="flex-grow-1 p-4"
                      style={{
                        background: "#ffffff",
                        border: "1px solid #dcebf7",
                        borderRadius: "18px",
                      }}
                    >
                      <h5
                        style={{
                          color: "#17334d",
                          fontWeight: 800,
                        }}
                      >
                        {item.title}
                      </h5>

                      <p
                        className="mb-0"
                        style={{
                          color: "#607386",
                          fontSize: "14px",
                          lineHeight: 1.8,
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-4 p-4"
                style={{
                  background: "#eaf7ff",
                  border: "1px solid #cfe8f8",
                  borderRadius: "18px",
                }}
              >
                <p
                  className="mb-0"
                  style={{
                    color: "#4c6477",
                    fontSize: "14px",
                    lineHeight: 1.85,
                  }}
                >
                  In essence, a skill set combining Java and AWS provides the
                  technical foundation to work on modern projects involving
                  full stack development, cloud deployment, scalable
                  architectures and DevOps practices.
                </p>
              </div>
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
            className="p-4 p-md-5"
            style={{
              background:
                "linear-gradient(135deg,#0e3458,#1687dc)",
              borderRadius: "28px",
              color: "#ffffff",
              boxShadow: "0 25px 60px rgba(14,52,88,0.2)",
            }}
          >
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "2px",
                    opacity: 0.8,
                  }}
                >
                  START YOUR CAREER
                </div>

                <h2
                  className="mt-2 mb-3"
                  style={{
                    fontWeight: 800,
                    fontSize: "clamp(28px,4vw,42px)",
                  }}
                >
                  Build Your Future With Java + AWS
                </h2>

                <p
                  className="mb-0"
                  style={{
                    opacity: 0.86,
                    lineHeight: 1.8,
                    fontSize: "15px",
                  }}
                >
                  Learn Java Full Stack development, AWS cloud integration
                  and DevOps practices through practical training and
                  project-based learning.
                </p>
              </div>

              <div className="col-lg-4 text-lg-end">
                <Link
                  to="/contact"
                  className="btn btn-light rounded-pill px-4 py-3"
                  style={{
                    color: "#087bc9",
                    fontWeight: 800,
                  }}
                >
                  Contact CIIT
                  <i className="bi bi-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMAGE MODAL
      ========================================================= */}
      {imageExpanded && (
        <div
          onClick={() => setImageExpanded(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(4,24,40,0.9)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "25px",
          }}
        >
          <button
            type="button"
            onClick={() => setImageExpanded(false)}
            className="btn position-absolute top-0 end-0 m-4 rounded-circle"
            style={{
              width: "46px",
              height: "46px",
              background: "#ffffff",
              color: "#17334d",
              zIndex: 2,
            }}
          >
            <i className="bi bi-x-lg" />
          </button>

          <img
            src={courseImage}
            alt="Java Full Stack Development with AWS DevOps enlarged"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "95%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "18px",
              boxShadow: "0 25px 80px rgba(0,0,0,0.35)",
            }}
          />
        </div>
      )}
    </div>
  );
}