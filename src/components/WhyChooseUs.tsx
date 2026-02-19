import { CheckCircle2, Zap, DollarSign, Award, Clock, Headphones } from "lucide-react";
import whyChooseBg from "@/assets/why-choose-bg.jpg";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Verified & Trained Staff",
    desc: "All personnel undergo thorough background checks and skill verification before deployment.",
  },
  {
    icon: Zap,
    title: "Quick Deployment",
    desc: "Rapid response to your manpower needs — we can deploy within 24 to 48 hours.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Competitive rates with flexible engagement models tailored to your budget.",
  },
  {
    icon: Award,
    title: "Reliable & Professional",
    desc: "Consistent quality service backed by years of experience in manpower supply.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Round-the-clock support team ready to address your concerns anytime.",
  },
  {
    icon: Headphones,
    title: "Dedicated Account Manager",
    desc: "A single point of contact for smooth communication and ongoing relationship management.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-background relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-5">
        <img src={whyChooseBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
            The Seltos <span className="text-gradient-brand">Advantage</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We go beyond just providing manpower — we build partnerships that help your business thrive.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={reason.title}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border shadow-card-custom hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center ${isEven ? "bg-primary/10" : "bg-secondary/10"} group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${isEven ? "text-primary" : "text-secondary"}`} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
