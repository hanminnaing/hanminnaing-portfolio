import { Button } from '@/components/ui/button';
import { AnimatedMetric } from '@/components/AnimatedMetric';
import { MapPin, Mail, Phone, Linkedin, ChevronDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const metrics = [
  { value: 10, suffix: '+', label: 'Years Experience', sublabel: '' },
  { value: 4, suffix: '', label: 'Completed Data Centre Phases', sublabel: '(19 MW Total)' },
  { value: 200, suffix: '+', label: 'Commercial & Hospitality Projects', sublabel: '' },
  { value: 3, suffix: '', label: 'Companies Worked', sublabel: '' },
];

const achievements = [
  '19 MW live load commissioned across hyperscale data centre facilities',
  'ST Telemedia Global Data Centres (Phases 2–5) with $141M+ project value',
  '100% on-time, snag-free handover achieved on all commissioning phases',
  '200+ commercial & hospitality projects delivered to NEC & CEC standards',
  '20–35% energy savings achieved through AGi32 & DIALux lighting optimization',
  '7-day full electrical design turnaround for a 200-room, 5-storey hotel',
  'Zero major design clashes maintained over 7+ years of MEP coordination',
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 engineering-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 py-16 lg:py-24">
          {/* Left Side - Photo & Contact */}
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-primary rounded-full blur opacity-50 animate-pulse-glow" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/50">
                <img 
                  src={profilePhoto} 
                  alt="HAN MIN NAING - Data Centre Commissioning Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-8 text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:hanminnaing23@gmail.com" className="text-sm hover:text-primary transition-colors">
                  hanminnaing23@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <a href="tel:+66811288331" className="text-sm hover:text-primary transition-colors">
                  +66 81 128 8331
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm">Bangkok, Thailand</span>
              </div>
              <div className="flex items-center justify-center gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/han-m-n-2b8479124" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin size={20} className="text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-sm font-medium text-primary">Available for Immediate Start</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              HAN MIN <span className="text-gradient">NAING</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
              Data Centre Commissioning Engineer | Electrical & Fire Systems
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Hyperscale Data Centre Commissioning | Electrical, Fire & BMS Systems | 
              Registered Associate ASEAN Engineer (AAE)
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Metrics */}
        <div className="py-16 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((metric, index) => (
              <AnimatedMetric
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                sublabel={metric.sublabel}
                delay={index * 150}
              />
            ))}
          </div>
        </div>

        {/* Snapshot Summary */}
        <div className="py-16">
          <h3 className="font-heading text-2xl font-bold text-center mb-10">
            Proven <span className="text-gradient">Results</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pb-8">
          <a href="#about" className="animate-bounce">
            <ChevronDown size={32} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
