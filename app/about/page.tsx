"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Award, Briefcase } from 'lucide-react'
import { SocialLinks } from "@/components/social-links"
import { CertificatesGrid } from "@/components/certificates-grid"

const achievements = [
  {
    icon: Award,
    title: "Achievements & Certifications",
    items: [
      "• Meta Back-End Developer Specialization | Coursera (2026)",
      "• Advanced Django: Mastering Django & Django REST Framework | Coursera (2025)", 
      "• NACTET Certification: Big Data, AI, ML, & Data Science | Luminar Technolab | 2023",
      "• Reboot Kerala Hackathon | Transportation Department | 2021",
      "• CISCO Certified Network Associate (CCNA) (2021)",
      "• Google Data Analytics Professional Certificate | Coursera",
      "• IBM Data Analyst Professional Certificate | Coursera",
    ]
  },
  {
    icon: Briefcase,
    title: "Experience",
    items: [
      "• Python Full Stack Developer – Meta Scifor Technologies Pvt. Ltd., India (Jan 2024 – Jan 2025)\nDeveloped a high-performance Athlete Management System (AMS) with RBAC for multiple user tiers. Optimized MySQL schemas and integrated reporting modules, improving data flow efficiency by 30%.",
      "• Python Full Stack Developer – Edgewave Academy LLP, India (May 2023 – Dec 2023)\nArchitected backend systems for LMS using Python/Django. Built secure authentication, payment workflows, Vimeo live session integration, and interactive frontend features.",
      "• Big Data & Data Science Intern – Luminar Technolab, India (Aug 2022 – Apr 2023)\nProcessed large datasets using Hadoop/Hive, built ML models, and created dashboards in Tableau & Power BI for business insights."
    ]
  }
]

const skills = [
  "Python",
  "Django",
  "Django REST Framework",
  "Flask",
  "Machine Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Data Science",
  "SQL / MySQL / PostgreSQL",
  "Power BI",
  "Tableau",
  "API Development",
  "Frontend Development"
]

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-[280px_1fr]">
        {/* Left Column - Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Profile Image */}
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-foreground/20 animate-pulse" />
            <Image
              src="/images/about-page.webp"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-background relative z-10"
              priority
            />
          </div>

          {/* Social Links */}
          <Card>
            <CardContent className="p-6">
              <SocialLinks />
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
            <p className="text-xl text-muted-foreground text-justify leading-relaxed">
              Hello! I&apos;m an AI/ML Engineer passionate about developing innovative solutions that bridge the gap between technology and human interaction. With expertise in AI, machine learning, and software development, I&apos;ve worked on diverse projects ranging from natural language processing to computer vision applications.
            </p>
            <p className="text-muted-foreground text-justify leading-relaxed">
              My journey in AI was shaped by extensive learning through programs like Angela Yu&apos;s 100 Days of Code: The Complete Python Pro Bootcamp and Andrew Ng&apos;s Machine Learning Specialization. These experiences laid the foundation for impactful projects, including hand gesture control software that leverages computer vision for intuitive control and an object detection system designed for real-world applications.
            </p>
            <p className="text-muted-foreground text-justify leading-relaxed">
              When I&apos;m not building intelligent systems, I focus on open-source contributions, showcasing my projects on GitHub, and exploring the latest advancements in AI to create meaningful solutions.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement) => (
              <Card key={achievement.title}>
                <CardContent className="p-6">
                  <achievement.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-4">{achievement.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {achievement.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificates Section */}
      <CertificatesGrid />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Call to Action */}
          <Card className="bg-primary/10 border-none">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Interested in collaboration?</h3>
                  <p className="text-muted-foreground">Let&apos;s work together on your next AI project.</p>
                </div>
                <Button asChild>
                  <Link href="mailto:danialasimbashir@gmail.com">Get in Touch</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
