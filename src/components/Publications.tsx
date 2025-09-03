import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Autonomous marker-less rapid aerial grasping",
    authors: "E. Bauer, B. G. Cangan, and R. K. Katzschmann",
    venue: "2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    year: "2023",
    type: "Conference"
  },
  {
    title: "Vision-controlled jetting for composite systems and robots",
    authors: "T. J. Buchner, S. Rogler, S. Weirich, Y. Armati, B. G. Cangan, et al.",
    venue: "Nature",
    year: "2023",
    type: "Journal"
  },
  {
    title: "Getting the ball rolling: Learning a dexterous policy for a biomimetic tendon-driven hand with rolling contact joints",
    authors: "Y. Toshimitsu, B. Forrai, B. G. Cangan, U. Steger, M. Knecht, S. Weirich, and R. K. Katzschmann",
    venue: "2023 IEEE-RAS 22nd International Conference on Humanoid Robots (Humanoids)",
    year: "2023",
    type: "Conference"
  },
  {
    title: "Multi-tap resistive sensing and fem modeling enables shape and force estimation in soft robots",
    authors: "S. Tian, B. G. Cangan, S. E. Navarro, A. Beger, C. Duriez, and R. K. Katzschmann",
    venue: "IEEE Robotics and Automation Letters",
    year: "2023",
    type: "Journal"
  },
  {
    title: "Task-defined pulley design for nonlinearly coupled tendon-driven actuation",
    authors: "W. Zhang†, B. G. Cangan†, T. Buchner, A. M. Kübler, R. Asmus, and R. K. Katzschmann",
    venue: "2024 7th IEEE-RAS International Conference on Soft Robotics (RoboSoft)",
    year: "2024",
    type: "Conference"
  },
  {
    title: "Vision-based online key point estimation of deformable robots",
    authors: "H. Zheng, S. Pinzello, B. G. Cangan, T. J. Buchner, and R. K. Katzschmann",
    venue: "Advanced Intelligent Systems",
    year: "2024",
    type: "Journal"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Publications</h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            † indicates shared first/equal contribution. For full list, visit my{" "}
            <a 
              href="https://scholar.google.com/citations?user=CJVIl-0AAAAJ&hl=en" 
              className="text-primary hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>.
          </p>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant={pub.type === "Journal" ? "default" : "secondary"}>
                      {pub.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-medium">
                      {pub.year}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 leading-tight">
                    {pub.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {pub.authors}
                  </p>
                  
                  <p className="text-sm font-medium text-primary">
                    {pub.venue}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://scholar.google.com/citations?user=CJVIl-0AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                View Full Publication List
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;