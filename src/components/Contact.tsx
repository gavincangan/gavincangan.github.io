import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Globe, Github, Twitter, GraduationCap, MessageSquare } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "bcangan@ethz.ch",
    href: "mailto:bcangan@ethz.ch",
    icon: Mail
  },
  {
    label: "Website",
    value: "bgav.in",
    href: "https://bgav.in/",
    icon: Globe
  },
  {
    label: "LinkedIn",
    value: "@cangan",
    href: "https://www.linkedin.com/in/cangan/",
    icon: ExternalLink
  },
  {
    label: "GitHub",
    value: "@gavincangan",
    href: "https://github.com/gavincangan",
    icon: Github
  },
  {
    label: "Twitter/X",
    value: "@gavincangan",
    href: "https://x.com/gavincangan",
    icon: Twitter
  },
  {
    label: "Google Scholar",
    value: "Research Profile",
    href: "https://scholar.google.com/citations?user=CJVIl-0AAAAJ&hl=en",
    icon: GraduationCap
  },
  {
    label: "Anonymous Feedback",
    value: "feedback.bgav.in",
    href: "https://feedback.bgav.in/",
    icon: MessageSquare
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Interested in robotics research, collaboration opportunities, or just want to chat about technology? 
            I'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {contacts.map((contact, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <a 
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-left"
                  >
                    <contact.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-semibold text-foreground">{contact.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="shadow-elegant bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Currently Based</h3>
              <p className="text-lg mb-2">🇨🇭 Zürich, Switzerland</p>
              <p className="text-muted-foreground mb-6">
                Originally from Kanyakumari, India 🇮🇳 • Previously lived in Boston, USA 🇺🇸
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90">
                <a href="mailto:bcangan@ethz.ch" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;