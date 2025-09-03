import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src={`${import.meta.env.BASE_URL}lovable-uploads/8dc20bbe-b45e-4b7d-b31a-e5988e36a616.png`}
              alt="Barnabas Gavin Cangan"
              className="w-48 h-48 rounded-full mx-auto mb-6 shadow-elegant object-cover"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Barnabas Gavin Cangan
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              humanist. roboticist. PhD candidate at ETH Zürich
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Dexterous Manipulation</Badge>
              <Badge variant="secondary">Soft Robotics</Badge>
              <Badge variant="secondary">Robot Learning</Badge>
              <Badge variant="secondary">AI Research</Badge>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Working at the intersection of sensing, control, and learning for dexterous manipulation using soft robots. 
            Giving robots the kind of proprioception and feedback humans take for granted through modeling, 
            machine learning, and creative engineering.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-elegant">
              <a href="#portfolio" className="flex items-center gap-2">
                View Projects
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="mailto:bcangan@ethz.ch" className="flex items-center gap-2">
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
