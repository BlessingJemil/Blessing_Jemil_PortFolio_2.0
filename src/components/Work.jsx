import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const works = [
    {
      imgSrc: [
        "/images/admin-panel-project/image_1.png",
        "/images/admin-panel-project/image_2.png",
        "/images/admin-panel-project/image_4.png",
        "/images/admin-panel-project/image_5.png",
        "/images/admin-panel-project/image_6.png",
        "/images/admin-panel-project/image_7.png",
        "/images/admin-panel-project/image_8.png",
        "/images/admin-panel-project/image_9.png",
        "/images/admin-panel-project/image_10.png",
      ],
      title: "Ride Hailing Admin Panel",
      role: "Lead Frontend Developer",
      Duration: "Dec 2024 - present",
      tags: ["Associated with BerarkRays"],
      projectLink: "",
      description:
        "Led the development of a comprehensive ride management system admin panel using React 18. This platform enables businesses to efficiently manage their transportation operations with real-time tracking, detailed analytics, and administrative controls. The system features ride status monitoring, user management, geospatial service area configuration, and comprehensive reporting capabilities. Developed with modern UI/UX principles and responsive design to ensure optimal performance across devices.",
      skills: [
        "React 18 & React Router",
        "State Management (Recoil)",
        "Tailwind CSS for styling",
        "Google Maps API integration",
        "Geospatial data visualization (H3 hexagons)",
        "Grafana for monitoring API responses",
        "Firebase integration",
        "RESTful API integration",
        "Responsive design",
        "Graphql",
      ],
    },
    {
      imgSrc: [
        "/images/booking-project/image_1.jpeg",
        "/images/booking-project/image_2.png",
        "/images/booking-project/image_3.jpeg",
        "/images/booking-project/image_4.jpeg",
        "/images/booking-project/image_5.jpeg",
      ],
      title: "Ride-Hailing Platform",
      role: "Lead Frontend Developer",
      Duration: "Jan 2024 - Nov 2024",
      tags: ["Associated with BerarkRays"],
      projectLink: "",
      description: (
        <ul>
          <li>
            Built a full-stack ride-hailing website similar to Uber, featuring
            standard rides and airport ride booking.
          </li>
          <li>
            Developed using Next.js (server-side rendering) to improve
            performance and SEO.
          </li>
          <li>
            Integrated Google Maps API for location search, distance
            calculations, and route optimization.
          </li>
          <li>Implemented real-time ride tracking using WebSockets.</li>
          <li>
            Firebase authentication and secure payments added for user
            management.
          </li>
          <li>
            Optimized UI with Framer Motion animations for smooth interactions.
          </li>
        </ul>
      ),
      skills: [
        "SaaS",
        "Next Js",
        "State Management (Recoil)",
        "Tailwind CSS for styling",
        "Google Maps API integration",
        "Server Side Rendering",
        "Firebase integration",
        "RESTful API integration",
        "Responsive design",
      ],
    },
    {
      imgSrc: [
        "/images/widget-project/image_1.png",
        "/images/widget-project/image_2.png",
        "/images/widget-project/image_3.png",
        "/images/widget-project/image_4.png",
      ],
      title: "Ride-Booking Widget (SaaS)",
      role: "Lead Frontend Developer",
      Duration: "June 2024 - July 2024",
      tags: ["Associated with BerarkRays"],
      projectLink: "",
      description: (
        <ul>
          <li>
            Developed a standalone ride-booking widget using raw JavaScript.
          </li>
          <li>
            Designed to be embedded in third-party websites, making it a
            SaaS-style product.
          </li>
          <li>
            Works independently but connects users to the main ride-hailing
            platform.
          </li>
          <li>
            Lightweight and optimized for fast loading and responsiveness.
          </li>
          <li>
            Supports customization for third-party websites via parameters.
          </li>
        </ul>
      ),
      skills: [
        "SaaS",
        "JavaScript",
        "Event-Driven Architecture",
        "HTML",
        "CSS",
        "RESTful API integration",
        "Responsive design",
      ],
    },
    {
      imgSrc: ["/images/portfolio-1.0/image-1.png"],
      title: "Basic Portfolio Website",
      role: "Developer",
      Duration: "3 days",
      tags: ["Mini Project"],
      projectLink: "https://blessingjemil.github.io/Blessing-portfolio/",
      githubLink: "https://github.com/BlessingJemil/Blessing-portfolio",
      description:
        "It's a simple portfolio for myself done using React Js to express myself. It's mobile optimized.",
      skills: ["React", "Tailwind", "Responsive design"],
    },
    {
      imgSrc: ["/images/hall/image_1.png"],
      title: "Hall Booking API ",
      role: "Back End Developer",
      Duration: "1 day",
      tags: ["Mini Project"],
      projectLink: "",
      githubLink: "https://github.com/BlessingJemil/Hall-API",
      description:
        "Simple hall booking API logic  , used local variables to store data.",
      skills: ["Node Js", "Express Js"],
    },
    {
      imgSrc: ["/images/calculator/image_1.png"],
      title: "Calculator",
      role: "Back End Developer",
      Duration: "1 day",
      tags: ["Mini Project"],
      projectLink: "https://blessingjemil.github.io/calculator/",
      githubLink: "https://github.com/BlessingJemil/calculator",
      description:
        "Basic addition , subtraction ,multiplication & division using basic html ,css &javascript",
      skills: ["HTML", "CSS", "Javascript"],
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Give time for animation to complete before removing project data
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map((project, key) => (
            <div key={key} onClick={() => handleProjectClick(project)}>
              <ProjectCard
                imgSrc={project.imgSrc}
                title={project.title}
                tags={project.tags}
                duration={project.Duration}
                role={project.role}
              />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Work;
