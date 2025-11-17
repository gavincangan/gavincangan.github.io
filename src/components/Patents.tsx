import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Patent {
  id: string;
  url: string;
  summary: string; // short, human-friendly title
  affiliation?: string;
}

const patents: Patent[] = [
  {
    id: "WO2025027207A1",
    url: "https://patents.google.com/patent/WO2025027207A1/en",
    summary: "Differential tendon-driven rolling-contact finger joint",
    affiliation: "ETH Zürich",
  },
  {
    id: "EP4501556A1",
    url: "https://patents.google.com/patent/EP4501556A1/en",
    summary: "Non-planar rolling-contact finger joint design",
    affiliation: "ETH Zürich",
  },
];

const Patents = () => {
  return (
    <section id="patents" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Patents</h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Selected patent publications and applications.
          </p>

          <div className="space-y-4">
            {patents.map((pat, index) => (
              <Card key={index} className="shadow-elegant">
                <CardContent className="p-6 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {pat.affiliation && (
                        <Badge variant="secondary">{pat.affiliation}</Badge>
                      )}
                      <Badge variant="outline">{pat.id.startsWith("WO") ? "WO" : pat.id.startsWith("EP") ? "EP" : "Patent"}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold truncate">
                      {pat.summary}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 truncate">
                      ID: {pat.id}
                    </p>
                  </div>
                  <Button variant="outline" asChild>
                    <a
                      href={pat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patents;
