import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const systems = [
  { id: "sap-hana-25", name: "SAP HANA 2.5", monthlyPrice: 49, quarterlyPrice: 99 },
  { id: "s4hana-2025", name: "SAP S/4HANA 2025", monthlyPrice: 49, quarterlyPrice: 99 },
  { id: "s4hana-2023", name: "SAP S/4HANA 2023", monthlyPrice: 49, quarterlyPrice: 99 },
  { id: "bw4hana-bpc", name: "SAP BW/4HANA BPC 11 2021", monthlyPrice: 49, quarterlyPrice: 99 },
  { id: "grc-12", name: "SAP GRC 12 on S4HANA 2023", monthlyPrice: 49, quarterlyPrice: 99 },
  { id: "businessobjects", name: "SAP BusinessObjects", monthlyPrice: 49, quarterlyPrice: 99 },
  { id: "ewm-tm-po", name: "SAP EWM 9.5 | TM 9.5 | PO 7.5", monthlyPrice: 49, quarterlyPrice: 99 },
  { id: "solution-manager", name: "SAP Solution Manager 7.2", monthlyPrice: 49, quarterlyPrice: 99 },
  { id: "fiori-gateway", name: "SAP FIORI / NW Gateway / MDG", monthlyPrice: 49, quarterlyPrice: 99 },
  { id: "ehp8-ides", name: "SAP EHP8 IDES", monthlyPrice: 29, quarterlyPrice: 69 },
  { id: "is-retail", name: "SAP IS-Retail", monthlyPrice: 49, quarterlyPrice: 99 },
  { id: "is-oil-gas", name: "SAP IS-Oil and Gas", monthlyPrice: 49, quarterlyPrice: 99 },
  { id: "pi-po", name: "SAP PI || PO 7.5", monthlyPrice: 49, quarterlyPrice: 99 },
  { id: "tm-ewm", name: "SAP TM 9.5 || EWM", monthlyPrice: 49, quarterlyPrice: 99 },
  { id: "dedicated", name: "Dedicated Server", monthlyPrice: 499, quarterlyPrice: 1299 },
];

const PricingCalculator = () => {
  const [selectedSystem, setSelectedSystem] = useState("");
  const [days, setDays] = useState([30]);
  const [users, setUsers] = useState([1]);

  const system = systems.find((s) => s.id === selectedSystem);
  
  // Calculate price based on duration
  const calculatePrice = () => {
    if (!system) return 0;
    const months = days[0] / 30;
    
    // Use quarterly pricing if 3+ months
    if (months >= 3) {
      const quarters = Math.floor(months / 3);
      const remainingMonths = months % 3;
      return Math.round((quarters * system.quarterlyPrice) + (remainingMonths * system.monthlyPrice)) * users[0];
    }
    
    // Otherwise use monthly pricing pro-rated
    const dailyRate = system.monthlyPrice / 30;
    return Math.round(dailyRate * days[0] * users[0]);
  };

  const totalPrice = calculatePrice();

  const handlePayPal = () => {
    if (!system) return;
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=mascorpit@gmail.com&item_name=${encodeURIComponent(system.name + " - " + days[0] + " days - " + users[0] + " user(s) - Way2ERP")}&amount=${totalPrice}&currency_code=USD`;
    window.open(paypalUrl, "_blank");
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Zap className="h-3 w-3 mr-1" />
            Flexible Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            💰 Price Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your custom pricing based on system, duration, and number of users
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Calculate Your Price
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Select System</Label>
              <Select value={selectedSystem} onValueChange={setSelectedSystem}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a system..." />
                </SelectTrigger>
                <SelectContent>
                  {systems.map((sys) => (
                    <SelectItem key={sys.id} value={sys.id}>
                      {sys.name} - ${sys.monthlyPrice}/mo | ${sys.quarterlyPrice}/3mo
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Duration: {days[0]} days ({(days[0] / 30).toFixed(1)} months)</Label>
              <Slider
                value={days}
                onValueChange={setDays}
                min={7}
                max={365}
                step={1}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>7 days</span>
                <span>1 year</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Number of Users: {users[0]}</Label>
              <Slider
                value={users}
                onValueChange={setUsers}
                min={1}
                max={10}
                step={1}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 user</span>
                <span>10 users</span>
              </div>
            </div>

            {selectedSystem && (
              <div className="p-6 bg-primary/5 rounded-lg text-center border border-primary/20">
                <p className="text-sm text-muted-foreground mb-2">Total Price</p>
                <p className="text-5xl font-bold text-primary">${totalPrice}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {system?.name} • {days[0]} days • {users[0]} user(s)
                </p>
                {days[0] >= 90 && (
                  <Badge className="mt-3 bg-green-500 text-white">
                    Quarterly discount applied!
                  </Badge>
                )}
              </div>
            )}

            <Button
              className="w-full"
              size="lg"
              disabled={!selectedSystem}
              onClick={handlePayPal}
            >
              Pay with PayPal
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingCalculator;
