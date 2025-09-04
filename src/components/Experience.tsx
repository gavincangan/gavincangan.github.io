import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "PhD, Robotics",
    institution: "ETH Zürich",
    year: "Expected 2025",
    location: "Zürich, Switzerland"
  },
  {
    degree: "M.S., Electrical Engineering",
    institution: "Virginia Tech",
    year: "2019",
    location: "Virginia, USA"
  },
  {
    degree: "B.Eng., Electrical and Electronics Engineering",
    institution: "Anna University (Govt. College of Technology, Coimbatore)",
    year: "2014",
    location: "Tamil Nadu, India"
  }
];

const experience = [
  {
    title: "Founding Roboticist/Consultant",
    company: "Mimic Robotics",
    period: "2024 - Present",
    type: "Part-Time",
    location: "Zürich, Switzerland"
  },
  {
    title: "PhD Candidate",
    company: "ETH Zürich - Soft Robotics Lab",
    period: "2021 - Present (Expected 2025)",
    type: "Research",
    location: "Zürich, Switzerland"
  },
  {
    title: "Robotics Engineer",
    company: "Dexai Robotics",
    period: "2019 - 2021",
    type: "Full-Time",
    location: "Boston, USA"
  },
  {
    title: "Research Assistant",
    company: "Virginia Tech (ML / Path Planning)",
    period: "2018 - 2019",
    type: "Research",
    location: "Virginia, USA"
  },
  {
    title: "Engineering Intern",
    company: "Virginia Tech Transportation Institute",
    period: "2018 (~4 months)",
    type: "Internship",
    location: "Virginia, USA"
  },
  {
    title: "Software Engineer",
    company: "Bosch",
    period: "2014 - 2017",
    type: "Full-Time",
    location: "Michigan, USA / Coimbatore, India"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="shadow-elegant">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-1">{edu.institution}</p>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{edu.location}</span>
                        <Badge variant="outline">{edu.year}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Work History</h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <Card key={index} className="shadow-elegant">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <Badge variant={exp.type === "Research" ? "default" : "secondary"} className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium mb-1">{exp.company}</p>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{exp.location}</span>
                        <span>{exp.period}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;