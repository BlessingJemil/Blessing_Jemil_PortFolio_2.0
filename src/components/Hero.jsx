import React from "react";
import ButtonPrimary from "./Button";
import ButtonOutline from "./ButtonOutline";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className=" container items-center lg:flex lg:justify-normal lg:items-center lg:gap-10">
        <div className="">
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/blogo.png"
                width={40}
                height={40}
                className="img-cover"
                alt="web-developer"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className=" relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Full-Stack Developer
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Creating Scalable Web & SaaS Solutions
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              downloadFile="/cv/Blessing_Jemil.pdf"
              fileName="Blessing_Jemil_CV.pdf"
            />{" "}
            <ButtonOutline
              href="#about"
              label="About Me"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="mt-10">
          <figure className="w-full max-w-[680px]  ml-auto bg-gradient-to-t from-sky-400 via-15% via-sky-400/40 to-45% rounded-[60px] overflow-hidden mx-auto">
            <img
              src="/images/blessing-jemil.png"
              width={956}
              height={900}
              alt="Blessing Jemil P J"
              className="w-full mx-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
