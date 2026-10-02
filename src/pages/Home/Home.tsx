import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  /* =====================================================
     MAIN COURSE DOMAINS
  ===================================================== */

  const courses = [
    {
      icon: "bi-code-slash",
      title: "Full Stack Development",
      text:
        "Build modern web applications with frontend, backend, databases, frameworks and practical full stack development.",
      link: "/courses",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Data Science & AI",
      text:
        "Learn data science, machine learning, data analytics, generative AI and business analytics.",
      link: "/courses",
    },
    {
      icon: "bi-cloud",
      title: "Cloud & DevOps",
      text:
        "Learn cloud platforms and DevOps technologies for modern application deployment and infrastructure.",
      link: "/courses",
    },
    {
      icon: "bi-shield-check",
      title: "Software Testing",
      text:
        "Build skills in manual testing, automation testing, Selenium and Playwright technologies.",
      link: "/courses",
    },
    {
      icon: "bi-database",
      title: "Database",
      text:
        "Learn database technologies including Oracle, SQL Server and database administration.",
      link: "/courses",
    },
    {
      icon: "bi-megaphone",
      title: "Digital Marketing",
      text:
        "Develop practical digital marketing skills for today's online business and marketing environment.",
      link: "/courses",
    },
    {
      icon: "bi-lightning-charge",
      title: "Short Term Training",
      text:
        "Learn focused programming and technology skills through short term practical training programs.",
      link: "/courses",
    },
  ];

  /* =====================================================
     STUDENT PLACEMENT DATA
  ===================================================== */

  const students = [
    {
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
      name: "Student Name",
      course: "Full Stack Development",
      company: "IT Company",
      role: "Software Developer",
      status: "PLACED",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
      name: "Student Name",
      course: "Java Full Stack",
      company: "IT Company",
      role: "Java Developer",
      status: "PLACED",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85",
      name: "Student Name",
      course: "Python Full Stack",
      company: "IT Company",
      role: "Python Developer",
      status: "PLACED",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=85",
      name: "Student Name",
      course: "Data Analytics",
      company: "IT Company",
      role: "Data Analyst",
      status: "PLACED",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
      name: "Student Name",
      course: "Cloud & DevOps",
      company: "IT Company",
      role: "Cloud Engineer",
      status: "PLACED",
    },
  ];

  /* =====================================================
     GOOGLE REVIEW DATA
  ===================================================== */

 const reviews = [
  {
    name: "Nilofar Shaikh",
    course: "Computer Programming Courses",
    source: "Google Review",
    text:
      "The institute is appreciated for its focused computer programming training, knowledgeable faculty, supportive trainers and practical learning environment.",
  },
  {
    name: "Sagar Masal",
    course: "Full Stack .NET Training",
    source: "Google Review",
    text:
      "A positive full-stack .NET learning experience with knowledgeable trainers, practical learning, hands-on projects and a supportive learning environment.",
  },
  {
    name: "Ajit B. Shintre",
    course: "CIIT Training Institute",
    source: "Google Review",
    text:
      "A friendly institute environment with supportive guidance and motivation from the trainers throughout the learning journey.",
  },
  {
    name: "Virendra Kamble",
    course: "IT Training",
    source: "Google Review",
    text:
      "The training experience is described as practical and comfortable, with a welcoming class environment and a strong focus on learning.",
  },
  {
    name: "Dhananjay Jaiswal",
    course: "IT Training",
    source: "Google Review",
    text:
      "Trainers are appreciated for their technical knowledge, project hands-on support and interview preparation guidance.",
  },

  {
    name: "Rutuja Gophane",
    course: ".NET Full Stack Development",
    source: "Online Review",
    text:
      "A great learning experience with practical knowledge of C#, ASP.NET and SQL Server through real project work.",
  },
  {
    name: "Priyanka Napte",
    course: ".NET Full Stack Development",
    source: "Online Review",
    text:
      "Appreciates the learning environment, lab facilities, study material and experienced trainers at CIIT.",
  },
  {
    name: "Pooja Wagh",
    course: "IT Training",
    source: "Online Review",
    text:
      "Highlights well-organized classes, knowledgeable trainers, patient doubt-solving and a positive learning environment.",
  },
  {
    name: "Pratiksha Tarte",
    course: ".NET Full Stack Developer",
    source: "Online Review",
    text:
      "Appreciates the sincere and dedicated trainers who identify student issues and guide learners throughout the course.",
  },
  {
    name: "Madhuri Dhumal",
    course: ".NET Developer Training",
    source: "Online Review",
    text:
      "Shares a positive training experience and highlights the knowledge gained for working independently on projects.",
  },
  {
    name: "YUVRAJ",
    course: ".NET Developer",
    source: "Online Review",
    text:
      "Shares a career outcome after training and thanks CIIT for the support received during the learning journey.",
  },
  {
    name: "Sumit Sharma",
    course: "IT Training",
    source: "Online Review",
    text:
      "A positive review appreciating the overall training institute experience.",
  },
  {
    name: "Yogitasatav",
    course: "Full Stack Developer",
    source: "Online Review",
    text:
      "Highlights experienced trainers, industry-oriented preparation and support with technical and non-technical doubts.",
  },

  /* YOUR NEW REVIEW */
  {
    name: "Vaishnavi Patil",
    course: "CIIT Training Institute",
    source: "Learner Review",
    text:
      "A positive learning experience at CIIT with practical guidance, supportive trainers and a career-focused learning environment.",
  },

  {
    name: "Akshay Tayade",
    course: "Java Full Stack Development",
    source: "CIIT Website Review",
    text:
      "Appreciates the guidance and support received during Java Full Stack Development training with practical and real-world learning.",
  },
  {
    name: "Lubna Patel",
    course: "Full Stack Development",
    source: "CIIT Website Review",
    text:
      "Highlights learning from basic to advanced concepts along with hands-on projects and practical development experience.",
  },
  {
    name: "Rupesh Dhabade",
    course: ".NET Full Stack Developer",
    source: "CIIT Website Review",
    text:
      "Shares a positive career-transition experience and appreciates the guidance received during the .NET Full Stack course.",
  },
];

  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            margin: 0;
            overflow-x: hidden;
          }

          .ciit-home {
            background: #f5faff;
            color: #18324b;
            overflow: hidden;
            font-family:
              Inter,
              system-ui,
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif;
          }

          /* =====================================================
             COMMON
          ===================================================== */

          .section-label {
            color: #1687dc;
            font-size: 20px;
            font-weight: 800;
            letter-spacing: 1.7px;
            text-transform: uppercase;
          }

          /* ONLY WHY CIIT + LEARNER REVIEWS */

          .why-section .section-label,
          .reviews-section .section-label {
            font-size: 20px;
            font-weight: 850;
            letter-spacing: 2px;
          }

          .section-title {
            color: #101b30;
            font-weight: 850;
            font-size: 2.15rem;
            line-height: 1.15;
            letter-spacing: -1px;
          }

          .section-description {
            color: #66768a;
            line-height: 1.7;
            font-size: 13px;
          }

          .ciit-blue-btn {
            background: linear-gradient(
              135deg,
              #087bc9,
              #168fe1
            );
            border: none;
            color: #fff;
            box-shadow:
              0 9px 22px rgba(22, 135, 220, 0.18);
            transition: all 0.3s ease;
          }

          .ciit-blue-btn:hover {
            color: #fff;
            transform: translateY(-3px);
            box-shadow:
              0 14px 28px rgba(22, 135, 220, 0.25);
          }

          .ciit-outline-btn {
            border: 1px solid #cce2f2;
            color: #164a73;
            background: #fff;
            transition: all 0.3s ease;
          }

          .ciit-outline-btn:hover {
            background: #1687dc;
            color: #fff;
            border-color: #1687dc;
            transform: translateY(-3px);
          }

          .ciit-blue-btn:focus,
          .ciit-outline-btn:focus,
          .cta-button:focus {
            box-shadow:
              0 0 0 4px rgba(22, 135, 220, 0.15);
          }

          /* =====================================================
             HERO
          ===================================================== */

          .ciit-hero {
            min-height: 610px;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;

            background:
              radial-gradient(
                circle at 82% 15%,
                rgba(22, 135, 220, 0.17),
                transparent 27%
              ),
              radial-gradient(
                circle at 5% 85%,
                rgba(22, 135, 220, 0.07),
                transparent 24%
              ),
              linear-gradient(
                135deg,
                #edf7ff 0%,
                #ffffff 52%,
                #eaf6ff 100%
              );
          }

          .hero-decoration {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
          }

          .hero-ring {
            width: 430px;
            height: 430px;
            right: -190px;
            top: 30px;
            border: 1px solid rgba(22, 135, 220, 0.16);
            animation: rotateRing 25s linear infinite;
          }

          .hero-ring-two {
            width: 260px;
            height: 260px;
            right: -80px;
            top: 110px;
            border: 1px dashed rgba(22, 135, 220, 0.13);
            animation: rotateRingReverse 18s linear infinite;
          }

          .hero-small-circle {
            width: 150px;
            height: 150px;
            left: -65px;
            bottom: 35px;
            background: rgba(22, 135, 220, 0.08);
            animation: floating 5s ease-in-out infinite;
          }

          .hero-dot {
            width: 18px;
            height: 18px;
            right: 12%;
            bottom: 15%;
            background: #1687dc;
            opacity: 0.28;
            animation: floating 4s ease-in-out infinite;
          }

          .hero-dot-two {
            width: 10px;
            height: 10px;
            left: 43%;
            top: 17%;
            background: #1687dc;
            opacity: 0.35;
            animation: floating 3s ease-in-out infinite;
          }

          @keyframes rotateRing {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes rotateRingReverse {
            from {
              transform: rotate(360deg);
            }

            to {
              transform: rotate(0deg);
            }
          }

          @keyframes floating {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-10px);
            }
          }

          .hero-content {
            opacity: 0;
            transform: translateY(25px);
            transition: all 0.9s ease;
          }

          .hero-content.show {
            opacity: 1;
            transform: translateY(0);
          }

          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.94);
            border: 1px solid #d7eafb;
            color: #1687dc;
            padding: 7px 13px;
            border-radius: 50px;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.6px;
            box-shadow:
              0 8px 25px rgba(30, 95, 135, 0.06);
          }

          .hero-title {
            color: #101b30;
            font-size: clamp(2.35rem, 4vw, 3.65rem);
            line-height: 1.04;
            font-weight: 850;
            letter-spacing: -2px;
            margin-bottom: 0;
          }

          .hero-title-main {
            display: block;
          }

          .hero-title-main.blue {
            color: #1687dc;
          }

          .hero-preferred {
            display: block;
            color: #1687dc;
            font-size: 15px;
            line-height: 1.4;
            font-weight: 700;
            letter-spacing: -0.1px;
            margin-top: 13px;
          }

          .hero-line {
            width: 68px;
            height: 4px;
            border-radius: 50px;
            background:
              linear-gradient(
                90deg,
                #1687dc,
                #73bcec
              );
          }

          .hero-description {
            color: #59697e;
            font-size: 14px;
            line-height: 1.75;
            max-width: 570px;
          }

          /* =====================================================
             HERO STATS
          ===================================================== */

          .hero-stat {
            padding-right: 18px;
            border-right: 1px solid #dcebf7;
          }

          .hero-stat:last-child {
            border-right: none;
          }

          .hero-stat-number {
            color: #101b30;
            font-size: 19px;
            font-weight: 850;
            line-height: 1;
          }

          .hero-stat-label {
            color: #748398;
            font-size: 10px;
            margin-top: 6px;
          }

          /* =====================================================
             HERO VISUAL
          ===================================================== */

          .hero-visual {
            position: relative;
          }

          .hero-image-card {
            width: 100%;
            max-width: 500px;
            background: #fff;
            border: 1px solid #dcebf7;
            border-radius: 25px;
            padding: 8px;
            box-shadow:
              0 28px 65px rgba(25, 83, 125, 0.13);
            position: relative;
            z-index: 2;
            animation: dashboardFloat 5s ease-in-out infinite;
          }

          .hero-image-wrapper {
            position: relative;
            height: 325px;
            overflow: hidden;
            border-radius: 19px;
          }

          .hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.6s ease;
          }

          .hero-image-card:hover .hero-image {
            transform: scale(1.05);
          }

          .hero-image-overlay {
            position: absolute;
            inset: 0;
            background:
              linear-gradient(
                180deg,
                rgba(9, 40, 67, 0.02) 35%,
                rgba(9, 40, 67, 0.72) 100%
              );
          }

          .hero-image-content {
            position: absolute;
            left: 18px;
            right: 18px;
            bottom: 16px;
            color: #fff;
          }

          .hero-image-content small {
            font-size: 8px;
            letter-spacing: 1px;
            font-weight: 800;
            text-transform: uppercase;
            opacity: 0.85;
          }

          .hero-image-content h3 {
            font-size: 20px;
            font-weight: 800;
            margin: 4px 0 0;
          }

          @keyframes dashboardFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-7px);
            }
          }

          .hero-bottom-info {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 11px 3px;
          }

          .hero-bottom-icon {
            width: 38px;
            height: 38px;
            border-radius: 11px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e8f5ff;
            color: #1687dc;
            flex-shrink: 0;
          }

          .floating-success {
            position: absolute;
            right: -15px;
            bottom: 17px;
            width: 180px;
            background: white;
            border: 1px solid #dcebf7;
            border-radius: 16px;
            padding: 11px;
            box-shadow:
              0 18px 40px rgba(25, 83, 125, 0.12);
            z-index: 4;
            animation: floating 4s ease-in-out infinite;
          }

          .success-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: #e8f5ff;
            color: #1687dc;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .floating-mini {
            position: absolute;
            left: -15px;
            top: 42px;
            background: white;
            border: 1px solid #dcebf7;
            border-radius: 14px;
            padding: 10px;
            box-shadow:
              0 17px 38px rgba(25, 83, 125, 0.1);
            z-index: 4;
          }

          .mini-icon {
            width: 35px;
            height: 35px;
            border-radius: 10px;
            background: #e8f5ff;
            color: #1687dc;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* =====================================================
             TRUST
          ===================================================== */

          .trust-strip {
            background: #fff;
            border-top: 1px solid #e6f0f7;
            border-bottom: 1px solid #e6f0f7;
          }

          .trust-item {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .trust-icon {
            width: 40px;
            height: 40px;
            border-radius: 11px;
            background: #e8f5ff;
            color: #1687dc;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .trust-title {
            color: #172b42;
            font-size: 11px;
            font-weight: 800;
          }

          .trust-text {
            color: #7a8899;
            font-size: 9px;
          }

          /* =====================================================
             WHY CIIT
          ===================================================== */

          .why-section {
            background: #fff;
          }

          .feature-card {
            background: #fff;
            border: 1px solid #dcebf7;
            border-radius: 22px;
            transition: all 0.35s ease;
            height: 100%;
            min-height: 245px;
            padding: 30px !important;
          }

          .feature-card:hover {
            transform: translateY(-8px);
            border-color: #8fc4e6;
            box-shadow:
              0 20px 42px rgba(25, 83, 125, 0.11);
          }

          .feature-icon {
            width: 62px;
            height: 62px;
            border-radius: 17px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e8f5ff;
            color: #1687dc;
            transition: all 0.35s ease;
          }

          .feature-card:hover .feature-icon {
            background: #1687dc;
            color: #fff;
            transform:
              rotate(-6deg)
              scale(1.05);
          }

          .feature-card h5 {
            color: #172b42;
            font-size: 17px;
            font-weight: 800;
            margin-top: 4px;
          }

          .feature-card p {
            color: #6d7c8f;
            font-size: 12.5px;
            line-height: 1.75;
          }

          /* =====================================================
             MAIN COURSE DOMAINS
          ===================================================== */

          .courses-section {
            background:
              linear-gradient(
                180deg,
                #edf7ff 0%,
                #f7fbff 100%
              );
          }

          .course-card-link {
            display: block;
            height: 100%;
            color: inherit;
          }

          .course-card {
            background: white;
            border: 1px solid #dcebf7;
            transition: all 0.35s ease;
            overflow: hidden;
            position: relative;
          }

          .course-card::after {
            content: "";
            position: absolute;
            height: 3px;
            left: 0;
            right: 0;
            bottom: 0;
            background:
              linear-gradient(
                90deg,
                #1687dc,
                #72bcea
              );
            transform: scaleX(0);
            transform-origin: left;
            transition: 0.35s ease;
          }

          .course-card:hover::after {
            transform: scaleX(1);
          }

          .course-card:hover {
            transform: translateY(-7px);
            border-color: #8fc4e6;
            box-shadow:
              0 20px 42px rgba(25, 83, 125, 0.09);
          }

          .course-icon {
            transition: all 0.4s ease;
          }

          .course-card:hover .course-icon {
            transform:
              scale(1.08)
              rotate(5deg);
          }

          .course-link {
            color: #1687dc;
            transition: 0.3s ease;
            font-size: 12px;
          }

          .course-card:hover .course-link {
            color: #0d6eae;
          }

          /* =====================================================
             STUDENT PLACEMENTS
          ===================================================== */

          .placements-section {
            background: #fff;
          }

          .placement-student-card {
            width: 285px;
            flex: 0 0 285px;
            background: #fff;
            border: 1px solid #dcebf7;
            border-radius: 20px;
            overflow: hidden;
            box-shadow:
              0 10px 28px rgba(25, 83, 125, 0.07);
            transition: all 0.35s ease;
          }

          .placement-student-card:hover {
            transform: translateY(-8px);
            border-color: #8fc4e6;
            box-shadow:
              0 20px 42px rgba(25, 83, 125, 0.13);
          }

          .placement-student-photo {
            height: 205px;
            position: relative;
            overflow: hidden;
          }

          .placement-student-photo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.5s ease;
          }

          .placement-student-card:hover
          .placement-student-photo img {
            transform: scale(1.07);
          }

          .placement-student-photo-overlay {
            position: absolute;
            inset: 0;
            background:
              linear-gradient(
                180deg,
                transparent 45%,
                rgba(7, 38, 66, 0.72)
              );
          }

          .placement-status {
            position: absolute;
            left: 14px;
            bottom: 13px;
            background: rgba(255, 255, 255, 0.97);
            color: #1687dc;
            border-radius: 30px;
            padding: 7px 11px;
            font-size: 8px;
            font-weight: 850;
            letter-spacing: 0.7px;
            box-shadow:
              0 5px 14px rgba(0, 0, 0, 0.08);
          }

          .placement-student-details {
            padding: 18px 17px 20px;
          }

          .placement-student-details h5 {
            color: #172b42;
            font-size: 15px;
            font-weight: 850;
            margin-bottom: 13px;
          }

          .student-detail-row {
            display: flex;
            align-items: center;
            gap: 9px;
            color: #6f8094;
            font-size: 10.5px;
            line-height: 1.5;
            margin-top: 9px;
          }

          .student-detail-row i {
            width: 24px;
            height: 24px;
            border-radius: 7px;
            background: #e8f5ff;
            color: #1687dc;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 10px;
          }

          .student-detail-row span {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          /* =====================================================
             PLACEMENT MARQUEE
          ===================================================== */

          .placement-marquee {
            overflow: hidden;
            position: relative;
            width: 100%;
            padding: 6px 0 14px;
          }

          .placement-marquee-track {
            display: flex;
            width: max-content;
            gap: 18px;
            animation: placementScroll 22s linear infinite;
          }

          .placement-marquee:hover
          .placement-marquee-track {
            animation-play-state: paused;
          }

          .placement-marquee::before,
          .placement-marquee::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 14px;
            width: 75px;
            z-index: 3;
            pointer-events: none;
          }

          .placement-marquee::before {
            left: 0;
            background:
              linear-gradient(
                90deg,
                #fff,
                rgba(255, 255, 255, 0)
              );
          }

          .placement-marquee::after {
            right: 0;
            background:
              linear-gradient(
                270deg,
                #fff,
                rgba(255, 255, 255, 0)
              );
          }

          @keyframes placementScroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(calc(-50% - 9px));
            }
          }

          /* =====================================================
             REVIEWS
          ===================================================== */

          .reviews-section {
            background:
              linear-gradient(
                180deg,
                #f7fbff 0%,
                #ffffff 100%
              );
          }

          .review-marquee {
            overflow: hidden;
            position: relative;
            margin-top: 15px;
            padding: 8px 0 18px;
          }

          .review-marquee-track {
            display: flex;
            width: max-content;
            gap: 20px;
            animation: reviewScroll 60s linear infinite;
          }

          .review-marquee:hover
          .review-marquee-track {
            animation-play-state: paused;
          }

          /* BIGGER GOOGLE REVIEW CARD */

          .review-card {
            width: 420px;
            min-height: 235px;
            flex: 0 0 420px;

            background:
              linear-gradient(
                145deg,
                #ffffff,
                #f3f9ff
              );

            border: 1px solid #d7e8f5;
            border-radius: 23px;
            padding: 27px 28px;

            box-shadow:
              0 12px 32px rgba(25, 83, 125, 0.08);

            transition: all 0.3s ease;

            display: flex;
            flex-direction: column;
          }

          .review-card:hover {
            transform: translateY(-7px);
            border-color: #9ccced;
            box-shadow:
              0 20px 42px rgba(25, 83, 125, 0.13);
          }

          .review-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
          }

          .review-stars {
            color: #f4b400;
            letter-spacing: 2px;
            font-size: 15px;
          }

          .google-review-badge {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            color: #5f6368;
            background: #fff;
            border: 1px solid #e0e5ea;
            border-radius: 30px;
            padding: 5px 9px;
            font-size: 8px;
            font-weight: 800;
            white-space: nowrap;
          }

          .google-review-badge i {
            color: #4285f4;
            font-size: 10px;
          }

          .review-title {
            color: #172b42;
            font-size: 16px;
            font-weight: 850;
            margin-top: 17px;
          }

          .review-course {
            color: #1687dc;
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            margin-top: 5px;
          }

          .review-text {
            color: #66778b;
            font-size: 12px;
            line-height: 1.75;
            margin: 13px 0 0;
          }

          .review-bottom {
            display: flex;
            align-items: center;
            gap: 9px;
            margin-top: auto;
            padding-top: 17px;
          }

          .review-avatar {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background:
              linear-gradient(
                135deg,
                #e8f5ff,
                #cdeaff
              );
            color: #1687dc;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 850;
            flex-shrink: 0;
          }

          .review-name {
            color: #172b42;
            font-size: 11px;
            font-weight: 850;
          }

          .review-label {
            color: #7b8998;
            font-size: 8px;
            font-weight: 700;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            margin-top: 2px;
          }

          @keyframes reviewScroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(calc(-50% - 10px));
            }
          }

          /* =====================================================
             JOURNEY
          ===================================================== */

          .journey-section {
            background: #fff;
          }

          .journey-card {
            background: white;
            border: 1px solid #dcebf7;
            border-radius: 20px;
            transition: all 0.35s ease;
            height: 100%;
          }

          .journey-card:hover {
            transform: translateY(-6px);
            border-color: #9ccced;
            box-shadow:
              0 18px 38px rgba(25, 83, 125, 0.08);
          }

          .journey-number {
            font-size: 2.4rem;
            font-weight: 900;
            color: #d9ebf8;
            line-height: 1;
            transition: 0.3s ease;
          }

          .journey-card:hover .journey-number {
            color: #1687dc;
          }

          .journey-line {
            width: 100%;
            height: 1px;
            background: #e1edf6;
            margin-top: 18px;
          }

          /* =====================================================
             CTA
          ===================================================== */

          .ciit-cta {
            background:
              radial-gradient(
                circle at 10% 20%,
                rgba(255,255,255,0.15),
                transparent 25%
              ),
              radial-gradient(
                circle at 90% 80%,
                rgba(255,255,255,0.12),
                transparent 25%
              ),
              linear-gradient(
                135deg,
                #0e3458,
                #1687dc
              );
            overflow: hidden;
            position: relative;
            box-shadow:
              0 23px 55px rgba(25, 83, 125, 0.16);
          }

          .cta-circle {
            position: absolute;
            width: 220px;
            height: 220px;
            border: 1px solid rgba(255,255,255,0.18);
            border-radius: 50%;
          }

          .cta-circle-one {
            right: -80px;
            top: -100px;
          }

          .cta-circle-two {
            left: -100px;
            bottom: -130px;
          }

          .cta-button {
            background: white;
            color: #123b66;
            border: none;
            transition: all 0.3s ease;
          }

          .cta-button:hover {
            background: #eef8ff;
            color: #123b66;
            transform: translateY(-3px);
            box-shadow:
              0 13px 28px rgba(0,0,0,.14);
          }

          /* =====================================================
             TABLET
          ===================================================== */

          @media (max-width: 1199px) {

            .hero-title {
              font-size: clamp(2.3rem, 4.4vw, 3.4rem);
            }

            .floating-success {
              right: -3px;
            }

            .floating-mini {
              left: -3px;
            }
          }

          @media (max-width: 991px) {

            .ciit-hero {
              min-height: auto;
              padding: 65px 0 70px;
            }

            .hero-visual {
              margin-top: 15px;
            }

            .hero-image-card {
              max-width: 470px;
            }

            .floating-success {
              right: 5px;
            }

            .floating-mini {
              left: 5px;
            }

            .hero-stat {
              padding-right: 9px;
            }

            .section-title {
              font-size: 2rem;
            }

            .placement-student-card {
              width: 265px;
              flex-basis: 265px;
            }

            .placement-student-photo {
              height: 195px;
            }

            .review-card {
              width: 390px;
              flex-basis: 390px;
            }
          }

          /* =====================================================
             MOBILE
          ===================================================== */

          @media (max-width: 767px) {

            .ciit-hero {
              padding: 52px 0 62px;
            }

            .hero-title {
              font-size: 2.45rem;
              letter-spacing: -1.7px;
              line-height: 1.05;
            }

            .hero-preferred {
              font-size: 13px;
              margin-top: 10px;
            }

            .hero-description {
              font-size: 13px;
              line-height: 1.7;
            }

            .hero-badge {
              font-size: 9px;
              padding: 7px 11px;
            }

            .hero-stat-number {
              font-size: 18px;
            }

            .hero-stat-label {
              font-size: 9px;
            }

            .hero-image-card {
              max-width: 410px;
            }

            .hero-image-wrapper {
              height: 265px;
            }

            .floating-success {
              right: 0;
              bottom: 8px;
              width: 170px;
            }

            .floating-mini {
              left: 0;
              top: 20px;
            }

            .section-title {
              font-size: 1.8rem;
              letter-spacing: -0.7px;
            }

            .section-description {
              font-size: 12.5px;
            }

            .feature-card {
              min-height: 230px;
            }

            .placement-student-card {
              width: 255px;
              flex-basis: 255px;
            }

            .placement-student-photo {
              height: 190px;
            }

            .review-card {
              width: 340px;
              flex-basis: 340px;
              min-height: 250px;
              padding: 23px;
            }

            .review-title {
              font-size: 15px;
            }

            .review-text {
              font-size: 11.5px;
            }
          }

          /* =====================================================
             SMALL MOBILE
          ===================================================== */

          @media (max-width: 575px) {

            .ciit-hero {
              padding: 46px 0 55px;
            }

            .hero-title {
              font-size: 2.15rem;
              letter-spacing: -1.3px;
            }

            .hero-preferred {
              font-size: 12px;
            }

            .hero-description {
              font-size: 12.5px;
            }

            .hero-line {
              width: 58px;
            }

            .hero-stat {
              border-right: none;
            }

            .hero-stat-number {
              font-size: 16px;
            }

            .hero-stat-label {
              font-size: 8px;
            }

            .hero-image-card {
              max-width: 330px;
            }

            .hero-image-wrapper {
              height: 230px;
            }

            .floating-success {
              right: -2px;
              width: 155px;
            }

            .floating-mini {
              left: -2px;
              transform: scale(0.9);
              transform-origin: left top;
            }

            .hero-image-content h3 {
              font-size: 17px;
            }

            .trust-title {
              font-size: 10px;
            }

            .trust-text {
              font-size: 8px;
            }

            .trust-icon {
              width: 37px;
              height: 37px;
            }

            /* WHY CIIT MOBILE */

            .feature-card {
              min-height: 220px;
              padding: 21px !important;
            }

            .feature-icon {
              width: 52px;
              height: 52px;
              border-radius: 14px;
              margin-bottom: 14px !important;
            }

            .feature-card h5 {
              font-size: 14px;
            }

            .feature-card p {
              font-size: 11px;
              line-height: 1.6;
            }

            .course-card {
              padding: 17px !important;
            }

            .course-icon {
              width: 48px !important;
              height: 48px !important;
              margin-bottom: 15px !important;
            }

            .course-card h5 {
              font-size: 13px !important;
            }

            .course-card p {
              font-size: 10.5px !important;
            }

            .course-link {
              font-size: 11px;
            }

            .journey-card {
              padding: 17px !important;
            }

            .journey-number {
              font-size: 2rem;
            }

            .journey-card h5 {
              font-size: 14px;
            }

            .journey-card p {
              font-size: 10.5px;
            }

            /* STUDENT CARDS */

            .placement-student-card {
              width: 245px;
              flex-basis: 245px;
            }

            .placement-student-photo {
              height: 185px;
            }

            .placement-student-details {
              padding: 16px 15px 18px;
            }

            .placement-student-details h5 {
              font-size: 14px;
            }

            .student-detail-row {
              font-size: 10px;
            }

            /* REVIEW CARDS */

            .review-card {
              width: 315px;
              flex-basis: 315px;
              min-height: 255px;
              padding: 21px;
            }

            .review-stars {
              font-size: 13px;
            }

            .google-review-badge {
              font-size: 7px;
            }

            .review-title {
              font-size: 14px;
              margin-top: 14px;
            }

            .review-text {
              font-size: 11px;
              line-height: 1.65;
            }
          }

          /* =====================================================
             VERY SMALL MOBILE
          ===================================================== */

          @media (max-width: 400px) {

            .hero-title {
              font-size: 1.95rem;
            }

            .hero-preferred {
              font-size: 11.5px;
            }

            .hero-description {
              font-size: 12px;
            }

            .hero-image-card {
              max-width: 295px;
            }

            .hero-image-wrapper {
              height: 205px;
            }

            .floating-success {
              width: 143px;
            }

            .floating-mini {
              transform: scale(0.82);
            }

            .section-title {
              font-size: 1.65rem;
            }

            .placement-student-card {
              width: 225px;
              flex-basis: 225px;
            }

            .placement-student-photo {
              height: 175px;
            }

            .review-card {
              width: 295px;
              flex-basis: 295px;
              min-height: 260px;
            }
          }
        `}
      </style>

      <div className="ciit-home">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="ciit-hero">

          <div className="hero-decoration hero-ring"></div>
          <div className="hero-decoration hero-ring-two"></div>
          <div className="hero-decoration hero-small-circle"></div>
          <div className="hero-decoration hero-dot"></div>
          <div className="hero-decoration hero-dot-two"></div>

          <div className="container position-relative py-4">

            <div className="row align-items-center g-4 g-lg-5">

              {/* LEFT */}

              <div
                className={`col-lg-7 hero-content ${
                  visible ? "show" : ""
                }`}
              >

                <div className="hero-badge mb-3 mb-md-4">

                  <span
                    className="rounded-circle"
                    style={{
                      width: "7px",
                      height: "7px",
                      background: "#1687dc",
                    }}
                  ></span>

                  Career Focused Learning Institute

                </div>

                <h1 className="hero-title">

                  <span
                    className="hero-title-main"
                    style={{ color: "#101b30" }}
                  >
                    WE ARE THE ONLY
                  </span>

                  <span className="hero-title-main blue">
                    SOLUTION
                  </span>

                  <span
                    className="hero-title-main"
                    style={{ color: "#101b30" }}
                  >
                    FOR ALL YOUR DOUBTS.
                  </span>

                  <span className="hero-preferred">
                    Your Preferred Software Training Institute in Pune
                  </span>

                </h1>

                <div className="hero-line my-3 my-md-4"></div>

                <p className="hero-description mb-4">
                  Learn practical technology skills through
                  industry-oriented courses, real projects and
                  career-focused training designed to help you
                  move confidently towards your professional goals.
                </p>

                <div className="d-flex flex-wrap gap-2 gap-md-3">

                  <Link
                    to="/courses"
                    className="btn rounded-pill px-4 fw-bold ciit-blue-btn"
                  >
                    Explore Courses
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>

                  <a
                    href="https://wa.me/917028565830"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn rounded-pill px-4 fw-bold ciit-outline-btn"
                  >
                    Talk to CIIT
                    <i className="bi bi-whatsapp ms-2"></i>
                  </a>

                </div>

                <div className="row g-0 mt-4 mt-md-5">

                  <div className="col-4">

                    <div className="hero-stat">

                      <div className="hero-stat-number">
                        10+
                      </div>

                      <div className="hero-stat-label">
                        Career Courses
                      </div>

                    </div>

                  </div>

                  <div className="col-4">

                    <div className="hero-stat">

                      <div className="hero-stat-number">
                        1000+
                      </div>

                      <div className="hero-stat-label">
                        Learners
                      </div>

                    </div>

                  </div>

                  <div className="col-4">

                    <div className="hero-stat">

                      <div className="hero-stat-number">
                        100%
                      </div>

                      <div className="hero-stat-label">
                        Practical Focus
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT */}

              <div className="col-lg-5 hero-visual">

                <div
                  className="position-relative d-flex justify-content-center align-items-center"
                  style={{
                    minHeight: "425px",
                  }}
                >

                  <div className="floating-mini">

                    <div className="d-flex align-items-center gap-2">

                      <div className="mini-icon">
                        <i className="bi bi-stars"></i>
                      </div>

                      <div>

                        <div
                          className="fw-bold"
                          style={{
                            fontSize: "10px",
                            color: "#172b42",
                          }}
                        >
                          Career Learning
                        </div>

                        <div
                          style={{
                            color: "#7a8899",
                            fontSize: "9px",
                          }}
                        >
                          Learn with purpose
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="hero-image-card">

                    <div className="hero-image-wrapper">

                      <img
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85"
                        alt="CIIT students learning"
                        className="hero-image"
                      />

                      <div className="hero-image-overlay"></div>

                      <div className="hero-image-content">

                        <small>
                          CIIT TRAINING INSTITUTE
                        </small>

                        <h3>
                          Learn. Practice. Build.
                        </h3>

                      </div>

                    </div>

                    <div className="hero-bottom-info">

                      <div className="hero-bottom-icon">
                        <i className="bi bi-mortarboard-fill"></i>
                      </div>

                      <div>

                        <div
                          style={{
                            color: "#172b42",
                            fontWeight: 800,
                            fontSize: "11px",
                          }}
                        >
                          Practical Technology Training
                        </div>

                        <div
                          style={{
                            color: "#7a8899",
                            fontSize: "9px",
                            marginTop: "3px",
                          }}
                        >
                          Learn skills that matter for your career
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="floating-success">

                    <div className="d-flex align-items-center gap-2">

                      <div className="success-icon">
                        <i className="bi bi-check-lg"></i>
                      </div>

                      <div>

                        <small
                          className="d-block"
                          style={{
                            color: "#7a8899",
                            fontSize: "8px",
                          }}
                        >
                          Learning Journey
                        </small>

                        <strong
                          style={{
                            color: "#172b42",
                            fontSize: "9px",
                          }}
                        >
                          Ready for Next Step
                        </strong>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TRUST STRIP
        ===================================================== */}

        <section className="trust-strip py-4">

          <div className="container">

            <div className="row g-3 align-items-center">

              {[
                {
                  icon: "bi-laptop",
                  title: "Practical Training",
                  text: "Learn by doing",
                },
                {
                  icon: "bi-person-workspace",
                  title: "Expert Guidance",
                  text: "Industry focused",
                },
                {
                  icon: "bi-kanban",
                  title: "Real Projects",
                  text: "Build your portfolio",
                },
                {
                  icon: "bi-rocket-takeoff",
                  title: "Career Focus",
                  text: "Prepare for opportunities",
                },
              ].map((item) => (

                <div
                  className="col-6 col-lg-3"
                  key={item.title}
                >

                  <div className="trust-item">

                    <div className="trust-icon">
                      <i className={`bi ${item.icon}`}></i>
                    </div>

                    <div>

                      <div className="trust-title">
                        {item.title}
                      </div>

                      <div className="trust-text">
                        {item.text}
                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY CIIT
        ===================================================== */}

        <section className="why-section py-5">

          <div className="container py-lg-4">

            <div className="text-center mb-5">

              <div className="section-label mb-3">
                WHY CIIT
              </div>

              <h2 className="section-title mb-3">
                More Than Just Training
              </h2>

              <p
                className="section-description mx-auto"
                style={{
                  maxWidth: "680px",
                }}
              >
                We focus on practical knowledge, real-world
                projects and career-oriented learning so students
                can turn their skills into opportunities.
              </p>

            </div>

            <div className="row g-3 g-md-4">

              {[
                {
                  icon: "bi-laptop",
                  title: "Practical Learning",
                  text:
                    "Learn concepts through practical exercises and real project scenarios.",
                },
                {
                  icon: "bi-briefcase",
                  title: "Career Focus",
                  text:
                    "Build technical and professional skills aligned with today's job requirements.",
                },
                {
                  icon: "bi-people",
                  title: "Expert Guidance",
                  text:
                    "Get guidance throughout your learning journey from experienced trainers.",
                },
                {
                  icon: "bi-rocket-takeoff",
                  title: "Industry Ready",
                  text:
                    "Develop confidence, projects and skills that help you prepare for your career.",
                },
              ].map((item) => (

                <div
                  className="col-6 col-lg-3"
                  key={item.title}
                >

                  <div className="feature-card p-4">

                    <div className="feature-icon mb-4">

                      <i
                        className={`bi ${item.icon} fs-5`}
                      ></i>

                    </div>

                    <h5 className="fw-bold mb-2">
                      {item.title}
                    </h5>

                    <p className="mb-0 lh-lg">
                      {item.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            MAIN COURSE DOMAINS
        ===================================================== */}

        <section className="courses-section py-4">

          <div className="container py-lg-2">

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-5">

              <div>

                <div className="section-label mb-3">
                  OUR LEARNING DOMAINS
                </div>

                <h2 className="section-title mb-2">
                  Explore Our Courses
                </h2>

                <p className="section-description mb-0">
                  Explore our major technology domains and
                  choose the learning path that matches your
                  career goals.
                </p>

              </div>

              <Link
                to="/courses"
                className="btn rounded-pill px-4 ciit-outline-btn align-self-start align-self-md-auto"
              >
                View All Courses
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>

            </div>

            <div className="row g-3 g-md-4">

              {courses.map((course) => (

                <div
                  className="col-6 col-lg-3"
                  key={course.title}
                >

                  <Link
                    to={course.link}
                    className="text-decoration-none course-card-link"
                  >

                    <div className="course-card h-100 rounded-4 p-4">

                      <div
                        className="course-icon rounded-4 d-flex align-items-center justify-content-center mb-3"
                        style={{
                          width: "55px",
                          height: "55px",
                          background: "#e8f5ff",
                          color: "#1687dc",
                        }}
                      >

                        <i
                          className={`bi ${course.icon} fs-5`}
                        ></i>

                      </div>

                      <h5
                        className="fw-bold mb-2"
                        style={{
                          fontSize: "15px",
                          color: "#172b42",
                          lineHeight: 1.4,
                        }}
                      >
                        {course.title}
                      </h5>

                      <p
                        className="text-secondary mb-3"
                        style={{
                          fontSize: "11.5px",
                          lineHeight: 1.65,
                        }}
                      >
                        {course.text}
                      </p>

                      <span className="fw-semibold course-link">
                        Explore Courses
                        <i className="bi bi-arrow-up-right ms-2"></i>
                      </span>

                    </div>

                  </Link>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            STUDENT PLACEMENTS
        ===================================================== */}

        <section
          className="placements-section py-3"
          id="placements"
        >

          <div className="container py-lg-4">

            <div className="text-center mb-5">

              <div className="section-label mb-3">
                STUDENT PLACEMENTS
              </div>

              <h2 className="section-title mb-3">
                Our Students. Their Career Success.
              </h2>

              <p
                className="section-description mx-auto"
                style={{
                  maxWidth: "720px",
                }}
              >
                From practical learning to professional opportunities,
                CIIT helps students build the skills and confidence
                needed to take their next career step.
              </p>

            </div>


            {/* =================================================
                STUDENT PLACEMENT MARQUEE
            ================================================= */}

            <div className="placement-marquee">

              <div className="placement-marquee-track">

                {[...students, ...students].map(
                  (student, index) => (

                    <div
                      className="placement-student-card"
                      key={`${student.name}-${student.course}-${index}`}
                    >

                      <div className="placement-student-photo">

                        <img
                          src={student.image}
                          alt={student.name}
                          loading="lazy"
                        />

                        <div className="placement-student-photo-overlay"></div>

                        <div className="placement-status">

                          <i className="bi bi-patch-check-fill me-1"></i>

                          {student.status}

                        </div>

                      </div>


                      <div className="placement-student-details">

                        <h5>
                          {student.name}
                        </h5>

                        <div className="student-detail-row">

                          <i className="bi bi-mortarboard-fill"></i>

                          <span>
                            {student.course}
                          </span>

                        </div>

                        <div className="student-detail-row">

                          <i className="bi bi-building"></i>

                          <span>
                            {student.company}
                          </span>

                        </div>

                        <div className="student-detail-row">

                          <i className="bi bi-briefcase-fill"></i>

                          <span>
                            {student.role}
                          </span>

                        </div>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            LEARNING JOURNEY
        ===================================================== */}

        <section className="journey-section py-3 bg-white">

          <div className="container py-lg-3">

            <div className="text-center mb-5">

              <div className="section-label mb-3">
                YOUR JOURNEY
              </div>

              <h2 className="section-title mb-3">
                Learn. Build. Prepare. Grow.
              </h2>

              <p
                className="section-description mx-auto"
                style={{
                  maxWidth: "680px",
                }}
              >
                A simple learning journey designed to take you
                from understanding concepts to building confidence
                for your career.
              </p>

            </div>


            <div className="row g-3 g-md-4">

              {[
                {
                  number: "01",
                  icon: "bi-lightbulb",
                  title: "Learn",
                  text:
                    "Understand concepts with structured classroom and practical learning.",
                },
                {
                  number: "02",
                  icon: "bi-pencil-square",
                  title: "Practice",
                  text:
                    "Strengthen your knowledge through exercises and hands-on activities.",
                },
                {
                  number: "03",
                  icon: "bi-code-slash",
                  title: "Build",
                  text:
                    "Work on projects that help you apply your knowledge in real situations.",
                },
                {
                  number: "04",
                  icon: "bi-graph-up-arrow",
                  title: "Grow",
                  text:
                    "Prepare yourself for interviews, opportunities and continuous learning.",
                },
              ].map((step) => (

                <div
                  className="col-6 col-lg-3"
                  key={step.number}
                >

                  <div className="journey-card p-4">

                    <div className="d-flex justify-content-between align-items-start">

                      <div className="journey-number">
                        {step.number}
                      </div>

                      <div
                        className="feature-icon"
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "12px",
                        }}
                      >

                        <i className={`bi ${step.icon}`}></i>

                      </div>

                    </div>

                    <div className="journey-line"></div>

                    <h5 className="fw-bold mt-4 mb-2">
                      {step.title}
                    </h5>

                    <p className="text-secondary mb-0 lh-lg">
                      {step.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            LEARNER REVIEWS
        ===================================================== */}

        <section className="reviews-section py-3">

          <div className="container py-lg-4">

            <div className="text-center mb-4">

              <div className="section-label mb-3">
                LEARNER REVIEWS
              </div>

              <h2 className="section-title mb-3">
                What Our Learners Say
              </h2>

              <p
                className="section-description mx-auto"
                style={{
                  maxWidth: "650px",
                }}
              >
                Real learner feedback about training,
                practical learning and the overall experience
                at CIIT Training Institute.
              </p>

            </div>


            {/* =================================================
                GOOGLE REVIEW MARQUEE
            ================================================= */}

            <div className="review-marquee">

              <div className="review-marquee-track">

                {[...reviews, ...reviews].map(
                  (review, index) => (

                    <div
                      className="review-card"
                      key={`${review.name}-${index}`}
                    >

                      <div className="review-top">

                        <div className="review-stars">
                          ★★★★★
                        </div>

                        <div className="google-review-badge">

                          <i className="bi bi-google"></i>

                          Google Review

                        </div>

                      </div>


                      <div className="review-title">
                        {review.name}
                      </div>


                      <div className="review-course">
                        {review.course}
                      </div>


                      <p className="review-text">
                        {review.text}
                      </p>


                      <div className="review-bottom">

                        <div className="review-avatar">
                          {review.name.charAt(0)}
                        </div>

                        <div>

                          <div className="review-name">
                            {review.name}
                          </div>

                          <div className="review-label">
                            Verified Google Review
                          </div>

                        </div>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="py-5 bg-white">

          <div className="container py-lg-3">

            <div className="ciit-cta rounded-5 p-4 p-md-5">

              <div className="cta-circle cta-circle-one"></div>
              <div className="cta-circle cta-circle-two"></div>

              <div className="row align-items-center position-relative">

                <div className="col-lg-8 text-white">

                  <div className="small fw-bold mb-2 opacity-75">
                    START YOUR JOURNEY
                  </div>

                  <h2
                    className="fw-bold mb-3"
                    style={{
                      fontSize: "clamp(1.65rem, 3vw, 2.35rem)",
                    }}
                  >
                    Ready to Build Your Future With CIIT?
                  </h2>

                  <p className="mb-0 opacity-75 lh-lg">
                    Explore our courses and take the next step
                    towards developing practical technology skills.
                  </p>

                </div>

                <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

                  <Link
                    to="/courses"
                    className="btn btn-light rounded-pill px-4 py-2 fw-bold cta-button"
                  >
                    Explore Courses
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>
    </>
  );
}

export default Home;