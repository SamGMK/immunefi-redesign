import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemStatement />
        <CaseStudies />
        <Testimonials />
        <Products />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
