"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX design",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
  {
    num: "03",
    title: "Adobe Suits",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
];

import { easeInOut, motion } from "motion/react";

const Services = () => {
  return (
    <section className="min-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {services.map((service, index) => {
            return (
              <div key={index}>
                {/* serial number */}
                <div>
                  <div>{service.num}</div>
                  <Link href={service.href}>
                    <BsArrowDownRight/>
                  </Link>
                </div>
                {/* title */}
                <h2>{service.title}</h2>
                {/* description */}
                <p>{service.description}</p>
                <div className="border-b border-white/30 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
