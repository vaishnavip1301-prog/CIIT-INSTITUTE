import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

type Placement = {
  name: string;
  company: string;
  technology: string;
  package: string;
};

const placementProcess = [
  {
    title: "Eligibility Criteria",
    icon: "bi bi-person-check",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    description:
      "Understand eligibility requirements and prepare candidates for the right career opportunities.",
  },
  {
    title: "Placements Training",
    icon: "bi bi-person-workspace",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
    description:
      "Industry-oriented training focused on technical knowledge, practical skills and workplace readiness.",
  },
  {
    title: "Interview Q & A",
    icon: "bi bi-chat-square-text",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
    description:
      "Practice technical and HR interview questions with structured preparation and guidance.",
  },
  {
    title: "Resume Preparation",
    icon: "bi bi-file-earmark-person",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
    description:
      "Create a professional resume that highlights your technical skills, projects and experience.",
  },
  {
    title: "Aptitude Test",
    icon: "bi bi-lightbulb",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=85",
    description:
      "Improve aptitude, logical reasoning and problem-solving skills required for recruitment tests.",
  },
  {
    title: "Mock Interviews",
    icon: "bi bi-people",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    description:
      "Build confidence through realistic mock interview sessions and constructive feedback.",
  },
  {
    title: "Scheduling Interviews",
    icon: "bi bi-calendar-check",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=85",
    description:
      "Support candidates through interview scheduling and coordination with placement opportunities.",
  },
  {
    title: "Job Placement",
    icon: "bi bi-briefcase",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=900&q=85",
    description:
      "Connect trained candidates with relevant job opportunities and career pathways.",
  },
];

const benefits = [
  {
    title: "Use Technical Skills",
    icon: "bi bi-code-square",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    description:
      "A student's imagination will cross boundaries with systematic training focusing on various technological aspects.",
  },
  {
    title: "Share Knowledge",
    icon: "bi bi-share",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=85",
    description:
      "An intensive training where professionals share knowledge through practical project implementation.",
  },
  {
    title: "Get Rewarded",
    icon: "bi bi-award",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=85",
    description:
      "Our certified trainers, along with industry-relevant teaching methods, provide a stimulating learning environment.",
  },
];

