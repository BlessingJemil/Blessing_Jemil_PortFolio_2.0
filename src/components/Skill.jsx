import React from "react";
import SkillCard from "./SkillCard";

const Skill = () => {
  const skillItem = [
    // Design Tools
    {
      imgSrc: "/images/figma.svg",
      label: "Figma",
      desc: "Design Tool",
    },
    {
      imgSrc: "/images/canva.png",
      label: "Canva",
      desc: "Design Tool",
    },

    // Frontend Core
    {
      imgSrc: "/images/html-5.png",
      label: "HTML",
      desc: "Markup Language",
    },
    {
      imgSrc: "/images/css3.svg",
      label: "CSS",
      desc: "Styling Language",
    },
    {
      imgSrc: "/images/javascript.svg",
      label: "JavaScript",
      desc: "Programming Language",
    },

    // Frontend Frameworks & Libraries
    {
      imgSrc: "/images/react.svg",
      label: "ReactJS",
      desc: "JavaScript Library",
    },
    {
      imgSrc: "/images/next.js.png",
      label: "NextJS",
      desc: "React Framework",
    },

    // CSS Frameworks
    {
      imgSrc: "/images/tailwindcss.svg",
      label: "TailwindCSS",
      desc: "CSS Framework",
    },
    {
      imgSrc: "/images/bootstrap.png",
      label: "Bootstrap",
      desc: "CSS Framework",
    },

    // Backend
    {
      imgSrc: "/images/nodejs.svg",
      label: "NodeJS",
      desc: "JavaScript Runtime",
    },
    {
      imgSrc: "/images/expressjs.svg",
      label: "ExpressJS",
      desc: "Web Framework",
    },
    {
      imgSrc: "/images/Moleculer.svg",
      label: "Moleculer",
      desc: "Microservices Framework",
    },

    // Database
    {
      imgSrc: "/images/mongodb.svg",
      label: "MongoDB",
      desc: "NoSQL Database",
    },
    {
      imgSrc: "/images/firebase.png",
      label: "Firebase",
      desc: "Backend Platform",
    },

    // API & Data
    {
      imgSrc: "/images/graphql.png",
      label: "GraphQL",
      desc: "Query Language",
    },
    {
      imgSrc: "/images/google-maps.png",
      label: "Google Maps API",
      desc: "Maps Integration",
    },

    // Analytics & Monitoring
    {
      imgSrc: "/images/grafana.png",
      label: "Grafana",
      desc: "Monitoring Platform",
    },
    {
      imgSrc: "/images/google-analytics.png",
      label: "Google Analytics",
      desc: "Web Analytics",
    },
    {
      imgSrc: "/images/Digital Ocean.svg",
      label: "Digital Ocean",
      desc: "Cloud Services",
    },
    {
      imgSrc: "/images/Vercel .svg",
      label: "Vercel",
      desc: "Cloud Services",
    },
  ];
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className=" grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
