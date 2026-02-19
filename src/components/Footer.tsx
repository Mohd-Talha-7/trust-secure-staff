import { Phone, MapPin, Mail } from "lucide-react";
import seltosLogo from "@/assets/seltos-logo.jpg";

const Footer = () => {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Choose Us" },
    { href: "#industries", label: "Industries" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-card py-14">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={seltosLogo}
                alt="Seltos Incredible Services Logo"
                className="w-10 h-10 rounded-lg object-contain bg-card"
              />
              <div>
                <p className="font-heading font-800 text-card text-base leading-tight">SELTOS INCREDIBLE SERVICES</p>
                <p className="text-card/60 text-xs font-medium uppercase tracking-wide">Pvt Ltd</p>
              </div>
            </div>
            <p className="text-card/70 text-sm leading-relaxed max-w-xs mb-4">
              Lucknow's trusted manpower supply company providing skilled, non-skilled workforce and professional security guards to businesses across all sectors.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-xs font-heading font-bold">in</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-card mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-card/70 hover:text-secondary transition-colors text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-card mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-card/70 text-xs leading-relaxed">
                  3/1 Arpan House, Behind Dr K Mehra Hospital, Krishna Nagar, Lucknow – 226012
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="tel:9792599887" className="text-card/70 hover:text-secondary transition-colors text-sm">
                  9792599887
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <p className="text-card/70 text-sm">seltosincredibles@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-card/50 text-xs">
            © {new Date().getFullYear()} Seltos Incredible Services Pvt Ltd. All rights reserved.
          </p>
          <p className="text-card/50 text-xs">
            Manpower Supply Company in Lucknow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
