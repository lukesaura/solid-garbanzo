import Hero from '../components/Hero';
import Experience from '../components/Experience';
import CurrentWork from '../components/CurrentWork';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <main>
      <Hero />
      <Experience />
      <CurrentWork />
      <Projects />
      <Certifications />
      <Footer />
    </main>
  );
}
