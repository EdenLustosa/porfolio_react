import { Mail, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-white/50 backdrop-blur-sm py-12 md:py-16 text-center mt-12">
      <div className="container">
        <p className="text-gray-700 font-semibold mb-8">
          &copy; 2024 Eden Lustosa Nogueira. Todos os direitos reservados.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 flex-wrap">
          <a
            href="mailto:edenlustosa@hotmail.com"
            className="relative inline-flex items-center gap-2 px-8 py-3 bg-white text-sky-600 font-bold uppercase text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:-translate-y-0.5 border-2 border-white hover:border-sky-300 group"
          >
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
            E-mail
          </a>

          <a
            href="#"
            className="relative inline-flex items-center gap-2 px-8 py-3 bg-white text-sky-600 font-bold uppercase text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:-translate-y-0.5 border-2 border-white hover:border-sky-300 group"
          >
            <Github size={18} className="group-hover:scale-110 transition-transform" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