const placements: Placement[] = [
  {
    name: "Rupesh Dhabade",
    company: "Perpetituuti Technosoft",
    technology: "Dot Net",
    package: "6.2 LPA",
  },
  {
    name: "Akshay Pawar",
    company: "Rabbit & Tortoise",
    technology: "Dot Net",
    package: "3.5 LPA",
  },
  {
    name: "Pratiksha Phadatare",
    company: "Rabbit & Tortoise",
    technology: "Dot Net",
    package: "3.5 LPA",
  },
  {
    name: "Akash Supekar",
    company: "Avenitrinnovative",
    technology: "Dot Net",
    package: "3.5 LPA",
  },
  {
    name: "Kishor Baradkar",
    company: "Reflection & Global",
    technology: "Dot Net",
    package: "5.2 LPA",
  },
  {
    name: "Nilesh More",
    company: "Height8 Technologies",
    technology: "Dot Net",
    package: "4.5 LPA",
  },
  {
    name: "Amey Ransingh",
    company: "Verseno Solutions",
    technology: "Dot Net",
    package: "4.5 LPA",
  },
  {
    name: "Aditya Bhumkar",
    company: "Sanwell Solutions",
    technology: "Dot Net",
    package: "4.5 LPA",
  },
  {
    name: "Sagar Masal",
    company: "Kanix Infotech",
    technology: "Dot Net",
    package: "6.5 LPA",
  },
  {
    name: "Omkar Pawar",
    company: "Sankalp Computers & Systems",
    technology: "Dot Net",
    package: "3.5 LPA",
  },
  {
    name: "Sagar Nachankar",
    company: "MicroData Care",
    technology: "Dot Net",
    package: "2.5 LPA",
  },
  {
    name: "Rutuja Bodake",
    company: "MicroData Care",
    technology: "Dot Net",
    package: "2.4 LPA",
  },
  {
    name: "Datta Shinde",
    company: "Optical ARC",
    technology: "Front End Developer",
    package: "2.18 LPA",
  },
  {
    name: "Rutuja Jare",
    company: "Cloud Point System Inc",
    technology: "Dot Net",
    package: "2.4 LPA",
  },
  {
    name: "Vaishnavi Bhagat",
    company: "Montcrest",
    technology: "Dot Net",
    package: "2.5 LPA",
  },
  {
    name: "Sanket Bhujbal",
    company: "Infosys",
    technology: "Dot Net",
    package: "4.5 LPA",
  },
  {
    name: "Sourv Ghosh",
    company: "Credence",
    technology: "Dot Net",
    package: "4.20 LPA",
  },
  {
    name: "Snehal",
    company: "Snow White",
    technology: "MEAN Stack",
    package: "4.5 LPA",
  },
  {
    name: "Yogita Ghorad",
    company: "Agilad Tecchnologies Pvt Ltd",
    technology: "Dot Net",
    package: "3.5 LPA",
  },
  {
    name: "Akash Bhujbal",
    company: "Assentex",
    technology: "Dot Net",
    package: "3.5 LPA",
  },
  {
    name: "Dhananjay Jaiswal",
    company: "Bajaj Alianz",
    technology: "DBA",
    package: "3.5 LPA",
  },
  {
    name: "Rahul Paul",
    company: "Capgemeni",
    technology: "Dot Net",
    package: "5.5 LPA",
  },
  {
    name: "Ashwini Yele",
    company: "SK Infotech",
    technology: "Dot Net",
    package: "1.2 LPA",
  },
  {
    name: "Megha Savner",
    company: "Getway Technolabs",
    technology: "Dot Net",
    package: "3.6 LPA",
  },
  {
    name: "Vitthal Chikte",
    company: "Bajaj Alianz",
    technology: "DBA",
    package: "4.5 LPA",
  },
  {
    name: "Aishwarya Khabile",
    company: "The Most Group",
    technology: "Dot Net",
    package: "1.8 LPA",
  },
  {
    name: "Mahesh Londhe",
    company: "Empower Integrated Solutions",
    technology: "PHP",
    package: "2.2 LPA",
  },
  {
    name: "Sandhya Bhujbal",
    company: "Puzzle Software",
    technology: "Front End",
    package: "3.8 LPA",
  },
  {
    name: "Tushar Mahadik",
    company: "Scorg",
    technology: "Dot Net",
    package: "2.5 LPA",
  },
  {
    name: "Aniket Bhosale",
    company: "TCS",
    technology: "Dot Net",
    package: "1.93 LPA",
  },
  {
    name: "Shital Jawale",
    company: "AnAr Solutions",
    technology: "Dot Net",
    package: "1.2 LPA",
  },
  {
    name: "Smita Satpute",
    company: "Aptara",
    technology: "Dot Net",
    package: "1.8 LPA",
  },
  {
    name: "Sneha Mahale",
    company: "Indoglobus Solutions",
    technology: "MEAN Stack",
    package: "5.0 LPA",
  },
  {
    name: "Virendra Parade",
    company: "Integrano",
    technology: "Dot Net",
    package: "1.8 LPA",
  },
  {
    name: "Pooja Laygude",
    company: "Prayo Technogies",
    technology: "Dot Net",
    package: "1.8 LPA",
  },
  {
    name: "Arvind Parhate",
    company: "Panacea Infotech Pvt. Ltd.",
    technology: "Dot Net",
    package: "2.2 LPA",
  },
  {
    name: "Vijay Divekar",
    company: "Maersk",
    technology: "Dot Net",
    package: "2.8 LPA",
  },
  {
    name: "Shakil Shaikh",
    company: "TCS",
    technology: "Java",
    package: "14.0 LPA",
  },
  {
    name: "Prasad Pol",
    company: "Eclon",
    technology: "Front End",
    package: "1.8 LPA",
  },
  {
    name: "Krishna Nichel",
    company: "Modal Logic",
    technology: "Java",
    package: "1.8 LPA",
  },
  {
    name: "Sneha Londhe",
    company: "Praeo Technogy",
    technology: "Dot Net",
    package: "1.8 LPA",
  },
  {
    name: "Tejaswini Balwantro",
    company: "Praeo Technogy",
    technology: "Dot Net",
    package: "1.8 LPA",
  },
  {
    name: "Rohini Bhosale",
    company: "Infosys",
    technology: "Dot Net",
    package: "4.3 LPA",
  },
  {
    name: "Pravin Solankar",
    company: "Vizlitics Technogies Pvt Ltd",
    technology: "DBA",
    package: "2.75 LPA",
  },
  {
    name: "Rajendra Patil",
    company: "Honeywell",
    technology: "Dot Net",
    package: "5.5 LPA",
  },
  {
    name: "Hemangi Jagtap",
    company: "ZCON Solutions Pvt Ltd",
    technology: "DBA",
    package: "5.5 LPA",
  },
  {
    name: "Ajay Mane",
    company: "TCS Pvt Ltd",
    technology: "Dot Net",
    package: "3.5 LPA",
  },
  {
    name: "Vishwjyoti Walode",
    company: "Integrano",
    technology: "Dot Net",
    package: "2.2 LPA",
  },
  {
    name: "Nanaso Pawar",
    company: "TCS",
    technology: "Dot Net",
    package: "2.2 LPA",
  },
  {
    name: "Komal Kardile",
    company: "Adaptive Technologies",
    technology: "Dot Net",
    package: "1.8 LPA",
  },
  {
    name: "Reshma",
    company: "TCS",
    technology: "Dot Net",
    package: "4.2 LPA",
  },
  {
    name: "Rani Kankate",
    company: "Pragmysys",
    technology: "Dot Net",
    package: "2.4 LPA",
  },
  {
    name: "Shraddha Mukta",
    company: "Accenture",
    technology: "Dot Net",
    package: "1.8 LPA",
  },
  {
    name: "Dyaneshwar Patil",
    company: "Wipro",
    technology: "Dot Net",
    package: "2.4 LPA",
  },
  {
    name: "Chaushila Londhe",
    company: "Cruncher Soft Pvt Ltd",
    technology: "Dot Net",
    package: "1.4 LPA",
  },
  {
    name: "Dhanshree Chavan",
    company: "IBM",
    technology: "Dot Net",
    package: "2.4 LPA",
  },
  {
    name: "Sanjay Sharma",
    company: "BasicX",
    technology: "Java",
    package: "2.6 LPA",
  },
  {
    name: "Prajkata Lonkar",
    company: "Maersk",
    technology: "Dot Net",
    package: "2.6 LPA",
  },
  {
    name: "Abhishek Bhadkwan",
    company: "The Most Group",
    technology: "Dot Net",
    package: "2.4 LPA",
  },
  {
    name: "Varsha Nagtilak",
    company: "Web Direct Pvt Ltd",
    technology: "Dot Net",
    package: "3.2 LPA",
  },
  {
    name: "Pallavi Patil",
    company: "Aptara",
    technology: "Dot Net",
    package: "1.44 LPA",
  },
  {
    name: "Sandhya Sanghshetty",
    company: "Accenture",
    technology: "Dot Net",
    package: "1.8 LPA",
  },
  {
    name: "Ketki Atkari",
    company: "Mayuresh Solutions Pvt Ltd",
    technology: "Java",
    package: "1.2 LPA",
  },
  {
    name: "Nishtha Vijavargiya",
    company: "TCS",
    technology: "Java",
    package: "1.8 LPA",
  },
  {
    name: "Bhushan Bairagi",
    company: "Navndra Enterprices",
    technology: "Java",
    package: "1.5 LPA",
  },
  {
    name: "Ankit Gupta",
    company: "Nuance",
    technology: "Java",
    package: "3.5 LPA",
  },
  {
    name: "Snehal Shivthare",
    company: "Automatic Infotech Pvt Ltd",
    technology: "Dot Net",
    package: "2.4 LPA",
  },
  {
    name: "Nilesh Chavan",
    company: "Aloha Technology",
    technology: "Dot Net",
    package: "1.8 LPA",
  },
  {
    name: "Mayur Gadekar",
    company: "Navandra Enterprices",
    technology: "Android",
    package: "1.5 LPA",
  },
  {
    name: "Aditya Mukundwar",
    company: "Ohum Lab Healthcare Pvt Ltd",
    technology: "Java",
    package: "5.8 LPA",
  },
  {
    name: "Mayur Mahadik",
    company: "IBS Technologies",
    technology: "Dot Net",
    package: "3.2 LPA",
  },
  {
    name: "Shraddha Banne",
    company: "Sands Technogy",
    technology: "Dot Net",
    package: "1.4 LPA",
  },
  {
    name: "Avantika Malleshe",
    company: "Accenture",
    technology: "Dot Net",
    package: "1.8 LPA",
  },
  {
    name: "Amol Khedkar",
    company: "Maersk",
    technology: "Dot Net",
    package: "2.4 LPA",
  },
  {
    name: "Deepak Kumar",
    company: "L&T India",
    technology: "Dot Net",
    package: "9.20 LPA",
  },
  {
    name: "Neha Bali",
    company: "Upperthrust Technologies",
    technology: "Java",
    package: "2.4 LPA",
  },
  {
    name: "Sandeep Gupta",
    company: "Midas Blue Pvt Ltd",
    technology: "Java",
    package: "2.4 LPA",
  },
  {
    name: "Balaji Masal",
    company: "Benchmark Solutions Pvt Ltd",
    technology: "Dot Net",
    package: "3.2 LPA",
  },
  {
    name: "Shraddha Patil",
    company: "ZCON Solutions Pvt Ltd",
    technology: "Dot Net",
    package: "4.1 LPA",
  },
  {
    name: "Ganesh Gore",
    company: "Delmon Solutions",
    technology: "Dot Net",
    package: "4.9 LPA",
  },
  {
    name: "Swapnita Kale",
    company: "Suma Soft Pvt. Ltd.",
    technology: "Dot Net",
    package: "3.1 LPA",
  },
  {
    name: "Piyush Dwivedi",
    company: "Soft Tech",
    technology: "Dot Net",
    package: "3.1 LPA",
  },
  {
    name: "Diksha Rahangale",
    company: "AnAr Sloutions Pvt Ltd",
    technology: "Dot Net",
    package: "3.1 LPA",
  },
  {
    name: "Mahesh Khude",
    company: "Birla Medisoft Pvt Ltd",
    technology: ".NET",
    package: "3.2 LPA",
  },
  {
    name: "Noopur Sarode",
    company: "Upyogee Soutions Pvt Ltd",
    technology: "Dot Net",
    package: "2.4 LPA",
  },
  {
    name: "Swarali Deshmukh",
    company: "Tata Motors",
    technology: "Dot Net",
    package: "2.4 LPA",
  },
  {
    name: "Amit Shinde",
    company: "Assure Technogy Pvt Ltd",
    technology: "Dot Net",
    package: "2.4 LPA",
  },
  {
    name: "Pooja Khante",
    company: "AnAr Solutions Pvt Ltd",
    technology: "Dot Net",
    package: "4.5 LPA",
  },
  {
    name: "Nitin Lonkar",
    company: "Accenture",
    technology: "Dot Net",
    package: "4.5 LPA",
  },
  {
    name: "Rutuja Dhamankar",
    company: "Soft Tech",
    technology: "Dot Net",
    package: "1.8 LPA",
  },
  {
    name: "Hemangi Oke",
    company: "Mindtree",
    technology: "Dot Net",
    package: "2.5 LPA",
  },
];

