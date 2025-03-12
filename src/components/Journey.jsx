import React, { useEffect, useRef, useState } from "react";

const TimelineItem = ({
  date,
  title,
  description,
  position,
  image,
  isVisible,
  duration,
  grade,
}) => {
  // Determine if we should show the date on left or right based on position
  const isLeft = position === "left";

  return (
    <div
      className={`mb-16 relative transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-40"
      }`}
    >
      {/* Desktop Layout (zigzag) - hidden on small screens */}
      <div className="hidden md:flex items-start">
        {/* Left side content */}
        <div className={`w-1/2 ${isLeft ? "pr-8" : "pr-4"}`}>
          {isLeft ? (
            <div
              className={`ml-auto mr-0 max-w-md transition-transform duration-700 bg-zinc-800 p-5 rounded-lg shadow-md 
                          ${isVisible ? "translate-x-0" : "-translate-x-8"}`}
            >
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <p className="text-gray-400 text-sm mb-1">{description}</p>
              <p className="text-gray-200 text-sm mb-1">{`${duration}`}</p>
              {grade && <p className="text-gray-200 text-sm">{`${grade}`}</p>}
              {image && (
                <div className="flex gap-2 mt-3 justify-end">
                  <img
                    src={image}
                    alt={title}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="text-right">
              <div
                className={`font-bold text-xl ${
                  isVisible ? "text-blue-400" : "text-gray-500"
                } transition-colors duration-500`}
              >
                {date.month}
              </div>
              <div className="text-2xl font-bold text-white">{date.day}</div>
              <div className="text-gray-500">{date.year}</div>
            </div>
          )}
        </div>

        {/* Center timeline dot */}
        <div className="flex-shrink-0 relative">
          <div
            className={`w-4 h-4 rounded-full ${
              isVisible ? "bg-blue-400 scale-125" : "bg-zinc-800 scale-100"
            } 
                        transition-all duration-500 border-2 border-zinc-800 z-10 relative`}
          ></div>
        </div>

        {/* Right side content */}
        <div className={`w-1/2 ${isLeft ? "pl-4" : "pl-8"}`}>
          {!isLeft ? (
            <div
              className={`ml-0 mr-auto max-w-md transition-transform duration-700 bg-zinc-800 p-5 rounded-lg shadow-md
                          ${isVisible ? "translate-x-0" : "translate-x-8"}`}
            >
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <p className="text-gray-400 text-sm mb-1">{description}</p>
              <p className="text-gray-200 text-sm">{`${duration}`}</p>
              {image && (
                <div className="flex gap-2 mt-3 justify-start">
                  <img
                    src={image}
                    alt={title}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="text-left">
              <div
                className={`font-bold text-xl ${
                  isVisible ? "text-blue-400" : "text-gray-500"
                } transition-colors duration-500`}
              >
                {date.month}
              </div>
              <div className="text-2xl font-bold text-white">{date.day}</div>
              <div className="text-gray-500">{date.year}</div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout (vertical stack) - shown only on small screens */}
      <div className="md:hidden flex">
        {/* Timeline line and dot */}
        <div className="mr-4 relative flex flex-col items-center">
          <div
            className={`w-4 h-4 rounded-full ${
              isVisible ? "bg-blue-400 scale-125" : "bg-zinc-600 scale-100"
            } 
                          transition-all duration-500 border-2 border-zinc-800 z-10`}
          ></div>
          {/* The key fix: Changed positioning and extended the line */}
          <div className="w-px bg-gray-600 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 h-full"></div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Date */}
          <div className="flex items-baseline mb-2">
            <div
              className={`font-bold text-lg ${
                isVisible ? "text-blue-400" : "text-gray-500"
              } transition-colors duration-500 mr-2`}
            >
              {date.month}
            </div>
            <div className="text-xl font-bold text-white mr-1">{date.day},</div>
            <div className="text-gray-500">{date.year}</div>
          </div>

          {/* Content Card */}
          <div
            className={`bg-gray-800 p-4 rounded-lg shadow-md transition-all duration-700 
                         ${
                           isVisible
                             ? "translate-y-0 opacity-100"
                             : "translate-y-4 opacity-80"
                         }`}
          >
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
            {image && (
              <div className="flex gap-2 mt-3">
                <img
                  src={image}
                  alt={title}
                  className="w-16 h-16 rounded-md object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState({});
  const timelineRefs = useRef([]);

  const milestones = [
    {
      date: { month: "Nov", year: "2023" },
      title: <p>Junior Software Engineer </p>,
      description:
        "BerarkRays - IOT, AI, Mobile Applications Development Studio",
      position: "left",
      duration: "Nov 2023 - Present",
    },
    {
      date: { month: "June", year: "2023" },
      title: "MERN Stack Developer - (Intern)",
      duration: "June 2023 - Nov 2023",
      description:
        "Gelbero IT Solutions , Karungal ,Kanyakumari Dist , Tamil Nadu.",
      position: "right",
    },
    {
      date: { month: "Aug", year: "2019" },
      title: "UG - B.E. Mechanical Engineering",
      duration: "Aug 2019 - May 2023",
      description:
        "Mar Ephraem College of Engineering & Technology , Elavuvilai , Marthandam , Kanyakumari Dist , Tamil Nadu.",
      position: "left",
      grade: " 8.77 / 10",
    },
    {
      date: { month: "June", year: "2018" },
      title: "HSC II Year",
      duration: " 2018 - 2019",
      description:
        "Amala Matric Hr. Sec. School , Thuckalay , Kanyakumari Dist , Tamil Nadu.",
      position: "right",
      grade: " 77%",
    },
    {
      date: { month: "June", year: "2016" },
      title: "SSLC",
      duration: " 2016 - 2017",
      description:
        "Amala Matric Hr. Sec. School , Thuckalay , Kanyakumari Dist , Tamil Nadu.",
      position: "left",
      grade: " 96%",
    },
  ];

  useEffect(() => {
    timelineRefs.current = timelineRefs.current.slice(0, milestones.length);

    const handleScroll = () => {
      const newVisibleItems = {};

      timelineRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible =
            rect.top <= window.innerHeight * 0.8 &&
            rect.bottom >= window.innerHeight * 0.2;

          newVisibleItems[index] = isVisible;
        }
      });

      setVisibleItems(newVisibleItems);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [milestones.length]);

  return (
    <section id="journey" className="section py-12  ">
      <div className="container">
        <h2 className="headline-2 mb-8"> My Journey</h2>
        <div className=" mx-auto px-4 max-w-4xl mt-10 lg:mt-20">
          <div className="relative">
            {/* Vertical timeline line - only visible on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-zinc-800"></div>

            {/* This wrapper ensures proper spacing between timeline items */}
            <div className="relative z-10">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  ref={(el) => (timelineRefs.current[index] = el)}
                  className="timeline-item"
                >
                  <TimelineItem
                    date={milestone.date}
                    title={milestone.title}
                    description={milestone.description}
                    duration={milestone.duration}
                    position={milestone.position}
                    image={milestone.image}
                    isVisible={visibleItems[index] || false}
                    grade={milestone?.grade}
                  />
                </div>
              ))}
            </div>

            {/* Mobile view continuous line - only visible on mobile */}
            <div className="md:hidden absolute left-2 top-0 h-full w-px bg-zinc-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
