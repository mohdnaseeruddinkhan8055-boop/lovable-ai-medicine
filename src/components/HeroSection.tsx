import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-medicine.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-glow" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-soft">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">The Future of Medicine</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Lovable AI
              </span>
              <br />
              <span className="text-foreground">
                Revolutionizing Healthcare
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Discover how human-centric artificial intelligence is transforming medicine—from 
              designing breakthrough drugs to personalizing treatments, making healthcare more 
              efficient, caring, and accessible for everyone.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="shadow-soft hover:shadow-glow transition-all">
                Explore the Future
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="shadow-soft">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20" />
            <img 
              src={heroImage} 
              alt="AI-powered medical technology visualization" 
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
