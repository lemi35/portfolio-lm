import { Button } from "@/components/Button";
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

  const scrollToProjects = () => {
  const el = document.getElementById("projects");
  el?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <section
      className="
            relative
            min-h-screen 
            flex
            items-center
            overflow-hidden
            "
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <img
          src="/bg-pf.jpg"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b" />
      </div>

      {/* GD */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2AA",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 position-relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer - React Specialist
              </span>
            </div>
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Creating
                <br />
                <span className="text-primary glow-text">
                  simple and effective
                </span>
                <br />
                <span className="font-serif italic font-normal text-white">
                  digital solutions.
                </span>
              </h1>
              <p className="text-sm text-muted-foreground max-w-lg animate-fade-in animation-delay-400">
                Hi, I’m Lena Mitina — a software engineer focused on React. I
                build reliable web applications and continuously improve my
                skills through hands-on projects.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2 animate-fade-in animation-delay-300">
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

            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground glow-text">
                Follow:{" "}
              </span>
              {[
                { icon: Github, href: "https://github.com/lemi35" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/mitinalena/",
                },
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

        {/* Right column - img */}
        <div className="relative animate-fade-in animation-delay">
          {/*.Profile image */}
          <div className="relative max-w-md mx-auto">
            <div
              className="absolute inset-0
                    rounded-3xl bg-linear-to-br
                    from-primary/30 via-transparent
                    to-primary/10 blur-2xl animate-pulse-glow
                    "
            />
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img
                src="/hero-img.jpeg"
                alt="Lena Mitina"
                className="w-full aspect-4/5 object-cover rounded-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
              {/* Stats Badge */}
              <div className="absolute top-0 -left-4 glass rounded-xl px-4 py-2 animate-float animation-delay-500">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-xs text-muted-foreground">Years Exp.</div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills List */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with:
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="shrink-0 px-8 py-4">
                  <span
                    className="
                    text-xl font-semibold 
                    text-muted-foreground/50 
                    hover:text-muted-foreground 
                    transition-colors"
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in z-20">
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
