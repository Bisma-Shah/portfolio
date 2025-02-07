import About from "./about/page";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Contact from "./contact/page";
import Skills from "./skills/page";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
