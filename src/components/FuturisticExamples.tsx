import { Card } from "@/components/ui/card";
import { Atom, Monitor, Beaker, Pill, Bot } from "lucide-react";
import moleculeImage from "@/assets/molecule-generation.jpg";
import digitalTwinImage from "@/assets/digital-twin.jpg";

const FuturisticExamples = () => {
  const examples = [
    {
      icon: Atom,
      title: "AI-Driven Molecule Generation",
      description: "Generative AI creates entirely new molecular structures optimized for specific diseases. These AI-designed molecules can target cancer cells, fight resistant bacteria, or cross the blood-brain barrier—feats that seemed impossible just years ago.",
      image: moleculeImage,
      stats: "Millions of molecules analyzed per second"
    },
    {
      icon: Monitor,
      title: "Digital Twin Simulations",
      description: "Your digital twin is a virtual replica of your body that AI uses to test treatments before you take them. Doctors can simulate how different medications will affect YOU specifically, ensuring the safest and most effective care.",
      image: digitalTwinImage,
      stats: "99% accuracy in treatment prediction"
    },
    {
      icon: Beaker,
      title: "Autonomous Robotic Labs",
      description: "AI-powered robots work 24/7 in laboratories, conducting thousands of experiments simultaneously. They never tire, make precise measurements, and learn from each experiment to optimize the next one.",
      stats: "1000x faster than traditional labs"
    },
    {
      icon: Pill,
      title: "Smart Drug Delivery Systems",
      description: "Nano-robots guided by AI navigate your bloodstream, delivering medicine exactly where needed. These microscopic marvels release drugs at precisely the right time and place, maximizing benefits while minimizing side effects.",
      stats: "Targeted delivery with 95% precision"
    },
    {
      icon: Bot,
      title: "Compassionate Virtual Assistants",
      description: "AI health companions monitor your wellbeing, answer questions 24/7, remind you to take medications, and provide emotional support. They're always available, infinitely patient, and genuinely care about your health journey.",
      stats: "Available anytime, anywhere"
    }
  ];

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-secondary/5 to-background/0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">The Future is</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Already Here
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary technologies that sound like science fiction are saving lives today. 
            Here's how lovable AI is building tomorrow's healthcare.
          </p>
        </div>

        <div className="space-y-8">
          {examples.map((example, index) => (
            <Card 
              key={index} 
              className="p-8 lg:p-12 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-primary shadow-soft">
                    <example.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground">
                    {example.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {example.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20">
                    <Zap className="w-4 h-4 text-secondary" />
                    <span className="font-semibold text-secondary">{example.stats}</span>
                  </div>
                </div>
                
                {example.image && (
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 animate-glow" />
                    <img 
                      src={example.image} 
                      alt={example.title}
                      className="relative rounded-2xl shadow-2xl w-full"
                    />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default FuturisticExamples;
