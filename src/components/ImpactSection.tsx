import { Card } from "@/components/ui/card";
import { Heart, TrendingUp, Globe, Clock } from "lucide-react";

const ImpactSection = () => {
  const impacts = [
    {
      icon: Heart,
      metric: "70%",
      label: "Reduction in drug development costs",
      description: "Making life-saving medications more accessible and affordable"
    },
    {
      icon: Clock,
      metric: "5-10 years",
      label: "Faster drug discovery",
      description: "Bringing cures to patients in months instead of decades"
    },
    {
      icon: TrendingUp,
      metric: "90%",
      label: "Improved treatment accuracy",
      description: "Personalized care that works better for each individual"
    },
    {
      icon: Globe,
      metric: "Billions",
      label: "People reached globally",
      description: "Healthcare accessible to remote and underserved communities"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Real Impact
            </span>
            <br />
            <span className="text-foreground">Real People</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond the technology, here's how lovable AI is making a measurable difference 
            in healthcare outcomes worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <Card 
              key={index}
              className="p-8 text-center bg-gradient-card border-border/50 hover:shadow-glow transition-all hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-primary mb-6 shadow-soft">
                <impact.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {impact.metric}
              </div>
              
              <div className="font-semibold text-foreground mb-3">
                {impact.label}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {impact.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
