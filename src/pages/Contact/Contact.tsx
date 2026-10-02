import { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Branch {
  name: string;
  type: string;
  address: string;
  phones: string[];
  emails: string[];
  mapLink: string;
  mapEmbed: string;
  icon: string;
}

const branches: Branch[] = [
  {
    name: "Hadapsar",
    type: "HEAD OFFICE",
    address:
      "Office 109, 1st Floor, Manisha Blitz, Solapur - Pune Hwy, above samsung service center, near Shankar Math, Hadapsar Gaon, Hadapsar, Pune, Maharashtra 411013",
    phones: ["7028565830", "9975751649"],
    emails: ["hr@ciitinstitute.com", "enquiry@ciitinstitute.com"],
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=CIIT+Training+Institute+Hadapsar+Pune",
    mapEmbed:
      "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsyNIuO_BwjsRdPTlKq8Ta7U&key=AIzaSyAMUJFCsLDjCD9PgtYBhU7iXkYzDO-oQLE",
    icon: "bi-building",
  },
  {
    name: "Viman Nagar",
    type: "TRAINING CENTRE",
    address:
      "Office no 3A, 1st floor, PRAKASH developers, near hotel rasika, pune nagar road, Vadgaon Sheri, Pune -411014",
    phones: ["7028561830", "9975751649"],
    emails: ["enquiry@ciitinstitute.com"],
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=CIIT+Training+Institute+Viman+Nagar+Pune",
    mapEmbed:
      "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsyNIuO_BwjsRdPTlKq8Ta7U&key=AIzaSyAMUJFCsLDjCD9PgtYBhU7iXkYzDO-oQLE",
    icon: "bi-building",
  },
  {
    name: "Baramati",
    type: "TRAINING CENTRE",
    address:
      "Najmi Complex. Opposite Bus Stand, Indapur Road. Baramati-413102",
    phones: ["7378565351", "7028565830"],
    emails: ["enquiry@ciitinstitute.com"],
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=CIIT+Training+Institute+Baramati",
    mapEmbed:
      "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsyNIuO_BwjsRdPTlKq8Ta7U&key=AIzaSyAMUJFCsLDjCD9PgtYBhU7iXkYzDO-oQLE",
    icon: "bi-geo-alt",
  },
];

const quickContacts = [
  {
    icon: "bi-telephone",
    title: "Call Us",
    text: "7028565830",
    href: "tel:7028565830",
  },
  {
    icon: "bi-envelope",
    title: "Email Us",
    text: "enquiry@ciitinstitute.com",
    href: "mailto:enquiry@ciitinstitute.com",
  },
  {
    icon: "bi-clock",
    title: "Working Hours",
    text: "Mon - Sat : 9 AM - 7 PM",
    href: "#branches",
  },
];

export default function Contact() {
  const [activeMap, setActiveMap] = useState<number | null>(null);

  return (
    <div className="contact-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .contact-page {
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

        /* =========================================
           HERO
        ========================================= */

        .contact-hero {
          position: relative;
          overflow: hidden;
          min-height: 390px;
          display: flex;
          align-items: center;
          background:
            linear-gradient(
              135deg,
              rgba(238, 249, 255, 0.98),
              rgba(255, 255, 255, 0.98)
            );
        }

        .contact-hero::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          border: 1px solid rgba(22, 143, 225, 0.15);
          right: -120px;
          top: -170px;
        }

        .contact-hero::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 1px solid rgba(22, 143, 225, 0.12);
          left: -150px;
          bottom: -180px;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          width: min(1180px, 92%);
          margin: auto;
          padding: 70px 0;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 55px;
          align-items: center;
        }

        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 16px;
          color: #1687dc;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero-label::before {
          content: "";
          width: 28px;
          height: 2px;
          background: #1687dc;
        }

        .hero-title {
          margin: 0;
          color: #101b30;
          font-size: clamp(40px, 5vw, 62px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .hero-title span {
          color: #1687dc;
        }

        .hero-description {
          max-width: 650px;
          margin: 22px 0 0;
          color: #5d7690;
          font-size: 17px;
          line-height: 1.8;
        }

        .hero-image {
          height: 300px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid #dcebf7;
          box-shadow: 0 18px 50px rgba(28, 89, 132, 0.10);
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* =========================================
           QUICK CONTACT
        ========================================= */

        .quick-section {
          position: relative;
          z-index: 5;
          margin-top: -35px;
          padding: 0 0 70px;
        }

        .quick-grid {
          width: min(1050px, 92%);
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .quick-card {
          background: #ffffff;
          border: 1px solid #dcebf7;
          border-radius: 18px;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 10px 30px rgba(31, 93, 135, 0.07);
          text-decoration: none;
          transition: 0.25s ease;
        }

        .quick-card:hover {
          transform: translateY(-5px);
          border-color: #b9def8;
          box-shadow: 0 16px 35px rgba(31, 93, 135, 0.11);
        }

        .quick-icon {
          flex: 0 0 52px;
          width: 52px;
          height: 52px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e9f6ff;
          color: #1687dc;
          font-size: 22px;
        }

        .quick-title {
          margin: 0 0 4px;
          color: #18324b;
          font-size: 15px;
          font-weight: 800;
        }

        .quick-text {
          margin: 0;
          color: #61788e;
          font-size: 14px;
          line-height: 1.5;
        }

        /* =========================================
           COMMON SECTION
        ========================================= */

        .section {
          padding: 75px 0;
        }

        .section-light {
          background: #f5faff;
        }

        .section-white {
          background: #ffffff;
        }

        .section-heading {
          width: min(850px, 92%);
          margin: 0 auto 45px;
          text-align: center;
        }

        .section-label {
          display: inline-block;
          margin-bottom: 10px;
          color: #1687dc;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .section-title {
          margin: 0;
          color: #101b30;
          font-size: clamp(31px, 4vw, 44px);
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -1.2px;
        }

        .section-description {
          max-width: 700px;
          margin: 15px auto 0;
          color: #688198;
          font-size: 16px;
          line-height: 1.8;
        }

        .section-line {
          width: 55px;
          height: 3px;
          margin: 22px auto 0;
          border-radius: 10px;
          background: #1687dc;
        }

        /* =========================================
           BRANCHES
        ========================================= */

        .branches-section {
          background: #f5faff;
        }

        .branches-grid {
          width: min(1180px, 92%);
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          align-items: stretch;
        }

        .branch-card {
          height: 100%;
          background: #ffffff;
          border: 1px solid #dcebf7;
          border-radius: 22px;
          padding: 27px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 12px 35px rgba(32, 93, 132, 0.06);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .branch-card:hover {
          transform: translateY(-7px);
          border-color: #b9def8;
          box-shadow: 0 20px 45px rgba(32, 93, 132, 0.11);
        }

        .branch-top {
          display: flex;
          align-items: center;
          gap: 17px;
          margin-bottom: 25px;
        }

        .branch-icon {
          width: 62px;
          height: 62px;
          flex: 0 0 62px;
          border-radius: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eaf6ff;
          color: #1687dc;
          border: 1px solid #d3ebfb;
          font-size: 27px;
        }

        .branch-name {
          margin: 0 0 5px;
          color: #101b30;
          font-size: 23px;
          line-height: 1.15;
          font-weight: 800;
        }

        .branch-type {
          color: #1687dc;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .branch-info {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
        }

        .branch-info-icon {
          flex: 0 0 20px;
          width: 20px;
          color: #1687dc;
          font-size: 17px;
          margin-top: 3px;
        }

        .branch-info-text {
          margin: 0;
          color: #58718a;
          font-size: 14px;
          line-height: 1.65;
        }

        .branch-info-text strong {
          color: #34516d;
          font-weight: 800;
        }

        .phone-links {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .phone-link {
          color: #1687dc;
          text-decoration: none;
          font-weight: 600;
        }

        .phone-link:hover {
          text-decoration: underline;
        }

        .branch-map-button {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: auto;
          margin-bottom: 14px;
          padding: 11px 16px;
          border: 1px solid #cfe7f8;
          border-radius: 12px;
          background: #edf8ff;
          color: #1687dc;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: 0.2s ease;
        }

        .branch-map-button:hover {
          background: #1687dc;
          color: #ffffff;
          border-color: #1687dc;
        }

        .map-wrapper {
          position: relative;
          overflow: hidden;
          height: 205px;
          border-radius: 15px;
          border: 1px solid #dcebf7;
          background: #edf6fb;
        }

        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          display: block;
          border: 0;
        }

        .map-open-overlay {
          position: absolute;
          right: 10px;
          top: 10px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 8px 11px;
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.94);
          color: #1687dc;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }

        /* =========================================
           FIND US
        ========================================= */

        .find-section {
          background: #ffffff;
        }

        .find-wrapper {
          width: min(1180px, 92%);
          margin: auto;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 35px;
          align-items: stretch;
        }

        .find-content {
          padding: 38px;
          border-radius: 24px;
          border: 1px solid #dcebf7;
          background: #f5faff;
        }

        .find-icon {
          width: 62px;
          height: 62px;
          border-radius: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e8f5ff;
          color: #1687dc;
          font-size: 27px;
          margin-bottom: 20px;
        }

        .find-title {
          margin: 0 0 13px;
          color: #101b30;
          font-size: 30px;
          font-weight: 800;
        }

        .find-text {
          margin: 0;
          color: #61788e;
          font-size: 15px;
          line-height: 1.8;
        }

        .find-list {
          list-style: none;
          margin: 25px 0 0;
          padding: 0;
        }

        .find-list li {
          display: flex;
          gap: 11px;
          margin-bottom: 13px;
          color: #526d86;
          font-size: 14px;
        }

        .find-list i {
          color: #1687dc;
        }

        .find-map {
          min-height: 390px;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid #dcebf7;
          box-shadow: 0 14px 35px rgba(32, 93, 132, 0.08);
        }

        .find-map iframe {
          width: 100%;
          height: 100%;
          min-height: 390px;
          border: 0;
          display: block;
        }

        /* =========================================
           CTA
        ========================================= */

        .contact-cta {
          padding: 85px 0;
          background: #f5faff;
        }

        .cta-box {
          position: relative;
          overflow: hidden;
          width: min(1120px, 92%);
          margin: auto;
          padding: 55px;
          border-radius: 28px;
          background: linear-gradient(135deg, #0e3458, #1687dc);
          color: #ffffff;
          text-align: center;
          box-shadow: 0 20px 50px rgba(18, 111, 176, 0.18);
        }

        .cta-box::before {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 50%;
          right: -90px;
          top: -120px;
        }

        .cta-box::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          left: -100px;
          bottom: -130px;
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-title {
          margin: 0;
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1.2;
          font-weight: 800;
        }

        .cta-text {
          max-width: 680px;
          margin: 14px auto 25px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 15px;
          line-height: 1.8;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 23px;
          border-radius: 12px;
          background: #ffffff;
          color: #1687dc;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
          transition: 0.2s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          background: #edf8ff;
          color: #087bc9;
        }

        /* =========================================
           WHATSAPP
        ========================================= */

        .whatsapp-button {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 1000;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #25d366;
          color: #ffffff;
          text-decoration: none;
          font-size: 27px;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
          transition: 0.2s ease;
        }

        .whatsapp-button:hover {
          transform: translateY(-4px) scale(1.03);
          color: #ffffff;
        }

        /* =========================================
           RESPONSIVE
        ========================================= */

        @media (max-width: 1000px) {
          .hero-inner {
            grid-template-columns: 1fr;
          }

          .hero-image {
            max-width: 650px;
          }

          .branches-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .branches-grid .branch-card:last-child {
            grid-column: 1 / -1;
            width: calc(50% - 11px);
            margin: auto;
          }

          .find-wrapper {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .contact-hero {
            min-height: auto;
          }

          .hero-inner {
            width: 90%;
            padding: 55px 0 70px;
          }

          .hero-title {
            font-size: 43px;
          }

          .hero-image {
            height: 250px;
          }

          .quick-section {
            margin-top: 0;
            padding-top: 20px;
          }

          .quick-grid {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 60px 0;
          }

          .branches-grid {
            grid-template-columns: 1fr;
          }

          .branches-grid .branch-card:last-child {
            grid-column: auto;
            width: auto;
          }

          .branch-card {
            padding: 23px;
          }

          .find-content {
            padding: 28px;
          }

          .cta-box {
            padding: 40px 24px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 37px;
          }

          .hero-description {
            font-size: 15px;
          }

          .section-title {
            font-size: 31px;
          }

          .branch-name {
            font-size: 21px;
          }

          .map-wrapper {
            height: 220px;
          }

          .whatsapp-button {
            right: 17px;
            bottom: 17px;
          }
        }
      `}</style>

      {/* =========================================
          HERO
      ========================================= */}

      <section className="contact-hero">
        <div className="hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="hero-label">
              Contact CIIT
            </div>

            <h1 className="hero-title">
              Let's Connect
              <br />
              With <span>CIIT</span>
            </h1>

            <p className="hero-description">
              Have questions about courses, admissions, classroom training or
              career opportunities? Connect with CIIT and visit one of our
              training centres.
            </p>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
              alt="CIIT Training"
            />
          </motion.div>
        </div>
      </section>

      {/* =========================================
          QUICK CONTACT
      ========================================= */}

      <section className="quick-section">
        <div className="quick-grid">
          {quickContacts.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              className="quick-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >
              <div className="quick-icon">
                <i className={`bi ${item.icon}`} />
              </div>

              <div>
                <p className="quick-title">{item.title}</p>
                <p className="quick-text">{item.text}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* =========================================
          OUR BRANCHES
      ========================================= */}

      <section className="section branches-section" id="branches">
        <div className="section-heading">
          <div className="section-label">Our Branches</div>

          <h2 className="section-title">
            Visit Our Branches
          </h2>

          <p className="section-description">
            Connect with CIIT at our training centres for course counselling,
            admissions, classroom training and career guidance.
          </p>

          <div className="section-line" />
        </div>

        <div className="branches-grid">
          {branches.map((branch, index) => (
            <motion.div
              className="branch-card"
              key={branch.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              {/* Branch Header */}
              <div className="branch-top">
                <div className="branch-icon">
                  <i className={`bi ${branch.icon}`} />
                </div>

                <div>
                  <h3 className="branch-name">
                    {branch.name}
                  </h3>

                  <div className="branch-type">
                    {branch.type}
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="branch-info">
                <div className="branch-info-icon">
                  <i className="bi bi-geo-alt-fill" />
                </div>

                <p className="branch-info-text">
                  {branch.address}
                </p>
              </div>

              {/* Phone */}
              <div className="branch-info">
                <div className="branch-info-icon">
                  <i className="bi bi-telephone-fill" />
                </div>

                <p className="branch-info-text">
                  <strong>Contact:</strong>{" "}
                  <span className="phone-links">
                    {branch.phones.map((phone, phoneIndex) => (
                      <span key={phone}>
                        {phoneIndex > 0 && " / "}

                        <a
                          className="phone-link"
                          href={`tel:${phone}`}
                        >
                          {phone}
                        </a>
                      </span>
                    ))}
                  </span>
                </p>
              </div>

              {/* Email */}
              <div className="branch-info">
                <div className="branch-info-icon">
                  <i className="bi bi-envelope-fill" />
                </div>

                <p className="branch-info-text">
                  {branch.emails.map((email, emailIndex) => (
                    <span key={email}>
                      {emailIndex > 0 && " / "}

                      <a
                        className="phone-link"
                        href={`mailto:${email}`}
                      >
                        {email}
                      </a>
                    </span>
                  ))}
                </p>
              </div>

              {/* Map Button */}
              <a
                href={branch.mapLink}
                target="_blank"
                rel="noreferrer"
                className="branch-map-button"
              >
                <i className="bi bi-map" />
                Open in Maps
                <i className="bi bi-box-arrow-up-right" />
              </a>

              {/* Map */}
              <div className="map-wrapper">
                <iframe
                  src={branch.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${branch.name} CIIT location`}
                />

                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="map-open-overlay"
                >
                  <i className="bi bi-arrows-fullscreen" />
                  Open
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================
          FIND US
      ========================================= */}

      <section className="section find-section">
        <div className="section-heading">
          <div className="section-label">Find CIIT</div>

          <h2 className="section-title">
            Find Us Easily
          </h2>

          <p className="section-description">
            Visit the CIIT training centre nearest to you and meet our team
            for course guidance and admissions.
          </p>

          <div className="section-line" />
        </div>

        <div className="find-wrapper">
          <motion.div
            className="find-content"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="find-icon">
              <i className="bi bi-pin-map-fill" />
            </div>

            <h3 className="find-title">
              Visit CIIT
            </h3>

            <p className="find-text">
              Our training centres are designed to provide practical,
              instructor-led learning and career-focused guidance for students
              and working professionals.
            </p>

            <ul className="find-list">
              <li>
                <i className="bi bi-check-circle-fill" />
                Practical classroom training
              </li>

              <li>
                <i className="bi bi-check-circle-fill" />
                Course counselling and guidance
              </li>

              <li>
                <i className="bi bi-check-circle-fill" />
                Career and placement support
              </li>

              <li>
                <i className="bi bi-check-circle-fill" />
                Classroom and professional programs
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="find-map"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src={branches[0].mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CIIT Training Institute location"
            />
          </motion.div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}

      <section className="contact-cta">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Start Learning?
            </h2>

            <p className="cta-text">
              Explore CIIT courses and choose the right technology program
              for your career goals.
            </p>

            <a href="/courses" className="cta-button">
              Explore Courses
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          WHATSAPP
      ========================================= */}

      <a
        href="https://wa.me/917028565830"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp" />
      </a>
    </div>
  );
}