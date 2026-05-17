import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { Projeler } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function ProjelerPage() {
  const [projects, setProjects] = useState<Projeler[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Projeler[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [categories, setCategories] = useState<string[]>(['Tümü']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'Tümü') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory, projects]);

  const loadProjects = async () => {
    try {
      setIsLoading(true);
      const result = await BaseCrudService.getAll<Projeler>('projeler');
      const sortedProjects = result.items.sort((a, b) => {
        const dateA = a._createdDate ? new Date(a._createdDate).getTime() : 0;
        const dateB = b._createdDate ? new Date(b._createdDate).getTime() : 0;
        return dateB - dateA;
      });
      setProjects(sortedProjects);
      setFilteredProjects(sortedProjects);

      const uniqueCategories = Array.from(
        new Set(sortedProjects.map((p) => p.category).filter(Boolean))
      ) as string[];
      setCategories(['Tümü', ...uniqueCategories]);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
              Projelerimiz
            </h1>
            <p className="font-paragraph text-primary-foreground/90 text-lg md:text-xl">
              Tamamladığımız başarılı projelerle, elektrik mühendisliği alanındaki deneyimimizi keşfedin
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-light-grey-background sticky top-20 md:top-24 z-40 shadow-md">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-center flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-foreground">
              <Filter className="w-5 h-5" />
              <span className="font-paragraph text-base">Filtrele:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`font-paragraph px-6 py-2 h-auto rounded transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                    : 'bg-background hover:bg-secondary/10 text-foreground border-2 border-foreground/20'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16">
          <div className="min-h-[600px]">
            {isLoading ? null : filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-light-grey-background rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                      {/* Main Project Image */}
                      {project.projectImage && (
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={project.projectImage}
                            alt={project.projectName || 'Proje Görseli'}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            width={600}
                          />
                          {project.category && (
                            <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded font-paragraph text-sm">
                              {project.category}
                            </div>
                          )}
                        </div>
                      )}

                      <div className="p-6">
                        <h3 className="font-heading text-primary text-xl mb-4">
                          {project.projectName || 'Proje'}
                        </h3>

                        {/* Before/After Images */}
                        {(project.beforeImage || project.afterImage) && (
                          <div className="grid grid-cols-2 gap-4 mt-4">
                            {project.beforeImage && (
                              <div>
                                <p className="font-paragraph text-xs text-foreground/70 mb-2">
                                  Önce
                                </p>
                                <div className="relative h-32 rounded overflow-hidden">
                                  <Image
                                    src={project.beforeImage}
                                    alt="Önce"
                                    className="w-full h-full object-cover"
                                    width={300}
                                  />
                                </div>
                              </div>
                            )}
                            {project.afterImage && (
                              <div>
                                <p className="font-paragraph text-xs text-foreground/70 mb-2">
                                  Sonra
                                </p>
                                <div className="relative h-32 rounded overflow-hidden">
                                  <Image
                                    src={project.afterImage}
                                    alt="Sonra"
                                    className="w-full h-full object-cover"
                                    width={300}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Filter className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="font-heading text-primary text-2xl mb-4">
                  Bu kategoride proje bulunamadı
                </h3>
                <p className="font-paragraph text-foreground text-lg">
                  Lütfen farklı bir kategori seçin veya tüm projeleri görüntüleyin
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
