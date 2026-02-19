import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import seltosLogo from "@/assets/seltos-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Choose Us" },
    { href: "#industries", label: "Industries" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={seltosLogo}
            alt="Seltos Incredible Services Logo"
            className="w-10 h-10 rounded-lg object-contain bg-card shadow-sm border border-border"
          />
          <div>
            <p className="font-heading font-800 text-primary text-base leading-tight">SELTOS</p>
            <p className="text-muted-foreground text-[10px] font-medium leading-tight uppercase tracking-wide">Incredible Services</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:9792599887"
          className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg gradient-brand text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-md"
        >
          <Phone className="w-4 h-4" />
          9792599887
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-lg">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md text-left transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:9792599887"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg gradient-brand text-primary-foreground text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call: 9792599887
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
