import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OwnerIntro from "@/components/OwnerIntro";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTAStrip from "@/components/CTAStrip";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OwnerIntro />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Testimonials />
        <Gallery />
        <CTAStrip />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
