import { Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-gradient">HMN</span>
            <span className="text-sm text-muted-foreground">
              © {currentYear} Han Min Naing. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="mailto:hanminnaing23@gmail.com"
              className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} className="text-muted-foreground hover:text-primary" />
            </a>
            <a 
              href="tel:+66811288331"
              className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Phone"
            >
              <Phone size={18} className="text-muted-foreground hover:text-primary" />
            </a>
            <a 
              href="https://www.linkedin.com/in/han-m-n-2b8479124"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
