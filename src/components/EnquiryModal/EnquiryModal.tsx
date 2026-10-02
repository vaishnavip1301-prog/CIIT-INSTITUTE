import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function EnquiryModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Open after 20 seconds
 useEffect(() => {
  const timer = window.setTimeout(() => {
    setOpen(true);
  }, 10000);

  return () => window.clearTimeout(timer);
}, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSubmitted(false);
  };

  return (
    <>
      <style>{`
        .ciit-enquiry-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
          background: rgba(7, 30, 50, 0.68);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          overflow-y: auto;
        }

        .ciit-enquiry-modal {
          width: min(510px, 100%);
          max-height: calc(100vh - 40px);
          background: #ffffff;
          border-radius: 22px;
          overflow: hidden;
          box-shadow:
            0 30px 80px rgba(7, 52, 87, 0.28),
            0 10px 30px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.8);
          display: flex;
          flex-direction: column;
        }

        .ciit-enquiry-header {
          position: relative;
          flex-shrink: 0;
          padding: 22px 26px;
          color: #ffffff;
          background:
            radial-gradient(circle at 100% 0%, rgba(255,255,255,0.18), transparent 32%),
            radial-gradient(circle at 0% 100%, rgba(255,255,255,0.12), transparent 28%),
            linear-gradient(135deg, #075b99 0%, #087bc9 48%, #1598e7 100%);
          overflow: hidden;
        }

        .ciit-enquiry-header::before {
          content: "";
          position: absolute;
          width: 120px;
          height: 120px;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 50%;
          right: -55px;
          top: -65px;
        }

        .ciit-enquiry-header::after {
          content: "";
          position: absolute;
          width: 75px;
          height: 75px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          left: -30px;
          bottom: -42px;
        }

        .ciit-enquiry-header-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 14px;
          padding-right: 35px;
        }

        .ciit-enquiry-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 21px;
          color: #ffffff;
          background: rgba(255,255,255,0.16);
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.18);
        }

        .ciit-enquiry-title {
          margin: 0;
          font-size: 21px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.4px;
        }

        .ciit-enquiry-subtitle {
          margin: 5px 0 0;
          font-size: 12.5px;
          line-height: 1.5;
          font-weight: 500;
          color: rgba(255,255,255,0.88);
        }

        .ciit-enquiry-close {
          position: absolute;
          top: 17px;
          right: 18px;
          z-index: 5;
          width: 36px;
          height: 36px;
          border: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          background: rgba(255,255,255,0.13);
          font-size: 19px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .ciit-enquiry-close:hover {
          background: rgba(255,255,255,0.25);
          transform: rotate(90deg) scale(1.05);
        }

        .ciit-enquiry-body {
          overflow-y: auto;
          padding: 22px 26px 24px;
          background: #ffffff;
        }

        .ciit-enquiry-body::-webkit-scrollbar {
          width: 5px;
        }

        .ciit-enquiry-body::-webkit-scrollbar-track {
          background: #f3f8fc;
        }

        .ciit-enquiry-body::-webkit-scrollbar-thumb {
          background: #b8d9ee;
          border-radius: 10px;
        }

        .ciit-form-group {
          margin-bottom: 14px;
        }

        .ciit-form-label {
          display: block;
          margin-bottom: 7px;
          color: #102b43;
          font-size: 12px;
          font-weight: 800;
        }

        .ciit-input-wrapper {
          position: relative;
        }

        .ciit-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #1687dc;
          font-size: 15px;
          pointer-events: none;
          z-index: 2;
        }

        .ciit-form-input,
        .ciit-form-select,
        .ciit-form-textarea {
          width: 100%;
          border: 1px solid #d6e7f3;
          outline: none;
          background: #fbfdff;
          color: #18324b;
          font-family: inherit;
          font-size: 13px;
          border-radius: 11px;
          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease;
          box-sizing: border-box;
        }

        .ciit-form-input,
        .ciit-form-select {
          height: 43px;
          padding: 0 13px 0 39px;
        }

        .ciit-form-textarea {
          min-height: 86px;
          resize: vertical;
          padding: 12px 13px;
          line-height: 1.55;
        }

        .ciit-form-input::placeholder,
        .ciit-form-textarea::placeholder {
          color: #9bb2c5;
        }

        .ciit-form-input:focus,
        .ciit-form-select:focus,
        .ciit-form-textarea:focus {
          border-color: #168fe1;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(22, 143, 225, 0.10);
          transform: translateY(-1px);
        }

        .ciit-select-wrapper {
          position: relative;
        }

        .ciit-select-arrow {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #1687dc;
          pointer-events: none;
          font-size: 13px;
        }

        .ciit-form-select {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          padding-right: 38px;
        }

        .ciit-submit-btn {
          width: 100%;
          height: 47px;
          margin-top: 5px;
          border: 0;
          border-radius: 12px;
          color: #ffffff;
          background: linear-gradient(135deg, #087bc9, #168fe1);
          font-family: inherit;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          box-shadow: 0 9px 22px rgba(8, 123, 201, 0.22);
          transition: all 0.25s ease;
        }

        .ciit-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 13px 28px rgba(8, 123, 201, 0.30);
        }

        .ciit-submit-btn:active {
          transform: translateY(0);
        }

        .ciit-success {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px 20px;
        }

        .ciit-success-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e7f7ef;
          color: #20a36a;
          font-size: 32px;
          margin-bottom: 18px;
          box-shadow: 0 10px 28px rgba(32, 163, 106, 0.14);
        }

        .ciit-success h3 {
          margin: 0 0 8px;
          color: #102b43;
          font-size: 21px;
          font-weight: 800;
        }

        .ciit-success p {
          max-width: 330px;
          margin: 0 0 22px;
          color: #6d8293;
          font-size: 13px;
          line-height: 1.7;
        }

        .ciit-success-btn {
          border: 0;
          padding: 11px 25px;
          border-radius: 10px;
          background: #1687dc;
          color: white;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
        }

        @media (max-width: 575px) {
          .ciit-enquiry-overlay {
            padding: 14px;
            align-items: center;
          }

          .ciit-enquiry-modal {
            max-height: calc(100vh - 28px);
            border-radius: 18px;
          }

          .ciit-enquiry-header {
            padding: 18px 18px;
          }

          .ciit-enquiry-body {
            padding: 18px 18px 20px;
          }

          .ciit-enquiry-title {
            font-size: 18px;
          }

          .ciit-enquiry-subtitle {
            font-size: 11.5px;
          }

          .ciit-enquiry-icon {
            width: 43px;
            height: 43px;
            font-size: 18px;
          }

          .ciit-form-group {
            margin-bottom: 12px;
          }
        }
      `}</style>

      <AnimatePresence>
        {open && (
          <motion.div
            className="ciit-enquiry-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            <motion.div
              className="ciit-enquiry-modal"
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 45,
                rotateX: 8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotateX: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 25,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* ================= HEADER ================= */}
              <div className="ciit-enquiry-header">
                <div className="ciit-enquiry-header-content">
                  <motion.div
                    className="ciit-enquiry-icon"
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.18,
                      duration: 0.45,
                      type: "spring",
                      stiffness: 220,
                    }}
                  >
                    <i className="bi bi-chat-dots-fill"></i>
                  </motion.div>

                  <div>
                    <motion.h2
                      className="ciit-enquiry-title"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12, duration: 0.35 }}
                    >
                      Enquire With CIIT
                    </motion.h2>

                    <motion.p
                      className="ciit-enquiry-subtitle"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.35 }}
                    >
                      Start your learning journey with CIIT.
                    </motion.p>
                  </div>
                </div>

                <button
                  type="button"
                  className="ciit-enquiry-close"
                  onClick={closeModal}
                  aria-label="Close enquiry form"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              {/* ================= BODY ================= */}
              {submitted ? (
                <motion.div
                  className="ciit-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="ciit-success-icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <i className="bi bi-check-lg"></i>
                  </motion.div>

                  <h3>Thank You!</h3>

                  <p>
                    Your enquiry has been submitted successfully.
                    Our CIIT team will contact you soon.
                  </p>

                  <button
                    type="button"
                    className="ciit-success-btn"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  className="ciit-enquiry-body"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.4 }}
                >
                  <form onSubmit={handleSubmit}>
                    {/* NAME */}
                    <div className="ciit-form-group">
                      <label className="ciit-form-label">
                        Name
                      </label>

                      <div className="ciit-input-wrapper">
                        <i className="bi bi-person ciit-input-icon"></i>

                        <input
                          type="text"
                          name="name"
                          className="ciit-form-input"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>

                    {/* CONTACT */}
                    <div className="ciit-form-group">
                      <label className="ciit-form-label">
                        Contact
                      </label>

                      <div className="ciit-input-wrapper">
                        <i className="bi bi-telephone ciit-input-icon"></i>

                        <input
                          type="tel"
                          name="contact"
                          className="ciit-form-input"
                          placeholder="Enter your contact number"
                          required
                        />
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div className="ciit-form-group">
                      <label className="ciit-form-label">
                        Email
                      </label>

                      <div className="ciit-input-wrapper">
                        <i className="bi bi-envelope ciit-input-icon"></i>

                        <input
                          type="email"
                          name="email"
                          className="ciit-form-input"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    {/* TRAINING TYPE */}
                    <div className="ciit-form-group">
                      <label className="ciit-form-label">
                        Training Type
                      </label>

                      <div className="ciit-select-wrapper">
                        <i className="bi bi-mortarboard ciit-input-icon"></i>

                        <select
                          name="trainingType"
                          className="ciit-form-select"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select training type
                          </option>

                          <option value="Online">
                            Online
                          </option>

                          <option value="Offline">
                            Offline
                          </option>
                        </select>

                        <i className="bi bi-chevron-down ciit-select-arrow"></i>
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="ciit-form-group">
                      <label className="ciit-form-label">
                        Description
                      </label>

                      <textarea
                        name="description"
                        className="ciit-form-textarea"
                        placeholder="Tell us about your requirement..."
                        rows={3}
                      ></textarea>
                    </div>

                    {/* SUBMIT */}
                    <motion.button
                      type="submit"
                      className="ciit-submit-btn"
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Submit Enquiry</span>
                      <i className="bi bi-arrow-right"></i>
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}