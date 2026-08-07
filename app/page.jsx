import Hero from '../components/Hero';
import CurrentWork from '../components/CurrentWork';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <main className="page-front" style={{ padding: 'clamp(12px, 3vw, 40px) 0' }}>
      <div className="sheet">
        <div className="wrap">
          <Hero />
          <CurrentWork />
          <Experience />
          <Projects />
          <Certifications />
          <Footer />
        </div>
      </div>
    </main>
  );
}
