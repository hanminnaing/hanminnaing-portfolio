import { useInView } from '@/hooks/useInView';

const skillCategories = [
  {
    title: 'Data Centre Commissioning',
    skills: ['L1–L5 Commissioning', 'IST', 'SAT', 'Load Bank Testing'],
  },
  {
    title: 'MV/LV Switchgear',
    skills: ['HVSB/RMU', 'ELV Systems', 'Power Distribution'],
  },
  {
    title: 'UPS & Generators',
    skills: ['Backup Power Systems', 'Gen Sync Panels', 'Static Transfer Switches'],
  },
  {
    title: 'Fire Suppression & Detection',
    skills: ['N₂ Systems', 'VESDA/ASD', 'Pre-action Systems'],
  },
  {
    title: 'BMS & SCADA',
    skills: ['Alarm Verification', 'Field Signal Mapping', 'Building Automation'],
  },
  {
    title: 'Design Software',
    skills: ['AutoCAD (7+ Years)', 'Revit MEP', 'AGi32', 'DIALux'],
  },
  {
    title: 'Codes & Standards',
    skills: ['TIA-942', 'SS CP', 'NEC', 'IECC', 'IEC', 'IEEE'],
  },
  {
    title: 'Operations',
    skills: ['Access/CCTV', 'Lighting Controls', 'QA/QC', 'Snag-list Management'],
  },
];

const certifications = [
  { title: 'Associate ASEAN Engineer (AAE)', org: 'AFEO', year: '2015' },
  { title: 'Electrical Inspection (EI), Grade-2', org: '', year: '2015' },
  { title: 'Diploma in Project Management', org: 'ICM UK', year: '2019' },
];

export function SkillsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Skills & Certifications</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Technical <span className="text-gradient">Expertise</span>
          </h2>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="border-gradient p-5 rounded-lg bg-card"
              >
                <h3 className="font-heading font-semibold text-foreground mb-3 text-sm">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-center mb-8">
              Professional <span className="text-gradient">Certifications</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">{cert.year.slice(-2)}</span>
                  </div>
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                    {cert.title}
                  </h4>
                  {cert.org && (
                    <p className="text-xs text-muted-foreground">{cert.org}</p>
                  )}
                  <p className="text-xs text-primary mt-2">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
