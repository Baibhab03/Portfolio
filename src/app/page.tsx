import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
// import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      {/* <Reviews /> */}
      <CTA />
    </>
  );
}
