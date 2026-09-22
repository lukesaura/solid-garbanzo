import Hero from '../components/Hero';
import CurrentWork from '../components/CurrentWork';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Academics from '../components/Academics';
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
          <Academics />
          <Certifications />
          <Footer />
        </div>
      </div>
    </main>
  );
}
