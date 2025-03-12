import React from "react";
import ButtonPrimary from "./Button";

const Footer = () => {
  const sitemap = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Journey",
      href: "#journey",
    },
    {
      label: "Contact me",
      href: "#contact",
    },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/BlessingJemil",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/blessing-jemil-p-j/",
    },
    {
      label: "Whatsapp",
      href: "https://wa.me/917871439658?text=Hello",
    },
  ];
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[20ch]">
              Let&apos;s work together
            </h2>

            <ButtonPrimary
              href="mailto:blessingjemil@gmail.com"
              label="Connect with me"
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="">
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <p className="mb-2">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-between pt-10 mb-8">
          <a href="" className="">
            <img src="/images/logo.svg" alt="Logo" height={40} width={40} />
          </a>
          <p className="text-zinc-500 text-sm">
            &copy; 2025{" "}
            <span className="text-zinc-200">Blessing Jemil P J</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
