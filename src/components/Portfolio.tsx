import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Youtube, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  video?: string;
  url?: string;
  tags: string[];
  category: string;
}

const projects: Project[] = [
  {
    title: "Dexterous Hand Policy Learning",
    description: "Tendon-driven hand trained in simulation with reinforcement learning and transferred to hardware for in-hand ball rolling.",
    video: "https://www.youtube.com/watch?v=YahsMhqNU8o",
    tags: ["Reinforcement Learning", "Sim-to-Real", "Tendon-Driven"],
    category: "ETH Research"
  },
  {
    title: "Soft Robot Proprioception",
    description: "Multi-tap resistive sensing combined with FEM-based modeling to estimate shape and forces of soft manipulators.",
    video: "https://www.youtube.com/watch?v=O9ShNYuJ7lA",
    tags: ["Sensing", "FEM Modeling", "Soft Robotics"],
    category: "ETH Research"
  },
  {
    title: "Markerless Aerial Grasping",
    description: "Autonomous aerial grasping with a drone-mounted soft gripper. Onboard segmentation and rapid grasp planning without object markers.",
    video: "https://www.youtube.com/watch?v=6hbhAT4l90w",
    tags: ["Computer Vision", "Autonomous Systems", "Aerial Robotics"],
    category: "ETH Research"
  },
  {
    title: "Faive Hand Dexterity",
    description: "Soft hand performing everyday tasks—pouring beer, solving Rubik's Cube, typing, playing piano and gently handling eggs.",
    video: "https://www.youtube.com/watch?v=D04BbNkEeQY",
    tags: ["Dexterous Manipulation", "Soft Robotics", "Multi-task"],
    category: "ETH Research"
  },
  {
    title: "Coupled Actuation for Tendon Robots",
    description: "Task-defined non-linear tendon coupling achieved via custom eccentric pulley shaping, enabling single-actuator control of multi-DOF systems.",
    video: "https://www.youtube.com/watch?v=snvoP92icfA",
    tags: ["Coupled Actuation", "Tendon-Driven", "Nonlinear"],
    category: "ETH Research"
  },
  {
    title: "Alfred Sous-Chef - Kitchen Automation",
    description: "Multi-robot motion planning and tool changing for automated food preparation. End-to-end salad assembly.",
    video: "https://www.youtube.com/watch?v=Wi8pfES5G4M",
    tags: ["Motion Planning", "Multi-Robot", "Food Automation"],
    category: "Dexai Robotics"
  },
  {
    title: "LePuppet - Emotional AI Robot",
    description: "Weekend hackathon finalist at the Mistral and Entrepreneurs First event in Paris: a generative-AI sock puppet robot that talks and moves with expressive, real-time sync.",
    video: "https://www.youtube.com/watch?v=syFgAS3iIds",
    tags: ["Generative AI", "HRI", "HuggingFace", "Mistral"],
    category: "Hackathon"
  },
  {
    title: "BRCKD.ai - Lego JARVIS",
    description: "Winner of the Mimic Robotics and OpenAI weekend hackathon in Zurich: bricked.ai, a voice-driven AI agent that turns spoken ideas into LEGO mosaics—planning, sanity-checking, and directing a robot arm to build them.",
    video: "https://www.youtube.com/watch?v=pa7wHZg9YcU",
    tags: ["Agentic AI", "OpenAI", "mimic", "Legos", "Jarvis"],
    category: "Hackathon"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Portfolio & Projects</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            A showcase of research projects, industry work, and hackathon creations spanning robotics, AI, and automation.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    {(project.video || project.url) && (
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={project.video ?? project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.video ? (
                            <Youtube className="w-4 h-4" />
                          ) : (
                            <ExternalLink className="w-4 h-4" />
                          )}
                        </a>
                      </Button>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
