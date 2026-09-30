import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

/* =====================================================
   COURSES
===================================================== */

import Courses from "./pages/Courses/Courses";

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

// Java Full Stack - Main Page
import JavaFullStackDevelopment from "./pages/Courses/JavaFullStack/fullstackdevelopment";

// Java Full Stack + AWS + DevOps
import FullStackDevelopmentAWSDevOps from "./pages/Courses/JavaFullStack/fullStackdevelopmentawsdevops";

// Java Full Stack + AI + DevOps
import FullStackDevelopmentAIAndDevOps from "./pages/Courses/JavaFullStack/fullstackdevelopmentaianddevops";

// Advance Java
// IMPORTANT: Actual file name is advancejava.tsx
import AdvanceJava from "./pages/Courses/JavaFullStack/advancejava";

/* =====================================================
   FUTURE COURSES
===================================================== */

// import PythonFullStack from "./pages/Courses/PythonFullStack/PythonFullStack";
// import MernStack from "./pages/Courses/MernStack/MernStack";
// import MeanStack from "./pages/Courses/MeanStack/MeanStack";
// import DevOps from "./pages/Courses/DevOps/DevOps";
// import DataScience from "./pages/Courses/DataScience/DataScience";
// import PowerBI from "./pages/Courses/PowerBI/PowerBI";
// import AdvancedExcel from "./pages/Courses/AdvancedExcel/AdvancedExcel";
// import SoftwareTesting from "./pages/Courses/SoftwareTesting/SoftwareTesting";

/* =====================================================
   OTHER PAGES
===================================================== */

// import CareerPrograms from "./pages/CareerPrograms/CareerPrograms";
// import Placements from "./pages/Placements/Placements";
// import Events from "./pages/Events/Events";
// import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>

          {/* =================================================
              HOME
          ================================================= */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* =================================================
              ABOUT
          ================================================= */}

          <Route
            path="/about"
            element={<About />}
          />

          {/* =================================================
              COURSES MAIN PAGE
          ================================================= */}

          <Route
            path="/courses"
            element={<Courses />}
          />

          {/* =================================================
              DOT NET COURSES
          ================================================= */}

          {/* Dot Net Full Stack + AI + DevOps */}

          <Route
            path="/courses/dotnetfullstack/fullstackdevelopmentaianddevops"
            element={<DotNetFullStack />}
          />

          {/* Dot Net Full Stack + Azure DevOps */}

          <Route
            path="/courses/dotnet/fullstackdevelopmentazuredevops"
            element={<FullStackDevelopmentAzureDevOps />}
          />

          {/* Dot Net Core */}

          <Route
            path="/courses/dotnet/dotnetcore"
            element={<DotNetCore />}
          />

          {/* Dot Net Full Stack */}

          <Route
            path="/courses/dotnet/fullstackdevelopment"
            element={<FullStackDevelopment />}
          />

          {/* Dot Net Core With Angular */}

          <Route
            path="/courses/dotnet/dotnetcorewithangular"
            element={<DotNetCoreWithAngular />}
          />

          {/* Dot Net Core With React */}

          <Route
            path="/courses/dotnet/dotnetcorewithreact"
            element={<DotNetCoreWithReact />}
          />

          {/* =================================================
              JAVA FULL STACK COURSES
          ================================================= */}

          {/* Java Full Stack Development */}

          <Route
            path="/courses/java/fullstackdevelopment"
            element={<JavaFullStackDevelopment />}
          />

          {/* Advance Java */}

          <Route
            path="/courses/java/advancejava"
            element={<AdvanceJava />}
          />

          {/* Java Full Stack + AWS + DevOps */}

          <Route
            path="/courses/java/fullstackdevelopmentawsdevops"
            element={<FullStackDevelopmentAWSDevOps />}
          />

          {/* Java Full Stack + AI + DevOps */}

          <Route
            path="/courses/java/fullstackdevelopmentaianddevops"
            element={<FullStackDevelopmentAIAndDevOps />}
          />

          {/* =================================================
              FUTURE COURSES
          ================================================= */}

          {/*
          
          <Route
            path="/courses/pythonFullStack"
            element={<PythonFullStack />}
          />

          <Route
            path="/courses/mernStack"
            element={<MernStack />}
          />

          <Route
            path="/courses/meanStack"
            element={<MeanStack />}
          />

          <Route
            path="/courses/devOps"
            element={<DevOps />}
          />

          <Route
            path="/courses/dataScience"
            element={<DataScience />}
          />

          <Route
            path="/courses/powerBI"
            element={<PowerBI />}
          />

          <Route
            path="/courses/excel"
            element={<AdvancedExcel />}
          />

          <Route
            path="/courses/softwareTesting"
            element={<SoftwareTesting />}
          />

          */}

          {/* =================================================
              OTHER FUTURE PAGES
          ================================================= */}

          {/*
          
          <Route
            path="/career-programs"
            element={<CareerPrograms />}
          />

          <Route
            path="/placements"
            element={<Placements />}
          />

          <Route
            path="/events"
            element={<Events />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          */}

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

