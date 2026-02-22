"use client";

import { Button } from "@/components/Button";
import { useState } from "react";
import {
  ArrowBigRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "CSS",
  "HTML",
  "Git",
  "REST APIs",
  "Docker",
  "Svelte",
  "Next.js",
  "Tailwind CSS",
];

export const Hero = ({ onContactClick }) => {


 const [particles, /*setParticles*/] = useState(() =>
  Array.from({ length: 30 }).map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
  }))
);




  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <img
          src="/bg-pf.jpg"
          className="w-full h-full object-cover opacity-40"
          alt=""
        />
        <div className="absolute inset-0 bg-linear-to-b" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2AA",
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `slow-drift ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left column */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full-Stack Development Student
              </span>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              In search of an internship
              <br />
              <span className="text-primary glow-text">
                Eager to develop my skills
              </span>
              <br />
              <span className="font-serif italic font-normal text-white">
                in front-end, back-end, testing, cloud services and data analytics              </span>
            </h1>

            <p className="text-sm text-muted-foreground max-w-lg">
              Hi, I’m Lena Mitina — a final-year student studying full-stack development, IT-support
              and data analysis. I enjoy building web applications and working
              with data, learning step by step through real projects.
            </p>

            <div className="flex flex-wrap gap-2">
              <Button size="lg" onClick={() => onContactClick?.()}>
                Contact Me <ArrowBigRight />
              </Button>

              <AnimatedBorderButton
                href="/Elena Mitina CV 2026 eng.pdf"
                download
              >
                <Download className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Download CV</span>
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Follow:
              </span>

              {[
                { icon: Github, href: "https://github.com/lemi35" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mitinalena/" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with:
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
