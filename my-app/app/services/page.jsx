"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX design",
    Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
  {
    num: "03",
    title: "Adobe Suits",
    Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
];

import { motion } from "motion/react";

const Services = () => {
  return (
    <section>
      <div className="container mx-auto">services page</div>
    </section>
  );
};

export default Services;
