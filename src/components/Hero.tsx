import { Phone, FileText, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-slow" />
          Lucknow's Trusted Manpower Partner
        </div>

        <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up">
          Reliable Manpower &
          <br />
          <span className="text-secondary-light">Security Solutions</span>
          <br />
          You Can Trust
        </h1>

        <p className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up font-light" style={{ animationDelay: "0.1s" }}>
          Providing Skilled, Non-Skilled Workforce & Professional Security Guards Across Lucknow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base font-heading"
          >
            <FileText className="w-5 h-5" />
            Request Manpower
          </button>
          <a
            href="tel:9792599887"
            className="flex items-center gap-2 px-8 py-4 bg-primary-foreground/15 hover:bg-primary-foreground/25 text-primary-foreground border border-primary-foreground/40 font-semibold rounded-lg transition-all duration-200 backdrop-blur-sm text-base font-heading"
          >
            <Phone className="w-5 h-5" />
            Call Now: 9792599887
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 max-w-lg mx-auto gap-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {[
            { number: "500+", label: "Workforce Deployed" },
            { number: "100+", label: "Happy Clients" },
            { number: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-secondary-light font-heading font-black text-2xl md:text-3xl">{stat.number}</p>
              <p className="text-primary-foreground/70 text-xs mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
