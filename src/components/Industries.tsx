import { Building2, Factory, Stethoscope, GraduationCap, Warehouse, Home } from "lucide-react";
import industriesCollage from "@/assets/industries-collage.jpg";

const industries = [
  { icon: Building2, name: "Corporate Offices", color: "primary" },
  { icon: Factory, name: "Factories", color: "secondary" },
  { icon: Stethoscope, name: "Hospitals", color: "primary" },
  { icon: GraduationCap, name: "Schools & Colleges", color: "secondary" },
  { icon: Warehouse, name: "Warehouses", color: "primary" },
  { icon: Home, name: "Residential Societies", color: "secondary" },
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Industries We Serve</p>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
            Serving Across <span className="text-gradient-brand">Every Sector</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our workforce solutions are tailored for diverse industries across Lucknow and beyond.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            const isGreen = industry.color === "secondary";
            return (
              <div
                key={industry.name}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border shadow-card-custom hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group text-center"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${isGreen ? "bg-secondary/10 group-hover:bg-secondary" : "bg-primary/10 group-hover:bg-primary"} transition-colors`}>
                  <Icon className={`w-7 h-7 ${isGreen ? "text-secondary group-hover:text-primary-foreground" : "text-primary group-hover:text-primary-foreground"} transition-colors`} />
                </div>
                <p className="font-heading font-semibold text-foreground text-sm leading-tight">{industry.name}</p>
              </div>
            );
          })}
        </div>

        {/* Industries collage image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-section">
          <img
            src={industriesCollage}
            alt="Industries served by Seltos - factory, hospital, office, warehouse, construction"
            className="w-full h-72 md:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Industries;
