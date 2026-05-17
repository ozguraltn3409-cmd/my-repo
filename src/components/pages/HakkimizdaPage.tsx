import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Zap, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

export default function HakkimizdaPage() {
  const values = [
    {
      icon: Award,
      title: 'Kalite',
      description: 'Her projede en yüksek kalite standartlarını uyguluyoruz'
    },
    {
      icon: Users,
      title: 'Müşteri Odaklılık',
      description: 'Müşteri memnuniyeti bizim için her zaman önceliklidir'
    },
    {
      icon: Zap,
      title: 'İnovasyon',
      description: 'Yenilikçi çözümlerle sektörde fark yaratıyoruz'
    },
    {
      icon: CheckCircle,
      title: 'Güvenilirlik',
      description: 'Sözümüzün arkasında durarak güven inşa ediyoruz'
    }
  ];

  const expertise = [
    'GES (Güneş Enerji Santrali) Projelendirme ve Uygulama',
    'Trafo Projelendirme ve Uygulama',
    'BEDAŞ AG ve OG Projelendirme ve Uygulama',
    'Bina, Ticarethane ve Endüstriyel Tesislerin İç Tesisat Projelendirme ve Uygulama',
    'Kompanzasyon Sistemleri',
    'Aydınlatma Projeleri',
    'Topraklama ve Paratoner Sistemleri'
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
              Hakkımızda
            </h1>
            <p className="font-paragraph text-primary-foreground/90 text-lg md:text-xl">
              Elektrik mühendisliği alanında uzman ekibimizle, güvenilir ve kaliteli hizmet sunuyoruz
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent-light-blue rounded-lg blur-2xl opacity-20" />
                <Image
                  src="https://static.wixstatic.com/media/928035_bd155f4225b3454b9e74b711dc80e2b6~mv2.png?originWidth=768&originHeight=576"
                  alt="Altun Mühendislik Ekibi"
                  className="relative rounded-lg shadow-2xl"
                  width={800}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-primary text-4xl md:text-5xl mb-6">
                Altun Mühendislik
              </h2>
              <div className="space-y-4 font-paragraph text-foreground text-lg">
                <p>
                  Altun Mühendislik olarak, elektrik elektronik mühendisliği alanında uzman ekibimizle 
                  sektörde öncü bir konumdayız. Yılların getirdiği deneyim ve bilgi birikimimizle, 
                  müşterilerimize en kaliteli hizmeti sunmayı hedefliyoruz.
                </p>
                <p>
                  GES (Güneş Enerji Santrali) projelendirme ve uygulaması, trafo projelendirme ve uygulaması, 
                  BEDAŞ alçak gerilim (AG) ve orta gerilim (OG) projelendirme ve uygulaması, bina, ticarethane 
                  ve endüstriyel tesislerin iç tesisat projelendirme ve uygulaması hizmetlerini sunmaktayız.
                </p>
                <p>
                  Projelerimizde, modern teknolojileri kullanarak enerji verimliliğini ön planda tutuyoruz. 
                  Müşteri memnuniyeti odaklı çalışma prensibimizle, her projede mükemmelliği hedefliyoruz.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 md:py-32 bg-light-grey-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-heading text-primary text-4xl md:text-5xl mb-6">
                Kurucumuz
              </h2>
              <h3 className="font-heading text-secondary text-2xl md:text-3xl mb-4">
                Özgür Altun
              </h3>
              <p className="font-paragraph text-foreground/80 text-lg mb-6">
                Elektrik Elektronik Mühendisi
              </p>
              <div className="space-y-4 font-paragraph text-foreground text-lg">
                <p>
                  Elektrik elektronik mühendisliği alanında uzun yıllara dayanan deneyimimle, 
                  Altun Mühendislik'i sektörde güvenilir bir marka haline getirmeyi hedefledim.
                </p>
                <p>
                  Enerji sektöründeki gelişmeleri yakından takip ederek, müşterilerimize en güncel 
                  ve verimli çözümleri sunmak için çalışıyoruz. Ekibimizle birlikte, her projede 
                  mükemmelliği yakalamak için titizlikle çalışıyoruz.
                </p>
                <p>
                  Müşteri memnuniyeti ve kaliteli hizmet anlayışımızla, sektörde fark yaratmaya 
                  devam ediyoruz. Sizlere en iyi hizmeti sunmak için buradayız.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-light-blue to-secondary rounded-lg blur-2xl opacity-20" />
                <Image
                  src="https://static.wixstatic.com/media/928035_90cfd1b47ad54b84a3511bfbc24cf405~mv2.png?originWidth=768&originHeight=576"
                  alt="Özgür Altun - Elektrik Elektronik Mühendisi"
                  className="relative rounded-lg shadow-2xl"
                  width={800}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary to-secondary p-10 md:p-12 rounded-lg text-primary-foreground"
            >
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">
                Misyonumuz
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground/90">
                Elektrik mühendisliği alanında, en yüksek kalite standartlarında hizmet sunarak 
                müşterilerimizin enerji ihtiyaçlarına güvenilir, verimli ve sürdürülebilir çözümler 
                üretmek. Modern teknolojileri kullanarak, sektörde öncü bir konumda olmak ve 
                müşteri memnuniyetini her zaman ön planda tutmak.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-secondary to-accent-light-blue p-10 md:p-12 rounded-lg text-secondary-foreground"
            >
              <div className="w-16 h-16 bg-secondary-foreground/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">
                Vizyonumuz
              </h2>
              <p className="font-paragraph text-lg text-secondary-foreground/90">
                Türkiye'nin önde gelen elektrik mühendislik firmalarından biri olmak ve enerji 
                sektöründe yenilikçi çözümlerimizle fark yaratmak. Sürdürülebilir enerji 
                kaynaklarının yaygınlaşmasına katkıda bulunarak, daha yeşil bir gelecek için 
                çalışmak. Müşterilerimize sunduğumuz hizmet kalitesiyle sektörde referans 
                firma olmak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-light-grey-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-primary text-4xl md:text-5xl mb-6">
              Değerlerimiz
            </h2>
            <p className="font-paragraph text-foreground text-lg md:text-xl max-w-3xl mx-auto">
              İş yapış şeklimizi belirleyen temel prensiplerimiz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 rounded-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent-light-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-heading text-primary text-xl mb-4">
                  {value.title}
                </h3>
                <p className="font-paragraph text-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-primary text-4xl md:text-5xl mb-6">
              Uzmanlık Alanlarımız
            </h2>
            <p className="font-paragraph text-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Elektrik mühendisliği alanında geniş yelpazede hizmet sunuyoruz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-light-grey-background rounded-lg"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-secondary-foreground" />
                </div>
                <p className="font-paragraph text-foreground text-lg">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
