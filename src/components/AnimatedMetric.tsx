import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedMetricProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
  delay?: number;
}

export function AnimatedMetric({ value, suffix = '', label, sublabel, delay = 0 }: AnimatedMetricProps) {
  const { ref, isInView } = useInView();
  const count = useCountUp(value, 2000, isInView);

  return (
    <div 
      ref={ref}
      className="text-center opacity-0 animate-count-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
        <div className="relative">
          <span className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gradient">
            {count}{suffix}
          </span>
        </div>
      </div>
      <p className="mt-3 text-lg font-medium text-foreground">{label}</p>
      {sublabel && (
        <p className="text-sm text-muted-foreground">{sublabel}</p>
      )}
    </div>
  );
}
