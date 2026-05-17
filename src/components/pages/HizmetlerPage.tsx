import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Zap, Building2, Factory, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

export default function HizmetlerPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const services = [
    {
      id: 'ges',
      icon: Sun,
      title: 'GES (Güneş Enerji Santrali) Projelendirme ve Uygulama',
      description: 'Güneş enerjisi sistemleri ile sürdürülebilir enerji çözümleri sunuyoruz',
      features: [
        'Çatı üstü GES projeleri',
        'Arazi tipi GES projeleri',
        'Fizibilite çalışmaları',
        'Projelendirme ve mühendislik hizmetleri',
        'Kurulum ve montaj',
        'Devreye alma ve test işlemleri',
        'Lisanslı GES başvuruları',
        'Lisanssız GES başvuruları',
        'Bakım ve onarım hizmetleri'
      ],
      image: 'https://static.wixstatic.com/media/928035_03f619a376c44b969841807fb6c133e4~mv2.png?originWidth=768&originHeight=576'
    },
    {
      id: 'trafo',
      icon: Zap,
      title: 'Trafo Projelendirme ve Uygulama',
      description: 'Trafo merkezi ve güç sistemleri için profesyonel çözümler',
      features: [
        'Trafo merkezi projelendirme',
        'Kompanzasyon sistemleri',
        'Güç faktörü düzeltme',
        'Trafo seçimi ve hesaplamaları',
        'Trafo montaj ve kurulum',
        'Devreye alma işlemleri',
        'Periyodik bakım hizmetleri',
        'Arıza tespit ve onarım',
        'Enerji kalitesi analizi'
      ],
      image: 'https://static.wixstatic.com/media/928035_48d76dc3275b4a288fab2e0bfe27e9f0~mv2.png?originWidth=768&originHeight=576'
    },
    {
      id: 'bedas',
      icon: Building2,
      title: 'BEDAŞ AG ve OG Projelendirme ve Uygulama',
      description: 'BEDAŞ başvuru süreçleri ve elektrik bağlantı işlemleri',
      features: [
        'Alçak gerilim (AG) projeleri',
        'Orta gerilim (OG) projeleri',
        'BEDAŞ başvuru işlemleri',
        'Onay ve izin süreçleri',
        'Abone bağlantı işlemleri',
        'Güç artışı başvuruları',
        'Sayaç panosu projeleri',
        'Elektrik abonelik işlemleri',
        'Teknik şartname hazırlama'
      ],
      image: 'https://static.wixstatic.com/media/928035_8fff87fac6274337a42712e25ca68e30~mv2.png?originWidth=768&originHeight=576'
    },
    {
      id: 'ic-tesisat',
      icon: Factory,
      title: 'İç Tesisat Projelendirme ve Uygulama',
      description: 'Konut, ticarethane ve endüstriyel tesisler için elektrik tesisat çözümleri',
      features: [
        'Konut elektrik tesisatı',
        'Bina ve site elektrik projeleri',
        'Ticarethane elektrik sistemleri',
        'Ofis elektrik projeleri',
        'Endüstriyel tesis elektrik projeleri',
        'Aydınlatma projeleri',
        'Topraklama sistemleri',
        'Paratoner sistemleri',
        'Zayıf akım sistemleri',
        'Otomasyon sistemleri'
      ],
      image: 'https://static.wixstatic.com/media/928035_9c1e8209dac745d9bba0501ea2d1f398~mv2.png?originWidth=768&originHeight=576'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-light-blue rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-primary-foreground text-5xl md:text-6xl lg:text-7xl mb-6">
              Hizmetlerimiz
            </h1>
            <p className="font-paragraph text-primary-foreground/90 text-lg md:text-xl">
              Elektrik mühendisliği alanında geniş yelpazede profesyonel hizmetler sunuyoruz
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 md:py-32 ${
            index % 2 === 0 ? 'bg-background' : 'bg-light-grey-background'
          }`}
        >
          <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              index % 2 === 0 ? '' : 'lg:grid-flow-dense'
            }`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 0 ? '' : 'lg:col-start-2'}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent-light-blue rounded-lg blur-2xl opacity-20" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="relative rounded-lg shadow-2xl"
                    width={800}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                
                <h2 className="font-heading text-primary text-3xl md:text-4xl mb-6">
                  {service.title}
                </h2>
                
                <p className="font-paragraph text-foreground text-lg mb-8">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-secondary-foreground" />
                      </div>
                      <p className="font-paragraph text-foreground">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-paragraph text-base px-8 py-6 h-auto rounded transition-all duration-300 hover:scale-105"
                >
                  <a href="tel:05452599199">
                    <Phone className="mr-2 h-5 w-5" />
                    Detaylı Bilgi İçin Arayın
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-primary-foreground text-3xl md:text-4xl lg:text-5xl mb-6">
              Projeniz İçin Ücretsiz Keşif
            </h2>
            <p className="font-paragraph text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Elektrik mühendisliği ihtiyaçlarınız için profesyonel danışmanlık ve çözüm önerilerimiz için bizimle iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-paragraph text-base px-8 py-6 h-auto rounded transition-all duration-300 hover:scale-105"
              >
                <a href="tel:05452599199">
                  <Phone className="mr-2 h-5 w-5" />
                  0545 259 91 99
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