export default function Placements() {
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
      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        style={{
          position: "relative",
          padding: "76px 0 88px",
          background:
            "linear-gradient(135deg, #f5fbff 0%, #eaf6ff 48%, #d9efff 100%)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            borderRadius: "50%",
            border: "55px solid rgba(22,135,220,0.07)",
            right: -120,
            top: -150,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 230,
            height: 230,
            borderRadius: "50%",
            border: "35px solid rgba(22,135,220,0.06)",
            left: -110,
            bottom: -130,
          }}
        />

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "9px 15px",
                  borderRadius: 50,
                  background: "#e8f5ff",
                  color: "#1687dc",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                <i className="bi bi-briefcase-fill" />
                Career & Placements
              </div>

              <h1
                style={{
                  fontSize: "clamp(42px, 5vw, 66px)",
                  lineHeight: 1.05,
                  fontWeight: 800,
                  letterSpacing: "-2.5px",
                  color: "#101b30",
                  marginBottom: 22,
                }}
              >
                Training That Leads
                <br />
                <span style={{ color: "#1687dc" }}>Towards Careers</span>
              </h1>

              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: "#587087",
                  maxWidth: 620,
                  marginBottom: 0,
                }}
              >
                CIIT Training Institute focuses on job-oriented training,
                practical learning and career preparation designed to help
                students become industry-ready.
              </p>

              <div
                className="d-flex flex-wrap gap-3 mt-4"
                style={{ fontSize: 14, fontWeight: 700 }}
              >
                <div
                  style={{
                    padding: "12px 16px",
                    background: "#ffffff",
                    border: "1px solid #dcebf7",
                    borderRadius: 12,
                  }}
                >
                  <i
                    className="bi bi-person-workspace me-2"
                    style={{ color: "#1687dc" }}
                  />
                  Job Oriented Training
                </div>

                <div
                  style={{
                    padding: "12px 16px",
                    background: "#ffffff",
                    border: "1px solid #dcebf7",
                    borderRadius: 12,
                  }}
                >
                  <i
                    className="bi bi-gear-wide-connected me-2"
                    style={{ color: "#1687dc" }}
                  />
                  Practical Learning
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: 30,
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  boxShadow: "0 24px 65px rgba(24,74,110,0.13)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                  alt="CIIT Placement Training"
                  style={{
                    width: "100%",
                    height: 430,
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    left: 22,
                    right: 22,
                    bottom: 22,
                    padding: "18px 20px",
                    borderRadius: 18,
                    background: "rgba(8,42,72,0.88)",
                    color: "#ffffff",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: "1.3px",
                      textTransform: "uppercase",
                      marginBottom: 5,
                      color: "#9ed7ff",
                    }}
                  >
                    Career Support
                  </div>

                  <div style={{ fontSize: 18, fontWeight: 800 }}>
                    Training • Interview • Placement
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          JOB ORIENTED TRAINING
      ===================================================== */}
      <section style={{ padding: "90px 0 70px", background: "#ffffff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div
                style={{
                  textAlign: "center",
                  maxWidth: 850,
                  margin: "0 auto 50px",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "2px",
                    color: "#1687dc",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Placement Focus
                </div>

                <h2
                  style={{
                    fontSize: "clamp(30px, 4vw, 44px)",
                    fontWeight: 800,
                    letterSpacing: "-1.4px",
                    color: "#101b30",
                    marginBottom: 18,
                  }}
                >
                  100% Job Guarantee With Customized Training Program
                </h2>

                <p
                  style={{
                    color: "#667b8d",
                    fontSize: 16,
                    lineHeight: 1.85,
                    marginBottom: 0,
                  }}
                >
                  These days there are so many training institutes who claims
                  to offer training and placement. They might be authentic and
                  keep up to their promises, but how would a candidate trust an
                  institute among so many or make the right choice? Here CIIT
                  Training Institute stands out with its unique written
                  assurance of 100% job guarantee in written. Employability is
                  not merely a part of the training goals but the ultimate
                  objective of our certification courses.
                </p>
              </div>

              <div className="row g-4">
                <div className="col-lg-6">
                  <div
                    style={{
                      height: "100%",
                      padding: 30,
                      borderRadius: 24,
                      background: "#f5faff",
                      border: "1px solid #dcebf7",
                    }}
                  >
                    <div
                      style={{
                        width: 54,
                        height: 54,
                        borderRadius: 16,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#e8f5ff",
                        color: "#1687dc",
                        fontSize: 24,
                        marginBottom: 18,
                      }}
                    >
                      <i className="bi bi-bullseye" />
                    </div>

                    <h3
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: "#18324b",
                        marginBottom: 14,
                      }}
                    >
                      Job Oriented Training
                    </h3>

                    <p
                      style={{
                        color: "#667b8d",
                        lineHeight: 1.85,
                        marginBottom: 0,
                      }}
                    >
                      CIIT Training Institute key aim is to deliver Job
                      Oriented Training for both IT students and Non IT
                      students to perform excellence in their choice of
                      domains. We understand the value of money and thus we
                      train candidates according to the needs of industry.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    style={{
                      height: "100%",
                      padding: 30,
                      borderRadius: 24,
                      background: "#f5faff",
                      border: "1px solid #dcebf7",
                    }}
                  >
                    <div
                      style={{
                        width: 54,
                        height: 54,
                        borderRadius: 16,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#e8f5ff",
                        color: "#1687dc",
                        fontSize: 24,
                        marginBottom: 18,
                      }}
                    >
                      <i className="bi bi-laptop" />
                    </div>

                    <h3
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: "#18324b",
                        marginBottom: 14,
                      }}
                    >
                      Practical & Industry Learning
                    </h3>

                    <p
                      style={{
                        color: "#667b8d",
                        lineHeight: 1.85,
                        marginBottom: 0,
                      }}
                    >
                      CIIT Training Institute training methods and customized
                      courses promise employability, and not just
                      certifications. Candidates are prepared as per latest
                      and advanced corporate requirements. After understanding
                      theory and practical sessions, candidates perform on
                      live projects under the supervision of mentors and
                      industry experts.
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: 22,
                  padding: 30,
                  borderRadius: 24,
                  background:
                    "linear-gradient(135deg, #f5faff 0%, #eaf6ff 100%)",
                  border: "1px solid #dcebf7",
                }}
              >
                <div className="d-flex gap-3 align-items-start">
                  <div
                    style={{
                      minWidth: 52,
                      width: 52,
                      height: 52,
                      borderRadius: 15,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#ffffff",
                      color: "#1687dc",
                      fontSize: 23,
                      border: "1px solid #dcebf7",
                    }}
                  >
                    <i className="bi bi-building-check" />
                  </div>

                  <p
                    style={{
                      color: "#667b8d",
                      lineHeight: 1.85,
                      margin: 0,
                    }}
                  >
                    We take utmost care to ensure that whatever candidates
                    learn in the classroom gets transformed in practical
                    knowledge. They are trained to work in corporate
                    environments and on real time projects so that they find it
                    easy to adapt themselves in the high pressure environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          JOB GUARANTEE + ASSURANCE
      ===================================================== */}
      <section style={{ padding: "75px 0", background: "#edf7ff" }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <motion.div
                whileHover={{ y: -5 }}
                style={{
                  height: "100%",
                  padding: 34,
                  borderRadius: 26,
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  boxShadow: "0 15px 40px rgba(24,74,110,0.07)",
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#e8f5ff",
                    color: "#1687dc",
                    fontSize: 27,
                    marginBottom: 20,
                  }}
                >
                  <i className="bi bi-shield-check" />
                </div>

                <h3
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: "#18324b",
                    marginBottom: 16,
                  }}
                >
                  Job Guarantee
                </h3>

                <p
                  style={{
                    color: "#667b8d",
                    lineHeight: 1.85,
                    margin: 0,
                  }}
                >
                  At CIIT, we provide 100% job guarantee for Full Stack
                  Development Programs in JAVA, .NET and Python, MEAN Stack and
                  MERN Stack. Here student will get 2 months training on all
                  the topics required for Developer. After completion of
                  training candidate will get opportunity to work with our
                  development team at least for next 4 months. During this 4
                  months he will be on probation period, after completion of
                  his 4 months internship he will get opportunity to become our
                  employee.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                whileHover={{ y: -5 }}
                style={{
                  height: "100%",
                  padding: 34,
                  borderRadius: 26,
                  background: "#ffffff",
                  border: "1px solid #dcebf7",
                  boxShadow: "0 15px 40px rgba(24,74,110,0.07)",
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#e8f5ff",
                    color: "#1687dc",
                    fontSize: 27,
                    marginBottom: 20,
                  }}
                >
                  <i className="bi bi-file-earmark-check" />
                </div>

                <h3
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: "#18324b",
                    marginBottom: 16,
                  }}
                >
                  Job Assurance
                </h3>

                <p
                  style={{
                    color: "#667b8d",
                    lineHeight: 1.85,
                    margin: 0,
                  }}
                >
                  At CIIT, we provide 100% job assurance written. Now, what
                  more can one ask for? That is the reason why students choose
                  us over other institutes. We do not hesitate in giving a
                  written assurance to our candidates, as our training and
                  placement program is of that standard. We train our students
                  in such a manner that they become job ready. CIIT acts as a
                  bridge between the academic life of a student and the
                  corporate world. Once they complete our course, they get job
                  ready.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PLACEMENT PROCESS
      ===================================================== */}
      <section style={{ padding: "90px 0", background: "#ffffff" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: 750,
              margin: "0 auto 50px",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#1687dc",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Our Placement Process
            </div>

            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-1.4px",
                color: "#101b30",
                marginBottom: 15,
              }}
            >
              A Structured Path To Career Readiness
            </h2>

            <p
              style={{
                color: "#667b8d",
                fontSize: 16,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              From eligibility and training to interviews and final placement,
              every stage is designed to prepare students for professional
              opportunities.
            </p>
          </div>

          <div className="row g-4">
            {placementProcess.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  whileHover={{ y: -7 }}
                  style={{
                    height: "100%",
                    borderRadius: 22,
                    overflow: "hidden",
                    background: "#ffffff",
                    border: "1px solid #dcebf7",
                    boxShadow: "0 12px 35px rgba(24,74,110,0.07)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: 150,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(7,49,82,0.05), rgba(7,49,82,0.7))",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        left: 17,
                        bottom: 16,
                        width: 45,
                        height: 45,
                        borderRadius: 13,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#ffffff",
                        color: "#1687dc",
                        fontSize: 21,
                        boxShadow: "0 8px 20px rgba(0,0,0,0.14)",
                      }}
                    >
                      <i className={item.icon} />
                    </div>
                  </div>

                  <div style={{ padding: "20px 20px 22px" }}>
                    <h3
                      style={{
                        fontSize: 17,
                        fontWeight: 800,
                        color: "#18324b",
                        marginBottom: 10,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "#718397",
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}
      <section style={{ padding: "85px 0", background: "#edf7ff" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: 800,
              margin: "0 auto 50px",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#1687dc",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Student Benefits
            </div>

            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-1.4px",
                color: "#101b30",
                marginBottom: 15,
              }}
            >
              Premier Benefits For Students
            </h2>

            <p
              style={{
                color: "#667b8d",
                fontSize: 16,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Practical learning, knowledge sharing and industry-relevant
              training help students build stronger professional capabilities.
            </p>
          </div>

          <div className="row g-4">
            {benefits.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -7 }}
                  style={{
                    height: "100%",
                    borderRadius: 24,
                    overflow: "hidden",
                    background: "#ffffff",
                    border: "1px solid #dcebf7",
                    boxShadow: "0 12px 35px rgba(24,74,110,0.07)",
                  }}
                >
                  <div
                    style={{
                      height: 180,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(7,49,82,0.03), rgba(7,49,82,0.7))",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        left: 20,
                        bottom: 18,
                        width: 52,
                        height: 52,
                        borderRadius: 15,
                        background: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#1687dc",
                        fontSize: 24,
                      }}
                    >
                      <i className={item.icon} />
                    </div>
                  </div>

                  <div style={{ padding: 25 }}>
                    <h3
                      style={{
                        textAlign: "center",
                        color: "#18324b",
                        fontSize: 21,
                        fontWeight: 800,
                        marginBottom: 12,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        textAlign: "center",
                        color: "#6b7f91",
                        fontSize: 14.5,
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TOP PLACEMENTS
      ===================================================== */}
      <section style={{ padding: "95px 0", background: "#ffffff" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: 850,
              margin: "0 auto 45px",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "2px",
                color: "#1687dc",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Placement Records
            </div>

            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-1.4px",
                color: "#101b30",
                marginBottom: 15,
              }}
            >
              Our Top Placements
            </h2>

            <p
              style={{
                color: "#667b8d",
                fontSize: 16,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Selected placement information from the records provided in the
              original CIIT placement page.
            </p>
          </div>

          <div
            style={{
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid #dcebf7",
              boxShadow: "0 15px 45px rgba(24,74,110,0.08)",
              background: "#ffffff",
            }}
          >
            <div
              className="table-responsive"
              style={{ maxHeight: 720, overflowY: "auto" }}
            >
              <table
                className="table mb-0 align-middle"
                style={{
                  minWidth: 760,
                  fontSize: 14,
                }}
              >
                <thead
                  style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 2,
                    background: "#0e3458",
                    color: "#ffffff",
                  }}
                >
                  <tr>
                    <th style={{ padding: "17px 20px", whiteSpace: "nowrap" }}>
                      #
                    </th>
                    <th style={{ padding: "17px 20px", whiteSpace: "nowrap" }}>
                      Name of Student
                    </th>
                    <th style={{ padding: "17px 20px", whiteSpace: "nowrap" }}>
                      Company
                    </th>
                    <th style={{ padding: "17px 20px", whiteSpace: "nowrap" }}>
                      Technology
                    </th>
                    <th style={{ padding: "17px 20px", whiteSpace: "nowrap" }}>
                      Package
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {placements.map((placement, index) => (
                    <tr key={`${placement.name}-${index}`}>
                      <td
                        style={{
                          padding: "14px 20px",
                          color: "#1687dc",
                          fontWeight: 800,
                        }}
                      >
                        {index + 1}
                      </td>

                      <td
                        style={{
                          padding: "14px 20px",
                          color: "#18324b",
                          fontWeight: 700,
                        }}
                      >
                        {placement.name}
                      </td>

                      <td
                        style={{
                          padding: "14px 20px",
                          color: "#5f7488",
                        }}
                      >
                        {placement.company}
                      </td>

                      <td style={{ padding: "14px 20px" }}>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "6px 11px",
                            borderRadius: 50,
                            background: "#e8f5ff",
                            color: "#1687dc",
                            fontSize: 12,
                            fontWeight: 800,
                          }}
                        >
                          {placement.technology}
                        </span>
                      </td>

                      <td
                        style={{
                          padding: "14px 20px",
                          color: "#18324b",
                          fontWeight: 800,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {placement.package}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div
            className="mt-4"
            style={{
              padding: "18px 22px",
              borderRadius: 16,
              background: "#f5faff",
              border: "1px solid #dcebf7",
              color: "#718397",
              fontSize: 13,
              lineHeight: 1.7,
            }}
          >
            <i
              className="bi bi-info-circle me-2"
              style={{ color: "#1687dc" }}
            />
            Placement records shown above are based on the student, company,
            technology and package information supplied in the original CIIT
            page.
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL STRIP
      ===================================================== */}
      <section
        style={{
          padding: "65px 0",
          background: "linear-gradient(135deg, #0e3458, #1687dc)",
          color: "#ffffff",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#a9ddff",
                  marginBottom: 10,
                }}
              >
                CIIT Career Support
              </div>

              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 800,
                  letterSpacing: "-1.2px",
                  marginBottom: 12,
                }}
              >
                From Learning To Career Readiness
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#d8efff",
                  fontSize: 16,
                  lineHeight: 1.8,
                  maxWidth: 750,
                }}
              >
                Build technical skills, strengthen your interview preparation
                and develop the practical confidence required for the
                professional world.
              </p>
            </div>

            <div className="col-lg-4">
              <div
                className="d-flex justify-content-lg-end"
                style={{ fontSize: 34, gap: 12 }}
              >
                <div
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.13)",
                  }}
                >
                  <i className="bi bi-mortarboard" />
                </div>

                <div
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.13)",
                  }}
                >
                  <i className="bi bi-person-workspace" />
                </div>

                <div
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.13)",
                  }}
                >
                  <i className="bi bi-briefcase" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}