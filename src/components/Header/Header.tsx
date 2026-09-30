import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ciitLogo from "../../assets/ciit-logo.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

/* =========================================================
   TYPES
========================================================= */

type Course = {
  name: string;
  type: string;
  path: string;
};

type Technology = {
  name: string;
  icon: string;
  color: string;
  courses: Course[];
};

type CourseDomain = {
  name: string;
  icon: string;
  color: string;
  technologies: Technology[];
};

/* =========================================================
   COURSE DATA
========================================================= */

const courseDomains: CourseDomain[] = [
  {
    name: "Full Stack Development",
    icon: "bi bi-code-slash",
    color: "#1687dc",

    technologies: [
      {
        name: ".NET",
        icon: "bi bi-braces",
        color: "#1687dc",
        courses: [
          {
            name: "Full Stack Development with DevOps And AI",
            type: "DOT NET FULL STACK",
            path:
              "/courses/dotnetfullstack/fullstackdevelopmentaianddevops",
          },
          {
            name: "Full Stack Development with Azure DevOps",
            type: "DOT NET + AZURE DEVOPS",
            path:
              "/courses/dotnet/fullstackdevelopmentazuredevops",
          },
          {
            name: "Full Stack Development",
            type: "DOT NET FULL STACK",
            path:
              "/courses/dotnet/fullstackdevelopment",
          },
          {
            name: ".Net Core Training For Working Professionals",
            type: "DOT NET CORE",
            path:
              "/courses/dotnet/dotnetcore",
          },
          {
            name: ".Net Core With Angular",
            type: "DOT NET + ANGULAR",
            path:
              "/courses/dotnet/dotnetcorewithangular",
          },
          {
            name: ".Net Core With React",
            type: "DOT NET + REACT",
            path:
              "/courses/dotnet/dotnetcorewithreact",
          },
        ],
      },

      {
        name: "Java",
        icon: "bi bi-cup-hot",
        color: "#e06b2f",
        courses: [
          {
            name: "Full Stack Development with DevOps And AI",
            type: "JAVA FULL STACK",
            path:
              "/courses/java/fullstackdevelopmentaianddevops",
          },
          {
            name: "Full Stack Development with AWS DevOps",
            type: "JAVA + AWS DEVOPS",
            path:
              "/courses/java/fullstackdevelopmentawsdevops",
          },
          {
            name: "Full Stack Development",
            type: "JAVA FULL STACK",
            path:
              "/courses/java/fullstackdevelopment",
          },
          {
            name: "Advance Java Training For Working Professionals",
            type: "ADVANCED JAVA",
            path:
              "/courses/java/advancejava",
          },
          {
            name: "Spring Boot With React",
            type: "SPRING BOOT + REACT",
            path:
              "/courses/java/springbootwithreact",
          },
          {
            name: "Spring Boot With Angular",
            type: "SPRING BOOT + ANGULAR",
            path:
              "/courses/java/springbootwithangular",
          },
        ],
      },

      {
        name: "Python",
        icon: "bi bi-filetype-py",
        color: "#3776ab",
        courses: [
          {
            name: "Full Stack Development with DevOps And AI",
            type: "PYTHON FULL STACK",
            path:
              "/courses/python/fullstackdevelopmentaianddevops",
          },
          {
            name: "Full Stack Development with AWS DevOps",
            type: "PYTHON + AWS DEVOPS",
            path:
              "/courses/python/fullstackdevelopmentawsdevops",
          },
          {
            name: "Full Stack Development",
            type: "PYTHON FULL STACK",
            path:
              "/courses/python/fullstackdevelopment",
          },
          {
            name:
              "Django + FastApi Training For Working Professionals",
            type: "DJANGO + FASTAPI",
            path:
              "/courses/python/djangofastapi",
          },
          {
            name: "Django + FastApi With React",
            type: "DJANGO + FASTAPI + REACT",
            path:
              "/courses/python/djangofastapiwithreact",
          },
          {
            name: "Django + FastApi With Angular",
            type: "DJANGO + FASTAPI + ANGULAR",
            path:
              "/courses/python/djangofastapiwithangular",
          },
        ],
      },

      {
        name: "MEAN / MERN",
        icon: "bi bi-boxes",
        color: "#20a36a",
        courses: [
          {
            name:
              "MEARN Stack Development with AWS DevOps And AI",
            type: "MEARN + AWS + AI",
            path:
              "/courses/meanmern/mearnawsdevopsai",
          },
          {
            name:
              "MEARN Stack Development with Live Project",
            type: "MEARN FULL STACK",
            path:
              "/courses/meanmern/mearnwithliveproject",
          },
        ],
      },
    ],
  },

  /* =======================================================
     DATA SCIENCE
  ======================================================= */

  {
    name: "Data Science & AI",
    icon: "bi bi-bar-chart-line",
    color: "#7c4dff",

    technologies: [
      {
        name: "Data Science",
        icon: "bi bi-graph-up-arrow",
        color: "#7c4dff",
        courses: [
          {
            name: "Data Science",
            type: "DATA SCIENCE",
            path:
              "/courses/datascience/datascience",
          },
          {
            name: "Machine Learning",
            type: "MACHINE LEARNING",
            path:
              "/courses/datascience/machinelearning",
          },
          {
            name: "Data Engineering",
            type: "DATA ENGINEERING",
            path:
              "/courses/datascience/dataengineering",
          },
        ],
      },

      {
        name: "Data Analytics",
        icon: "bi bi-pie-chart",
        color: "#1687dc",
        courses: [
          {
            name:
              "Data Analytics For Freshers & Working Professionals",
            type: "DATA ANALYTICS",
            path:
              "/courses/dataanalytics/dataanalytics",
          },
          {
            name: "Advance Excel With VBA",
            type: "EXCEL + VBA",
            path:
              "/courses/dataanalytics/advanceexcelwithvba",
          },
          {
            name: "Power BI",
            type: "BUSINESS INTELLIGENCE",
            path:
              "/courses/dataanalytics/powerbi",
          },
        ],
      },

      {
        name: "Generative AI",
        icon: "bi bi-stars",
        color: "#a855f7",
        courses: [
          {
            name: "Advanced Generative AI",
            type: "GENERATIVE AI",
            path:
              "/courses/datascience/advancedgenerativeai",
          },
          {
            name: "Agentic AI",
            type: "AGENTIC AI",
            path:
              "/courses/datascience/agenticai",
          },
        ],
      },

      {
        name: "Business Analytics",
        icon: "bi bi-briefcase",
        color: "#1687dc",
        courses: [
          {
            name: "Business Analytics",
            type: "BUSINESS ANALYTICS",
            path:
              "/courses/datascience/businessanalytics",
          },
        ],
      },
    ],
  },

  /* =======================================================
     CLOUD
  ======================================================= */

  {
    name: "Cloud & DevOps",
    icon: "bi bi-cloud",
    color: "#1687dc",

    technologies: [
      {
        name: "Azure",
        icon: "bi bi-cloud-check",
        color: "#1687dc",
        courses: [
          {
            name: "Azure DevOps Engineering",
            type: "AZURE DEVOPS",
            path:
              "/courses/cloudcomputing/azuredevops",
          },
        ],
      },

      {
        name: "AWS",
        icon: "bi bi-cloud",
        color: "#f39c12",
        courses: [
          {
            name: "AWS DevOps Engineering",
            type: "AWS DEVOPS",
            path:
              "/courses/cloudcomputing/awsdevops",
          },
        ],
      },

      {
        name: "GCP",
        icon: "bi bi-cloud-arrow-up",
        color: "#4285f4",
        courses: [
          {
            name: "GCP DevOps Engineering",
            type: "GCP DEVOPS",
            path:
              "/courses/cloudcomputing/gcpdevops",
          },
        ],
      },
    ],
  },

  /* =======================================================
     SOFTWARE TESTING
  ======================================================= */

  {
    name: "Software Testing",
    icon: "bi bi-shield-check",
    color: "#20a36a",

    technologies: [
      {
        name: "Manual Testing",
        icon: "bi bi-check2-circle",
        color: "#20a36a",
        courses: [
          {
            name: "Diploma in Software Testing",
            type: "SOFTWARE TESTING",
            path:
              "/courses/softwaretesting/diplomainsoftwaretesting",
          },
        ],
      },

      {
        name: "Selenium",
        icon: "bi bi-bug",
        color: "#20a36a",
        courses: [
          {
            name:
              "Selenium Automation Testing With DevOps + AI",
            type: "SELENIUM AUTOMATION",
            path:
              "/courses/softwaretesting/seleniumautomationwithdevopsai",
          },
        ],
      },

      {
        name: "Playwright",
        icon: "bi bi-window-stack",
        color: "#1687dc",
        courses: [
          {
            name:
              "Playwright Automation Testing With DevOps + AI",
            type: "PLAYWRIGHT AUTOMATION",
            path:
              "/courses/softwaretesting/playwrightautomationwithdevopsai",
          },
        ],
      },
    ],
  },

  /* =======================================================
     DATABASE
  ======================================================= */

  {
    name: "Database",
    icon: "bi bi-database",
    color: "#1687dc",

    technologies: [
      {
        name: "Oracle",
        icon: "bi bi-database-check",
        color: "#e23b3b",
        courses: [
          {
            name: "Oracle DBA",
            type: "ORACLE DBA",
            path:
              "/courses/dba/oracledba",
          },
          {
            name: "Oracle SQL",
            type: "ORACLE SQL",
            path:
              "/courses/shorttermtraining/oraclesql",
          },
        ],
      },

      {
        name: "SQL Server",
        icon: "bi bi-database",
        color: "#1687dc",
        courses: [
          {
            name: "Sql Server DBA",
            type: "SQL SERVER DBA",
            path:
              "/courses/dba/sqlserverdba",
          },
          {
            name: "Microsoft SQL Server",
            type: "MICROSOFT SQL SERVER",
            path:
              "/courses/shorttermtraining/microsoftsqlserver",
          },
        ],
      },
    ],
  },

  /* =======================================================
     DIGITAL MARKETING
  ======================================================= */

  {
    name: "Digital Marketing",
    icon: "bi bi-megaphone",
    color: "#e85aad",

    technologies: [
      {
        name: "Digital Marketing",
        icon: "bi bi-megaphone",
        color: "#e85aad",
        courses: [
          {
            name: "Digital Marketing",
            type: "DIGITAL MARKETING",
            path:
              "/courses/digitalmarketing/digitalmarketing",
          },
        ],
      },
    ],
  },

  /* =======================================================
     SHORT TERM
  ======================================================= */

  {
    name: "Short Term Training",
    icon: "bi bi-lightning-charge",
    color: "#f39c12",

    technologies: [
      {
        name: "Programming",
        icon: "bi bi-code-square",
        color: "#1687dc",
        courses: [
          {
            name: "C Language",
            type: "C PROGRAMMING",
            path:
              "/courses/shorttermtraining/clanguage",
          },
          {
            name: "CPP Language",
            type: "C++ PROGRAMMING",
            path:
              "/courses/shorttermtraining/cpplanguage",
          },
          {
            name:
              "Data Structure & Algorithms (DSA)",
            type: "DSA",
            path:
              "/courses/shorttermtraining/dsa",
          },
          {
            name: "Oracle SQL",
            type: "ORACLE SQL",
            path:
              "/courses/shorttermtraining/oraclesql",
          },
          {
            name: "Microsoft SQL Server",
            type: "MICROSOFT SQL SERVER",
            path:
              "/courses/shorttermtraining/microsoftsqlserver",
          },
          {
            name: "Core Java",
            type: "JAVA PROGRAMMING",
            path:
              "/courses/shorttermtraining/corejava",
          },
          {
            name: "Core Python",
            type: "PYTHON PROGRAMMING",
            path:
              "/courses/shorttermtraining/corepython",
          },
        ],
      },
    ],
  },
];

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [selectedDomainIndex, setSelectedDomainIndex] =
    useState(0);

  const [selectedTechnologyIndex, setSelectedTechnologyIndex] =
    useState(0);

  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const coursesRef = useRef<HTMLLIElement>(null);

  const closeTimer =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectedDomain =
    courseDomains[selectedDomainIndex];

  const selectedTechnology =
    selectedDomain.technologies[
      selectedTechnologyIndex
    ];

  /* =======================================================
     SCROLL
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setCoursesOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  /* =======================================================
     OUTSIDE CLICK
  ======================================================= */

  useEffect(() => {
    const handleOutsideClick = (
      event: MouseEvent
    ) => {
      if (
        coursesRef.current &&
        !coursesRef.current.contains(
          event.target as Node
        )
      ) {
        setCoursesOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  /* =======================================================
     ENQUIRY MODAL
  ======================================================= */

  useEffect(() => {
    if (!enquiryOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setEnquiryOpen(false);
        setSubmitted(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow = "";

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [enquiryOpen]);

  /* =======================================================
     COURSES MENU
  ======================================================= */

  const openCourses = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setCoursesOpen(true);
  };

  const closeCoursesWithDelay = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setCoursesOpen(false);
    }, 180);
  };

  /* =======================================================
     ENQUIRY
  ======================================================= */

  const openEnquiry = () => {
    setSubmitted(false);
    setEnquiryOpen(true);
    setCoursesOpen(false);
    setMobileOpen(false);
  };

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =================================================
           HEADER
        ================================================= */

        .ciit-header {
          position: sticky;
          top: 0;
          z-index: 1000;

          font-family:
            Inter,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          background: #ffffff;
        }

        /* =================================================
           TOP BAR
        ================================================= */

        .ciit-topbar {
          min-height: 40px;

          background:
            linear-gradient(
              90deg,
              #087bc9,
              #168fe1,
              #087bc9
            );

          color: #ffffff;
        }

        .ciit-topbar-inner {
          width: min(
            1250px,
            calc(100% - 40px)
          );

          min-height: 40px;

          margin: auto;

          display: grid;

          grid-template-columns:
            1fr
            auto
            1fr;

          align-items: center;
        }

        .ciit-admission {
          justify-self: start;

          font-size: 12px;
          font-weight: 850;
          letter-spacing: 1.5px;

          white-space: nowrap;
        }

        .ciit-top-center {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 30px;

          font-size: 12px;
          font-weight: 750;

          white-space: nowrap;
        }

        .ciit-top-item {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .ciit-top-item i {
          font-size: 12px;
        }

        /* =================================================
           SOCIAL
        ================================================= */

        .ciit-socials {
          justify-self: end;

          display: flex;
          align-items: center;

          gap: 7px;
        }

        .ciit-social {
          width: 25px;
          height: 25px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: #ffffff;
          text-decoration: none;

          font-size: 12px;

          transition:
            transform 0.2s ease,
            opacity 0.2s ease;
        }

        .ciit-social:hover {
          transform: translateY(-2px);
          opacity: 0.9;
          color: #ffffff;
        }

        .ciit-whatsapp {
          background: #25d366;
        }

        .ciit-youtube {
          background: #ff0000;
        }

        .ciit-facebook {
          background: #1877f2;
        }

        .ciit-instagram {
          background:
            linear-gradient(
              135deg,
              #833ab4,
              #fd1d1d,
              #fcb045
            );
        }

        .ciit-linkedin {
          background: #0a66c2;
        }

        /* =================================================
           NAVBAR
        ================================================= */

        .ciit-navbar {
          height: 84px;

          background:
            rgba(
              255,
              255,
              255,
              0.98
            );

          border-bottom:
            1px solid #edf2f6;

          transition:
            box-shadow 0.25s ease,
            height 0.25s ease;
        }

        .ciit-navbar.scrolled {
          height: 76px;

          box-shadow:
            0 8px 30px
            rgba(
              19,
              65,
              94,
              0.08
            );
        }

        .ciit-navbar-inner {
          width: min(
            1250px,
            calc(100% - 40px)
          );

          height: 100%;
          margin: auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 14px;
        }

        /* =================================================
           LOGO
        ================================================= */

        .ciit-logo-link {
          display: flex;
          align-items: center;

          flex-shrink: 0;
        }

        .ciit-logo {
          width: 185px;
          height: 70px;

          object-fit: contain;
          display: block;
        }

        /* =================================================
           NAV
        ================================================= */

        .ciit-nav {
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          flex: 1;
          min-width: 0;
        }

        .ciit-nav-list {
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 1px;

          list-style: none;

          margin: 0;
          padding: 0;
        }

        .ciit-nav-item {
          position: relative;

          height: 100%;

          display: flex;
          align-items: center;
        }

        .ciit-nav-link {
          border: 0;
          background: transparent;

          color: #27384c;

          text-decoration: none;

          font-size: 13px;
          font-weight: 750;

          padding: 9px 9px;

          border-radius: 999px;

          white-space: nowrap;

          transition:
            background 0.2s ease,
            color 0.2s ease;
        }

        .ciit-nav-link:hover,
        .ciit-nav-link.active {
          color: #087bc9;
          background: #edf7ff;
        }

        /* =================================================
           EXPLORE BUTTON
        ================================================= */

        .ciit-explore-button {
          display: flex;
          align-items: center;

          gap: 6px;

          cursor: pointer;
        }

        .ciit-explore-button i {
          font-size: 9px;

          transition:
            transform 0.2s ease;
        }

        .ciit-explore-button.open i {
          transform: rotate(180deg);
        }

        /* =================================================
           COMPACT MEGA MENU
        ================================================= */

        .ciit-mega-menu {
          position: absolute;

          top: calc(100% - 3px);

          left: 50%;

          transform: translateX(-50%);

          width: min(
            865px,
            calc(100vw - 30px)
          );

          background: #ffffff;

          border:
            1px solid #e2edf5;

          border-radius: 17px;

          box-shadow:
            0 18px 45px
            rgba(
              17,
              65,
              96,
              0.14
            ),
            0 5px 18px
            rgba(
              17,
              65,
              96,
              0.05
            );

          overflow: hidden;

          animation:
            ciitMegaOpen
            0.18s
            ease
            both;
        }

        @keyframes ciitMegaOpen {
          from {
            opacity: 0;
            transform:
              translate(-50%, -5px);
          }

          to {
            opacity: 1;
            transform:
              translate(-50%, 0);
          }
        }

        .ciit-mega-grid {
          display: grid;

          grid-template-columns:
            210px
            190px
            1fr;

          min-height: 355px;
        }

        .ciit-mega-column {
          padding: 14px 12px;
        }

        .ciit-mega-column
        + .ciit-mega-column {
          border-left:
            1px solid #e8eef4;
        }

        .ciit-mega-heading {
          padding: 0 8px;

          margin-bottom: 8px;

          font-size: 8px;

          font-weight: 850;

          letter-spacing: 1.7px;

          color: #91a5b7;
        }

        /* =================================================
           DOMAINS
        ================================================= */

        .ciit-category-list {
          display: flex;

          flex-direction: column;

          gap: 2px;
        }

        .ciit-category {
          width: 100%;

          border:
            1px solid transparent;

          background: transparent;

          border-radius: 10px;

          padding: 6px 7px;

          display: flex;
          align-items: center;

          gap: 8px;

          color: #26394d;

          font-size: 11.5px;
          font-weight: 750;

          text-align: left;

          cursor: pointer;

          transition:
            background 0.18s ease,
            color 0.18s ease,
            transform 0.18s ease;
        }

        .ciit-category:hover {
          background: #f4f9fd;
          color: #087bc9;

          transform:
            translateX(2px);
        }

        .ciit-category.active {
          background: #edf7ff;

          border-color: #dceefb;

          color: #087bc9;
        }

        .ciit-category-icon {
          width: 30px;
          height: 30px;

          border-radius: 8px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          font-size: 13px;
        }

        .ciit-arrow {
          margin-left: auto;

          color: #a1b2c0;

          font-size: 8px;
        }

        .ciit-category.active
        .ciit-arrow {
          color: #1687dc;
        }

        /* =================================================
           PATHWAYS
        ================================================= */

        .ciit-pathway-list {
          display: flex;

          flex-direction: column;

          gap: 3px;
        }

        .ciit-pathway {
          width: 100%;

          border: 0;

          background: transparent;

          border-radius: 9px;

          padding: 7px 8px;

          display: flex;
          align-items: center;

          gap: 8px;

          color: #263a4d;

          font-size: 11.5px;
          font-weight: 700;

          text-align: left;

          cursor: pointer;

          transition:
            background 0.18s ease,
            color 0.18s ease,
            transform 0.18s ease;
        }

        .ciit-pathway:hover {
          background: #f4f9fd;
          color: #087bc9;
        }

        .ciit-pathway.active {
          background: #edf7ff;
          color: #1687dc;
        }

        /* LANGUAGE ICON */

        .ciit-pathway-icon {
          width: 27px;
          height: 27px;

          flex-shrink: 0;

          border-radius: 8px;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 12px;
        }

        .ciit-pathway-name {
          flex: 1;
        }

        .ciit-pathway-chevron {
          font-size: 8px;
          color: #a1b2c0;
        }

        .ciit-pathway.active
        .ciit-pathway-chevron {
          color: #1687dc;
        }

        /* =================================================
           COURSES
        ================================================= */

        .ciit-course-column {
          padding: 17px 20px;

          background:
            linear-gradient(
              135deg,
              #ffffff 0%,
              #fbfdff 100%
            );
        }

        .ciit-course-title {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-bottom: 9px;
        }

        .ciit-course-main-icon {
          width: 34px;
          height: 34px;

          border-radius: 9px;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 15px;

          flex-shrink: 0;
        }

        .ciit-course-small-title {
          color: #92a5b6;

          font-size: 7px;

          font-weight: 850;

          letter-spacing: 1.5px;
        }

        .ciit-course-title h3 {
          margin: 2px 0 0;

          color: #172338;

          font-size: 15px;

          font-weight: 850;
        }

        .ciit-course-list {
          display: flex;

          flex-direction: column;

          gap: 1px;

          max-height: 285px;

          overflow-y: auto;

          padding-right: 3px;
        }

        .ciit-course-list::-webkit-scrollbar {
          width: 3px;
        }

        .ciit-course-list::-webkit-scrollbar-thumb {
          background: #cfe4f3;

          border-radius: 10px;
        }

        .ciit-course {
          display: flex;
          align-items: center;

          gap: 7px;

          padding: 7px 8px;

          border-radius: 9px;

          text-decoration: none;

          color: #26394c;

          transition:
            background 0.18s ease,
            transform 0.18s ease,
            color 0.18s ease;
        }

        .ciit-course:hover {
          background: #f1f8ff;

          transform:
            translateX(3px);

          color: #087bc9;
        }

        .ciit-course-content {
          min-width: 0;
          flex: 1;
        }

        .ciit-course-name {
          display: block;

          font-size: 11.5px;

          font-weight: 700;

          line-height: 1.35;
        }

        .ciit-course-arrow {
          color: #9dafbd;

          font-size: 9px;
        }

        .ciit-course:hover
        .ciit-course-arrow {
          color: #1687dc;
        }

        /* =================================================
           MOBILE BUTTON
        ================================================= */

        .ciit-mobile-toggle {
          display: none;

          width: 42px;
          height: 42px;

          border:
            1px solid #dcebf6;

          background: #f4faff;

          color: #087bc9;

          border-radius: 12px;

          align-items: center;
          justify-content: center;

          font-size: 20px;

          cursor: pointer;
        }

        /* =================================================
           MODAL
        ================================================= */

        .ciit-modal-backdrop {
          position: fixed;
          inset: 0;

          z-index: 9999;

          background:
            rgba(
              6,
              28,
              48,
              0.65
            );

          backdrop-filter: blur(7px);

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 20px;

          animation:
            ciitBackdrop
            0.2s
            ease;
        }

        @keyframes ciitBackdrop {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .ciit-modal {
          width: min(
            650px,
            100%
          );

          max-height: 90vh;

          overflow-y: auto;

          background: #ffffff;

          border-radius: 25px;

          box-shadow:
            0 35px 90px
            rgba(
              0,
              30,
              55,
              0.28
            );

          animation:
            ciitModalIn
            0.25s
            ease;
        }

        @keyframes ciitModalIn {
          from {
            opacity: 0;

            transform:
              translateY(20px)
              scale(0.97);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }
        }

        .ciit-modal-header {
          position: relative;

          padding: 28px 30px;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #0c4f82,
              #168fe1
            );
        }

        .ciit-modal-header h2 {
          margin: 0;

          font-size: 23px;
          font-weight: 850;
        }

        .ciit-modal-header p {
          margin: 7px 0 0;

          opacity: 0.85;

          font-size: 13px;
        }

        .ciit-modal-close {
          position: absolute;

          right: 18px;
          top: 18px;

          width: 36px;
          height: 36px;

          border: 0;

          border-radius: 50%;

          background:
            rgba(
              255,
              255,
              255,
              0.15
            );

          color: #ffffff;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          font-size: 18px;
        }

        .ciit-modal-body {
          padding: 26px 30px 30px;
        }

        .ciit-form-group {
          margin-bottom: 15px;
        }

        .ciit-form-label {
          display: block;

          margin-bottom: 7px;

          color: #31485d;

          font-size: 11px;
          font-weight: 800;
        }

        .ciit-form-control {
          width: 100%;

          border:
            1px solid #d9e8f3;

          background: #fbfdff;

          border-radius: 11px;

          padding: 12px 13px;

          outline: none;

          color: #20364a;

          font-size: 13px;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .ciit-form-control:focus {
          border-color: #1687dc;

          background: #ffffff;

          box-shadow:
            0 0 0 3px
            rgba(
              22,
              135,
              220,
              0.1
            );
        }

        .ciit-form-grid {
          display: grid;

          grid-template-columns:
            1fr
            1fr;

          gap: 14px;
        }

        .ciit-submit {
          width: 100%;

          margin-top: 5px;

          border: 0;

          border-radius: 12px;

          padding: 13px;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #087bc9,
              #168fe1
            );

          font-size: 12px;
          font-weight: 850;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .ciit-submit:hover {
          transform:
            translateY(-1px);

          box-shadow:
            0 10px 22px
            rgba(
              22,
              135,
              220,
              0.22
            );
        }

        .ciit-success {
          padding: 35px 20px;

          text-align: center;
        }

        .ciit-success-icon {
          width: 65px;
          height: 65px;

          margin:
            0 auto 15px;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #e8f8f0;

          color: #20a36a;

          font-size: 28px;
        }

        .ciit-success h3 {
          margin:
            0 0 7px;

          color: #18324b;

          font-size: 20px;
          font-weight: 850;
        }

        .ciit-success p {
          margin: 0;

          color: #718397;

          font-size: 13px;
        }

        /* =================================================
           RESPONSIVE
        ================================================= */

        @media (max-width: 1180px) {

          .ciit-navbar-inner {
            gap: 8px;
          }

          .ciit-logo {
            width: 165px;
          }

          .ciit-nav-link {
            padding:
              8px 6px;

            font-size: 11.5px;
          }

          .ciit-mega-menu {
            width:
              min(
                830px,
                calc(100vw - 24px)
              );
          }
        }

        @media (max-width: 991px) {

          .ciit-topbar {
            display: none;
          }

          .ciit-navbar {
            height: 72px;
          }

          .ciit-navbar.scrolled {
            height: 72px;
          }

          .ciit-navbar-inner {
            width:
              calc(100% - 28px);
          }

          .ciit-logo {
            width: 160px;
            height: 62px;
          }

          .ciit-mobile-toggle {
            display: flex;
          }

          .ciit-nav {
            position: absolute;

            top: 72px;

            left: 14px;
            right: 14px;

            height: auto;

            display: none;

            background: #ffffff;

            border:
              1px solid #e0edf6;

            border-radius: 18px;

            box-shadow:
              0 20px 50px
              rgba(
                20,
                65,
                95,
                0.15
              );

            padding: 12px;
          }

          .ciit-nav.mobile-open {
            display: block;
          }

          .ciit-nav-list {
            height: auto;

            display: flex;

            flex-direction: column;

            align-items: stretch;

            gap: 3px;
          }

          .ciit-nav-item {
            height: auto;
            display: block;
          }

          .ciit-nav-link {
            width: 100%;

            text-align: left;

            border-radius: 11px;

            padding:
              12px 14px;

            font-size: 13px;
          }

          .ciit-mega-menu {
            position: relative;

            top: 5px;

            left: 0;

            transform: none;

            width: 100%;

            max-height: 62vh;

            overflow-y: auto;

            border-radius: 14px;

            box-shadow:
              0 10px 35px
              rgba(
                17,
                65,
                96,
                0.12
              );
          }

          .ciit-mega-grid {
            grid-template-columns: 1fr;

            min-height: auto;
          }

          .ciit-mega-column {
            padding: 12px;
          }

          .ciit-mega-column
          + .ciit-mega-column {
            border-left: 0;

            border-top:
              1px solid #e7eef5;
          }

          .ciit-course-column {
            padding:
              15px 12px;
          }

          .ciit-course-list {
            max-height: 230px;
          }
        }

        @media (max-width: 600px) {

          .ciit-navbar-inner {
            width:
              calc(100% - 20px);
          }

          .ciit-logo {
            width: 145px;
          }

          .ciit-modal-body {
            padding:
              22px 18px;
          }

          .ciit-modal-header {
            padding:
              24px 20px;
          }

          .ciit-form-grid {
            grid-template-columns: 1fr;
          }

          .ciit-course-column {
            padding:
              16px 12px;
          }

          .ciit-category {
            padding:
              7px;
          }

          .ciit-pathway {
            padding:
              8px;
          }
        }

      `}</style>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="ciit-header">

        {/* ===================================================
            TOP BAR
        =================================================== */}

        <div className="ciit-topbar">

          <div className="ciit-topbar-inner">

            <div className="ciit-admission">
              ADMISSIONS OPEN • LEARN, GROW & LEAD
            </div>

            <div className="ciit-top-center">

              <span className="ciit-top-item">
                <i className="bi bi-telephone-fill" />
                CALL +91-9766439090
              </span>

              <span className="ciit-top-item">
                <i className="bi bi-calendar3" />
                BATCH SCHEDULE
              </span>

            </div>

            <div className="ciit-socials">

              <a
                href="#"
                className="ciit-social ciit-whatsapp"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp" />
              </a>

              <a
                href="#"
                className="ciit-social ciit-youtube"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube" />
              </a>

              <a
                href="#"
                className="ciit-social ciit-facebook"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook" />
              </a>

              <a
                href="#"
                className="ciit-social ciit-instagram"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram" />
              </a>

              <a
                href="#"
                className="ciit-social ciit-linkedin"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin" />
              </a>

            </div>

          </div>

        </div>

        {/* ===================================================
            NAVBAR
        =================================================== */}

        <div
          className={`ciit-navbar ${
            scrolled ? "scrolled" : ""
          }`}
        >

          <div className="ciit-navbar-inner">

            {/* LOGO */}

            <Link
              to="/"
              className="ciit-logo-link"
            >
              <img
                src={ciitLogo}
                alt="CIIT Training Institute"
                className="ciit-logo"
              />
            </Link>

            {/* MOBILE */}

            <button
              type="button"
              className="ciit-mobile-toggle"
              onClick={() =>
                setMobileOpen(
                  (previous) => !previous
                )
              }
              aria-label="Toggle navigation"
            >
              <i
                className={
                  mobileOpen
                    ? "bi bi-x-lg"
                    : "bi bi-list"
                }
              />
            </button>

            {/* NAVIGATION */}

            <nav
              className={`ciit-nav ${
                mobileOpen
                  ? "mobile-open"
                  : ""
              }`}
            >

              <ul className="ciit-nav-list">

                {/* HOME */}

                <li className="ciit-nav-item">

                  <Link
                    to="/"
                    className="ciit-nav-link"
                    onClick={() =>
                      setMobileOpen(false)
                    }
                  >
                    Home
                  </Link>

                </li>

                {/* ABOUT */}

                <li className="ciit-nav-item">

                  <Link
                    to="/about"
                    className="ciit-nav-link"
                    onClick={() =>
                      setMobileOpen(false)
                    }
                  >
                    About Us
                  </Link>

                </li>

                {/* =================================================
                    EXPLORE COURSES
                ================================================= */}

                <li
                  className="ciit-nav-item"
                  ref={coursesRef}
                  onMouseEnter={openCourses}
                  onMouseLeave={
                    closeCoursesWithDelay
                  }
                >

                  <button
                    type="button"
                    className={`ciit-nav-link ciit-explore-button ${
                      coursesOpen
                        ? "active open"
                        : ""
                    }`}
                    onClick={() => {

                      if (coursesOpen) {

                        setCoursesOpen(false);

                      } else {

                        setSelectedDomainIndex(0);
                        setSelectedTechnologyIndex(0);

                        setCoursesOpen(true);
                      }
                    }}
                  >

                    Explore Courses

                    <i className="bi bi-chevron-down" />

                  </button>

                  {/* =================================================
                      MEGA MENU
                  ================================================= */}

                  {coursesOpen && (

                    <div
                      className="ciit-mega-menu"

                      onMouseEnter={() => {

                        if (
                          closeTimer.current
                        ) {
                          clearTimeout(
                            closeTimer.current
                          );
                        }

                        setCoursesOpen(true);
                      }}

                      onMouseLeave={
                        closeCoursesWithDelay
                      }
                    >

                      <div className="ciit-mega-grid">

                        {/* =================================================
                            DOMAINS
                        ================================================= */}

                        <div className="ciit-mega-column">

                          <div className="ciit-mega-heading">
                            DOMAINS
                          </div>

                          <div className="ciit-category-list">

                            {courseDomains.map(
                              (
                                domain,
                                index
                              ) => (

                                <button
                                  key={
                                    domain.name
                                  }

                                  type="button"

                                  className={`ciit-category ${
                                    selectedDomainIndex ===
                                    index
                                      ? "active"
                                      : ""
                                  }`}

                                  onMouseEnter={() => {

                                    setSelectedDomainIndex(
                                      index
                                    );

                                    setSelectedTechnologyIndex(
                                      0
                                    );
                                  }}

                                  onClick={() => {

                                    setSelectedDomainIndex(
                                      index
                                    );

                                    setSelectedTechnologyIndex(
                                      0
                                    );
                                  }}
                                >

                                  <span
                                    className="ciit-category-icon"
                                    style={{
                                      color:
                                        domain.color,

                                      background:
                                        `${domain.color}12`,
                                    }}
                                  >
                                    <i
                                      className={
                                        domain.icon
                                      }
                                    />
                                  </span>

                                  <span>
                                    {domain.name}
                                  </span>

                                  <i className="bi bi-chevron-right ciit-arrow" />

                                </button>

                              )
                            )}

                          </div>

                        </div>

                        {/* =================================================
                            PATHWAYS / LANGUAGES
                        ================================================= */}

                        <div className="ciit-mega-column">

                          <div className="ciit-mega-heading">
                            PATHWAYS
                          </div>

                          <div className="ciit-pathway-list">

                            {selectedDomain
                              .technologies
                              .map(
                                (
                                  technology,
                                  index
                                ) => (

                                  <button
                                    key={
                                      technology.name
                                    }

                                    type="button"

                                    className={`ciit-pathway ${
                                      selectedTechnologyIndex ===
                                      index
                                        ? "active"
                                        : ""
                                    }`}

                                    onMouseEnter={() =>
                                      setSelectedTechnologyIndex(
                                        index
                                      )
                                    }

                                    onClick={() =>
                                      setSelectedTechnologyIndex(
                                        index
                                      )
                                    }
                                  >

                                    {/* LANGUAGE ICON */}

                                    <span
                                      className="ciit-pathway-icon"
                                      style={{
                                        color:
                                          technology.color,

                                        background:
                                          `${technology.color}12`,
                                      }}
                                    >
                                      <i
                                        className={
                                          technology.icon
                                        }
                                      />
                                    </span>

                                    <span className="ciit-pathway-name">
                                      {
                                        technology.name
                                      }
                                    </span>

                                    <i className="bi bi-chevron-right ciit-pathway-chevron" />

                                  </button>

                                )
                              )}

                          </div>

                        </div>

                        {/* =================================================
                            COURSES
                            NO COURSE ICONS
                        ================================================= */}

                        <div className="ciit-course-column">

                          <div className="ciit-course-title">

                            <div
                              className="ciit-course-main-icon"
                              style={{
                                color:
                                  selectedDomain.color,

                                background:
                                  `${selectedDomain.color}12`,
                              }}
                            >
                              <i
                                className={
                                  selectedDomain.icon
                                }
                              />
                            </div>

                            <div>

                              <div className="ciit-course-small-title">
                                EXPLORE COURSES
                              </div>

                              <h3>
                                {
                                  selectedTechnology.name
                                }
                              </h3>

                            </div>

                          </div>

                          <div className="ciit-course-list">

                            {selectedTechnology
                              .courses
                              .map(
                                (course) => (

                                  <Link
                                    key={
                                      course.path
                                    }

                                    to={
                                      course.path
                                    }

                                    className="ciit-course"

                                    onClick={() =>
                                      setCoursesOpen(
                                        false
                                      )
                                    }
                                  >

                                    {/* NO ICON HERE */}

                                    <span className="ciit-course-content">

                                      <span className="ciit-course-name">
                                        {
                                          course.name
                                        }
                                      </span>

                                    </span>

                                    <i className="bi bi-arrow-up-right ciit-course-arrow" />

                                  </Link>

                                )
                              )}

                          </div>

                        </div>

                      </div>

                    </div>

                  )}

                </li>

                {/* CAREER PROGRAMS */}

                <li className="ciit-nav-item">

                  <Link
                    to="/career-programs"
                    className="ciit-nav-link"
                    onClick={() =>
                      setMobileOpen(false)
                    }
                  >
                    Career Programs
                  </Link>

                </li>

                {/* PLACEMENTS */}

                <li className="ciit-nav-item">

                  <Link
                    to="/placements"
                    className="ciit-nav-link"
                    onClick={() =>
                      setMobileOpen(false)
                    }
                  >
                    Placements
                  </Link>

                </li>

                {/* EVENTS */}

                <li className="ciit-nav-item">

                  <Link
                    to="/events"
                    className="ciit-nav-link"
                    onClick={() =>
                      setMobileOpen(false)
                    }
                  >
                    Events
                  </Link>

                </li>

                {/* BLOGS */}

                <li className="ciit-nav-item">

                  <Link
                    to="/blogs"
                    className="ciit-nav-link"
                    onClick={() =>
                      setMobileOpen(false)
                    }
                  >
                    Blogs
                  </Link>

                </li>

                {/* CONTACT */}

                <li className="ciit-nav-item">

                  <Link
                    to="/contact"
                    className="ciit-nav-link"
                    onClick={() =>
                      setMobileOpen(false)
                    }
                  >
                    Contact Us
                  </Link>

                </li>

              </ul>

            </nav>

          </div>

        </div>

      </header>

      {/* =====================================================
          ENQUIRY MODAL
          KEPT FOR USE FROM OTHER PARTS LATER
      ===================================================== */}

      {enquiryOpen && (

        <div
          className="ciit-modal-backdrop"

          onMouseDown={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {

              setEnquiryOpen(false);
              setSubmitted(false);

            }

          }}
        >

          <div
            className="ciit-modal"

            role="dialog"

            aria-modal="true"

            aria-labelledby="ciit-enquiry-title"
          >

            {/* MODAL HEADER */}

            <div className="ciit-modal-header">

              <button
                type="button"
                className="ciit-modal-close"

                onClick={() => {
                  setEnquiryOpen(false);
                  setSubmitted(false);
                }}

                aria-label="Close enquiry"
              >
                <i className="bi bi-x-lg" />
              </button>

              <h2 id="ciit-enquiry-title">
                Start Your Learning Journey
              </h2>

              <p>
                Fill in your details and our team
                will contact you shortly.
              </p>

            </div>

            {/* SUCCESS */}

            {submitted ? (

              <div className="ciit-success">

                <div className="ciit-success-icon">
                  <i className="bi bi-check-lg" />
                </div>

                <h3>
                  Enquiry Submitted
                </h3>

                <p>
                  Thank you for contacting CIIT.
                  Our team will get back to you
                  shortly.
                </p>

              </div>

            ) : (

              <form
                className="ciit-modal-body"

                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >

                {/* NAME + EMAIL */}

                <div className="ciit-form-grid">

                  <div className="ciit-form-group">

                    <label className="ciit-form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="ciit-form-control"
                      placeholder="Enter your name"
                      required
                    />

                  </div>

                  <div className="ciit-form-group">

                    <label className="ciit-form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      className="ciit-form-control"
                      placeholder="Enter your email"
                      required
                    />

                  </div>

                </div>

                {/* CONTACT + TRAINING */}

                <div className="ciit-form-grid">

                  <div className="ciit-form-group">

                    <label className="ciit-form-label">
                      Contact Number
                    </label>

                    <input
                      type="tel"
                      className="ciit-form-control"
                      placeholder="Enter contact number"
                      required
                    />

                  </div>

                  <div className="ciit-form-group">

                    <label className="ciit-form-label">
                      Training Type
                    </label>

                    <select
                      className="ciit-form-control"
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

                </div>

                {/* DESCRIPTION */}

                <div className="ciit-form-group">

                  <label className="ciit-form-label">
                    Description
                  </label>

                  <textarea
                    className="ciit-form-control"
                    rows={4}
                    placeholder="Tell us about your learning requirements..."
                    required
                  />

                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="ciit-submit"
                >

                  SUBMIT ENQUIRY

                  <i className="bi bi-arrow-right ms-2" />

                </button>

              </form>

            )}

          </div>

        </div>

      )}

    </>
  );
}