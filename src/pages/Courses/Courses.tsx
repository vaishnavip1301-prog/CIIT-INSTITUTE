import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { courses } from "../../data/coursesData";

export default function Courses() {
  return (
    <div className="ciit-courses">
      <style>{`
        .ciit-courses {
          min-height: 100vh;
          background: #f5faff;
          color: #18324b;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow: hidden;
        }

        .courses-hero {
          position: relative;
          padding: 95px 0 80px;
          background:
            radial-gradient(circle at 85% 20%, rgba(22, 135, 220, 0.14), transparent 28%),
            radial-gradient(circle at 10% 80%, rgba(22, 135, 220, 0.08), transparent 25%),
            linear-gradient(135deg, #ffffff 0%, #f3faff 55%, #eaf6ff 100%);
        }

        .courses-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 50px;
          background: #e9f5ff;
          color: #1687dc;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .courses-title {
          margin-top: 22px;
          font-size: clamp(2.8rem, 5vw, 5rem);
          line-height: .98;
          font-weight: 850;
          letter-spacing: -3px;
          color: #101b30;
        }

        .courses-title span {
          color: #1687dc;
        }

        .courses-description {
          max-width: 700px;
          margin-top: 25px;
          color: #59697e;
          font-size: 17px;
          line-height: 1.8;
        }

        .course-count {
          margin-top: 30px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid #dcebf7;
          color: #164a73;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(24, 80, 120, .06);
        }

        .courses-section {
          padding: 85px 0;
        }

        .section-label {
          color: #1687dc;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .section-heading {
          color: #101b30;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 12px;
        }

        .section-text {
          color: #66768a;
          line-height: 1.8;
          margin-bottom: 45px;
        }

        .course-card {
          height: 100%;
          background: #ffffff;
          border: 1px solid #dcebf7;
          border-radius: 24px;
          overflow: hidden;
          transition: all .3s ease;
          box-shadow: 0 10px 35px rgba(31, 91, 130, .05);
        }

        .course-card:hover {
          transform: translateY(-8px);
          border-color: #b9ddf5;
          box-shadow: 0 22px 50px rgba(31, 91, 130, .13);
        }

        .course-image-box {
          height: 185px;
          padding: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            linear-gradient(135deg, #f7fcff, #eaf6ff);
          border-bottom: 1px solid #e4f0f8;
        }

        .course-image {
          max-width: 125px;
          max-height: 110px;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        .course-content {
          padding: 25px;
        }

        .course-category {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 50px;
          background: #e9f5ff;
          color: #1687dc;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .5px;
          margin-bottom: 14px;
        }

        .course-title {
          font-size: 21px;
          font-weight: 800;
          color: #14253a;
          margin-bottom: 12px;
        }

        .course-description {
          color: #69798d;
          font-size: 14px;
          line-height: 1.7;
          min-height: 72px;
          margin-bottom: 20px;
        }

        .course-meta {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .course-meta span {
          font-size: 12px;
          color: #60748a;
          background: #f5faff;
          border: 1px solid #e2eef7;
          padding: 7px 9px;
          border-radius: 9px;
        }

        .course-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          background: linear-gradient(135deg, #087bc9, #168fe1);
          color: #ffffff;
          padding: 12px 15px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 750;
          transition: .25s ease;
        }

        .course-button:hover {
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(22, 135, 220, .22);
        }

        .course-button i {
          font-size: 17px;
        }

        .courses-cta {
          margin-top: 45px;
          padding: 55px;
          border-radius: 30px;
          background: linear-gradient(135deg, #0e3458, #1687dc);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .courses-cta h2 {
          font-weight: 800;
          letter-spacing: -1px;
        }

        .courses-cta p {
          color: rgba(255,255,255,.78);
          line-height: 1.8;
          max-width: 650px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 22px;
          border-radius: 12px;
          background: #ffffff;
          color: #12517e;
          text-decoration: none;
          font-weight: 800;
          margin-top: 15px;
        }

        @media (max-width: 767px) {
          .courses-hero {
            padding: 65px 0 55px;
          }

          .courses-title {
            letter-spacing: -2px;
          }

          .courses-section {
            padding: 55px 0;
          }

          .courses-cta {
            padding: 35px 25px;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="courses-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="courses-label">
              <i className="bi bi-mortarboard-fill"></i>
              CIIT TRAINING PROGRAMS
            </div>

            <h1 className="courses-title">
              Learn Skills.
              <br />
              Build Your <span>Career.</span>
            </h1>

            <p className="courses-description">
              Explore CIIT's practical technology training programs designed
              around industry skills, hands-on learning and project-based
              experience.
            </p>

            <div className="course-count">
              <i className="bi bi-grid-3x3-gap-fill"></i>
              {courses.length}+ Training Programs
            </div>
          </motion.div>
        </div>
      </section>

      {/* COURSES */}
      <section className="courses-section">
        <div className="container">
          <div className="section-label">Explore Programs</div>

          <h2 className="section-heading display-5">
            Choose Your Learning Path
          </h2>

          <p className="section-text">
            From full stack development and data science to DevOps,
            testing, analytics and professional programs, choose the
            learning path that matches your career goals.
          </p>

          <div className="row g-4">
            {courses.map((course, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={course.id}>
                <motion.div
                  className="course-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 4) * 0.08,
                  }}
                >
                  <div className="course-image-box">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="course-image"
                      loading="lazy"
                    />
                  </div>

                  <div className="course-content">
                    <div className="course-category">
                      {course.category}
                    </div>

                    <h3 className="course-title">
                      {course.title}
                    </h3>

                    <p className="course-description">
                      {course.shortDescription}
                    </p>

                    <div className="course-meta">
                      <span>
                        <i className="bi bi-clock me-1"></i>
                        {course.duration}
                      </span>

                      <span>
                        <i className="bi bi-laptop me-1"></i>
                        {course.mode}
                      </span>
                    </div>

                    <Link
                      to={`/courses/${course.slug}`}
                      className="course-button"
                    >
                      View Course
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="courses-cta">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2>Not sure which course is right for you?</h2>

                <p className="mb-0 mt-3">
                  Talk to the CIIT team and understand the suitable
                  learning path based on your education, skills and
                  career goals.
                </p>
              </div>

              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <Link to="/contact" className="cta-button">
                  Talk to CIIT
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}