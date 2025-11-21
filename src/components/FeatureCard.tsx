import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, gradient = false }: FeatureCardProps) => {
  return (
    <Card className={`p-8 transition-all hover:shadow-glow hover:-translate-y-2 border-border/50 ${
      gradient ? 'bg-gradient-card' : 'bg-card'
    }`}>
      <div className="inline-flex p-3 rounded-2xl bg-gradient-primary mb-6 shadow-soft">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-foreground">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Card>
  );
};

export default FeatureCard;
