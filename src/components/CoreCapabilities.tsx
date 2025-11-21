import { FlaskConical, Brain, Zap, Users, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";

const CoreCapabilities = () => {
  const capabilities = [
    {
      icon: FlaskConical,
      title: "Smart Drug Design",
      description: "AI analyzes millions of molecular structures in seconds, identifying promising drug candidates that would take humans years to discover. Machine learning predicts which molecules will be safe and effective before synthesis begins."
    },
    {
      icon: Brain,
      title: "Molecular Behavior Prediction",
      description: "Advanced AI models simulate how drug molecules interact with the human body at the atomic level. This predictive power helps scientists understand drug efficacy and side effects before clinical testing."
    },
    {
      icon: Zap,
      title: "Accelerated Clinical Trials",
      description: "AI streamlines patient recruitment, monitors real-time data, and identifies patterns that speed up trials from years to months. Smart algorithms ensure trials are safer and more efficient."
    },
    {
      icon: Users,
      title: "Personalized Medicine",
      description: "AI analyzes your unique genetic makeup, lifestyle, and medical history to recommend treatments tailored specifically for you. Every patient receives care optimized for their individual needs."
    },
    {
      icon: Shield,
      title: "Enhanced Safety",
      description: "Intelligent systems continuously monitor medication interactions, predict adverse reactions, and alert healthcare providers in real-time. AI acts as a guardian, catching potential issues before they harm patients."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              How AI is Transforming
            </span>
            <br />
            <span className="text-foreground">Modern Medicine</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five revolutionary ways artificial intelligence is making healthcare more intelligent, 
            efficient, and compassionate.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard {...capability} gradient={index % 2 === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
