import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: 199,
    description: "Ideal for individuals or small teams getting started.",
    buttonText: "Contact Us",
    benefitList: [
      "1 Developer Account",
      "Basic API Access",
      "Community Forum Access",
      "Email Support"
    ]
  },
  {
    title: "Professional",
    popular: 1,
    price: 499,
    description: "Great for growing teams with more advanced needs.",
    buttonText: "Contact Us",
    benefitList: [
      "5 Developer Accounts",
      "Full API Access",
      "Priority Support",
      "Monthly Webinars"
    ]
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 999,
    description: "For large-scale projects and enterprise-level solutions.",
    buttonText: "Contact Us",
    benefitList: [
      "Unlimited Developer Accounts",
      "Custom SLA",
      "Dedicated Account Manager",
      "24/7 Phone Support"
    ]
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Pricing That Makes Sense
      </h2>
      {/* <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis.
      </h3> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="default" className="text-sm text-white">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-muted-foreground text-sm">
                  Starting from:{" "}
                </span>
                <br />
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
