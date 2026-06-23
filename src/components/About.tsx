import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <Card className="shadow-elegant border-border/50">
            <CardContent className="p-8">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Building learning-based manipulation policies for humanoid systems at Flexion Robotics.
                  Roboticist with a PhD from ETH Zürich in dexterous manipulation, and model-based
                  proprioception and tactile sensing.
                </p>
                
                <p>
                  I have worked across academia, industry, and startups, from writing safety-critical software 
                  at Bosch and shipping production code at Dexai, to hacking together demos that got featured 
                  on Swiss national television and helped kick off a venture-backed startup. I enjoy building 
                  things that <em>feel</em> intuitive to users, to robots, or ideally, to both :)
                </p>
                
                <p>
                  Originally from Kanyakumari, at the southern tip of India, I've lived and worked in the U.S. 
                  and Switzerland. I try to learn the Feynman way: stay curious, ask simple questions, explain
                  ideas clearly, and say “I don't know” when I don't, so I can then find out.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Research Interests</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Dexterous Manipulation</li>
                  <li>Robot Learning</li>
                  <li>Model-based Sensing</li>
                  <li>Vision-based Reconstruction</li>
                  <li>Human-Robot Interaction</li>
                  <li>Path Planning</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Current Role</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">AI Engineer — VLA & Dexterous Manipulation</p>
                    <p className="text-sm text-muted-foreground">Flexion Robotics</p>
                    <p className="text-sm text-muted-foreground">Dec 2025 – Present</p>
                  </div>
                  <div>
                    <p className="font-medium">PhD, Soft Robotics Lab</p>
                    <p className="text-sm text-muted-foreground">ETH Zürich</p>
                    <p className="text-sm text-muted-foreground">Def. Nov 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
