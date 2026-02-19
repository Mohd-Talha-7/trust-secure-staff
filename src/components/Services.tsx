import { Wrench, Users, Shield } from "lucide-react";
import securityGuard from "@/assets/security-guard.jpg";

const serviceData = [
  {
    icon: Wrench,
    title: "Skilled Manpower",
    color: "primary",
    items: ["Electricians", "Plumbers", "Machine Operators", "Technicians"],
    description: "Certified and experienced professionals for specialized technical roles.",
  },
  {
    icon: Users,
    title: "Non-Skilled Workforce",
    color: "secondary",
    items: ["Helpers", "Loaders", "Housekeeping Staff", "Factory Workers"],
    description: "Reliable and hardworking workforce for operational and support tasks.",
  },
  {
    icon: Shield,
    title: "Security Services",
    color: "primary",
    items: ["Trained Security Guards", "Corporate Security", "Event Security", "24/7 Protection"],
    description: "Professionally trained guards ensuring safety and security round the clock.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
            Comprehensive <span className="text-gradient-brand">Workforce Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From technical experts to security professionals — we provide the right people for every requirement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {serviceData.map((service) => {
            const Icon = service.icon;
            const isGreen = service.color === "secondary";
            return (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 shadow-card-custom hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border group"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${isGreen ? "bg-secondary/10 group-hover:bg-secondary/20" : "bg-primary/10 group-hover:bg-primary/20"} transition-colors`}
                >
                  <Icon className={`w-7 h-7 ${isGreen ? "text-secondary" : "text-primary"}`} />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isGreen ? "bg-secondary" : "bg-primary"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Security guard banner */}
        <div className="rounded-2xl overflow-hidden shadow-section relative">
          <img
            src={securityGuard}
            alt="Professional security guard"
            className="w-full h-64 md:h-80 object-cover object-top"
          />
          <div className="absolute inset-0 gradient-hero flex items-center justify-center">
            <div className="text-center px-4">
              <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-heading font-black text-2xl md:text-3xl text-primary-foreground mb-3">
                Professional Security You Can Rely On
              </h3>
              <p className="text-primary-foreground/80 max-w-md mx-auto">
                All our security guards are trained, verified, and ready for deployment at your premises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
