import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(135deg, #123e5b 0%, #0d4d7d 55%, #123f61 100%)",
        color: "#ffffff",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div className="container-fluid px-4 px-md-5 pt-5">

        {/* ================= BRANCHES ================= */}
        <div className="mb-4">
          <h3
            className="fw-bold mb-4"
            style={{
              fontSize: "18px",
              color: "#ffffff",
            }}
          >
            Branches
          </h3>

          <div className="row g-4">

            {/* ================= HADAPSAR ================= */}
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-start">

                <i
                  className="bi bi-geo-alt-fill flex-shrink-0"
                  style={{
                    fontSize: "16px",
                    color: "#ffffff",
                    marginTop: "3px",
                    marginRight: "7px",
                  }}
                />

                <div>
                  <h6
                    className="fw-bold mb-1"
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                    }}
                  >
                    Hadapsar
                  </h6>

                  <p
                    className="mb-0"
                    style={{
                      color: "#ffffff",
                      fontSize: "13px",
                      lineHeight: "1.7",
                      fontWeight: 500,
                    }}
                  >
                    Office 109, 1st Floor, Manisha Blitz,
                    Solapur - Pune Hwy, above samsung service center,
                    near Shankar Math, Hadapsar Gaon, Hadapsar,
                    Pune, Maharashtra 411013,
                    +91-7028565830, +91-9975751649
                  </p>
                </div>
              </div>
            </div>

            {/* ================= VIMANNAGAR ================= */}
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-start">

                <i
                  className="bi bi-geo-alt-fill flex-shrink-0"
                  style={{
                    fontSize: "16px",
                    color: "#ffffff",
                    marginTop: "3px",
                    marginRight: "7px",
                  }}
                />

                <div>
                  <h6
                    className="fw-bold mb-1"
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                    }}
                  >
                    Vimannagar
                  </h6>

                  <p
                    className="mb-0"
                    style={{
                      color: "#ffffff",
                      fontSize: "13px",
                      lineHeight: "1.7",
                      fontWeight: 500,
                    }}
                  >
                    Office no 3A, 1st floor, Prakash Developers,
                    Near Hotel Rasika, Pune Nagar Road,
                    Vadgaon Sheri, Pune -411014,
                    +91-7028561830, +91-7028565830
                  </p>
                </div>
              </div>
            </div>

            {/* ================= BARAMATI ================= */}
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-start">

                <i
                  className="bi bi-geo-alt-fill flex-shrink-0"
                  style={{
                    fontSize: "16px",
                    color: "#ffffff",
                    marginTop: "3px",
                    marginRight: "7px",
                  }}
                />

                <div>
                  <h6
                    className="fw-bold mb-1"
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                    }}
                  >
                    Baramati
                  </h6>

                  <p
                    className="mb-0"
                    style={{
                      color: "#ffffff",
                      fontSize: "13px",
                      lineHeight: "1.7",
                      fontWeight: 500,
                    }}
                  >
                    Najmi Complex.Opposite Bus Stand,Indapur Road.
                    Baramati-413102,
                    +91-7378565351, +91-7028565830
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <hr
          style={{
            border: 0,
            borderTop: "1px solid rgba(255,255,255,0.25)",
            margin: "10px 0 18px",
          }}
        />

        {/* ================= CONTACT + WORKING HOURS ================= */}
        <div className="row g-4 pb-4">

          {/* ================= DROP US A LINE ================= */}
          <div className="col-lg-4 col-md-6">

            <h3
              className="fw-bold mb-4"
              style={{
                fontSize: "18px",
                color: "#ffffff",
              }}
            >
              Drop Us a Line
            </h3>

            {/* Email */}
            <div className="d-flex align-items-center mb-3">
              <i
                className="bi bi-envelope-open"
                style={{
                  fontSize: "15px",
                  color: "#ffffff",
                  width: "24px",
                }}
              />

              <span
                style={{
                  fontSize: "13px",
                  color: "#ffffff",
                  fontWeight: 500,
                }}
              >
                enquiry@ciitinstitute.com
              </span>
            </div>

            {/* HR */}
            <div className="d-flex align-items-center mb-3">
              <i
                className="bi bi-globe2"
                style={{
                  fontSize: "15px",
                  color: "#ffffff",
                  width: "24px",
                }}
              />

              <span
                style={{
                  fontSize: "13px",
                  color: "#ffffff",
                  fontWeight: 500,
                }}
              >
                hr@ciitinstitute.com
              </span>
            </div>

            {/* Mobile */}
            <div className="d-flex align-items-center mb-4">
              <i
                className="bi bi-phone"
                style={{
                  fontSize: "15px",
                  color: "#ffffff",
                  width: "24px",
                }}
              />

              <span
                style={{
                  fontSize: "13px",
                  color: "#ffffff",
                  fontWeight: 500,
                }}
              >
                +91-7028565830
              </span>
            </div>

            <hr
              style={{
                border: 0,
                borderTop: "1px solid rgba(255,255,255,0.22)",
                margin: 0,
              }}
            />
          </div>

          {/* ================= WORKING HOURS ================= */}
          <div className="col-lg-4 col-md-6">

            <h3
              className="fw-bold mb-3"
              style={{
                fontSize: "18px",
                color: "#ffffff",
              }}
            >
              Working Hours
            </h3>

            <div
              style={{
                fontSize: "13px",
                lineHeight: "1.75",
                color: "#ffffff",
                fontWeight: 500,
              }}
            >
              <div className="d-flex">
                <span style={{ width: "110px", textAlign: "right", marginRight: "5px" }}>
                  Monday -
                </span>
                <span>7:30 AM - 9:30 PM</span>
              </div>

              <div className="d-flex">
                <span style={{ width: "110px", textAlign: "right", marginRight: "5px" }}>
                  Tuesday -
                </span>
                <span>7:30 AM - 9:30 PM</span>
              </div>

              <div className="d-flex">
                <span style={{ width: "110px", textAlign: "right", marginRight: "5px" }}>
                  Wednesday -
                </span>
                <span>7:30 AM - 9:30 PM</span>
              </div>

              <div className="d-flex">
                <span style={{ width: "110px", textAlign: "right", marginRight: "5px" }}>
                  Thursday -
                </span>
                <span>7:30 AM - 9:30 PM</span>
              </div>

              <div className="d-flex">
                <span style={{ width: "110px", textAlign: "right", marginRight: "5px" }}>
                  Friday -
                </span>
                <span>7:30 AM - 9:30 PM</span>
              </div>

              <div className="d-flex">
                <span style={{ width: "110px", textAlign: "right", marginRight: "5px" }}>
                  Saturday -
                </span>
                <span>7:30 AM - 9:30 PM</span>
              </div>

              <div className="d-flex">
                <span style={{ width: "110px", textAlign: "right", marginRight: "5px" }}>
                  Sunday -
                </span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div
        style={{
          background: "rgba(5, 29, 47, 0.48)",
          borderTop: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <div className="container-fluid px-3 px-md-4">
          <div
            className="d-flex flex-wrap align-items-center justify-content-between py-3"
            style={{
              gap: "15px",
            }}
          >

            {/* Copyright */}
            <div
              style={{
                color: "#ffffff",
                fontSize: "11px",
                fontWeight: 500,
              }}
            >
              © {new Date().getFullYear()} All Rights Reserved | Designed
              and Developed by CIIT Training Institute |
              
              <Link
                to="/privacy-policy"
                className="text-decoration-none"
                style={{
                  color: "#ffffff",
                  marginLeft: "4px",
                }}
              >
                Privacy Policy
              </Link>
            </div>

            {/* Social Icons */}
            <div className="d-flex align-items-center gap-3">

              <a
                href="https://github.com/yuvrajgadadare/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://ciitinstitute.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Google"
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                <i className="bi bi-google"></i>
              </a>

              <a
                href="https://www.instagram.com/ciitpune/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://pin.it/58LhPlV2n"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                <i className="bi bi-pinterest"></i>
              </a>

              <a
                href="#"
                aria-label="Twitter"
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                <i className="bi bi-twitter"></i>
              </a>

              <a
                href="https://www.facebook.com/ciittraining"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                <i className="bi bi-facebook"></i>
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}