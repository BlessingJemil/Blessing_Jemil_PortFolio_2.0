import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen, setNavOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const navLinksRef = useRef([]);

  const initActiveBox = () => {
    if (lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";

    // Close the menu on mobile when a link is clicked
    const isMobile = window.innerWidth < 768;
    if (isMobile && setNavOpen) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get all section elements
      const sections = Array.from(document.querySelectorAll("section[id]"));

      if (sections.length === 0) return;

      // Find the section that is currently in view
      const currentSection = sections.reduce((closest, section) => {
        const sectionTop = section.offsetTop;
        const scrollPosition = window.scrollY + 100; // Adding offset to improve detection

        // If the section is closer to the top of the viewport than the current closest section
        if (
          scrollPosition >= sectionTop &&
          (!closest || sectionTop > closest.offsetTop)
        ) {
          return section;
        }
        return closest;
      }, null);

      if (currentSection) {
        const currentSectionId = currentSection.getAttribute("id");

        // Find the navigation link that corresponds to the current section
        const currentNavLink = navLinksRef.current.find(
          (link) => link && link.getAttribute("href") === `#${currentSectionId}`
        );

        if (currentNavLink && currentNavLink !== lastActiveLink.current) {
          // Remove active class from previous active link
          lastActiveLink.current?.classList.remove("active");

          // Add active class to current link
          currentNavLink.classList.add("active");
          lastActiveLink.current = currentNavLink;

          // Update the active box position
          activeBox.current.style.top = currentNavLink.offsetTop + "px";
          activeBox.current.style.left = currentNavLink.offsetLeft + "px";
          activeBox.current.style.width = currentNavLink.offsetWidth + "px";
          activeBox.current.style.height = currentNavLink.offsetHeight + "px";
        }
      }
    };

    // Initialize the active box after component mounts
    initActiveBox();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", initActiveBox);

    // Initial check for active section
    handleScroll();

    // Clean up event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Skills",
      link: "#skills",
      className: "nav-link",
    },
    {
      label: "Projects",
      link: "#projects",
      className: "nav-link",
    },
    {
      label: "Journey",
      link: "#journey",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, index) => (
        <a
          href={link}
          key={index}
          ref={(el) => {
            navLinksRef.current[index] = el;
            if (className.includes("active") && !lastActiveLink.current) {
              lastActiveLink.current = el;
            }
          }}
          className={`${className} cursor-pointer`}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setNavOpen: PropTypes.func,
};

export default Navbar;
