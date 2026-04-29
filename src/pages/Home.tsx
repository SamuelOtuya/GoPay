import Hero from "../components/home/Hero";
import EntryPoints from "../components/home/EntryPoints";
import Categories from "../components/home/Categories";
import RiskSection from "../components/home/RiskSection";
import WhyUs from "../components/home/WhyUs";
import CTA from "../components/home/CTA";

function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <EntryPoints />
      <Categories />
      <RiskSection />
      <WhyUs />
      <CTA />
    </div>
  );
}

export default Home;
