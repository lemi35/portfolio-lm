import { Mail, Phone, Linkedin, MapIcon } from "lucide-react";

const contactInfo = [
    { 
        icon: Phone,
        type: "Phone", 
        value: "+358 403 789 749",
        href: "tel:+358403789749"
     }, 
     { 
        icon: Mail,
        type: "Email", 
        value: "jollyjig35@gmail.com",
        href: "mailto:jollyjig35@gmail.com",
     },
     { 
        icon: Linkedin,
        type: "LinkedIn", 
        value: "https://www.linkedin.com/in/mitinalena/",
        href: "https://www.linkedin.com/in/mitinalena/",
    },
    { 
        icon: MapIcon,
        type: "Location", 
        value: "Espoo, Finland",
        href: "https://www.google.com/maps/place/Espoo,+Finland",
    },
]

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary-foreground text-lg font-medium tracking-wider">
                Get in Touch
            </span>
        </div>
        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
                <a 
                    key={index} 
                    href={info.href} 
                    className="glass rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 animate-fade-in"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                        <info.icon className="w-6 h-6 text-primary"/>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.label}</h3>
                    <p className="text-sm text-muted-foreground break-all">{info.value}</p>
                </a>
            ))}
        </div>
      </div>
    </section>
  );
};
