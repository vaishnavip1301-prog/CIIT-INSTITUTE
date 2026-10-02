import { useEffect, useState } from "react";

export default function DotNetCoreWithAngular() {
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
    {
      icon: "bi-diagram-3",
      title: "Decoupled Architecture",
      text: "The clear separation of concerns allows the front-end using Angular and the back-end using .NET Core to be developed, maintained and deployed independently.",
    },
    {
      icon: "bi-lightning-charge",
      title: "Rapid Development",
      text: "Both frameworks provide rich development tools, command-line interfaces and extensive libraries such as Angular Material and Entity Framework Core.",
    },
    {
      icon: "bi-globe2",
      title: "Cross-Platform Compatibility",
      text: ".NET Core applications can run on Windows, macOS and Linux, while Angular applications run in modern browsers.",
    },
    {
      icon: "bi-speedometer2",
      title: "High Performance",
      text: ".NET Core provides strong backend performance while Angular features such as AOT compilation and lazy loading help optimize frontend applications.",
    },
    {
      icon: "bi-cloud-arrow-up",
      title: "Modern Technology Integration",
      text: "Microservices, Azure, AWS, REST APIs, SQL Server, PostgreSQL and DevOps practices can further extend the technology stack.",
    },
  ];

  const benefits = [
    {
      icon: "bi-shield-check",
      title: "Longevity & Stability",
      text: "Both modern .NET and Angular are continuously supported and updated, making the combination suitable for long-term application development.",
    },
    {
      icon: "bi-currency-rupee",
      title: "Competitive Salaries",
      text: "Developers proficient in this full-stack combination can pursue competitive compensation packages across software development roles.",
    },
    {
      icon: "bi-arrow-repeat",
      title: "Modern Practices",
      text: "The stack supports modern .NET versions, cloud-native solutions and continuously evolving Angular development practices.",
    },
    {
      icon: "bi-person-gear",
      title: "Adaptability",
      text: "Developers can expand their skills into cloud, DevOps, APIs, databases and other technologies instead of depending on a single framework.",
    },
    {
      icon: "bi-rocket-takeoff",
      title: "Freelance & Startups",
      text: "Full-stack developers can manage complete project cycles, making these skills useful for freelance work and smaller development teams.",
    },
  ];

  const salaryIndia = [
    {
      level: "Entry-Level",
      experience: "0–2 Years",
      salary: "₹6 – ₹12 LPA",
    },
    {
      level: "Mid-Level",
      experience: "3–5 Years",
      salary: "₹12 – ₹25 LPA",
    },
    {
      level: "Senior / Lead",
      experience: "5+ Years",
      salary: "₹25 – ₹50+ LPA",
    },
    {
      level: "Specialized AI Roles",
      experience: "Experienced",
      salary: "₹20+ LPA",
    },
  ];

  const salaryUSA = [
    {
      level: "Entry-Level",
      experience: "0–2 Years",
      salary: "$80K – $120K+",
    },
    {
      level: "Mid-Level",
      experience: "3–7 Years",
      salary: "$120K – $180K",
    },
    {
      level: "Senior / Lead",
      experience: "7+ Years",
      salary: "$150K – $250K+",
    },
    {
      level: "AI Architect",
      experience: "Leadership",
      salary: "$250K+",
    },
  ];

  const salaryFactors = [
    {
      icon: "bi-cpu",
      title: "AI / ML Skills",
      text: "Skills in Generative AI, LLMs, MLOps and NLP can expand opportunities in modern development roles.",
    },
    {
      icon: "bi-patch-check",
      title: "Certifications",
      text: "Relevant certifications such as Microsoft Azure certifications can strengthen a professional profile.",
    },
    {
      icon: "bi-building",
      title: "Company Type",
      text: "Product companies, large consulting organizations and technology companies may offer different compensation structures.",
    },
    {
      icon: "bi-geo-alt",
      title: "Location",
      text: "Technology hubs such as Bangalore, Pune and other major IT locations can have different salary levels based on demand and cost of living.",
    },
  ];

  const highlights = [
    {
      icon: "bi-globe",
      title: "ASP.NET Core",
      text: "Building web applications and APIs with ASP.NET Core including MVC, Razor Pages, Web API, routing, middleware and configuration.",
    },
    {
      icon: "bi-database",
      title: "Entity Framework Core",
      text: "Data access and persistence using EF Core, including code-first, database-first, migrations, relationships and querying.",
    },
    {
      icon: "bi-shield-lock",
      title: "Authentication & Authorization",
      text: "Implement authentication, authorization and role-based access control using ASP.NET Core Identity and JWT tokens.",
    },
    {
      icon: "bi-arrow-left-right",
      title: "API Design & Consumption",
      text: "Create and consume RESTful APIs, understand HTTP methods and manage data transfer between applications.",
    },
    {
      icon: "bi-window-stack",
      title: "Angular Fundamentals",
      text: "Learn Angular architecture, components, modules, data binding and directives.",
    },
    {
      icon: "bi-terminal",
      title: "Angular CLI",
      text: "Use Angular CLI for project setup, component generation and common development tasks.",
    },
    {
      icon: "bi-diagram-3",
      title: "Services & Dependency Injection",
      text: "Create services for data handling and share application logic across Angular components.",
    },
    {
      icon: "bi-signpost-split",
      title: "Routing & Navigation",
      text: "Implement client-side routing to build Single Page Applications.",
    },
    {
      icon: "bi-cloud-arrow-down",
      title: "HTTP Client",
      text: "Consume RESTful APIs from Angular and communicate with the .NET Core backend.",
    },
    {
      icon: "bi-link-45deg",
      title: "Frontend & Backend Integration",
      text: "Connect Angular applications with ASP.NET Core APIs, manage data exchange and authentication.",
    },
    {
      icon: "bi-kanban",
      title: "Real-World Projects",
      text: "Build practical full-stack applications from scratch using project-based development.",
    },
    {
      icon: "bi-tools",
      title: "Tools & Best Practices",
      text: "Work with Visual Studio, Visual Studio Code, Git and development practices for organization, testing and deployment.",
    },
  ];

  const careerPath = [
    {
      number: "01",
      title: "Junior to Mid-Level Developer",
      experience: "0–3 Years",
      text: "Build strong fundamentals and work on application development using .NET Core and Angular.",
      skills:
        "Junior Software Developer, .NET/Angular Developer, Web Developer, Full Stack Developer",
    },
    {
      number: "02",
      title: "Senior Developer / Team Lead",
      experience: "3–6 Years",
      text: "Take ownership of complex applications, technical implementation and team-level development activities.",
      skills:
        "Senior Software Engineer, Technical Lead, Application Developer, Team Lead",
    },
    {
      number: "03",
      title: "Architect / Management",
      experience: "6+ Years",
      text: "Move towards solution architecture, technical leadership and enterprise application management.",
      skills:
        "Software Architect, Chief Architect, Engineering Manager, Director of Engineering, VP of Engineering",
    },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .dotnet-angular-page {
          min-height: 100vh;
          background: #f5faff;
          color: #18324b;
          font-family:
            Inter,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        /* ================= HERO ================= */

        .dotnet-angular-hero {
          position: relative;
          overflow: hidden;
          padding: 105px 0 80px;
          background:
            radial-gradient(
              circle at 90% 15%,
              rgba(22, 135, 220, 0.12),
              transparent 28%
            ),
            radial-gradient(
              circle at 5% 80%,
              rgba(8, 123, 201, 0.08),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #ffffff 0%,
              #eef8ff 100%
            );
        }

        .dotnet-angular-orb {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(22, 135, 220, 0.15);
          pointer-events: none;
        }

        .dotnet-angular-orb.one {
          width: 270px;
          height: 270px;
          right: -85px;
          top: 35px;
        }

        .dotnet-angular-orb.two {
          width: 150px;
          height: 150px;
          left: -55px;
          bottom: 25px;
        }

        .dotnet-angular-badge {
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

        .dotnet-angular-title {
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.06;
          font-weight: 850;
          letter-spacing: -2.5px;
          color: #101b30;
        }

        .dotnet-angular-title span {
          color: #1687dc;
        }

        .dotnet-angular-lead {
          max-width: 720px;
          font-size: 17px;
          line-height: 1.85;
          color: #587086;
        }

        .dotnet-primary {
          border: 0;
          color: white;
          background: linear-gradient(
            135deg,
            #087bc9,
            #168fe1
          );
          box-shadow: 0 12px 28px rgba(8, 123, 201, 0.24);
          border-radius: 12px;
          padding: 13px 23px;
          font-weight: 750;
          transition: 0.25s ease;
        }

        .dotnet-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 34px rgba(8, 123, 201, 0.3);
          color: white;
        }

        .dotnet-outline {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          border: 1px solid #cce2f2;
          color: #087bc9;
          background: white;
          border-radius: 12px;
          padding: 12px 22px;
          font-weight: 750;
          transition: 0.25s ease;
        }

        .dotnet-outline:hover {
          border-color: #1687dc;
          transform: translateY(-3px);
          color: #087bc9;
        }

        /* ================= HERO IMAGE ================= */

        .hero-image-card {
          position: relative;
          border-radius: 28px;
          padding: 10px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid #d8eaf7;
          box-shadow: 0 24px 60px rgba(22, 85, 125, 0.13);
          animation: ciitFloat 5s ease-in-out infinite;

          /* IMAGE THODI VARI */
          margin-top: -115px;
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
          box-shadow: 0 16px 35px rgba(22, 85, 125, 0.15);
          border-radius: 17px;
          padding: 15px 18px;
        }

        /* ================= INFO CARDS ================= */

        .info-card {
          height: 100%;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 10px 28px rgba(22, 85, 125, 0.06);
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
          flex-shrink: 0;
        }

        /* ================= SECTIONS ================= */

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
          font-size: clamp(31px, 4vw, 47px);
          line-height: 1.12;
          font-weight: 850;
          letter-spacing: -1.5px;
        }

        .section-text {
          color: #61778b;
          font-size: 16px;
          line-height: 1.85;
        }

        /* ================= CONTENT CARD ================= */

        .content-card {
          height: 100%;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 12px 34px rgba(22, 85, 125, 0.06);
          transition: 0.3s ease;
        }

        .content-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 42px rgba(22, 85, 125, 0.11);
          border-color: #c4e1f5;
        }

        /* ================= OUTCOME ================= */

        .outcome-card {
          height: 100%;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 22px;
          padding: 25px;
          box-shadow: 0 10px 28px rgba(22, 85, 125, 0.05);
          transition: 0.3s ease;
        }

        .outcome-card:hover {
          transform: translateY(-5px);
          border-color: #c4e1f5;
        }

        /* ================= BENEFITS ================= */

        .benefit-card {
          height: 100%;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 22px;
          padding: 25px;
          box-shadow: 0 10px 28px rgba(22, 85, 125, 0.05);
          transition: 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(22, 85, 125, 0.09);
        }

        /* ================= SALARY ================= */

        .salary-card {
          height: 100%;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 22px;
          padding: 25px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 28px rgba(22, 85, 125, 0.05);
          transition: 0.3s ease;
        }

        .salary-card:hover {
          transform: translateY(-5px);
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

        /* ================= HIGHLIGHTS ================= */

        .highlight-card {
          height: 100%;
          padding: 25px;
          border-radius: 22px;
          background: white;
          border: 1px solid #dcebf7;
          box-shadow: 0 10px 28px rgba(22, 85, 125, 0.05);
          transition: 0.3s ease;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
          border-color: #c4e1f5;
        }

        /* ================= LIST ================= */

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

        /* ================= CAREER ================= */

        .career-item {
          position: relative;
          padding: 28px 28px 28px 85px;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 22px;
          margin-bottom: 18px;
          box-shadow: 0 10px 28px rgba(22, 85, 125, 0.05);
        }

        .career-number {
          position: absolute;
          left: 23px;
          top: 26px;
          width: 43px;
          height: 43px;
          border-radius: 13px;
          background: linear-gradient(
            135deg,
            #087bc9,
            #168fe1
          );
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

        /* ================= CTA ================= */

        .cta-section {
          padding: 80px 0;
        }

        .cta-box {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          padding: 55px;
          color: white;
          background: linear-gradient(
            135deg,
            #0e3458,
            #1687dc
          );
          box-shadow: 0 25px 55px rgba(14, 52, 88, 0.2);
        }

        .cta-box::after {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.16);
          right: -100px;
          top: -100px;
        }

        .cta-box .dotnet-primary {
          background: white;
          color: #087bc9;
        }

        /* ================= ENQUIRY MODAL ================= */

        .modal-backdrop-custom {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(8, 30, 50, 0.62);
          backdrop-filter: blur(7px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
          animation: ciitBackdrop 0.2s ease-out;
        }

        .enquiry-modal {
          width: min(650px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          background: #ffffff;
          border-radius: 22px;
          border: 1px solid #dcebf7;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
          animation: ciitModal 0.28s ease-out;
        }

        .modal-header-custom {
          padding: 20px 22px;
          color: white;
          background: linear-gradient(
            135deg,
            #0e3458,
            #1687dc
          );
        }

        .modal-header-custom .small {
          font-size: 10px;
          letter-spacing: 1.3px;
        }

        .modal-header-custom h4 {
          font-size: 21px;
          line-height: 1.2;
        }

        .modal-body-custom {
          padding: 22px;
        }

        .form-label {
          color: #18324b;
          font-size: 13px;
          margin-bottom: 6px;
        }

        .form-control,
        .form-select {
          min-height: 43px;
          border-radius: 10px;
          border: 1px solid #d6e6f1;
          background: #fbfdff;
          color: #18324b;
          font-size: 13px;
          padding: 10px 12px;
          transition: 0.2s ease;
        }

        .form-control::placeholder {
          color: #91a4b3;
        }

        .form-control:focus,
        .form-select:focus {
          border-color: #1687dc;
          box-shadow: 0 0 0 3px rgba(22, 135, 220, 0.1);
          background: #ffffff;
        }

        textarea.form-control {
          min-height: auto;
          resize: vertical;
        }

        .modal-body-custom .dotnet-primary {
          padding: 11px 18px;
          font-size: 13px;
          border-radius: 10px;
        }

        .success-box {
          text-align: center;
          padding: 42px 24px;
        }

        .success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          background: #e8f5ff;
          color: #087bc9;
          font-size: 28px;
        }

        .success-box h3 {
          font-size: 22px;
        }

        .success-box .section-text {
          font-size: 14px;
        }

        /* ================= ANIMATION ================= */

        @keyframes ciitFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes ciitBackdrop {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes ciitModal {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* ================= TABLET ================= */

        @media (max-width: 991px) {
          .dotnet-angular-hero {
            padding-top: 70px;
          }

          .hero-image-card {
            margin-top: 25px;
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

        /* ================= MOBILE ================= */

        @media (max-width: 575px) {
          .dotnet-angular-hero {
            padding: 55px 0 55px;
          }

          .dotnet-angular-title {
            font-size: 37px;
            letter-spacing: -1.5px;
          }

          .dotnet-angular-lead {
            font-size: 15px;
          }

          .hero-image-card img {
            height: 260px;
          }

          .hero-floating-card {
            left: 10px;
            bottom: 15px;
            padding: 11px 13px;
          }

          .info-card {
            padding: 17px;
          }

          .section-block {
            padding: 55px 0;
          }

          .section-title {
            font-size: 31px;
          }

          .section-text {
            font-size: 15px;
          }

          .content-card,
          .outcome-card,
          .benefit-card,
          .highlight-card,
          .salary-card {
            padding: 21px;
          }

          .career-item {
            padding: 25px 20px 25px 68px;
          }

          .career-number {
            left: 17px;
            width: 40px;
            height: 40px;
          }

          .career-line {
            left: 37px;
          }

          .cta-section {
            padding: 55px 0;
          }

          .cta-box {
            border-radius: 22px;
            padding: 32px 22px;
          }

          .modal-backdrop-custom {
            padding: 10px;
          }

          .enquiry-modal {
            width: 100%;
            border-radius: 18px;
          }

          .modal-header-custom {
            padding: 17px 18px;
          }

          .modal-header-custom h4 {
            font-size: 18px;
          }

          .modal-body-custom {
            padding: 18px;
          }

          .form-label {
            font-size: 12px;
          }

          .form-control,
          .form-select {
            font-size: 13px;
            min-height: 41px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="dotnet-angular-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="dotnet-angular-hero">
          <div className="dotnet-angular-orb one" />
          <div className="dotnet-angular-orb two" />

          <div className="container position-relative">
            <div className="row align-items-center g-5">

              <div className="col-lg-7">

                <div className="dotnet-angular-badge mb-4">
                  <i className="bi bi-code-slash" />
                  DOT NET + ANGULAR FULL STACK
                </div>

                <h1 className="dotnet-angular-title mb-4">
                  Learn Latest{" "}
                  <span>.NET & Angular</span>{" "}
                  and Become a Full Stack Developer
                </h1>

                <p className="dotnet-angular-lead mb-3">
                  CIIT's Dotnet Training is ideal for both freshers and
                  working professionals interested in building a career as a
                  Dot Net Full Stack Developer.
                </p>

                <div className="content-card mb-4">
                  <div className="d-flex gap-3 align-items-start">

                    <div className="info-icon">
                      <i className="bi bi-briefcase" />
                    </div>

                    <div>
                      <div className="section-label mb-1">
                        CAREER FOCUS
                      </div>

                      <h5 className="fw-bold text-dark mb-2">
                        Build Job-Ready Full Stack Skills
                      </h5>

                      <p className="section-text mb-0">
                        The combination of .NET Core for backend development
                        and Angular for frontend development is used to build
                        robust, scalable and maintainable applications.
                      </p>
                    </div>

                  </div>
                </div>

                <p className="dotnet-angular-lead">
                  Companies value full-stack developers who can work across
                  frontend, backend, APIs, databases and modern cloud
                  technologies.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">

                  <button
                    type="button"
                    className="dotnet-primary"
                    onClick={openEnquiry}
                  >
                    Enquire Now
                    <i className="bi bi-arrow-right ms-2" />
                  </button>

                  <a
                    href="#course-details"
                    className="dotnet-outline"
                  >
                    View Course Details
                  </a>

                </div>

                {/* COURSE INFO */}

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

                      <strong>
                        Classroom & Online
                      </strong>

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

                      <strong>
                        Weekdays / Weekends
                      </strong>

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

                      <strong>
                        English, Hindi, Marathi
                      </strong>

                    </div>
                  </div>

                </div>

              </div>

              {/* HERO IMAGE */}

              <div className="col-lg-5">

                <div className="hero-image-card">

                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85"
                    alt=".NET Core and Angular Full Stack Development"
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

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <section
          className="section-block"
          id="course-details"
        >
          <div className="container">

            <div className="row align-items-center g-5">

              <div className="col-lg-7">

                <div className="section-label">
                  .NET CORE + ANGULAR
                </div>

                <h2 className="section-title">
                  Build Modern Full Stack Applications
                </h2>

                <p className="section-text mt-4">
                  The combination of .NET Core for backend development
                  and Angular for frontend development remains a highly
                  sought-after skill set in the software industry.
                </p>

                <p className="section-text">
                  This technology combination offers opportunities across
                  different sectors because it supports robust, scalable
                  and maintainable application development.
                </p>

                <div className="content-card mt-4">

                  <div className="d-flex gap-3">

                    <div className="info-icon flex-shrink-0">
                      <i className="bi bi-layers" />
                    </div>

                    <div>

                      <h5 className="fw-bold text-dark">
                        Full Stack Technology Combination
                      </h5>

                      <p className="section-text mb-0">
                        Angular handles the frontend experience while
                        .NET Core provides backend APIs, business logic
                        and application services.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <div className="col-lg-5">

                <div className="content-card">

                  <div className="section-label mb-2">
                    TRAINING SCHEDULE
                  </div>

                  <h4 className="fw-bold text-dark mb-4">
                    Choose the batch that suits you
                  </h4>

                  <div className="d-flex justify-content-between align-items-center py-3 border-bottom gap-3">

                    <span className="text-secondary">
                      <i className="bi bi-calendar-week text-primary me-2" />
                      Weekdays
                    </span>

                    <strong className="text-end">
                      Mon – Fri · 2 Months
                    </strong>

                  </div>

                  <div className="d-flex justify-content-between align-items-center py-3 gap-3">

                    <span className="text-secondary">
                      <i className="bi bi-calendar2-week text-primary me-2" />
                      Weekends
                    </span>

                    <strong className="text-end">
                      Sat & Sun · 3 Months
                    </strong>

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

        {/* =====================================================
            OUTCOMES
        ===================================================== */}

        <section className="section-block bg-white">

          <div className="container">

            <div className="text-center mb-5">

              <div className="section-label">
                LEARNING OUTCOMES
              </div>

              <h2 className="section-title">
                Outcomes of the .NET + Angular Training
              </h2>

              <p
                className="section-text mx-auto"
                style={{ maxWidth: 760 }}
              >
                Develop practical full-stack skills and understand how
                frontend and backend technologies work together.
              </p>

            </div>

            <div className="row g-4">

              {outcomes.map((item, index) => (
                <div
                  className="col-md-6"
                  key={index}
                >

                  <div className="outcome-card">

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

              <p className="section-text mb-0">
                .NET Core with Angular is a powerful combination for
                modern software development, allowing developers to work
                across frontend, backend, API and database layers.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            COURSE INFORMATION
        ===================================================== */}

        <section className="section-block">

          <div className="container">

            <div className="row align-items-center g-5">

              <div className="col-lg-7">

                <div className="section-label">
                  COURSE INFORMATION
                </div>

                <h2 className="section-title">
                  Learn Through Practical Development
                </h2>

                <p className="section-text mt-4">
                  The training combines backend development with
                  frontend application development so that learners
                  can understand complete application workflows.
                </p>

                <ul className="check-list mt-4">

                  <li>
                    <i className="bi bi-check2-circle" />
                    .NET Core backend development
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    Angular frontend development
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    REST API development and consumption
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    Database integration
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    Authentication and authorization
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    Full-stack project development
                  </li>

                </ul>

              </div>

              <div className="col-lg-5">

                <div className="content-card">

                  <div className="info-icon mb-4">
                    <i className="bi bi-info-circle" />
                  </div>

                  <h4 className="fw-bold text-dark mb-4">
                    Course Information
                  </h4>

                  <div className="d-flex gap-3 mb-3">

                    <i className="bi bi-person-fill text-primary fs-5" />

                    <div>
                      <strong>Batches Available</strong>

                      <div className="text-secondary">
                        Weekdays / Weekends
                      </div>
                    </div>

                  </div>

                  <div className="d-flex gap-3 mb-3">

                    <i className="bi bi-bookmark-heart-fill text-primary fs-5" />

                    <div>
                      <strong>Training Mode</strong>

                      <div className="text-secondary">
                        Classroom & Online
                      </div>
                    </div>

                  </div>

                  <div className="d-flex gap-3">

                    <i className="bi bi-bell-fill text-primary fs-5" />

                    <div>
                      <strong>Language</strong>

                      <div className="text-secondary">
                        English, Hindi, Marathi
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CORE BENEFITS
        ===================================================== */}

        <section className="section-block bg-white">

          <div className="container">

            <div className="text-center mb-5">

              <div className="section-label">
                CORE BENEFITS
              </div>

              <h2 className="section-title">
                Benefits of .NET Core + Angular
              </h2>

            </div>

            <div className="row g-4">

              {benefits.map((item, index) => (
                <div
                  className="col-md-6 col-lg-4"
                  key={index}
                >

                  <div className="benefit-card">

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

        {/* =====================================================
            SALARY INDIA
        ===================================================== */}

        <section className="section-block">

          <div className="container">

            <div className="text-center mb-5">

              <div className="section-label">
                SALARY INFORMATION
              </div>

              <h2 className="section-title">
                Average Salaries in India
              </h2>

              <p
                className="section-text mx-auto"
                style={{ maxWidth: 760 }}
              >
                The salary ranges below are the ranges included in the
                supplied course material. Actual compensation varies
                by employer, location, skills and experience.
              </p>

            </div>

            <div className="row g-4">

              {salaryIndia.map((item, index) => (
                <div
                  className="col-md-6 col-lg-3"
                  key={index}
                >

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

                    <div className="salary-range">
                      {item.salary}
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            SALARY USA
        ===================================================== */}

        <section className="section-block bg-white">

          <div className="container">

            <div className="text-center mb-5">

              <div className="section-label">
                GLOBAL OPPORTUNITIES
              </div>

              <h2 className="section-title">
                Average Salaries in the United States
              </h2>

              <p
                className="section-text mx-auto"
                style={{ maxWidth: 760 }}
              >
                The following ranges are based on the supplied course
                material and are presented as reference figures.
                Actual compensation varies significantly by role,
                employer, location and experience.
              </p>

            </div>

            <div className="row g-4">

              {salaryUSA.map((item, index) => (
                <div
                  className="col-md-6 col-lg-3"
                  key={index}
                >

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

                    <div className="salary-range">
                      {item.salary}
                    </div>

                  </div>

                </div>
              ))}

            </div>

            <div className="content-card mt-4">

              <h5 className="fw-bold text-dark mb-4">
                Specific Roles Mentioned in the Course Material
              </h5>

              <div className="row g-4">

                <div className="col-md-6">

                  <div className="d-flex gap-3">

                    <div className="info-icon flex-shrink-0">
                      <i className="bi bi-cpu" />
                    </div>

                    <div>

                      <h6 className="fw-bold text-dark">
                        Azure AI Engineer
                      </h6>

                      <p className="section-text mb-0">
                        The supplied material states that salaries can
                        range from around $140,000 to over $212,500
                        annually depending on location and role.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="col-md-6">

                  <div className="d-flex gap-3">

                    <div className="info-icon flex-shrink-0">
                      <i className="bi bi-diagram-3" />
                    </div>

                    <div>

                      <h6 className="fw-bold text-dark">
                        AI Architect
                      </h6>

                      <p className="section-text mb-0">
                        The supplied material states that leadership
                        roles can command higher compensation depending
                        on company and location.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            SALARY FACTORS
        ===================================================== */}

        <section className="section-block">

          <div className="container">

            <div className="text-center mb-5">

              <div className="section-label">
                CAREER FACTORS
              </div>

              <h2 className="section-title">
                Key Factors Influencing Salary
              </h2>

            </div>

            <div className="row g-4">

              {salaryFactors.map((item, index) => (
                <div
                  className="col-md-6 col-lg-3"
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

        {/* =====================================================
            COURSE HIGHLIGHTS
        ===================================================== */}

        <section className="section-block bg-white">

          <div className="container">

            <div className="text-center mb-5">

              <div className="section-label">
                COURSE HIGHLIGHTS
              </div>

              <h2 className="section-title">
                What You Will Learn
              </h2>

              <p
                className="section-text mx-auto"
                style={{ maxWidth: 750 }}
              >
                Learn the complete flow from backend APIs to frontend
                Angular applications and real-world project development.
              </p>

            </div>

            <div className="row g-4">

              {highlights.map((item, index) => (
                <div
                  className="col-md-6 col-lg-4"
                  key={index}
                >

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
                    Build Full Stack Applications From Scratch
                  </h4>

                  <p className="section-text mb-0">
                    By the end of this Dot Net Full Stack Development
                    Course, learners can prepare for roles such as Dot
                    Net Developer, Dot Net Full Stack Developer, Junior
                    .NET Developer, Mid-Level .NET Developer, Senior
                    .NET Developer, Back-End .NET Developer and
                    Front-End .NET Developer.
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

        {/* =====================================================
            WHO CAN DO
        ===================================================== */}

        <section className="section-block">

          <div className="container">

            <div className="row align-items-center g-5">

              <div className="col-lg-7">

                <div className="section-label">
                  WHO CAN LEARN?
                </div>

                <h2 className="section-title">
                  Who Can Do This Course?
                </h2>

                <p className="section-text mt-4">
                  Our Dot Net Training course is suitable for freshers,
                  non-IT candidates, IT professionals, software developers,
                  system administrators and anyone looking to enhance
                  their development skills.
                </p>

                <ul className="check-list mt-4">

                  <li>
                    <i className="bi bi-check2-circle" />
                    Freshers looking to start a software development career
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    Non-IT candidates interested in development
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    IT professionals expanding their technology skills
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    Software developers moving towards full-stack development
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    System administrators and technical professionals
                  </li>

                </ul>

              </div>

              <div className="col-lg-5">

                <div className="content-card">

                  <div className="info-icon mb-4">
                    <i className="bi bi-mortarboard" />
                  </div>

                  <h4 className="fw-bold text-dark">
                    Learn Step by Step
                  </h4>

                  <p className="section-text mt-3 mb-0">
                    The course brings together frontend, backend,
                    database and API concepts so learners can understand
                    the complete application development lifecycle.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            WHY LEARN
        ===================================================== */}

        <section className="section-block bg-white">

          <div className="container">

            <div className="text-center mb-5">

              <div className="section-label">
                CAREER OPPORTUNITIES
              </div>

              <h2 className="section-title">
                Why Learn .NET Core + Angular?
              </h2>

              <p
                className="section-text mx-auto"
                style={{ maxWidth: 760 }}
              >
                The supplied course material highlights cross-platform
                capabilities, cloud development and multiple career paths
                for modern .NET developers.
              </p>

            </div>

            <div className="row g-4">

              <div className="col-md-6">

                <div className="content-card">

                  <div className="d-flex gap-3">

                    <div className="info-icon">
                      <i className="bi bi-signpost-2" />
                    </div>

                    <div>

                      <h5 className="fw-bold text-dark">
                        Flexibility & Diverse Career Paths
                      </h5>

                      <p className="section-text mb-0">
                        Developers can work across web development,
                        desktop applications, cloud solutions and
                        other application areas.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <div className="col-md-6">

                <div className="content-card">

                  <div className="d-flex gap-3">

                    <div className="info-icon">
                      <i className="bi bi-currency-rupee" />
                    </div>

                    <div>

                      <h5 className="fw-bold text-dark">
                        Financial Viability
                      </h5>

                      <p className="section-text mb-0">
                        The supplied material highlights salary potential
                        for entry-level and experienced developers.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <div className="col-md-6">

                <div className="content-card">

                  <div className="d-flex gap-3">

                    <div className="info-icon">
                      <i className="bi bi-people" />
                    </div>

                    <div>

                      <h5 className="fw-bold text-dark">
                        Demand for .NET Developers
                      </h5>

                      <p className="section-text mb-0">
                        The supplied content describes demand across
                        startups, enterprises and large technology
                        organizations.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <div className="col-md-6">

                <div className="content-card">

                  <div className="d-flex gap-3">

                    <div className="info-icon">
                      <i className="bi bi-cloud" />
                    </div>

                    <div>

                      <h5 className="fw-bold text-dark">
                        Web & Cloud Development
                      </h5>

                      <p className="section-text mb-0">
                        .NET integrates with cloud platforms such as
                        Azure and supports scalable application
                        development.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <div className="col-md-6 mx-md-auto">

                <div className="content-card">

                  <div className="d-flex gap-3">

                    <div className="info-icon">
                      <i className="bi bi-phone" />
                    </div>

                    <div>

                      <h5 className="fw-bold text-dark">
                        Cross-Platform Development
                      </h5>

                      <p className="section-text mb-0">
                        Modern .NET supports applications across
                        Windows, Linux and macOS along with mobile
                        development technologies such as .NET MAUI.
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

        <section className="section-block">

          <div className="container">

            <div className="row mb-5">

              <div className="col-lg-8">

                <div className="section-label">
                  CAREER PATH
                </div>

                <h2 className="section-title">
                  Dot Net + Angular Career Path
                </h2>

                <p className="section-text mt-3">
                  Completing a Dot Net course can open opportunities
                  across junior development, senior development,
                  technical leadership and architecture roles.
                </p>

              </div>

            </div>

            <div className="row">

              <div className="col-lg-10">

                {careerPath.map((item, index) => (
                  <div
                    className="career-item"
                    key={index}
                  >

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

                      Job Titles:{" "}

                      <span className="text-secondary fw-normal">
                        {item.skills}
                      </span>

                    </div>

                  </div>
                ))}

              </div>

            </div>

            <div className="content-card mt-4">

              <div className="d-flex gap-3">

                <div className="info-icon flex-shrink-0">
                  <i className="bi bi-arrow-up-right-circle" />
                </div>

                <p className="section-text mb-0">
                  By continually learning and adapting to new
                  technologies, developers proficient in .NET Core
                  and Angular can continue developing their technical
                  skills and pursue different opportunities in the
                  software industry.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="cta-section">

          <div className="container">

            <div className="cta-box">

              <div className="row align-items-center g-4 position-relative">

                <div className="col-lg-8">

                  <div className="small fw-bold text-uppercase mb-2 opacity-75">
                    START YOUR FULL STACK JOURNEY
                  </div>

                  <h2 className="display-6 fw-bold mb-3">
                    Ready to become a .NET + Angular Developer?
                  </h2>

                  <p
                    className="mb-0 opacity-75"
                    style={{ lineHeight: 1.8 }}
                  >
                    Learn backend and frontend technologies together
                    and build practical full-stack development skills
                    with CIIT.
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

        {/* =====================================================
            ENQUIRY MODAL
        ===================================================== */}

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
              aria-labelledby="dotnet-angular-enquiry-title"
            >

              {/* MODAL HEADER */}

              <div className="modal-header-custom d-flex justify-content-between align-items-center">

                <div>

                  <div className="small fw-bold opacity-75 mb-1">
                    CIIT TRAINING INSTITUTE
                  </div>

                  <h4
                    id="dotnet-angular-enquiry-title"
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

                        <option
                          value=""
                          disabled
                        >
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