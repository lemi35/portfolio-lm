import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Menu as MenuIcon, X } from "lucide-react";
import { Menu as NavMenu } from "../components/Menu";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="
            group text-xl 
            font-bold 
            tracking-tight 
            text-muted-foreground 
            transition-colors 
            hover:text-foreground"
        >
          LM
          <span className="text-primary">-CS</span>
        </a>

        {/* Desktop Nav*/}
        <div className="hidden md:flex items-center gap-1">
          <NavMenu
            links={navLinks}
            onLinkClick={() => {
              onContactClick?.();
            }}
            className="glass rounded-full px-2 py-1 flex items-center gap-1"
          />
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button
            as="a"
            href="#contact"
            size="default"
            onClick={(e) => {
              e.preventDefault();
              onContactClick?.();
            }}
          >
            Contact me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-highlight transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  if (link.label.toLowerCase() === "contact") {
                    onContactClick?.();
                  } else {
                    // allow default navigation for other links
                    window.location.hash = link.href;
                  }
                }}
                className="
                  text-lg 
                  text-muted-foreground 
                  hover:text-foreground
                  cursor-pointer
                  py-2
                  transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              as="a"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                onContactClick?.();
              }}
            >
              Contact me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
