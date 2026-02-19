import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const AboutUs = () => {
  const highlights = [
    "Trusted since establishment in Lucknow",
    "Serving factories, offices, hospitals & institutions",
    "Fully verified and trained workforce",
    "Quick deployment across all sectors",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="rounded-2xl overflow-hidden shadow-card-custom">
              <img
                src={aboutImage}
                alt="Seltos team meeting"
                className="w-full h-[420px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-card rounded-xl shadow-card-hover p-4 flex items-center gap-3 border border-border">
              <div className="w-12 h-12 rounded-lg gradient-brand flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-heading font-black text-lg">S</span>
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-sm">Seltos Incredible</p>
                <p className="text-muted-foreground text-xs">Services Pvt Ltd</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Lucknow's Most <span className="text-gradient-brand">Trusted Manpower</span> Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Seltos Incredible Services Pvt Ltd is a trusted manpower supply company based in Lucknow. We provide skilled, semi-skilled, and non-skilled workforce along with professional security guards to businesses, factories, offices, hospitals, and institutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is to deliver reliable manpower solutions that help businesses grow efficiently and securely — building long-term partnerships through transparency and dedication.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:9792599887"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-brand text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-md font-heading"
            >
              Learn More — Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
