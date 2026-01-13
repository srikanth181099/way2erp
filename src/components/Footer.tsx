import { Server } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <Server className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">Way2ERP</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Professional SAP training environments with instant access and developer keys.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#products" className="hover:text-primary transition-colors">S/4 HANA 2023</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">S/4 HANA 2022</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">ECC IDES EHP8</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">BW 7.5</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">CRM IDES EHP2</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Way2ERP.com. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Payment secured by PayPal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
