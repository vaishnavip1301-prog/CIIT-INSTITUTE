import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

type EventItem = {
  image: string;
  title: string;
};

const events: EventItem[] = [
  // =========================================================
  // TC COLLEGE SEMINAR ON AI / ML
  // =========================================================
  {
    image: "/assets/Events/TCCollege/1.jpg",
    title: "TC College Seminar on AI ML",
  },
  {
    image: "/assets/Events/TCCollege/2.jpg",
    title: "TC College Seminar on AI ML",
  },
  {
    image: "/assets/Events/TCCollege/3.jpg",
    title: "TC College Seminar on AI ML",
  },
  {
    image: "/assets/Events/TCCollege/4.jpg",
    title: "TC College Seminar on AI ML",
  },
  {
    image: "/assets/Events/TCCollege/5.jpg",
    title: "TC College Seminar on AI ML",
  },
  {
    image: "/assets/Events/TCCollege/6.jpg",
    title: "TC College Seminar on AI ML",
  },
  {
    image: "/assets/Events/TCCollege/7.jpeg",
    title: "TC College Seminar on AI ML",
  },

  // =========================================================
  // BRANCH / STUDENT / SPECIAL EVENTS
  // =========================================================
  {
    image: "/assets/slides/Staff.png",
    title: "Branch Opening Celebration",
  },
  {
    image: "/assets/slides/2.jpg",
    title: "Gift from Students",
  },
  {
    image: "/assets/slides/kesari.jpg",
    title: "Maharashtra Kesari ACP Sir Visit",
  },
  {
    image: "/assets/slides/7.jpg",
    title: "MCA College Seminar",
  },
  {
    image: "/assets/slides/ProjectRepresentation.jpeg",
    title: "Project Representation",
  },
  {
    image: "/assets/slides/CIITStaff (11).jpeg",
    title: "Someshwar Clg Visit",
  },
  {
    image: "/assets/slides/ACPVisit.jpg",
    title: "ACP Sir Visit",
  },
  {
    image: "/assets/slides/9.jpg",
    title: "MCA College Seminar",
  },
  {
    image: "/assets/slides/Rohitsir.jpg",
    title: "Diwali Gift",
  },

  // =========================================================
  // STUDENT PLACEMENT CELEBRATIONS
  // =========================================================
  {
    image: "/assets/slides/nilesh.jpg",
    title: "Student Placement Celebration",
  },
  {
    image: "/assets/slides/bhushan.jpg",
    title: "Student Placement Celebration",
  },
  {
    image: "/assets/images/sagarplacement.jpg",
    title: "Student Placement Celebration",
  },
  {
    image: "/assets/slides/Pushpamaamdiwali.jpg",
    title: "Diwali Gift",
  },
  {
    image: "/assets/slides/Someshawarclg.jpeg",
    title: "Someshwar Clg Visit",
  },
  {
    image: "/assets/slides/CIITStaff (5).jpg",
    title: "Diwali Gift",
  },

  // =========================================================
  // ENGINEERING COLLEGE WORKSHOPS
  // =========================================================
  {
    image: "/assets/slides/72.jpeg",
    title: "Engg College Workshop",
  },
  {
    image: "/assets/slides/someshawarclg6.jpeg",
    title: "Someshwar Clg Visit",
  },
  {
    image: "/assets/slides/32.jpeg",
    title: "Engg College Workshop",
  },
  {
    image: "/assets/slides/31.png",
    title: "Engg College Workshop",
  },
  {
    image: "/assets/slides/12.jpg",
    title: "Engg College Workshop",
  },
  {
    image: "/assets/slides/19.jpeg",
    title: "Engg College Workshop",
  },
  {
    image: "/assets/slides/acpsirstudentvisit.jpg",
    title: "Students Visit",
  },
  {
    image: "/assets/slides/31.png",
    title: "Engg College Workshop",
  },
  {
    image: "/assets/slides/6.jpg",
    title: "MCA College Seminar",
  },
  {
    image: "/assets/slides/69.jpeg",
    title: "Engg College Workshop",
  },
  {
    image: "/assets/slides/70.jpeg",
    title: "Engg College Workshop",
  },
  {
    image: "/assets/slides/71.jpeg",
    title: "Engg College Workshop",
  },

  // =========================================================
  // DIWALI / COLLEGE / PLACEMENT
  // =========================================================
  {
    image: "/assets/slides/Pupeshsirdiwali.jpg",
    title: "Diwali Gift",
  },
  {
    image: "/assets/slides/Someshawarclg2.jpeg",
    title: "Someshwar Clg Visit",
  },
  {
    image: "/assets/slides/8.jpg",
    title: "MCA College Seminar",
  },
  {
    image: "/assets/images/shubhangiplacement.jpg",
    title: "Student Placement Celebration",
  },
  {
    image: "/assets/slides/diwali.jpg",
    title: "Diwali Celebration",
  },
  {
    image: "/assets/slides/priya.jpg",
    title: "Student Placement Celebration",
  },
  {
    image: "/assets/slides/64.jpeg",
    title: "Engg College Workshop",
  },

  // =========================================================
  // FESTIVALS / PLACEMENT
  // =========================================================
  {
    image: "/assets/slides/11.jpg",
    title: "Ganpati Festival",
  },
  {
    image: "/assets/slides/55.jpeg",
    title: "Student Placement Celebration",
  },
  {
    image: "/assets/slides/50.jpeg",
    title: "Student Placement Celebration",
  },
  {
    image: "/assets/slides/70.jpeg",
    title: "Student Placement Celebration",
  },

  // =========================================================
  // CIIT ANNIVERSARY
  // =========================================================
  {
    image: "/assets/slides/25.jpg",
    title: "CIIT's Anniversary Celebration",
  },
  {
    image: "/assets/slides/20.jpg",
    title: "CIIT's Anniversary Celebration",
  },

  // =========================================================
  // GUIDANCE FROM INDUSTRY EXPERTS
  // =========================================================
  {
    image: "/assets/slides/21.jpg",
    title: "Guidance from Industry Experts",
  },
  {
    image: "/assets/slides/39.jpg",
    title: "Guidance from Industry Experts",
  },
  {
    image: "/assets/slides/23.jpg",
    title: "Guidance from Industry Experts",
  },
  {
    image: "/assets/slides/40.jpg",
    title: "Guidance from Industry Experts",
  },

  // =========================================================
  // COLLEGE / MENTORS / CORPORATE
  // =========================================================
  {
    image: "/assets/slides/24.jpg",
    title: "College Student Visit",
  },
  {
    image: "/assets/slides/41.jpg",
    title: "Mentors Visit",
  },
  {
    image: "/assets/slides/42.jpg",
    title: "Mentors Visit",
  },
  {
    image: "/assets/slides/43.jpg",
    title: "Mentors Visit",
  },
  {
    image: "/assets/slides/44.jpg",
    title: "Mentors Visit",
  },
  {
    image: "/assets/slides/26.jpg",
    title: "Corporate Training (Diabos)",
  },
  {
    image: "/assets/slides/61.jpg",
    title: "Development Team",
  },

  // =========================================================
  // EXTRA IMAGES FROM SECOND GALLERY SECTION
  // =========================================================
  {
    image: "/assets/slides/64.jpeg",
    title: "Engg College Seminar",
  },
  {
    image: "/assets/slides/63.jpeg",
    title: "Engg College Seminar",
  },
  {
    image: "/assets/slides/69.jpeg",
    title: "Engg College Seminar",
  },
  {
    image: "/assets/slides/70.jpeg",
    title: "Engg College Seminar",
  },
  {
    image: "/assets/slides/71.jpeg",
    title: "Engg College Seminar",
  },
  {
    image: "/assets/slides/72.jpeg",
    title: "Engg College Seminar",
  },
  {
    image: "/assets/slides/35.jpeg",
    title: "Engg College Workshop",
  },
  {
    image: "/assets/slides/32.jpeg",
    title: "Engg College Workshop",
  },
  {
    image: "/assets/slides/31.png",
    title: "Engg College Workshop",
  },
  {
    image: "/assets/slides/12.jpg",
    title: "Engg College Workshop",
  },
  {
    image: "/assets/slides/19.jpeg",
    title: "Engg College Workshop",
  },
  {
    image: "/assets/slides/30.png",
    title: "Engg College Workshop",
  },
  {
    image: "/assets/slides/6.jpg",
    title: "MCA College Seminar",
  },
  {
    image: "/assets/slides/7.jpg",
    title: "MCA College Seminar",
  },
  {
    image: "/assets/slides/8.jpg",
    title: "MCA College Seminar",
  },
  {
    image: "/assets/slides/9.jpg",
    title: "MCA College Seminar",
  },

  {
    image: "/assets/slides/nilesh.jpg",
    title: "Student Placement Celebration",
  },
  {
    image: "/assets/slides/bhushan.jpg",
    title: "Student Placement Celebration",
  },
  {
    image: "/assets/slides/priya.jpg",
    title: "Student Placement Celebration",
  },

  {
    image: "/assets/slides/10.jpg",
    title: "Ganpati Festival",
  },
  {
    image: "/assets/slides/11.jpg",
    title: "Ganpati Festival",
  },

  {
    image: "/assets/slides/55.jpeg",
    title: "Student Placement Celebration",
  },
  {
    image: "/assets/slides/50.jpeg",
    title: "Student Placement Celebration",
  },
  {
    image: "/assets/slides/57.jpeg",
    title: "Student Placement Celebration",
  },

  {
    image: "/assets/slides/25.jpg",
    title: "CIIT's Anniversary Celebration",
  },
  {
    image: "/assets/slides/20.jpg",
    title: "CIIT's Anniversary Celebration",
  },

  {
    image: "/assets/slides/21.jpg",
    title: "Guidance from Industry Experts",
  },
  {
    image: "/assets/slides/39.jpg",
    title: "Guidance from Industry Experts",
  },
  {
    image: "/assets/slides/23.jpg",
    title: "Guidance from Industry Experts",
  },
  {
    image: "/assets/slides/40.jpg",
    title: "Guidance from Industry Experts",
  },

  {
    image: "/assets/slides/24.jpg",
    title: "College Student Visit",
  },

  {
    image: "/assets/slides/41.jpg",
    title: "Mentors Visit",
  },
  {
    image: "/assets/slides/42.jpg",
    title: "Mentors Visit",
  },
  {
    image: "/assets/slides/43.jpg",
    title: "Mentors Visit",
  },
  {
    image: "/assets/slides/44.jpg",
    title: "Mentors Visit",
  },

  {
    image: "/assets/slides/26.jpg",
    title: "Corporate Training (Diabos)",
  },
  {
    image: "/assets/slides/61.jpg",
    title: "Corporate Training / Development Team",
  },

  {
    image: "/assets/slides/2.jpg",
    title: "Gift from Students",
  },
];

