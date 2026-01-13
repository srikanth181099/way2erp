import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Server, Sparkles } from "lucide-react";

const products = [
  {
    id: "sap-hana-25",
    name: "SAP HANA 2.5",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    features: ["Full HANA Stack", "Developer Keys", "24/7 Access", "No VPN Required"],
  },
  {
    id: "s4hana-2025",
    name: "SAP S/4HANA 2025",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: true,
    features: ["Latest Release", "SAP_ALL Profile", "Full EWM", "24/7 Access"],
  },
  {
    id: "s4hana-2023",
    name: "SAP S/4HANA 2023",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    features: ["SAP_ALL Profile", "Developer Keys", "Fiori Apps", "24/7 Access"],
  },
  {
    id: "bw4hana-bpc",
    name: "SAP BW/4HANA BPC 11 2021",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    features: ["BPC Integration", "Full Analytics", "Developer Keys", "24/7 Access"],
  },
  {
    id: "grc-12",
    name: "SAP GRC 12 on S4HANA 2023",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    features: ["GRC 12 Suite", "Risk Management", "Access Control", "24/7 Access"],
  },
  {
    id: "businessobjects",
    name: "SAP BusinessObjects",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    features: ["Full BO Stack", "Crystal Reports", "Web Intelligence", "24/7 Access"],
  },
  {
    id: "ewm-tm-po",
    name: "SAP EWM 9.5 | TM 9.5 | PO 7.5",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    features: ["Extended WM", "Transportation Mgmt", "Process Orchestration", "24/7 Access"],
  },
  {
    id: "solution-manager",
    name: "SAP Solution Manager 7.2",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    features: ["Full SolMan", "ChaRM", "Test Suite", "24/7 Access"],
  },
  {
    id: "fiori-gateway",
    name: "SAP FIORI / NW Gateway / MDG",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    features: ["Fiori Apps", "Gateway Config", "MDG Setup", "24/7 Access"],
  },
  {
    id: "ehp8-ides",
    name: "SAP EHP8 IDES",
    monthlyPrice: 29,
    quarterlyPrice: 69,
    popular: false,
    features: ["IDES Data", "All Modules", "Developer Keys", "24/7 Access"],
  },
  {
    id: "is-retail",
    name: "SAP IS-Retail",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    features: ["Retail Module", "POS Integration", "Merchandise Mgmt", "24/7 Access"],
  },
  {
    id: "is-oil-gas",
    name: "SAP IS-Oil and Gas",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    features: ["Oil & Gas Module", "HPM", "TSW", "24/7 Access"],
  },
  {
    id: "pi-po",
    name: "SAP PI || PO 7.5",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    features: ["Process Integration", "Orchestration", "Adapters", "24/7 Access"],
  },
  {
    id: "tm-ewm",
    name: "SAP TM 9.5 || EWM",
    monthlyPrice: 49,
    quarterlyPrice: 99,
    popular: false,
    features: ["Transportation", "Extended WM", "Full Integration", "24/7 Access"],
  },
];

const Products = () => {
  const handlePayPal = (productName: string, price: number, period: string) => {
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=mascorpit@gmail.com&item_name=${encodeURIComponent(productName + " - " + period + " - Way2ERP")}&amount=${price}&currency_code=USD`;
    window.open(paypalUrl, "_blank");
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Sparkles className="h-3 w-3 mr-1" />
            SAP Access Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our SAP Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional SAP access with developer keys and instant activation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`relative flex flex-col transition-all duration-300 hover:shadow-xl ${
                product.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""
              }`}
            >
              {product.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <Server className="h-5 w-5 text-primary flex-shrink-0" />
                  <CardTitle className="text-base leading-tight">{product.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">1 Month</span>
                    <div>
                      <span className="text-2xl font-bold text-foreground">${product.monthlyPrice}</span>
                      <span className="text-xs text-muted-foreground">/mo</span>
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <span className="text-sm font-medium text-primary">3 Months</span>
                    <div>
                      <span className="text-2xl font-bold text-primary">${product.quarterlyPrice}</span>
                      <span className="text-xs text-muted-foreground">/3mo</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs">
                      <Check className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => handlePayPal(product.name, product.monthlyPrice, "1 Month")}
                >
                  1 Month
                </Button>
                <Button
                  size="sm"
                  className="flex-1"
                  onClick={() => handlePayPal(product.name, product.quarterlyPrice, "3 Months")}
                >
                  3 Months
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
