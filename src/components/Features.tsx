import { Zap, Shield, Clock, Globe, Key, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Your account is activated immediately after payment. No waiting, start learning right away.",
  },
  {
    icon: Key,
    title: "Developer Keys",
    description: "All systems come with developer keys included for full customization and learning.",
  },
  {
    icon: Headphones,
    title: "24-Hour Support",
    description: "Guaranteed resolution to any ticket within 24 hours. We're here to help.",
  },
  {
    icon: Globe,
    title: "No VPN Required",
    description: "Easy access to all systems without VPN. Connect from anywhere in the world.",
  },
  {
    icon: Shield,
    title: "SAP_ALL Profile",
    description: "Full authorization with SAP_ALL profile for complete system access.",
  },
  {
    icon: Clock,
    title: "20+ Years Experience",
    description: "Trusted by professionals worldwide with over two decades of service.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Way2ERP?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide professional SAP training environments with everything you need to succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
