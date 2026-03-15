export interface Certificate {
  title: string;
  pdf?: string; // path to PDF in public/certificates (optional)
  image?: string; // path to image in public/certificates (preferred)
  externalLink: string; // e.g. Coursera link
  thumbnail?: string; // optional image preview
}

export const certificates: Certificate[] = [
  {
    title: "Meta Web Development Fundamentals",
    image: "/certificates/ABCDEFG.jpg",
    externalLink: "https://www.coursera.org/specializations/meta-web-development-fundamentals"
  },
  {
    title: "Meta Back-End Developer (Coursera)",
    image: "/certificates/W1IFH5VWSABC.jpg",
    externalLink: "https://www.coursera.org/professional-certificates/meta-back-end-developer"
  },
  {
    title: "Advanced Django: Mastering Django and Django Rest Framework (Coursera)",
    image: "/certificates/56NVF144TLRW.jpg",
    externalLink: "https://www.coursera.org/specializations/codio-advanced-django-and-django-rest-framework"
  },
  {
    title: "Architecting with Google Compute Engine (Coursera)",
    image: "/certificates/WMBFPCNNQVAB.jpg",
    externalLink: "https://coursera.org/verify/specialization/QA5TQK325LXL"
  },
  {
    title: "Getting Started with AWS Machine Learning (Coursera)",
    image: "/certificates/A2OL55Y1P7AB.jpg",
    externalLink: "https://coursera.org/verify/4XXM7VRR375P"
  },
  {
    title: "NACTET certification in Data Science/Big Data/AI/ML/DL/TABLEAU",
    image: "/certificates/2519FIBBV8AB.jpg",
    externalLink: "https://coursera.org/verify/4XXM7VRR375P"
  },
  {
    title: "Reboot Kerala Hackathon (2021) - Transportation Department",
    image: "/certificates/FDOFXVNG04AB.jpg",
    externalLink: "https://coursera.org/verify/4XXM7VRR375P"
  },
  {
    title: "Google Data Analytics Professional (Coursera)",
    image: "/certificates/VUND8CNU76J8.jpg",
    externalLink: "https://www.coursera.org/professional-certificates/google-cloud-data-analytics-certificate"
  },
  {
    title: "IBM Data Analyst Professional (Coursera)",
    image: "/certificates/6Y2R16ML87I8.jpg",
    externalLink: "https://www.coursera.org/professional-certificates/ibm-data-analyst"
  },
  {
    title: "SQL for Data Science (Coursera)",
    image: "/certificates/888URJK0Z1RU.jpg",
    externalLink: "https://coursera.org/verify/888URJK0Z1RU"
  },
  {
    title: "Microsoft Power BI Data Analyst (Coursera)",
    image: "/certificates/UL5TL52G2TAB.jpg",
    externalLink: "https://coursera.org/verify/UL5TL52G2TV0"
  },
   {
    title: "Meta Data Analyst Professional (Coursera)",
    image: "/certificates/AWMBFPCNNQVQS.jpg",
    externalLink: "https://www.coursera.org/professional-certificates/meta-data-analyst"
  },
  {
    title: "Cisco Certified Network Associate",
    image: "/certificates/BWMBFPCNNQVQS.jpg",
    externalLink: "https://coursera.org/verify/UL5TL52G2TV0"
  }
];
