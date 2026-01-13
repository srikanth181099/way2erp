import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Server, Sparkles, Zap, Database, Shield } from "lucide-react";

const products = [
  {
    id: "sap-hana-25",
    name: "SAP HANA 2.5",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    icon: Database,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Full HANA Stack", "Developer Keys", "24/7 Access", "No VPN Required"],
  },
  {
    id: "s4hana-2025",
    name: "SAP S/4HANA 2025",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: true,
    icon: Zap,
    gradient: "from-violet-500 to-purple-600",
    features: ["Latest Release", "SAP_ALL Profile", "Full EWM", "24/7 Access"],
  },
  {
    id: "s4hana-2023",
    name: "SAP S/4HANA 2023",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    icon: Server,
    gradient: "from-emerald-500 to-teal-500",
    features: ["SAP_ALL Profile", "Developer Keys", "Fiori Apps", "24/7 Access"],
  },
  {
    id: "bw4hana-bpc",
    name: "SAP BW/4HANA BPC 11 2021",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    icon: Database,
    gradient: "from-orange-500 to-amber-500",
    features: ["BPC Integration", "Full Analytics", "Developer Keys", "24/7 Access"],
  },
  {
    id: "grc-12",
    name: "SAP GRC 12 on S4HANA 2023",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    icon: Shield,
    gradient: "from-rose-500 to-pink-500",
    features: ["GRC 12 Suite", "Risk Management", "Access Control", "24/7 Access"],
  },
  {
    id: "businessobjects",
    name: "SAP BusinessObjects",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    icon: Sparkles,
    gradient: "from-indigo-500 to-blue-500",
    features: ["Full BO Stack", "Crystal Reports", "Web Intelligence", "24/7 Access"],
  },
  {
    id: "ewm-tm-po",
    name: "SAP EWM 9.5 | TM 9.5 | PO 7.5",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    icon: Server,
    gradient: "from-cyan-500 to-blue-500",
    features: ["Extended WM", "Transportation Mgmt", "Process Orchestration", "24/7 Access"],
  },
  {
    id: "solution-manager",
    name: "SAP Solution Manager 7.2",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    icon: Database,
    gradient: "from-fuchsia-500 to-purple-500",
    features: ["Full SolMan", "ChaRM", "Test Suite", "24/7 Access"],
  },
  {
    id: "fiori-gateway",
    name: "SAP FIORI / NW Gateway / MDG",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    icon: Zap,
    gradient: "from-lime-500 to-green-500",
    features: ["Fiori Apps", "Gateway Config", "MDG Setup", "24/7 Access"],
  },
  {
    id: "ehp8-ides",
    name: "SAP EHP8 IDES",
    monthlyPrice: 29,
    quarterlyPrice: 69,
    popular: false,
    icon: Server,
    gradient: "from-yellow-500 to-orange-500",
    features: ["IDES Data", "All Modules", "Developer Keys", "24/7 Access"],
  },
  {
    id: "is-retail",
    name: "SAP IS-Retail",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    icon: Database,
    gradient: "from-teal-500 to-emerald-500",
    features: ["Retail Module", "POS Integration", "Merchandise Mgmt", "24/7 Access"],
  },
  {
    id: "is-oil-gas",
    name: "SAP IS-Oil and Gas",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    icon: Zap,
    gradient: "from-amber-500 to-red-500",
    features: ["Oil & Gas Module", "HPM", "TSW", "24/7 Access"],
  },
  {
    id: "pi-po",
    name: "SAP PI || PO 7.5",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    icon: Server,
    gradient: "from-sky-500 to-indigo-500",
    features: ["Process Integration", "Orchestration", "Adapters", "24/7 Access"],
  },
  {
    id: "tm-ewm",
    name: "SAP TM 9.5 || EWM",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    icon: Database,
    gradient: "from-pink-500 to-rose-500",
    features: ["Transportation", "Extended WM", "Full Integration", "24/7 Access"],
  },
];

const Products = () => {
  const handlePayPal = (productName: string, price: number, period: string) => {
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=mascorpit@gmail.com&item_name=${encodeURIComponent(productName + " - " + period + " - Way2ERP")}&amount=${price}&currency_code=USD`;
    window.open(paypalUrl, "_blank");
  };

  return (
    <section id="products" className="py-16 md:py-24 relative overflow-hidden">
      {/* Colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            SAP Access Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Our SAP Systems
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional SAP access with developer keys and instant activation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card
                key={product.id}
                className={`relative flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group bg-card/80 backdrop-blur-sm ${
                  product.popular ? "ring-2 ring-primary shadow-xl shadow-primary/20" : "hover:shadow-primary/10"
                }`}
              >
                {product.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 shadow-lg">
                    ⭐ Most Popular
                  </Badge>
                )}
                
                {/* Gradient header bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${product.gradient} rounded-t-lg`} />
                
                <CardHeader className="pb-3 pt-5">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${product.gradient} shadow-lg`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-sm md:text-base leading-tight font-semibold">{product.name}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl border border-border/50 hover:bg-muted/70 transition-colors">
                      <span className="text-sm text-muted-foreground font-medium">1 Month</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-foreground">${product.monthlyPrice}</span>
                        <span className="text-xs text-muted-foreground">/mo</span>
                      </div>
                    </div>
                    <div className={`flex items-center justify-between p-3 rounded-xl bg-gradient-to-r ${product.gradient} bg-opacity-10 border-2 border-transparent bg-clip-padding`} style={{ background: `linear-gradient(white, white) padding-box, linear-gradient(to right, var(--tw-gradient-stops)) border-box` }}>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-foreground">3 Months</span>
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-accent/20 text-accent-foreground">SAVE</Badge>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-foreground">${product.quarterlyPrice}</span>
                        <span className="text-xs text-muted-foreground">/3mo</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs md:text-sm">
                        <div className={`p-0.5 rounded-full bg-gradient-to-r ${product.gradient}`}>
                          <Check className="h-2.5 w-2.5 text-white" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="flex gap-2 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 hover:bg-muted/80 transition-all"
                    onClick={() => handlePayPal(product.name, product.monthlyPrice, "1 Month")}
                  >
                    1 Month
                  </Button>
                  <Button
                    size="sm"
                    className={`flex-1 bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white border-0 shadow-lg transition-all hover:shadow-xl`}
                    onClick={() => handlePayPal(product.name, product.quarterlyPrice, "3 Months")}
                  >
                    3 Months
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
