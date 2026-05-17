import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Hizmetlerimiz', path: '/hizmetler' },
    { name: 'Projeler', path: '/projeler' },
    { name: 'İletişim', path: '/iletisim' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-secondary to-accent-light-blue rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="font-heading text-secondary-foreground text-xl md:text-2xl">A</span>
              </div>
              <div>
                <div className={`font-heading text-lg md:text-xl transition-colors duration-300 ${
                  isScrolled ? 'text-primary' : 'text-primary-foreground'
                }`}>
                  Altun Mühendislik
                </div>
                <div className={`font-paragraph text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-foreground/70' : 'text-primary-foreground/70'
                }`}>
                  Elektrik Mühendislik
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-paragraph text-base transition-colors duration-300 relative group ${
                    location.pathname === link.path
                      ? isScrolled
                        ? 'text-secondary'
                        : 'text-accent-light-blue'
                      : isScrolled
                      ? 'text-foreground hover:text-secondary'
                      : 'text-primary-foreground hover:text-accent-light-blue'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-paragraph px-6 py-2 h-auto rounded transition-all duration-300 hover:scale-105"
              >
                <a href="tel:05452599199">
                  <Phone className="mr-2 h-4 w-4" />
                  0545 259 91 99
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded transition-colors duration-300 ${
                isScrolled
                  ? 'text-primary hover:bg-primary/10'
                  : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 md:top-24 left-0 right-0 z-40 lg:hidden bg-background shadow-xl overflow-hidden"
          >
            <nav className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block font-paragraph text-lg transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-secondary'
                      : 'text-foreground hover:text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-paragraph px-6 py-3 h-auto rounded"
              >
                <a href="tel:05452599199">
                  <Phone className="mr-2 h-5 w-5" />
                  0545 259 91 99
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/905452599199"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp ile iletişime geç"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
