import { Link, useParams } from "react-router-dom";
import { courses } from "../../data/coursesData";

export default function CourseDetails() {
  const { slug } = useParams();

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5faff",
          fontFamily:
            'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div className="text-center">
          <h2 className="fw-bold">Course Not Found</h2>

          <Link
            to="/courses"
            className="btn btn-primary mt-3"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="ciit-course-details">
      <style>{`
        .ciit-course-details {
          min-height: 100vh;
          background: #f5faff;
          color: #18324b;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .course-detail-hero {
          padding: 100px 0 80px;
          background:
            radial-gradient(circle at 85% 15%, rgba(22, 135, 220, .14), transparent 30%),
            linear-gradient(135deg, #ffffff, #edf8ff);
        }

        .detail-badge {
          display: inline-block;
          background: #e8f5ff;
          color: #1687dc;
          padding: 8px 13px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .detail-title {
          font-size: clamp(2.8rem, 5vw, 4.8rem);
          line-height: 1;
          letter-spacing: -3px;
          font-weight: 850;
          color: #101b30;
          margin-top: 20px;
        }

        .detail-text {
          color: #647489;
          font-size: 17px;
          line-height: 1.85;
          max-width: 700px;
          margin-top: 22px;
        }

        .detail-image {
          min-height: 320px;
          border-radius: 30px;
          background: white;
          border: 1px solid #dcebf7;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 55px;
          box-shadow: 0 20px 55px rgba(25, 85, 125, .08);
        }

        .detail-image img {
          max-width: 210px;
          max-height: 190px;
        }

        .detail-section {
          padding: 80px 0;
        }

        .detail-card {
          background: white;
          border: 1px solid #dcebf7;
          border-radius: 22px;
          padding: 28px;
          height: 100%;
        }

        .detail-card h3 {
          font-size: 20px;
          font-weight: 800;
          color: #14253a;
        }

        .detail-card p,
        .detail-card li {
          color: #68798d;
          line-height: 1.8;
        }

        .back-link {
          text-decoration: none;
          color: #1687dc;
          font-weight: 750;
        }
      `}</style>

      <section className="course-detail-hero">
        <div className="container">
          <Link to="/courses" className="back-link">
            <i className="bi bi-arrow-left me-2"></i>
            All Courses
          </Link>

          <div className="row align-items-center g-5 mt-2">
            <div className="col-lg-7">
              <div className="detail-badge">
                {course.category}
              </div>

              <h1 className="detail-title">
                {course.title}
              </h1>

              <p className="detail-text">
                {course.shortDescription}
              </p>

              <div className="d-flex flex-wrap gap-2 mt-4">
                <span className="badge bg-white text-dark border p-3">
                  <i className="bi bi-clock me-2"></i>
                  {course.duration}
                </span>

                <span className="badge bg-white text-dark border p-3">
                  <i className="bi bi-laptop me-2"></i>
                  {course.mode}
                </span>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="detail-image">
                <img src={course.image} alt={course.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="detail-card">
                <h3>
                  <i className="bi bi-book me-2 text-primary"></i>
                  What You Learn
                </h3>

                <ul className="mt-3">
                  <li>Core concepts and fundamentals</li>
                  <li>Industry-oriented technologies</li>
                  <li>Hands-on practical exercises</li>
                  <li>Real-world project concepts</li>
                  <li>Interview preparation</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="detail-card">
                <h3>
                  <i className="bi bi-laptop me-2 text-primary"></i>
                  Practical Learning
                </h3>

                <p className="mt-3">
                  Learn by practising concepts through exercises,
                  projects and technology-focused activities.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="detail-card">
                <h3>
                  <i className="bi bi-briefcase me-2 text-primary"></i>
                  Career Focus
                </h3>

                <p className="mt-3">
                  Build technology knowledge and practical skills
                  that can support your professional development.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link
              to="/contact"
              className="btn btn-primary px-4 py-3 fw-bold"
            >
              Enquire About This Course
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}