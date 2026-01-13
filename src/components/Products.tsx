import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Server } from "lucide-react";

const products = [
  {
    id: "s4hana-2023",
    name: "S/4 HANA 2023",
    description: "Latest SAP S/4HANA with full functionality and SAP_ALL profile",
    price: 49,
    period: "month",
    popular: true,
    features: ["SAP_ALL Profile", "Developer Keys", "Full EWM", "24/7 Access", "No VPN Required"],
  },
  {
    id: "s4hana-2022",
    name: "S/4 HANA 2022",
    description: "Stable S/4HANA version with SAP_ALL profile included",
    price: 45,
    period: "month",
    popular: false,
    features: ["SAP_ALL Profile", "Developer Keys", "Fiori Apps", "24/7 Access", "No VPN Required"],
  },
  {
    id: "ecc-ehp8",
    name: "ECC IDES EHP8 2019",
    description: "Classic ECC system with IDES data for comprehensive training",
    price: 39,
    period: "month",
    popular: false,
    features: ["IDES Data", "Developer Keys", "All Modules", "24/7 Access", "No VPN Required"],
  },
  {
    id: "bw-75",
    name: "BW 7.5",
    description: "SAP Business Warehouse for analytics and reporting training",
    price: 35,
    period: "month",
    popular: false,
    features: ["Full BW Stack", "Developer Keys", "Sample Data", "24/7 Access", "No VPN Required"],
  },
  {
    id: "crm-ehp2",
    name: "CRM IDES EHP2",
    description: "SAP CRM system with IDES version for sales and marketing training",
    price: 35,
    period: "month",
    popular: false,
    features: ["IDES Data", "Developer Keys", "Full CRM", "24/7 Access", "No VPN Required"],
  },
  {
    id: "s4hana-1909",
    name: "S/4 HANA 1909",
    description: "Non-IDES S/4HANA with SAP_ALL profile for development",
    price: 42,
    period: "month",
    popular: false,
    features: ["SAP_ALL Profile", "Developer Keys", "Clean System", "24/7 Access", "No VPN Required"],
  },
  {
    id: "s4hana-2021",
    name: "S/4 HANA 2021",
    description: "S/4HANA 2021 with SAP_ALL profile and latest patches",
    price: 45,
    period: "month",
    popular: false,
    features: ["SAP_ALL Profile", "Developer Keys", "Latest Patches", "24/7 Access", "No VPN Required"],
  },
  {
    id: "s4hana-2020",
    name: "S/4 HANA 2020",
    description: "Stable S/4HANA 2020 with SAP_ALL profile",
    price: 42,
    period: "month",
    popular: false,
    features: ["SAP_ALL Profile", "Developer Keys", "Fiori Apps", "24/7 Access", "No VPN Required"],
  },
  {
    id: "s4hana-1610",
    name: "S/4 HANA 1610 IDES",
    description: "S/4HANA with IDES data and SAP_ALL profile",
    price: 39,
    period: "month",
    popular: false,
    features: ["IDES Data", "SAP_ALL Profile", "Developer Keys", "24/7 Access", "No VPN Required"],
  },
  {
    id: "dedicated-server",
    name: "Dedicated Server",
    description: "Your own dedicated server with custom configuration",
    price: 199,
    period: "month",
    popular: false,
    features: ["Dedicated Resources", "Custom Config", "Root Access", "24/7 Support", "Full Control"],
  },
];

const Products = () => {
  const handlePayPal = (productName: string, price: number) => {
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=mascorpit@gmail.com&item_name=${encodeURIComponent(productName + " - Way2ERP")}&amount=${price}&currency_code=USD`;
    window.open(paypalUrl, "_blank");
  };

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our SAP Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of SAP systems with developer keys and instant activation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`relative flex flex-col ${product.popular ? "border-primary shadow-lg" : ""}`}
            >
              {product.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Server className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">${product.price}</span>
                  <span className="text-muted-foreground">/{product.period}</span>
                </div>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={product.popular ? "default" : "outline"}
                  onClick={() => handlePayPal(product.name, product.price)}
                >
                  Buy with PayPal
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
