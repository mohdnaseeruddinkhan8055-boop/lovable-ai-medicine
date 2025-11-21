import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex p-4 rounded-full bg-gradient-primary shadow-glow mb-4 animate-float">
            <Heart className="w-12 h-12 text-primary-foreground" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="text-foreground">Healthcare That</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cares About You
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Lovable AI isn't just about efficiency—it's about compassion. It's about ensuring 
            every patient receives care that's not only cutting-edge but also deeply personal, 
            accessible, and human-centered.
          </p>
          
          <div className="space-y-6 pt-8">
            <p className="text-lg text-foreground font-medium">
              The future of medicine is intelligent, caring, and within reach.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="shadow-soft hover:shadow-glow transition-all">
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="shadow-soft">
                Explore Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
