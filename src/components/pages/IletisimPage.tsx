import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { LetiimFormu } from '@/entities';

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      const contactData: LetiimFormu = {
        _id: crypto.randomUUID(),
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        submissionDateTime: new Date().toISOString()
      };

      await BaseCrudService.create('iletisimformu', contactData);

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '0545 259 91 99',
      link: 'tel:05452599199'
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'info@altunmuhendislik.com',
      link: 'mailto:info@altunmuhendislik.com'
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Alibey Mh. İhsan Sarıbekir Sk. Cumhuriyet Apt. No:2 D:1 Silivri/İstanbul',
      link: null
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cumartesi: 08:00 - 18:00',
      link: null
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
              İletişim
            </h1>
            <p className="font-paragraph text-primary-foreground/90 text-lg md:text-xl">
              Projeleriniz için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 md:py-32 bg-light-grey-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {info.link ? (
                  <a
                    href={info.link}
                    className="block bg-background p-8 rounded-lg h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                  >
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                      <info.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-primary text-xl mb-4">
                      {info.title}
                    </h3>
                    <p className="font-paragraph text-foreground">
                      {info.content}
                    </p>
                  </a>
                ) : (
                  <div className="bg-background p-8 rounded-lg h-full">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                      <info.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-heading text-primary text-xl mb-4">
                      {info.title}
                    </h3>
                    <p className="font-paragraph text-foreground">
                      {info.content}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-primary text-3xl md:text-4xl mb-6">
                Bize Mesaj Gönderin
              </h2>
              <p className="font-paragraph text-foreground text-lg mb-8">
                Formu doldurarak bizimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağız.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block font-paragraph text-foreground text-sm mb-2"
                  >
                    Ad Soyad *
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full font-paragraph"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-paragraph text-foreground text-sm mb-2"
                  >
                    E-posta *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full font-paragraph"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-paragraph text-foreground text-sm mb-2"
                  >
                    Telefon *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full font-paragraph"
                    placeholder="0555 555 55 55"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-paragraph text-foreground text-sm mb-2"
                  >
                    Mesajınız *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full font-paragraph min-h-[150px]"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-secondary/10 border border-secondary rounded-lg">
                    <p className="font-paragraph text-secondary text-sm">
                      Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-destructive/10 border border-destructive rounded-lg">
                    <p className="font-paragraph text-destructive text-sm">
                      Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-paragraph text-base px-8 py-6 h-auto rounded transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    'Gönderiliyor...'
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Mesaj Gönder
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-primary text-3xl md:text-4xl mb-6">
                Konum
              </h2>
              <p className="font-paragraph text-foreground text-lg mb-8">
                Ofisimize gelerek yüz yüze görüşebilir, projeleriniz hakkında detaylı bilgi alabilirsiniz.
              </p>

              <div className="relative rounded-lg overflow-hidden shadow-2xl h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.8934!2d28.2461!3d41.0742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzI3LjEiTiAyOMKwMTQnNDYuMCJF!5e0!3m2!1str!2str!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Altun Mühendislik Konum"
                />
              </div>

              <div className="mt-8 p-6 bg-light-grey-background rounded-lg">
                <h3 className="font-heading text-primary text-xl mb-4">
                  Adres Bilgileri
                </h3>
                <p className="font-paragraph text-foreground mb-4">
                  Alibey Mh. İhsan Sarıbekir Sk. Cumhuriyet Apt. No:2 D:1<br />
                  Silivri/İstanbul
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-paragraph px-6 py-3 h-auto rounded transition-all duration-300"
                >
                  <a
                    href="https://www.google.com/maps/dir//41.0742,28.2461"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-5 w-5" />
                    Yol Tarifi Al
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
