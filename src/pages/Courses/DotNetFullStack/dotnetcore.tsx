import { useEffect, useState } from "react";
export default function DotNetCore() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = enquiryOpen ? "hidden" : "";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setEnquiryOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [enquiryOpen]);

  const openEnquiry = () => {
    setSubmitted(false);
    setEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    setEnquiryOpen(false);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const outcomes = [
    "Get hike in your salary up to ₹30 LPA",
    ".NET development makes you a valuable asset with more career opportunities",
    "Transition into roles like .NET Back End Engineer, .NET Developer and .NET Architect",
    "Fast-track your career with Fortune 500+ companies",
    "Build real-world projects using .NET Core",
    "Prepare yourself for .NET Core Developer roles",
    "Get priority in job opportunities with practical skills",
  ];

  const benefits = [
    {
      icon: "bi-graph-up-arrow",
      title: "High Demand for .NET Developers",
      text: "In enterprise, startup and government sectors, .NET skills open opportunities for Full Stack Developer, Backend Engineer, Software Architect and Cloud Developer roles.",
    },
    {
      icon: "bi-layers",
      title: "Versatile Platform",
      text: ".NET is cross-platform and supports Windows, Linux, macOS, Android and iOS. It supports C#, F# and Visual Basic.",
    },
    {
      icon: "bi-tools",
      title: "Rich Ecosystem",
      text: "NuGet, Visual Studio and Visual Studio Code provide powerful development, debugging, testing and deployment capabilities.",
    },
    {
      icon: "bi-people",
      title: "Strong Community",
      text: ".NET is backed by Microsoft with extensive documentation, GitHub projects, forums and learning resources.",
    },
    {
      icon: "bi-shield-check",
      title: "Security & Performance",
      text: ".NET provides authentication, authorization and data protection features with strong performance through ASP.NET Core and modern .NET.",
    },
    {
      icon: "bi-braces",
      title: "Minimal APIs & OpenAPI",
      text: "Modern Minimal APIs make lightweight services easier to build, while OpenAPI support simplifies API documentation and testing.",
    },
  ];

  const salaryLevels = [
    {
      level: "Fresher / Entry-Level",
      experience: "0–1 Year",
      salary: "₹2.5 LPA – ₹5.5 LPA",
      extra: "Up to ₹6–8 LPA with certifications such as Azure",
    },
    {
      level: "Junior to Mid-Level",
      experience: "2–5 Years",
      salary: "₹6 LPA – ₹12 LPA",
      extra: "Up to ₹10–16 LPA with Microservices / Azure experience",
    },
    {
      level: "Senior",
      experience: "5–9 Years",
      salary: "₹12 LPA – ₹22 LPA",
      extra: "Up to ₹18–28 LPA with advanced cloud / distributed systems expertise",
    },
    {
      level: "Lead / Architect",
      experience: "10+ Years",
      salary: "₹22 LPA – ₹35 LPA",
      extra: "₹40 LPA+ possible in top product / FinTech companies",
    },
  ];

  const whoCanLearn = [
    {
      icon: "bi-person-workspace",
      title: "Non-IT Candidates",
      text: "Training starts from computer fundamentals, making it possible for motivated learners from non-IT backgrounds to build development skills.",
    },
    {
      icon: "bi-mortarboard",
      title: "Beginners & Students",
      text: "Students with basic computer knowledge or programming logic can start with C# and gradually learn the .NET ecosystem.",
    },
    {
      icon: "bi-code-square",
      title: "Experienced Developers",
      text: "Experienced IT professionals can expand their skills into modern .NET, Azure and cloud-based development.",
    },
    {
      icon: "bi-globe2",
      title: "Web Developers",
      text: "ASP.NET Core can be used for secure and scalable websites and APIs and can be combined with React or Angular.",
    },
    {
      icon: "bi-building",
      title: "Enterprise Developers",
      text: ".NET is suitable for scalable enterprise applications and works closely with technologies such as Azure and SQL Server.",
    },
    {
      icon: "bi-phone",
      title: "Mobile & Game Developers",
      text: ".NET MAUI supports cross-platform applications and Unity uses C# for game development.",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud & IoT Developers",
      text: "Developers interested in cloud, serverless and IoT applications can use .NET with modern cloud platforms.",
    },
  ];

  const highlights = [
    {
      icon: "bi-code-slash",
      title: "C# Programming",
      text: "Syntax, data types, control statements, loops and core programming concepts.",
    },
    {
      icon: "bi-diagram-3",
      title: "Object-Oriented Programming",
      text: "Classes, objects, inheritance, polymorphism and encapsulation.",
    },
    {
      icon: "bi-git",
      title: "Git & GitHub",
      text: "Version control and collaborative software development practices.",
    },
    {
      icon: "bi-bug",
      title: "Debugging & Testing",
      text: "Visual Studio debugging along with testing using xUnit and NUnit.",
    },
    {
      icon: "bi-window",
      title: ".NET & CLR",
      text: ".NET architecture, components, evolution and the Common Language Runtime.",
    },
    {
      icon: "bi-globe",
      title: "ASP.NET Core",
      text: "MVC, Web API, routing, controllers, views and middleware.",
    },
    {
      icon: "bi-database",
      title: "Database Management",
      text: "SQL Server, ADO.NET, Entity Framework, LINQ and migrations.",
    },
    {
      icon: "bi-palette",
      title: "Front-End Technologies",
      text: "HTML5, CSS3, JavaScript and introduction to React / Angular.",
    },
    {
      icon: "bi-cloud-arrow-up",
      title: "Cloud & DevOps",
      text: "Azure deployment, serverless technologies, Docker and CI/CD.",
    },
    {
      icon: "bi-phone",
      title: "Windows & Mobile Apps",
      text: "Windows applications and cross-platform development using .NET MAUI.",
    },
    {
      icon: "bi-kanban",
      title: "Real-World Projects",
      text: "Hands-on end-to-end applications developed from scratch for portfolio building.",
    },
  ];

  const careerPath = [
    {
      number: "01",
      title: "Junior .NET Developer",
      experience: "0–2 Years",
      text: "Focus on C# fundamentals, .NET, basic SQL, Git, coding, testing and debugging.",
      skills: "C#, ASP.NET, SQL Server, Visual Studio, HTML, CSS, JavaScript",
    },
    {
      number: "02",
      title: "Mid-Level .NET Developer",
      experience: "2–5 Years",
      text: "Work independently on complex projects, SDLC activities and mentoring.",
      skills: "ASP.NET MVC, Web API, Entity Framework, REST APIs, Unit Testing, Agile",
    },
    {
      number: "03",
      title: "Senior .NET Developer",
      experience: "5–9 Years",
      text: "Lead projects, make architecture decisions and guide technical implementation.",
      skills: "Architecture, Performance, Security, Code Reviews, Cloud & Distributed Systems",
    },
    {
      number: "04",
      title: "Lead / Architect",
      experience: "10+ Years",
      text: "Move towards technical leadership, solution architecture and enterprise-level systems.",
      skills: ".NET, Azure, Cloud Architecture, DevOps, Distributed Systems",
    },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .dotnet-page {
          min-height: 100vh;
          background: #f5faff;
          color: #18324b;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .dotnet-hero {
          position: relative;
          overflow: hidden;
          padding: 105px 0 80px;
          background:
            radial-gradient(circle at 90% 15%, rgba(22,135,220,.12), transparent 28%),
            radial-gradient(circle at 5% 80%, rgba(8,123,201,.08), transparent 30%),
            linear-gradient(135deg, #ffffff 0%, #eef8ff 100%);
        }

        .dotnet-orb {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(22,135,220,.15);
          pointer-events: none;
        }

        .dotnet-orb.one {
          width: 260px;
          height: 260px;
          right: -80px;
          top: 40px;
        }

        .dotnet-orb.two {
          width: 150px;
          height: 150px;
          left: -55px;
          bottom: 30px;
        }

        .dotnet-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: #e7f5ff;
          color: #087bc9;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .dotnet-title {
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.06;
          font-weight: 850;
          letter-spacing: -2.5px;
          color: #101b30;
        }

        .dotnet-title span {
          color: #1687dc;
        }

        .dotnet-lead {
          max-width: 720px;
          font-size: 17px;
          line-height: 1.85;
          color: #587086;
        }

        .dotnet-primary {
          border: 0;
          color: white;
          background: linear-gradient(135deg,#087bc9,#168fe1);
          box-shadow: 0 12px 28px rgba(8,123,201,.24);
          border-radius: 12px;
          padding: 13px 23px;
          font-weight: 750;
          transition: .25s ease;
        }

        .dotnet-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 34px rgba(8,123,201,.30);
          color: white;
        }

        .dotnet-outline {
          border: 1px solid #cce2f2;
          color: #087bc9;
          background: white;
          border-radius: 12px;
          padding: 12px 22px;
          font-weight: 750;
          transition: .25s ease;
        }

        .dotnet-outline:hover {
          border-color: #1687dc;
          transform: translateY(-3px);
          color: #087bc9;
        }

        .hero-image-card {
          position: relative;
          border-radius: 28px;
          padding: 10px;
          background: rgba(255,255,255,.85);
          border: 1px solid #d8eaf7;
          box-shadow: 0 24px 60px rgba(22,85,125,.13);
          animation: ciitFloat 5s ease-in-out infinite;
        }

        .hero-image-card img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 21px;
          display: block;
        }

        .hero-floating-card {
          position: absolute;
          left: -25px;
          bottom: 25px;
          background: white;
          border: 1px solid #dcebf7;
          box-shadow: 0 16px 35px rgba(22,85,125,.15);
          border-radius: 17px;
          padding: 15px 18px;
        }

        .info-card {
          height: 100%;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 20px;
          padding: 22px;
          box-shadow: 0 10px 28px rgba(22,85,125,.06);
        }

        .info-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #e8f5ff;
          color: #087bc9;
          font-size: 21px;
        }

        .section-block {
          padding: 88px 0;
        }

        .section-label {
          color: #1687dc;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .section-title {
          margin-top: 10px;
          color: #101b30;
          font-size: clamp(31px,4vw,47px);
          line-height: 1.12;
          font-weight: 850;
          letter-spacing: -1.5px;
        }

        .section-text {
          color: #61778b;
          font-size: 16px;
          line-height: 1.85;
        }

        .content-card {
          height: 100%;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 12px 34px rgba(22,85,125,.06);
          transition: .3s ease;
        }

        .content-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 42px rgba(22,85,125,.11);
          border-color: #c4e1f5;
        }

        .check-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .check-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 12px 0;
          color: #526a7f;
          line-height: 1.65;
        }

        .check-list i {
          color: #1687dc;
          font-size: 19px;
          margin-top: 2px;
        }

        .salary-card {
          height: 100%;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 22px;
          padding: 25px;
          position: relative;
          overflow: hidden;
        }

        .salary-card::before {
          content: "";
          position: absolute;
          width: 85px;
          height: 85px;
          border-radius: 50%;
          right: -35px;
          top: -35px;
          background: #edf8ff;
        }

        .salary-number {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e8f5ff;
          color: #087bc9;
          font-weight: 800;
        }

        .salary-range {
          color: #087bc9;
          font-size: 20px;
          font-weight: 850;
        }

        .highlight-card {
          height: 100%;
          padding: 25px;
          border-radius: 22px;
          background: white;
          border: 1px solid #dcebf7;
          box-shadow: 0 10px 28px rgba(22,85,125,.05);
          transition: .3s ease;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
        }

        .career-item {
          position: relative;
          padding: 28px 28px 28px 85px;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 22px;
          margin-bottom: 18px;
        }

        .career-number {
          position: absolute;
          left: 23px;
          top: 26px;
          width: 43px;
          height: 43px;
          border-radius: 13px;
          background: linear-gradient(135deg,#087bc9,#168fe1);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .career-line {
          position: absolute;
          left: 43px;
          top: 70px;
          width: 2px;
          height: calc(100% + 18px);
          background: #d9ecfa;
        }

        .career-item:last-child .career-line {
          display: none;
        }

        .cta-section {
          padding: 80px 0;
        }

        .cta-box {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          padding: 55px;
          color: white;
          background: linear-gradient(135deg,#0e3458,#1687dc);
          box-shadow: 0 25px 55px rgba(14,52,88,.20);
        }

        .cta-box::after {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.16);
          right: -100px;
          top: -100px;
        }

        .cta-box .dotnet-primary {
          background: white;
          color: #087bc9;
        }

        .modal-backdrop-custom {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(8,30,50,.62);
          backdrop-filter: blur(7px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: ciitBackdrop .2s ease-out;
        }

        .enquiry-modal {
          width: min(720px, 100%);
          max-height: 92vh;
          overflow-y: auto;
          background: white;
          border-radius: 26px;
          box-shadow: 0 30px 90px rgba(0,0,0,.25);
          animation: ciitModal .28s ease-out;
        }

        .modal-header-custom {
          padding: 25px 28px;
          color: white;
          background: linear-gradient(135deg,#0e3458,#1687dc);
        }

        .modal-body-custom {
          padding: 28px;
        }

        .form-control,
        .form-select {
          min-height: 48px;
          border-radius: 11px;
          border: 1px solid #d6e6f1;
        }

        .form-control:focus,
        .form-select:focus {
          border-color: #1687dc;
          box-shadow: 0 0 0 3px rgba(22,135,220,.10);
        }

        .success-box {
          text-align: center;
          padding: 45px 20px;
        }

        .success-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          background: #e8f7ff;
          color: #087bc9;
          font-size: 32px;
        }

        @keyframes ciitFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes ciitBackdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes ciitModal {
          from {
            opacity: 0;
            transform: translateY(20px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 991px) {
          .dotnet-hero {
            padding-top: 70px;
          }

          .hero-image-card {
            margin-top: 35px;
          }

          .hero-floating-card {
            left: 15px;
          }

          .section-block {
            padding: 65px 0;
          }

          .cta-box {
            padding: 38px 25px;
          }
        }

        @media (max-width: 575px) {
          .dotnet-title {
            letter-spacing: -1.5px;
          }

          .hero-image-card img {
            height: 270px;
          }

          .career-item {
            padding-left: 70px;
          }

          .cta-box {
            border-radius: 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="dotnet-page">
        {/* HERO */}
        <section className="dotnet-hero">
          <div className="dotnet-orb one" />
          <div className="dotnet-orb two" />

          <div className="container position-relative">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <div className="dotnet-badge mb-4">
                  <i className="bi bi-code-slash" />
                  DOT NET CORE TRAINING
                </div>

                <h1 className="dotnet-title mb-4">
                  Learn Latest <span>.NET Technology</span> on
                  Industry-Oriented Projects
                </h1>

                <p className="dotnet-lead mb-3">
                  CIIT's Dot Net Training is ideal for both freshers and
                  working professionals interested in building a career as a
                  Dot Net Developer.
                </p>

                <p className="dotnet-lead">
                  .NET is closely integrated with Azure, providing a
                  comprehensive platform for building, deploying and managing
                  modern cloud applications.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">
                  <button
                    type="button"
                    className="dotnet-primary"
                    onClick={openEnquiry}
                  >
                    Enquire Now <i className="bi bi-arrow-right ms-2" />
                  </button>

                  <a href="#course-details" className="dotnet-outline">
                    View Course Details
                  </a>
                </div>

                <div className="row g-3 mt-4">
                  <div className="col-sm-6 col-md-3">
                    <div className="info-card">
                      <div className="info-icon mb-3">
                        <i className="bi bi-clock" />
                      </div>
                      <small className="text-secondary d-block">
                        Duration
                      </small>
                      <strong>6 Months</strong>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <div className="info-card">
                      <div className="info-icon mb-3">
                        <i className="bi bi-laptop" />
                      </div>
                      <small className="text-secondary d-block">
                        Training
                      </small>
                      <strong>Classroom & Online</strong>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <div className="info-card">
                      <div className="info-icon mb-3">
                        <i className="bi bi-calendar3" />
                      </div>
                      <small className="text-secondary d-block">
                        Batches
                      </small>
                      <strong>Weekdays / Weekends</strong>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <div className="info-card">
                      <div className="info-icon mb-3">
                        <i className="bi bi-translate" />
                      </div>
                      <small className="text-secondary d-block">
                        Language
                      </small>
                      <strong>English, Hindi, Marathi</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="hero-image-card">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85"
                    alt=".NET development training"
                  />

                  <div className="hero-floating-card">
                    <div className="small text-secondary mb-1">
                      CIIT Career Focus
                    </div>
                    <strong className="text-dark">
                      <i className="bi bi-star-fill text-primary me-2" />
                      5/5 Rating
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="section-block" id="course-details">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="section-label">WHY CIIT .NET TRAINING</div>

                <h2 className="section-title">
                  Build Your Career with Modern .NET Development
                </h2>

                <p className="section-text mt-4">
                  CIIT's .NET Course offers an ideal opportunity for
                  individuals passionate about building projects from the
                  ground up. CIIT serves as an excellent platform for those
                  aspiring for boundless opportunities in the IT industry as
                  a Dot Net Developer.
                </p>

                <div className="content-card mt-4">
                  <div className="d-flex gap-3">
                    <div className="info-icon flex-shrink-0">
                      <i className="bi bi-cloud" />
                    </div>
                    <div>
                      <h5 className="fw-bold text-dark">
                        .NET + Azure
                      </h5>
                      <p className="section-text mb-0">
                        Learn modern .NET development with cloud concepts,
                        Azure integration, APIs, databases and real-world
                        application development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="content-card">
                  <div className="section-label mb-2">
                    TRAINING SCHEDULE
                  </div>

                  <h4 className="fw-bold text-dark mb-4">
                    Choose the batch that suits you
                  </h4>

                  <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
                    <span className="text-secondary">
                      <i className="bi bi-calendar-week text-primary me-2" />
                      Weekdays
                    </span>
                    <strong>Mon – Fri · 3 Months</strong>
                  </div>

                  <div className="d-flex justify-content-between align-items-center py-3">
                    <span className="text-secondary">
                      <i className="bi bi-calendar2-week text-primary me-2" />
                      Weekends
                    </span>
                    <strong>Sat & Sun · 4 Months</strong>
                  </div>

                  <button
                    type="button"
                    className="dotnet-primary w-100 mt-3"
                    onClick={openEnquiry}
                  >
                    Get Course Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="section-block bg-white">
          <div className="container">
            <div className="text-center mb-5">
              <div className="section-label">
                LEARNING OUTCOMES
              </div>
              <h2 className="section-title">
                What Can You Accomplish at the End of Training?
              </h2>
              <p className="section-text mx-auto" style={{ maxWidth: 720 }}>
                Unlock career growth with practical .NET Core development
                knowledge and project-based learning.
              </p>
            </div>

            <div className="row g-4">
              {outcomes.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="content-card">
                    <div className="d-flex gap-3">
                      <i className="bi bi-check2-circle text-primary fs-4" />
                      <span className="section-text mb-0">
                        {item}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="section-block">
          <div className="container">
            <div className="text-center mb-5">
              <div className="section-label">CAREER BENEFITS</div>
              <h2 className="section-title">
                Benefits of .NET Development
              </h2>
            </div>

            <div className="row g-4">
              {benefits.map((item, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="content-card">
                    <div className="info-icon mb-4">
                      <i className={`bi ${item.icon}`} />
                    </div>

                    <h5 className="fw-bold text-dark">
                      {item.title}
                    </h5>

                    <p className="section-text mb-0">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SALARY */}
        <section className="section-block bg-white">
          <div className="container">
            <div className="row align-items-end mb-5">
              <div className="col-lg-8">
                <div className="section-label">
                  SALARY BY EXPERIENCE LEVEL
                </div>

                <h2 className="section-title">
                  .NET Developer Salary Range
                </h2>

                <p className="section-text mt-3">
                  The course source material lists the following 2025 salary
                  ranges for .NET developers in India. Actual compensation
                  varies by employer, location, experience and market
                  conditions.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {salaryLevels.map((item, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="salary-card">
                    <div className="salary-number mb-4">
                      {index + 1}
                    </div>

                    <h5 className="fw-bold text-dark">
                      {item.level}
                    </h5>

                    <div className="small text-secondary mb-3">
                      {item.experience}
                    </div>

                    <div className="salary-range mb-3">
                      {item.salary}
                    </div>

                    <p className="small text-secondary mb-0">
                      {item.extra}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="content-card mt-4">
              <h5 className="fw-bold text-dark mb-3">
                Key Factors Affecting Salary
              </h5>

              <div className="row g-3">
                {[
                  "Location: Major IT hubs such as Bangalore, Hyderabad and Pune generally offer higher salaries.",
                  "Company Type: Product-based companies and GCCs can offer different compensation levels than traditional IT services.",
                  "Specialized Skills: Azure, cloud, microservices and full-stack skills can increase opportunities.",
                  "Education: Educational background can influence starting opportunities.",
                  "Top Companies: Compensation varies significantly across employers and roles.",
                ].map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="d-flex gap-2">
                      <i className="bi bi-check-circle-fill text-primary" />
                      <span className="section-text">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHO CAN LEARN */}
        <section className="section-block">
          <div className="container">
            <div className="text-center mb-5">
              <div className="section-label">WHO CAN LEARN?</div>
              <h2 className="section-title">
                .NET Is Open to Different Learner Profiles
              </h2>
              <p className="section-text mx-auto" style={{ maxWidth: 750 }}>
                Virtually anyone interested in software development can learn
                .NET, from beginners to experienced professionals expanding
                their technology skills.
              </p>
            </div>

            <div className="row g-4">
              {whoCanLearn.map((item, index) => (
                <div
                  className="col-md-6 col-lg-4"
                  key={index}
                >
                  <div className="highlight-card">
                    <div className="info-icon mb-4">
                      <i className={`bi ${item.icon}`} />
                    </div>

                    <h5 className="fw-bold text-dark">
                      {item.title}
                    </h5>

                    <p className="section-text mb-0">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COURSE HIGHLIGHTS */}
        <section className="section-block bg-white">
          <div className="container">
            <div className="text-center mb-5">
              <div className="section-label">COURSE HIGHLIGHTS</div>
              <h2 className="section-title">
                What You Will Learn
              </h2>
            </div>

            <div className="row g-4">
              {highlights.map((item, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="highlight-card">
                    <div className="d-flex gap-3">
                      <div className="info-icon flex-shrink-0">
                        <i className={`bi ${item.icon}`} />
                      </div>

                      <div>
                        <h5 className="fw-bold text-dark mb-2">
                          {item.title}
                        </h5>

                        <p className="section-text mb-0">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="content-card mt-4">
              <div className="row align-items-center g-4">
                <div className="col-lg-8">
                  <div className="section-label mb-2">
                    PROJECT WORK
                  </div>

                  <h4 className="fw-bold text-dark">
                    Build Real-World Applications From Scratch
                  </h4>

                  <p className="section-text mb-0">
                    Work on end-to-end web development projects using
                    ASP.NET Core MVC / Web API and build a portfolio that
                    demonstrates practical development skills.
                  </p>
                </div>

                <div className="col-lg-4 text-lg-end">
                  <button
                    type="button"
                    className="dotnet-primary"
                    onClick={openEnquiry}
                  >
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAREER PATH */}
        <section className="section-block">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8">
                <div className="section-label">CAREER PATH</div>

                <h2 className="section-title">
                  Dot Net Developer Career Path
                </h2>

                <p className="section-text mt-3">
                  A typical .NET career can progress from entry-level
                  development to senior technical and architecture roles
                  through experience, cloud knowledge, problem-solving and
                  communication skills.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-10">
                {careerPath.map((item, index) => (
                  <div className="career-item" key={index}>
                    <div className="career-number">
                      {item.number}
                    </div>

                    <div className="career-line" />

                    <div className="d-flex flex-wrap justify-content-between gap-2 mb-2">
                      <h5 className="fw-bold text-dark mb-0">
                        {item.title}
                      </h5>

                      <span className="badge rounded-pill text-bg-light px-3 py-2">
                        {item.experience}
                      </span>
                    </div>

                    <p className="section-text mb-2">
                      {item.text}
                    </p>

                    <div className="small text-primary fw-semibold">
                      Skills:{" "}
                      <span className="text-secondary fw-normal">
                        {item.skills}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FUTURE */}
        <section className="section-block bg-white">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="section-label">
                  CAREER GROWTH
                </div>

                <h2 className="section-title">
                  Build Skills for Modern Cloud & AI Ecosystems
                </h2>

                <p className="section-text mt-4">
                  The course material highlights the combination of .NET,
                  Azure and AI/ML as a pathway toward modern application
                  development and cloud-based solutions.
                </p>

                <ul className="check-list mt-4">
                  <li>
                    <i className="bi bi-check2-circle" />
                    Rapid innovation in AI and cloud technologies
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    Development of intelligent and data-driven solutions
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    Azure AI services and Azure OpenAI concepts
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    Computer vision and natural language processing
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    Global opportunities through modern Microsoft
                    technology skills
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <div className="content-card">
                  <div className="info-icon mb-4">
                    <i className="bi bi-rocket-takeoff" />
                  </div>

                  <h4 className="fw-bold text-dark">
                    Increased Earning Potential
                  </h4>

                  <p className="section-text mt-3">
                    The source material notes that combining .NET with Azure,
                    AI/ML, cloud and modern development practices can expand
                    career opportunities compared with a single
                    specialization.
                  </p>

                  <div className="row g-3 mt-2">
                    <div className="col-6">
                      <div className="p-3 rounded-4" style={{ background: "#edf8ff" }}>
                        <strong className="d-block text-primary">
                          .NET
                        </strong>
                        <small className="text-secondary">
                          Development
                        </small>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="p-3 rounded-4" style={{ background: "#edf8ff" }}>
                        <strong className="d-block text-primary">
                          Azure
                        </strong>
                        <small className="text-secondary">
                          Cloud
                        </small>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="p-3 rounded-4" style={{ background: "#edf8ff" }}>
                        <strong className="d-block text-primary">
                          AI / ML
                        </strong>
                        <small className="text-secondary">
                          Intelligence
                        </small>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="p-3 rounded-4" style={{ background: "#edf8ff" }}>
                        <strong className="d-block text-primary">
                          DevOps
                        </strong>
                        <small className="text-secondary">
                          Delivery
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-box">
              <div className="row align-items-center g-4 position-relative">
                <div className="col-lg-8">
                  <div className="small fw-bold text-uppercase mb-2 opacity-75">
                    START YOUR .NET JOURNEY
                  </div>

                  <h2 className="display-6 fw-bold mb-3">
                    Ready to become a job-ready .NET Developer?
                  </h2>

                  <p className="mb-0 opacity-75" style={{ lineHeight: 1.8 }}>
                    Take the next step with CIIT and build practical
                    .NET Core development skills through industry-oriented
                    projects.
                  </p>
                </div>

                <div className="col-lg-4 text-lg-end">
                  <button
                    type="button"
                    className="dotnet-primary"
                    onClick={openEnquiry}
                  >
                    Enquire Now
                    <i className="bi bi-arrow-right ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* ENQUIRY MODAL */}
{enquiryOpen && (
  <div
    className="modal-backdrop-custom"
    onMouseDown={(e) => {
      if (e.target === e.currentTarget) {
        closeEnquiry();
      }
    }}
  >
    <div
      className="enquiry-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dotnet-enquiry-title"
    >
      {/* MODAL HEADER */}
      <div className="modal-header-custom d-flex justify-content-between align-items-center">
        <div>
          <div className="small fw-bold opacity-75 mb-1">
            CIIT TRAINING INSTITUTE
          </div>

          <h4
            id="dotnet-enquiry-title"
            className="fw-bold mb-0"
          >
            Enquire Now
          </h4>
        </div>

        <button
          type="button"
          className="btn btn-link text-white fs-4 p-0"
          onClick={closeEnquiry}
          aria-label="Close"
        >
          <i className="bi bi-x-lg" />
        </button>
      </div>

      {/* SUCCESS */}
      {submitted ? (
        <div className="success-box">
          <div className="success-icon">
            <i className="bi bi-check-lg" />
          </div>

          <h3 className="fw-bold text-dark">
            Enquiry Submitted
          </h3>

          <p className="section-text mb-0">
            Thank you for your interest in CIIT. Our team will
            get in touch with you shortly.
          </p>

          <button
            type="button"
            className="dotnet-primary mt-3"
            onClick={closeEnquiry}
          >
            Close
          </button>
        </div>
      ) : (
        /* FORM */
        <form
          onSubmit={handleSubmit}
          className="modal-body-custom"
        >
          <div className="row g-3">

            {/* NAME */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* EMAIL */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* CONTACT */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Contact
              </label>

              <input
                type="tel"
                className="form-control"
                placeholder="Enter contact number"
                required
              />
            </div>

            {/* TRAINING TYPE */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Training Type
              </label>

              <select
                className="form-select"
                defaultValue=""
                required
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
            <div className="col-12">
              <label className="form-label fw-semibold">
                Description
              </label>

              <textarea
                className="form-control"
                rows={3}
                placeholder="Tell us about your requirements"
              />
            </div>

            {/* SUBMIT */}
            <div className="col-12 pt-1">
              <button
                type="submit"
                className="dotnet-primary w-100"
              >
                Submit Enquiry
                <i className="bi bi-arrow-right ms-2" />
              </button>
            </div>

          </div>
        </form>
      )}
    </div>
  </div>
)}
      </div>
    </>
  );
}