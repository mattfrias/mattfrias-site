import bngAppImg from "@/public/bubblesngo.png";
import homelabImg from "@/public/homelab.png";
import hubskyImg from "@/public/hubsky.png";
import reciboImg from "@/public/recibo.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Photography",
    hash: "#photography",
  },
] as const;

export const projectsData = [
  {
    title: "Hubsky",
    description:
      "An iOS app built for UConn students which allows them to view dining hall menus, organize their classes, and view service statuses.",
    tags: [
      "React Native",
      "Expo",
      "Tailwind CSS",
      "React Navigation",
      "OneSignal",
      "Vexo",
    ],
    imageUrl: hubskyImg,
    link: "https://hubsky.top",
  },
  {
    title: "BubblesNGo",
    description:
      "The app provides a simpler way for customers to request their laundry to be picked up or delivered from a location near them.",
    tags: ["React Native", "Expo", "Tailwind CSS", "Typescript", "Express.js"],
    imageUrl: bngAppImg,
    link: "#0",
  },
  {
    title: "Recibo",
    description:
      "Background running script meant to periodically scan an email account for unread messages that match a specific subject, download the message contents, format it to plain text, and send it to a receipt printer.",
    tags: ["Python", "Email", "IMAP"],
    imageUrl: reciboImg,
    link: "https://github.com/mattfrias/recibo",
  },
  {
    title: "Homelab",
    description:
      "Running a variety of self-hosted services to learn more about networking and server administration.",
    tags: ["Ubiquiti", "ESXi", "Linux", "Docker", "Plex", "Sonarr", "Radarr"],
    imageUrl: homelabImg,
    link: "#0",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Express.js",
  "Git/Github",
  "Tailwind CSS",
  "Computer Networks",
  "Ubiquiti",
  "VMware ESXi",
  "Swift",
  "Wordpress",
  "C/C++",
  "Python",
  "Java",
  "Docker",
  "Linux",
  "Microsoft Office",
] as const;

export const photosData = [
  { name: "gallery-1.jpeg", width: 1638, height: 2048 },
  { name: "gallery-14.jpeg", width: 1639, height: 2049 },
  { name: "gallery-11.jpeg", width: 1639, height: 2049 },
  { name: "gallery-3.jpeg", width: 2305, height: 1537 },
  { name: "gallery-27.jpeg", width: 1638, height: 2048 },
  { name: "gallery-15.jpeg", width: 2305, height: 1537 },
  { name: "gallery-24.jpeg", width: 1639, height: 2049 },
  { name: "gallery-16.jpeg", width: 1638, height: 2048 },
  { name: "gallery-8.jpeg", width: 2304, height: 1536 },
  { name: "gallery-26.jpeg", width: 1638, height: 2048 },
  { name: "gallery-19.jpeg", width: 1639, height: 2049 },
  { name: "gallery-20.jpeg", width: 1638, height: 2048 },
  { name: "gallery-17.jpeg", width: 1639, height: 2049 },
  { name: "gallery-10.jpeg", width: 1638, height: 2048 },
  { name: "gallery-25.jpeg", width: 2304, height: 1536 },
  { name: "gallery-23.jpeg", width: 1639, height: 2049 },
  { name: "gallery-21.jpeg", width: 1639, height: 2049 },
  { name: "gallery-28.jpeg", width: 1638, height: 2048 },
  { name: "gallery-5.jpeg", width: 2305, height: 1537 },
  { name: "gallery-18.jpeg", width: 1639, height: 2049 },
  { name: "gallery-12.jpeg", width: 2458, height: 1536 },
  { name: "gallery-2.jpeg", width: 1638, height: 2048 },
  { name: "gallery-29.jpeg", width: 1639, height: 2049 },
  { name: "gallery-7.jpeg", width: 1638, height: 2048 },
  { name: "gallery-22.jpeg", width: 2304, height: 1536 },
  { name: "gallery-30.jpeg", width: 1638, height: 2048 },
  { name: "gallery-4.jpeg", width: 1638, height: 2048 },
  { name: "gallery-6.jpeg", width: 2305, height: 1537 },
  { name: "gallery-13.jpeg", width: 1639, height: 2049 },
  { name: "gallery-9.jpeg", width: 2304, height: 1536 },
] as const;
