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
import { Calculator } from "lucide-react";

const systems = [
  { id: "s4hana-2023", name: "S/4 HANA 2023", basePrice: 49 },
  { id: "s4hana-2022", name: "S/4 HANA 2022", basePrice: 45 },
  { id: "ecc-ehp8", name: "ECC IDES EHP8", basePrice: 39 },
  { id: "bw-75", name: "BW 7.5", basePrice: 35 },
  { id: "crm-ehp2", name: "CRM IDES EHP2", basePrice: 35 },
  { id: "s4hana-1909", name: "S/4 HANA 1909", basePrice: 42 },
  { id: "dedicated", name: "Dedicated Server", basePrice: 199 },
];

const PricingCalculator = () => {
  const [selectedSystem, setSelectedSystem] = useState("");
  const [days, setDays] = useState([30]);
  const [users, setUsers] = useState([1]);

  const system = systems.find((s) => s.id === selectedSystem);
  const dailyRate = system ? system.basePrice / 30 : 0;
  const totalPrice = Math.round(dailyRate * days[0] * users[0]);

  const handlePayPal = () => {
    if (!system) return;
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=mascorpit@gmail.com&item_name=${encodeURIComponent(system.name + " - " + days[0] + " days - " + users[0] + " user(s) - Way2ERP")}&amount=${totalPrice}&currency_code=USD`;
    window.open(paypalUrl, "_blank");
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Price Calculator
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
                      {sys.name} - ${sys.basePrice}/month
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Duration: {days[0]} days</Label>
              <Slider
                value={days}
                onValueChange={setDays}
                min={7}
                max={365}
                step={1}
                className="py-4"
              />
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
            </div>

            {selectedSystem && (
              <div className="p-6 bg-accent/50 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-2">Total Price</p>
                <p className="text-4xl font-bold text-foreground">${totalPrice}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {system?.name} • {days[0]} days • {users[0]} user(s)
                </p>
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
