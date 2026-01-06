import { useInView } from '@/hooks/useInView';
import { Building2, Building, Home, DollarSign, Zap } from 'lucide-react';

const projects = {
  datacentres: [
    {
      name: 'ST Telemedia GDC, Bangkok',
      phases: 'Phases 2 & 3',
      capacity: '8 MW',
      value: '$61M+',
      period: '2023–2024',
      role: 'Lead Commissioning Engineer',
    },
    {
      name: 'ST Telemedia GDC, Bangkok',
      phases: 'Phases 4 & 5',
      capacity: '11 MW',
      value: '$80M+',
      period: '2024–2025',
      role: 'Lead Commissioning Engineer',
    },
  ],
  commercial: [
    { name: 'Hilton Hotels', type: 'Hospitality' },
    { name: 'Holiday Inn Express', type: 'Hospitality' },
    { name: 'Fairfield Inn', type: 'Hospitality' },
    { name: 'TRU by Hilton', type: 'Hospitality' },
    { name: 'Cambria Hotels', type: 'Hospitality' },
    { name: 'Home2Suites', type: 'Hospitality' },
  ],
  residential: [
    {
      name: 'GEMS Garden Condominiums',
      phases: 'Phases 1 & 4',
      description: '21-Storey Luxury Residences',
    },
  ],
};

export function ProjectsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          {/* Hyperscale Data Centres */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-primary" size={24} />
              <h3 className="font-heading text-xl font-semibold">Hyperscale Data Centres</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.datacentres.map((project, index) => (
                <div 
                  key={index}
                  className="border-gradient p-6 rounded-lg bg-card hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">{project.name}</h4>
                      <p className="text-primary text-sm">{project.phases}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {project.period}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Zap size={16} className="text-primary" />
                      <span className="text-sm text-muted-foreground">{project.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign size={16} className="text-primary" />
                      <span className="text-sm text-muted-foreground">{project.value}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">{project.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial & Hospitality */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Building className="text-primary" size={24} />
              <h3 className="font-heading text-xl font-semibold">Commercial & Hospitality</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {projects.commercial.map((project, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/30 text-center transition-all duration-300"
                >
                  <p className="font-medium text-foreground text-sm">{project.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{project.type}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Residential */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Home className="text-primary" size={24} />
              <h3 className="font-heading text-xl font-semibold">Residential</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.residential.map((project, index) => (
                <div 
                  key={index}
                  className="border-gradient p-6 rounded-lg bg-card hover:shadow-glow transition-all duration-300"
                >
                  <h4 className="font-heading font-semibold text-foreground">{project.name}</h4>
                  <p className="text-primary text-sm">{project.phases}</p>
                  <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
