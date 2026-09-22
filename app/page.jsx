import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Lab from "@/components/Lab";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Focus from "@/components/Focus";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Lab />
        <Experience />
        <Projects />
        <Certificates />
        <Focus />
      </main>
      <Footer />
    </>
  );
}
