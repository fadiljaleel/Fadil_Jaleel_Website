export interface Certificate {
  title: string;
  pdf?: string; // path to PDF in public/certificates (optional)
  image?: string; // path to image in public/certificates (preferred)
  externalLink: string; // e.g. Coursera link
  thumbnail?: string; // optional image preview
}

export const certificates: Certificate[] = [
  {
    title: "AI Engineer for Data Scientists Associate certificate",
    image: "/certificates/AEDS0016099158007.jpg",
    externalLink: "https://www.datacamp.com/certificate/AEDS0016099158007"
  },
  {
    title: "AI For Everyone",
    image: "/certificates/W1IFH5VWS3DN.jpg",
    externalLink: "https://www.coursera.org/verify/W1IFH5VWS3DN"
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    image: "/certificates/56NVF144TLRW.jpg",
    externalLink: "https://www.coursera.org/verify/56NVF144TLRW"
  },
  {
    title: "Advanced Learning Algorithms",
    image: "/certificates/WMBFPCNNQVQS.jpg",
    externalLink: "https://www.coursera.org/verify/WMBFPCNNQVQS"
  },
  {
    title: "Machine Learning Specialization",
    image: "/certificates/A2OL55Y1P7P1.jpg",
    externalLink: "https://coursera.org/verify/specialization/A2OL55Y1P7P1"
  },
  {
    title: "Retrieval Augmented Generation (RAG)",
    image: "/certificates/2519FIBBV8VK.jpg",
    externalLink: "https://coursera.org/verify/2519FIBBV8VK"
  },
  {
    title: "Sequence Models",
    image: "/certificates/FDOFXVNG04E3.jpg",
    externalLink: "https://coursera.org/verify/FDOFXVNG04E3"
  },
  {
    title: "Generative AI with Large Language Models",
    image: "/certificates/VUND8CNU76J8.jpg",
    externalLink: "https://coursera.org/verify/VUND8CNU76J8"
  },
  {
    title: "Transformer Models and BERT Model",
    image: "/certificates/6Y2R16ML87I8.jpg",
    externalLink: "https://coursera.org/verify/6Y2R16ML87I8"
  },
  {
    title: "Develop Generative AI Applications: Get Started",
    image: "/certificates/888URJK0Z1RU.jpg",
    externalLink: "https://coursera.org/verify/888URJK0Z1RU"
  },
  {
    title: "Build RAG Applications: Get Started",
    image: "/certificates/UL5TL52G2TV0.jpg",
    externalLink: "https://coursera.org/verify/UL5TL52G2TV0"
  }
];
