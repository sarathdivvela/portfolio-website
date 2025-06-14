'use client';

import { motion } from 'framer-motion';
import { ArrowDownIcon, ArrowTopRightOnSquareIcon, AcademicCapIcon, BriefcaseIcon, DocumentIcon, EnvelopeIcon, PhoneIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faSolidEnvelope, faPhone as faSolidPhone, faFilePdf as faSolidFilePdf } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Link from 'next/link'; // Using next/link for smoother navigation
import Hero3D from '../components/Hero3D'; // Import the new 3D component

const projects = [
  {
    title: "Gold Price Analysis",
    description: "Developed a system to monitor gold price data feeds from multiple providers, swiftly switching to backups to maintain uninterrupted access. Converted gold prices into local currencies as needed, ensuring accurate pricing for global users. Analyzed fluctuations in gold prices to offer insights into market trends, considering both its intrinsic value and currency strength.",
    technologies: ["Python", "Jupyter Notebook", "Data Analysis", "APIs"],
    imageUrl: "/images/gold-analysis.jpg",
    projectUrl: "#"
  },
  {
    title: "Diabetes Risk Prognosis",
    description: "Developed a system to predict diabetes early with high accuracy using machine learning techniques. Utilized a diagnostic dataset with 17 attributes from 520 patients and applied Random Forest Classifier for prediction. Employed Python for its rich built-in libraries, streamlining the machine learning model development.",
    technologies: ["Python", "Machine Learning", "Random Forest", "Data Analysis"],
    imageUrl: "/images/diabetes-prognosis.jpg",
    projectUrl: "#"
  },
  {
    title: "Smart Attendance System",
    description: "An AI-powered attendance system that uses facial recognition to automate student attendance tracking. Features real-time face detection, automatic attendance marking, and a web dashboard for attendance management. Implements security features to prevent proxy attendance.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Django", "React"],
    imageUrl: "/images/employee-proctoring.jpg",
    projectUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Three.js. Features a dynamic 3D background, smooth animations, and a clean, professional design. Implements best practices for performance and accessibility.",
    technologies: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/portfolio.jpg",
    projectUrl: "#"
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white snap-y snap-mandatory">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative text-center px-4 sm:px-6 md:px-8 overflow-hidden snap-start">
          {/* 3D Background */}
          <Hero3D />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
             {/* Profile Picture */}
             <motion.img
                initial={{ opacity: 0, scale: 0.8, y: 50, rotateY: -180 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0, 
                  rotateY: 0,
                  transition: {
                    duration: 1.5,
                    type: "spring",
                    stiffness: 100
                  }
                }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 180,
                  transition: { duration: 0.8 }
                }}
                src="/images/profile.jpg"
                alt="Your Name"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover mb-4 sm:mb-6 border-4 border-blue-500 shadow-lg shadow-blue-500/50"
                style={{ transformStyle: "preserve-3d" }}
             />
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -30 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { 
                  duration: 1.2,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100
                }
              }}
              whileHover={{
                scale: 1.02,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="w-full"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                SARATH SATYA SAI DIVVELA
              </h1>
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Java Full Stack Developer
              </motion.p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
                <motion.a
                  href="#projects"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95, rotateY: -5 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 text-sm sm:text-base"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  download="resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: -10,
                    boxShadow: "0 0 20px rgba(75, 85, 99, 0.5)"
                  }}
                  whileTap={{ scale: 0.95, rotateY: 5 }}
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 text-sm sm:text-base"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  View Resume
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-6 sm:bottom-10 z-10 cursor-pointer"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 }
            }}
          >
            <ArrowDownIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 hover:text-blue-400" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-800">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ perspective: 1000 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-center">
                About Me
              </h2>
              <motion.p 
                className="text-base sm:text-lg text-gray-300 leading-relaxed animate-fade-in-bottom"
                initial={{ opacity: 0, z: -50 }}
                whileInView={{ opacity: 1, z: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                A highly skilled and motivated recent Computer Science graduate, passionate about developing innovative projects and leveraging technology to solve complex problems. I possess a strong foundation in Java and related technologies including Spring Boot, Hibernate, and JSP/Servlets, complemented by hands-on experience in full-stack development. My projects demonstrate my ability to apply technical knowledge to real-world challenges. I am a collaborative team player, eager to contribute to cutting-edge projects and continuously expand my skillset in Java development. I am actively seeking opportunities where I can apply my expertise and grow as a Java Full Stack Developer.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-950 to-gray-800">
          <div className="max-w-5xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50, rotateX: -20 }}
               whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
               transition={{ 
                 duration: 0.8,
                 type: "spring",
                 stiffness: 100
               }}
               viewport={{ once: true, amount: 0.2 }}
               style={{ perspective: 1000 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">
                Education
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Sathyabama Institute of Science and Technology",
                    degree: "Bachelor of Engineering in Computer Science (CGPA: 8.02 / 10.00)",
                    period: "May 2024, Chennai, Tamil Nadu",
                    project: {
                      title: "Final Year Project: Employee Proctoring System using Computer Vision",
                      tech: "Technologies: Python, Streamlit, ML Algorithms",
                      points: [
                        "Developed an innovative system leveraging computer vision to monitor employee behavior and ensure compliance with workplace policies, addressing limitations of traditional surveillance methods like privacy concerns and high false alarms.",
                        "Designed core modules, including real-time video analysis using object recognition algorithms, data analytics for productivity trends, and a notification system for immediate alerts, utilizing Python and machine learning frameworks.",
                        "Enhanced workplace productivity and accountability through ethical, privacy-concern monitoring, offering actionable insights and timely alerts to improve operational efficiency and maintain a secure work environment."
                      ]
                    }
                  },
                  {
                    title: "Tirumala Junior College",
                    degree: "12th Grade - M P C (CGPA: 9.5 / 10.00)",
                    period: "2018-2020, Rajahmundry, Andhra Pradesh"
                  },
                  {
                    title: "Tirumala High School",
                    degree: "10th Grade - S S C (CGPA: 8.8 / 10.00)",
                    period: "2017-2018, Rajahmundry, Andhra Pradesh"
                  }
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: index % 2 === 0 ? 5 : -5,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-6 rounded-xl backdrop-blur-sm hover-lift border border-blue-500/20"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{edu.title}</h3>
                    <p className="text-blue-400">{edu.degree}</p>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                    {edu.project && (
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-white mb-2">{edu.project.title}</h4>
                        <p className="text-gray-300">{edu.project.tech}</p>
                        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                          {edu.project.points.map((point, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 * i }}
                            >
                              {point}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-800">
          <div className="max-w-5xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 50, rotateX: -20 }}
               whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
               transition={{ 
                 duration: 0.8,
                 type: "spring",
                 stiffness: 100
               }}
               viewport={{ once: true, amount: 0.2 }}
               style={{ perspective: 1000 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">
                Experience
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-6 rounded-xl backdrop-blur-sm hover-lift border border-blue-500/20"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h3 className="text-xl font-bold text-white">Datapoint - Machine Learning & Deep Learning Engineer</h3>
                <p className="text-blue-400">(Python, Machine Learning, Deep Learning, Django, Jupyter Notebook, TensorFlow, Keras)</p>
                <p className="text-gray-400 text-sm">Oct 2024 – Mar 2025, Hyderabad, Telangana</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  {[
                    "Worked as a full-time engineer developing machine learning and deep learning solutions for production-level applications.",
                    "Designed and trained predictive models using TensorFlow and Keras, applying them to real-world datasets.",
                    "Integrated ML and DL models into Django-based web platforms to enable intelligent, interactive features.",
                    "Conducted data preprocessing, feature engineering, and performance tuning for model optimization.",
                    "Contributed to the deployment and testing of AI modules in live environments, ensuring stability and accuracy."
                  ].map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Training Certificates Section */}
        <section id="training" className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-800">
           <div className="max-w-5xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ 
                 duration: 0.8,
                 type: "spring",
                 stiffness: 100
               }}
               viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">
                Training Certificates
              </h2>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-6 rounded-xl backdrop-blur-sm hover-lift border border-blue-500/20"
                >
                  <h3 className="text-xl font-bold text-white">1. Excelr - Project Intern</h3>
                  <p className="text-blue-400">Gold Price Analysis | Python, Jupyter Notebook</p>
                  <p className="text-gray-400 text-sm">Aug 2022 – Dec 2022, Chennai, Tamil Nadu</p>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    <li>Monitor gold price data feeds from multiple providers, swiftly switching to backups to maintain uninterrupted access. Convert gold prices into local currencies as needed, ensuring accurate pricing for global users. Analyze fluctuations in gold prices to offer insights into market trends, considering both its intrinsic value and currency strength.</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-6 rounded-xl backdrop-blur-sm hover-lift border border-blue-500/20"
                >
                  <h3 className="text-xl font-bold text-white">2. Cognibot - Project Intern</h3>
                  <p className="text-blue-400">Diabetes Risk Prognosis | Python, Jupyter Notebook</p>
                  <p className="text-gray-400 text-sm">Jan 2023 – Mar 2023, Chennai, Tamil Nadu</p>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    <li>Developed a system to predict diabetes early with high accuracy using machine learning techniques. Utilized a diagnostic dataset with 17 attributes from 520 patients and applied Random Forest Classifier for prediction. Employed Python for its rich built-in libraries, streamlining the machine learning model development.</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-800">
          <div className="max-w-5xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 50, rotateX: -20 }}
               whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
               transition={{
                 duration: 0.8,
                 type: "spring",
                 stiffness: 100
               }}
               viewport={{ once: true, amount: 0.2 }}
               style={{ perspective: 1000 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-16 text-center gradient-text">Skills & Technologies</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {['Java', 'Python', 'C', 'HTML5', 'CSS3', 'JavaScript', 'Django', 'Hibernate', 'Jsp', 'Servlet', 'Spring', 'SpringBoot', 'VSCode', 'Git', 'GitHub', 'cursorAI', 'Jupyter Notebook', 'MySQL', 'Machine Learning'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20, rotateY: -30, rotateX: -10 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0, 
                      rotateY: 0,
                      rotateX: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 100
                      }
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 15,
                      rotateX: 5,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      transition: { duration: 0.2 }
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-2 sm:p-3 rounded-lg text-center text-gray-300 backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-300 animate-fade-in-bottom border border-blue-500/20 text-sm sm:text-base"
                    style={{ 
                      animationDelay: `${index * 0.05}s`,
                      transformStyle: "preserve-3d",
                      perspective: "1000px"
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-800">
          <div className="max-w-6xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 50, rotateX: -20 }}
               whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
               transition={{ 
                 duration: 0.8,
                 type: "spring",
                 stiffness: 100
               }}
               viewport={{ once: true, amount: 0.2 }}
               style={{ perspective: 1000 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, rotateY: index % 2 === 0 ? -10 : 10 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: index % 2 === 0 ? 5 : -5,
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ once: true }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ perspective: 1000 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-16 text-center gradient-text">Get In Touch</h2>
              <div className="grid gap-8 max-w-xl mx-auto">
                <motion.div 
                  className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-6 sm:p-8 rounded-xl backdrop-blur-sm hover-lift border border-blue-500/20"
                  initial={{ opacity: 0, y: 50, rotateY: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <FontAwesomeIcon icon={faSolidEnvelope} className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=divvelasarath@gmail.com&su=Portfolio Contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors hover:text-blue-400"
                      >
                        divvelasarath@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <FontAwesomeIcon icon={faSolidPhone} className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                      <a href="tel:+917396734835" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors hover:text-blue-400">
                        +91 73967 34835
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <FontAwesomeIcon icon={faSolidFilePdf} className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                      <a 
                        href="/resume.pdf" 
                        download="resume.pdf"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors hover:text-blue-400"
                      >
                        Download Resume
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <FontAwesomeIcon icon={faGithub} className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                      <a 
                        href="https://github.com/sarathdivvela" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors hover:text-blue-400"
                      >
                        sarathdivvela
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                      <a 
                        href="https://linkedin.com/in/sarathdivvela" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors hover:text-blue-400"
                      >
                        sarathdivvela
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-500 text-center py-8 px-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            &copy; {new Date().getFullYear()} SARATH SATYA SAI DIVVELA. All rights reserved.
          </motion.p>
        </footer>
      </main>
    </>
  );
} 