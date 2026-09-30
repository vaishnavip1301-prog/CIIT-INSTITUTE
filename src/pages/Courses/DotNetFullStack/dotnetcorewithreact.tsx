import { useEffect, useState } from "react";

export default function DotNetCoreWithReact() {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const outcomes = [
    {
      icon: "bi-diagram-3",
      title: "Decoupled Architecture",
      text: "The clear separation of concerns allows the front-end using React and UI logic and the back-end using .NET Core, business logic and data access to be developed, maintained and deployed independently.",
    },
    {
      icon: "bi-lightning-charge",
      title: "Rapid Development",
      text: "Both frameworks offer a rich set of tools, command-line interfaces and extensive libraries that accelerate the development process.",
    },
    {
      icon: "bi-globe2",
      title: "Cross-Platform Compatibility",
      text: ".NET Core applications can run on Windows, macOS and Linux, while React applications run in modern browsers, allowing broad reach and flexible deployment.",
    },
    {
      icon: "bi-speedometer2",
      title: "High Performance",
      text: ".NET Core is known for speed and performance, while React features can help optimize client-side rendering and page loading.",
    },
    {
      icon: "bi-cloud-arrow-up",
      title: "Integration with Modern Technologies",
      text: "Microservices, cloud platforms such as Azure and AWS, REST APIs, SQL Server, PostgreSQL and DevOps practices further enhance development opportunities.",
    },
  ];

  const benefits = [
    {
      icon: "bi-shield-check",
      title: "Longevity and Stability",
      text: "Both .NET Core and React are continuously supported and updated, making the technology combination suitable for long-term application development.",
    },
    {
      icon: "bi-currency-rupee",
      title: "Competitive Salaries",
      text: "Developers proficient in this robust stack can pursue competitive compensation packages, with full-stack expertise being useful across different organizations.",
    },
    {
      icon: "bi-arrow-repeat",
      title: "Modern Practices",
      text: "The technology stack supports modern .NET versions, cloud-native solutions and advanced frontend development techniques.",
    },
    {
      icon: "bi-person-gear",
      title: "Adaptability",
      text: "The market favors developers who continuously learn new technologies rather than focusing solely on one framework.",
    },
    {
      icon: "bi-rocket-takeoff",
      title: "Ideal for Freelance and Startups",
      text: "Full-stack .NET developers can manage complete project cycles, making this combination useful for freelance work and early-stage startups.",
    },
  ];

  const salaryUSA = [
    {
      level: "Entry-Level",
      experience: "0–2 Years",
      salary: "$80,000 – $120,000+",
    },
    {
      level: "Mid-Level",
      experience: "3–7 Years",
      salary: "$120,000 – $180,000",
    },
    {
      level: "Senior / Lead",
      experience: "7+ Years",
      salary: "$150,000 – $250,000+",
    },
    {
      level: "AI Architect",
      experience: "Leadership",
      salary: "$250,000+",
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
      level: "AI / Specialized Roles",
      experience: "Experienced",
      salary: "₹20+ LPA",
    },
  ];

  const salaryFactors = [
    {
      icon: "bi-cpu",
      title: "Specific AI / ML Skills",
      text: "Expertise in Generative AI, Large Language Models, MLOps and NLP can increase earning potential.",
    },
    {
      icon: "bi-patch-check",
      title: "Certifications",
      text: "Certifications such as Microsoft Certified: Azure AI Engineer Associate can strengthen a professional profile.",
    },
    {
      icon: "bi-building",
      title: "Company Type",
      text: "Product-based technology companies and large consulting firms may provide different compensation packages compared with smaller organizations.",
    },
    {
      icon: "bi-geo-alt",
      title: "Location",
      text: "Major technology hubs such as Bangalore, Pune, San Francisco and Seattle can have different salary levels based on demand and cost of living.",
    },
  ];

  const highlights = [
    {
      icon: "bi-globe",
      title: "ASP.NET Core",
      text: "Building web applications and APIs with ASP.NET Core, covering MVC, Razor Pages, Web API development, routing, middleware and configuration.",
    },
    {
      icon: "bi-database",
      title: "Entity Framework Core",
      text: "Data access and persistence using EF Core, including code-first and database-first approaches, migrations, relationships and querying.",
    },
    {
      icon: "bi-shield-lock",
      title: "Authentication and Authorization",
      text: "Implement authentication, authorization and role-based access control using ASP.NET Core Identity and JWT tokens.",
    },
    {
      icon: "bi-arrow-left-right",
      title: "API Design and Consumption",
      text: "Create and consume RESTful APIs, understand HTTP methods and handle data transfer between frontend and backend.",
    },
    {
      icon: "bi-braces",
      title: "React Fundamentals",
      text: "Learn React architecture, components, modules, data binding and frontend application development concepts.",
    },
    {
      icon: "bi-terminal",
      title: "React CLI",
      text: "Use React command-line tools for project setup, component generation and development tasks.",
    },
    {
      icon: "bi-diagram-3",
      title: "Services and Dependency Injection",
      text: "Create and use services for data handling and sharing logic across components.",
    },
    {
      icon: "bi-signpost-split",
      title: "Routing and Navigation",
      text: "Implement client-side routing to create Single Page Applications.",
    },
    {
      icon: "bi-cloud-arrow-down",
      title: "HTTP Client",
      text: "Consume RESTful APIs from the React application to interact with the .NET Core backend.",
    },
    {
      icon: "bi-link-45deg",
      title: "Frontend and Backend Integration",
      text: "Integrate React applications with ASP.NET Core APIs, handle data exchange and manage authentication.",
    },
    {
      icon: "bi-kanban",
      title: "Real-World Project Development",
      text: "Build practical full-stack applications from scratch using a project-based learning approach.",
    },
    {
      icon: "bi-tools",
      title: "Tools and Best Practices",
      text: "Use Visual Studio, Visual Studio Code and Git while understanding code organization, testing and deployment practices.",
    },
  ];

  const careerPath = [
    {
      number: "01",
      title: "Foundational Stage: Junior to Mid-Level Developer",
      experience: "0–3 Years",
      text: "Build strong development fundamentals and work on web and full-stack applications.",
      jobs: "Junior Software Developer, .NET/React Developer, Web Developer, Full Stack Developer",
    },
    {
      number: "02",
      title: "Growth Stage: Senior Developer / Team Lead",
      experience: "3–6 Years",
      text: "Take responsibility for application development, technical implementation and team-level activities.",
      jobs: "Senior Software Engineer, Technical Lead, Application Developer, Team Lead",
    },
    {
      number: "03",
      title: "Leadership Stage: Architect / Management",
      experience: "6+ Years",
      text: "Move towards solution architecture, technical leadership and enterprise application management.",
      jobs: "Software Architect, Chief Architect, Engineering Manager, Director of Engineering, VP of Engineering",
    },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .dotnet-react-page {
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

        .dotnet-react-hero {
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

        .react-orb {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(22, 135, 220, 0.15);
          pointer-events: none;
        }

        .react-orb.one {
          width: 270px;
          height: 270px;
          right: -85px;
          top: 35px;
        }

        .react-orb.two {
          width: 150px;
          height: 150px;
          left: -55px;
          bottom: 25px;
        }

        .react-badge {
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

        .react-title {
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.06;
          font-weight: 850;
          letter-spacing: -2.5px;
          color: #101b30;
        }

        .react-title span {
          color: #1687dc;
        }

        .react-lead {
          max-width: 720px;
          font-size: 17px;
          line-height: 1.85;
          color: #587086;
        }

        .react-primary {
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

        .react-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 34px rgba(8, 123, 201, 0.3);
          color: white;
        }

        .react-outline {
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

        .react-outline:hover {
          border-color: #1687dc;
          transform: translateY(-3px);
          color: #087bc9;
        }

        /* ================= HERO IMAGE ================= */

        .react-hero-image {
          position: relative;
          border-radius: 28px;
          padding: 10px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid #d8eaf7;
          box-shadow: 0 24px 60px rgba(22, 85, 125, 0.13);
          animation: reactFloat 5s ease-in-out infinite;
          margin-top: -115px;
        }

        .react-hero-image img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 21px;
          display: block;
        }

        .react-floating-card {
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

        .react-info-card {
          height: 100%;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 10px 28px rgba(22, 85, 125, 0.06);
        }

        .react-info-icon {
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

        /* ================= SECTION ================= */

        .react-section {
          padding: 88px 0;
        }

        .react-label {
          color: #1687dc;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .react-section-title {
          margin-top: 10px;
          color: #101b30;
          font-size: clamp(31px, 4vw, 47px);
          line-height: 1.12;
          font-weight: 850;
          letter-spacing: -1.5px;
        }

        .react-section-text {
          color: #61778b;
          font-size: 16px;
          line-height: 1.85;
        }

        /* ================= CONTENT ================= */

        .react-content-card {
          height: 100%;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 12px 34px rgba(22, 85, 125, 0.06);
          transition: 0.3s ease;
        }

        .react-content-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 42px rgba(22, 85, 125, 0.11);
          border-color: #c4e1f5;
        }

        /* ================= OUTCOMES ================= */

        .react-outcome-card {
          height: 100%;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 22px;
          padding: 25px;
          box-shadow: 0 10px 28px rgba(22, 85, 125, 0.05);
          transition: 0.3s ease;
        }

        .react-outcome-card:hover {
          transform: translateY(-5px);
          border-color: #c4e1f5;
        }

        /* ================= BENEFITS ================= */

        .react-benefit-card {
          height: 100%;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 22px;
          padding: 25px;
          box-shadow: 0 10px 28px rgba(22, 85, 125, 0.05);
          transition: 0.3s ease;
        }

        .react-benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(22, 85, 125, 0.09);
        }

        /* ================= SALARY ================= */

        .react-salary-card {
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

        .react-salary-card:hover {
          transform: translateY(-5px);
        }

        .react-salary-card::before {
          content: "";
          position: absolute;
          width: 85px;
          height: 85px;
          border-radius: 50%;
          right: -35px;
          top: -35px;
          background: #edf8ff;
        }

        .react-salary-number {
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

        .react-salary-range {
          color: #087bc9;
          font-size: 20px;
          font-weight: 850;
        }

        /* ================= HIGHLIGHTS ================= */

        .react-highlight-card {
          height: 100%;
          padding: 25px;
          border-radius: 22px;
          background: white;
          border: 1px solid #dcebf7;
          box-shadow: 0 10px 28px rgba(22, 85, 125, 0.05);
          transition: 0.3s ease;
        }

        .react-highlight-card:hover {
          transform: translateY(-5px);
          border-color: #c4e1f5;
        }

        /* ================= LIST ================= */

        .react-check-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .react-check-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 12px 0;
          color: #526a7f;
          line-height: 1.65;
        }

        .react-check-list li i {
          color: #1687dc;
          font-size: 19px;
          margin-top: 2px;
        }

        /* ================= CAREER ================= */

        .react-career-item {
          position: relative;
          padding: 28px 28px 28px 85px;
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 22px;
          margin-bottom: 18px;
          box-shadow: 0 10px 28px rgba(22, 85, 125, 0.05);
        }

        .react-career-number {
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

        .react-career-line {
          position: absolute;
          left: 43px;
          top: 70px;
          width: 2px;
          height: calc(100% + 18px);
          background: #d9ecfa;
        }

        .react-career-item:last-child .react-career-line {
          display: none;
        }

        /* ================= CTA ================= */

        .react-cta-section {
          padding: 80px 0;
        }

        .react-cta {
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

        .react-cta::after {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.16);
          right: -100px;
          top: -100px;
        }

        .react-cta .react-primary {
          background: white;
          color: #087bc9;
        }

        /* ================= MODAL ================= */

        .react-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(8, 30, 50, 0.62);
          backdrop-filter: blur(7px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
          animation: reactBackdrop 0.2s ease-out;
        }

        .react-enquiry-modal {
          width: min(650px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          background: #ffffff;
          border-radius: 22px;
          border: 1px solid #dcebf7;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
          animation: reactModal 0.28s ease-out;
        }

        .react-modal-header {
          padding: 20px 22px;
          color: white;
          background: linear-gradient(
            135deg,
            #0e3458,
            #1687dc
          );
        }

        .react-modal-header .small {
          font-size: 10px;
          letter-spacing: 1.3px;
        }

        .react-modal-header h4 {
          font-size: 21px;
          line-height: 1.2;
        }

        .react-modal-body {
          padding: 22px;
        }

        .react-form-label {
          color: #18324b;
          font-size: 13px;
          margin-bottom: 6px;
        }

        .react-form-control,
        .react-form-select {
          min-height: 43px;
          border-radius: 10px;
          border: 1px solid #d6e6f1;
          background: #fbfdff;
          color: #18324b;
          font-size: 13px;
          padding: 10px 12px;
          width: 100%;
          outline: none;
          transition: 0.2s ease;
        }

        .react-form-control::placeholder {
          color: #91a4b3;
        }

        .react-form-control:focus,
        .react-form-select:focus {
          border-color: #1687dc;
          box-shadow: 0 0 0 3px rgba(22, 135, 220, 0.1);
          background: #ffffff;
        }

        .react-modal-body textarea {
          resize: vertical;
        }

        .react-success-box {
          text-align: center;
          padding: 42px 24px;
        }

        .react-success-icon {
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

        /* ================= ANIMATION ================= */

        @keyframes reactFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes reactBackdrop {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes reactModal {
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
          .dotnet-react-hero {
            padding-top: 70px;
          }

          .react-hero-image {
            margin-top: 25px;
          }

          .react-floating-card {
            left: 15px;
          }

          .react-section {
            padding: 65px 0;
          }

          .react-cta {
            padding: 38px 25px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 575px) {
          .dotnet-react-hero {
            padding: 55px 0;
          }

          .react-title {
            font-size: 37px;
            letter-spacing: -1.5px;
          }

          .react-lead {
            font-size: 15px;
          }

          .react-hero-image img {
            height: 260px;
          }

          .react-floating-card {
            left: 10px;
            bottom: 15px;
            padding: 11px 13px;
          }

          .react-section {
            padding: 55px 0;
          }

          .react-section-title {
            font-size: 31px;
          }

          .react-section-text {
            font-size: 15px;
          }

          .react-content-card,
          .react-outcome-card,
          .react-benefit-card,
          .react-highlight-card,
          .react-salary-card {
            padding: 21px;
          }

          .react-career-item {
            padding: 25px 20px 25px 68px;
          }

          .react-career-number {
            left: 17px;
            width: 40px;
            height: 40px;
          }

          .react-career-line {
            left: 37px;
          }

          .react-cta-section {
            padding: 55px 0;
          }

          .react-cta {
            border-radius: 22px;
            padding: 32px 22px;
          }

          .react-modal-backdrop {
            padding: 10px;
          }

          .react-enquiry-modal {
            width: 100%;
            border-radius: 18px;
          }

          .react-modal-header {
            padding: 17px 18px;
          }

          .react-modal-header h4 {
            font-size: 18px;
          }

          .react-modal-body {
            padding: 18px;
          }

          .react-form-control,
          .react-form-select {
            font-size: 13px;
            min-height: 41px;
          }
        }
      `}</style>

      <div className="dotnet-react-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="dotnet-react-hero">

          <div className="react-orb one" />
          <div className="react-orb two" />

          <div className="container position-relative">

            <div className="row align-items-center g-5">

              <div className="col-lg-7">

                <div className="react-badge mb-4">
                  <i className="bi bi-braces" />
                  DOT NET + REACT FULL STACK
                </div>

                <h1 className="react-title mb-4">
                  Learn Latest{" "}
                  <span>Dotnet with React</span>{" "}
                  & Become a Full Stack Developer
                </h1>

                <p className="react-lead mb-3">
                  CIIT's Dotnet Training is ideal for both freshers and
                  working professionals interested in building a career
                  as a Dot Net Full Stack Developer.
                </p>

                <div className="react-content-card mb-4">

                  <div className="d-flex gap-3 align-items-start">

                    <div className="react-info-icon">
                      <i className="bi bi-briefcase" />
                    </div>

                    <div>

                      <div className="react-label mb-1">
                        CAREER FOCUS
                      </div>

                      <h5 className="fw-bold text-dark mb-2">
                        Get Your Dream IT Job Just in 2 Months
                      </h5>

                      <p className="react-section-text mb-0">
                        The combination of .NET Core for backend development
                        and React for frontend development offers opportunities
                        across various sectors.
                      </p>

                    </div>

                  </div>

                </div>

                <p className="react-lead">
                  Companies highly value full-stack developers proficient
                  in this stack because of its robustness, scalability
                  and maintainability.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">

                  <button
                    type="button"
                    className="react-primary"
                    onClick={openEnquiry}
                  >
                    Enquire Now
                    <i className="bi bi-arrow-right ms-2" />
                  </button>

                  <a
                    href="#course-details"
                    className="react-outline"
                  >
                    View Course Details
                  </a>

                </div>

                {/* COURSE INFORMATION */}

                <div className="row g-3 mt-4">

                  <div className="col-sm-6 col-md-3">

                    <div className="react-info-card">

                      <div className="react-info-icon mb-3">
                        <i className="bi bi-clock" />
                      </div>

                      <small className="text-secondary d-block">
                        Duration
                      </small>

                      <strong>
                        2 Months
                      </strong>

                    </div>

                  </div>

                  <div className="col-sm-6 col-md-3">

                    <div className="react-info-card">

                      <div className="react-info-icon mb-3">
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

                    <div className="react-info-card">

                      <div className="react-info-icon mb-3">
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

                    <div className="react-info-card">

                      <div className="react-info-icon mb-3">
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

                <div className="react-hero-image">

                  <img
                    src="/assets/Courses/dotnetcorereact.png"
                    alt="Dot Net Core with React Full Stack Development"
                    onError={(event) => {
                      event.currentTarget.src =
                        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85";
                    }}
                  />

                  <div className="react-floating-card">

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
            INTRO / OUTCOMES
        ===================================================== */}

        <section
          className="react-section"
          id="course-details"
        >

          <div className="container">

            <div className="row align-items-center g-5">

              <div className="col-lg-7">

                <div className="react-label">
                  .NET CORE + REACT
                </div>

                <h2 className="react-section-title">
                  Build Modern Full Stack Applications
                </h2>

                <p className="react-section-text mt-4">
                  The combination of .NET Core for backend development
                  and React for frontend development remains a highly
                  sought-after skill set in the software industry,
                  offering opportunities across various sectors.
                </p>

                <p className="react-section-text">
                  Companies highly value full-stack developers proficient
                  in this stack for its robustness, scalability and
                  maintainability.
                </p>

                <div className="react-content-card mt-4">

                  <div className="d-flex gap-3">

                    <div className="react-info-icon flex-shrink-0">
                      <i className="bi bi-layers" />
                    </div>

                    <div>

                      <h5 className="fw-bold text-dark">
                        Powerful Full Stack Combination
                      </h5>

                      <p className="react-section-text mb-0">
                        React handles the frontend and UI layer while
                        .NET Core handles backend logic, APIs and
                        data access.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <div className="col-lg-5">

                <div className="react-content-card">

                  <div className="react-label mb-2">
                    TRAINING SCHEDULE
                  </div>

                  <h4 className="fw-bold text-dark mb-4">
                    Flexible Training Options
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
                    className="react-primary w-100 mt-3"
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

        <section className="react-section bg-white">

          <div className="container">

            <div className="text-center mb-5">

              <div className="react-label">
                LEARNING OUTCOMES
              </div>

              <h2 className="react-section-title">
                Outcomes of the .NET Training
              </h2>

              <p
                className="react-section-text mx-auto"
                style={{ maxWidth: 780 }}
              >
                Understand how React and .NET Core work together to
                create scalable and maintainable full-stack applications.
              </p>

            </div>

            <div className="row g-4">

              {outcomes.map((item, index) => (

                <div
                  className="col-md-6"
                  key={index}
                >

                  <div className="react-outcome-card">

                    <div className="d-flex gap-3">

                      <div className="react-info-icon flex-shrink-0">
                        <i className={`bi ${item.icon}`} />
                      </div>

                      <div>

                        <h5 className="fw-bold text-dark mb-2">
                          {item.title}
                        </h5>

                        <p className="react-section-text mb-0">
                          {item.text}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            <div className="react-content-card mt-4">

              <p className="react-section-text mb-0">
                .NET Core with React is a powerful and highly relevant
                combination, offering career opportunities in the
                software development industry.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            COURSE INFORMATION
        ===================================================== */}

        <section className="react-section">

          <div className="container">

            <div className="row align-items-center g-5">

              <div className="col-lg-7">

                <div className="react-label">
                  COURSE INFORMATION
                </div>

                <h2 className="react-section-title">
                  Learn Through Practical Development
                </h2>

                <p className="react-section-text mt-4">
                  Learn frontend and backend technologies together
                  and understand how complete full-stack applications
                  are developed.
                </p>

                <ul className="react-check-list mt-4">

                  <li>
                    <i className="bi bi-check2-circle" />
                    .NET Core backend development
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    React frontend development
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    REST API development and consumption
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    Entity Framework Core
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    Authentication and authorization
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    Frontend and backend integration
                  </li>

                </ul>

              </div>

              <div className="col-lg-5">

                <div className="react-content-card">

                  <div className="react-info-icon mb-4">
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

        <section className="react-section bg-white">

          <div className="container">

            <div className="text-center mb-5">

              <div className="react-label">
                CORE BENEFITS
              </div>

              <h2 className="react-section-title">
                Core Benefits of .NET Core + React
              </h2>

            </div>

            <div className="row g-4">

              {benefits.map((item, index) => (

                <div
                  className="col-md-6 col-lg-4"
                  key={index}
                >

                  <div className="react-benefit-card">

                    <div className="react-info-icon mb-4">
                      <i className={`bi ${item.icon}`} />
                    </div>

                    <h5 className="fw-bold text-dark">
                      {item.title}
                    </h5>

                    <p className="react-section-text mb-0">
                      {item.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            SALARY USA
        ===================================================== */}

        <section className="react-section">

          <div className="container">

            <div className="text-center mb-5">

              <div className="react-label">
                GLOBAL OPPORTUNITIES
              </div>

              <h2 className="react-section-title">
                Average Salaries in the United States
              </h2>

              <p
                className="react-section-text mx-auto"
                style={{ maxWidth: 780 }}
              >
                The following salary figures are taken from the supplied
                course information and are provided as reference ranges.
              </p>

            </div>

            <div className="row g-4">

              {salaryUSA.map((item, index) => (

                <div
                  className="col-md-6 col-lg-3"
                  key={index}
                >

                  <div className="react-salary-card">

                    <div className="react-salary-number mb-4">
                      {index + 1}
                    </div>

                    <h5 className="fw-bold text-dark">
                      {item.level}
                    </h5>

                    <div className="small text-secondary mb-3">
                      {item.experience}
                    </div>

                    <div className="react-salary-range">
                      {item.salary}
                    </div>

                  </div>

                </div>

              ))}

            </div>

            <div className="react-content-card mt-4">

              <h5 className="fw-bold text-dark mb-4">
                Specific Roles Leveraging These Skills
              </h5>

              <div className="row g-4">

                <div className="col-md-6">

                  <div className="d-flex gap-3">

                    <div className="react-info-icon flex-shrink-0">
                      <i className="bi bi-cpu" />
                    </div>

                    <div>

                      <h6 className="fw-bold text-dark">
                        Azure AI Engineer
                      </h6>

                      <p className="react-section-text mb-0">
                        The supplied material states that average
                        salaries can range from $140,000 to over
                        $212,500 annually, especially in technology hubs.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="col-md-6">

                  <div className="d-flex gap-3">

                    <div className="react-info-icon flex-shrink-0">
                      <i className="bi bi-diagram-3" />
                    </div>

                    <div>

                      <h6 className="fw-bold text-dark">
                        AI Architect
                      </h6>

                      <p className="react-section-text mb-0">
                        The supplied material states that leadership
                        roles can exceed $250,000 annually depending
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
            SALARY INDIA
        ===================================================== */}

        <section className="react-section bg-white">

          <div className="container">

            <div className="text-center mb-5">

              <div className="react-label">
                INDIA OPPORTUNITIES
              </div>

              <h2 className="react-section-title">
                Average Salaries in India
              </h2>

              <p
                className="react-section-text mx-auto"
                style={{ maxWidth: 780 }}
              >
                Salary figures below are based on the supplied course
                material and should be considered reference figures.
              </p>

            </div>

            <div className="row g-4">

              {salaryIndia.map((item, index) => (

                <div
                  className="col-md-6 col-lg-3"
                  key={index}
                >

                  <div className="react-salary-card">

                    <div className="react-salary-number mb-4">
                      {index + 1}
                    </div>

                    <h5 className="fw-bold text-dark">
                      {item.level}
                    </h5>

                    <div className="small text-secondary mb-3">
                      {item.experience}
                    </div>

                    <div className="react-salary-range">
                      {item.salary}
                    </div>

                  </div>

                </div>

              ))}

            </div>

            <div className="react-content-card mt-4">

              <h5 className="fw-bold text-dark mb-4">
                Specific Roles Mentioned in the Course Material
              </h5>

              <div className="row g-4">

                <div className="col-md-4">

                  <div className="d-flex gap-3">

                    <div className="react-info-icon flex-shrink-0">
                      <i className="bi bi-cloud" />
                    </div>

                    <div>

                      <h6 className="fw-bold text-dark">
                        Azure ML Specialist
                      </h6>

                      <p className="react-section-text mb-0">
                        The supplied material mentions an average of
                        around ₹20.9 LPA with top earners reaching
                        over ₹36 LPA.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="col-md-4">

                  <div className="d-flex gap-3">

                    <div className="react-info-icon flex-shrink-0">
                      <i className="bi bi-cpu" />
                    </div>

                    <div>

                      <h6 className="fw-bold text-dark">
                        AI Developer
                      </h6>

                      <p className="react-section-text mb-0">
                        The supplied material mentions an average
                        salary of approximately ₹29.1 LPA.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="col-md-4">

                  <div className="d-flex gap-3">

                    <div className="react-info-icon flex-shrink-0">
                      <i className="bi bi-diagram-3" />
                    </div>

                    <div>

                      <h6 className="fw-bold text-dark">
                        AI Architect
                      </h6>

                      <p className="react-section-text mb-0">
                        The supplied material mentions potential
                        earnings between ₹25 LPA and ₹60 LPA or more.
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

        <section className="react-section">

          <div className="container">

            <div className="text-center mb-5">

              <div className="react-label">
                CAREER FACTORS
              </div>

              <h2 className="react-section-title">
                Key Factors Influencing Salary
              </h2>

            </div>

            <div className="row g-4">

              {salaryFactors.map((item, index) => (

                <div
                  className="col-md-6 col-lg-3"
                  key={index}
                >

                  <div className="react-highlight-card">

                    <div className="react-info-icon mb-4">
                      <i className={`bi ${item.icon}`} />
                    </div>

                    <h5 className="fw-bold text-dark">
                      {item.title}
                    </h5>

                    <p className="react-section-text mb-0">
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

        <section className="react-section bg-white">

          <div className="container">

            <div className="text-center mb-5">

              <div className="react-label">
                COURSE HIGHLIGHTS
              </div>

              <h2 className="react-section-title">
                What You Will Learn
              </h2>

              <p
                className="react-section-text mx-auto"
                style={{ maxWidth: 780 }}
              >
                Learn backend development with .NET Core and frontend
                development with React, followed by API integration
                and practical project development.
              </p>

            </div>

            <div className="row g-4">

              {highlights.map((item, index) => (

                <div
                  className="col-md-6 col-lg-4"
                  key={index}
                >

                  <div className="react-highlight-card">

                    <div className="d-flex gap-3">

                      <div className="react-info-icon flex-shrink-0">
                        <i className={`bi ${item.icon}`} />
                      </div>

                      <div>

                        <h5 className="fw-bold text-dark mb-2">
                          {item.title}
                        </h5>

                        <p className="react-section-text mb-0">
                          {item.text}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            <div className="react-content-card mt-4">

              <div className="row align-items-center g-4">

                <div className="col-lg-8">

                  <div className="react-label mb-2">
                    CAREER READY
                  </div>

                  <h4 className="fw-bold text-dark">
                    Prepare for Full Stack Development Roles
                  </h4>

                  <p className="react-section-text mb-0">
                    By the end of this Dot Net Full Stack Development
                    Course, learners can prepare for roles such as
                    Dot Net Developer, Dot Net Full Stack Developer,
                    Junior .NET Developer, Mid-Level .NET Developer,
                    Senior .NET Developer, Back-End .NET Developer
                    and Front-End .NET Developer.
                  </p>

                </div>

                <div className="col-lg-4 text-lg-end">

                  <button
                    type="button"
                    className="react-primary"
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
            WHY LEARN
        ===================================================== */}

        <section className="react-section">

          <div className="container">

            <div className="row align-items-center g-5">

              <div className="col-lg-7">

                <div className="react-label">
                  CAREER OPPORTUNITIES
                </div>

                <h2 className="react-section-title">
                  Why Learn .NET Core + React?
                </h2>

                <p className="react-section-text mt-4">
                  The supplied course material highlights cross-platform
                  capabilities, cloud-based solutions and multiple
                  career paths for modern .NET developers.
                </p>

                <ul className="react-check-list mt-4">

                  <li>
                    <i className="bi bi-check2-circle" />
                    <span>
                      <strong className="text-dark">
                        Flexibility and Diverse Career Paths:
                      </strong>{" "}
                      Opportunities can include web development,
                      desktop application development and other
                      application areas.
                    </span>
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    <span>
                      <strong className="text-dark">
                        Financial Viability:
                      </strong>{" "}
                      The supplied material highlights salary prospects
                      from entry-level through experienced professionals.
                    </span>
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    <span>
                      <strong className="text-dark">
                        Demand for .NET Developers:
                      </strong>{" "}
                      The source highlights demand from startups through
                      large technology organizations.
                    </span>
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    <span>
                      <strong className="text-dark">
                        Web and Cloud Development:
                      </strong>{" "}
                      .NET integrates with Microsoft Azure and supports
                      scalable application development.
                    </span>
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    <span>
                      <strong className="text-dark">
                        Cross-Platform Development:
                      </strong>{" "}
                      .NET applications can target Windows, Linux and
                      macOS, with mobile application development options.
                    </span>
                  </li>

                </ul>

              </div>

              <div className="col-lg-5">

                <div className="react-content-card">

                  <div className="react-info-icon mb-4">
                    <i className="bi bi-rocket-takeoff" />
                  </div>

                  <h4 className="fw-bold text-dark">
                    Future-Focused Development
                  </h4>

                  <p className="react-section-text mt-3 mb-0">
                    The course combines backend, frontend, API,
                    database, cloud and DevOps concepts to create
                    a broader full-stack development skill set.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            WHO CAN DO
        ===================================================== */}

        <section className="react-section bg-white">

          <div className="container">

            <div className="row align-items-center g-5">

              <div className="col-lg-7">

                <div className="react-label">
                  WHO CAN LEARN?
                </div>

                <h2 className="react-section-title">
                  Who Can Do This Course?
                </h2>

                <p className="react-section-text mt-4">
                  Our Dot Net Training course is suitable for freshers,
                  non-IT candidates, IT professionals, software developers,
                  system administrators and anyone looking to enhance
                  their skills as a developer.
                </p>

                <ul className="react-check-list mt-4">

                  <li>
                    <i className="bi bi-check2-circle" />
                    Freshers interested in software development
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    Non-IT candidates interested in development
                  </li>

                  <li>
                    <i className="bi bi-check2-circle" />
                    IT professionals looking to expand their skills
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

                <div className="react-content-card">

                  <div className="react-info-icon mb-4">
                    <i className="bi bi-mortarboard" />
                  </div>

                  <h4 className="fw-bold text-dark">
                    Suitable for Different Experience Levels
                  </h4>

                  <p className="react-section-text mt-3 mb-0">
                    The course is designed for learners who want to
                    develop practical full-stack skills using .NET
                    Core and React.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CAREER PATH
        ===================================================== */}

        <section className="react-section">

          <div className="container">

            <div className="row mb-5">

              <div className="col-lg-8">

                <div className="react-label">
                  CAREER PATH
                </div>

                <h2 className="react-section-title">
                  Dot Net + React Career Path
                </h2>

                <p className="react-section-text mt-3">
                  Completing a Dot Net course opens doors to
                  development, senior technical and leadership roles.
                </p>

              </div>

            </div>

            <div className="row">

              <div className="col-lg-10">

                {careerPath.map((item, index) => (

                  <div
                    className="react-career-item"
                    key={index}
                  >

                    <div className="react-career-number">
                      {item.number}
                    </div>

                    <div className="react-career-line" />

                    <div className="d-flex flex-wrap justify-content-between gap-2 mb-2">

                      <h5 className="fw-bold text-dark mb-0">
                        {item.title}
                      </h5>

                      <span className="badge rounded-pill text-bg-light px-3 py-2">
                        {item.experience}
                      </span>

                    </div>

                    <p className="react-section-text mb-2">
                      {item.text}
                    </p>

                    <div className="small text-primary fw-semibold">

                      Job Titles:{" "}

                      <span className="text-secondary fw-normal">
                        {item.jobs}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            <div className="react-content-card mt-4">

              <div className="d-flex gap-3">

                <div className="react-info-icon flex-shrink-0">
                  <i className="bi bi-arrow-up-right-circle" />
                </div>

                <p className="react-section-text mb-0">
                  By continually learning and adapting to new
                  technologies, a developer proficient in .NET Core
                  and React can continue developing technical skills
                  and pursue opportunities in the software industry.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="react-cta-section">

          <div className="container">

            <div className="react-cta">

              <div className="row align-items-center g-4 position-relative">

                <div className="col-lg-8">

                  <div className="small fw-bold text-uppercase mb-2 opacity-75">
                    START YOUR FULL STACK JOURNEY
                  </div>

                  <h2 className="display-6 fw-bold mb-3">
                    Ready to Learn .NET Core + React?
                  </h2>

                  <p
                    className="mb-0 opacity-75"
                    style={{ lineHeight: 1.8 }}
                  >
                    Build practical frontend and backend development
                    skills and prepare for full-stack development roles.
                  </p>

                </div>

                <div className="col-lg-4 text-lg-end">

                  <button
                    type="button"
                    className="react-primary"
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
            className="react-modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeEnquiry();
              }
            }}
          >

            <div
              className="react-enquiry-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="react-enquiry-title"
            >

              <div className="react-modal-header d-flex justify-content-between align-items-center">

                <div>

                  <div className="small fw-bold opacity-75 mb-1">
                    CIIT TRAINING INSTITUTE
                  </div>

                  <h4
                    id="react-enquiry-title"
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

              {submitted ? (

                <div className="react-success-box">

                  <div className="react-success-icon">
                    <i className="bi bi-check-lg" />
                  </div>

                  <h3 className="fw-bold text-dark">
                    Enquiry Submitted
                  </h3>

                  <p className="react-section-text mb-0">
                    Thank you for your interest in CIIT. Our team will
                    get in touch with you shortly.
                  </p>

                  <button
                    type="button"
                    className="react-primary mt-3"
                    onClick={closeEnquiry}
                  >
                    Close
                  </button>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="react-modal-body"
                >

                  <div className="row g-3">

                    <div className="col-md-6">

                      <label className="react-form-label fw-semibold">
                        Name
                      </label>

                      <input
                        type="text"
                        className="react-form-control"
                        placeholder="Enter your name"
                        required
                      />

                    </div>

                    <div className="col-md-6">

                      <label className="react-form-label fw-semibold">
                        Email
                      </label>

                      <input
                        type="email"
                        className="react-form-control"
                        placeholder="Enter your email"
                        required
                      />

                    </div>

                    <div className="col-md-6">

                      <label className="react-form-label fw-semibold">
                        Contact
                      </label>

                      <input
                        type="tel"
                        className="react-form-control"
                        placeholder="Enter contact number"
                        required
                      />

                    </div>

                    <div className="col-md-6">

                      <label className="react-form-label fw-semibold">
                        Training Type
                      </label>

                      <select
                        className="react-form-select"
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

                    <div className="col-12">

                      <label className="react-form-label fw-semibold">
                        Description
                      </label>

                      <textarea
                        className="react-form-control"
                        rows={3}
                        placeholder="Tell us about your requirements"
                      />

                    </div>

                    <div className="col-12 pt-1">

                      <button
                        type="submit"
                        className="react-primary w-100"
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