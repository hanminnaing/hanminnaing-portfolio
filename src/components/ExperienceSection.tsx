import { useInView } from '@/hooks/useInView';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Data Centre Commissioning Engineer',
    company: 'KAIGAN Co., Ltd.',
    location: 'Bangkok, Thailand',
    period: 'Feb 2023 – Present',
    type: 'Contract (via Kaigan for STT GDC)',
    responsibilities: [
      'Led L1–L5 commissioning, IST, SAT, and load bank testing for 19 MW live load across four hyperscale data centre phases',
      'Executed MV/LV switchgear commissioning, generator synchronization panels, UPS systems, and static transfer switches',
      'Commissioned fire detection/suppression systems (VESDA/ASD, N₂, pre-action) and integrated with BMS/SCADA alarms',
      'Verified ELV systems including access control, CCTV, and lighting controls in coordination with building automation',
      'Managed snag-list resolution and ensured 100% on-time, snag-free handover for all phases',
    ],
  },
  {
    title: 'Site Electrical Engineer',
    company: 'Synergy Engineering Consultant Co., Ltd.',
    location: 'Bangkok, Thailand',
    period: 'Jan 2019 – Jan 2023',
    type: 'Full-Time',
    responsibilities: [
      'Supervised MEP installations across hotels, commercial, and residential buildings (NEC & CEC compliant)',
      'Conducted inspections and QA/QC for LV switchgear, panel boards, wiring systems, and grounding',
      'Reviewed and marked up shop drawings for compliance with design intent and code requirements',
      'Coordinated with architects and structural engineers to resolve on-site clashes and RFIs',
      'Delivered commissioning support for HVAC, fire alarm, and lighting control systems',
    ],
  },
  {
    title: 'Electrical Design Engineer',
    company: 'AK Engineering & Consultancy Ltd.',
    location: 'Yangon, Myanmar',
    period: 'Feb 2014 – Oct 2018',
    type: 'Full-Time',
    responsibilities: [
      'Developed full electrical designs for over 200 commercial, hospitality, and residential projects using AutoCAD',
      'Performed load calculations, cable sizing, voltage drop analysis, and short-circuit studies',
      'Designed lighting layouts using AGi32 and DIALux, achieving 20–35% energy savings through optimization',
      'Produced detailed single-line diagrams, panel schedules, cable tray layouts, and equipment specifications',
      'Delivered 7-day fast-track electrical design for a 200-room, 5-storey hotel under tight deadlines',
    ],
  },
];

export function ExperienceSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Experience</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Professional <span className="text-gradient">Journey</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary shadow-glow z-10" />

                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="border-gradient p-6 rounded-lg bg-card hover:shadow-glow transition-all duration-300">
                    <div className={`flex flex-wrap items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} className="text-primary" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-primary" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-primary" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
