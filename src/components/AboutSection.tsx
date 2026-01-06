import { useInView } from '@/hooks/useInView';
import { GraduationCap, Award } from 'lucide-react';

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Professional <span className="text-gradient">Background</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Summary */}
            <div className="space-y-6">
              <div className="border-gradient p-6 rounded-lg bg-card">
                <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="text-primary" size={24} />
                  Professional Summary
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Data Centre Commissioning Engineer and Registered Associate ASEAN Engineer (AAE) 
                    with over 10 years of combined engineering experience in hyperscale data centre 
                    commissioning and international commercial project delivery.
                  </p>
                  <p>
                    Strong background in electrical design, site engineering, and commissioning with 
                    expertise in NEC, CEC, SS CP, and international data centre standards. Proven track 
                    record of delivering complex projects on time and within budget while maintaining 
                    the highest quality standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <div className="border-gradient p-6 rounded-lg bg-card">
                <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="text-primary" size={24} />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Bachelor of Engineering (Electrical Power)</h4>
                    <p className="text-muted-foreground">Government Technological College, Shwe Bo</p>
                    <p className="text-sm text-muted-foreground">(Affiliated with Mandalay Technological University)</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-primary">2008 – 2013</span>
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        CGPA: 4.74 / 5.0
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="border-gradient p-6 rounded-lg bg-card">
                <h3 className="font-heading text-xl font-semibold mb-4">Languages</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-lg bg-secondary/50">
                    <p className="font-medium text-foreground">English</p>
                    <p className="text-sm text-primary">Proficient</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary/50">
                    <p className="font-medium text-foreground">Thai</p>
                    <p className="text-sm text-muted-foreground">Basic</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary/50">
                    <p className="font-medium text-foreground">Burmese</p>
                    <p className="text-sm text-primary">Native</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
