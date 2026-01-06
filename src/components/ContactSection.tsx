import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export function ContactSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Available for immediate start | Open to international relocation
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="border-gradient p-6 rounded-lg bg-card">
                <h3 className="font-heading text-xl font-semibold mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:hanminnaing23@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">hanminnaing23@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+66811288331"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
                      <p className="font-medium text-foreground">+66 81 128 8331</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/han-m-n-2b8479124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium text-foreground">Connect with me</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">Bangkok, Thailand</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="space-y-6">
              <div className="border-gradient p-6 rounded-lg bg-card h-full flex flex-col justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium">Available Now</span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Ready for Your Next Project
                  </h3>
                  
                  <p className="text-muted-foreground mb-8">
                    With 10+ years of engineering experience and expertise in hyperscale data centre 
                    commissioning, I'm ready to contribute to your team's success.
                  </p>

                  <div className="space-y-4">
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <a href="mailto:hanminnaing23@gmail.com">
                        <Send className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    <Button variant="heroOutline" size="lg" className="w-full" asChild>
                      <a href="https://wa.me/66811288331" target="_blank" rel="noopener noreferrer">
                        <Phone className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
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