export default function Events() {
  const [selectedImage, setSelectedImage] = useState<EventItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openImage = (item: EventItem, index: number) => {
    setSelectedImage(item);
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const showPrevious = () => {
    const newIndex =
      selectedIndex === 0 ? events.length - 1 : selectedIndex - 1;

    setSelectedIndex(newIndex);
    setSelectedImage(events[newIndex]);
  };

  const showNext = () => {
    const newIndex =
      selectedIndex === events.length - 1 ? 0 : selectedIndex + 1;

    setSelectedIndex(newIndex);
    setSelectedImage(events[newIndex]);
  };

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
      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "85px 0 75px",
          background:
            "linear-gradient(135deg, #eaf6ff 0%, #f8fcff 48%, #dff1ff 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 330,
            height: 330,
            borderRadius: "50%",
            border: "55px solid rgba(22,135,220,0.07)",
            right: -100,
            top: -130,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            border: "35px solid rgba(22,135,220,0.06)",
            left: -90,
            bottom: -110,
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 9,
                    padding: "9px 15px",
                    borderRadius: 999,
                    background: "#ffffff",
                    border: "1px solid #cfe6f7",
                    color: "#1687dc",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    marginBottom: 22,
                  }}
                >
                  <i className="bi bi-calendar-event" />
                  CIIT Events & Activities
                </div>

                <h1
                  style={{
                    fontSize: "clamp(42px, 5vw, 68px)",
                    lineHeight: 1.05,
                    fontWeight: 800,
                    letterSpacing: "-2.5px",
                    color: "#101b30",
                    marginBottom: 22,
                  }}
                >
                  Events
                  <span style={{ color: "#1687dc" }}> & Activities</span>
                </h1>

                <p
                  style={{
                    maxWidth: 620,
                    fontSize: 17,
                    lineHeight: 1.8,
                    color: "#557087",
                    marginBottom: 0,
                  }}
                >
                  Explore seminars, workshops, student celebrations, industry
                  interactions, college visits, festivals and memorable moments
                  from CIIT Training Institute.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                style={{
                  position: "relative",
                  borderRadius: 28,
                  overflow: "hidden",
                  minHeight: 370,
                  boxShadow: "0 25px 60px rgba(15,82,130,0.16)",
                  border: "8px solid rgba(255,255,255,0.8)",
                }}
              >
                <img
                  src="/assets/slides/25.jpg"
                  alt="CIIT Events"
                  style={{
                    width: "100%",
                    height: 370,
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(10,45,76,0.05), rgba(7,38,65,0.75))",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    left: 25,
                    right: 25,
                    bottom: 25,
                    color: "#fff",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      marginBottom: 7,
                      opacity: 0.85,
                    }}
                  >
                    Learn • Connect • Celebrate
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: 27,
                      fontWeight: 800,
                    }}
                  >
                    Moments That Matter
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}
      <section
        style={{
          padding: "80px 0 100px",
          background: "#f5faff",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            style={{
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            <div
              style={{
                color: "#1687dc",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Our Gallery
            </div>

            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 46px)",
                fontWeight: 800,
                letterSpacing: "-1.5px",
                color: "#101b30",
                marginBottom: 14,
              }}
            >
              Explore CIIT Moments
            </h2>

            <p
              style={{
                maxWidth: 720,
                margin: "0 auto",
                color: "#647b90",
                fontSize: 16,
                lineHeight: 1.8,
              }}
            >
              From college seminars and technical workshops to placement
              celebrations and industry interactions, explore the journey of
              CIIT through our event gallery.
            </p>
          </motion.div>

          {/* =================================================
              IMAGE GRID
          ================================================= */}
          <div className="row g-4">
            {events.map((event, index) => (
              <div
                className="col-12 col-sm-6 col-lg-4 col-xl-3"
                key={`${event.image}-${index}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.025, 0.2),
                  }}
                  onClick={() => openImage(event, index)}
                  style={{
                    position: "relative",
                    height: 255,
                    borderRadius: 20,
                    overflow: "hidden",
                    cursor: "pointer",
                    background: "#dcebf7",
                    border: "1px solid #d8e9f6",
                    boxShadow: "0 10px 28px rgba(20,74,110,0.08)",
                  }}
                  className="event-gallery-card"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.55s ease",
                    }}
                  />

                  {/* Overlay */}
                  <div
                    className="event-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: 20,
                      background:
                        "linear-gradient(180deg, rgba(5,28,49,0.02) 20%, rgba(5,28,49,0.82) 100%)",
                      transition: "all 0.35s ease",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.17)",
                        border: "1px solid rgba(255,255,255,0.28)",
                        backdropFilter: "blur(8px)",
                        color: "#fff",
                        marginBottom: 12,
                      }}
                    >
                      <i className="bi bi-arrows-fullscreen" />
                    </div>

                    <h3
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        lineHeight: 1.4,
                        fontWeight: 750,
                        margin: 0,
                      }}
                    >
                      {event.title}
                    </h3>

                    <div
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.75)",
                        marginTop: 5,
                      }}
                    >
                      View Image
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(4,18,31,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 25,
            }}
          >
            {/* Close */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
              style={{
                position: "fixed",
                right: 25,
                top: 22,
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10001,
              }}
            >
              <i className="bi bi-x-lg" />
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
              style={{
                position: "fixed",
                left: 22,
                top: "50%",
                transform: "translateY(-50%)",
                width: 52,
                height: 52,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: 23,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10001,
              }}
            >
              <i className="bi bi-chevron-left" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              style={{
                position: "fixed",
                right: 22,
                top: "50%",
                transform: "translateY(-50%)",
                width: 52,
                height: 52,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: 23,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10001,
              }}
            >
              <i className="bi bi-chevron-right" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "92vw",
                maxHeight: "88vh",
                textAlign: "center",
              }}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                style={{
                  maxWidth: "92vw",
                  maxHeight: "78vh",
                  objectFit: "contain",
                  borderRadius: 14,
                  display: "block",
                  margin: "0 auto",
                  boxShadow: "0 25px 80px rgba(0,0,0,0.4)",
                }}
              />

              <div
                style={{
                  color: "#fff",
                  fontSize: 17,
                  fontWeight: 700,
                  marginTop: 18,
                }}
              >
                {selectedImage.title}
              </div>

              <div
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 12,
                  marginTop: 6,
                }}
              >
                {selectedIndex + 1} / {events.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          CARD HOVER CSS
      ===================================================== */}
      <style>{`
        .event-gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(20,74,110,0.16) !important;
        }

        .event-gallery-card:hover img {
          transform: scale(1.08);
        }

        .event-gallery-card:hover .event-overlay {
          background:
            linear-gradient(
              180deg,
              rgba(22,135,220,0.04) 10%,
              rgba(5,28,49,0.9) 100%
            );
        }

        @media (max-width: 768px) {
          .event-gallery-card {
            height: 230px !important;
          }
        }

        @media (max-width: 576px) {
          .event-gallery-card {
            height: 250px !important;
          }
        }
      `}</style>
    </div>
  );
}