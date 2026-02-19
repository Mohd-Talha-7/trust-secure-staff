import { Quote } from "lucide-react";

const OwnerIntro = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 animate-fade-up">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Leadership
          </p>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground leading-tight">
            A Message From <span className="text-gradient-brand">Our Founder</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* Owner Image */}
            <div className="lg:col-span-2 flex justify-center animate-fade-up">
              <div className="relative group">
                {/* Gradient border ring */}
                <div className="absolute -inset-1.5 rounded-2xl gradient-brand opacity-60 blur-sm group-hover:opacity-80 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-card-hover border-2 border-white/80">
                  <img
                    src="/owner.jpg"
                    alt="Founder - Trust Secure Staff"
                    className="w-64 h-80 md:w-72 md:h-[22rem] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Name badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 gradient-brand text-primary-foreground px-6 py-2 rounded-full shadow-lg text-sm font-heading font-bold whitespace-nowrap">
                  Founder & CEO
                </div>
              </div>
            </div>

            {/* Quote Content */}
            <div className="lg:col-span-3 animate-slide-in-right">
              <div className="relative bg-card rounded-2xl p-8 md:p-10 shadow-card-custom border border-border">
                {/* Large quote icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                <blockquote className="text-foreground text-base md:text-lg leading-relaxed mb-6 font-light italic">
                  "At Trust Secure Staff, our greatest strength is our people. Every employee is not just part of our team, but a vital force driving our vision forward. Your dedication, honesty, and hard work build the foundation of our success every single day."
                </blockquote>

                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  "Together, we will continue to grow, achieve excellence, and create opportunities that empower both our clients and our workforce. Let's move forward with confidence, commitment, and a shared purpose."
                </p>

                {/* Signature line */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-heading font-black text-lg">T</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">Trust Secure Staff</p>
                    <p className="text-sm text-muted-foreground">Building Trust, Delivering Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerIntro;
