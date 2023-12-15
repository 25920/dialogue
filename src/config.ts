import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://github.com/25920", // replace this with your deployed domain
  author: "25920",
  desc: "A minimal blog for dialogue",
  title: "Dialogue",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/25920",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:starwarsrogueone1123@proton.me",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "YouTube",
    href: "",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "CodePen",
    href: "",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  }
];
