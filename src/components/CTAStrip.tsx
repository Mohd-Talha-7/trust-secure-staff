import { Phone } from "lucide-react";

const CTAStrip = () => {
  return (
    <section className="py-14 gradient-cta">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-heading font-black text-2xl md:text-3xl text-primary-foreground mb-2">
              Looking for Reliable Security & Manpower?
            </h2>
            <p className="text-primary-foreground/80">
              Get in touch today — quick deployment, verified staff, affordable pricing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-all hover:-translate-y-0.5 font-heading shadow-lg"
            >
              Request a Call Back
            </button>
            <a
              href="tel:9792599887"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all font-heading"
            >
              <Phone className="w-4 h-4" />
              9792599887
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;
