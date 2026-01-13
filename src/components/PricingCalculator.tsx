import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Check, Zap } from "lucide-react";

const subscriptionPlans = [
  { id: "1-month", name: "1 Month", price: 50, savings: null },
  { id: "3-months", name: "3 Months", price: 130, savings: "Save $20" },
  { id: "6-months", name: "6 Months", price: 250, savings: "Save $50" },
  { id: "1-year", name: "1 Year", price: 450, savings: "Save $150" },
];

const PricingCalculator = () => {
  const handlePayPal = (planName: string, price: number) => {
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=mascorpit@gmail.com&item_name=${encodeURIComponent(planName + " Subscription - Way2ERP")}&amount=${price}&currency_code=USD`;
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
            💰 Subscription Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your subscription duration and save more with longer commitments
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {subscriptionPlans.map((plan, index) => (
            <Card 
              key={plan.id} 
              className={`relative flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                index === 3 ? "border-primary shadow-lg ring-2 ring-primary/20" : ""
              }`}
            >
              {plan.savings && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white">
                  {plan.savings}
                </Badge>
              )}
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-3 p-3 rounded-full bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center justify-between gap-4">
                <div className="text-center">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.id === "1-month" ? "per month" : "total"}
                  </p>
                </div>
                <Button 
                  className="w-full" 
                  variant={index === 3 ? "default" : "outline"}
                  onClick={() => handlePayPal(plan.name, plan.price)}
                >
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
