import { Code2, Repeat, Users, Zap } from "lucide-react";

const highlights = [
     {
        icon: Code2,
        title: "Clean Code",
        description: "I practice writing clean, maintainable, and efficient code following best practices and design patterns.",
      },
      {
        icon: Users,
        title: "Team Player",
        description: "I thrive in collaborative environments, valuing open communication and feedback.",
      },
      {
        icon: Zap,
        title: "Fast Learner",
        description: "I quickly adapt to new technologies to stay ahead in the ever-evolving tech landscape.",
      },  
      {
        icon: Repeat,
        title: "Consistent Practice",
        description: "I practice regularly and consistently. I believe that small daily practice helps me understand concepts better and improve my skills more effectively.",
      }  
    ]



export const About = () => {



    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*Left column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Practicing shaping ideas into code,
                    <br/>
                    <span className="font-serif italic font-normal text-white"> one component at a time.</span>
                </h2>

                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                        As a software engineering student, I focus on developing my skills 
                        of creating responsive and accessible web interfaces.
                    </p>
                    <p>
                        I have experience of building responsive web applications 
                        using React, Svelte, Tailwind CSS, and backend tools 
                        including Node and Deno.           
                    </p>
                    <p>
                        I'm focused on learning new technologies and strengthening skills through practical, hands-on experience.
                    </p>
                </div>
                <div className="glass rouned-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                        My goal is to gain strong hands-on experience by building real-world projects, refining my technical skills, and continuously learning modern tools and best practices in software development.                    </p>
                </div>
            </div>
            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                    <div key={index} className="glass p-6 rounded-2xl animate-fade-in"
                    style={{animationDelay: `${(index+1) * 100}ms`}}
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20"><highlight.icon className="w-6 h-6 text-primary"/></div>
                        <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};