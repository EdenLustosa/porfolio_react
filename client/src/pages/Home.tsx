import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 via-sky-50 to-sky-100">
      <Header />
      <main className="flex-grow">
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
