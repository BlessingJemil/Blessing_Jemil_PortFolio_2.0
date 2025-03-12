import React from "react";

const About = () => {
  const aboutItems = [
    {
      label: "Project done",
      number: 8,
    },
    {
      label: "Years of experience",
      number: 1,
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 font-bold mb-4 md:mb-8 md:text-2xl md:max-w-[90ch]">
            Hello, I'm Blessing Jemil P J
          </p>
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-lg md:max-w-[90ch]">
            I'm a Software Engineer with over a year of professional experience
            building modern web applications. My expertise includes React,
            Next.js, and full-stack JavaScript development.
          </p>
          <p className="text-zinc-300 font-bold mb-4 md:mb-8 md:text-2xl md:max-w-[90ch]">
            What I Do
          </p>
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-lg md:max-w-[90ch]">
            My expertise includes React, Next.js, and full-stack JavaScript
            development. I've created several significant projects including a
            ride-hailing platform using Next.js 14 with server-side rendering,
            an admin dashboard using React, and my portfolio built with Vite,
            React, and Tailwind CSS.
          </p>
          <p className="text-zinc-300 font-bold mb-4 md:mb-8 md:text-2xl md:max-w-[90ch]">
            My Approach
          </p>
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[90ch]">
            Beyond coding, I'm passionate about exploring artificial
            intelligence and staying current with emerging technologies. I
            deploy my applications using DigitalOcean and Vercel, and I'm always
            looking to expand my technical knowledge.
          </p>

          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[90ch]">
            Combining creativity and technical expertise, I transform your
            vision into digital masterpieces that excel in both appearance and
            performance.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              width={30}
              height={30}
              alt="logo"
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
