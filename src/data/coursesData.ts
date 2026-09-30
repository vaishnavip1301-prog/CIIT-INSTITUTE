export interface Course {
  id: string;
  title: string;
  category: string;
  pathway: string;
  shortDescription: string;
  duration: string;
  mode: string;
  image: string;
  slug: string;
}

export const courses: Course[] = [
  {
    id: "dotnet",
    title: ".NET Full Stack",
    category: "Technical",
    pathway: "Development & Full Stack",
    shortDescription:
      "Learn modern .NET development with practical projects and full stack concepts.",
    duration: "4 - 6 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    slug: "dotNetFullStack",
  },

  {
    id: "java",
    title: "Java Full Stack",
    category: "Technical",
    pathway: "Development & Full Stack",
    shortDescription:
      "Build strong Java programming and full stack development skills through practical learning.",
    duration: "4 - 6 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    slug: "javaFullStack",
  },

  {
    id: "python",
    title: "Python Full Stack",
    category: "Technical",
    pathway: "Development & Full Stack",
    shortDescription:
      "Learn Python, web development, databases and full stack application development.",
    duration: "4 - 6 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    slug: "pythonFullStack",
  },

  {
    id: "mern",
    title: "MERN Stack",
    category: "Technical",
    pathway: "Development & Full Stack",
    shortDescription:
      "Master MongoDB, Express, React and Node.js to build modern web applications.",
    duration: "4 - 6 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    slug: "mernStack",
  },

  {
    id: "mean",
    title: "MEAN Stack",
    category: "Technical",
    pathway: "Development & Full Stack",
    shortDescription:
      "Learn MongoDB, Express, Angular and Node.js with hands-on application development.",
    duration: "4 - 6 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    slug: "meanStack",
  },

  {
    id: "devops",
    title: "DevOps",
    category: "Technical",
    pathway: "Cloud & DevOps",
    shortDescription:
      "Learn DevOps practices, automation, CI/CD, containers and cloud technologies.",
    duration: "3 - 5 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    slug: "devOps",
  },

  {
    id: "testing",
    title: "Software Testing",
    category: "Technical",
    pathway: "Software Testing & QA",
    shortDescription:
      "Build practical software testing knowledge including manual and automation testing.",
    duration: "3 - 5 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
    slug: "softwareTesting",
  },

  {
    id: "dataScience",
    title: "Data Science",
    category: "Technical",
    pathway: "Data Science & AI",
    shortDescription:
      "Learn Python, data analysis, visualization and machine learning concepts.",
    duration: "4 - 6 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    slug: "dataScience",
  },

  {
    id: "dataAnalyst",
    title: "Data Analyst",
    category: "Technical",
    pathway: "Data Science & AI",
    shortDescription:
      "Learn Excel, SQL, Power BI and data visualization for analytics roles.",
    duration: "3 - 5 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    slug: "dataAnalyst",
  },

  {
    id: "powerBI",
    title: "Power BI",
    category: "Technical",
    pathway: "Data Science & AI",
    shortDescription:
      "Learn Power BI, dashboards, data modelling, DAX and business intelligence.",
    duration: "2 - 4 Months",
    mode: "Classroom / Online",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    slug: "powerBI",
  },

  {
    id: "nodejs",
    title: "Node.js",
    category: "Technical",
    pathway: "Development & Full Stack",
    shortDescription:
      "Learn server-side JavaScript development and build scalable web applications.",
    duration: "2 - 4 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    slug: "nodeJs",
  },

  {
    id: "angular",
    title: "Angular",
    category: "Technical",
    pathway: "Development & Full Stack",
    shortDescription:
      "Build modern single-page applications using Angular and TypeScript.",
    duration: "2 - 4 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    slug: "angular",
  },

  {
    id: "digitalMarketing",
    title: "Digital Marketing",
    category: "Business",
    pathway: "Other Programs",
    shortDescription:
      "Learn digital marketing concepts, SEO, social media and online marketing strategies.",
    duration: "2 - 4 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    slug: "digitalMarketing",
  },

  {
    id: "cpp",
    title: "C, C++ & Data Structures",
    category: "Technical",
    pathway: "Development & Full Stack",
    shortDescription:
      "Build programming fundamentals and problem solving skills using C and C++.",
    duration: "2 - 4 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    slug: "cCppDataStructures",
  },

  {
    id: "internship",
    title: "Industry Internship",
    category: "Other Programs",
    pathway: "Other Programs",
    shortDescription:
      "Get practical exposure through structured internship and project-based learning.",
    duration: "1 - 6 Months",
    mode: "Classroom / Online",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    slug: "internship",
  },

  {
    id: "corporate",
    title: "Corporate Training",
    category: "Business",
    pathway: "Other Programs",
    shortDescription:
      "Customized technology training programs for corporate teams and organizations.",
    duration: "Customized",
    mode: "Corporate",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    slug: "corporateTraining",
  },

  {
    id: "excel",
    title: "Advanced Excel",
    category: "Business",
    pathway: "Data Science & AI",
    shortDescription:
      "Learn advanced Excel, formulas, functions, dashboards, pivot tables and automation.",
    duration: "1 - 3 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    slug: "advancedExcel",
  },

  {
    id: "dba",
    title: "Database Administration",
    category: "Technical",
    pathway: "Development & Full Stack",
    shortDescription:
      "Learn database concepts, administration, security, backup and performance.",
    duration: "3 - 5 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    slug: "databaseAdministration",
  },

  {
    id: "php",
    title: "PHP Development",
    category: "Technical",
    pathway: "Development & Full Stack",
    shortDescription:
      "Learn PHP development, databases and web application development.",
    duration: "2 - 4 Months",
    mode: "Classroom / Online",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    slug: "phpDevelopment",
  },

  {
    id: "graphics",
    title: "Graphics Design",
    category: "Business",
    pathway: "Other Programs",
    shortDescription:
      "Learn design fundamentals and modern tools used for creative digital work.",
    duration: "2 - 4 Months",
    mode: "Classroom / Online",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=85",
    slug: "graphicsDesign",
  },
];