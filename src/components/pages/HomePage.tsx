// HPI 1.7-G
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Sun, Building2, Factory, Award, Users, CheckCircle, Phone, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

// --- Canonical Data Sources ---
const services = [
  {
    icon: Sun,
    title: 'GES Projelendirme',
    description: 'Çatı üstü ve arazi tipi güneş enerji santrali projeleri. Fizibilite, kurulum ve lisans süreçleri.',
    link: '/hizmetler#ges'
  },
  {
    icon: Zap,
    title: 'Trafo Sistemleri',
    description: 'Trafo merkezi projelendirme, kompanzasyon sistemleri, montaj ve devreye alma işlemleri.',
    link: '/hizmetler#trafo'
  },
  {
    icon: Building2,
    title: 'BEDAŞ Projeleri',
    description: 'AG ve OG projelendirme, BEDAŞ başvuru, onay süreçleri ve güç artışı işlemleri.',
    link: '/hizmetler#bedas'
  },
  {
    icon: Factory,
    title: 'İç Tesisat',
    description: 'Konut, ticarethane ve endüstriyel tesis elektrik projeleri, aydınlatma ve topraklama.',
    link: '/hizmetler#ic-tesisat'
  }
];

const reasons = [
  {
    icon: Award,
    title: 'Uzman Kadro',
    description: 'Elektrik elektronik mühendisliği alanında derin teknik bilgiye ve saha deneyimine sahip profesyonel ekip.'
  },
  {
    icon: CheckCircle,
    title: 'Kalite & Güven',
    description: 'Uluslararası standartlarda projelendirme ve uygulamadan taviz vermeyen, uzun ömürlü çözümler.'
  },
  {
    icon: Users,
    title: 'Müşteri Odaklılık',
    description: 'İhtiyaca özel mühendislik çözümleri, şeffaf süreç yönetimi ve kesintisiz teknik destek.'
  }
];

