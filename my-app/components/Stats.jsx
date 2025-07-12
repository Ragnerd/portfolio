"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: "2",
    text: "Years of experience",
  },
  {
    num: 7,
    text: "Projects completed",
  },
  {
    num: 5,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          {stats.map((item, index) => {
            return (
              <div key={index}>
                <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
