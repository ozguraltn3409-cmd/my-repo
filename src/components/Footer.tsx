import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Hizmetlerimiz', path: '/hizmetler' },
    { name: 'Projeler', path: '/projeler' },
    { name: 'İletişim', path: '/iletisim' }
  ];

  const services = [
    { name: 'GES Projelendirme', path: '/hizmetler#ges' },
    { name: 'Trafo Sistemleri', path: '/hizmetler#trafo' },
    { name: 'BEDAŞ Projeleri', path: '/hizmetler#bedas' },
    { name: 'İç Tesisat', path: '/hizmetler#ic-tesisat' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent-light-blue rounded-lg flex items-center justify-center">
                <span className="font-heading text-secondary-foreground text-2xl">A</span>
              </div>
              <div>
                <div className="font-heading text-xl text-primary-foreground">
                  Altun Mühendislik
                </div>
                <div className="font-paragraph text-sm text-primary-foreground/70">
                  Elektrik Mühendislik
                </div>
              </div>
            </div>
            <p className="font-paragraph text-primary-foreground/80 mb-6">
              Elektrik mühendisliği alanında profesyonel çözümler sunuyoruz. 
              Enerjinize güç katıyoruz.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl text-primary-foreground mb-6">
              Hızlı Linkler
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-paragraph text-primary-foreground/80 hover:text-accent-light-blue transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-xl text-primary-foreground mb-6">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="font-paragraph text-primary-foreground/80 hover:text-accent-light-blue transition-colors duration-300 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl text-primary-foreground mb-6">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:05452599199"
                  className="flex items-start space-x-3 font-paragraph text-primary-foreground/80 hover:text-accent-light-blue transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span>0545 259 91 99</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@altunmuhendislik.com"
                  className="flex items-start space-x-3 font-paragraph text-primary-foreground/80 hover:text-accent-light-blue transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span>info@altunmuhendislik.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 font-paragraph text-primary-foreground/80">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    Alibey Mh. İhsan Sarıbekir Sk. Cumhuriyet Apt. No:2 D:1 Silivri/İstanbul
                  </span>
                </div>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
              <p className="font-paragraph text-sm text-primary-foreground/80">
                <strong className="text-primary-foreground">Çalışma Saatleri:</strong><br />
                Pazartesi - Cumartesi<br />
                08:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-paragraph text-sm text-primary-foreground/70 text-center md:text-left">
              © {currentYear} Altun Mühendislik — Tüm Hakları Saklıdır.
            </p>
            <p className="font-paragraph text-sm text-primary-foreground/70 text-center md:text-right">
              Elektrik Elektronik Mühendisliği | GES | Trafo | BEDAŞ | İç Tesisat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
