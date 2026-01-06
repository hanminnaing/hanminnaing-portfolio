import { useInView } from '@/hooks/useInView';
import { 
  Server, 
  Zap, 
  Flame, 
  Settings, 
  FileCheck, 
  Lightbulb, 
  Clock 
} from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'Data Centre Commissioning',
    description: 'Level 1–5 commissioning, IST, SAT, and Load Bank testing for hyperscale facilities',
  },
  {
    icon: Zap,
    title: 'Electrical & ELV System Testing',
    description: 'MV/LV switchgear, UPS systems, and ELV system verification and testing',
  },
  {
    icon: Flame,
    title: 'Fire Detection & Suppression',
    description: 'VESDA/ASD, N₂, and pre-action system commissioning and integration',
  },
  {
    icon: Settings,
    title: 'BMS & SCADA Verification',
    description: 'Alarm verification, field signal mapping, and building automation integration',
  },
  {
    icon: FileCheck,
    title: 'Electrical Design & QA/QC',
    description: 'Design review and quality assurance per NEC, CEC, SS CP, NFPA, IBC standards',
  },
  {
    icon: Lightbulb,
    title: 'Energy-Efficient Lighting Design',
    description: 'AGi32 & DIALux optimization achieving 20–35% energy savings',
  },
  {
    icon: Clock,
    title: 'Fast-Track Electrical Design',
    description: 'Rapid delivery of complete electrical designs under tight deadlines',
  },
];

export function ServicesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Services</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            What I <span className="text-gradient">Offer</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border-gradient p-6 rounded-lg bg-card hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