const stats = [
  { number: '150+', label: 'Tamamlanan Proje' },
  { number: '98%', label: 'Müşteri Memnuniyeti' },
  { number: '10+', label: 'Yıllık Deneyim' },
  { number: '50+', label: 'Kurumsal Referans' }
];
// ------------------------------

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  const servicesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: servicesScroll } = useScroll({
    target: servicesRef,
    offset: ["start start", "end end"]
  });
  const servicesX = useTransform(servicesScroll, [0, 1], ["0%", "-60%"]);

  return (
    <div className="min-h-screen bg-background selection:bg-secondary selection:text-secondary-foreground overflow-clip">
      <style>
        {`
          .blueprint-grid {
            background-size: 40px 40px;
            background-image: 
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          }
          .circuit-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawLine 3s ease-out forwards;
          }
          @keyframes drawLine {
            to { stroke-dashoffset: 0; }
          }
          .text-gradient {
            background: linear-gradient(135deg, #FFFFFF 0%, #4DA6FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}
      </style>

      <Header />
      
      {/* HERO SECTION - The Electric Nexus */}
      <section ref={heroRef} className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-primary">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <Image
            src="https://static.wixstatic.com/media/928035_3f224bc731154be8bc28f8c761234e42~mv2.png?originWidth=1152&originHeight=576"
            alt="Elektrik Mühendislik Altyapısı"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary" />
          <div className="absolute inset-0 blueprint-grid opacity-50" />
        </motion.div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-accent-light-blue/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Hero Content */}
          <div className="w-full lg:w-7/12 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[1px] w-12 bg-accent-light-blue" />
              <span className="font-paragraph text-accent-light-blue tracking-widest uppercase text-sm font-semibold">
                Altun Mühendislik
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[1.1] mb-8 tracking-tight"
            >
              Enerjinize <br />
              <span className="text-gradient">Güç Katıyoruz.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-paragraph text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
            >
              GES projeleri, trafo sistemleri, BEDAŞ süreçleri ve endüstriyel iç tesisat çözümlerinde, geleceğin enerji altyapısını bugünden inşa eden profesyonel mühendislik ortağınız.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            >
              <Button
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading text-lg px-10 py-8 h-auto rounded-none relative overflow-hidden group"
              >
                <a href="tel:05452599199" className="flex items-center gap-3">
                  <span className="relative z-10 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Ücretsiz Keşif
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-heading text-lg px-10 py-8 h-auto rounded-none transition-all duration-500"
              >
                <Link to="/hizmetler" className="flex items-center gap-3">
                  Hizmetleri İncele
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Hero Visual - Abstract Circuit/Energy Representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block w-5/12 relative h-[600px]"
          >
            <div className="absolute inset-0 border border-primary-foreground/10 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-8 border border-secondary/30 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-16 border border-accent-light-blue/20 rounded-full border-dashed animate-[spin_30s_linear_infinite]" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 bg-primary border border-secondary/50 rounded-full flex items-center justify-center overflow-hidden shadow-[0_0_100px_rgba(30,127,224,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent" />
                <Zap className="w-24 h-24 text-secondary" strokeWidth={1} />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-paragraph text-xs text-primary-foreground/50 uppercase tracking-widest">Keşfet</span>
          <div className="w-[1px] h-12 bg-primary-foreground/20 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-secondary"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* SERVICES SECTION - Horizontal Scroll Narrative */}
      <section ref={servicesRef} className="relative h-[300vh] bg-light-grey-background">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          
          <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16 mb-12 md:mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-8 bg-secondary" />
                  <span className="font-paragraph text-secondary tracking-widest uppercase text-sm font-semibold">
                    Uzmanlık Alanlarımız
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-6xl text-primary leading-tight">
                  Mühendislik <br /> Çözümleri
                </h2>
              </div>
              <p className="font-paragraph text-foreground/70 max-w-md text-lg">
                Her projede maksimum verimlilik ve güvenlik ilkesiyle, enerjinin olduğu her alanda profesyonel hizmet sunuyoruz.
              </p>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <motion.div 
              className="flex gap-6 md:gap-12 px-6 md:px-12 lg:px-16 w-max"
              style={{ x: servicesX }}
            >
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="w-[85vw] md:w-[500px] h-[450px] bg-background border border-foreground/5 p-10 flex flex-col justify-between group hover:border-secondary/30 transition-colors duration-500 relative overflow-hidden"
                >
                  {/* Card Background Effect */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-bl-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 ease-out" />
                  
                  <div>
                    <div className="w-16 h-16 bg-light-grey-background flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-500">
                      <service.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="font-paragraph text-foreground/70 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-2 font-heading text-secondary group-hover:text-primary transition-colors duration-300 mt-8"
                  >
                    Detaylı İncele
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Progress Bar */}
          <div className="absolute bottom-12 left-6 md:left-12 lg:left-16 right-6 md:right-12 lg:right-16 h-[2px] bg-foreground/10">
            <motion.div 
              className="h-full bg-secondary origin-left"
              style={{ scaleX: useTransform(servicesScroll, [0, 1], [0, 1]) }}
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - The Circuit Board Layout */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="text-center mb-24">
            <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-6">
              Neden Altun Mühendislik?
            </h2>
            <p className="font-paragraph text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Sektördeki tecrübemiz ve mühendislik disiplinimizle projelerinize değer katıyoruz.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Central Circuit Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary-foreground/10 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-24">
              {reasons.map((reason, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content Side */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-4">
                        {reason.title}
                      </h3>
                      <p className="font-paragraph text-primary-foreground/70 text-lg leading-relaxed">
                        {reason.description}
                      </p>
                    </div>

                    {/* Node Center */}
                    <div className="relative flex items-center justify-center w-16 h-16 shrink-0 z-10">
                      <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-20" />
                      <div className="w-16 h-16 bg-primary border-2 border-secondary rounded-full flex items-center justify-center">
                        <reason.icon className="w-6 h-6 text-secondary" />
                      </div>
                      {/* Connecting Line to Content (Desktop) */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-16 h-[2px] bg-secondary/50 ${isEven ? 'right-full' : 'left-full'}`} />
                    </div>

                    {/* Empty Side for Balance */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK - Visual Breather */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="https://static.wixstatic.com/media/928035_0c9d6814337e4d5a8b625d778704a3f1~mv2.png?originWidth=1152&originHeight=640"
            alt="Endüstriyel Tesis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground max-w-5xl leading-tight"
          >
            "Güvenli ve sürdürülebilir enerji altyapıları için mühendislik sanatını icra ediyoruz."
          </motion.h2>
        </div>
      </section>

      {/* STATS SECTION - Data Grid */}
      <section className="py-32 bg-background relative">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, backgroundColor: "rgba(255,255,255,0)" }}
                whileInView={{ opacity: 1, backgroundColor: "rgba(255,255,255,1)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-12 md:p-16 flex flex-col items-center justify-center text-center group hover:bg-light-grey-background transition-colors duration-500"
              >
                <div className="font-heading text-5xl md:text-7xl text-primary mb-4 group-hover:scale-110 transition-transform duration-500">
                  {stat.number}
                </div>
                <div className="font-paragraph text-foreground/70 text-sm md:text-base uppercase tracking-widest font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - The Final Connection */}
      <section className="py-32 bg-light-grey-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 skew-x-12 translate-x-1/4" />
        
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="bg-primary p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            {/* Background Pattern for CTA */}
            <div className="absolute inset-0 blueprint-grid opacity-20" />
            <div className="absolute -right-32 -top-32 w-96 h-96 bg-secondary/30 rounded-full blur-[100px]" />

            <div className="relative z-10 lg:w-1/2">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight">
                Projeniz İçin <br />
                <span className="text-secondary">Hemen Başlayalım</span>
              </h2>
              <p className="font-paragraph text-primary-foreground/80 text-lg md:text-xl mb-0">
                Ücretsiz keşif, teknik danışmanlık ve projelendirme hizmetleri için uzman mühendislerimizle iletişime geçin.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <Button
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading text-lg px-10 py-8 h-auto rounded-none transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,127,224,0.4)]"
              >
                <a href="tel:05452599199" className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  0545 259 91 99
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-heading text-lg px-10 py-8 h-auto rounded-none transition-all duration-300"
              >
                <Link to="/iletisim" className="flex items-center gap-3">
                  İletişim Formu
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}