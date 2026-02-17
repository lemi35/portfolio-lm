import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
    {
        title: "Purple",
        description: "A full-stack social media platform built with React, Node.js, Express, PostgreSQL, and Prisma. Implements authentication with protected routes, image uploads using Multer, topic-based post organization, and RESTful API architecture. Backend deployed on Render and frontend hosted on Cloudflare Pages.",
        link: "https://26a8c32a.purple-b.pages.dev/",
        img: "/Purple.jpeg",
        tags: ["TypeScript", "React", "Vite", "PostgreSQL", "Express", "Node.js", "Prisma"],
        github: "https://github.com/lemi35/purple",
    },
    {
        title: "Pawsome",
        description: "A pet food tracking application built with React, Firebase and Antigravity API.",
        link: "https://pawsome-js.netlify.app/",
        img: "/pawsome.jpeg",
        tags: ["React", "Vite", "Firebase", "Antigravity API", "Node.js"],
        github: "https://github.com/lemi35/pawsome",
    },
    {
        title: "Chart-app",
        description: "Chart App is an interactive, responsive Angular dashboard that visualizes data using Highcharts, featuring filtering, multiple chart types, and local storage persistence.",
        link: "https://chart-app-lm.vercel.app/",
        img: "/Chart-app.jpeg",
        tags: ["Angular", "Highcharts", "Data Visualization"],
        github: "https://github.com/lemi35/chart-app",
    },
    {
        title: "Caffiend",
        description: "Coffee consumption tracker app built with React and Firebase.",
        link: "https://caffiend-js.netlify.app/",
        img: "/caffiend.jpeg",
        tags: ["React", "Vite", "Firebase", "Node.js"],
        github: "https://github.com/lemi35/caffiend",
    },
    {
        title: "ShowFinder",
        description: "A film and TV show search application built with React and IMDB API.",
        link: "https://showfinder-js.netlify.app/",
        img: "/showfinder.jpeg",
        tags: ["React", "IMDB API"],
        github: "https://github.com/lemi35/showfinder",
    },
    {
        title: "ToDo App",
        description: "A simple to-do list application built with Svelte and Firebase.",
        link: "https://svelte-todo-js.netlify.app/dashboard",
        img: "/todo.jpeg",
        tags: ["SvelteKit", "Firebase", "Firestore", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/lemi35/svelte-todo",
    },
    {
        title: "Irish Dance Shop",
        description: "An online shop for Irish dance supplies built with React. UI only with search and filter functionality.",
        link: "https://irish-dance-shop.netlify.app/",
        img: "/idshop.jpeg",
        tags: ["React", "CSS Modules"],
        github: "https://github.com/lemi35/irish-dance-shop",
    },        
    {
        title: "TaskApp",
        description: "A simple task management application built with React and Firebase.",
        link: "https://task-app-lemi.netlify.app/",
        img: "/taskapp.jpeg",
        tags: ["React", "Firebase"],
        github: "https://github.com/lemi35/task-app",
    }, 
]


export const Projects = () => {
    return (
    <section id="projects" className="py-32 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10"></div>
       
       
       
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                Projects I've Built and from Which 
                <span className="font-serif italic font-normal text-white"> I've Learned.</span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
                A selection of my recent projects showcasing my skills in frontend development, UI/UX design, and problem-solving.
            </p>
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div 
                    key={index} 
                    className="group glass rounded-2xl overflow-hidden cursor-pointer md:row-span-1 transition-transform duration-300 animate-fade-in"
                    style={{animationDelay: `${index * 100}ms`}}
                    >
                    {/* Project Image */}
                    <div className="relative overflow-hidden aspect-video">
                        <img 
                            src={project.img} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>
                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                            <ArrowUpRight className="w-5 h-5"/>
                        </a>
                        <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                            <Github className="w-5 h-5"/>
                        </a>
                    </div>
                      {/* Content */}
                      <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                            <ArrowUpRight 
                                className="w-5 h-5 text-muted-foreground
                                group-hover:text-primary group-hover:translate-x-1
                                group-hover:translate-y-1 transition-all"
                                />
                        </div>
                        <p className="text-muted-foreground text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                                <span 
                                    key={tagIndex} 
                                    className="px-4 py-1.5 rounded-full bg-surface text-xs 
                                    font-medium border border-border/50 text-muted-foreground
                                    hover:border-primary/50  hover:bg-primary/10
                                    hover:text-primary transition-all duration-300"
                                    >{tag}
                                
                                </span>
                            ))}
                        </div>
                     </div>
                </div>
            ))}
        </div>
        {/* Call to Action - View All Projects */}
        <div className="text-center mt-12 inline-flex animate-fade-in animation-delay-500">
            <AnimatedBorderButton href="https://github.com/lemi35">
                View All Projects
                <ArrowUpRight className="w-5 h-5 relative" />
            </AnimatedBorderButton>
        </div>
    </section>
    );
};