import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
export default function Home() {
  return (
    <div>
      <section className="section-padding">
        <Hero />
      </section>
      <section className="section-padding">
        <Services />
      </section>
      <section className="section-padding">
        <HowItWorks />
      </section>
      <section className="section-padding">
        <Pricing />
      </section>
      <section className="section-padding">
        <Banner />
      </section>
      <section className="px-12">
        <Footer />
      </section>
    </div>
  );
}
