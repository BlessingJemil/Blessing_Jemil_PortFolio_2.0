import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const modalRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount and when window resizes
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Reset to first image when opening modal
      setCurrentImageIndex(0);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden";

      // Add event listener for outside clicks
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      // Re-enable scrolling when closed
      document.body.style.overflow = "auto";

      // Remove event listener when modal is closed
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleOutsideClick = (e) => {
    // Close modal if click is outside modal content
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen || !project) return null;

  // Create array of image sources (assuming project.imgSrc is the first image)
  const images = project.imgSrc;

  const containerClass = isMobile
    ? "fixed inset-x-0 bottom-0 z-50 transform transition-transform duration-300 ease-in-out"
    : "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out";

  const contentClass = isMobile
    ? "bg-zinc-800 rounded-t-2xl p-6 max-h-[96vh] overflow-y-auto"
    : "bg-zinc-800 rounded-2xl p-8 max-w-4xl mx-auto max-h-[100vh] overflow-y-auto";

  const modalAnimation = isOpen
    ? isMobile
      ? "translate-y-0"
      : "opacity-100"
    : isMobile
    ? "translate-y-full"
    : "opacity-0";

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Touch event handlers for swiping
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNextImage();
    }
    if (isRightSwipe) {
      goToPrevImage();
    }
  };

  return (
    <div className={`${containerClass} ${modalAnimation}`}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div
        ref={modalRef}
        className={`${contentClass} relative z-10 ring-1 ring-inset ring-zinc-50/10 pt-16`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors z-10"
        >
          <span className="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="space-y-6">
          <div
            className="relative aspect-video rounded-lg overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Image carousel */}
            <div className="relative w-full h-full ">
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain  transition-opacity duration-300"
              />

              {/* Navigation arrows */}
              {images?.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevImage();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-rounded text-white">
                    chevron_left
                  </span>
                </button>
              )}

              {images?.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextImage();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-rounded text-white">
                    chevron_right
                  </span>
                </button>
              )}

              {/* Image counter */}
              {images?.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                  {currentImageIndex + 1} / {images.length}
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-1">
              {project.title}{" "}
              <span className="text-sm font-normal text-zinc-200">{`(${project.Duration})`}</span>
            </h3>
            <p className="text-sm font-medium mb-2">{project?.role}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-zinc-700 rounded-lg text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-zinc-300 mb-6">{project.description}</p>

            <p className="text-zinc-300 mb-6">Skills & Technology</p>
            <div className="flex flex-wrap items-center gap-2">
              {project.skills.map((label, key) => (
                <span
                  key={key}
                  className="h-8 text-sm text-zinc-300 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-sky-600 text-zinc-900 font-medium rounded-lg transition-colors text-sm mt-4"
                >
                  Github Link
                  <span className="material-symbols-rounded text-base -mt-2">
                    Link
                  </span>
                </a>
              )}
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-zinc-900 font-medium rounded-lg transition-colors text-sm mt-4"
                >
                  Visit Project
                  <span className="material-symbols-rounded text-base -mt-2">
                    open_in_new
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
