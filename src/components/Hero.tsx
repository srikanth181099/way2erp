import { Button } from "@/components/ui/button";
import { Server, Shield, Zap, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Enterprise SAP & ERP
                <span className="text-primary block">System Access</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Get instant access to S/4HANA 2025 | BW/4HANA 2023 | BPC 11 On BW/4HANA | BPC 11 | BODS 4.2 | EWM TM | MDG 2023 | GRC 12 | ECC 6 EHP8 | SolMAN 7.2 | PO7.5 Professional training environments
              </p>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Dev Keys</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">No VPN</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/20 to-accent/30 rounded-2xl p-8 backdrop-blur">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] bg-gradient-to-b from-muted to-muted/50 rounded-lg border border-border shadow-lg flex items-center justify-center"
                  >
                    <Server className="h-8 w-8 text-primary/60" />
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-semibold">20+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
