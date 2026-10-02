import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EnquiryModal from "./components/EnquiryModal/EnquiryModal";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import CareerPrograms from "./pages/CareerPrograms/CareerPrograms";
import Placements from "./pages/Placements/Placements";

/* =====================================================
   COURSES
===================================================== */

import Courses from "./pages/Courses/Courses";

/* =====================================================
   FULL STACK DEVELOPMENT
===================================================== */

import FullStackCourses from "./pages/Courses/FullStack/FullStackCourses";
import DataScienceCourses from "./pages/Courses/DataScience/DataScienceCourses";
import CloudDevOpsCourses from "./pages/Courses/CloudDevOps/CloudDevOpsCourses";
import SoftwareTestingCourses from "./pages/Courses/SoftwareTesting/SoftwareTestingCourses";
import DatabaseCourses from "./pages/Courses/Database/DatabaseCourses";
import DigitalMarketingCourses from "./pages/Courses/DigitalMarketing/DigitalMarketingCourses";
import ShortTermCourses from "./pages/Courses/ShortTerm/ShortTermCourses";

/* =====================================================
   DOT NET FULL STACK COURSES
===================================================== */

import DotNetFullStack from "./pages/Courses/DotNetFullStack/fullstackdevelopmentaianddevops";
import FullStackDevelopmentAzureDevOps from "./pages/Courses/DotNetFullStack/fullstackdevelopmentazuredevops";
import DotNetCore from "./pages/Courses/DotNetFullStack/dotnetcore";
import FullStackDevelopment from "./pages/Courses/DotNetFullStack/fullstackdevelopment";
import DotNetCoreWithAngular from "./pages/Courses/DotNetFullStack/dotnetcorewithangular";
import DotNetCoreWithReact from "./pages/Courses/DotNetFullStack/dotnetcorewithreact";

/* =====================================================
   JAVA FULL STACK
===================================================== */

import JavaFullStackDevelopment from "./pages/Courses/JavaFullStack/fullstackdevelopment";
import FullStackDevelopmentAWSDevOps from "./pages/Courses/JavaFullStack/fullStackdevelopmentawsdevops";
import FullStackDevelopmentAIAndDevOps from "./pages/Courses/JavaFullStack/fullstackdevelopmentaianddevops";
import AdvanceJava from "./pages/Courses/JavaFullStack/advancejava";
import SpringBootWithReact from "./pages/Courses/JavaFullStack/springbootwithreact";
import SpringBootWithAngular from "./pages/Courses/JavaFullStack/springbootwithangular";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />

      {/* Enquiry Popup */}
      <EnquiryModal />

      <main>
        <Routes>

          {/* =====================================================
              MAIN PAGES
          ===================================================== */}

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/career-programs" element={<CareerPrograms />}/>
          <Route path="/placements" element={<Placements />}/>


          {/* =====================================================
              FULL STACK DEVELOPMENT
          ===================================================== */}

          <Route
            path="/courses/full-stack"
            element={<FullStackCourses />}
          />
          <Route
            path="/courses/data-science"
            element={<DataScienceCourses />}
          />
          <Route
            path="/courses/cloud-devops"
            element={<CloudDevOpsCourses />}
          />
          <Route
            path="/courses/software-testing"
            element={<SoftwareTestingCourses />}
          />
          <Route
            path="/courses/database"
            element={<DatabaseCourses />}
          />
          <Route
            path="/courses/digital-marketing"
            element={<DigitalMarketingCourses />}
          />
          <Route
            path="/courses/short-term"
            element={<ShortTermCourses />}
          />


          {/* =====================================================
              DOT NET COURSES
          ===================================================== */}

          <Route
            path="/courses/dotnetfullstack/fullstackdevelopmentaianddevops"
            element={<DotNetFullStack />}
          />

          <Route
            path="/courses/dotnet/fullstackdevelopmentazuredevops"
            element={<FullStackDevelopmentAzureDevOps />}
          />

          <Route
            path="/courses/dotnet/dotnetcore"
            element={<DotNetCore />}
          />

          <Route
            path="/courses/dotnet/fullstackdevelopment"
            element={<FullStackDevelopment />}
          />

          <Route
            path="/courses/dotnet/dotnetcorewithangular"
            element={<DotNetCoreWithAngular />}
          />

          <Route
            path="/courses/dotnet/dotnetcorewithreact"
            element={<DotNetCoreWithReact />}
          />


          {/* =====================================================
              JAVA COURSES
          ===================================================== */}

          <Route
            path="/courses/java/fullstackdevelopment"
            element={<JavaFullStackDevelopment />}
          />

          <Route
            path="/courses/java/advancejava"
            element={<AdvanceJava />}
          />

          <Route
            path="/courses/java/fullstackdevelopmentawsdevops"
            element={<FullStackDevelopmentAWSDevOps />}
          />

          <Route
            path="/courses/java/fullstackdevelopmentaianddevops"
            element={<FullStackDevelopmentAIAndDevOps />}
          />

          <Route
            path="/courses/java/springbootwithreact"
            element={<SpringBootWithReact />}
          />

          <Route
            path="/courses/java/springbootwithangular"
            element={<SpringBootWithAngular />}
          />

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;