import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <nav className="container flex justify-between items-center py-4">
        <div className="text-xl font-bold text-gray-800">
          Eden Lustosa Nogueira
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 uppercase text-sm font-semibold hover:text-blue-600 transition-colors duration-300"
            >
              Sobre mim
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-gray-700 uppercase text-sm font-semibold hover:text-blue-600 transition-colors duration-300"
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 uppercase text-sm font-semibold hover:text-blue-600 transition-colors duration-300"
            >
              Contato
            </button>
          </li>
        </ul>

        {/* Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="container py-4 flex flex-col gap-4 list-none">
            <li>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 uppercase text-sm font-semibold hover:text-blue-600 transition-colors duration-300 w-full text-left"
              >
                Sobre mim
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projetos')}
                className="text-gray-700 uppercase text-sm font-semibold hover:text-blue-600 transition-colors duration-300 w-full text-left"
              >
                Projetos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 uppercase text-sm font-semibold hover:text-blue-600 transition-colors duration-300 w-full text-left"
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
