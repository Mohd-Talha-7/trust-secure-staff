import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Krishna Industrial Pvt Ltd",
    role: "Operations Manager",
    text: "Seltos Incredible Services has been our go-to manpower partner for over 2 years. Reliable, professional, and always on time. Highly recommended for any factory or office.",
    rating: 5,
  },
  {
    name: "Sunita Agarwal",
    company: "Medcare Hospital",
    role: "Admin Director",
    text: "We hired security guards and housekeeping staff through Seltos. Excellent background verification process and very professional deployment team.",
    rating: 5,
  },
  {
    name: "Anil Verma",
    company: "Lucknow Logistics Hub",
    role: "Facility Manager",
    text: "Quick response, verified workers, and affordable pricing — Seltos has helped our warehouse operations significantly. Their 24/7 support is a major plus.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
            What Our <span className="text-gradient-brand">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trusted by businesses across Lucknow for reliable workforce solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 border border-border shadow-card-custom hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-primary-foreground font-heading font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
